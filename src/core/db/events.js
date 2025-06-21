/**
 * Plant Events Database Operations
 * Handles creation and management of planting-related calendar events
 */

import { getDB } from './connection.js';
import { getPhaseEmoji, getWateringInterval, getPhaseCheckpoints } from './utils.js';

/**
 * Create all events for a new planting
 * @param {Object} planting - Planting record
 * @param {Object} plantData - Plant data
 * @param {Array} phases - Calculated phases
 * @param {string} completionDate - Completion date ISO string
 * @returns {Promise<void>}
 */
export async function createPlantingEvents(planting, plantData, phases, completionDate) {
  const db = await getDB();
  const tx = db.transaction('events', 'readwrite');
  const plantingId = planting.id;
  
  // Add initial planting event with legal notice if applicable
  let plantingDescription = `Start planting ${plantData.name}`;
  if (plantData.legalNote) {
    plantingDescription += `\n\n⚠️ LEGAL NOTICE: ${plantData.legalNote}`;
  }
  plantingDescription += `\n\nCare Tips:\n${Object.entries(plantData.careTips).map(([key, value]) => `- ${key}: ${value}`).join('\n')}`;

  await tx.store.add({
    title: `🌱 Plant ${plantData.name}`,
    date: planting.startDate,
    type: 'planting',
    description: plantingDescription,
    plantingId
  });
  
  // Add phase transition events with enhanced scheduling
  for (let i = 0; i < phases.length; i++) {
    const phase = phases[i];
    const phaseData = plantData.phases[phase.name];
    
    // Add phase start event
    await tx.store.add({
      title: `${getPhaseEmoji(phase.name)} ${plantData.name}: ${phase.name} phase`,
      date: phase.startDate,
      type: 'maintenance',
      description: `${phase.description}\n\nCare Instructions:\n${phase.care}`,
      plantingId
    });

    // Add weekly check-ins for longer phases (more than 14 days)
    if (phase.days > 14) {
      const weeklyChecks = Math.floor(phase.days / 7);
      for (let week = 1; week <= weeklyChecks; week++) {
        const checkDate = new Date(phase.startDate);
        checkDate.setDate(checkDate.getDate() + (week * 7));
        
        if (checkDate < new Date(completionDate)) {
          await tx.store.add({
            title: `📋 ${plantData.name}: Week ${week} check (${phase.name})`,
            date: checkDate.toISOString().split('T')[0],
            type: 'maintenance',
            description: `Weekly check during ${phase.name} phase\n\n${phase.care}\n\nLook for signs of:\n${getPhaseCheckpoints(phase.name, plantData)}`,
            plantingId
          });
        }
      }
    }

    // Add watering reminders with plant-specific intervals
    await createWateringEvents(tx.store, plantData, phase, plantingId, completionDate);

    // Add fertilizing reminders
    await createFertilizingEvents(tx.store, plantData, phase, plantingId);
  }
  
  // Add final harvest/completion event
  await createHarvestEvent(tx.store, plantData, phases, completionDate, plantingId);
  
  await tx.done;
}

/**
 * Create watering events for a phase
 * @param {Object} store - Transaction store
 * @param {Object} plantData - Plant data
 * @param {Object} phase - Phase object
 * @param {number} plantingId - Planting ID
 * @param {string} completionDate - Completion date
 */
async function createWateringEvents(store, plantData, phase, plantingId, completionDate) {
  let wateringInterval = getWateringInterval(plantData.category, phase.name);
  let wateringDate = new Date(phase.startDate);
  const phaseEnd = new Date(wateringDate);
  phaseEnd.setDate(phaseEnd.getDate() + phase.days);

  while (wateringDate < phaseEnd) {
    await store.add({
      title: `💧 Water ${plantData.name}`,
      date: wateringDate.toISOString().split('T')[0],
      type: 'watering',
      description: `${plantData.careTips.watering || 'Check soil moisture and water as needed'}\n\nPhase: ${phase.name}\nCare: ${phase.care}`,
      plantingId
    });
    wateringDate.setDate(wateringDate.getDate() + wateringInterval);
  }
}

/**
 * Create fertilizing events for a phase
 * @param {Object} store - Transaction store
 * @param {Object} plantData - Plant data
 * @param {Object} phase - Phase object
 * @param {number} plantingId - Planting ID
 */
async function createFertilizingEvents(store, plantData, phase, plantingId) {
  if (phase.days > 14 && (phase.name === 'vegetative' || phase.name === 'flowering' || phase.name === 'fruiting')) {
    const fertilizeDate = new Date(phase.startDate);
    fertilizeDate.setDate(fertilizeDate.getDate() + 7); // Start fertilizing after first week
    
    const phaseEnd = new Date(phase.startDate);
    phaseEnd.setDate(phaseEnd.getDate() + phase.days);
    
    while (fertilizeDate < phaseEnd) {
      await store.add({
        title: `🌿 Fertilize ${plantData.name}`,
        date: fertilizeDate.toISOString().split('T')[0],
        type: 'fertilizing',
        description: `${plantData.careTips.fertilizing || 'Apply appropriate fertilizer'}\n\nPhase: ${phase.name}`,
        plantingId
      });
      fertilizeDate.setDate(fertilizeDate.getDate() + 14); // Every 2 weeks
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
async function createHarvestEvent(store, plantData, phases, completionDate, plantingId) {
  const finalPhase = Object.keys(plantData.phases).pop();
  const eventTitle = finalPhase === 'harvest' ? `🌾 Harvest ${plantData.name}` : `✅ Complete ${plantData.name} cycle`;
  
  let harvestDescription = `Time to ${finalPhase === 'harvest' ? 'harvest' : 'complete'} your ${plantData.name}!`;
  if (plantData.commonProblems && Object.keys(plantData.commonProblems).length > 0) {
    harvestDescription += `\n\nCommon Problems to Check For:\n${Object.entries(plantData.commonProblems).map(([problem, solution]) => `- ${problem}: ${solution}`).join('\n')}`;
  }
  
  await store.add({
    title: eventTitle,
    date: completionDate.split('T')[0],
    type: finalPhase === 'harvest' ? 'harvesting' : 'maintenance',
    description: harvestDescription,
    plantingId
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