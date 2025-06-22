/**
 * Calendar Utilities - Database-Driven Multi-Language Detection
 * Dynamically generates keywords from plant database and i18n system
 */

import { getPlantRegistry } from '../core/db/plants/index.js';
import { t, getCurrentLanguage } from '../core/i18n/index.js';

/**
 * Generate dynamic garden keywords from database and i18n
 * @returns {Object} - Keywords object with categories
 */
export function generateDynamicKeywords() {
  const currentLang = getCurrentLanguage();
  const plantRegistry = getPlantRegistry();
  
  // Base garden keywords from i18n
  const baseKeywords = [
    t('task.planting'),
    t('task.watering'), 
    t('task.fertilizing'),
    t('task.harvesting'),
    t('task.maintenance'),
    t('task.pruning'),
    // Add common garden terms
    'garden', 'gardening', 'plant', 'transplanting', 'pest'
  ];
  
  // Activity keywords from i18n
  const activityKeywords = {
    planting: [t('task.planting'), 'plant', 'sow', 'seed', '🌱'],
    watering: [t('task.watering'), 'water', 'irrigation', '💧'],
    fertilizing: [t('task.fertilizing'), 'fertilizer', 'feeding', 'compost', '🌿'],
    harvesting: [t('task.harvesting'), 'harvest', 'picking', '🌾'],
    maintenance: [t('task.maintenance'), 'pruning', 'trimming', 'weeding', '🔧']
  };
  
  // Template keywords from i18n
  const templateKeywords = {
    ornamental: [t('plant.category.flowers'), 'ornamental', 'flower', 'decorative', '🌸'],
    vegetable: [t('plant.category.vegetables'), 'vegetable', 'veggie', 'food', '🥕'],
    herb: [t('plant.category.herbs'), 'herb', 'culinary', '🌿'],
    fruit: [t('plant.category.fruits'), 'fruit', 'berry', '🍎'],
    fruit_trees: [t('plant.category.fruit_trees'), 'tree', 'orchard', '🌳']
  };
  
  // Dynamic plant keywords from database
  const plantKeywords = {};
  
  for (const [plantKey, plantData] of plantRegistry.entries()) {
    if (plantData && plantData.name) {
      const keywordList = [
        plantData.name.toLowerCase(),
        plantKey.toLowerCase()
      ];
      
      // Add plural forms for common languages
      if (currentLang === 'en') {
        keywordList.push(plantData.name.toLowerCase() + 's');
      } else if (currentLang === 'de') {
        // German plural handling
        keywordList.push(plantData.name.toLowerCase() + 'n');
      } else if (currentLang === 'es') {
        // Spanish plural handling
        keywordList.push(plantData.name.toLowerCase() + 's');
      } else if (currentLang === 'fr') {
        // French plural handling
        keywordList.push(plantData.name.toLowerCase() + 's');
      }
      
      // Add emoji if available
      if (plantData.emoji) {
        keywordList.push(plantData.emoji);
      }
      
      // Add alternative names/translations
      if (plantData.alternativeNames) {
        keywordList.push(...plantData.alternativeNames.map(name => name.toLowerCase()));
      }
      
      plantKeywords[plantKey] = keywordList;
    }
  }
  
  return {
    base: baseKeywords,
    activities: activityKeywords,
    templates: templateKeywords,
    plants: plantKeywords
  };
}

/**
 * Detect if a calendar is garden-related using dynamic keywords
 * @param {Object} calendar - Calendar object with summary property
 * @returns {boolean} - Whether the calendar is garden-related
 */
export function isGardenCalendar(calendar) {
  const summary = calendar.summary.toLowerCase();
  const keywords = generateDynamicKeywords();
  
  // Check base garden keywords
  if (keywords.base.some(keyword => summary.includes(keyword.toLowerCase()))) {
    return true;
  }
  
  // Check plant-specific keywords
  for (const [plantType, plantKeywords] of Object.entries(keywords.plants)) {
    if (plantKeywords.some(keyword => summary.includes(keyword.toLowerCase()))) {
      return true;
    }
  }
  
  // Check activity keywords
  for (const [activityType, activityKeywords] of Object.entries(keywords.activities)) {
    if (activityKeywords.some(keyword => summary.includes(keyword.toLowerCase()))) {
      return true;
    }
  }
  
  // Check template keywords
  for (const [templateType, templateKeywords] of Object.entries(keywords.templates)) {
    if (templateKeywords.some(keyword => summary.includes(keyword.toLowerCase()))) {
      return true;
    }
  }
  
  return false;
}

