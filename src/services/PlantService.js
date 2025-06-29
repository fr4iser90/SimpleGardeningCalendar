import { openDB } from 'idb';
import { DB_NAME, DB_VERSION } from '../core/db/connection.js';
import { getPlantDataForEnvironment, validatePlantingDate } from '../core/db/plants.js';
import { getTranslatedPlantData } from '../core/i18n/index.js';
import { createIntelligentPlantingEvents } from '../core/db/IntelligentEventSystem.js';
import { getPhaseEmoji, getPlantCategoryName, calculatePhaseScheduleDays, calculatePhaseScheduleStartEnd } from '../utils/plantUtils.js';
import { formatDate } from '../utils/dateUtils.js';
import { validatePlantingDate as validatePlantingDateUtil } from '../utils/validators.js';
import { getPlantRegistry } from '../core/db/plants/index.js';
import { deleteAllPlantingEvents } from '../core/db/events.js';
import { t } from '../core/i18n/index.js';
import { getEnvironmentKey } from '../components/modals/PlantingForm/PlantingFormUtils.js';

/**
 * Plant Service
 * Handles all plant and planting-related business logic and operations
 */

// Get all plantings
export async function getAllPlantings() {
  const db = await openDB(DB_NAME, DB_VERSION);
  return await db.getAll('plantings');
}

// Get active plantings
export async function getActivePlantings() {
  const db = await openDB(DB_NAME, DB_VERSION);
  return await db.getAllFromIndex('plantings', 'status', 'active');
}

// Get planting by ID
export async function getPlanting(plantingId) {
  const db = await openDB(DB_NAME, DB_VERSION);
  return await db.get('plantings', plantingId);
}

