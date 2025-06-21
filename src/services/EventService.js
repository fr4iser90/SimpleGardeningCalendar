import { openDB } from 'idb';
import { DB_NAME, DB_VERSION } from '../core/db/connection.js';
import { autoSyncEvent } from './GoogleCalendar/GoogleCalendarUI.js';
import { getEventColor, getEventTypeIcon } from '../utils/eventUtils.js';
import { formatDate } from '../utils/dateUtils.js';
import { validateEventData } from '../utils/validators.js';
import { getPhaseEmoji } from '../utils/plantUtils.js';

/**
 * Event Service
 * Handles all event-related business logic and operations
 */

// Get all events from database
export async function getAllEvents() {
  const db = await openDB(DB_NAME, DB_VERSION);
  return await db.getAll('events');
}

// Add a new event
export async function addEvent(eventData) {
  const db = await openDB(DB_NAME, DB_VERSION);
  const eventId = await db.add('events', eventData);
  eventData.id = eventId;
  
  // Auto-sync to Google Calendar if enabled
  try {
    await autoSyncEvent(eventData);
  } catch (error) {
    console.warn('Google Calendar auto-sync failed:', error);
  }
  
  return eventId;
}

// Get event by ID
export async function getEventById(eventId) {
  const db = await openDB(DB_NAME, DB_VERSION);
  return await db.get('events', eventId);
}

// Update an existing event
export async function updateEvent(eventId, updates) {
  const db = await openDB(DB_NAME, DB_VERSION);
  const tx = db.transaction('events', 'readwrite');
  const event = await tx.store.get(eventId);
  
  if (event) {
    Object.assign(event, updates);
    await tx.store.put(event);
  }
  
  await tx.done;
  return event;
}

// Delete an event
export async function deleteEvent(eventId) {
  const db = await openDB(DB_NAME, DB_VERSION);
  return await db.delete('events', eventId);
}

// Get events for a specific planting
export async function getPlantingEvents(plantingId) {
  const db = await openDB(DB_NAME, DB_VERSION);
  return await db.getAllFromIndex('events', 'plantingId', plantingId);
}

// Delete all events for a specific planting
export async function deleteAllPlantingEvents(plantingId) {
  const db = await openDB(DB_NAME, DB_VERSION);
  const tx = db.transaction('events', 'readwrite');
  const events = await tx.store.index('plantingId').getAll(plantingId);
  
  for (const event of events) {
    await tx.store.delete(event.id);
  }
  
  await tx.done;
  return events.length;
}

// Add a custom event for a planting
export async function addCustomPlantingEvent(plantingId, eventData) {
  const db = await openDB(DB_NAME, DB_VERSION);
  return await db.add('events', {
    ...eventData,
    plantingId
  });
}

// Get events formatted for FullCalendar
export async function getFormattedEvents() {
  const events = await getAllEvents();
  return events.map(event => ({
    id: event.id,
    title: event.title,
    start: event.date,
    backgroundColor: getEventColor(event.type),
    borderColor: getEventColor(event.type),
    extendedProps: {
      type: event.type,
      description: event.description,
      plantingId: event.plantingId,
      phase: event.phase,
      priority: event.priority,
      templateCategory: event.templateCategory,
      templateName: event.templateName,
      language: event.language,
      isTemplate: event.isTemplate
    }
  }));
}

// Create all events for a new planting
export async function createPlantingEvents(planting, plantData, phases, completionDate) {
  const db = await openDB(DB_NAME, DB_VERSION);
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

  // Add phase events
  for (const phase of phases) {
    const phaseEmoji = getPhaseEmoji(phase.name);
    const phaseDescription = `${phase.description}\n\nCare Instructions:\n${Object.entries(phase.care).map(([key, value]) => `- ${key}: ${value}`).join('\n')}`;
    
    await tx.store.add({
      title: `${phaseEmoji} ${phase.name} - ${plantData.name}`,
      date: phase.startDate,
      type: phase.name.toLowerCase(),
      description: phaseDescription,
      plantingId,
      phase: phase.name,
      duration: phase.days
    });
  }

  // Add completion/harvest event
  const harvestDescription = `Harvest time for ${plantData.name}!\n\nHarvesting Tips:\n${Object.entries(plantData.harvestingTips || {}).map(([key, value]) => `- ${key}: ${value}`).join('\n')}`;
  
  await tx.store.add({
    title: `🌾 Harvest ${plantData.name}`,
    date: completionDate,
    type: 'harvesting',
    description: harvestDescription,
    plantingId,
    phase: 'harvesting'
  });

  await tx.done;
}

// Delete planting and all associated events
export async function deletePlantingAndEvents(plantingId) {
  const db = await openDB(DB_NAME, DB_VERSION);
  
  try {
    // Delete all events
    await deleteAllPlantingEvents(plantingId);
    
    // Delete all notes
    const notesTx = db.transaction('plantNotes', 'readwrite');
    const notes = await notesTx.store.index('plantingId').getAll(plantingId);
    for (const note of notes) {
      await notesTx.store.delete(note.id);
    }
    await notesTx.done;
    
    // Delete the planting record
    const plantingTx = db.transaction('plantings', 'readwrite');
    await plantingTx.store.delete(plantingId);
    await plantingTx.done;
    
    return true;
  } catch (error) {
    console.error('Error deleting planting and events:', error);
    throw error;
  }
}

// Search events by title or description
export async function searchEvents(query) {
  const events = await getAllEvents();
  const lowerQuery = query.toLowerCase();
  
  return events.filter(event => 
    event.title.toLowerCase().includes(lowerQuery) ||
    (event.description && event.description.toLowerCase().includes(lowerQuery))
  );
}

// Get events by date range
export async function getEventsByDateRange(startDate, endDate) {
  const events = await getAllEvents();
  
  return events.filter(event => {
    const eventDate = new Date(event.date);
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    return eventDate >= start && eventDate <= end;
  });
}

// Get events by type
export async function getEventsByType(type) {
  const events = await getAllEvents();
  return events.filter(event => event.type === type);
}

// Get upcoming events (next 30 days)
export async function getUpcomingEvents(days = 30) {
  const events = await getAllEvents();
  const now = new Date();
  const future = new Date();
  future.setDate(future.getDate() + days);
  
  return events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate >= now && eventDate <= future;
  }).sort((a, b) => new Date(a.date) - new Date(b.date));
}

// Get overdue events
export async function getOverdueEvents() {
  const events = await getAllEvents();
  const now = new Date();
  
  return events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate < now;
  }).sort((a, b) => new Date(a.date) - new Date(b.date));
} 