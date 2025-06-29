// Internationalization (i18n) System for SimpleGardeningCalendar
// Modular i18n system with dynamic language loading

import { de } from './translations/de/index.js';
import { en } from './translations/en/index.js';
import { fr } from './translations/fr/index.js';
import { es } from './translations/es/index.js';
import { it } from './translations/it/index.js';
import { updateUITranslations } from '../../components/ui/LanguageSwitch.js';
import { COUNTRY_SETTINGS } from '../db/plants/categories.js';

// Supported languages
export const SUPPORTED_LANGUAGES = {
  'de': 'Deutsch',
  'en': 'English', 
  'fr': 'Français',
  'es': 'Español',
  'it': 'Italiano'
};

// Translation registry
const TRANSLATIONS = {
  de,
  en,
  fr,
  es,
  it
};

// Current language state
let currentLanguage = 'en'; // Default to English

// Plant translation cache
const plantTranslationCache = new Map();

// Initialize i18n system
export function initI18n() {
  // Load preferred language from localStorage
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage && Object.keys(SUPPORTED_LANGUAGES).includes(savedLanguage)) {
    currentLanguage = savedLanguage;
  } else {
    // Try to detect from browser language
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0];
    if (Object.keys(SUPPORTED_LANGUAGES).includes(langCode)) {
      currentLanguage = langCode;
    }
  }
  
  // Clear plant translation cache on init
  clearPlantTranslationCache();
  
  // Update UI translations
  updateUITranslations();
}

// Export alias for compatibility
export const initializeI18n = initI18n;

// Get current language
export function getCurrentLanguage() {
  return currentLanguage;
}

/**
 * Set the current language
 * @param {string} lang - Language code (en, de, es, fr, it)
 */
export function setLanguage(lang) {
  if (Object.keys(SUPPORTED_LANGUAGES).includes(lang)) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Clear plant translation cache when language changes
    clearPlantTranslationCache();
    
    // Update UI translations
    updateUITranslations();
  } else {
    console.warn(`Unsupported language: ${lang}`);
  }
}

// Translate function with parameter substitution
export function t(key, params = {}) {
  const translation = TRANSLATIONS[currentLanguage]?.[key] || TRANSLATIONS['en'][key] || key;
  
  // Replace parameters like {count}, {name}, {year}
  return translation.replace(/\{(\w+)\}/g, (match, param) => {
    return params[param] !== undefined ? params[param] : match;
  });
}

// Translate with fallback
export function tWithFallback(key, fallback = null) {
  return TRANSLATIONS[currentLanguage]?.[key] || fallback || key;
}

// Get all available languages for UI
export function getAvailableLanguages() {
  return Object.entries(SUPPORTED_LANGUAGES).map(([code, name]) => ({
    code,
    name,
    isActive: code === currentLanguage
  }));
}

/**
 * Resolve translation keys in plant data
 * @param {Object} plantData - Plant data object
 * @param {Object} translations - Translation data object
 * @returns {Object} Plant data with resolved translations
 */
function resolvePlantTranslations(plantData, translations) {
  if (!translations) return plantData;
  
  const result = JSON.parse(JSON.stringify(plantData)); // Deep clone
  
  // Recursive function to resolve translation keys
  function resolveTranslations(obj, path = '') {
    for (const key in obj) {
      const currentPath = path ? `${path}.${key}` : key;
      const value = obj[key];
      
      if (typeof value === 'string' && value.includes('.')) {
        // Check if this looks like a translation key
        const translationKey = value;
        if (translations[translationKey]) {
          obj[key] = translations[translationKey];
        }
      } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        // Recursively resolve nested objects
        resolveTranslations(value, currentPath);
      }
    }
  }
  
  resolveTranslations(result);
  return result;
}

/**
 * Load translated plant data for the current language
 * @param {string} plantKey - Plant identifier (e.g., 'tomatoes', 'cannabis_indica')
 * @returns {Promise<Object|null>} Translated plant data or null if not found
 */
