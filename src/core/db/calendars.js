/**
 * Local Calendars Database Operations
 * Handles creation and management of local calendars
 */

import { getDB } from './connection.js';
import { t } from '../i18n/index.js';

/**
 * Create default calendars if none exist
 * @returns {Promise<void>}
 */
export async function initializeDefaultCalendars() {
  const db = await getDB();
  const tx = db.transaction('calendars', 'readwrite');
  const calendars = await tx.store.getAll();
  
  if (calendars.length === 0) {
    // Create default garden calendar with localized name
    await tx.store.add({
      name: t('calendar.garden'),
      type: 'local',
      color: '#10B981',
      icon: '🌱',
      isDefault: true,
      description: t('calendar.garden_description'),
      createdAt: new Date().toISOString()
    });
  }
  
  await tx.done;
}

/**
 * Create a new local calendar
 * @param {Object} calendarData - Calendar data
 * @returns {Promise<number>} Calendar ID
 */
export async function createLocalCalendar(calendarData) {
  const db = await getDB();
  const tx = db.transaction('calendars', 'readwrite');
  
  const calendar = {
    name: calendarData.name,
    type: 'local',
    color: calendarData.color || '#3B82F6',
    icon: calendarData.icon || '📅',
    isDefault: false,
    description: calendarData.description || '',
    createdAt: new Date().toISOString()
  };
  
  const calendarId = await tx.store.add(calendar);
  await tx.done;
  
  return calendarId;
}

/**
 * Get all local calendars
 * @returns {Promise<Array>} Array of calendars
 */
export async function getAllLocalCalendars() {
  const db = await getDB();
  return db.getAll('calendars');
}

/**
 * Get default calendar
 * @returns {Promise<Object|null>} Default calendar or null
 */
export async function getDefaultCalendar() {
  const db = await getDB();
  return db.getFromIndex('calendars', 'isDefault', true);
}

/**
 * Get calendar by ID
 * @param {number} calendarId - Calendar ID
 * @returns {Promise<Object|null>} Calendar or null
 */
export async function getCalendar(calendarId) {
  const db = await getDB();
  return db.get('calendars', calendarId);
}

/**
 * Update calendar
 * @param {number} calendarId - Calendar ID
 * @param {Object} updates - Updates to apply
 * @returns {Promise<void>}
 */
export async function updateCalendar(calendarId, updates) {
  const db = await getDB();
  const tx = db.transaction('calendars', 'readwrite');
  const calendar = await tx.store.get(calendarId);
  
  if (calendar) {
    Object.assign(calendar, updates);
    await tx.store.put(calendar);
  }
  
  return tx.done;
}

/**
 * Delete calendar and migrate its events to default calendar
 * @param {number} calendarId - Calendar ID
 * @returns {Promise<boolean>} Success status
 */
export async function deleteCalendar(calendarId) {
  const db = await getDB();
  const tx = db.transaction(['calendars', 'events', 'plantings'], 'readwrite');
  
  // Get default calendar
  const defaultCalendar = await tx.objectStore('calendars').getFromIndex('isDefault', true);
  if (!defaultCalendar) {
    throw new Error('No default calendar found');
  }
  
  // Migrate events to default calendar
  const events = await tx.objectStore('events').getAll();
  for (const event of events) {
    if (event.calendarId === calendarId) {
      event.calendarId = defaultCalendar.id;
      await tx.objectStore('events').put(event);
    }
  }
  
  // Migrate plantings to default calendar
  const plantings = await tx.objectStore('plantings').getAll();
  for (const planting of plantings) {
    if (planting.calendarId === calendarId) {
      planting.calendarId = defaultCalendar.id;
      await tx.objectStore('plantings').put(planting);
    }
  }
  
  // Delete the calendar
  await tx.objectStore('calendars').delete(calendarId);
  
  await tx.done;
  return true;
}

/**
 * Set calendar as default
 * @param {number} calendarId - Calendar ID
 * @returns {Promise<void>}
 */
export async function setDefaultCalendar(calendarId) {
  const db = await getDB();
  const tx = db.transaction('calendars', 'readwrite');
  
  // Remove default from all calendars
  const calendars = await tx.store.getAll();
  for (const calendar of calendars) {
    if (calendar.isDefault) {
      calendar.isDefault = false;
      await tx.store.put(calendar);
    }
  }
  
  // Set new default
  const calendar = await tx.store.get(calendarId);
  if (calendar) {
    calendar.isDefault = true;
    await tx.store.put(calendar);
  }
  
  return tx.done;
}

/**
 * Create predefined garden calendars
 * @returns {Promise<Array>} Array of created calendar IDs
 */
export async function createGardenTemplateCalendars() {
  const templates = [
    {
      name: t('calendar.vegetables'),
      color: '#F59E0B',
      icon: '🥕',
      description: t('calendar.vegetables_description')
    },
    {
      name: t('calendar.herbs'),
      color: '#10B981',
      icon: '🌱',
      description: t('calendar.herbs_description')
    },
    {
      name: t('calendar.ornamental'),
      color: '#EC4899',
      icon: '🌸',
      description: t('calendar.ornamental_description')
    },
    {
      name: t('calendar.fruits'),
      color: '#DC2626',
      icon: '🍎',
      description: t('calendar.fruits_description')
    }
  ];
  
  const calendarIds = [];
  for (const template of templates) {
    const calendarId = await createLocalCalendar(template);
    calendarIds.push(calendarId);
  }
  
  return calendarIds;
}

/**
 * Delete local calendar and migrate its events to default calendar
 * @param {number} calendarId - Calendar ID
 * @returns {Promise<boolean>} Success status
 */
export async function deleteLocalCalendar(calendarId) {
  const db = await getDB();
  const tx = db.transaction(['calendars', 'events', 'plantings'], 'readwrite');
  
  // Get default calendar
  const defaultCalendar = await tx.objectStore('calendars').getFromIndex('isDefault', true);
  if (!defaultCalendar) {
    throw new Error('No default calendar found');
  }
  
  // Migrate events to default calendar
  const events = await tx.objectStore('events').getAll();
  for (const event of events) {
    if (event.calendarId === calendarId) {
      event.calendarId = defaultCalendar.id;
      await tx.objectStore('events').put(event);
    }
  }
  
  // Migrate plantings to default calendar
  const plantings = await tx.objectStore('plantings').getAll();
  for (const planting of plantings) {
    if (planting.calendarId === calendarId) {
      planting.calendarId = defaultCalendar.id;
      await tx.objectStore('plantings').put(planting);
    }
  }
  
  // Delete the calendar
  await tx.objectStore('calendars').delete(calendarId);
  
  await tx.done;
  return true;
}

/**
 * Update local calendar
 * @param {number} calendarId - Calendar ID
 * @param {Object} updates - Updates to apply
 * @returns {Promise<void>}
 */
export async function updateLocalCalendar(calendarId, updates) {
  const db = await getDB();
  const tx = db.transaction('calendars', 'readwrite');
  const calendar = await tx.store.get(calendarId);
  
  if (calendar) {
    Object.assign(calendar, updates);
    await tx.store.put(calendar);
  }
  
  return tx.done;
}

export default {
  initializeDefaultCalendars,
  createLocalCalendar,
  getAllLocalCalendars,
  getDefaultCalendar,
  getCalendar,
  updateCalendar,
  deleteCalendar,
  setDefaultCalendar,
  createGardenTemplateCalendars,
  deleteLocalCalendar,
  updateLocalCalendar
}; 