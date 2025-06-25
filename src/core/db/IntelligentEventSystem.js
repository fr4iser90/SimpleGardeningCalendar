/**
 * Intelligent Event System
 * Creates appropriate events for all plant types based on their actual phases
 * Supports cannabis, vegetables, fruits, herbs, and trees
 */

import { getDB } from './connection.js';
import { getPhaseEmoji, getWateringInterval, getPhaseCheckpoints } from './utils.js';

/**
 * Get phases from plant data, handling both old and new structures
 * @param {Object} plantData - Plant data object
 * @returns {Object} Phases object
 */
function getPlantPhases(plantData) {
  // Handle new structure: environments.indoor.phases
  if (plantData.environments?.indoor?.phases) {
    return plantData.environments.indoor.phases;
  }
  
  // Handle new structure: environments.outdoor.phases (fallback)
  if (plantData.environments?.outdoor?.phases) {
    return plantData.environments.outdoor.phases;
  }
  
  // Handle old structure: direct phases
  if (plantData.phases) {
    return plantData.phases;
  }
  
  // Fallback: empty phases object
  console.warn(`No phases found for plant ${plantData.name}`);
  return {};
}

/**
 * Get intelligent event title based on phase and plant type
 * @param {string} phaseName - Phase name
 * @param {Object} plantData - Plant data
 * @param {boolean} isLastPhase - Whether this is the final phase
 * @returns {string} Event title
 */
function getIntelligentEventTitle(phaseName, plantData, isLastPhase = false) {
  const phaseEmoji = getPhaseEmoji(phaseName);
  const plantName = plantData.name;
  
  // Special handling for different plant types
  switch (phaseName) {
    case 'harvest':
      return `🌾 Harvest ${plantName}`;
    case 'fruiting':
      return `🍅 ${plantName}: Fruiting phase`;
    case 'productive':
      return `🌳 ${plantName}: Productive phase`;
    case 'establishment':
      return `🌱 ${plantName}: Establishment phase`;
    case 'juvenile':
      return `🌿 ${plantName}: Juvenile growth`;
    case 'dormancy':
      return `😴 ${plantName}: Dormancy period`;
    case 'germination':
      return `🌱 Plant ${plantName}`;
    case 'seedling':
      return `🌱 ${plantName}: Seedling phase`;
    case 'vegetative':
      return `🌿 ${plantName}: Vegetative growth`;
    case 'flowering':
      return `🌸 ${plantName}: Flowering phase`;
    case 'leafing':
      return `🍃 ${plantName}: Leaf development`;
    case 'rooting':
      return `🌿 ${plantName}: Root development`;
    case 'maturing':
      return `🌾 ${plantName}: Maturation phase`;
    case 'sprouting':
      return `🌱 ${plantName}: Sprouting phase`;
    case 'tuberization':
      return `🥔 ${plantName}: Tuber formation`;
    case 'bulking':
      return `🥔 ${plantName}: Tuber growth`;
    case 'heading':
      return `🥬 ${plantName}: Head formation`;
    case 'bolting':
      return `🌾 ${plantName}: Bolting phase`;
    case 'seed_production':
      return `🌱 ${plantName}: Seed production`;
    case 'transplant':
      return `🔄 ${plantName}: Transplant phase`;
    case 'preflower':
      return `🌸 ${plantName}: Pre-flower phase`;
    default:
      // For unknown phases, create a generic title
      return `${phaseEmoji} ${plantName}: ${phaseName} phase`;
  }
}

/**
 * Get intelligent event description based on phase and plant data
 * @param {string} phaseName - Phase name
 * @param {Object} plantData - Plant data
 * @param {Object} phaseData - Phase-specific data
 * @returns {string} Event description
 */
function getIntelligentEventDescription(phaseName, plantData, phaseData) {
  let description = `${phaseData.description}\n\nCare Instructions:\n${phaseData.care}`;
  
  // Add plant-specific care tips if available
  if (plantData.careTips) {
    description += `\n\nGeneral Care Tips:\n`;
    Object.entries(plantData.careTips).forEach(([key, value]) => {
      description += `- ${key}: ${value}\n`;
    });
  }
  
  // Add common problems for final phases
  if (isFinalPhase(phaseName, plantData) && plantData.commonProblems) {
    description += `\n\nCommon Problems to Watch For:\n`;
    Object.entries(plantData.commonProblems).forEach(([problem, solution]) => {
      description += `- ${problem}: ${solution}\n`;
    });
  }
  
  return description;
}

/**
 * Check if this is a final phase for the plant
 * @param {string} phaseName - Phase name
 * @param {Object} plantData - Plant data
 * @returns {boolean} Whether this is a final phase
 */
