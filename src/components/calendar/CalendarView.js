import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { openDB } from 'idb';
import { getEventColor } from '../../utils/eventUtils.js';
import { t, updateUITranslations } from '../../core/i18n/index.js';
import { initializeDB } from '../../core/db/index.js';
import { initializeGoogleStatusBar } from '../app/GoogleStatusBar.js';
import { initializeCalendarSwitch } from '../ui/CalendarSwitch.js';

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
  
  // Initialize Google Calendar status bar and calendar switching
  initializeGoogleStatusBar();
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
    // Update other UI elements
    updateUITranslations();
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
