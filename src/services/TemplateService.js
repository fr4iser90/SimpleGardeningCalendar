// Garden Calendar Templates - Internationalized system
// Supports multiple languages with appropriate regional adaptations

import { getCurrentLanguage } from '../core/i18n/index.js';
import { getAvailableTemplatesEn, GARDEN_TEMPLATE_CATEGORIES_EN } from '../data/templates/en.js';
import { getAvailableTemplatesDe, GARDEN_TEMPLATE_CATEGORIES_DE } from '../data/templates/de.js';
import { getAvailableTemplatesFr, GARDEN_TEMPLATE_CATEGORIES_FR } from '../data/templates/fr.js';
import { getAvailableTemplatesEs, GARDEN_TEMPLATE_CATEGORIES_ES } from '../data/templates/es.js';
import { getAvailableTemplatesIt, GARDEN_TEMPLATE_CATEGORIES_IT } from '../data/templates/it.js';
import { addEvent } from './EventService.js';
import { validateTemplate } from '../utils/validators.js';

/**
 * Template Service
 * Handles garden template import and management
 */

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
  
  // Get the currently selected local calendar ID
  const selectedCalendarId = localStorage.getItem('selectedLocalCalendarId');
  
  for (const task of templateData.tasks) {
    // Create date for the specified year
    const [month, day] = task.date.split('-').map(Number);
    const taskDate = new Date(startYear, month - 1, day);
    
    const eventData = {
      title: task.title,
      date: taskDate.toISOString().split('T')[0],
      type: task.type,
      description: task.description,
      priority: task.priority,
      templateCategory: templateData.category,
      templateName: templateData.name,
      language: currentLang,
      isTemplate: true,
      calendarId: selectedCalendarId // Add the calendar ID so events appear in the correct calendar
    };
    
    // Add event to database
    await addEvent(eventData);
    events.push(eventData);
  }
  
  return events;
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
export const GARDEN_TEMPLATE_CATEGORIES = {
  ORNAMENTAL: 'ORNAMENTAL',
  VEGETABLE_FRUIT: 'VEGETABLE_FRUIT',
  HERB_GARDEN: 'HERB_GARDEN',
  FRUIT_GARDEN: 'FRUIT_GARDEN',
  BALCONY_TERRACE: 'BALCONY_TERRACE',
  COMPLETE_GARDEN: 'COMPLETE_GARDEN'
};

// Get template by name
export function getTemplateByName(templateName) {
  const templates = getAvailableTemplates();
  return templates.find(template => template.name === templateName);
}

// Get templates by category
export function getTemplatesByCategory(category) {
  const templates = getAvailableTemplates();
  return templates.filter(template => template.category === category);
}

// Get template statistics
export function getTemplateStatistics() {
  const templates = getAvailableTemplates();
  const stats = {
    total: templates.length,
    byCategory: {},
    byLanguage: {}
  };
  
  templates.forEach(template => {
    // Count by category
    stats.byCategory[template.category] = (stats.byCategory[template.category] || 0) + 1;
    
    // Count by language (if available)
    if (template.language) {
      stats.byLanguage[template.language] = (stats.byLanguage[template.language] || 0) + 1;
    }
  });
  
  return stats;
} 