function isFinalPhase(phaseName, plantData) {
  const phases = getPlantPhases(plantData);
  const phaseNames = Object.keys(phases);
  const lastPhase = phaseNames[phaseNames.length - 1];
  
  return phaseName === lastPhase;
}

/**
 * Get event type based on phase and plant category
 * @param {string} phaseName - Phase name
 * @param {Object} plantData - Plant data
 * @returns {string} Event type
 */
function getIntelligentEventType(phaseName, plantData) {
  // Special handling for different phases
  switch (phaseName) {
    case 'harvest':
      return 'harvesting';
    case 'watering':
      return 'watering';
    case 'fertilizing':
      return 'fertilizing';
    case 'pruning':
      return 'pruning';
    case 'transplant':
      return 'transplanting';
    case 'pest_control':
      return 'pest_control';
    default:
      // For most phases, use 'maintenance' as default
      return 'maintenance';
  }
}

/**
 * Create intelligent events for a new planting
 * @param {Object} planting - Planting record
 * @param {Object} plantData - Plant data
 * @param {Array} phases - Calculated phases
 * @param {string} completionDate - Completion date ISO string
 * @param {Object} reminderOptions - Reminder options
 * @returns {Promise<void>}
 */
export async function createIntelligentPlantingEvents(planting, plantData, phases, completionDate, reminderOptions = {}) {
  const db = await getDB();
  const tx = db.transaction('events', 'readwrite');
  const plantingId = planting.id;
  
  // Load default settings from localStorage
  const settings = JSON.parse(localStorage.getItem('localCalendarSettings') || '{}');
  
  // Merge settings with reminder options (settings as defaults, modal options as override)
  const finalReminderOptions = {
    watering: {
      enabled: reminderOptions.watering?.enabled ?? settings.defaultWateringReminders !== false,
      interval: reminderOptions.watering?.interval || settings.defaultWateringInterval || 3
    },
    fertilizing: {
      enabled: reminderOptions.fertilizing?.enabled ?? settings.defaultFertilizingReminders !== false,
      interval: reminderOptions.fertilizing?.interval || settings.defaultFertilizingInterval || 14,
      delay: reminderOptions.fertilizing?.delay || settings.defaultFertilizingDelay || 7
    },
    phaseReminders: reminderOptions.phaseReminders ?? settings.defaultPhaseReminders !== false,
    weeklyChecks: reminderOptions.weeklyChecks ?? settings.defaultWeeklyChecks !== false,
    harvestReminder: reminderOptions.harvestReminder ?? settings.defaultHarvestReminders !== false
  };
  
  // Get phases from plant data
  const plantPhases = getPlantPhases(plantData);
  
  // Add initial planting event with legal notice if applicable
  let plantingDescription = `Start planting ${plantData.name}`;
  if (plantData.legalNote) {
    plantingDescription += `\n\n⚠️ LEGAL NOTICE: ${plantData.legalNote}`;
  }
  plantingDescription += `\n\nCare Tips:\n${Object.entries(plantData.careTips || {}).map(([key, value]) => `- ${key}: ${value}`).join('\n')}`;

  await tx.store.add({
    title: `🌱 Plant ${plantData.name}`,
    date: planting.startDate,
    type: 'planting',
    description: plantingDescription,
    plantingId,
    calendarId: planting.calendarId
  });
  
  // Add phase transition events with intelligent scheduling
  for (let i = 0; i < phases.length; i++) {
    const phase = phases[i];
    const phaseData = plantPhases[phase.name];
    
    if (!phaseData) {
      console.warn(`Phase data not found for ${phase.name} in plant ${plantData.name}`);
      continue;
    }
    
    // Create intelligent event title and description
    const eventTitle = getIntelligentEventTitle(phase.name, plantData, i === phases.length - 1);
    const eventDescription = getIntelligentEventDescription(phase.name, plantData, phaseData);
    const eventType = getIntelligentEventType(phase.name, plantData);
    
    // Add phase start event
    await tx.store.add({
      title: eventTitle,
      date: phase.startDate,
      type: eventType,
      description: eventDescription,
      plantingId,
      calendarId: planting.calendarId
    });

    // Add weekly check-ins for longer phases (more than 14 days) if enabled
    if (finalReminderOptions.weeklyChecks && phase.days > 14) {
      const weeklyChecks = Math.floor(phase.days / 7);
      for (let week = 1; week <= weeklyChecks; week++) {
        const checkDate = new Date(phase.startDate);
        checkDate.setDate(checkDate.getDate() + (week * 7));
        
        if (checkDate < new Date(completionDate)) {
          await tx.store.add({
            title: `📋 ${plantData.name}: Week ${week} check (${phase.name})`,
            date: checkDate.toISOString().split('T')[0],
            type: 'maintenance',
            description: `Weekly check during ${phase.name} phase\n\n${phaseData.care}\n\nLook for signs of:\n${getPhaseCheckpoints(phase.name, plantData)}`,
            plantingId,
            calendarId: planting.calendarId
          });
        }
      }
    }

    // Add watering reminders only if enabled
    if (finalReminderOptions.watering?.enabled) {
      await createWateringEvents(tx.store, plantData, phase, plantingId, completionDate, finalReminderOptions.watering.interval, planting.calendarId);
    }

    // Add fertilizing reminders only if enabled
    if (finalReminderOptions.fertilizing?.enabled) {
      await createFertilizingEvents(tx.store, plantData, phase, plantingId, finalReminderOptions.fertilizing, planting.calendarId);
    }
  }
  
  await tx.done;
}

