/**
 * Intelligent Event System
 * Creates appropriate events for all plant types based on their actual phases
 * Supports cannabis, vegetables, fruits, herbs, and trees
 */

import { getDB } from './connection.js';
import { getPhaseEmoji, getWateringInterval, getPhaseCheckpoints } from './utils.js';
import { t } from '../i18n/index.js';

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
  const phaseLabel = t('phase.' + phaseName) || phaseName;
  
  // Special handling for different plant types
  switch (phaseName) {
    case 'harvest':
      return `🌾 ${phaseLabel} ${plantName}`;
    case 'fruiting':
    case 'productive':
    case 'establishment':
    case 'juvenile':
    case 'dormancy':
    case 'germination':
    case 'seedling':
    case 'vegetative':
    case 'flowering':
    case 'leafing':
    case 'rooting':
    case 'maturing':
    case 'sprouting':
    case 'tuberization':
    case 'bulking':
    case 'heading':
    case 'bolting':
    case 'seed_production':
    case 'transplant':
    case 'preflower':
      return `${phaseEmoji} ${plantName}: ${phaseLabel}`;
    default:
      // For unknown phases, create a generic title
      return `${phaseEmoji} ${plantName}: ${phaseLabel}`;
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
  let description = `${phaseData.description}\n\n${t('event.details.description') || 'Care Instructions:'}\n${phaseData.care}`;
  
  // Add plant-specific care tips if available
  if (plantData.careTips) {
    description += `\n\n${t('plant_details.care_tips') || 'Care Tips:'}\n`;
    Object.entries(plantData.careTips).forEach(([key, value]) => {
      const label = t('care_tips.' + key) || key;
      description += `- ${label}: ${value}\n`;
    });
  }
  
  // Add common problems for final phases
  if (isFinalPhase(phaseName, plantData) && plantData.commonProblems) {
    description += `\n\n${t('plant_details.common_problems') || 'Common Problems to Watch For:'}\n`;
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
 * Hilfsfunktion für Medium-spezifische Werte
 * @param {Object} plantData - Plant data
 * @param {string} phaseName - Phase name
 * @param {string} medium - Medium name
 * @returns {Object} Medium-specific data
 */
function getPhaseMediumData(plantData, phaseName, medium = 'soil') {
  const phases = getPlantPhases(plantData);
  const phaseData = phases[phaseName];
  
  if (!phaseData) {
    return {};
  }
  
  // Check if phase has medium-specific data (new structure)
  if (phaseData[medium]) {
    return phaseData[medium];
  }
  
  // Fallback to old structure or direct phase data
  return phaseData || {};
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
  let plantingDescription = `${t('event.details.description') || 'Start planting'} ${plantData.name}`;
  if (plantData.legalNote) {
    plantingDescription += `\n\n⚠️ ${t('plant_details.legal_notice') || 'LEGAL NOTICE:'} ${plantData.legalNote}`;
  }
  if (plantData.careTips && Object.keys(plantData.careTips).length > 0) {
    plantingDescription += `\n\n${t('plant_details.care_tips') || 'Care Tips:'}\n`;
    Object.entries(plantData.careTips).forEach(([key, value]) => {
      const label = t('care_tips.' + key) || key;
      plantingDescription += `- ${label}: ${value}\n`;
    });
  }

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
    
    // NUR anlegen, wenn das Datum NICHT dem planting.startDate entspricht:
    if (phase.startDate !== planting.startDate) {
      await tx.store.add({
        title: eventTitle,
        date: phase.startDate,
        type: eventType,
        description: eventDescription,
        plantingId,
        calendarId: planting.calendarId
      });
    }

    // Add weekly check-ins for longer phases (more than 14 days) if enabled
    if (finalReminderOptions.weeklyChecks && phase.days > 14) {
      const weeklyChecks = Math.floor(phase.days / 7);
      for (let week = 1; week <= weeklyChecks; week++) {
        const checkDate = new Date(phase.startDate);
        checkDate.setDate(checkDate.getDate() + (week * 7));
        
        if (checkDate < new Date(completionDate)) {
          const weekCheckLabel = t('calendar.week_check', { week }) || `Week ${week} check`;
          const phaseLabel = t('phase.' + phase.name) || phase.name;
          await tx.store.add({
            title: `📋 ${plantData.name}: ${weekCheckLabel} (${phaseLabel})`,
            date: checkDate.toISOString().split('T')[0],
            type: 'maintenance',
            description: `Weekly check during ${phaseLabel} phase\n\n${phaseData.care}\n\nLook for signs of:\n${getPhaseCheckpoints(phase.name, plantData)}`,
            plantingId,
            calendarId: planting.calendarId
          });
        }
      }
    }

    // --- NEW: Per-phase reminder logic ---
    const phaseCare = reminderOptions.phaseCare || {};
    const careSettings = phaseCare[phase.name] || {};
    // Watering
    if (careSettings.watering) {
      await createWateringEvents(
        tx.store,
        plantData,
        phase,
        plantingId,
        completionDate,
        careSettings.wateringInterval || finalReminderOptions.watering.interval,
        planting.calendarId,
        phase.name,
        reminderOptions.selectedMedium
      );
    }
    // Fertilizing
    if (careSettings.fertilizing) {
      await createFertilizingEvents(
        tx.store,
        plantData,
        phase,
        plantingId,
        {
          ...finalReminderOptions.fertilizing,
          interval: careSettings.fertilizingInterval || finalReminderOptions.fertilizing.interval
        },
        planting.calendarId,
        phase.name,
        reminderOptions.selectedMedium
      );
    }
    // --- END NEW ---

    // --- OLD (remove after migration):
    // Add watering reminders only if enabled
    // if (finalReminderOptions.watering?.enabled) {
    //   await createWateringEvents(tx.store, plantData, phase, plantingId, completionDate, finalReminderOptions.watering.interval, planting.calendarId, phase.name, reminderOptions.selectedMedium);
    // }
    // Add fertilizing reminders only if enabled
    // if (finalReminderOptions.fertilizing?.enabled) {
    //   await createFertilizingEvents(tx.store, plantData, phase, plantingId, finalReminderOptions.fertilizing, planting.calendarId, phase.name, reminderOptions.selectedMedium);
    // }
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
 * @param {string} selectedPhase - Selected phase name
 * @param {string} selectedMedium - Selected medium
 */
async function createWateringEvents(store, plantData, phase, plantingId, completionDate, wateringInterval, calendarId, selectedPhase = null, selectedMedium = null) {
  // Hole Medium-spezifische Daten
  const phaseName = selectedPhase || phase.name;
  const medium = selectedMedium || 'soil';
  const mediumData = getPhaseMediumData(plantData, phaseName, medium);
  let interval = wateringInterval;
  if (!interval && mediumData?.watering?.interval !== undefined) {
    interval = mediumData.watering.interval;
  } else if (!interval && phase?.watering?.interval !== undefined) {
    interval = phase.watering.interval;
  } else if (!interval && plantData.defaultCare?.watering?.interval) {
    interval = plantData.defaultCare.watering.interval;
  } else if (!interval) {
    interval = getWateringInterval(plantData.category, phaseName);
  }
  if (interval === 0) return;
  let wateringDate = new Date(phase.startDate);
  const phaseEnd = new Date(wateringDate);
  phaseEnd.setDate(phaseEnd.getDate() + phase.days);
  while (wateringDate < phaseEnd) {
    const wateringDescription = mediumData?.watering?.description || phase?.watering?.description || plantData.careTips?.watering || 'Check soil moisture and water as needed';
    await store.add({
      title: `💧 Water ${plantData.name}`,
      date: wateringDate.toISOString().split('T')[0],
      type: 'watering',
      description: `${wateringDescription}\n\nPhase: ${phaseName}\nCare: ${phase?.care || 'Follow general watering guidelines'}`,
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
 * @param {string} selectedPhase - Selected phase name
 * @param {string} selectedMedium - Selected medium
 */
async function createFertilizingEvents(store, plantData, phase, plantingId, fertilizingOptions, calendarId, selectedPhase = null, selectedMedium = null) {
  const phaseName = selectedPhase || phase.name;
  const medium = selectedMedium || 'soil';
  const mediumData = getPhaseMediumData(plantData, phaseName, medium);
  let interval = fertilizingOptions?.interval;
  if (!interval && mediumData?.fertilizing?.interval !== undefined) {
    interval = mediumData.fertilizing.interval;
  } else if (!interval && phase?.fertilizing?.interval !== undefined) {
    interval = phase.fertilizing.interval;
  } else if (!interval && plantData.defaultCare?.fertilizing?.interval) {
    interval = plantData.defaultCare.fertilizing.interval;
  } else if (!interval) {
    interval = 14;
  }
  if (interval === 0) return;
  if (phase.days > 14 && (phaseName === 'vegetative' || phaseName === 'flowering' || phaseName === 'fruiting' || phaseName === 'productive' || phaseName === 'rooting' || phaseName === 'maturing')) {
    const fertilizeDate = new Date(phase.startDate);
    const delay = fertilizingOptions?.delay || 7;
    fertilizeDate.setDate(fertilizeDate.getDate() + delay);
    const phaseEnd = new Date(phase.startDate);
    phaseEnd.setDate(phaseEnd.getDate() + phase.days);
    while (fertilizeDate < phaseEnd) {
      const fertilizingDescription = mediumData?.fertilizing?.description || phase?.fertilizing?.description || plantData.careTips?.fertilizing || 'Apply appropriate fertilizer';
      await store.add({
        title: `🌿 Fertilize ${plantData.name}`,
        date: fertilizeDate.toISOString().split('T')[0],
        type: 'fertilizing',
        description: `${fertilizingDescription}\n\nPhase: ${phaseName}`,
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