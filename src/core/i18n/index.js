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

// Deep merge utility for merging original and translated plant data
function deepMerge(original, translation) {
  if (!translation) return original;
  if (typeof original !== 'object' || typeof translation !== 'object' || original === null || translation === null) {
    return translation ?? original;
  }
  const result = Array.isArray(original) ? [...original] : { ...original };
  for (const key in translation) {
    if (
      translation[key] &&
      typeof translation[key] === 'object' &&
      !Array.isArray(translation[key]) &&
      original[key] &&
      key !== 'commonProblems' // Special handling for commonProblems - replace completely
    ) {
      result[key] = deepMerge(original[key], translation[key]);
    } else {
      result[key] = translation[key];
    }
  }
  return result;
}

/**
 * Load translated plant data for the current language
 * @param {string} plantKey - Plant identifier (e.g., 'tomatoes', 'cannabis_indica')
 * @returns {Promise<Object|null>} Translated plant data or null if not found
 */
export async function getTranslatedPlantData(plantKey) {
  // Check cache first
  const cacheKey = `${currentLanguage}:${plantKey}`;
  if (plantTranslationCache.has(cacheKey)) {
    return plantTranslationCache.get(cacheKey);
  }

  // Always get original data for merging
  const { getPlantRegistry } = await import('../db/plants/index.js');
  const originalData = getPlantRegistry().get(plantKey);
  if (!originalData) {
    console.warn(`Original plant data not found for: ${plantKey}`);
    return null;
  }

  try {
    // Try to load from translation files based on current language
    const plantCategory = await getPlantCategory(plantKey);
    if (!plantCategory) {
      console.warn(`Plant category not found for: ${plantKey}`);
      plantTranslationCache.set(cacheKey, originalData);
      return originalData;
    }
    // Import the translated plant data
    const translationModule = await import(`./translations/${currentLanguage}/plants/${plantCategory}/${plantKey}.js`);
    const translatedData = translationModule.default;
    if (!translatedData) {
      plantTranslationCache.set(cacheKey, originalData);
      return originalData;
    }
    // Merge translation into original
    const merged = deepMerge(originalData, translatedData);
    plantTranslationCache.set(cacheKey, merged);
    return merged;
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
    'apple': 'fruit-trees',
    'cherry': 'fruit-trees',
    
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
    'cannabis_indica', 'cannabis_sativa', 'cannabis_autoflower', 'basil',
    // Vegetables
    'tomatoes', 'potatoes', 'carrots', 'lettuce', 'peppers', 'spinach', 'kale', 'cucumber',
    // Fruits
    'strawberries', 'blueberries', 'raspberries',
    // Fruit Trees
    'apple', 'cherry',
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
      const merged = translatedData ? deepMerge(originalData, translatedData) : originalData;
      translatedPlants.set(plantKey, merged);
      plantTranslationCache.set(cacheKey, merged);
    } catch (error) {
      translatedPlants.set(plantKey, originalData);
      plantTranslationCache.set(cacheKey, originalData);
    }
  }
  return translatedPlants;
}

// Initialize on module load
initI18n();

// Export UI functions
export { updateUITranslations };

/**
 * Get current country code (defaults to browser language or 'DE')
 * @returns {string} Country code
 */
export function getCurrentCountry() {
  // Try to get from browser language
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang) {
    const countryCode = browserLang.split('-')[1] || browserLang.split('_')[1];
    if (countryCode && COUNTRY_SETTINGS[countryCode.toUpperCase()]) {
      return countryCode.toUpperCase();
    }
  }
  
  // Default to DE if no valid country found
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