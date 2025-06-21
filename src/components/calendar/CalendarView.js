import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { openDB } from 'idb';
import { getEventColor } from '../../utils/eventUtils.js';
import { t, updateUITranslations } from '../../i18n.js';
import { initializeDB } from '../../core/db/index.js';
import * as googleCalendar from '../../services/GoogleCalendar/GoogleCalendarApi.js';
import { performBidirectionalSync } from '../../services/GoogleCalendar/GoogleCalendarSync.js';
import { showNotification } from '../../utils/notifications.js';

let calendar;

export async function initializeCalendar() {
  await initializeDB();
  
  const calendarEl = document.getElementById('calendar');
  
  calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    height: 'auto',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: ''
    },
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    weekends: true,
    select: function(arg) {
      showAddEventModal(arg.startStr);
      calendar.unselect();
    },
    eventClick: function(arg) {
      showEventDetails(arg.event);
    },
    events: async function(fetchInfo, successCallback, failureCallback) {
      try {
        const db = await openDB('gardening-calendar', 5);
        const events = await db.getAll('events');
        const formattedEvents = events.map(event => ({
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
        successCallback(formattedEvents);
      } catch (error) {
        console.error('Error loading events:', error);
        failureCallback(error);
      }
    }
  });

  calendar.render();
  
  // Make calendar globally available for other modules
  window.calendar = calendar;
  
  // Listen for custom events from the app
  document.addEventListener('showAddEventModal', (e) => {
    showAddEventModal(e.detail.date, e.detail.type);
  });
  
  // Listen for refresh events from other modules
  document.addEventListener('refreshCalendar', () => {
    if (calendar && typeof calendar.refetchEvents === 'function') {
      calendar.refetchEvents();
    }
  });
  
  // Listen for language changes
  document.addEventListener('languageChanged', () => {
    // Update other UI elements
    updateUITranslations();
    updateGoogleCalendarStatus();
  });
  
  // Make updateGoogleCalendarStatus globally available for other modules
  window.updateGoogleCalendarStatus = updateGoogleCalendarStatus;
  
  // Listen for Google Calendar status changes
  document.addEventListener('googleCalendarStatusChanged', () => {
    updateGoogleCalendarStatus();
  });
  
  return calendar;
}

// Function to update Google Calendar status display
function updateGoogleCalendarStatus() {
  const statusDisplay = document.getElementById('googleCalendarStatusDisplay');
  if (!statusDisplay) return;

  let settings = {};
  try {
    const googleCalendarSettings = localStorage.getItem('googleCalendarSettings');
    if (googleCalendarSettings) {
      settings = JSON.parse(googleCalendarSettings);
    }
  } catch (error) {
    console.warn('Failed to parse Google Calendar settings:', error);
  }

  const hasSavedCredentials = !!(settings && settings.userEmail && settings.userEmail.trim());
  const isCurrentlySignedIn = googleCalendar.getAuthState().isSignedIn;
  const hasSelectedCalendar = !!settings.selectedCalendarId;

  if (isCurrentlySignedIn && hasSavedCredentials) {
    if (!hasSelectedCalendar) {
      statusDisplay.innerHTML = `
        <span class="text-yellow-600 dark:text-yellow-400 flex items-center">
          <i class="fas fa-exclamation-triangle mr-1"></i>${t('google.status.no_calendar_selected')}
        </span>
      `;
      return;
    }

    const selectedCalendarId = settings.selectedCalendarId;
    const calendarName = settings.calendarList?.[selectedCalendarId] || selectedCalendarId;
    const autoSync = settings.autoSync || false;

    statusDisplay.innerHTML = `
      <span class="text-green-600 dark:text-green-400 flex items-center" title="${settings.userEmail}">
        <i class="fas fa-check-circle mr-1"></i>${t('google.connected')}
      </span>
      <span class="mx-2">|</span>
      <span>📅 ${calendarName}</span>
      <span class="mx-2">|</span>
      <span>${t('google.sync')}:</span>
      <button 
        class="ml-1 px-2 py-1 text-xs rounded ${autoSync ? 'bg-green-600 text-white' : 'bg-gray-600 text-white'} hover:opacity-80 transition-colors"
        onclick="toggleGoogleAutoSync()"
        title="${t('google.toggle_autosync_title')}"
      >
        ${autoSync ? t('google.sync_on') : t('google.sync_off')}
      </button>
      ${!autoSync ? `
        <button class="ml-2 px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600" onclick="triggerGoogleCalendarSync()">
          ${t('google.sync_now')}
        </button>
      ` : ''}
    `;
  } else if (hasSavedCredentials && !isCurrentlySignedIn) {
    statusDisplay.innerHTML = `
      <span class="text-yellow-600 dark:text-yellow-400 flex items-center">
        <i class="fas fa-link mr-1"></i>${t('google.reconnect_needed')}
      </span>
      <button class="ml-2 px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600" onclick="reconnectGoogleCalendar()">
        ${t('google.reconnect')}
      </button>
    `;
  } else {
    statusDisplay.innerHTML = `
      <span class="text-red-600 dark:text-red-400 flex items-center">
        <i class="fas fa-times-circle mr-1"></i>${t('google.not_connected')}
      </span>
    `;
  }
}

// Make Google Calendar functions available on the window object for onclick handlers
window.toggleGoogleAutoSync = async function() {
  try {
    const settingsJSON = localStorage.getItem('googleCalendarSettings');
    let settings = settingsJSON ? JSON.parse(settingsJSON) : {};
    if (!settings.autoSync && !settings.selectedCalendarId) {
      showNotification(t('google.error.no_calendar_selected'), 'error');
      return;
    }
    settings.autoSync = !settings.autoSync;
    localStorage.setItem('googleCalendarSettings', JSON.stringify(settings));
    showNotification(t(settings.autoSync ? 'google.autosync_on_notif' : 'google.autosync_off_notif'), 'info');
    updateGoogleCalendarStatus();
  } catch (error) {
    console.error('Failed to toggle auto-sync:', error);
    showNotification('Error changing sync setting', 'error');
  }
}

window.reconnectGoogleCalendar = async function() {
  try {
    await googleCalendar.attemptSignIn(true);
  } catch (error) {
    console.error('Google Calendar reconnect failed:', error);
    showNotification(t('google.reconnect_failed'), 'error');
  }
};

window.triggerGoogleCalendarSync = async function() {
  const syncBtn = document.querySelector('[onclick="triggerGoogleCalendarSync()"]');
  if (syncBtn) {
    syncBtn.disabled = true;
    syncBtn.textContent = t('common.loading');
  }
  try {
    const report = await performBidirectionalSync();
    const message = `${t('google.sync_report_title')}: ${t('google.sync_report_details', {
      exported: report.exported || 0,
      imported: report.imported || 0,
      updated: report.updated || 0,
    })}`;
    showNotification(message, 'success');
    if (window.calendar) window.calendar.refetchEvents();
  } catch (error) {
    console.error('Sync failed:', error);
    showNotification(`${t('error.title')}: ${error.message || 'Sync failed'}`, 'error');
  } finally {
    updateGoogleCalendarStatus();
  }
};

// Export calendar instance for other modules
export function getCalendar() {
  return calendar;
}

// Import functions that will be implemented in other components
import { showAddEventModal } from '../modals/AddEventModal.js';
import { showEventDetails } from './EventDetails.js';
