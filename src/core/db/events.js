/**
 * Plant Events Database Operations
 * Handles creation and management of planting-related calendar events
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
  
  // Handle old structure: direct phases
  if (plantData.phases) {
    return plantData.phases;
  }
  
  // Fallback: empty phases object
  console.warn(`No phases found for plant ${t(plantData.name)}`);
  return {};
}

/**
 * Create all events for a new planting
 * @param {Object} planting - Planting record
 * @param {Object} plantData - Plant data
 * @param {Array} phases - Calculated phases
 * @param {string} completionDate - Completion date ISO string
 * @param {Object} reminderOptions - Reminder options
 * @returns {Promise<void>}
 */
export async function createPlantingEvents(planting, plantData, phases, completionDate, reminderOptions = {}) {
  const db = await getDB();
  const tx = db.transaction('events', 'readwrite');
  const plantingId = planting.id;
  
  // Get phases from plant data
  const plantPhases = getPlantPhases(plantData);
  
  // Add initial planting event with legal notice if applicable
  let plantingDescription = `Start planting ${t(plantData.name)}`;
  if (plantData.legalNote) {
    plantingDescription += `\n\n⚠️ LEGAL NOTICE: ${plantData.legalNote}`;
  }
  plantingDescription += `\n\nCare Tips:\n${Object.entries(plantData.careTips || {}).map(([key, value]) => `- ${key}: ${value}`).join('\n')}`;

  await tx.store.add({
    title: `🌱 Plant ${t(plantData.name)}`,
    date: planting.startDate,
    type: 'planting',
    description: plantingDescription,
    plantingId,
    calendarId: planting.calendarId
  });
  
  // Add phase transition events with enhanced scheduling
  for (let i = 0; i < phases.length; i++) {
    const phase = phases[i];
    const phaseData = plantPhases[phase.name];
    
    if (!phaseData) {
      console.warn(`Phase data not found for ${phase.name} in plant ${t(plantData.name)}`);
      continue;
    }
    
    // Add phase start event
    await tx.store.add({
      title: `${getPhaseEmoji(phase.name)} ${t(plantData.name)}: ${phase.name} phase`,
      date: phase.startDate,
      type: 'maintenance',
      description: `${phaseData.description}\n\nCare Instructions:\n${phaseData.care}`,
      plantingId,
      calendarId: planting.calendarId
    });

    // Add weekly check-ins for longer phases (more than 14 days) if enabled
    if (reminderOptions.weeklyChecks && phase.days > 14) {
      const weeklyChecks = Math.floor(phase.days / 7);
      for (let week = 1; week <= weeklyChecks; week++) {
        const checkDate = new Date(phase.startDate);
        checkDate.setDate(checkDate.getDate() + (week * 7));
        
        if (checkDate < new Date(completionDate)) {
          await tx.store.add({
            title: `📋 ${t(plantData.name)}: Week ${week} check (${phase.name})`,
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
    if (reminderOptions.watering?.enabled) {
      await createWateringEvents(tx.store, plantData, phase, plantingId, completionDate, reminderOptions.watering.interval, planting.calendarId);
    }

    // Add fertilizing reminders only if enabled
    if (reminderOptions.fertilizing?.enabled) {
      await createFertilizingEvents(tx.store, plantData, phase, plantingId, reminderOptions.fertilizing, planting.calendarId);
    }
  }
  
  // Add final harvest/completion event if enabled
  if (reminderOptions.harvestReminder !== false) {
    await createHarvestEvent(tx.store, plantData, phases, completionDate, plantingId, planting.calendarId);
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
  const interval = wateringInterval || getWateringInterval(plantData.category, phase.name);
  let wateringDate = new Date(phase.startDate);
  const phaseEnd = new Date(wateringDate);
  phaseEnd.setDate(phaseEnd.getDate() + phase.days);

  // Get phase data for care instructions
  const plantPhases = getPlantPhases(plantData);
  const phaseData = plantPhases[phase.name];

  while (wateringDate < phaseEnd) {
    await store.add({
      title: `💧 Water ${t(plantData.name)}`,
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
  if (phase.days > 14 && (phase.name === 'vegetative' || phase.name === 'flowering' || phase.name === 'fruiting')) {
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
        title: `🌿 Fertilize ${t(plantData.name)}`,
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

/**
 * Create final harvest/completion event
 * @param {Object} store - Transaction store
 * @param {Object} plantData - Plant data
 * @param {Array} phases - Phases array
 * @param {string} completionDate - Completion date
 * @param {number} plantingId - Planting ID
 */
async function createHarvestEvent(store, plantData, phases, completionDate, plantingId, calendarId) {
  // Get phases from plant data
  const plantPhases = getPlantPhases(plantData);
  const finalPhase = Object.keys(plantPhases).pop();
  const eventTitle = finalPhase === 'harvest' ? `🌾 Harvest ${t(plantData.name)}` : `✅ Complete ${t(plantData.name)} cycle`;
  
  let harvestDescription = `Time to ${finalPhase === 'harvest' ? 'harvest' : 'complete'} your ${t(plantData.name)}!`;
  if (plantData.commonProblems && Object.keys(plantData.commonProblems).length > 0) {
    harvestDescription += `\n\nCommon Problems to Check For:\n${Object.entries(plantData.commonProblems).map(([problem, solution]) => `- ${problem}: ${solution}`).join('\n')}`;
  }
  
  await store.add({
    title: eventTitle,
    date: completionDate.split('T')[0],
    type: finalPhase === 'harvest' ? 'harvesting' : 'maintenance',
    description: harvestDescription,
    plantingId,
    calendarId
  });
}

/**
 * Delete all events for a specific planting
 * @param {number} plantingId - Planting ID
 * @returns {Promise<number>} Number of events deleted
 */
export async function deleteAllPlantingEvents(plantingId) {
  const db = await getDB();
  const tx = db.transaction('events', 'readwrite');
  const events = await tx.store.index('plantingId').getAll(plantingId);
  
  for (const event of events) {
    await tx.store.delete(event.id);
  }
  
  await tx.done;
  return events.length;
}

/**
 * Get all events for a specific planting
 * @param {number} plantingId - Planting ID
 * @returns {Promise<Array>} Array of events
 */
export async function getPlantingEvents(plantingId) {
  const db = await getDB();
  return db.getAllFromIndex('events', 'plantingId', plantingId);
}

/**
 * Add a custom event for a planting
 * @param {number} plantingId - Planting ID
 * @param {Object} eventData - Event data
 * @returns {Promise<number>} Event ID
 */
export async function addCustomPlantingEvent(plantingId, eventData) {
  const db = await getDB();
  return db.add('events', {
    ...eventData,
    plantingId
  });
}

/**
 * Update an existing event
 * @param {number} eventId - Event ID
 * @param {Object} updates - Updates to apply
 * @returns {Promise<void>}
 */
export async function updateEvent(eventId, updates) {
  const db = await getDB();
  const tx = db.transaction('events', 'readwrite');
  const event = await tx.store.get(eventId);
  
  if (event) {
    Object.assign(event, updates);
    await tx.store.put(event);
  }
  
  return tx.done;
}

/**
 * Delete a specific event
 * @param {number} eventId - Event ID
 * @returns {Promise<void>}
 */
export async function deleteEvent(eventId) {
  const db = await getDB();
  return db.delete('events', eventId);
}

export default {
  createPlantingEvents,
  deleteAllPlantingEvents,
  getPlantingEvents,
  addCustomPlantingEvent,
  updateEvent,
  deleteEvent
}; 