import { attemptSignIn, signOut, getUserInfo, getAuthState } from '../../../services/GoogleCalendar/GoogleCalendarApi.js';
import { performBidirectionalSync, exportLocalEventsToGoogle, importGoogleEvents } from '../../../services/GoogleCalendar/GoogleCalendarSync.js';
import { googleCalendarSettings } from '../../../services/GoogleCalendar/GoogleCalendarSettings.js';
import { autoDetectAndMatchCalendars, updateCalendarNamesForLanguage } from '../../../services/GoogleCalendar/GoogleCalendarWizard.js';
import { getEventTypeIcon } from '../../../utils/eventUtils.js';
import { showNotification } from '../../../utils/notifications.js';
import { showButtonSpinner, hideButtonSpinner, showLoadingSpinner, hideLoadingSpinner } from '../../ui/LoadingSpinner.js';
import { showDetailedHelp } from './GoogleDetailedHelp.js';
import { t } from '../../../core/i18n/index.js';

/**
 * Google Calendar Setup Modal
 * Handles the UI and user interactions for Google Calendar settings.
 */

async function performSyncOperation(operation, button, originalText) {
  const spinnerId = showButtonSpinner(button, originalText, t('google.setup.processing'));
  const syncStatusText = document.getElementById('syncStatusText');
  syncStatusText.textContent = t('google.setup.running_sync', { operation });

  try {
    const { isSignedIn } = getAuthState();
    if (!isSignedIn) {
      throw new Error(t('google.setup.not_signed_in'));
    }

    let result;
    switch (operation) {
      case 'export':
        result = await exportLocalEventsToGoogle();
        showNotification(t('google.setup.export_complete', { count: result.synced }), 'success');
        break;
      case 'import':
        result = await importGoogleEvents();
        showNotification(t('google.setup.import_complete', { imported: result.imported, updated: result.updated }), 'success');
        break;
      case 'bidirectional':
        result = await performBidirectionalSync();
        showNotification(t('google.setup.bidirectional_complete', { exported: result.exported, imported: result.imported, updated: result.updated }), 'success');
        break;
    }
    
    // Update last sync time
    const settings = googleCalendarSettings.load();
    settings.lastSyncTime = new Date().toISOString();
    googleCalendarSettings.save(settings);
    document.getElementById('lastSyncInfo').textContent = `${t('google.setup.last_sync')} ${new Date(settings.lastSyncTime).toLocaleString()}`;
    syncStatusText.textContent = t('google.setup.sync_successful');

  } catch (error) {
    console.error(`Sync failed:`, error);
    showNotification(t('google.setup.sync_failed', { error: error.message }), 'error');
    syncStatusText.textContent = t('google.setup.sync_failed', { error: error.message });
  } finally {
    hideButtonSpinner(button, spinnerId);
  }
}

export async function updateConnectionStatus() {
  const statusDiv = document.getElementById('connectionStatus');
  const userInfoDiv = document.getElementById('userInfo');
  const syncOptionsDiv = document.getElementById('syncOptions');
  const calendarSetupSection = document.getElementById('calendarSetupSection');
  
  if (!statusDiv || !userInfoDiv || !syncOptionsDiv || !calendarSetupSection) return;
  
  try {
    const { isSignedIn } = getAuthState();
    const settings = googleCalendarSettings.load();
    
    if (isSignedIn) {
      statusDiv.className = 'p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800';
      statusDiv.querySelector('.flex').innerHTML = `<span class="text-lg">✅</span><span class="font-medium dark:text-white">${t('google.setup.connected')}</span>`;
      userInfoDiv.textContent = 'Loading user info...';
      
      try {
        const userInfo = await getUserInfo();
        settings.userEmail = userInfo.email;
        googleCalendarSettings.save(settings);
        userInfoDiv.textContent = `${t('google.setup.connected_as')} ${userInfo.email}`;
      } catch (error) {
        userInfoDiv.textContent = 'Connected (user info unavailable)';
      }
      
      // Show calendar setup section after login
      calendarSetupSection.style.display = 'block';
      
      // Auto-detect and match calendars if no setup exists
      if (!settings.calendarMappings) {
        console.log('🔍 No calendar mappings found - running auto-detection...');
        try {
          const detectionResult = await autoDetectAndMatchCalendars();
          showNotification(`Calendar setup complete: ${Object.keys(detectionResult.matched).length} calendars configured`, 'success');
        } catch (error) {
          console.error('Failed to auto-detect calendars:', error);
          showNotification('Calendar setup failed. Please try again.', 'error');
        }
      }
      
      // Show sync options
      syncOptionsDiv.style.display = 'block';
      
    } else {
      statusDiv.className = 'p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600';
      statusDiv.querySelector('.flex').innerHTML = `
        <span class="text-lg">❌</span>
        <img src="https://www.gstatic.com/images/branding/product/1x/calendar_48dp.png" alt="Google Calendar" style="height:1.2em;vertical-align:middle;margin-right:0.5em;">
        <span class="font-bold mr-1">Google Calendar:</span>
        <span class="font-medium dark:text-white">${t('google.setup.not_connected')}</span>
      `;
      userInfoDiv.textContent = t('google.setup.enter_client_id');
      syncOptionsDiv.style.display = 'none';
      calendarSetupSection.style.display = 'none';
    }
  } catch (error) {
    console.error('Failed to update connection status:', error);
  }
}

