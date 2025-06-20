import './style.css';
import { initializeDB } from './db';
import { initializeApp } from './app';
import { initializeCalendar } from './calendar';

// Wrap initialization in an async function
async function init() {
  // Initialize IndexedDB
  await initializeDB();

  // Initialize the application
  initializeApp();

  // Initialize the calendar
  await initializeCalendar();
}

// Call the initialization function
init().catch(error => {
  console.error('Failed to initialize application:', error);
});