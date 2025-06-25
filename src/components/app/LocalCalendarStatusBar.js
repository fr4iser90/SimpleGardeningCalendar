import { getAllLocalCalendars, getDefaultCalendar, getCalendar } from '../../core/db/calendars.js';
import { showNotification } from '../../utils/notifications.js';
import { t } from '../../core/i18n/index.js';

// Function to update local calendar status display
export function updateLocalCalendarStatus() {
  const statusDisplay = document.getElementById('localCalendarStatusDisplay');
  if (!statusDisplay) return;

  // Get selected calendar ID from localStorage
  let selectedCalendarId = localStorage.getItem('selectedLocalCalendarId');

  // NEU: Wenn die ID keine Zahl ist (also Google-ID oder kaputt), auf Standard-Lokalkalender umschalten
  if (!selectedCalendarId || isNaN(Number(selectedCalendarId))) {
    import('../../core/db/calendars.js').then(async ({ getAllLocalCalendars }) => {
      const allCalendars = await getAllLocalCalendars();
      if (allCalendars.length > 0) {
        localStorage.setItem('selectedLocalCalendarId', allCalendars[0].id.toString());
        selectedCalendarId = allCalendars[0].id.toString();
      } else {
        // Kein Kalender vorhanden, Setup anzeigen
        statusDisplay.innerHTML = `
          <span class="font-bold mr-2 flex items-center"><span class="text-lg mr-1">🗓️</span>${t('local.status.title')}:</span>
          <button
            class="text-blue-600 dark:text-blue-400 flex items-center hover:underline focus:outline-none"
            style="background:none;border:none;padding:0;cursor:pointer"
            title="${t('local.status.setup')}"
            id="localCalendarSetupBtn"
          >
            <span class="text-lg mr-2">🗓️</span>
            <span class="font-bold mr-1">${t('local.status.title')}:</span>
            <i class="fas fa-plus-circle mr-1"></i>${t('local.status.setup')}
          </button>
        `;
        const setupBtn = document.getElementById('localCalendarSetupBtn');
        if (setupBtn) {
          setupBtn.addEventListener('click', () => {
            showLocalCalendarWizard();
          });
        }
        return;
      }
    });
    return;
  }

  // Get calendar details
  getCalendar(parseInt(selectedCalendarId)).then(selectedCalendar => {
    if (!selectedCalendar) {
      // Calendar not found - reset selection
      localStorage.removeItem('selectedLocalCalendarId');
      updateLocalCalendarStatus();
      return;
    }

    // Get all calendars for dropdown
    getAllLocalCalendars().then(allCalendars => {
      const hasMultipleCalendars = allCalendars.length > 1;
      
      statusDisplay.innerHTML = `
        <span class="font-bold mr-2 flex items-center"><span class="text-lg mr-1">🗓️</span>${t('local.status.title')}:</span>
        <span class="text-green-600 dark:text-green-400 flex items-center">
          <i class="fas fa-check-circle mr-1"></i>${t('local.status.active')}
        </span>
        <span class="mx-2">|</span>
        <div class="flex items-center space-x-2">
          <span>${selectedCalendar.icon || '🗓️'}</span>
          ${hasMultipleCalendars ? `
            <select 
              id="localCalendarSwitcher" 
              class="text-xs px-2 py-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              onchange="switchLocalCalendar(this.value)"
            >
              ${allCalendars.map(cal => `
                <option value="${cal.id}" ${cal.id === parseInt(selectedCalendarId) ? 'selected' : ''}>
                  ${cal.name}
                </option>
              `).join('')}
            </select>
          ` : `<span>${selectedCalendar.name}</span>`}
        </div>
        <span class="mx-2">|</span>
        <button 
          class="text-xs text-blue-600 dark:text-blue-400 hover:underline"
          onclick="showLocalCalendarWizard()"
          title="${t('local.status.manage')}"
        >
          <i class="fas fa-cog mr-1"></i>${t('local.status.manage')}
        </button>
      `;
    });
  }).catch(error => {
    console.error('Error loading local calendar status:', error);
    statusDisplay.innerHTML = `
      <span class="font-bold mr-2 flex items-center"><span class="text-lg mr-1">🗓️</span>${t('local.status.title')}:</span>
      <span class="text-red-600 dark:text-red-400 flex items-center">
        <i class="fas fa-exclamation-triangle mr-1"></i>${t('local.status.load_error')}
      </span>
    `;
  });
}

// Switch local calendar
export function switchLocalCalendar(calendarId) {
  try {
    localStorage.setItem('selectedLocalCalendarId', calendarId.toString());
    
    // Get calendar name for notification
    getCalendar(parseInt(calendarId)).then(calendar => {
      if (calendar) {
        showNotification(t('local.status.switched', { name: calendar.name }), 'success');
      }
    });
    
    // Update status bar
    updateLocalCalendarStatus();
    
    // Refresh calendar events if needed
    if (window.calendar) {
      window.calendar.refetchEvents();
    }
    
    // Fire event for other components to listen to
    document.dispatchEvent(new CustomEvent('localCalendarSwitched', { 
      detail: { calendarId: parseInt(calendarId) } 
    }));
    
  } catch (error) {
    console.error('Failed to switch local calendar:', error);
    showNotification(t('local.status.switch_error'), 'error');
  }
}

// Show local calendar setup modal
export function showLocalCalendarWizard() {
  // Import and show the setup modal
  import('../modals/LocalCalendarSetupModal.js').then(mod => {
    mod.renderLocalCalendarSetupModal();
  });
}

// Initialize local calendar status bar event listeners
export function initializeLocalCalendarStatusBar() {
  // Make functions globally available for onclick handlers
  window.updateLocalCalendarStatus = updateLocalCalendarStatus;
  window.switchLocalCalendar = switchLocalCalendar;
  window.showLocalCalendarWizard = showLocalCalendarWizard;
  
  // Listen for local calendar updates
  document.addEventListener('localCalendarsUpdated', () => {
    console.log('📊 Local Calendar Status Bar: Received localCalendarsUpdated event');
    updateLocalCalendarStatus();
  });

  // Listen for local calendar switches
  document.addEventListener('localCalendarSwitched', (e) => {
    console.log('📊 Local Calendar Status Bar: Calendar switched to', e.detail.calendarId);
    updateLocalCalendarStatus();
  });

  // Listen for language changes
  document.addEventListener('languageChanged', () => {
    updateLocalCalendarStatus();
  });

  // Initial render
  updateLocalCalendarStatus();
}

export default {
  updateLocalCalendarStatus,
  switchLocalCalendar,
  showLocalCalendarWizard,
  initializeLocalCalendarStatusBar
}; 