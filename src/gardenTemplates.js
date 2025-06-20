// Garden Calendar Templates - Internationalized system
// Supports multiple languages with appropriate regional adaptations

import { getCurrentLanguage } from './i18n.js';
import { getAvailableTemplatesEn, GARDEN_TEMPLATE_CATEGORIES_EN } from './gardenTemplates_en.js';
import { getAvailableTemplatesDe, GARDEN_TEMPLATE_CATEGORIES_DE } from './gardenTemplates_de.js';
import { getAvailableTemplatesFr, GARDEN_TEMPLATE_CATEGORIES_FR } from './gardenTemplates_fr.js';
import { getAvailableTemplatesEs, GARDEN_TEMPLATE_CATEGORIES_ES } from './gardenTemplates_es.js';
import { getAvailableTemplatesIt, GARDEN_TEMPLATE_CATEGORIES_IT } from './gardenTemplates_it.js';

// Function to get all available templates based on current language
export function getAvailableTemplates() {
  const currentLang = getCurrentLanguage();
  
  switch (currentLang) {
    case 'en':
      return getAvailableTemplatesEn();
    case 'de':
      return getAvailableTemplatesDe();
    case 'fr':
      return getAvailableTemplatesFr();
    case 'es':
      return getAvailableTemplatesEs();
    case 'it':
      return getAvailableTemplatesIt();
    default:
      return getAvailableTemplatesEn(); // English as fallback
  }
}

// Function to get template by category (language-aware)
export function getTemplateByCategory(category) {
  const templates = getAvailableTemplates();
  return templates.find(template => template.category === category);
}

// Enhanced import function with language support
export async function importGardenTemplate(templateData, startYear = new Date().getFullYear()) {
  const events = [];
  const currentLang = getCurrentLanguage();
  
  for (const task of templateData.tasks) {
    // Create date for the specified year
    const [month, day] = task.date.split('-').map(Number);
    const taskDate = new Date(startYear, month - 1, day);
    
    events.push({
      title: task.title,
      date: taskDate.toISOString().split('T')[0],
      type: task.type,
      description: task.description,
      priority: task.priority,
      templateCategory: templateData.category,
      templateName: templateData.name,
      language: currentLang,
      isTemplate: true
    });
  }
  
  return events;
}

// Function to get localized template categories
export function getLocalizedTemplateCategories() {
  const currentLang = getCurrentLanguage();
  
  switch (currentLang) {
    case 'en':
      return {
        ORNAMENTAL: 'Ornamental Garden',
        VEGETABLE_FRUIT: 'Vegetable & Fruit Garden',
        HERB_GARDEN: 'Herb Garden',
        BALCONY_TERRACE: 'Balcony & Terrace',
        COMPLETE_GARDEN: 'Complete Garden'
      };
    case 'fr':
      return {
        ORNAMENTAL: 'Jardin d\'Ornement',
        VEGETABLE_FRUIT: 'Potager & Verger',
        HERB_GARDEN: 'Jardin d\'Herbes Aromatiques',
        BALCONY_TERRACE: 'Balcon & Terrasse',
        COMPLETE_GARDEN: 'Jardin Complet'
      };
    case 'es':
      return {
        ORNAMENTAL: 'Jardín Ornamental',
        VEGETABLE_FRUIT: 'Huerto & Frutales',
        HERB_GARDEN: 'Jardín de Hierbas',
        BALCONY_TERRACE: 'Balcón & Terraza',
        COMPLETE_GARDEN: 'Jardín Completo'
      };
    case 'it':
      return {
        ORNAMENTAL: 'Giardino Ornamentale',
        VEGETABLE_FRUIT: 'Orto & Frutteto',
        HERB_GARDEN: 'Giardino delle Erbe',
        BALCONY_TERRACE: 'Balcone & Terrazza',
        COMPLETE_GARDEN: 'Giardino Completo'
      };
    case 'de':
      return {
        ORNAMENTAL: 'Ziergarten',
        VEGETABLE_FRUIT: 'Obst- und Gemüsegarten',
        HERB_GARDEN: 'Kräutergarten',
        BALCONY_TERRACE: 'Balkon & Terrasse',
        COMPLETE_GARDEN: 'Kompletter Garten'
      };
    default:
      return {
        ORNAMENTAL: 'Ornamental Garden',
        VEGETABLE_FRUIT: 'Vegetable & Fruit Garden',
        HERB_GARDEN: 'Herb Garden',
        BALCONY_TERRACE: 'Balcony & Terrace',
        COMPLETE_GARDEN: 'Complete Garden'
      }; // English as fallback
  }
}

// Export template categories for backward compatibility
export function getGardenTemplateCategories() {
  const currentLang = getCurrentLanguage();
  
  switch (currentLang) {
    case 'en':
      return GARDEN_TEMPLATE_CATEGORIES_EN;
    case 'de':
      return GARDEN_TEMPLATE_CATEGORIES_DE;
    case 'fr':
      return GARDEN_TEMPLATE_CATEGORIES_FR;
    case 'es':
      return GARDEN_TEMPLATE_CATEGORIES_ES;
    case 'it':
      return GARDEN_TEMPLATE_CATEGORIES_IT;
    default:
      return GARDEN_TEMPLATE_CATEGORIES_EN; // English as fallback
  }
}

// For backward compatibility, export the categories
// This maintains compatibility with existing code
export const GARDEN_TEMPLATE_CATEGORIES = {
  ORNAMENTAL: 'ORNAMENTAL',
  VEGETABLE_FRUIT: 'VEGETABLE_FRUIT',
  HERB_GARDEN: 'HERB_GARDEN',
  BALCONY_TERRACE: 'BALCONY_TERRACE',
  COMPLETE_GARDEN: 'COMPLETE_GARDEN'
}; 