export async function getTranslatedPlantData(plantKey) {
  console.log(`🔍 [getTranslatedPlantData] Starting for: ${plantKey}, language: ${currentLanguage}`);
  
  // Check cache first
  const cacheKey = `${currentLanguage}:${plantKey}`;
  if (plantTranslationCache.has(cacheKey)) {
    console.log(`🔍 [getTranslatedPlantData] Found in cache: ${plantKey}`);
    return plantTranslationCache.get(cacheKey);
  }

  // Always get original data for merging
  const { getPlantRegistry } = await import('../db/plants/index.js');
  const originalData = getPlantRegistry().get(plantKey);
  if (!originalData) {
    console.warn(`Original plant data not found for: ${plantKey}`);
    return null;
  }
  
  console.log(`🔍 [getTranslatedPlantData] Original data found:`, { 
    name: originalData.name, 
    category: originalData.category 
  });

  try {
    // Try to load from translation files based on current language
    const plantCategory = await getPlantCategory(plantKey);
    if (!plantCategory) {
      console.warn(`Plant category not found for: ${plantKey}`);
      plantTranslationCache.set(cacheKey, originalData);
      return originalData;
    }
    
    console.log(`🔍 [getTranslatedPlantData] Plant category: ${plantCategory}`);
    
    // Import the translated plant data
    const translationModule = await import(`./translations/${currentLanguage}/plants/${plantCategory}/${plantKey}.js`);
    const translatedData = translationModule.default;
    if (!translatedData) {
      console.warn(`No translation data found for: ${plantKey}`);
      plantTranslationCache.set(cacheKey, originalData);
      return originalData;
    }
    
    console.log(`🔍 [getTranslatedPlantData] Translation data found:`, { 
      name: translatedData.name, 
      category: translatedData.category 
    });
    
    // Resolve translation keys in the original data
    const resolved = translatedData ? resolvePlantTranslations(originalData, translatedData) : originalData;
    
    console.log(`🔍 [getTranslatedPlantData] Resolved data:`, { 
      name: resolved.name, 
      category: resolved.category 
    });
    
    plantTranslationCache.set(cacheKey, resolved);
    return resolved;
  } catch (error) {
    console.warn(`Failed to load translated plant data for ${plantKey} in ${currentLanguage}:`, error);
    plantTranslationCache.set(cacheKey, originalData);
    return originalData;
  }
}

/**
 * Get plant category based on plant key
 * @param {string} plantKey - Plant identifier
 * @returns {Promise<string|null>} Category name or null
 */
async function getPlantCategory(plantKey) {
  // Define plant categories mapping
  const plantCategories = {
    // Cannabis plants
    'cannabis_indica': 'herbs',
    'cannabis_sativa': 'herbs',
    'cannabis_autoflower': 'herbs',
    'basil': 'herbs',
    'mint': 'herbs',
    'rosemary': 'herbs',
    'thyme': 'herbs',
    'oregano': 'herbs',
    'sage': 'herbs',
    'parsley': 'herbs',
    
    // Vegetables
    'tomatoes': 'vegetables',
    'potatoes': 'vegetables',
    'carrots': 'vegetables',
    'lettuce': 'vegetables',
    'peppers': 'vegetables',
    'spinach': 'vegetables',
    'kale': 'vegetables',
    'cucumber': 'vegetables',
    
    // Fruits
    'strawberries': 'fruits',
    'blueberries': 'fruits',
    'raspberries': 'fruits',
    
    // Fruit Trees
    'apple_tree': 'fruit-trees',
    'cherry_tree': 'fruit-trees',
    
    // Flowers
    'lavender': 'flowers',
    'roses': 'flowers',
    'sunflowers': 'flowers',
  };

  return plantCategories[plantKey] || null;
}

/**
 * Get all translated plant data for current language
 * @returns {Promise<Map>} Map of plant key to translated data
 */