/**
 * Group calendars by similarity using dynamic detection
 * @param {Array} calendars - Array of calendar objects
 * @returns {Object} - Grouped calendars by similarity
 */
export function groupSimilarCalendars(calendars) {
  const groups = {};
  const keywords = generateDynamicKeywords();
  
  calendars.forEach(calendar => {
    const summary = calendar.summary.toLowerCase();
    let matched = false;
    
    // Check for plant-specific calendars
    for (const [plantType, plantKeywords] of Object.entries(keywords.plants)) {
      if (plantKeywords.some(keyword => summary.includes(keyword.toLowerCase()))) {
        if (!groups[plantType]) groups[plantType] = [];
        groups[plantType].push({ ...calendar, detectedType: 'plant', plantType });
        matched = true;
        break;
      }
    }
    
    if (matched) return;
    
    // Check for activity-specific calendars
    for (const [activityType, activityKeywords] of Object.entries(keywords.activities)) {
      if (activityKeywords.some(keyword => summary.includes(keyword.toLowerCase()))) {
        if (!groups[activityType]) groups[activityType] = [];
        groups[activityType].push({ ...calendar, detectedType: 'activity', activityType });
        matched = true;
        break;
      }
    }
    
    if (matched) return;
    
    // Check for template-specific calendars
    for (const [templateType, templateKeywords] of Object.entries(keywords.templates)) {
      if (templateKeywords.some(keyword => summary.includes(keyword.toLowerCase()))) {
        if (!groups[templateType]) groups[templateType] = [];
        groups[templateType].push({ ...calendar, detectedType: 'template', templateType });
        matched = true;
        break;
      }
    }
    
    if (matched) return;
    
    // General garden calendars
    if (isGardenCalendar(calendar)) {
      if (!groups['general']) groups['general'] = [];
      groups['general'].push({ ...calendar, detectedType: 'general' });
    }
  });
  
  return groups;
}

/**
 * Find duplicate calendars within groups
 * @param {Object} groupedCalendars - Calendars grouped by similarity
 * @returns {Array} - Array of duplicate groups with 2+ calendars
 */
export function findDuplicateGroups(groupedCalendars) {
  const duplicates = [];
  
  for (const [groupName, calendars] of Object.entries(groupedCalendars)) {
    if (calendars.length > 1) {
      duplicates.push({
        groupName,
        type: calendars[0].detectedType,
        calendars,
        count: calendars.length
      });
    }
  }
  
  return duplicates;
}

/**
 * Generate suggestions for calendar cleanup
 * @param {Array} duplicateGroups - Array of duplicate groups
 * @returns {Array} - Array of cleanup suggestions
 */
export function generateCleanupSuggestions(duplicateGroups) {
  const suggestions = [];
  
  duplicateGroups.forEach(group => {
    const { groupName, calendars, type } = group;
    
    // Sort by creation date (newer first) or primary status
    const sortedCalendars = calendars.sort((a, b) => {
      if (a.primary && !b.primary) return -1;
      if (!a.primary && b.primary) return 1;
      // If no creation date, sort by summary length (shorter = cleaner)
      return a.summary.length - b.summary.length;
    });
    
    const keepCalendar = sortedCalendars[0];
    const deleteCalendars = sortedCalendars.slice(1);
    
    suggestions.push({
      groupName,
      type,
      action: 'consolidate',
      keep: keepCalendar,
      delete: deleteCalendars,
      reason: `Found ${calendars.length} similar ${type} calendars for "${groupName}"`
    });
  });
  
  return suggestions;
}

/**
 * Get calendar type icon using dynamic detection
 * @param {string} type - Calendar type (plant, activity, template, general)
 * @param {string} subType - Specific subtype
 * @returns {string} - Icon emoji
 */
export function getCalendarTypeIcon(type, subType) {
  const keywords = generateDynamicKeywords();
  
  switch (type) {
    case 'plant':
      // Try to get emoji from plant data
      const plantRegistry = getPlantRegistry();
      const plantData = plantRegistry.get(subType);
      if (plantData && plantData.emoji) {
        return plantData.emoji;
      }
      // Fallback to keywords
      const plantKeywords = keywords.plants[subType];
      if (plantKeywords) {
        const emojiKeyword = plantKeywords.find(k => /[\u{1F300}-\u{1F9FF}]/u.test(k));
        if (emojiKeyword) return emojiKeyword;
      }
      return '🌱';
      
    case 'activity':
      const activityKeywords = keywords.activities[subType];
      if (activityKeywords) {
        const emojiKeyword = activityKeywords.find(k => /[\u{1F300}-\u{1F9FF}]/u.test(k));
        if (emojiKeyword) return emojiKeyword;
      }
      return '🔧';
      
    case 'template':
      const templateKeywords = keywords.templates[subType];
      if (templateKeywords) {
        const emojiKeyword = templateKeywords.find(k => /[\u{1F300}-\u{1F9FF}]/u.test(k));
        if (emojiKeyword) return emojiKeyword;
      }
      return '🌿';
      
    default:
      return '🗓️';
  }
}

