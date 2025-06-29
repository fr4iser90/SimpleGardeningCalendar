/**
 * PlantingFormUtils - Common utility functions for the planting form
 */

import { getPlantRegistry } from '../../../core/db/plants/index.js';
import { t, getAllTranslatedPlantData } from '../../../core/i18n/index.js';

/**
 * Extract environment key from environment value (removes 'environment.' prefix)
 * @param {string} environment - Environment value from select element
 * @returns {string} Clean environment key
 */
export function getEnvironmentKey(environment) {
  return environment ? environment.replace('environment.', '') : 'indoor';
}

/**
 * Get plant data for a specific environment
 * @param {string} plantType - Plant type key
 * @param {string} environment - Environment value from select element
 * @returns {Object|null} Plant data for the environment or null if not found
 */
export async function getPlantDataForEnvironment(plantType, environment) {
  // Try to get translated plant data first
  let plantData = null;
  try {
    const allTranslatedPlants = await getAllTranslatedPlantData();
    plantData = allTranslatedPlants.get(plantType);
    if (!plantData) {
      // Fallback to original registry if no translation available
      const registry = getPlantRegistry();
      plantData = registry.get(plantType);
    }
  } catch (error) {
    console.warn('Failed to load translated plant data, using original registry:', error);
    const registry = getPlantRegistry();
    plantData = registry.get(plantType);
  }
  
  const envKey = getEnvironmentKey(environment);
  
  if (!plantData || !plantData.environments || !plantData.environments[envKey]) {
    return null;
  }
  
  return {
    plantData,
    envData: plantData.environments[envKey],
    envKey
  };
}

/**
 * Get planting tips and cutting information for a plant
 * @param {string} plantType - Plant type
 * @param {string} region - Climate region
 * @returns {string} Planting tips
 */
export function getPlantingTips(plantType, region) {
  const registry = getPlantRegistry();
  const plantData = registry.get(plantType);
  
  if (!plantData) return '';
  
  const tips = [];
  
  // Add general planting tips
  if (plantData.category === 'Vegetables') {
    tips.push(t('planting.tips.vegetables'));
  } else if (plantData.category === 'Herbs') {
    tips.push(t('planting.tips.herbs'));
  } else if (plantData.category === 'Fruits') {
    tips.push(t('planting.tips.fruits'));
  }
  
  // Add cutting information if available
  if (plantData.cuttingInfo) {
    tips.push(`${t('planting.tips.cuttings')} ${plantData.cuttingInfo}`);
  }
  
  // Add region-specific tips
  if (region === 'mediterranean') {
    tips.push(t('planting.tips.mediterranean'));
  } else if (region === 'temperate_north') {
    tips.push(t('planting.tips.temperate_north'));
  } else if (region === 'tropical') {
    tips.push(t('planting.tips.tropical'));
  }
  
  return tips.join('. ');
}

/**
 * Check if a plant is an autoflower
 * @param {string} plantType - Plant type key
 * @returns {boolean} True if plant is autoflower
 */
export function isAutoflower(plantType) {
  return plantType && plantType.includes('autoflower');
}

/**
 * Get default environment value
 * @returns {string} Default environment value
 */
export function getDefaultEnvironment() {
  return 'environment.indoor';
} 