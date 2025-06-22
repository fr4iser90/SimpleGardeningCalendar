/**
 * Calendar Utilities
 * Handles garden calendar detection and management logic
 */

// Garden calendar detection keywords
export const GARDEN_KEYWORDS = [
  'garden', 'gardening', 'plant', 'planting', 'watering', 'fertilizing', 
  'harvesting', 'maintenance', 'pruning', 'transplanting', 'pest',
  '🌱', '🌿', '🌾', '💧', '🔧', '🍅', '🥕', '🌹', '🌸', '🍎'
];

// Activity type keywords for calendar organization
export const ACTIVITY_KEYWORDS = {
  planting: ['planting', 'plant', 'sow', 'seed', '🌱'],
  watering: ['watering', 'water', 'irrigation', '💧'],
  fertilizing: ['fertilizing', 'fertilizer', 'feeding', 'compost', '🌿'],
  harvesting: ['harvesting', 'harvest', 'picking', '🌾'],
  maintenance: ['maintenance', 'pruning', 'trimming', 'weeding', '🔧']
};

// Garden template keywords
export const TEMPLATE_KEYWORDS = {
  ornamental: ['ornamental', 'flower', 'decorative', '🌸'],
  vegetable: ['vegetable', 'veggie', 'food', '🥕'],
  herb: ['herb', 'herbs', 'culinary', '🌿'],
  fruit: ['fruit', 'tree', 'berry', '🍎']
};

// Common plant keywords (extendable)
export const PLANT_KEYWORDS = {
  tomato: ['tomato', 'tomatoes', '🍅'],
  carrot: ['carrot', 'carrots', '🥕'],
  rose: ['rose', 'roses', '🌹'],
  basil: ['basil', '🌿'],
  strawberry: ['strawberry', 'strawberries', '🍓'],
  pepper: ['pepper', 'peppers', '🌶️'],
  lettuce: ['lettuce', '🥬'],
  cucumber: ['cucumber', 'cucumbers', '🥒']
};

/**
 * Detect if a calendar is garden-related
 * @param {Object} calendar - Calendar object with summary property
 * @returns {boolean} - Whether the calendar is garden-related
 */
export function isGardenCalendar(calendar) {
  const summary = calendar.summary.toLowerCase();
  return GARDEN_KEYWORDS.some(keyword => 
    summary.includes(keyword.toLowerCase())
  );
}

/**
 * Group calendars by similarity (detect duplicates)
 * @param {Array} calendars - Array of calendar objects
 * @returns {Object} - Grouped calendars by similarity
 */
export function groupSimilarCalendars(calendars) {
  const groups = {};
  
  calendars.forEach(calendar => {
    const summary = calendar.summary.toLowerCase();
    
    // Check for plant-specific calendars
    for (const [plantType, keywords] of Object.entries(PLANT_KEYWORDS)) {
      if (keywords.some(keyword => summary.includes(keyword.toLowerCase()))) {
        if (!groups[plantType]) groups[plantType] = [];
        groups[plantType].push({ ...calendar, detectedType: 'plant', plantType });
        return;
      }
    }
    
    // Check for activity-specific calendars
    for (const [activityType, keywords] of Object.entries(ACTIVITY_KEYWORDS)) {
      if (keywords.some(keyword => summary.includes(keyword.toLowerCase()))) {
        if (!groups[activityType]) groups[activityType] = [];
        groups[activityType].push({ ...calendar, detectedType: 'activity', activityType });
        return;
      }
    }
    
    // Check for template-specific calendars
    for (const [templateType, keywords] of Object.entries(TEMPLATE_KEYWORDS)) {
      if (keywords.some(keyword => summary.includes(keyword.toLowerCase()))) {
        if (!groups[templateType]) groups[templateType] = [];
        groups[templateType].push({ ...calendar, detectedType: 'template', templateType });
        return;
      }
    }
    
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
 * Format calendar display name for UI
 * @param {Object} calendar - Calendar object
 * @returns {string} - Formatted display name
 */
export function formatCalendarDisplayName(calendar) {
  const maxLength = 50;
  let name = calendar.summary;
  
  if (name.length > maxLength) {
    name = name.substring(0, maxLength - 3) + '...';
  }
  
  return name;
}

/**
 * Get calendar type icon
 * @param {string} type - Calendar type (plant, activity, template, general)
 * @param {string} subType - Specific subtype
 * @returns {string} - Icon emoji
 */
export function getCalendarTypeIcon(type, subType) {
  switch (type) {
    case 'plant':
      return PLANT_KEYWORDS[subType]?.[PLANT_KEYWORDS[subType].length - 1] || '🌱';
    case 'activity':
      return ACTIVITY_KEYWORDS[subType]?.[ACTIVITY_KEYWORDS[subType].length - 1] || '🔧';
    case 'template':
      return TEMPLATE_KEYWORDS[subType]?.[TEMPLATE_KEYWORDS[subType].length - 1] || '🌿';
    default:
      return '🗓️';
  }
} 