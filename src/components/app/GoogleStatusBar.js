import * as googleCalendar from '../../services/GoogleCalendar/GoogleCalendarApi.js';
import { performBidirectionalSync } from '../../services/GoogleCalendar/GoogleCalendarSync.js';
import { showNotification } from '../../utils/notifications.js';
import { t } from '../../core/i18n/index.js';

// Function to update Google Calendar status display
export function updateGoogleCalendarStatus() {
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

  console.log('📊 Status Bar Debug:', {
    hasSavedCredentials,
    isCurrentlySignedIn,
    hasSelectedCalendar,
    userEmail: settings.userEmail,
    selectedCalendarId: settings.selectedCalendarId,
    organizationType: settings.organizationType
  });

  // Auto-detect calendars if signed in but no calendar selected OR if calendar selected but no dropdown data
  if (isCurrentlySignedIn && (!hasSelectedCalendar || (hasSelectedCalendar && !settings.createdCalendars))) {
    console.log('🔍 Auto-detecting garden calendars...');
    autoDetectAndSelectCalendar();
  }

  if (isCurrentlySignedIn && hasSavedCredentials) {
    if (!hasSelectedCalendar) {
      statusDisplay.innerHTML = `
        <span class="font-bold mr-2 flex items-center"><span class="text-lg mr-1">📅</span>${t('google.calendar.name')}:</span>
        <span class="text-yellow-600 dark:text-yellow-400 flex items-center">
          <i class="fas fa-exclamation-triangle mr-1"></i>${t('google.status.no_calendar_selected')}
        </span>
      `;
      return;
    }

    const selectedCalendarId = settings.selectedCalendarId;
    // Try to get calendar name from createdCalendars first, then fallback to calendarList
    let calendarName = selectedCalendarId;
    
    if (settings.createdCalendars && settings.createdCalendars.length > 0) {
      const foundCalendar = settings.createdCalendars.find(cal => cal.id === selectedCalendarId);
      if (foundCalendar) {
        calendarName = foundCalendar.name;
      }
    } else if (settings.calendarList && settings.calendarList[selectedCalendarId]) {
      calendarName = settings.calendarList[selectedCalendarId];
    }
    
    // If still showing ID, try to load calendar name
    if (calendarName === selectedCalendarId && calendarName.includes('@group.calendar.google.com')) {
      calendarName = t('google.calendar.fallback_name'); // Fallback friendly name
    }
    
    const autoSync = settings.autoSync || false;

    statusDisplay.innerHTML = `
      <span class="font-bold mr-2 flex items-center"><span class="text-lg mr-1">📅</span>${t('google.calendar.name')}:</span>
      <span class="text-green-600 dark:text-green-400 flex items-center" title="${settings.userEmail}">
        <i class="fas fa-check-circle mr-1"></i>${t('google.connected')}
      </span>
      <span class="mx-2">|</span>
      <div class="flex items-center space-x-2">
        <span>📅</span>
        ${settings.createdCalendars && settings.createdCalendars.length > 1 ? `
          <select 
            id="calendarSwitcher" 
            class="text-xs px-2 py-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            onchange="switchCalendar(this.value)"
          >
            ${settings.createdCalendars.map(cal => `
              <option value="${cal.id}" ${cal.id === selectedCalendarId ? 'selected' : ''}>
                ${cal.name}
              </option>
            `).join('')}
          </select>
        ` : `<span>${calendarName}</span>`}
      </div>
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
    console.log('📊 Google Status Bar: Showing RECONNECT NEEDED');
    statusDisplay.innerHTML = `
      <span class="font-bold mr-2 flex items-center"><span class="text-lg mr-1">📅</span>${t('google.calendar.name')}:</span>
      <span class="text-yellow-600 dark:text-yellow-400 flex items-center">
        <i class="fas fa-link mr-1"></i>${t('google.reconnect_needed')}
      </span>
      <button class="ml-2 px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600" onclick="reconnectGoogleCalendar()">
        ${t('google.reconnect')}
      </button>
    `;
  } else {
    console.log('📊 Google Status Bar: Showing NOT CONNECTED');
    statusDisplay.innerHTML = `
      <button
        class="text-red-600 dark:text-red-400 flex items-center hover:underline focus:outline-none"
        style="background:none;border:none;padding:0;cursor:pointer"
        title="${t('google.status.connect_tooltip')}"
        id="googleStatusConnectBtn"
      >
        <img src="https://www.gstatic.com/images/branding/product/1x/calendar_48dp.png" alt="${t('google.calendar.name')}" style="height:1.2em;vertical-align:middle;margin-right:0.5em;">
        <span class="font-bold mr-1">${t('google.calendar.name')}:</span>
        <i class="fas fa-times-circle mr-1"></i>${t('google.not_connected')}
      </button>
    `;
    // Button-Handler für Modal-Öffnung
    const connectBtn = document.getElementById('googleStatusConnectBtn');
    if (connectBtn) {
      connectBtn.addEventListener('click', () => {
        if (window.renderGoogleCalendarSetupModal) {
          window.renderGoogleCalendarSetupModal();
        } else {
          import('../modals/GoogleCalendarSetupModal.js').then(mod => {
            mod.renderGoogleCalendarSetupModal();
          });
        }
      });
    }
  }
}

// Auto-detect and select garden calendars
async function autoDetectAndSelectCalendar() {
  try {
    const { detectGardenCalendars } = await import('../../services/GoogleCalendar/GoogleCalendarApi.js');
    const { gardenCalendars, hasExistingGardenCalendars } = await detectGardenCalendars();
    
    console.log('🔍 Auto-detection results:', {
      found: gardenCalendars.length,
      calendars: gardenCalendars.map(cal => cal.summary)
    });
    
    if (hasExistingGardenCalendars && gardenCalendars.length > 0) {
      // Auto-select the first garden calendar found
      const selectedCalendar = gardenCalendars[0];
      
      let settings = {};
      try {
        const settingsJSON = localStorage.getItem('googleCalendarSettings');
        if (settingsJSON) {
          settings = JSON.parse(settingsJSON);
        }
      } catch (error) {
        settings = {};
      }
      
      // Save all garden calendars to createdCalendars for dropdown
      settings.createdCalendars = gardenCalendars.map(cal => ({
        id: cal.id,
        name: cal.summary
      }));
      
      settings.selectedCalendarId = selectedCalendar.id;
      settings.selectedCalendarName = selectedCalendar.summary;
      settings.organizationType = 'existing';
      localStorage.setItem('googleCalendarSettings', JSON.stringify(settings));
      
      console.log('✅ Auto-selected calendar:', selectedCalendar.summary);
      console.log('📋 Saved calendars for dropdown:', settings.createdCalendars);
      
      // Update status immediately
      updateGoogleCalendarStatus();
      
      // Notify other components
      document.dispatchEvent(new CustomEvent('calendarSwitched', { 
        detail: { 
          calendarId: selectedCalendar.id, 
          calendarName: selectedCalendar.summary 
        } 
      }));
    }
  } catch (error) {
    console.error('❌ Auto-detection failed:', error);
  }
}

// Initialize status bar event listeners
export function initializeGoogleStatusBar() {
  // Make updateGoogleCalendarStatus globally available for other modules
  window.updateGoogleCalendarStatus = updateGoogleCalendarStatus;
  
  // Listen for Google Calendar status changes
  document.addEventListener('googleCalendarStatusChanged', () => {
    console.log('📊 Google Status Bar: Received googleCalendarStatusChanged event');
    updateGoogleCalendarStatus();
  });

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
  };

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
}
