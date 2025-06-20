import './style.css';
import { initializeDB } from './db';
import { initializeApp } from './app';
import { initializeCalendar } from './calendar';

// Initialize the application
async function init() {
  try {
    // Initialize IndexedDB
    await initializeDB();

    // Initialize the application
    initializeApp();

    // Initialize the calendar
    await initializeCalendar();
  } catch (error) {
    console.error('Failed to initialize application:', error);
  }
}

// Start the application
init();