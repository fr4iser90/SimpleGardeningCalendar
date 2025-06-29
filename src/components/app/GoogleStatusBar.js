import * as googleCalendar from '../../services/GoogleCalendar/GoogleCalendarApi.js';
import { performBidirectionalSync } from '../../services/GoogleCalendar/GoogleCalendarSync.js';
import { showNotification } from '../../utils/notifications.js';
import { t } from '../../core/i18n/index.js';

// Global state for status bar activity
let statusBarState = {
  isActive: false,
  currentAction: '',
  lastAction: '',
  lastActionTime: null,
  spinnerId: null
};

// Function to update status bar activity
export function updateStatusBarActivity(action, isActive = true) {
  statusBarState.isActive = isActive;
  statusBarState.currentAction = isActive ? action : '';
  
  if (!isActive && action) {
    statusBarState.lastAction = action;
    statusBarState.lastActionTime = new Date();
  }
  
  updateGoogleCalendarStatus();
}

// Function to get time ago string
function getTimeAgo(date) {
  if (!date) return '';
  
  const now = new Date();
  const diffMs = now - date;
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  
  if (diffSecs < 60) return `${diffSecs}s`;
  if (diffMins < 60) return `${diffMins}m`;
  return `${Math.floor(diffMins / 60)}h`;
}

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
    // ENTFERNT: Automatische Kalender-Erkennung verursacht Endlosschleifen!
    // autoDetectAndSelectCalendar();
  }

  // NEU: Loading Spinner und Activity Status
  const activityStatus = statusBarState.isActive ? 
    `<span class="text-blue-600 dark:text-blue-400 flex items-center">
      <div class="animate-spin rounded-full h-3 w-3 border-b-2 border-blue-600 mr-1"></div>
      ${statusBarState.currentAction}
    </span>` : 
    (statusBarState.lastAction ? 
      `<span class="text-gray-500 dark:text-gray-400 text-xs">
        ${statusBarState.lastAction} (${getTimeAgo(statusBarState.lastActionTime)})
      </span>` : 
      ''
    );

  if (isCurrentlySignedIn && hasSavedCredentials) {
    if (!hasSelectedCalendar) {
      // Check if there's a quota error by looking at recent console logs or error state
      const hasQuotaError = settings.lastError && (
        settings.lastError.includes('quotaExceeded') || 
        settings.lastError.includes('usageLimits')
      );
      
      if (hasQuotaError) {
        statusDisplay.innerHTML = `
          <span class="font-bold mr-2 flex items-center"><span class="text-lg mr-1">📅</span>${t('google.calendar.name')}:</span>
          <span class="text-red-600 dark:text-red-400 flex items-center">
            <i class="fas fa-exclamation-triangle mr-1"></i>${t('google.quota.limit_reached')}
          </span>
          <span class="mx-2">|</span>
          <span class="text-sm text-gray-600 dark:text-gray-400">
            ${t('google.quota.create_manually')}
          </span>
          <span class="mx-2">|</span>
          <button 
            class="text-xs text-blue-600 dark:text-blue-400 hover:underline"
            onclick="showGoogleCalendarSetup()"
            title="${t('google.setup.title')}"
          >
            <i class="fas fa-cog mr-1"></i>${t('google.setup.title')}
          </button>
          ${activityStatus ? `<span class="mx-2">|</span>${activityStatus}` : ''}
        `;
        return;
      }
      
      statusDisplay.innerHTML = `
        <span class="font-bold mr-2 flex items-center"><span class="text-lg mr-1">📅</span>${t('google.calendar.name')}:</span>
        <span class="text-yellow-600 dark:text-yellow-400 flex items-center">
          <i class="fas fa-exclamation-triangle mr-1"></i>${t('google.status.no_calendar_selected')}
        </span>
        ${activityStatus ? `<span class="mx-2">|</span>${activityStatus}` : ''}
      `;
      return;
    }

    const autoSync = settings.autoSync || false;

    statusDisplay.innerHTML = `
      <span class="font-bold mr-2 flex items-center"><span class="text-lg mr-1">📅</span>${t('google.calendar.name')}:</span>
      <span class="text-green-600 dark:text-green-400 flex items-center" title="${settings.userEmail}">
        <i class="fas fa-check-circle mr-1"></i>${t('google.connected')}
      </span>
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
      <span class="mx-2">|</span>
      <button 
        class="text-xs text-blue-600 dark:text-blue-400 hover:underline"
        onclick="showGoogleCalendarSetup()"
        title="${t('google.status.manage_integration')}"
      >
        <i class="fas fa-cog mr-1"></i>
      </button>
      ${activityStatus ? `<span class="mx-2">|</span>${activityStatus}` : ''}
    `;
    return;
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
      <span class="mx-2">|</span>
      <button 
        class="text-xs text-blue-600 dark:text-blue-400 hover:underline"
        onclick="showGoogleCalendarSetup()"
        title="${t('google.status.manage_integration')}"
      >
        <i class="fas fa-cog mr-1"></i>${t('google.status.manage_integration')}
      </button>
      ${activityStatus ? `<span class="mx-2">|</span>${activityStatus}` : ''}
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
      <span class="mx-2">|</span>
      <button 
        class="text-xs text-blue-600 dark:text-blue-400 hover:underline"
        onclick="showGoogleCalendarSetup()"
        title="${t('google.status.manage_integration')}"
      >
        <i class="fas fa-cog mr-1"></i>${t('google.status.manage_integration')}
      </button>
      ${activityStatus ? `<span class="mx-2">|</span>${activityStatus}` : ''}
    `;
    // Button-Handler für Modal-Öffnung
    const connectBtn = document.getElementById('googleStatusConnectBtn');
    if (connectBtn) {
      connectBtn.addEventListener('click', () => {
        showGoogleCalendarSetup();
      });
    }
  }
}

// Initialize status bar event listeners
export function initializeGoogleStatusBar() {
  // Make updateGoogleCalendarStatus globally available for other modules
  window.updateGoogleCalendarStatus = updateGoogleCalendarStatus;
  
  // Listen for Google Calendar status changes
  document.addEventListener('googleCalendarStatusChanged', async (e) => {
    console.log('📊 Google Status Bar: Received googleCalendarStatusChanged event');
    updateGoogleCalendarStatus();
  });

  // Make Google Calendar functions available on the window object for onclick handlers
  window.triggerGoogleCalendarSync = async function() {
    updateStatusBarActivity(t('google.activity.syncing'), true);
    
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
      updateStatusBarActivity(t('google.activity.sync_complete', { 
        exported: report.exported || 0, 
        imported: report.imported || 0 
      }), false);
      setTimeout(() => updateStatusBarActivity(t('google.setup.ready'), false), 2000);
    } catch (error) {
      console.error('Sync failed:', error);
      showNotification(`${t('error.title')}: ${error.message || 'Sync failed'}`, 'error');
      updateStatusBarActivity(t('google.activity.sync_failed', { error: error.message }), false);
    } finally {
      if (syncBtn) {
        syncBtn.disabled = false;
        syncBtn.textContent = t('google.sync_now');
      }
      updateGoogleCalendarStatus();
    }
  };

  window.reconnectGoogleCalendar = async function() {
    updateStatusBarActivity(t('google.activity.connecting'), true);
    
    try {
      await googleCalendar.attemptSignIn(true);
      updateStatusBarActivity(t('google.activity.connection_established'), false);
    } catch (error) {
      console.error('Google Calendar reconnect failed:', error);
      showNotification(t('google.reconnect_failed'), 'error');
      updateStatusBarActivity(t('google.activity.connection_failed', { error: error.message }), false);
    }
  };

  window.toggleGoogleAutoSync = async function() {
    try {
      const settingsJSON = localStorage.getItem('googleCalendarSettings');
      let settings = settingsJSON ? JSON.parse(settingsJSON) : {};
      if (!settings.autoSync && !settings.selectedCalendarId) {
        showNotification(t('google.error.no_calendar_selected'), 'error');
        return;
      }
      
      const newAutoSyncState = !settings.autoSync;
      settings.autoSync = newAutoSyncState;
      localStorage.setItem('googleCalendarSettings', JSON.stringify(settings));
      
      showNotification(t(newAutoSyncState ? 'google.autosync_on_notif' : 'google.autosync_off_notif'), 'info');
      updateGoogleCalendarStatus();
    } catch (error) {
      console.error('Failed to toggle auto-sync:', error);
      showNotification('Error changing sync setting', 'error');
      updateStatusBarActivity(t('google.activity.setting_failed', { error: error.message }), false);
    }
  };

  window.showGoogleCalendarSetup = function() {
    if (window.renderGoogleCalendarSetupModal) {
      window.renderGoogleCalendarSetupModal();
    } else {
      import('../modals/Google/GoogleCalendarSetupModal.js').then(mod => {
        mod.renderGoogleCalendarSetupModal();
      });
    }
  };
}