// Add a new planting with all associated events
export async function addPlanting(plantType, startDate, location = 'Default Garden', customName = null, reminderOptions = {}, customPhaseDurations = {}, calendarId = null, environment = 'outdoor') {
  let normalizedEnvironment = getEnvironmentKey(environment);
  const validEnvironments = ['indoor', 'outdoor', 'greenhouse'];
  if (!validEnvironments.includes(normalizedEnvironment)) {
    const errMsg = `❌ [addPlanting] INVALID ENVIRONMENT VALUE: ${environment} → ${normalizedEnvironment}`;
    console.error(errMsg);
    throw new Error(errMsg);
  }
  console.log('🌱 [addPlanting] Starting with:', { plantType, startDate, location, customName, environment, normalizedEnvironment });
  
  const plantData = await getTranslatedPlantData(plantType);
  
  console.log('🌱 [addPlanting] Raw plant data:', plantData);
  
  if (!plantData) {
    throw new Error(`Plant type ${plantType} not found in database`);
  }
  
  console.log('🌱 [addPlanting] Plant data loaded:', { 
    name: plantData.name, 
    category: plantData.category,
    hasEnvironments: !!plantData.environments,
    environmentKeys: Object.keys(plantData.environments || {}),
    selectedEnvironment: normalizedEnvironment
  });
  
  // Validate planting date - temporarily disabled due to signature mismatch
  // const validationResult = validatePlantingDateUtil(plantType, startDate);
  // if (!validationResult.isValid) {
  //   throw new Error(`Invalid planting date: ${validationResult.reason}`);
  // }

  // Hole die Phasen aus dem RICHTIGEN Environment basierend auf der Auswahl
  const envPhases = plantData.environments?.[normalizedEnvironment]?.phases || plantData.environments?.outdoor?.phases || plantData.environments?.indoor?.phases || plantData.phases || {};
  
  console.log('🌱 [addPlanting] Environment phases found for', normalizedEnvironment, ':', envPhases);
  console.log('🌱 [addPlanting] Available environments:', Object.keys(plantData.environments || {}));

  // Prüfe, ob mindestens eine Phase start/end hat
  const hasStartEnd = Object.values(envPhases).some(phase => phase.start && phase.end);
  
  console.log('🌱 [addPlanting] Phase structure check:', {
    hasStartEnd,
    phaseCount: Object.keys(envPhases).length,
    phasesWithStartEnd: Object.entries(envPhases).filter(([name, phase]) => phase.start && phase.end).map(([name]) => name)
  });

  let phases;
  if (hasStartEnd) {
    // Nutze das aktuelle Jahr oder das Jahr des Startdatums
    const year = new Date(startDate).getFullYear();
    console.log('🌱 [addPlanting] Using START/END logic for year:', year);
    phases = calculatePhaseScheduleStartEnd(envPhases, year, startDate);
  } else {
    console.log('🌱 [addPlanting] Using DAYS logic with startDate:', startDate);
    phases = calculatePhaseScheduleDays(envPhases, startDate);
  }

  console.log('🌱 [addPlanting] Calculated phases:', phases);

  // Berechne das Abschlussdatum (letztes Enddatum oder days-basiert)
  let completionDate;
  if (hasStartEnd) {
    // Finde das späteste Enddatum
    const endDates = phases.map(p => p.endDate ? new Date(p.endDate) : null).filter(Boolean);
    completionDate = endDates.length > 0 ? new Date(Math.max(...endDates.map(d => d.getTime()))) : new Date(startDate);
    console.log('🌱 [addPlanting] Completion date (start/end):', completionDate.toISOString().split('T')[0]);
  } else {
    let totalDays = phases.reduce((sum, p) => sum + (p.days || 0), 0);
    completionDate = new Date(startDate);
    completionDate.setDate(completionDate.getDate() + totalDays);
    console.log('🌱 [addPlanting] Completion date (days):', completionDate.toISOString().split('T')[0], 'totalDays:', totalDays);
  }

  // --- NEU: Intelligente Kalenderzuordnung bei Option 2 (areas) ---
  const localCalendarsSetting = JSON.parse(localStorage.getItem('localCalendarsSetting') || '{}');
  if (localCalendarsSetting.type === 'areas') {
    // Hole alle lokalen Kalender
    const { getAllLocalCalendars } = await import('../core/db/calendars.js');
    const calendars = await getAllLocalCalendars();
    let category = plantData.category;
    if (Array.isArray(category)) {
      category = category.join(',').toLowerCase();
    } else {
      category = (category || '').toLowerCase();
    }
    // Mapping wie in migrateEventsToNewOrganization
    let matchedCal = null;
    if (category.includes('vegetable')) {
      matchedCal = calendars.find(cal => cal.name === t('calendar.vegetables'));
    } else if (category.includes('herb')) {
      matchedCal = calendars.find(cal => cal.name === t('calendar.herbs'));
    } else if (category.includes('flower')) {
      matchedCal = calendars.find(cal => cal.name === t('calendar.ornamental'));
    } else if (category.includes('fruit')) {
      matchedCal = calendars.find(cal => cal.name === t('calendar.fruits'));
    }
    if (matchedCal) {
      calendarId = matchedCal.id;
      console.log('🌱 [addPlanting] Matched calendar:', matchedCal.name, matchedCal.id);
    }
  }
  // --- ENDE NEU ---

  // Create planting record
  const planting = {
    plantType,
    plantName: plantData.name,
    displayName: customName || plantData.name,
    customName: customName,
    category: plantData.category || 'Other',
    environment: normalizedEnvironment,
    location,
    startDate: startDate,
    completionDate: completionDate.toISOString().split('T')[0],
    phases,
    currentPhase: phases[0]?.name || null,
    status: 'active',
    notes: [],
    legalNote: plantData.legalNote || null,
    reminderOptions,
    customPhaseDurations,
    calendarId
  };
  
  console.log('🌱 [addPlanting] Final planting object:', {
    plantName: planting.plantName,
    startDate: planting.startDate,
    completionDate: planting.completionDate,
    currentPhase: planting.currentPhase,
    phaseCount: planting.phases.length
  });
  
  // Add planting to database
  const db = await openDB(DB_NAME, DB_VERSION);
  const tx = db.transaction('plantings', 'readwrite');
  const plantingId = await tx.store.add(planting);
  await tx.done;
  
  console.log('🌱 [addPlanting] Planting saved to DB with ID:', plantingId);
  
  // Add the ID to the planting object for event creation
  planting.id = plantingId;
  
  // Create all associated events
  console.log('🌱 [addPlanting] Creating intelligent events...');
  await createIntelligentPlantingEvents(planting, plantData, phases, completionDate.toISOString(), reminderOptions);
  
  console.log('🌱 [addPlanting] Planting creation completed successfully!');
  return { plantingId, calendarId };
}

// Update planting status
export async function updatePlantingStatus(plantingId, status) {
  const db = await openDB(DB_NAME, DB_VERSION);
  const tx = db.transaction('plantings', 'readwrite');
  const planting = await tx.store.get(plantingId);
  
  if (planting) {
    planting.status = status;
    await tx.store.put(planting);
  }
  
  await tx.done;
  return planting;
}

// Update planting's current phase
export async function updatePlantingPhase(plantingId, phase) {
  const db = await openDB(DB_NAME, DB_VERSION);
  const tx = db.transaction('plantings', 'readwrite');
  const planting = await tx.store.get(plantingId);
  
  if (planting) {
    planting.currentPhase = phase;
    await tx.store.put(planting);
  }
  
  await tx.done;
  return planting;
}

// Update planting display name
export async function updatePlantingDisplayName(plantingId, displayName) {
  const db = await openDB(DB_NAME, DB_VERSION);
  const tx = db.transaction('plantings', 'readwrite');
  const planting = await tx.store.get(plantingId);
  
  if (planting) {
    planting.displayName = displayName;
    planting.customName = displayName !== planting.plantName ? displayName : null;
    await tx.store.put(planting);
  }
  
  await tx.done;
  return planting;
}

