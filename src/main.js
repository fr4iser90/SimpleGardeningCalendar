import './style.css';
import { initializeDB } from './db';
import { initializeApp } from './app';
import { initializeCalendar } from './calendar';

// Initialize IndexedDB
await initializeDB();

// Initialize the application
initializeApp();

// Initialize the calendar
await initializeCalendar();