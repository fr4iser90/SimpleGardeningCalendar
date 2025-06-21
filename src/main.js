import './style.css';
import { initializeApp } from './app.js';
import { initializeDB } from './core/db/index.js';
import { initializeCalendarApp } from './calendar.js';

// Initialize the application
async function init() {
  try {
    // Initialize database first
    await initializeDB();
    
    // Initialize the app shell (layout, theme, sidebar structure, etc.)
    initializeApp();
    
    // Initialize the calendar with its components
    await initializeCalendarApp();
    
  } catch (error) {
    console.error('Failed to initialize app:', error);
    document.body.innerHTML = `
      <div class="min-h-screen flex items-center justify-center bg-red-50">
        <div class="text-center p-8">
          <h1 class="text-2xl font-bold text-red-600 mb-4">❌ Initialization Error</h1>
          <p class="text-gray-700 mb-4">Failed to initialize the gardening calendar.</p>
          <p class="text-sm text-gray-500">${error.message}</p>
          <button onclick="location.reload()" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            🔄 Retry
          </button>
        </div>
      </div>
    `;
  }
}

// Start the application
init();