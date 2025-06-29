// Sidebar.js
// Sidebar navigation and information display component

import { openDB } from 'idb';
import { DB_NAME, DB_VERSION } from '../../core/db/connection.js';
import { t } from '../../core/i18n/index.js';
import { formatDateWithLocale } from '../../core/db/utils.js';
import { sanitizeHTML } from '../../utils/sanitize.js';

export async function loadPlantCategories(t) {
  const { PLANT_CATEGORIES, getPlantingsByCategory } = await import('../../core/db/index.js');
  const categoriesContainer = document.getElementById('plantCategories');
  
  if (!categoriesContainer) return;
  
  categoriesContainer.innerHTML = '';
  
  for (const category of PLANT_CATEGORIES) {
    const plantings = await getPlantingsByCategory(category);
    const activeCount = plantings.filter(p => p.status === 'active').length;
    
    // Get translated category name
    const translatedCategory = t(category) || category;
    
    const categoryEl = document.createElement('div');
    categoryEl.className = 'flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600';
    categoryEl.innerHTML = sanitizeHTML(`
      <span class="dark:text-gray-200">${translatedCategory}</span>
      <span class="text-sm text-gray-500 dark:text-gray-400">${activeCount}</span>
    `);
    
    categoryEl.addEventListener('click', () => {
      showCategoryPlantsModal(category, plantings);
    });
    
    categoriesContainer.appendChild(categoryEl);
  }
}

export async function loadUpcomingTasks(t) {
  const db = await openDB(DB_NAME, DB_VERSION);
  const today = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);

  // Umschalter-Status aus LocalStorage holen (default: false)
  const showAllCalendars = localStorage.getItem('showAllCalendarsForTasks') === 'true';
  const selectedCalendarId = localStorage.getItem('selectedLocalCalendarId');

  const events = await db.getAll('events');
  // Filter je nach Umschalter
  const filteredEvents = showAllCalendars
    ? events
    : events.filter(event => !selectedCalendarId || event.calendarId == selectedCalendarId);

  const upcomingEvents = filteredEvents
    .filter(event => {
      const eventDate = new Date(event.date);
      return eventDate >= today && eventDate <= nextWeek;
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5);

  const tasksContainer = document.getElementById('upcomingTasks');
  if (!tasksContainer) return;

  // Umschalter-Checkbox einfügen (falls noch nicht vorhanden)
  let toggleId = 'showAllCalendarsForTasksToggle';
  if (!document.getElementById(toggleId)) {
    const toggleDiv = document.createElement('div');
    toggleDiv.className = 'mb-2 flex items-center';
    toggleDiv.innerHTML = sanitizeHTML(`
      <input type="checkbox" id="${toggleId}" class="mr-2" ${showAllCalendars ? 'checked' : ''}>
      <label for="${toggleId}" class="text-xs text-gray-600 dark:text-gray-300 cursor-pointer">${t('ui.show_all_calendars')}</label>
    `);
    tasksContainer.parentNode.insertBefore(toggleDiv, tasksContainer);
    document.getElementById(toggleId).addEventListener('change', (e) => {
      localStorage.setItem('showAllCalendarsForTasks', e.target.checked ? 'true' : 'false');
      loadUpcomingTasks(t);
    });
  }

  tasksContainer.innerHTML = '';

  if (upcomingEvents.length === 0) {
    tasksContainer.innerHTML = sanitizeHTML(`<p class="text-gray-500 dark:text-gray-400 text-sm">${t('ui.no_upcoming_tasks')}</p>`);
    return;
  }

  upcomingEvents.forEach(event => {
    const taskEl = document.createElement('div');
    taskEl.className = 'text-sm p-2 bg-gray-50 dark:bg-gray-700 rounded';
    const eventDate = new Date(event.date);
    const isToday = eventDate.toDateString() === today.toDateString();
    const dateStr = isToday ? 'Today' : formatDateWithLocale(eventDate);
    taskEl.innerHTML = sanitizeHTML(`
      <div class="font-medium dark:text-white">${event.title}</div>
      <div class="text-gray-500 dark:text-gray-400">${dateStr}</div>
    `);
    tasksContainer.appendChild(taskEl);
  });
}

export async function showCategoryPlantsModal(category, plantings) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
  
  modal.innerHTML = sanitizeHTML(`
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold dark:text-white">${t('plants.category_title', { category })}</h2>
        <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onclick="this.closest('.fixed').remove()">✕</button>
      </div>
      
      <div class="space-y-3">
        ${plantings.length === 0 ? 
          `<p class="text-gray-500 dark:text-gray-400 text-center py-8">${t('plants.no_category_plants', { category })}</p>` :
          plantings.map(planting => {
            const displayName = planting.displayName || planting.plantName;
            return `
            <div class="border dark:border-gray-600 rounded-lg p-4 flex justify-between items-center">
              <div class="flex-1">
                <h3 class="font-semibold dark:text-white">${displayName}</h3>
                ${planting.customName ? `<div class="text-xs text-gray-500 dark:text-gray-400">Plant type: ${t(planting.plantName)}</div>` : ''}
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  ${planting.location} • Started ${formatDateWithLocale(planting.startDate)} • ${t('phase.' + planting.currentPhase)}
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <span class="px-2 py-1 rounded text-xs ${
                  planting.status === 'active' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                  planting.status === 'completed' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                  'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                }">
                  ${planting.status}
                </span>
                <button onclick="deletePlant(${planting.id})" class="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20" title="Delete plant and all events">
                  🗑️
                </button>
              </div>
            </div>
          `}).join('')
        }
      </div>
    </div>
  `);
  
  document.body.appendChild(modal);
  
  // Make delete function available globally - it will be available from PlantsList
  // The deletePlant function is already made globally available in PlantsList.js
}

export function initializeSidebar(t) {
  // Load initial data
  loadPlantCategories(t);
  loadUpcomingTasks(t);
  
  // Listen for refresh events
  document.addEventListener('refreshSidebar', () => {
    loadPlantCategories(t);
    loadUpcomingTasks(t);
  });

  // NEU: Aufgabenliste auch bei Kalenderwechsel aktualisieren
  document.addEventListener('selectedCalendarChanged', () => {
    loadUpcomingTasks(t);
  });
  document.addEventListener('localCalendarSwitched', () => {
    loadUpcomingTasks(t);
  });
}

async function loadSidebarData() {
  try {
    const db = await openDB(DB_NAME, DB_VERSION);
    
    // Get counts
    const eventCount = await db.count('events');
    const plantingCount = await db.count('plantings');
    const noteCount = await db.count('plantNotes');

    // ... existing code ...
  } catch (error) {
    console.error('Error loading sidebar data:', error);
  }
}