// Delete a planting and all associated events and notes
export async function deletePlantingAndEvents(plantingId) {
  const db = await openDB(DB_NAME, DB_VERSION);
  
  try {
    // Delete all events
    await deleteAllPlantingEvents(plantingId);
    
    // Delete all notes
    const notesTx = db.transaction('plantNotes', 'readwrite');
    const notes = await notesTx.store.index('plantingId').getAll(plantingId);
    for (const note of notes) {
      await notesTx.store.delete(note.id);
    }
    await notesTx.done;
    
    // Delete the planting record
    const plantingTx = db.transaction('plantings', 'readwrite');
    await plantingTx.store.delete(plantingId);
    await plantingTx.done;
    
    return true;
  } catch (error) {
    console.error('Error deleting planting and events:', error);
    throw error;
  }
}

// Get plantings by category
export async function getPlantingsByCategory(category) {
  const db = await openDB(DB_NAME, DB_VERSION);
  return await db.getAllFromIndex('plantings', 'category', category);
}

// Get plantings by status
export async function getPlantingsByStatus(status) {
  const db = await openDB(DB_NAME, DB_VERSION);
  return await db.getAllFromIndex('plantings', 'status', status);
}

// Get plantings by date range
export async function getPlantingsByDateRange(startDate, endDate) {
  const db = await openDB(DB_NAME, DB_VERSION);
  const allPlantings = await db.getAll('plantings');
  
  return allPlantings.filter(planting => {
    const plantingDate = new Date(planting.startDate);
    return plantingDate >= new Date(startDate) && plantingDate <= new Date(endDate);
  });
}

// Search plantings by name or plant type
export async function searchPlantings(query) {
  const db = await openDB(DB_NAME, DB_VERSION);
  const allPlantings = await db.getAll('plantings');
  const lowerQuery = query.toLowerCase();
  
  return allPlantings.filter(planting => 
    planting.plantName.toLowerCase().includes(lowerQuery) ||
    planting.displayName.toLowerCase().includes(lowerQuery) ||
    planting.plantType.toLowerCase().includes(lowerQuery) ||
    planting.location.toLowerCase().includes(lowerQuery)
  );
}

// Get planting statistics
export async function getPlantingStatistics() {
  const db = await openDB(DB_NAME, DB_VERSION);
  const allPlantings = await db.getAll('plantings');
  
  const stats = {
    total: allPlantings.length,
    active: 0,
    completed: 0,
    byCategory: {},
    byStatus: {}
  };
  
  allPlantings.forEach(planting => {
    // Count by status
    stats.byStatus[planting.status] = (stats.byStatus[planting.status] || 0) + 1;
    
    if (planting.status === 'active') stats.active++;
    if (planting.status === 'completed') stats.completed++;
    
    // Count by category
    stats.byCategory[planting.category] = (stats.byCategory[planting.category] || 0) + 1;
  });
  
  return stats;
}

// Update multiple plantings at once
export async function batchUpdatePlantings(updates) {
  const db = await openDB(DB_NAME, DB_VERSION);
  const tx = db.transaction('plantings', 'readwrite');
  
  for (const { id, updates: plantingUpdates } of updates) {
    const planting = await tx.store.get(id);
    if (planting) {
      Object.assign(planting, plantingUpdates);
      await tx.store.put(planting);
    }
  }
  
  await tx.done;
}

// Get plant data for a specific plant type
// Function is already imported from '../core/db/plants.js'

// Get plant data for specific environment
// Function is already imported from '../core/db/plants.js'

// Validate planting date for a plant type
// Function is already imported from '../core/db/plants.js'

// Get plant categories
export function getPlantCategories() {
  return ['cannabis', 'vegetables', 'herbs', 'fruits', 'fruit-trees'];
}

// Get plants by category
export async function getPlantsByCategory(category) {
  // This would need to be implemented based on your plant data structure
  // For now, returning a placeholder
  return [];
}

// Get seasonal recommendations
export function getSeasonalRecommendations(season, region) {
  // This would need to be implemented based on your plant data structure
  // For now, returning a placeholder
  return [];
}

// Add a note to a planting
export async function addPlantNote(plantingId, note) {
  const db = await openDB(DB_NAME, DB_VERSION);
  return await db.add('plantNotes', {
    plantingId,
    date: new Date().toISOString(),
    note
  });
}

// Get notes for a planting
export async function getPlantNotes(plantingId) {
  const db = await openDB(DB_NAME, DB_VERSION);
  return await db.getAllFromIndex('plantNotes', 'plantingId', plantingId);
}

// Update a plant note
export async function updatePlantNote(noteId, note) {
  const db = await openDB(DB_NAME, DB_VERSION);
  const tx = db.transaction('plantNotes', 'readwrite');
  const noteRecord = await tx.store.get(noteId);
  
  if (noteRecord) {
    noteRecord.note = note;
    await tx.store.put(noteRecord);
  }
  
  await tx.done;
  return noteRecord;
}

// Delete a plant note
export async function deletePlantNote(noteId) {
  const db = await openDB(DB_NAME, DB_VERSION);
  return await db.delete('plantNotes', noteId);
} 