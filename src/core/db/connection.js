/**
 * Database Connection and Schema Management
 * Handles IndexedDB connection, schema creation, and constants
 */

import { openDB } from 'idb';

// Database Configuration
export const DB_NAME = 'gardening-calendar';
export const DB_VERSION = 6;

// Growing Environment Constants
export const GROWING_ENVIRONMENTS = {
  INDOOR: 'environment.indoor',
  OUTDOOR: 'environment.outdoor',
  GREENHOUSE: 'environment.greenhouse'
};

// Seasonal Region Constants
export const SEASONAL_REGIONS = {
  TEMPERATE_NORTH: 'temperate_north', // Europa, Nordamerika
  TEMPERATE_SOUTH: 'temperate_south', // Südamerika, Australien
  TROPICAL: 'tropical',
  MEDITERRANEAN: 'mediterranean'
};

// Seasonal planting windows for outdoor growing
export const SEASONAL_WINDOWS = {
  temperate_north: {
    spring: { start: '03-15', end: '05-31', description: 'After last frost' },
    summer: { start: '06-01', end: '07-31', description: 'Warm season crops' },
    fall: { start: '08-01', end: '09-30', description: 'Cool season crops' },
    winter: { start: '10-01', end: '02-28', description: 'Indoor only or cold frames' }
  },
  mediterranean: {
    spring: { start: '02-15', end: '05-31', description: 'Mild spring planting' },
    summer: { start: '06-01', end: '08-31', description: 'Heat tolerant crops' },
    fall: { start: '09-01', end: '11-30', description: 'Extended growing season' },
    winter: { start: '12-01', end: '02-14', description: 'Cool season crops' }
  }
};

/**
 * Initialize the IndexedDB database with proper schema
 * Creates all necessary object stores and indexes
 */
export async function initializeDB() {
  console.log('INITIALIZING DB...');
  const db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db, oldVersion, newVersion, transaction) {
      console.log('UPGRADING DB...', oldVersion, newVersion);
      // Version 1: Initial schema
      if (oldVersion < 1) {
        const plantStore = db.createObjectStore('plants', { keyPath: 'id', autoIncrement: true });
        plantStore.createIndex('name', 'name');
        plantStore.createIndex('type', 'type');
        
        const eventStore = db.createObjectStore('events', { keyPath: 'id', autoIncrement: true });
        eventStore.createIndex('date', 'date');
        eventStore.createIndex('type', 'type');
        eventStore.createIndex('plantId', 'plantId');
        eventStore.createIndex('plantingId', 'plantingId');
        
        db.createObjectStore('settings', { keyPath: 'id' });
      }
      
      // Version 2: Add plantings store
      if (oldVersion < 2) {
        const plantingStore = db.createObjectStore('plantings', { keyPath: 'id', autoIncrement: true });
        plantingStore.createIndex('plantType', 'plantType');
        plantingStore.createIndex('startDate', 'startDate');
        plantingStore.createIndex('currentPhase', 'currentPhase');
      }

      // Version 3: Add plant notes
      if (oldVersion < 3) {
        if (!db.objectStoreNames.contains('plantNotes')) {
          const notesStore = db.createObjectStore('plantNotes', { keyPath: 'id', autoIncrement: true });
          notesStore.createIndex('plantingId', 'plantingId');
          notesStore.createIndex('date', 'date');
        }
      }

      // Version 4: Enhanced plant database indexes
      if (oldVersion < 4) {
        if (db.objectStoreNames.contains('plantings')) {
          const store = transaction.objectStore('plantings');
          if (!store.indexNames.contains('category')) {
            store.createIndex('category', 'category');
          }
          if (!store.indexNames.contains('status')) {
            store.createIndex('status', 'status');
          }
        }
      }

      // Version 5: Custom names and display names
      if (oldVersion < 5) {
        if (db.objectStoreNames.contains('plantings')) {
          const store = transaction.objectStore('plantings');
          if (!store.indexNames.contains('displayName')) {
            store.createIndex('displayName', 'displayName');
          }
          if (!store.indexNames.contains('customName')) {
            store.createIndex('customName', 'customName');
          }
        }
      }

      // Version 6: Add calendar index to events and plantings
      if (oldVersion < 6) {
        if (db.objectStoreNames.contains('events')) {
          const eventsStore = transaction.objectStore('events');
          if (!eventsStore.indexNames.contains('calendarId')) {
            eventsStore.createIndex('calendarId', 'calendarId');
          }
        }
        if (db.objectStoreNames.contains('plantings')) {
          const plantingsStore = transaction.objectStore('plantings');
          if (!plantingsStore.indexNames.contains('calendarId')) {
            plantingsStore.createIndex('calendarId', 'calendarId');
          }
        }
      }

      // Create notes store
      if (!db.objectStoreNames.contains('notes')) {
        const notesStore = db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
        notesStore.createIndex('plantingId', 'plantingId');
        notesStore.createIndex('date', 'date');
      }

      // Create calendars store
      if (!db.objectStoreNames.contains('calendars')) {
        const calendarsStore = db.createObjectStore('calendars', { keyPath: 'id', autoIncrement: true });
        calendarsStore.createIndex('name', 'name');
        calendarsStore.createIndex('type', 'type');
        calendarsStore.createIndex('isDefault', 'isDefault');
      }

      // Create settings store
      if (!db.objectStoreNames.contains('settings')) {
        const settingsStore = db.createObjectStore('settings', { keyPath: 'key' });
      }
    }
  });
  console.log('DB INITIALIZED!');
  return db;
}

/**
 * Get database connection
 * Returns an open database connection
 */
export async function getDB() {
  return await openDB(DB_NAME);
}

export default {
  initializeDB,
  getDB,
  DB_NAME,
  DB_VERSION,
  GROWING_ENVIRONMENTS,
  SEASONAL_REGIONS,
  SEASONAL_WINDOWS
}; 