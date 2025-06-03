import './style.css';
import { initializeDB } from './db';
import { initializeApp } from './app';

// Initialize IndexedDB
await initializeDB();

// Initialize the application
initializeApp();