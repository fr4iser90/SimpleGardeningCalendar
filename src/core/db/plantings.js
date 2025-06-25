/**
 * Plantings Database Operations
 * Handles all planting record CRUD operations
 */

import { getDB } from './connection.js';
import { getPlantRegistry } from './plants/index.js';
import { createPlantingEvents, deleteAllPlantingEvents } from './events.js';
import { deleteAllPlantNotes } from './notes.js';

/**
 * Add a new planting with all associated events
 * @param {string} plantType - Plant type key
 * @param {string} startDate - Start date (YYYY-MM-DD)
 * @param {string} location - Garden location
 * @param {string} customName - Custom name for the planting
 * @param {Object} reminderOptions - Reminder options for the planting
 * @param {Object} customPhaseDurations - Custom phase durations for the planting
 * @returns {Promise<number>} Planting ID
 */
export async function addPlanting(plantType, startDate, location = 'Default Garden', customName = null, reminderOptions = {}, customPhaseDurations = {}) {
  const plantRegistry = getPlantRegistry();
  const plantData = plantRegistry.get(plantType);
  
  if (!plantData) {
    throw new Error(`Plant type ${plantType} not found in database`);
  }
  
  // Calculate all phase dates with custom durations if provided
  let currentDate = new Date(startDate);
  const phases = [];
  let totalDays = 0;
  
  // Handle both old and new phase structures
  const plantPhases = plantData.phases || plantData.environments?.indoor?.phases || {};
  
  for (const [phase, { days, description, care }] of Object.entries(plantPhases)) {
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
    customName,
    category: plantData.category || 'Other',
    tags: plantData.tags || [], // Add tags support
    location,
    startDate: startDate,
    completionDate: completionDate.toISOString().split('T')[0],
    phases,
    currentPhase: Object.keys(plantPhases)[0],
    status: 'active',
    notes: [],
    legalNote: plantData.legalNote || null,
    reminderOptions, // Store reminder options
    customPhaseDurations // Store custom phase durations
  };
  
  // Add planting to database
  const db = await getDB();
  const tx = db.transaction('plantings', 'readwrite');
  const plantingId = await tx.store.add(planting);
  await tx.done;
  
  // Add the ID to the planting object for event creation
  planting.id = plantingId;
  
  // Create all associated events with reminder options
  await createPlantingEvents(planting, plantData, phases, completionDate.toISOString(), reminderOptions);
  
  return plantingId;
}

/**
 * Update planting status
 * @param {number} plantingId - Planting ID
 * @param {string} status - New status
 * @returns {Promise<void>}
 */
export async function updatePlantingStatus(plantingId, status) {
  const db = await getDB();
  const tx = db.transaction('plantings', 'readwrite');
  const planting = await tx.store.get(plantingId);
  
  if (planting) {
    planting.status = status;
    await tx.store.put(planting);
  }
  
  return tx.done;
}

/**
 * Update planting's current phase
 * @param {number} plantingId - Planting ID
 * @param {string} phase - New current phase
 * @returns {Promise<void>}
 */
export async function updatePlantingPhase(plantingId, phase) {
  const db = await getDB();
  const tx = db.transaction('plantings', 'readwrite');
  const planting = await tx.store.get(plantingId);
  
  if (planting) {
    planting.currentPhase = phase;
    await tx.store.put(planting);
  }
  
  return tx.done;
}

/**
 * Update planting display name
 * @param {number} plantingId - Planting ID
 * @param {string} displayName - New display name
 * @returns {Promise<void>}
 */
export async function updatePlantingDisplayName(plantingId, displayName) {
  const db = await getDB();
  const tx = db.transaction('plantings', 'readwrite');
  const planting = await tx.store.get(plantingId);
  
  if (planting) {
    planting.displayName = displayName;
    planting.customName = displayName !== planting.plantName ? displayName : null;
    await tx.store.put(planting);
  }
  
  return tx.done;
}

/**
 * Get plantings by category
 * @param {string} category - Plant category
 * @returns {Promise<Array>} Array of plantings
 */
