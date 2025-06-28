/**
 * Database Operations Main Index
 * Exports all database operations from modular structure
 * 
 * Phase 2 Refactoring: DB Operations Split
 * - connection.js: DB connection & schema
 * - plants.js: Plant data operations
 * - plantings.js: Planting CRUD operations
 * - events.js: Event management
 * - notes.js: Note management
 * - utils.js: Utility functions
 */

// Connection and initialization
import { 
  initializeDB as _initializeDB, 
  getDB as _getDB,
  DB_NAME,
  DB_VERSION,
  GROWING_ENVIRONMENTS,
  SEASONAL_REGIONS,
  SEASONAL_WINDOWS
} from './connection.js';

// Plant data operations
import {
  getPlantDataForEnvironment,
  validatePlantingDate,
  searchPlants as _searchPlants,
  getPlantCategories,
  getPlantsByCategory as _getPlantsByCategory,
  getPlantData as _getPlantData,
  plantExists,
  getAllPlantKeys as _getAllPlantKeys,
  getSeasonalRecommendations,
  PLANT_CATEGORIES
} from './plants.js';

// Planting operations
import {
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
} from './plantings.js';

// Event operations
import {
  createPlantingEvents,
  deleteAllPlantingEvents,
  getPlantingEvents,
  addCustomPlantingEvent,
  updateEvent,
  deleteEvent
} from './events.js';

// Note operations
import {
  addPlantNote,
  getPlantNotes,
  updatePlantNote,
  deletePlantNote,
  getPlantNotesByDateRange,
  deleteAllPlantNotes
} from './notes.js';

// Utility functions
import {
  formatTemperature,
  formatDateForDisplay,
  getPhaseEmoji,
  getWateringInterval,
  getPhaseCheckpoints
} from './utils.js';

// Plant registry (from Phase 1)
import { getPlantRegistry } from './plants/index.js';

// Re-export everything
export { 
  _initializeDB as initializeDB, 
  _getDB as getDB,
  DB_NAME,
  DB_VERSION,
  GROWING_ENVIRONMENTS,
  SEASONAL_REGIONS,
  SEASONAL_WINDOWS
};

export {
  getPlantDataForEnvironment,
  validatePlantingDate,
  _searchPlants as searchPlants,
  getPlantCategories,
  _getPlantsByCategory as getPlantsByCategory,
  _getPlantData as getPlantData,
  plantExists,
  _getAllPlantKeys as getAllPlantKeys,
  getSeasonalRecommendations,
  PLANT_CATEGORIES
};

export {
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

export {
  createPlantingEvents,
  deleteAllPlantingEvents,
  getPlantingEvents,
  addCustomPlantingEvent,
  updateEvent,
  deleteEvent
};

export {
  addPlantNote,
  getPlantNotes,
  updatePlantNote,
  deletePlantNote,
  getPlantNotesByDateRange,
  deleteAllPlantNotes
};

export {
  formatTemperature,
  formatDateForDisplay,
  getPhaseEmoji,
  getWateringInterval,
  getPhaseCheckpoints
};

export { getPlantRegistry };

// Default export for convenience
export default {
  // Connection
  initializeDB: _initializeDB,
  getDB: _getDB,
  
  // Plants
  getPlantDataForEnvironment,
  validatePlantingDate,
  searchPlants: _searchPlants,
  getPlantCategories,
  getPlantsByCategory: _getPlantsByCategory,
  getPlantData: _getPlantData,
  plantExists,
  getAllPlantKeys: _getAllPlantKeys,
  getSeasonalRecommendations,
  
  // Plantings
  getPlantingsByCategory,
  getActivePlantings,
  getAllPlantings,
  getPlanting,
  getPlantingsByStatus,
  getPlantingsByDateRange,
  deletePlantingAndEvents,
  searchPlantings,
  getPlantingStatistics,
  batchUpdatePlantings,
  
  // Events
  createPlantingEvents,
  deleteAllPlantingEvents,
  getPlantingEvents,
  addCustomPlantingEvent,
  updateEvent,
  deleteEvent,
  
  // Notes
  addPlantNote,
  getPlantNotes,
  updatePlantNote,
  deletePlantNote,
  getPlantNotesByDateRange,
  deleteAllPlantNotes,
  
  // Utils
  formatTemperature,
  formatDateForDisplay,
  getPhaseEmoji,
  getWateringInterval,
  getPhaseCheckpoints,
  
  // Plant registry
  getPlantRegistry,
  
  // Constants
  GROWING_ENVIRONMENTS,
  SEASONAL_REGIONS,
  SEASONAL_WINDOWS,
  PLANT_CATEGORIES
}; 