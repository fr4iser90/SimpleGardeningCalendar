/**
 * PlantingFormUtils - Common utility functions for the planting form
 */

import { getPlantRegistry } from '../../../core/db/plants/index.js';

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
export function getPlantDataForEnvironment(plantType, environment) {
  const registry = getPlantRegistry();
  const plantData = registry.get(plantType);
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
    tips.push('Direktsaat oder Vorkultur möglich');
  } else if (plantData.category === 'Herbs') {
    tips.push('Stecklinge oder Samen möglich');
  } else if (plantData.category === 'Fruits') {
    tips.push('Containerpflanzen oder wurzelnackte Pflanzen');
  }
  
  // Add cutting information if available
  if (plantData.cuttingInfo) {
    tips.push(`Stecklinge: ${plantData.cuttingInfo}`);
  }
  
  // Add region-specific tips
  if (region === 'mediterranean') {
    tips.push('Schatten in der Mittagshitze, morgens gießen');
  } else if (region === 'temperate_north') {
    tips.push('Nach dem letzten Frost pflanzen, Mulch verwenden');
  } else if (region === 'tropical') {
    tips.push('Ganzjährig möglich, auf Regenzeiten achten');
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