function initializeGoogleCalendarEventListeners() {
  const connectBtn = document.getElementById('connectBtn');
  const clientIdInput = document.getElementById('googleClientId');
  const saveSettingsBtn = document.getElementById('saveSettingsBtn');
  const syncAllEventsBtn = document.getElementById('syncAllEventsBtn');
  const importEventsBtn = document.getElementById('importEventsBtn');
  const bidirectionalSyncBtn = document.getElementById('bidirectionalSyncBtn');
  const saveSyncSettingsBtn = document.getElementById('saveSyncSettingsBtn');
  const signOutBtn = document.getElementById('signOutBtn');
  const setupCalendarsBtn = document.getElementById('setupCalendarsBtn');

  // Connect button
  connectBtn?.addEventListener('click', async () => {
    const clientId = clientIdInput.value;
    if (!clientId) {
      showNotification('Please enter a Google Client ID.', 'error');
      return;
    }
    // Save Client ID before attempting to connect
    const settings = googleCalendarSettings.load();
    settings.clientId = clientId;
    googleCalendarSettings.save(settings);

    const originalText = connectBtn.textContent;
    const spinnerId = showButtonSpinner(connectBtn, originalText, 'Connecting...');
    
    try {
      await attemptSignIn(true);
      // Status will be updated by the 'googleCalendarStatusChanged' event listener in GoogleCalendarApi.js
    } catch (e) {
       showNotification(`Connection failed: ${e.message}`, 'error');
    } finally {
        hideButtonSpinner(connectBtn, spinnerId);
    }
  });
  
  // Save settings button
  saveSettingsBtn?.addEventListener('click', () => {
    const settings = googleCalendarSettings.load();
    settings.clientId = clientIdInput.value;
    googleCalendarSettings.save(settings);
    showNotification('Settings saved successfully!', 'success');
  });
  
  // Setup calendars button
  setupCalendarsBtn?.addEventListener('click', async () => {
    const originalText = setupCalendarsBtn.textContent;
    const spinnerId = showButtonSpinner(setupCalendarsBtn, originalText, 'Setting up calendars...');
    
    try {
      const result = await autoDetectAndMatchCalendars();
      const calendarCount = Object.keys(result.matched).length;
      showNotification(`Calendar setup complete: ${calendarCount} calendars configured`, 'success');
      updateConnectionStatus();
    } catch (error) {
      showNotification(`Calendar setup failed: ${error.message}`, 'error');
    } finally {
      hideButtonSpinner(setupCalendarsBtn, spinnerId);
    }
  });
  
  // Sync buttons
  syncAllEventsBtn?.addEventListener('click', () => performSyncOperation('export', syncAllEventsBtn, '📤 Export All Local Events'));
  importEventsBtn?.addEventListener('click', () => performSyncOperation('import', importEventsBtn, '📥 Import from Google Calendar'));
  bidirectionalSyncBtn?.addEventListener('click', () => performSyncOperation('bidirectional', bidirectionalSyncBtn, '🔄 Full Bidirectional Sync'));
  
  // Save sync settings
  saveSyncSettingsBtn?.addEventListener('click', () => {
    const settings = googleCalendarSettings.load();
    
    settings.autoSync = document.getElementById('autoSync').checked;
    settings.bidirectionalSync = document.getElementById('bidirectionalSync').checked;
    settings.importSettings = {
      importTimeRange: document.getElementById('importTimeRange').value
    };
    
    settings.syncTypes = {};
    document.querySelectorAll('input[id^="sync_"]').forEach(checkbox => {
      const type = checkbox.id.replace('sync_', '');
      settings.syncTypes[type] = checkbox.checked;
    });
    
    googleCalendarSettings.save(settings);
    showNotification('Sync settings saved!', 'success');
  });
  
  // Sign out
  signOutBtn?.addEventListener('click', async () => {
    const originalText = signOutBtn.textContent;
    const spinnerId = showButtonSpinner(signOutBtn, originalText, 'Signing out...');
    
    try {
      await signOut();
      showNotification('Signed out successfully', 'success');
    } catch (error) {
      showNotification('Sign out failed: ' + error.message, 'error');
    } finally {
      hideButtonSpinner(signOutBtn, spinnerId);
    }
  });

  // Listener for status changes from the API module
  document.addEventListener('googleCalendarStatusChanged', (e) => {
      console.log('Event "googleCalendarStatusChanged" received in UI, updating status.');
      updateConnectionStatus();
  });

  // Listener for language changes to update Google calendar names
  document.addEventListener('languageChanged', async (e) => {
      console.log('Language changed to:', e.detail.language);
      const { isSignedIn } = getAuthState();
      if (isSignedIn) {
          try {
              const result = await updateCalendarNamesForLanguage();
              if (Object.keys(result.updated).length > 0) {
                  showNotification(`Updated ${Object.keys(result.updated).length} calendar names for new language`, 'success');
              }
          } catch (error) {
              console.error('Failed to update calendar names for language change:', error);
          }
      }
  });
}

