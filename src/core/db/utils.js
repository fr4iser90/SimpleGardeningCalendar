/**
 * Database Utility Functions
 * Common helper functions used across DB operations
 */

/**
 * Convert Fahrenheit to Celsius and format temperature display
 * @param {string} fahrenheitRange - Temperature range like "70-85°F"
 * @returns {string} Formatted temperature with both F and C
 */
export function formatTemperature(fahrenheitRange) {
  if (!fahrenheitRange || typeof fahrenheitRange !== 'string') return fahrenheitRange;
  
  // Match temperature patterns like "70-85°F", "70°F", "85°F", etc.
  return fahrenheitRange.replace(/(\d+)(?:-(\d+))?°?F/g, (match, temp1, temp2) => {
    const f1 = parseInt(temp1);
    const c1 = Math.round((f1 - 32) * 5 / 9);
    
    if (temp2) {
      const f2 = parseInt(temp2);
      const c2 = Math.round((f2 - 32) * 5 / 9);
      return `${f1}-${f2}°F (${c1}-${c2}°C)`;
    } else {
      return `${f1}°F (${c1}°C)`;
    }
  });
}

/**
 * Format date for display in different languages
 * @param {string} mmddString - Date string in MM-DD format
 * @param {string} language - Language code (en, de, fr, es, it)
 * @returns {string} Formatted date string
 */
export function formatDateForDisplay(mmddString, language = 'en') {
  if (!mmddString || !mmddString.includes('-')) return mmddString;
  
  const [month, day] = mmddString.split('-');
  const monthNum = parseInt(month);
  const dayNum = parseInt(day);
  
  // Month names in different languages
  const monthNames = {
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    de: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    fr: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
    es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    it: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic']
  };
  
  const months = monthNames[language] || monthNames.en;
  const monthName = months[monthNum - 1];
  
  // Format based on language preference
  if (language === 'de') {
    // German format: DD. MMM (e.g., "15. Apr")
    return `${dayNum}. ${monthName}`;
  } else if (language === 'en') {
    // English format: MMM DD (e.g., "Apr 15")
    return `${monthName} ${dayNum}`;
  } else {
    // Default format with both for clarity: DD MMM (MM-DD)
    return `${dayNum} ${monthName} (${mmddString})`;
  }
}

/**
 * Get phase emoji for visual display
 * @param {string} phase - Phase name
 * @returns {string} Emoji representing the phase
 */
export function getPhaseEmoji(phase) {
  const emojis = {
    germination: '🌱',
    sprouting: '🌱',
    seedling: '🌿',
    vegetative: '🍃',
    leafing: '🍃',
    rooting: '🌿',
    preflower: '🌸',
    flowering: '🌸',
    blooming: '🌺',
    fruiting: '🍅',
    tuberization: '🥔',
    bulking: '🥔',
    harvest: '🌾',
    maturation: '🌾',
    establishment: '🌱',
    dormancy: '😴'
  };
  return emojis[phase] || '📅';
}

/**
 * Get watering interval in days based on plant category and phase
 * @param {string} category - Plant category
 * @param {string} phase - Growth phase
 * @returns {number} Watering interval in days
 */
export function getWateringInterval(category, phase) {
  const intervals = {
    'Cannabis': {
      'germination': 1,
      'seedling': 2,
      'vegetative': 2,
      'flowering': 2,
      'default': 2
    },
    'Vegetables': {
      'germination': 1,
      'seedling': 2,
      'vegetative': 3,
      'flowering': 2,
      'fruiting': 2,
      'default': 3
    },
    'Herbs': {
      'default': 4
    },
    'Fruits': {
      'default': 3
    }
  };
  
  return intervals[category]?.[phase] || intervals[category]?.['default'] || 3;
}

/**
 * Get phase-specific checkpoints for monitoring
 * @param {string} phase - Growth phase
 * @param {Object} plantData - Plant data object
 * @returns {string} Checkpoint description
 */
export async function getPhaseCheckpoints(phase, plantData) {
  // Import translation function dynamically to avoid circular imports
  const { t } = await import('../i18n/index.js');
  
  // Get the actual phase data from the plant
  const phases = plantData.phases || plantData.environments?.indoor?.phases || plantData.environments?.outdoor?.phases || {};
  const phaseData = phases[phase];
  
  // Use the actual phase description and care from the database
  let phaseChecks = '';
  
  if (phaseData) {
    if (phaseData.description) {
      phaseChecks += phaseData.description;
    }
    if (phaseData.care) {
      if (phaseChecks) phaseChecks += '\n';
      phaseChecks += phaseData.care;
    }
  }
  
  // Fallback if no phase data found
  if (!phaseChecks) {
    phaseChecks = t('checkpoints.general') || 'General plant health, growth progress';
  }
  
  // Add plant-specific problems to watch for
  if (plantData.commonProblems) {
    const problems = Object.keys(plantData.commonProblems).slice(0, 3).join(', ');
    phaseChecks += `\n${t('checkpoints.common_issues') || 'Common issues'}: ${problems}`;
  }
  
  return phaseChecks;
}

export default {
  formatTemperature,
  formatDateForDisplay,
  getPhaseEmoji,
  getWateringInterval,
  getPhaseCheckpoints
}; 