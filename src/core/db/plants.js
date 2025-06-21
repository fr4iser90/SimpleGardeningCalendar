/**
 * Plant Data Operations
 * Handles plant data access, validation, and search operations
 */

import { getPlantRegistry } from './plants/index.js';
import { SEASONAL_WINDOWS } from './connection.js';

/**
 * Get appropriate plant data based on environment
 * @param {string} plantKey - Plant key identifier
 * @param {string} environment - Growing environment (indoor/outdoor)
 * @returns {Object|null} Plant data for the specified environment
 */
export function getPlantDataForEnvironment(plantKey, environment = 'indoor') {
  const plantData = getPlantRegistry().get(plantKey);
  
  if (!plantData) {
    console.warn(`Plant data not found for key: ${plantKey}`);
    return null;
  }
  
  // If plant has environment-specific data, return that
  if (plantData.environments && plantData.environments[environment]) {
    return {
      ...plantData,
      phases: plantData.environments[environment].phases,
      seasonalTiming: plantData.environments[environment].seasonalTiming
    };
  }
  
  // Otherwise return the base plant data
  return plantData;
}

/**
 * Check if planting date is appropriate for outdoor plants
 * @param {string} plantKey - Plant key identifier
 * @param {string} environment - Growing environment
 * @param {string} plantingDate - Planting date (YYYY-MM-DD)
 * @param {string} region - Seasonal region
 * @returns {Object} Validation result with isValid and message
 */
export function validatePlantingDate(plantKey, environment, plantingDate, region = 'temperate_north') {
  if (environment !== 'outdoor') {
    return { isValid: true, message: 'Indoor growing - date flexible' };
  }
  
  const plantData = getPlantDataForEnvironment(plantKey, environment);
  if (!plantData || !plantData.seasonalTiming || !plantData.seasonalTiming[region]) {
    return { isValid: true, message: 'No seasonal restrictions found' };
  }
  
  const seasonal = plantData.seasonalTiming[region];
  const plantingWindow = seasonal.plantingWindow;
  
  if (!plantingWindow) {
    return { isValid: true, message: 'No planting window specified' };
  }
  
  const plantDate = new Date(plantingDate);
  const currentYear = plantDate.getFullYear();
  
  // Create date objects for the planting window
  const startDate = new Date(`${currentYear}-${plantingWindow.start}`);
  const endDate = new Date(`${plantingWindow.end.startsWith('0') ? currentYear : currentYear + 1}-${plantingWindow.end}`);
  
  if (plantDate >= startDate && plantDate <= endDate) {
    return { 
      isValid: true, 
      message: `Good timing! ${plantingWindow.description}` 
    };
  } else {
    return { 
      isValid: false, 
      message: `Consider planting between ${plantingWindow.start} and ${plantingWindow.end}. ${plantingWindow.description}` 
    };
  }
}

/**
 * Search plants by name, category, or key
 * @param {string} query - Search query
 * @returns {Array} Array of matching plants with their keys
 */
export async function searchPlants(query) {
  const results = [];
  const lowerQuery = query.toLowerCase();
  const plantRegistry = getPlantRegistry();
  
  for (const [key, plant] of plantRegistry.entries()) {
    if (plant.name.toLowerCase().includes(lowerQuery) || 
        plant.category.toLowerCase().includes(lowerQuery) ||
        key.toLowerCase().includes(lowerQuery)) {
      results.push({ key, ...plant });
    }
  }
  
  return results;
}

/**
 * Get all available plant categories
 * @returns {Array} Array of unique plant categories
 */
export function getPlantCategories() {
  const plantRegistry = getPlantRegistry();
  const categories = new Set();
  
  for (const plant of plantRegistry.values()) {
    categories.add(plant.category);
  }
  
  return Array.from(categories).sort();
}

/**
 * Get all plants in a specific category
 * @param {string} category - Plant category
 * @returns {Array} Array of plants in the category
 */
export function getPlantsByCategory(category) {
  const results = [];
  const plantRegistry = getPlantRegistry();
  
  for (const [key, plant] of plantRegistry.entries()) {
    if (plant.category === category) {
      results.push({ key, ...plant });
    }
  }
  
  return results;
}

/**
 * Get plant data by key
 * @param {string} plantKey - Plant key identifier
 * @returns {Object|null} Plant data or null if not found
 */
export function getPlantData(plantKey) {
  return getPlantRegistry().get(plantKey) || null;
}

/**
 * Check if a plant exists
 * @param {string} plantKey - Plant key identifier
 * @returns {boolean} True if plant exists
 */
export function plantExists(plantKey) {
  return getPlantRegistry().has(plantKey);
}

/**
 * Get all available plant keys
 * @returns {Array} Array of all plant keys
 */
export function getAllPlantKeys() {
  return Array.from(getPlantRegistry().keys());
}

/**
 * Get seasonal planting recommendations for a region
 * @param {string} region - Seasonal region
 * @returns {Object} Seasonal recommendations
 */
export function getSeasonalRecommendations(region = 'temperate_north') {
  const recommendations = {
    spring: [],
    summer: [],
    fall: [],
    winter: []
  };
  
  const plantRegistry = getPlantRegistry();
  const seasonalWindows = SEASONAL_WINDOWS[region];
  
  if (!seasonalWindows) {
    return recommendations;
  }
  
  for (const [key, plant] of plantRegistry.entries()) {
    if (plant.environments && plant.environments.outdoor && plant.environments.outdoor.seasonalTiming) {
      const timing = plant.environments.outdoor.seasonalTiming[region];
      if (timing && timing.plantingWindow) {
        const startMonth = parseInt(timing.plantingWindow.start.split('-')[0]);
        
        // Categorize by season based on start month
        if (startMonth >= 3 && startMonth <= 5) {
          recommendations.spring.push({ key, ...plant });
        } else if (startMonth >= 6 && startMonth <= 8) {
          recommendations.summer.push({ key, ...plant });
        } else if (startMonth >= 9 && startMonth <= 11) {
          recommendations.fall.push({ key, ...plant });
        } else {
          recommendations.winter.push({ key, ...plant });
        }
      }
    }
  }
  
  return recommendations;
}

// Export plant categories constant for backward compatibility
export const PLANT_CATEGORIES = getPlantCategories();

export default {
  getPlantDataForEnvironment,
  validatePlantingDate,
  searchPlants,
  getPlantCategories,
  getPlantsByCategory,
  getPlantData,
  plantExists,
  getAllPlantKeys,
  getSeasonalRecommendations,
  PLANT_CATEGORIES
}; 