/**
 * Get localized calendar name suggestion
 * @param {string} type - Calendar type
 * @param {string} subType - Specific subtype
 * @returns {string} - Localized calendar name
 */
export function getLocalizedCalendarName(type, subType) {
  const currentYear = new Date().getFullYear();
  
  switch (type) {
    case 'plant':
      const plantRegistry = getPlantRegistry();
      const plantData = plantRegistry.get(subType);
      if (plantData) {
        const plantIcon = getCalendarTypeIcon(type, subType);
        return `${plantIcon} ${plantData.name} ${t('calendar.garden')} ${currentYear}`;
      }
      return `🌱 ${subType} ${t('calendar.garden')} ${currentYear}`;
      
    case 'activity':
      const activityName = t(`task.${subType}`);
      const activityIcon = getCalendarTypeIcon(type, subType);
      return `${activityIcon} ${t('calendar.garden')}: ${activityName} ${currentYear}`;
      
    case 'template':
      const templateName = t(`plant.category.${subType}`);
      const templateIcon = getCalendarTypeIcon(type, subType);
      return `${templateIcon} ${templateName} ${t('calendar.garden')} ${currentYear}`;
      
    default:
      return `🌱 ${t('calendar.gardening')} ${t('calendar.garden')} ${currentYear}`;
  }
}

/**
 * Debug function to show detected keywords for current language
 * @returns {Object} - All generated keywords for debugging
 */
export function debugKeywords() {
  const keywords = generateDynamicKeywords();
  console.log('🔍 Dynamic Calendar Keywords:', {
    language: getCurrentLanguage(),
    baseKeywords: keywords.base,
    activityCount: Object.keys(keywords.activities).length,
    templateCount: Object.keys(keywords.templates).length,
    plantCount: Object.keys(keywords.plants).length,
    samplePlants: Object.keys(keywords.plants).slice(0, 5)
  });
  return keywords;
}

/**
 * Test function to demonstrate multi-language calendar detection
 * Call this from browser console to see the system in action
 * @returns {Object} - Test results showing detection across languages
 */
export function testMultiLanguageDetection() {
  console.log('🌍 Testing Multi-Language Calendar Detection System');
  
  // Test calendars in different languages
  const testCalendars = [
    { summary: '🍅 Tomatoes Garden 2024' },
    { summary: '🥕 Karotten Garten 2024' },
    { summary: '🌹 Roses Jardin 2024' },
    { summary: '🍓 Fresas Jardín 2024' },
    { summary: '🌿 Basilico Giardino 2024' },
    { summary: '💧 Garden Watering Schedule' },
    { summary: '🌱 Garten Pflege 2024' },
    { summary: '🔧 Jardin Entretien' },
    { summary: 'My Regular Calendar' },
    { summary: 'Work Schedule' }
  ];
  
  const keywords = generateDynamicKeywords();
  const results = {
    language: getCurrentLanguage(),
    detectedGardenCalendars: [],
    nonGardenCalendars: [],
    groupedCalendars: {},
    keywordStats: {
      baseKeywords: keywords.base.length,
      plantKeywords: Object.keys(keywords.plants).length,
      activityKeywords: Object.keys(keywords.activities).length,
      templateKeywords: Object.keys(keywords.templates).length
    }
  };
  
  // Test detection
  testCalendars.forEach(calendar => {
    const isGarden = isGardenCalendar(calendar);
    if (isGarden) {
      results.detectedGardenCalendars.push(calendar.summary);
    } else {
      results.nonGardenCalendars.push(calendar.summary);
    }
  });
  
  // Test grouping
  results.groupedCalendars = groupSimilarCalendars(testCalendars.filter(cal => isGardenCalendar(cal)));
  
  console.log('📊 Test Results:', results);
  console.log('🔍 Sample Keywords:', {
    base: keywords.base.slice(0, 5),
    plants: Object.keys(keywords.plants).slice(0, 5),
    activities: Object.keys(keywords.activities),
    templates: Object.keys(keywords.templates)
  });
  
  return results;
}

// Make test function available globally for console testing
if (typeof window !== 'undefined') {
  window.testMultiLanguageDetection = testMultiLanguageDetection;
  window.debugCalendarKeywords = debugKeywords;
} 