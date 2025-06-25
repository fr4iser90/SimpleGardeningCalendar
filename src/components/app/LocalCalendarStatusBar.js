import { getAllLocalCalendars, getDefaultCalendar, getCalendar } from '../../core/db/calendars.js';
import { showNotification } from '../../utils/notifications.js';
import { t } from '../../core/i18n/index.js';

// Function to update local calendar status display
export function updateLocalCalendarStatus() {
  const statusDisplay = document.getElementById('localCalendarStatusDisplay');
  if (!statusDisplay) return;

  // Get selected calendar ID from localStorage
  const selectedCalendarId = localStorage.getItem('selectedLocalCalendarId');
  
  if (!selectedCalendarId) {
    // No calendar selected - show setup prompt
    statusDisplay.innerHTML = `
      <button
        class="text-blue-600 dark:text-blue-400 flex items-center hover:underline focus:outline-none"
        style="background:none;border:none;padding:0;cursor:pointer"
        title="${t('local.status.setup')}"
        id="localCalendarSetupBtn"
      >
        <span class="text-lg mr-2">🗓️</span>
        <span class="font-bold mr-1">Lokale Kalender:</span>
        <i class="fas fa-plus-circle mr-1"></i>${t('local.status.setup')}
      </button>
    `;
    
    // Add event listener for setup button
    const setupBtn = document.getElementById('localCalendarSetupBtn');
    if (setupBtn) {
      setupBtn.addEventListener('click', () => {
        showLocalCalendarWizard();
      });
    }
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

// Show local calendar wizard
export function showLocalCalendarWizard() {
  // Import and show the wizard modal
  import('../modals/LocalCalendarWizard.js').then(mod => {
    // Create modal container if it doesn't exist
    let modalContainer = document.getElementById('localCalendarWizardModal');
    if (!modalContainer) {
      modalContainer = document.createElement('div');
      modalContainer.id = 'localCalendarWizardModal';
      modalContainer.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
      modalContainer.style.display = 'none';
      document.body.appendChild(modalContainer);
    }
    
    // Render wizard content
    modalContainer.innerHTML = `
      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto relative">
        <button 
          onclick="closeLocalCalendarWizard()"
          class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-xl"
          title="Schließen"
        >
          <i class="fas fa-times"></i>
        </button>
        ${mod.renderLocalCalendarWizardHTML()}
      </div>
    `;
    
    // Show modal
    modalContainer.style.display = 'flex';
    
    // Setup event listeners
    mod.setupLocalCalendarWizardEventListeners();
    
    // Add close function to window
    window.closeLocalCalendarWizard = () => {
      if (modalContainer && modalContainer.parentNode) {
        modalContainer.parentNode.removeChild(modalContainer);
      }
    };
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