export async function getAllTranslatedPlantData() {
  const plantKeys = [
    // Cannabis plants
    'cannabis_indica', 'cannabis_sativa', 'cannabis_autoflower', 'basil', 'mint', 'rosemary', 'thyme', 'oregano', 'sage', 'parsley',
    // Vegetables
    'tomatoes', 'potatoes', 'carrots', 'lettuce', 'peppers', 'spinach', 'kale', 'cucumber',
    // Fruits
    'strawberries', 'blueberries', 'raspberries',
    // Fruit Trees
    'apple_tree', 'cherry_tree',
    // Flowers
    'lavender', 'roses', 'sunflowers'
  ];
  const { getPlantRegistry } = await import('../db/plants/index.js');
  const registry = getPlantRegistry();
  const translatedPlants = new Map();
  for (const plantKey of plantKeys) {
    const originalData = registry.get(plantKey);
    if (!originalData) continue;
    const cacheKey = `${currentLanguage}:${plantKey}`;
    if (plantTranslationCache.has(cacheKey)) {
      translatedPlants.set(plantKey, plantTranslationCache.get(cacheKey));
      continue;
    }
    try {
      const plantCategory = await getPlantCategory(plantKey);
      if (!plantCategory) {
        translatedPlants.set(plantKey, originalData);
        plantTranslationCache.set(cacheKey, originalData);
        continue;
      }
      const translationModule = await import(`./translations/${currentLanguage}/plants/${plantCategory}/${plantKey}.js`);
      const translatedData = translationModule.default;
      const resolved = translatedData ? resolvePlantTranslations(originalData, translatedData) : originalData;
      translatedPlants.set(plantKey, resolved);
      plantTranslationCache.set(cacheKey, resolved);
    } catch (error) {
      translatedPlants.set(plantKey, originalData);
      plantTranslationCache.set(cacheKey, originalData);
    }
  }
  // DEBUG: Ausgabe aller geladenen Pflanzen und Kategorien
  console.log('[getAllTranslatedPlantData] Loaded:', Array.from(translatedPlants.entries()).map(([k,v]) => `${k}: ${v.category}`));
  return translatedPlants;
}

// Initialize on module load
initI18n();

// Clear plant translation cache to ensure new resolution logic takes effect
clearPlantTranslationCache();

// Export UI functions
export { updateUITranslations };

/**
 * Get current country code (defaults to browser language or 'DE')
 * @returns {string} Country code
 */
export function getCurrentCountry() {
  // HARD FIX: If user is German, always return DE
  const savedLanguage = localStorage.getItem('preferredLanguage');
  const browserLang = navigator.language || navigator.userLanguage;
  
  console.log('[DEBUG] getCurrentCountry - savedLanguage:', savedLanguage);
  console.log('[DEBUG] getCurrentCountry - browserLang:', browserLang);
  console.log('[DEBUG] getCurrentCountry - currentLanguage:', currentLanguage);
  
  // If user is German, always return DE
  if (savedLanguage === 'de' || browserLang?.startsWith('de') || currentLanguage === 'de') {
    console.log('[DEBUG] getCurrentCountry - returning DE for German user');
    return 'DE';
  }
  
  // Try to get from browser language
  if (browserLang) {
    const countryCode = browserLang.split('-')[1] || browserLang.split('_')[1];
    if (countryCode && COUNTRY_SETTINGS[countryCode.toUpperCase()]) {
      console.log('[DEBUG] getCurrentCountry - returning from browser:', countryCode.toUpperCase());
      return countryCode.toUpperCase();
    }
  }
  
  // Default to DE if no valid country found
  console.log('[DEBUG] getCurrentCountry - defaulting to DE');
  return 'DE';
}

/**
 * Check if cannabis should be shown for current country
 * @returns {boolean} Whether cannabis should be shown
 */
export function shouldShowCannabis() {
  const country = getCurrentCountry();
  return COUNTRY_SETTINGS[country]?.showCannabis || false;
}

/**
 * Get country-specific settings
 * @returns {Object} Country settings
 */
export function getCountrySettings() {
  const country = getCurrentCountry();
  return COUNTRY_SETTINGS[country] || COUNTRY_SETTINGS['DE'];
}

/**
 * Clear the plant translation cache
 * Useful when switching languages or when cache contains stale data
 */
export function clearPlantTranslationCache() {
  plantTranslationCache.clear();
} 