import { openDB } from 'idb';
import { DB_NAME, DB_VERSION } from '../core/db/connection.js';
import { getPlantData, getPlantDataForEnvironment, validatePlantingDate } from '../core/db/plants.js';
import { createPlantingEvents, deleteAllPlantingEvents } from './EventService.js';
import { getPhaseEmoji, getPlantCategoryName, calculatePhaseSchedule } from '../utils/plantUtils.js';
import { formatDate } from '../utils/dateUtils.js';
import { validatePlantingDate as validatePlantingDateUtil } from '../utils/validators.js';

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
export async function addPlanting(plantType, startDate, location = 'Default Garden', customName = null, reminderOptions = {}, customPhaseDurations = {}) {
  const plantData = getPlantData(plantType);
  
  if (!plantData) {
    throw new Error(`Plant type ${plantType} not found in database`);
  }
  
  // Validate planting date
  const validationResult = validatePlantingDateUtil(plantType, startDate);
  if (!validationResult.isValid) {
    throw new Error(`Invalid planting date: ${validationResult.reason}`);
  }
  
  // Calculate all phase dates with custom durations
  let currentDate = new Date(startDate);
  const phases = [];
  let totalDays = 0;
  
  for (const [phase, { days, description, care }] of Object.entries(plantData.phases)) {
    // Use custom duration if provided, otherwise use default
    const phaseDays = customPhaseDurations[phase] || days;
    
    const phaseStartDate = new Date(currentDate);
    phaseStartDate.setDate(phaseStartDate.getDate() + totalDays);
    
    phases.push({
      name: phase,
      startDate: phaseStartDate.toISOString().split('T')[0],
      days: phaseDays,
      description,
      care
    });
    
    totalDays += phaseDays;
  }
  
  // Calculate harvest/completion date
  const completionDate = new Date(currentDate);
  completionDate.setDate(completionDate.getDate() + totalDays);
  
  // Create planting record
  const planting = {
    plantType,
    plantName: plantData.name,
    displayName: customName || plantData.name,
    customName: customName,
    category: plantData.category || 'Other',
    location,
    startDate: startDate,
    completionDate: completionDate.toISOString().split('T')[0],
    phases,
    currentPhase: Object.keys(plantData.phases)[0],
    status: 'active',
    notes: [],
    legalNote: plantData.legalNote || null,
    reminderOptions,
    customPhaseDurations
  };
  
  // Add planting to database
  const db = await openDB(DB_NAME, DB_VERSION);
  const tx = db.transaction('plantings', 'readwrite');
  const plantingId = await tx.store.add(planting);
  await tx.done;
  
  // Add the ID to the planting object for event creation
  planting.id = plantingId;
  
  // Create all associated events
  await createPlantingEvents(planting, plantData, phases, completionDate.toISOString());
  
  return plantingId;
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
export function getPlantData(plantType) {
  return getPlantData(plantType);
}

// Get plant data for specific environment
export function getPlantDataForEnvironment(plantType, environment) {
  return getPlantDataForEnvironment(plantType, environment);
}

// Validate planting date for a plant type
export function validatePlantingDate(plantType, date) {
  return validatePlantingDateUtil(plantType, date);
}

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