import { attemptSignIn, signOut, getUserInfo, getAuthState } from '../../services/GoogleCalendar/GoogleCalendarApi.js';
import { performBidirectionalSync, exportLocalEventsToGoogle, importGoogleEvents } from '../../services/GoogleCalendar/GoogleCalendarSync.js';
import { googleCalendarSettings } from '../../services/GoogleCalendar/GoogleCalendarSettings.js';
import { getEventTypeIcon } from '../../utils/eventUtils.js';
import { showNotification } from '../../utils/notifications.js';
import { showButtonSpinner, hideButtonSpinner, showLoadingSpinner, hideLoadingSpinner } from '../ui/LoadingSpinner.js';
import { renderCalendarWizardHTML, setupCalendarWizardEventListeners } from './GoogleCalendarWizard.js';
import { showDetailedHelp } from './GoogleDetailedHelp.js';
import { t } from '../../core/i18n/index.js';

/**
 * Google Calendar Setup Modal
 * Handles the UI and user interactions for Google Calendar settings.
 */

async function performSyncOperation(operation, button, originalText) {
  const spinnerId = showButtonSpinner(button, originalText, '⏳ Processing...');
  const syncStatusText = document.getElementById('syncStatusText');
  syncStatusText.textContent = `Running ${operation} sync...`;

  try {
    const { isSignedIn } = getAuthState();
    if (!isSignedIn) {
      throw new Error('Not signed in to Google Calendar');
    }

    let result;
    switch (operation) {
      case 'export':
        result = await exportLocalEventsToGoogle();
        showNotification(`Export complete: ${result.synced} events exported.`, 'success');
        break;
      case 'import':
        result = await importGoogleEvents();
        showNotification(`Import complete: ${result.imported} new, ${result.updated} updated.`, 'success');
        break;
      case 'bidirectional':
        result = await performBidirectionalSync();
        showNotification(`Bidirectional sync complete: ${result.exported} exported, ${result.imported} imported, ${result.updated} updated.`, 'success');
        break;
    }
    
    // Update last sync time
    const settings = googleCalendarSettings.load();
    settings.lastSyncTime = new Date().toISOString();
    googleCalendarSettings.save(settings);
    document.getElementById('lastSyncInfo').textContent = `Last sync: ${new Date(settings.lastSyncTime).toLocaleString()}`;
    syncStatusText.textContent = 'Sync successful!';

  } catch (error) {
    console.error(`Sync failed:`, error);
    showNotification(`Sync failed: ${error.message}`, 'error');
    syncStatusText.textContent = `Sync failed: ${error.message}`;
  } finally {
    hideButtonSpinner(button, spinnerId);
  }
}

export async function updateConnectionStatus(showWizard = false) {
  const statusDiv = document.getElementById('connectionStatus');
  const userInfoDiv = document.getElementById('userInfo');
  const syncOptionsDiv = document.getElementById('syncOptions');
  const calendarWizard = document.getElementById('calendarWizard');
  
  if (!statusDiv || !userInfoDiv || !syncOptionsDiv || !calendarWizard) return;
  
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
      
      // SMART AUTO-DETECTION: If no setup exists, check for existing garden calendars
      let hasCalendarSetup = settings.organizationType || settings.selectedCalendarId;
      
      if (!hasCalendarSetup && !showWizard) {
        console.log('🔍 No setup found - checking for existing garden calendars...');
        try {
          const { detectGardenCalendars } = await import('../../services/GoogleCalendar/GoogleCalendarApi.js');
          const { gardenCalendars, hasExistingGardenCalendars } = await detectGardenCalendars();
          
          if (hasExistingGardenCalendars && gardenCalendars.length > 0) {
            // Auto-select the first garden calendar found
            const firstCalendar = gardenCalendars[0];
            settings.selectedCalendarId = firstCalendar.id;
            settings.organizationType = 'existing';
            settings.createdCalendars = gardenCalendars.map(cal => ({
              id: cal.id,
              name: cal.summary
            }));
            googleCalendarSettings.save(settings);
            hasCalendarSetup = true;
            
            console.log('✅ Auto-detected and configured existing garden calendars:', {
              selectedCalendar: firstCalendar.summary,
              totalCalendars: gardenCalendars.length
            });
            
            showNotification(`Auto-detected ${gardenCalendars.length} garden calendar(s). Using "${firstCalendar.summary}" as primary.`, 'success');
          }
        } catch (error) {
          console.error('Failed to auto-detect calendars:', error);
        }
      }
      
      const shouldShowWizard = showWizard || !hasCalendarSetup;
      
      console.log('📋 Calendar Setup Status:', {
        organizationType: settings.organizationType,
        selectedCalendarId: settings.selectedCalendarId,
        hasCalendarSetup,
        showWizard,
        shouldShowWizard
      });
      
      if (shouldShowWizard) {
        console.log('🔧 Showing calendar wizard');
        calendarWizard.style.display = 'block';
        syncOptionsDiv.style.display = 'none';
      } else {
        console.log('⚙️ Showing sync options');
        calendarWizard.style.display = 'none';
        syncOptionsDiv.style.display = 'block';
      }
      
    } else {
      statusDiv.className = 'p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600';
      statusDiv.querySelector('.flex').innerHTML = `
        <span class="text-lg">❌</span>
        <img src="https://www.gstatic.com/images/branding/product/1x/calendar_48dp.png" alt="Google Calendar" style="height:1.2em;vertical-align:middle;margin-right:0.5em;">
        <span class="font-bold mr-1">Google Calendar:</span>
        <span class="font-medium dark:text-white">${t('google.setup.not_connected')}</span>
      `;
      userInfoDiv.textContent = 'Enter your Client ID below to connect';
      syncOptionsDiv.style.display = 'none';
      calendarWizard.style.display = 'none';
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

  // Change calendar setup
  const changeSetupBtn = document.getElementById('changeSetupBtn');
  changeSetupBtn?.addEventListener('click', () => {
    if (confirm('Are you sure you want to change your calendar setup? This will reset your current organization.')) {
      const settings = googleCalendarSettings.load();
      delete settings.organizationType;
      delete settings.createdCalendars;
      delete settings.selectedCalendarId;
      googleCalendarSettings.save(settings);
      updateConnectionStatus(true); // Pass showWizard=true to explicitly show the wizard
      showNotification('Setup has been reset. Please configure your calendars again.', 'info');
    }
  });

  // Listener for status changes from the API module
  document.addEventListener('googleCalendarStatusChanged', (e) => {
      console.log('Event "googleCalendarStatusChanged" received in UI, updating status.');
      updateConnectionStatus();
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
        
        ${renderCalendarWizardHTML(settings)}
        
        <!-- Enhanced Sync Options -->
        <div id="syncOptions" style="display: none;" class="border-t pt-4">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-semibold dark:text-white">⚙️ ${t('google.setup.sync_settings')}</h3>
            <button id="changeSetupBtn" class="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              ${t('google.setup.change_setup')}
            </button>
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

  setupCalendarWizardEventListeners();
} 