export async function getPlantingsByCategory(category) {
  const db = await getDB();
  return db.getAllFromIndex('plantings', 'category', category);
}

/**
 * Get active plantings
 * @returns {Promise<Array>} Array of active plantings
 */
export async function getActivePlantings() {
  const db = await getDB();
  return db.getAllFromIndex('plantings', 'status', 'active');
}

/**
 * Get all plantings
 * @returns {Promise<Array>} Array of all plantings
 */
export async function getAllPlantings() {
  const db = await getDB();
  return db.getAll('plantings');
}

/**
 * Get a specific planting by ID
 * @param {number} plantingId - Planting ID
 * @returns {Promise<Object|null>} Planting object or null
 */
export async function getPlanting(plantingId) {
  const db = await getDB();
  return db.get('plantings', plantingId);
}

/**
 * Get plantings by status
 * @param {string} status - Status to filter by
 * @returns {Promise<Array>} Array of plantings with specified status
 */
export async function getPlantingsByStatus(status) {
  const db = await getDB();
  return db.getAllFromIndex('plantings', 'status', status);
}

/**
 * Get plantings by date range
 * @param {string} startDate - Start date (YYYY-MM-DD)
 * @param {string} endDate - End date (YYYY-MM-DD)
 * @returns {Promise<Array>} Array of plantings in date range
 */
export async function getPlantingsByDateRange(startDate, endDate) {
  const db = await getDB();
  const allPlantings = await db.getAll('plantings');
  
  return allPlantings.filter(planting => {
    const plantingDate = new Date(planting.startDate);
    return plantingDate >= new Date(startDate) && plantingDate <= new Date(endDate);
  });
}

/**
 * Delete a planting and all associated events and notes
 * @param {number} plantingId - Planting ID
 * @returns {Promise<boolean>} Success status
 */
export async function deletePlantingAndEvents(plantingId) {
  try {
    // Delete all events
    await deleteAllPlantingEvents(plantingId);
    
    // Delete all notes
    await deleteAllPlantNotes(plantingId);
    
    // Delete the planting record
    const db = await getDB();
    const tx = db.transaction('plantings', 'readwrite');
    await tx.store.delete(plantingId);
    await tx.done;
    
    return true;
    
  } catch (error) {
    console.error('Error in deletePlantingAndEvents:', error);
    throw error;
  }
}

/**
 * Search plantings by name or plant type
 * @param {string} query - Search query
 * @returns {Promise<Array>} Array of matching plantings
 */
export async function searchPlantings(query) {
  const db = await getDB();
  const allPlantings = await db.getAll('plantings');
  const lowerQuery = query.toLowerCase();
  
  return allPlantings.filter(planting => 
    planting.plantName.toLowerCase().includes(lowerQuery) ||
    planting.displayName.toLowerCase().includes(lowerQuery) ||
    planting.plantType.toLowerCase().includes(lowerQuery) ||
    planting.location.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get planting statistics
 * @returns {Promise<Object>} Statistics object
 */
export async function getPlantingStatistics() {
  const db = await getDB();
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

/**
 * Update multiple plantings at once
 * @param {Array} updates - Array of {id, updates} objects
 * @returns {Promise<void>}
 */
export async function batchUpdatePlantings(updates) {
  const db = await getDB();
  const tx = db.transaction('plantings', 'readwrite');
  
  for (const { id, updates: plantingUpdates } of updates) {
    const planting = await tx.store.get(id);
    if (planting) {
      Object.assign(planting, plantingUpdates);
      await tx.store.put(planting);
    }
  }
  
  return tx.done;
}

export default {
  addPlanting,
  updatePlantingStatus,
  updatePlantingPhase,
  updatePlantingDisplayName,
  getPlantingsByCategory,
  getActivePlantings,
  getAllPlantings,
  getPlanting,
  getPlantingsByStatus,
  getPlantingsByDateRange,
  deletePlantingAndEvents,
  searchPlantings,
  getPlantingStatistics,
  batchUpdatePlantings
}; 