/**
 * Migration Bridge
 * Provides backward compatibility during plant database refactoring
 * This file will be removed after all phases are complete
 */

import { getPlantData, searchPlants as newSearchPlants } from './index.js';

// Import the old PLANTS_DATA from db.js temporarily
let oldPlantsData = null;

/**
 * Lazy load old plants data
 */
async function getOldPlantsData() {
  if (!oldPlantsData) {
    try {
      const dbModule = await import('../../db.js');
      oldPlantsData = dbModule.PLANTS_DATA || {};
    } catch (error) {
      console.warn('Could not load old plants data:', error);
      oldPlantsData = {};
    }
  }
  return oldPlantsData;
}

/**
 * Get plant data with fallback to old system
 * @param {string} plantKey - Plant identifier
 * @returns {Promise<Object>} Plant data
 */
export async function getPlantDataWithFallback(plantKey) {
  try {
    // Try new system first
    return await getPlantData(plantKey);
  } catch (error) {
    console.warn(`New system failed for ${plantKey}, falling back to old system:`, error);
    
    // Fallback to old system
    const oldData = await getOldPlantsData();
    if (oldData[plantKey]) {
      return oldData[plantKey];
    }
    
    throw new Error(`Plant not found in either system: ${plantKey}`);
  }
}

/**
 * Search plants with fallback
 * @param {string} query - Search query
 * @returns {Promise<Object[]>} Search results
 */
export async function searchPlantsWithFallback(query) {
  try {
    // Try new system first
    const newResults = await newSearchPlants(query);
    if (newResults.length > 0) {
      return newResults;
    }
  } catch (error) {
    console.warn('New search system failed, falling back:', error);
  }
  
  // Fallback to old system search
  const oldData = await getOldPlantsData();
  const results = [];
  const searchTerm = query.toLowerCase();
  
  for (const [plantKey, plantData] of Object.entries(oldData)) {
    if (
      plantData.name?.toLowerCase().includes(searchTerm) ||
      plantData.category?.toLowerCase().includes(searchTerm) ||
      plantKey.toLowerCase().includes(searchTerm)
    ) {
      results.push({
        key: plantKey,
        ...plantData
      });
    }
  }
  
  return results;
}

/**
 * Get all plant keys from both systems
 * @returns {Promise<string[]>} All plant keys
 */
export async function getAllPlantKeysWithFallback() {
  const keys = new Set();
  
  try {
    // Get from new system
    const { getAllPlantKeys } = await import('./index.js');
    const newKeys = await getAllPlantKeys();
    newKeys.forEach(key => keys.add(key));
  } catch (error) {
    console.warn('Could not get keys from new system:', error);
  }
  
  // Get from old system
  const oldData = await getOldPlantsData();
  Object.keys(oldData).forEach(key => keys.add(key));
  
  return Array.from(keys);
}

/**
 * Check if plant exists in either system
 * @param {string} plantKey - Plant identifier
 * @returns {Promise<boolean>} Whether plant exists
 */
export async function plantExists(plantKey) {
  try {
    await getPlantDataWithFallback(plantKey);
    return true;
  } catch {
    return false;
  }
} 