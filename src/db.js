import { openDB } from 'idb';

const DB_NAME = 'gardening-calendar';
const DB_VERSION = 1;

export async function initializeDB() {
  const db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      // Plants store
      if (!db.objectStoreNames.contains('plants')) {
        const plantStore = db.createObjectStore('plants', { keyPath: 'id', autoIncrement: true });
        plantStore.createIndex('name', 'name');
        plantStore.createIndex('type', 'type');
      }

      // Events store
      if (!db.objectStoreNames.contains('events')) {
        const eventStore = db.createObjectStore('events', { keyPath: 'id', autoIncrement: true });
        eventStore.createIndex('date', 'date');
        eventStore.createIndex('type', 'type');
        eventStore.createIndex('plantId', 'plantId');
      }

      // Settings store
      if (!db.objectStoreNames.contains('settings')) {
        db.createObjectStore('settings', { keyPath: 'id' });
      }
    }
  });

  return db;
}