// Main function to render the modal
export function renderGoogleCalendarSetupModal() {
  console.log('🔧 renderGoogleCalendarSetupModal called!');
  
  const existingModal = document.querySelector('.google-calendar-modal');
  if (existingModal) {
    existingModal.remove();
  }

  const modal = document.createElement('div');
  modal.className = 'google-calendar-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
  
  const settings = googleCalendarSettings.load();
  
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-semibold dark:text-white">🗓️ ${t('google.setup.title')}</h2>
        <button id="closeGoogleCalendarModal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">✕</button>
      </div>
      
      <div class="space-y-6">
        <!-- Help Section -->
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h3 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">📋 ${t('google.setup.instructions')}</h3>
          <div class="text-sm text-blue-700 dark:text-blue-300 space-y-2">
            <p><strong>Step 1:</strong> ${t('google.setup.step1')}</p>
            <p><strong>Step 2:</strong> ${t('google.setup.step2')}</p>
            <p><strong>Step 3:</strong> ${t('google.setup.step3')}</p>
            <p><strong>Step 4:</strong> ${t('google.setup.step4')}</p>
            <p><strong>Step 5:</strong> ${t('google.setup.step5')}</p>
            <button id="showDetailedHelpBtn" class="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs">
              📖 ${t('google.setup.detailed_guide')}
            </button>
          </div>
        </div>
        
        <!-- Connection Status -->
        <div id="connectionStatus" class="p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
          <div class="flex items-center space-x-2">
            <span class="text-lg">❌</span>
            <img src="https://www.gstatic.com/images/branding/product/1x/calendar_48dp.png" alt="Google Calendar" style="height:1.2em;vertical-align:middle;margin-right:0.5em;">
            <span class="font-bold mr-1">Google Calendar:</span>
            <span class="font-medium dark:text-white">${t('google.setup.not_connected')}</span>
          </div>
          <div id="userInfo" class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            ${t('google.setup.enter_client_id')}
          </div>
          <div id="lastSyncInfo" class="mt-1 text-xs text-gray-500 dark:text-gray-400">
            ${settings.lastSyncTime ? `${t('google.setup.last_sync')} ${new Date(settings.lastSyncTime).toLocaleString()}` : t('google.setup.never_synced')}
          </div>
        </div>
        
        <!-- Configuration Form -->
        <form id="googleCalendarForm" class="space-y-4" onsubmit="return false;">
          <div>
            <label for="googleClientId" class="block text-sm font-medium mb-1 dark:text-gray-200">
              🆔 ${t('google.setup.client_id_label')}
            </label>
            <input 
              type="text" 
              id="googleClientId"
              name="clientId" 
              value="${settings.clientId}" 
              class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
              placeholder="123456789-abc.apps.googleusercontent.com"
              required
            >
          </div>
          
          <div class="flex space-x-2">
            <button type="button" id="connectBtn" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              🔗 ${t('google.setup.connect_button')}
            </button>
            <button type="button" id="saveSettingsBtn" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              💾 ${t('google.setup.save_settings')}
            </button>
          </div>
        </form>
        
        <!-- Calendar Setup Section (only shown after login) -->
        <div id="calendarSetupSection" style="display: none;" class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <h3 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">🔧 ${t('google.setup.calendar_setup.title')}</h3>
          <p class="text-sm text-yellow-700 dark:text-yellow-300 mb-3">
            ${t('google.setup.calendar_setup.description')}
          </p>
          <button id="setupCalendarsBtn" class="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">
            🔧 ${t('google.setup.calendar_setup.button')}
          </button>
        </div>
        
        <!-- Enhanced Sync Options -->
        <div id="syncOptions" style="display: none;" class="border-t pt-4">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-semibold dark:text-white">⚙️ ${t('google.setup.sync_settings')}</h3>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Basic Sync Options -->
            <div class="space-y-3">
              <h4 class="font-medium dark:text-gray-200">🔄 ${t('google.setup.sync_direction')}</h4>
              
              <div class="flex items-center space-x-2">
                <input type="checkbox" id="autoSync" ${settings.autoSync ? 'checked' : ''} class="rounded">
                <label for="autoSync" class="text-sm dark:text-gray-200">
                  📤 ${t('google.setup.auto_export')}
                </label>
              </div>
              
              <div class="flex items-center space-x-2">
                <input type="checkbox" id="bidirectionalSync" ${settings.bidirectionalSync ? 'checked' : ''} class="rounded">
                <label for="bidirectionalSync" class="text-sm dark:text-gray-200">
                  🔄 ${t('google.setup.bidirectional')}
                </label>
              </div>
            </div>
            
            <!-- Import Settings -->
            <div class="space-y-3">
              <h4 class="font-medium dark:text-gray-200">📥 ${t('google.setup.import_settings')}</h4>
              
              <div>
                <label for="importTimeRange" class="block text-xs dark:text-gray-300 mb-1">${t('google.setup.import_time_range')}</label>
                <select id="importTimeRange" class="text-sm p-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white w-full">
                  <option value="6months" ${settings.importSettings?.importTimeRange === '6months' ? 'selected' : ''}>${t('google.setup.last_6_months')}</option>
                  <option value="1year" ${settings.importSettings?.importTimeRange === '1year' ? 'selected' : ''}>${t('google.setup.last_1_year')}</option>
                  <option value="2years" ${settings.importSettings?.importTimeRange === '2years' ? 'selected' : ''}>${t('google.setup.last_2_years')}</option>
                  <option value="all" ${settings.importSettings?.importTimeRange === 'all' ? 'selected' : ''}>${t('google.setup.all_events')}</option>
                </select>
              </div>
            </div>
          </div>
          
          <!-- Event Types -->
          <div class="mt-4">
            <h4 class="font-medium dark:text-gray-200 mb-2">📋 ${t('google.setup.sync_event_types')}</h4>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
              ${Object.entries(settings.syncTypes || {}).map(([type, enabled]) => `
                <div class="flex items-center space-x-2">
                  <input type="checkbox" id="sync_${type}" data-sync-type="${type}" ${enabled ? 'checked' : ''} class="rounded">
                  <label for="sync_${type}" class="text-sm dark:text-gray-200 capitalize">
                    ${getEventTypeIcon(type)} ${type.replace('_', ' ')}
                  </label>
                </div>
              `).join('')}
            </div>
          </div>
          
          <!-- Sync Actions -->
          <div class="mt-6 space-y-2">
            <div class="flex flex-wrap gap-2">
              <button type="button" id="syncAllEventsBtn" class="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                📤 ${t('google.setup.export_all')}
              </button>
              <button type="button" id="importEventsBtn" class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                📥 ${t('google.setup.import_from_google')}
              </button>
              <button type="button" id="bidirectionalSyncBtn" class="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
                🔄 ${t('google.setup.full_bidirectional')}
              </button>
            </div>
            <button type="button" id="saveSyncSettingsBtn" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mt-2">
              💾 ${t('google.setup.save_sync_settings')}
            </button>
          </div>
          
          <!-- Sync Status -->
          <div id="syncStatus" class="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div class="text-sm dark:text-gray-200">
              <strong>${t('google.setup.sync_status')}</strong> <span id="syncStatusText">${t('google.setup.ready')}</span>
            </div>
          </div>
        </div>
        
        <!-- Sign Out -->
        <div class="border-t pt-4 mt-6">
          <button type="button" id="signOutBtn" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            🚪 ${t('google.setup.sign_out')}
          </button>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);

  modal.querySelector('#closeGoogleCalendarModal').addEventListener('click', () => modal.remove());
  modal.querySelector('#showDetailedHelpBtn').addEventListener('click', () => showDetailedHelp());
  
  initializeGoogleCalendarEventListeners();
  updateConnectionStatus();
} 