/**
 * Create watering events for a phase
 * @param {Object} store - Transaction store
 * @param {Object} plantData - Plant data
 * @param {Object} phase - Phase object
 * @param {number} plantingId - Planting ID
 * @param {string} completionDate - Completion date
 * @param {number} wateringInterval - Watering interval in days
 */
async function createWateringEvents(store, plantData, phase, plantingId, completionDate, wateringInterval, calendarId) {
  // Use custom interval or fall back to plant-specific default
  let interval = wateringInterval || getWateringInterval(plantData.category, phase.name);
  
  // Adjust watering frequency based on plant type
  if (plantData.category === 'Fruit Trees' || plantData.category === 'fruit-trees') {
    // Trees need less frequent watering
    interval = Math.max(interval, 7); // At least weekly for trees
  } else if (plantData.category === 'Herbs' && phase.days > 365) {
    // Long-lived herbs need less frequent watering
    interval = Math.max(interval, 5);
  }
  
  // Skip watering events for very long phases (like tree establishment)
  if (phase.days > 365) {
    // For very long phases, only create monthly watering reminders
    interval = 30;
  }
  
  let wateringDate = new Date(phase.startDate);
  const phaseEnd = new Date(wateringDate);
  phaseEnd.setDate(phaseEnd.getDate() + phase.days);

  // Get phase data for care instructions
  const plantPhases = getPlantPhases(plantData);
  const phaseData = plantPhases[phase.name];

  while (wateringDate < phaseEnd) {
    await store.add({
      title: `💧 Water ${plantData.name}`,
      date: wateringDate.toISOString().split('T')[0],
      type: 'watering',
      description: `${plantData.careTips?.watering || 'Check soil moisture and water as needed'}\n\nPhase: ${phase.name}\nCare: ${phaseData?.care || 'Follow general watering guidelines'}`,
      plantingId,
      calendarId
    });
    wateringDate.setDate(wateringDate.getDate() + interval);
  }
}

/**
 * Create fertilizing events for a phase
 * @param {Object} store - Transaction store
 * @param {Object} plantData - Plant data
 * @param {Object} phase - Phase object
 * @param {number} plantingId - Planting ID
 * @param {Object} fertilizingOptions - Fertilizing options with interval and delay
 */
async function createFertilizingEvents(store, plantData, phase, plantingId, fertilizingOptions, calendarId) {
  if (phase.days > 14 && (phase.name === 'vegetative' || phase.name === 'flowering' || phase.name === 'fruiting' || phase.name === 'productive')) {
    const fertilizeDate = new Date(phase.startDate);
    // Apply delay if specified
    const delay = fertilizingOptions?.delay || 7;
    fertilizeDate.setDate(fertilizeDate.getDate() + delay);
    
    const phaseEnd = new Date(phase.startDate);
    phaseEnd.setDate(phaseEnd.getDate() + phase.days);
    
    // Use custom interval or default to 14 days
    const interval = fertilizingOptions?.interval || 14;
    
    while (fertilizeDate < phaseEnd) {
      await store.add({
        title: `🌿 Fertilize ${plantData.name}`,
        date: fertilizeDate.toISOString().split('T')[0],
        type: 'fertilizing',
        description: `${plantData.careTips?.fertilizing || 'Apply appropriate fertilizer'}\n\nPhase: ${phase.name}`,
        plantingId,
        calendarId
      });
      fertilizeDate.setDate(fertilizeDate.getDate() + interval);
    }
  }
}

export default {
  createIntelligentPlantingEvents
}; 