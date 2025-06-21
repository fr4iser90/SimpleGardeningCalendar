// Internationalization (i18n) System for SimpleGardeningCalendar
// Modular i18n system with dynamic language loading

import { de } from './translations/de.js';
import { en } from './translations/en.js';
import { fr } from './translations/fr.js';
import { es } from './translations/es.js';
import { it } from './translations/it.js';
import { updateUITranslations } from './ui/LanguageSwitcher.js';

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

// Initialize i18n system
export function initI18n() {
  // Try to detect language from browser
  const browserLang = navigator.language.split('-')[0];
  const savedLang = localStorage.getItem('garden-calendar-language');
  
  // Priority: saved > browser > default
  if (savedLang && SUPPORTED_LANGUAGES[savedLang]) {
    currentLanguage = savedLang;
  } else if (SUPPORTED_LANGUAGES[browserLang]) {
    currentLanguage = browserLang;
  } else {
    currentLanguage = 'en'; // Default fallback to English
  }
  
  console.log(`🌍 Language initialized: ${currentLanguage} (${SUPPORTED_LANGUAGES[currentLanguage]})`);
}

// Export alias for compatibility
export const initializeI18n = initI18n;

// Get current language
export function getCurrentLanguage() {
  return currentLanguage;
}

// Set language
export function setLanguage(lang) {
  if (!SUPPORTED_LANGUAGES[lang]) {
    console.warn(`Language ${lang} not supported. Available: ${Object.keys(SUPPORTED_LANGUAGES).join(', ')}`);
    return false;
  }
  
  currentLanguage = lang;
  localStorage.setItem('garden-calendar-language', lang);
  
  // Trigger UI update event
  document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
  
  return true;
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

// Initialize on module load
initI18n();

// Export UI functions
export { updateUITranslations }; 