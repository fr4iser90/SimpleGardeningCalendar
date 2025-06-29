import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { openDB } from 'idb';
import { getEventColor } from '../../utils/eventUtils.js';
import { t, updateUITranslations, getCurrentLanguage } from '../../core/i18n/index.js';
import { initializeDB } from '../../core/db/index.js';
import { initializeDefaultCalendars } from '../../core/db/calendars.js';
import { initializeGoogleStatusBar } from '../app/GoogleStatusBar.js';
import { initializeLocalCalendarStatusBar } from '../app/LocalCalendarStatusBar.js';
import { initializeCalendarSwitch } from '../ui/CalendarSwitch.js';
import { DB_NAME, DB_VERSION } from '../../core/db/connection.js';
import deLocale from '@fullcalendar/core/locales/de';
import enLocale from '@fullcalendar/core/locales/en-gb';
import frLocale from '@fullcalendar/core/locales/fr';
import esLocale from '@fullcalendar/core/locales/es';
import itLocale from '@fullcalendar/core/locales/it';

let calendar;

function getFullCalendarLocale(lang) {
  switch (lang) {
    case 'de': return deLocale;
    case 'fr': return frLocale;
    case 'es': return esLocale;
    case 'it': return itLocale;
    default: return enLocale;
  }
}

export async function initializeCalendar() {
  await initializeDB();
  
  // Initialize default local calendars
  await initializeDefaultCalendars();
  
  // Migrate existing default calendars to use categoryKey
  const { migrateDefaultCalendarsToCategoryKey } = await import('../../core/db/calendars.js');
  await migrateDefaultCalendarsToCategoryKey();
  
  const calendarEl = document.getElementById('calendar');
  const currentLang = getCurrentLanguage();
  
  calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    locale: getFullCalendarLocale(currentLang),
    locales: [deLocale, enLocale, frLocale, esLocale, itLocale],
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
        const db = await openDB(DB_NAME, DB_VERSION);
        const events = await db.getAll('events');
        const selectedCalendarId = localStorage.getItem('selectedLocalCalendarId');
        const filteredEvents = events.filter(event => !selectedCalendarId || event.calendarId == selectedCalendarId);
        const formattedEvents = filteredEvents.map(event => ({
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
            isTemplate: event.isTemplate,
            calendarId: event.calendarId
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
  
  // Initialize Google Calendar status bar und calendar switching
  initializeGoogleStatusBar();
  // initializeLocalCalendarStatusBar(); // Entfernt, wird jetzt in calendar.js nach createCalendarControls() aufgerufen
  initializeCalendarSwitch();
  
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

    if (window.updateGoogleCalendarStatus) {
      window.updateGoogleCalendarStatus();
    }
  });
  
  // Listen for calendar switch events
  document.addEventListener('calendarSwitched', (e) => {
    console.log('📅 Calendar switched to:', e.detail.calendarName);
    if (calendar && typeof calendar.refetchEvents === 'function') {
      calendar.refetchEvents();
    }
  });
  
  return calendar;
}

// Export calendar instance for other modules
export function getCalendar() {
  return calendar;
}

// Import functions that will be implemented in other components
import { showAddEventModal } from '../modals/AddEventModal.js';
import { showEventDetails } from './EventDetails.js';
