/**
 * Migration Bridge for DB Operations
 * Provides backward compatibility during Phase 2 transition
 * Maps old db.js exports to new modular structure
 */

import * as newDB from './index.js';

// Re-export all new functions with their original names
export const initializeDB = newDB.initializeDB;
export const addPlanting = newDB.addPlanting;
export const addPlantNote = newDB.addPlantNote;
export const getPlantNotes = newDB.getPlantNotes;
export const updatePlantingStatus = newDB.updatePlantingStatus;
export const getPlantingsByCategory = newDB.getPlantingsByCategory;
export const getActivePlantings = newDB.getActivePlantings;
export const getAllPlantings = newDB.getAllPlantings;
export const deletePlantingAndEvents = newDB.deletePlantingAndEvents;
export const searchPlants = newDB.searchPlants;
export const getPlantDataForEnvironment = newDB.getPlantDataForEnvironment;
export const validatePlantingDate = newDB.validatePlantingDate;

// Re-export constants
export const GROWING_ENVIRONMENTS = newDB.GROWING_ENVIRONMENTS;
export const SEASONAL_REGIONS = newDB.SEASONAL_REGIONS;
export const SEASONAL_WINDOWS = newDB.SEASONAL_WINDOWS;
export const PLANT_CATEGORIES = newDB.PLANT_CATEGORIES;

// Legacy PLANTS_DATA compatibility
// This provides access to the plant registry as the old PLANTS_DATA object
export const PLANTS_DATA = new Proxy({}, {
  get(target, prop) {
    const plantRegistry = newDB.getPlantRegistry();
    return plantRegistry.get(prop);
  },
  
  has(target, prop) {
    const plantRegistry = newDB.getPlantRegistry();
    return plantRegistry.has(prop);
  },
  
  ownKeys(target) {
    const plantRegistry = newDB.getPlantRegistry();
    return Array.from(plantRegistry.keys());
  },
  
  getOwnPropertyDescriptor(target, prop) {
    const plantRegistry = newDB.getPlantRegistry();
    if (plantRegistry.has(prop)) {
      return {
        enumerable: true,
        configurable: true,
        value: plantRegistry.get(prop)
      };
    }
    return undefined;
  }
});

// Additional compatibility exports
export default {
  // Core functions
  initializeDB,
  addPlanting,
  addPlantNote,
  getPlantNotes,
  updatePlantingStatus,
  getPlantingsByCategory,
  getActivePlantings,
  getAllPlantings,
  deletePlantingAndEvents,
  searchPlants,
  getPlantDataForEnvironment,
  validatePlantingDate,
  
  // Constants
  GROWING_ENVIRONMENTS,
  SEASONAL_REGIONS,
  SEASONAL_WINDOWS,
  PLANT_CATEGORIES,
  PLANTS_DATA,
  
  // New modular functions (for gradual adoption)
  ...newDB.default
}; 