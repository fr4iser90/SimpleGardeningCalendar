/**
 * Plant Registry System
 * Central registry for all plant data with dynamic loading
 */

import { PLANT_CATEGORIES } from './categories.js';

// Import all plant data statically for synchronous access
import { cannabis_indica, cannabis_sativa, cannabis_autoflower } from './cannabis/index.js';
import { tomatoes, potatoes, carrots, lettuce, peppers, spinach, kale, cucumber } from './vegetables/index.js';
import { basil } from './herbs/index.js';
import { strawberries } from './fruits/index.js';
import { apple_tree, cherry_tree } from './fruit-trees/index.js';

// Plant category registry with dynamic imports (for async loading)
export const PLANT_REGISTRY = {
  [PLANT_CATEGORIES.CANNABIS]: () => import('./cannabis/index.js'),
  [PLANT_CATEGORIES.VEGETABLES]: () => import('./vegetables/index.js'),
  [PLANT_CATEGORIES.HERBS]: () => import('./herbs/index.js'),
  [PLANT_CATEGORIES.FRUITS]: () => import('./fruits/index.js'),
  [PLANT_CATEGORIES.FRUIT_TREES]: () => import('./fruit-trees/index.js')
};

// Cache for loaded plant data
const plantCache = new Map();
let plantRegistryMap = null;

/**
 * Get the plant registry as a Map
 * This provides synchronous access to all plant data
 * @returns {Map} Plant registry Map
 */
export function getPlantRegistry() {
  if (plantRegistryMap) {
    return plantRegistryMap;
  }

  // Initialize the registry Map with all plant data
  plantRegistryMap = new Map();
  
  // Add all plants to the registry
  try {
    // Cannabis plants
    if (cannabis_indica) plantRegistryMap.set('cannabis_indica', cannabis_indica);
    if (cannabis_sativa) plantRegistryMap.set('cannabis_sativa', cannabis_sativa);  
    if (cannabis_autoflower) plantRegistryMap.set('cannabis_autoflower', cannabis_autoflower);
    
    // Vegetables
    if (tomatoes) plantRegistryMap.set('tomatoes', tomatoes);
    if (potatoes) plantRegistryMap.set('potatoes', potatoes);
    if (carrots) plantRegistryMap.set('carrots', carrots);
    if (lettuce) plantRegistryMap.set('lettuce', lettuce);
    if (peppers) plantRegistryMap.set('peppers', peppers);
    if (spinach) plantRegistryMap.set('spinach', spinach);
    if (kale) plantRegistryMap.set('kale', kale);
    if (cucumber) plantRegistryMap.set('cucumber', cucumber);
    
    // Herbs
    if (basil) plantRegistryMap.set('basil', basil);
    
    // Fruits
    if (strawberries) plantRegistryMap.set('strawberries', strawberries);
    
    // Fruit Trees
    if (apple_tree) plantRegistryMap.set('apple_tree', apple_tree);
    if (cherry_tree) plantRegistryMap.set('cherry_tree', cherry_tree);
    
  } catch (error) {
    console.error('Failed to initialize plant registry:', error);
  }
  
  return plantRegistryMap;
}

/**
 * Get plant data by plant key
 * @param {string} plantKey - The plant identifier (e.g., 'cannabis_indica')
 * @returns {Promise<Object>} Plant data object
 */
export async function getPlantData(plantKey) {
  // Check cache first
  if (plantCache.has(plantKey)) {
    return plantCache.get(plantKey);
  }

  // Try to get from registry first (synchronous)
  const registry = getPlantRegistry();
  if (registry.has(plantKey)) {
    const plantData = registry.get(plantKey);
    plantCache.set(plantKey, plantData);
    return plantData;
  }

  // Find which category this plant belongs to
  const category = await findPlantCategory(plantKey);
  if (!category) {
    throw new Error(`Plant not found: ${plantKey}`);
  }

  // Load the category module
  const categoryModule = await PLANT_REGISTRY[category]();
  
  // Get the specific plant data
  const plantData = categoryModule[plantKey];
  if (!plantData) {
    throw new Error(`Plant data not found: ${plantKey}`);
  }

  // Cache the result
  plantCache.set(plantKey, plantData);
  
  return plantData;
}

/**
 * Get all plants in a category
 * @param {string} category - Plant category
 * @returns {Promise<Object>} All plants in category
 */
export async function getPlantsByCategory(category) {
  if (!PLANT_REGISTRY[category]) {
    throw new Error(`Category not found: ${category}`);
  }

  const categoryModule = await PLANT_REGISTRY[category]();
  return categoryModule.default || categoryModule;
}

/**
 * Get all available plant keys
 * @returns {Promise<string[]>} Array of all plant keys
 */
export async function getAllPlantKeys() {
  // Get from registry first (faster)
  const registry = getPlantRegistry();
  if (registry.size > 0) {
    return Array.from(registry.keys());
  }

  // Fallback to dynamic loading
  const allKeys = [];
  
  for (const category of Object.keys(PLANT_REGISTRY)) {
    try {
      const categoryModule = await PLANT_REGISTRY[category]();
      const plants = categoryModule.default || categoryModule;
      allKeys.push(...Object.keys(plants));
    } catch (error) {
      console.warn(`Failed to load category ${category}:`, error);
    }
  }
  
  return allKeys;
}

/**
 * Find which category a plant belongs to
 * @param {string} plantKey - Plant identifier
 * @returns {Promise<string|null>} Category name or null
 */
async function findPlantCategory(plantKey) {
  for (const category of Object.keys(PLANT_REGISTRY)) {
    try {
      const categoryModule = await PLANT_REGISTRY[category]();
      const plants = categoryModule.default || categoryModule;
      
      if (plants[plantKey]) {
        return category;
      }
    } catch (error) {
      console.warn(`Failed to check category ${category}:`, error);
    }
  }
  
  return null;
}

/**
 * Search plants by name or category
 * @param {string} query - Search query
 * @returns {Promise<Object[]>} Array of matching plants
 */
export async function searchPlants(query) {
  const results = [];
  const searchTerm = query.toLowerCase();
  
  // Search in registry first (faster)
  const registry = getPlantRegistry();
  for (const [plantKey, plantData] of registry.entries()) {
    if (plantData && (
      plantData.name?.toLowerCase().includes(searchTerm) ||
      plantData.category?.toLowerCase().includes(searchTerm) ||
      plantKey.toLowerCase().includes(searchTerm)
    )) {
      results.push({
        key: plantKey,
        ...plantData
      });
    }
  }
  
  // If registry search found results, return them
  if (results.length > 0) {
    return results;
  }
  
  // Fallback to dynamic loading
  for (const category of Object.keys(PLANT_REGISTRY)) {
    try {
      const categoryModule = await PLANT_REGISTRY[category]();
      const plants = categoryModule.default || categoryModule;
      
      for (const [plantKey, plantData] of Object.entries(plants)) {
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
    } catch (error) {
      console.warn(`Failed to search category ${category}:`, error);
    }
  }
  
  return results;
}

/**
 * Clear plant cache (useful for testing)
 */
export function clearPlantCache() {
  plantCache.clear();
}

// Export categories for convenience
export { PLANT_CATEGORIES } from './categories.js'; 