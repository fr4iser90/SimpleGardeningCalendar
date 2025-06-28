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
  
  // Special handling for harvest phase only
  if (phaseName === 'harvest') {
    return `🌾 ${t('task.harvesting')} ${plantName}`;
  }
  
  // All other phases use the same pattern
  return `${phaseEmoji} ${plantName}: ${phaseLabel}`;
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
  // Special handling for harvest phase only
  if (phaseName === 'harvest') {
    return 'harvesting';
  }
  
  // All other phases use 'maintenance' as default
  return 'maintenance';
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
  console.log('🎯 [createIntelligentPlantingEvents] Starting event creation for:', {
    plantName: planting.plantName,
    phaseCount: phases.length,
    completionDate
  });

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
  
  console.log('🎯 [createIntelligentPlantingEvents] Reminder options:', finalReminderOptions);
  
  // Get phases from plant data
  const plantPhases = getPlantPhases(plantData);
  
  // Collect all events first
  const eventsToAdd = [];
  
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

  eventsToAdd.push({
    title: `🌱 ${t('task.planting')} ${plantData.name}`,
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
      console.warn(`🎯 [createIntelligentPlantingEvents] Phase data not found for ${phase.name} in plant ${plantData.name}`);
      continue;
    }
    
    console.log('🎯 [createIntelligentPlantingEvents] Processing phase:', {
      name: phase.name,
      hasStartEnd: !!(phase.startDate && phase.endDate),
      hasDays: !!(phase.days),
      startDate: phase.startDate,
      endDate: phase.endDate
    });

    // --- NEU: Berechnung für startDate/endDate oder days ---
    let phaseStartDate, phaseEndDate, phaseDays;
    if (phase.startDate && phase.endDate) {
      phaseStartDate = new Date(phase.startDate);
      phaseEndDate = new Date(phase.endDate);
      phaseDays = Math.round((phaseEndDate - phaseStartDate) / (1000*60*60*24));
    } else if (phase.start && phase.end) {
      phaseStartDate = new Date(phase.start);
      phaseEndDate = new Date(phase.end);
      phaseDays = Math.round((phaseEndDate - phaseStartDate) / (1000*60*60*24));
    } else {
      phaseStartDate = new Date(phase.startDate);
      phaseEndDate = new Date(phase.startDate);
      phaseEndDate.setDate(phaseEndDate.getDate() + (phase.days || 0));
      phaseDays = phase.days || 0;
    }
    
    // --- NEU: Events nur ab Pflanzdatum ---
    const plantingDateObj = new Date(planting.startDate);
    
    // Wenn Phase vor Pflanzdatum beginnt: an Pflanzdatum anpassen
    if (phaseStartDate < plantingDateObj) {
      console.log(`🎯 [createIntelligentPlantingEvents] Phase ${phase.name} starts before planting date, adjusting to planting date`);
      
      // Berechne die ursprüngliche Phasendauer
      const originalPhaseDays = Math.round((phaseEndDate - phaseStartDate) / (1000*60*60*24));
      
      // Setze Start auf Pflanzdatum und Ende entsprechend verschieben
      phaseStartDate = new Date(plantingDateObj);
      phaseEndDate = new Date(plantingDateObj);
      phaseEndDate.setDate(phaseEndDate.getDate() + originalPhaseDays);
      
      // Aktualisiere die phase.startDate für Event-Erstellung
      phase.startDate = phaseStartDate.toISOString().split('T')[0];
      phase.endDate = phaseEndDate.toISOString().split('T')[0];
      
      console.log(`🎯 [createIntelligentPlantingEvents] Adjusted phase ${phase.name}: ${phase.startDate} - ${phase.endDate}`);
    }
    // --- ENDE NEU ---

    // Create intelligent event title and description
    const eventTitle = getIntelligentEventTitle(phase.name, plantData, i === phases.length - 1);
    const eventDescription = getIntelligentEventDescription(phase.name, plantData, phaseData);
    const eventType = getIntelligentEventType(phase.name, plantData);
    
    // NUR anlegen, wenn das Datum NICHT dem planting.startDate entspricht:
    if (phase.startDate !== planting.startDate) {
      eventsToAdd.push({
        title: eventTitle,
        date: phase.startDate,
        type: eventType,
        description: eventDescription,
        plantingId,
        calendarId: planting.calendarId
      });
    }

    // Add weekly check-ins for longer phases (more than 14 days) if enabled
    if (finalReminderOptions.weeklyChecks && phaseDays > 14) {
      const weeklyChecks = Math.floor(phaseDays / 7);
      for (let week = 1; week <= weeklyChecks; week++) {
        const checkDate = new Date(phaseStartDate);
        checkDate.setDate(checkDate.getDate() + (week * 7));
        if (checkDate < new Date(completionDate) && checkDate >= plantingDateObj) {
          // Nur Weekly Checks ab Pflanzdatum
          const weekCheckLabel = t('calendar.week_check', { week }) || `Week ${week} check`;
          const phaseLabel = t('phase.' + phase.name) || phase.name;
          const weekCheckDesc = t('calendar.weekly_check_during_phase', { phase: phaseLabel }) || `Weekly check during ${phaseLabel} phase`;
          const lookForSigns = t('calendar.look_for_signs') || 'Look for signs of:';
          const phaseCheckpoints = await getPhaseCheckpoints(phase.name, plantData);
          let description = `${weekCheckDesc}\n\n${phaseData.care}\n\n${lookForSigns}\n${phaseCheckpoints}`;
          if (plantData.commonProblems && Object.keys(plantData.commonProblems).length > 0) {
            description += `\n\n${t('plant_details.common_problems') || 'Common Problems to Watch For:'}\n`;
            Object.entries(plantData.commonProblems).forEach(([problem, solution]) => {
              description += `- ${problem}: ${solution}\n`;
            });
          }
          eventsToAdd.push({
            title: `📋 ${plantData.name}: ${weekCheckLabel} (${phaseLabel})`,
            date: checkDate.toISOString().split('T')[0],
            type: 'maintenance',
            description,
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
      const wateringEvents = await createWateringEventsData(
        plantData,
        phase,
        plantingId,
        completionDate,
        careSettings.wateringInterval || finalReminderOptions.watering.interval,
        planting.calendarId,
        phase.name,
        reminderOptions.selectedMedium
      );
      // Nur Events ab Pflanzdatum hinzufügen
      eventsToAdd.push(...wateringEvents.filter(e => new Date(e.date) >= plantingDateObj));
    }
    // Fertilizing
    if (careSettings.fertilizing) {
      const fertilizingEvents = await createFertilizingEventsData(
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
      // Nur Events ab Pflanzdatum hinzufügen
      eventsToAdd.push(...fertilizingEvents.filter(e => new Date(e.date) >= plantingDateObj));
    }
    // --- END NEW ---
  }
  
  // Now write all events to database in a single transaction
  const db = await getDB();
  const tx = db.transaction('events', 'readwrite');
  
  for (const event of eventsToAdd) {
    await tx.store.add(event);
  }
  
  await tx.done;
}

/**
 * Create watering events data for a phase (returns array of events)
 * @param {Object} plantData - Plant data
 * @param {Object} phase - Phase object
 * @param {number} plantingId - Planting ID
 * @param {string} completionDate - Completion date
 * @param {number} wateringInterval - Watering interval in days
 * @param {string} selectedPhase - Selected phase name
 * @param {string} selectedMedium - Selected medium
 * @returns {Promise<Array>} Array of watering events
 */
async function createWateringEventsData(plantData, phase, plantingId, completionDate, wateringInterval, calendarId, selectedPhase = null, selectedMedium = null) {
  const events = [];
  
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
  if (interval === 0) return events;
  
  let wateringDate = new Date(phase.startDate);
  const phaseEnd = new Date(wateringDate);
  if (phase.endDate) {
    // Verwende endDate wenn verfügbar (berechnete Phasen)
    phaseEnd.setTime(new Date(phase.endDate).getTime());
  } else {
    // Fallback auf days-basierte Berechnung
    phaseEnd.setDate(phaseEnd.getDate() + (phase.days || 0));
  }
  
  while (wateringDate < phaseEnd) {
    const wateringDescription = mediumData?.watering?.description || phase?.watering?.description || plantData.careTips?.watering || 'Check soil moisture and water as needed';
    events.push({
      title: `💧 ${t('task.watering')} ${plantData.name}`,
      date: wateringDate.toISOString().split('T')[0],
      type: 'watering',
      description: `${wateringDescription}\n\nPhase: ${phaseName}\nCare: ${phase?.care || 'Follow general watering guidelines'}`,
      plantingId,
      calendarId
    });
    wateringDate.setDate(wateringDate.getDate() + interval);
  }
  
  return events;
}

/**
 * Create fertilizing events data for a phase (returns array of events)
 * @param {Object} plantData - Plant data
 * @param {Object} phase - Phase object
 * @param {number} plantingId - Planting ID
 * @param {Object} fertilizingOptions - Fertilizing options with interval and delay
 * @param {string} selectedPhase - Selected phase name
 * @param {string} selectedMedium - Selected medium
 * @returns {Promise<Array>} Array of fertilizing events
 */
async function createFertilizingEventsData(plantData, phase, plantingId, fertilizingOptions, calendarId, selectedPhase = null, selectedMedium = null) {
  const events = [];
  
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
  if (interval === 0) return events;
  
  // Berechne phaseDays für diese Funktion
  let phaseDays;
  if (phase.startDate && phase.endDate) {
    const startDate = new Date(phase.startDate);
    const endDate = new Date(phase.endDate);
    phaseDays = Math.round((endDate - startDate) / (1000*60*60*24));
  } else if (phase.start && phase.end) {
    const startDate = new Date(phase.start);
    const endDate = new Date(phase.end);
    phaseDays = Math.round((endDate - startDate) / (1000*60*60*24));
  } else {
    phaseDays = phase.days || 0;
  }
  
  if (phaseDays > 14) {
    const fertilizeDate = new Date(phase.startDate);
    const delay = fertilizingOptions?.delay || 7;
    fertilizeDate.setDate(fertilizeDate.getDate() + delay);
    const phaseEnd = new Date(phase.startDate);
    if (phase.endDate) {
      // Verwende endDate wenn verfügbar (berechnete Phasen)
      phaseEnd.setTime(new Date(phase.endDate).getTime());
    } else {
      // Fallback auf days-basierte Berechnung
      phaseEnd.setDate(phaseEnd.getDate() + (phase.days || 0));
    }
    
    while (fertilizeDate < phaseEnd) {
      const fertilizingDescription = mediumData?.fertilizing?.description || phase?.fertilizing?.description || plantData.careTips?.fertilizing || 'Apply appropriate fertilizer';
      events.push({
        title: `🌿 ${t('task.fertilizing')} ${plantData.name}`,
        date: fertilizeDate.toISOString().split('T')[0],
        type: 'fertilizing',
        description: `${fertilizingDescription}\n\nPhase: ${phaseName}`,
        plantingId,
        calendarId
      });
      fertilizeDate.setDate(fertilizeDate.getDate() + interval);
    }
  }
  
  return events;
}

/**
 * Create watering events for a phase (legacy function - now uses data function)
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
  const events = await createWateringEventsData(plantData, phase, plantingId, completionDate, wateringInterval, calendarId, selectedPhase, selectedMedium);
  for (const event of events) {
    await store.add(event);
  }
}

/**
 * Create fertilizing events for a phase (legacy function - now uses data function)
 * @param {Object} store - Transaction store
 * @param {Object} plantData - Plant data
 * @param {Object} phase - Phase object
 * @param {number} plantingId - Planting ID
 * @param {Object} fertilizingOptions - Fertilizing options with interval and delay
 * @param {string} selectedPhase - Selected phase name
 * @param {string} selectedMedium - Selected medium
 */
async function createFertilizingEvents(store, plantData, phase, plantingId, fertilizingOptions, calendarId, selectedPhase = null, selectedMedium = null) {
  const events = await createFertilizingEventsData(plantData, phase, plantingId, fertilizingOptions, calendarId, selectedPhase, selectedMedium);
  for (const event of events) {
    await store.add(event);
  }
}

export default {
  createIntelligentPlantingEvents
}; 