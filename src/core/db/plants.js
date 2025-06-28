/**
 * Plant Data Operations
 * Handles plant data access, validation, and search operations
 */

import { getPlantRegistry } from './plants/index.js';
import { getTranslatedPlantData, getAllTranslatedPlantData } from '../i18n/index.js';
import { SEASONAL_WINDOWS } from './connection.js';
import { t } from '../i18n/index.js';

/**
 * Get appropriate plant data based on environment
 * @param {string} plantKey - Plant key identifier
 * @param {string} environment - Growing environment (indoor/outdoor)
 * @returns {Object|null} Plant data for the specified environment
 */
export async function getPlantDataForEnvironment(plantKey, environment = 'indoor') {
  // Try to get translated plant data first
  const translatedData = await getTranslatedPlantData(plantKey);
  if (translatedData) {
    // If plant has environment-specific data, return that
    if (translatedData.environments && translatedData.environments[environment]) {
      return {
        ...translatedData,
        phases: translatedData.environments[environment].phases,
        seasonalTiming: translatedData.environments[environment].seasonalTiming
      };
    }
    
    // Otherwise return the base plant data
    return translatedData;
  }

  // Fallback to original data
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
 * @returns {Promise<Object>} Validation result with isValid and message
 */
export async function validatePlantingDate(plantKey, environment, plantingDate, region = 'temperate_north') {
  if (environment !== 'outdoor') {
    return { isValid: true, message: t('timing.indoor_growing_date_flexible') };
  }
  
  // Get translated plant data ONLY - no fallbacks to English DB
  const allTranslatedPlants = await getAllTranslatedPlantData();
  const plantData = allTranslatedPlants.get(plantKey);
  
  if (!plantData || !plantData.environments || !plantData.environments.outdoor || !plantData.environments.outdoor.seasonalTiming || !plantData.environments.outdoor.seasonalTiming[region]) {
    return { isValid: false, message: t('timing.no_seasonal_restrictions_found') };
  }
  
  const seasonal = plantData.environments.outdoor.seasonalTiming[region];
  const plantingWindow = seasonal.plantingWindow;
  
  if (!plantingWindow) {
    return { isValid: false, message: t('timing.no_planting_window_specified') };
  }
  
  const plantDate = new Date(plantingDate);
  const currentYear = plantDate.getFullYear();
  
  // Create date objects for the planting window
  const startDate = new Date(`${currentYear}-${plantingWindow.start}`);
  const endDate = new Date(`${plantingWindow.end.startsWith('0') ? currentYear : currentYear + 1}-${plantingWindow.end}`);
  
  if (plantDate >= startDate && plantDate <= endDate) {
    return { 
      isValid: true, 
      message: t('timing.good_timing', { description: t(plantingWindow.description) }),
      recommendedPeriod: t(plantingWindow.description),
      start: plantingWindow.start,
      end: plantingWindow.end,
      description: plantingWindow.description
    };
  } else {
    return { 
      isValid: false, 
      message: t('timing.consider_planting_between', { 
        start: plantingWindow.start, 
        end: plantingWindow.end, 
        description: t(plantingWindow.description) 
      }),
      recommendedPeriod: t(plantingWindow.description),
      start: plantingWindow.start,
      end: plantingWindow.end,
      description: plantingWindow.description
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
 * Get plant data by key with translation support
 * @param {string} plantKey - Plant key identifier
 * @returns {Object|null} Plant data or null if not found
 */
export async function getPlantData(plantKey) {
  // Try to get translated plant data first
  const translatedData = await getTranslatedPlantData(plantKey);
  if (translatedData) {
    return translatedData;
  }

  // Fallback to original data
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