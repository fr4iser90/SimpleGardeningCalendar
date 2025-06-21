import { openDB } from 'idb';
import { attemptSignIn, signOut, fetchCalendarList, getUserInfo } from './GoogleCalendarApi.js';
import { performBidirectionalSync, createEvents, importEvents } from './GoogleCalendarSync.js';
import { googleCalendarSettings } from './GoogleCalendarSettings.js';

/**
 * Google Calendar UI Integration
 * Handles all UI components and user interactions for Google Calendar
 */

// Show Google Calendar setup modal with enhanced sync options
export function showGoogleCalendarSetup() {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
  
  const settings = googleCalendarSettings.load();
  
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-semibold dark:text-white">🗓️ Google Calendar Integration</h2>
        <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onclick="this.closest('.fixed').remove()">✕</button>
      </div>
      
      <div class="space-y-6">
        <!-- Help Section -->
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h3 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">📋 Setup Instructions</h3>
          <div class="text-sm text-blue-700 dark:text-blue-300 space-y-2">
            <p><strong>Step 1:</strong> Go to <a href="https://console.cloud.google.com/" target="_blank" class="underline hover:text-blue-600">Google Cloud Console</a></p>
            <p><strong>Step 2:</strong> Create a new project or select existing one</p>
            <p><strong>Step 3:</strong> Enable the "Google Calendar API"</p>
            <p><strong>Step 4:</strong> Create OAuth 2.0 Client ID credentials</p>
            <p><strong>Step 5:</strong> Add your domain to authorized origins</p>
            <button onclick="showDetailedHelp()" class="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs">
              📖 Show Detailed Guide
            </button>
          </div>
        </div>
        
        <!-- Connection Status -->
        <div id="connectionStatus" class="p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
          <div class="flex items-center space-x-2">
            <span class="text-lg">❌</span>
            <span class="font-medium dark:text-white">Not Connected</span>
          </div>
          <div id="userInfo" class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Enter your Client ID below to connect
          </div>
          <div id="lastSyncInfo" class="mt-1 text-xs text-gray-500 dark:text-gray-400">
            ${settings.lastSyncTime ? `Last sync: ${new Date(settings.lastSyncTime).toLocaleString()}` : 'Never synced'}
          </div>
        </div>
        
        <!-- Configuration Form -->
        <form id="googleCalendarForm" class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1 dark:text-gray-200">
              🆔 Google Client ID
              <button type="button" onclick="showClientIdHelp()" class="ml-1 text-blue-500 hover:text-blue-600">ℹ️</button>
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
            <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              💡 Only Client ID needed - no API Key required!
            </div>
          </div>
          
          <div class="flex space-x-2">
            <button type="button" id="connectBtn" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              🔗 Connect to Google Calendar
            </button>
            <button type="button" id="saveSettingsBtn" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              💾 Save Settings
            </button>
          </div>
        </form>
        
        <!-- Enhanced Sync Options -->
        <div id="syncOptions" style="display: none;" class="border-t pt-4">
          <h3 class="font-semibold mb-3 dark:text-white">⚙️ Sync Settings</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Basic Sync Options -->
            <div class="space-y-3">
              <h4 class="font-medium dark:text-gray-200">🔄 Sync Direction</h4>
              
              <div class="flex items-center space-x-2">
                <input type="checkbox" id="autoSync" ${settings.autoSync ? 'checked' : ''} class="rounded">
                <label for="autoSync" class="text-sm dark:text-gray-200">
                  📤 Auto-export new events to Google Calendar
                </label>
              </div>
              
              <div class="flex items-center space-x-2">
                <input type="checkbox" id="bidirectionalSync" ${settings.bidirectionalSync ? 'checked' : ''} class="rounded">
                <label for="bidirectionalSync" class="text-sm dark:text-gray-200">
                  🔄 Bidirectional sync (import changes from Google)
                </label>
              </div>
            </div>
            
            <!-- Import Settings -->
            <div class="space-y-3">
              <h4 class="font-medium dark:text-gray-200">📥 Import Settings</h4>
              
              <div>
                <label class="block text-xs dark:text-gray-300 mb-1">Import time range:</label>
                <select id="importTimeRange" class="text-sm p-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white w-full">
                  <option value="6months" ${settings.importSettings?.importTimeRange === '6months' ? 'selected' : ''}>Last 6 months</option>
                  <option value="1year" ${settings.importSettings?.importTimeRange === '1year' ? 'selected' : ''}>Last 1 year</option>
                  <option value="2years" ${settings.importSettings?.importTimeRange === '2years' ? 'selected' : ''}>Last 2 years</option>
                  <option value="all" ${settings.importSettings?.importTimeRange === 'all' ? 'selected' : ''}>All events</option>
                </select>
              </div>
            </div>
          </div>
          
          <!-- Event Types -->
          <div class="mt-4">
            <h4 class="font-medium dark:text-gray-200 mb-2">📋 Sync these event types:</h4>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
              ${Object.entries(settings.syncTypes || {}).map(([type, enabled]) => `
                <div class="flex items-center space-x-2">
                  <input type="checkbox" id="sync_${type}" ${enabled ? 'checked' : ''} class="rounded">
                  <label for="sync_${type}" class="text-sm dark:text-gray-200 capitalize">
                    ${getTypeEmoji(type)} ${type}
                  </label>
                </div>
              `).join('')}
            </div>
          </div>
          
          <!-- Sync Actions -->
          <div class="mt-6 space-y-2">
            <div class="flex flex-wrap gap-2">
              <button type="button" id="syncAllEventsBtn" class="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                📤 Export All Local Events
              </button>
              <button type="button" id="importEventsBtn" class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                📥 Import from Google Calendar
              </button>
              <button type="button" id="bidirectionalSyncBtn" class="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
                🔄 Full Bidirectional Sync
              </button>
            </div>
            <button type="button" id="saveSyncSettingsBtn" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              💾 Save Sync Settings
            </button>
          </div>
          
          <!-- Sync Status -->
          <div id="syncStatus" class="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div class="text-sm dark:text-gray-200">
              <strong>Sync Status:</strong> <span id="syncStatusText">Ready</span>
            </div>
          </div>
        </div>
        
        <!-- Sign Out -->
        <div class="border-t pt-4">
          <button type="button" id="signOutBtn" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            🚪 Sign Out
          </button>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  initializeGoogleCalendarEventListeners();
  updateConnectionStatus();
}

function initializeGoogleCalendarEventListeners() {
  const form = document.getElementById('googleCalendarForm');
  const connectBtn = document.getElementById('connectBtn');
  const clientIdInput = document.getElementById('googleClientId');
  const saveSettingsBtn = document.getElementById('saveSettingsBtn');
  const syncAllEventsBtn = document.getElementById('syncAllEventsBtn');
  const importEventsBtn = document.getElementById('importEventsBtn');
  const bidirectionalSyncBtn = document.getElementById('bidirectionalSyncBtn');
  const saveSyncSettingsBtn = document.getElementById('saveSyncSettingsBtn');
  const signOutBtn = document.getElementById('signOutBtn');
  
  // Connect button
  if (connectBtn) {
    connectBtn.addEventListener('click', async () => {
      connectBtn.disabled = true;
      connectBtn.textContent = 'Connecting...';
      try {
        await attemptSignIn(true);
      } catch (e) {
        connectBtn.disabled = false;
        connectBtn.textContent = '🔗 Connect to Google Calendar';
      }
    });
  }
  
  // Save settings button
  if (saveSettingsBtn) {
    saveSettingsBtn.addEventListener('click', () => {
      const settings = googleCalendarSettings.load();
      settings.clientId = clientIdInput.value;
      googleCalendarSettings.save(settings);
      showNotification('Settings saved successfully!', 'success');
    });
  }
  
  // Sync buttons
  if (syncAllEventsBtn) {
    syncAllEventsBtn.addEventListener('click', () => performSyncOperation('export', syncAllEventsBtn, '📤 Export All Local Events'));
  }
  
  if (importEventsBtn) {
    importEventsBtn.addEventListener('click', () => performSyncOperation('import', importEventsBtn, '📥 Import from Google Calendar'));
  }
  
  if (bidirectionalSyncBtn) {
    bidirectionalSyncBtn.addEventListener('click', () => performSyncOperation('bidirectional', bidirectionalSyncBtn, '🔄 Full Bidirectional Sync'));
  }
  
  // Save sync settings
  if (saveSyncSettingsBtn) {
    saveSyncSettingsBtn.addEventListener('click', () => {
      const settings = googleCalendarSettings.load();
      
      // Get sync settings from form
      settings.autoSync = document.getElementById('autoSync').checked;
      settings.bidirectionalSync = document.getElementById('bidirectionalSync').checked;
      settings.importSettings = {
        importTimeRange: document.getElementById('importTimeRange').value
      };
      
      // Get sync types
      settings.syncTypes = {};
      document.querySelectorAll('input[id^="sync_"]').forEach(checkbox => {
        const type = checkbox.id.replace('sync_', '');
        settings.syncTypes[type] = checkbox.checked;
      });
      
      googleCalendarSettings.save(settings);
      showNotification('Sync settings saved!', 'success');
    });
  }
  
  // Sign out
  if (signOutBtn) {
    signOutBtn.addEventListener('click', async () => {
      try {
        await signOut();
        updateConnectionStatus();
        showNotification('Signed out successfully', 'success');
      } catch (error) {
        showNotification('Sign out failed: ' + error.message, 'error');
      }
    });
  }
}

async function performSyncOperation(operation, button, originalText) {
  button.disabled = true;
  button.textContent = '⏳ Processing...';
  
  try {
    let result;
    switch (operation) {
      case 'export':
        result = await syncAllEventsToGoogle();
        break;
      case 'import':
        result = await importEventsFromGoogle();
        break;
      case 'bidirectional':
        result = await performBidirectionalSync();
        break;
    }
    
    showNotification(`Sync completed: ${JSON.stringify(result)}`, 'success');
  } catch (error) {
    showNotification(`Sync failed: ${error.message}`, 'error');
  } finally {
    button.disabled = false;
    button.textContent = originalText;
  }
}

async function updateConnectionStatus() {
  const statusDiv = document.getElementById('connectionStatus');
  const userInfoDiv = document.getElementById('userInfo');
  
  if (!statusDiv || !userInfoDiv) return;
  
  try {
    const { isSignedIn } = await import('./GoogleCalendarApi.js').then(m => m.getAuthState());
    
    if (isSignedIn) {
      statusDiv.className = 'p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800';
      statusDiv.innerHTML = `
        <div class="flex items-center space-x-2">
          <span class="text-lg">✅</span>
          <span class="font-medium dark:text-white">Connected to Google Calendar</span>
        </div>
        <div id="userInfo" class="mt-2 text-sm text-gray-600 dark:text-gray-400">Loading user info...</div>
      `;
      
      // Load user info
      try {
        const userInfo = await getUserInfo();
        userInfoDiv.textContent = `Connected as: ${userInfo.email}`;
      } catch (error) {
        userInfoDiv.textContent = 'Connected (user info unavailable)';
      }
      
      // Show sync options
      document.getElementById('syncOptions').style.display = 'block';
    } else {
      statusDiv.className = 'p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600';
      statusDiv.innerHTML = `
        <div class="flex items-center space-x-2">
          <span class="text-lg">❌</span>
          <span class="font-medium dark:text-white">Not Connected</span>
        </div>
        <div id="userInfo" class="mt-2 text-sm text-gray-600 dark:text-gray-400">Enter your Client ID below to connect</div>
      `;
      
      // Hide sync options
      document.getElementById('syncOptions').style.display = 'none';
    }
  } catch (error) {
    console.error('Failed to update connection status:', error);
  }
}

// Export all existing events to Google Calendar
export async function syncAllEventsToGoogle() {
  const { isSignedIn } = await import('./GoogleCalendarApi.js').then(m => m.getAuthState());
  if (!isSignedIn) {
    throw new Error('Not signed in to Google Calendar');
  }
  
  return await exportLocalEventsToGoogle();
}

// Import events from Google Calendar
export async function importEventsFromGoogle() {
  const { isSignedIn } = await import('./GoogleCalendarApi.js').then(m => m.getAuthState());
  if (!isSignedIn) {
    throw new Error('Not signed in to Google Calendar');
  }
  
  return await importGoogleEvents();
}

// Auto-sync event when created locally
export async function autoSyncEvent(eventData) {
  const settings = googleCalendarSettings.load();
  if (!settings.autoSync) return;
  
  try {
    const { isSignedIn } = await import('./GoogleCalendarApi.js').then(m => m.getAuthState());
    if (!isSignedIn) return;
    
    await createEvents([eventData]);
    console.log('✅ Event auto-synced to Google Calendar');
  } catch (error) {
    console.error('Auto-sync failed:', error);
  }
}

// Helper function to get emoji for event type
function getTypeEmoji(type) {
  const emojis = {
    planting: '🌱',
    watering: '💧',
    fertilizing: '🌿',
    harvesting: '🍅',
    maintenance: '🔧',
    pruning: '✂️',
    transplanting: '🔄',
    pest_control: '🐛',
    default: '📅'
  };
  return emojis[type] || emojis.default;
}

// Helper function to show notifications
function showNotification(message, type = 'info') {
  // Simple notification implementation
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 p-4 rounded-lg text-white z-50 ${
    type === 'success' ? 'bg-green-600' : 
    type === 'error' ? 'bg-red-600' : 'bg-blue-600'
  }`;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Initialize Google Calendar modal
export function initGoogleCalendarModal() {
  // Auto-load and reconnect if client ID is saved
  autoLoadAndReconnect();
}

async function autoLoadAndReconnect() {
  const settings = googleCalendarSettings.load();
  
  if (settings.clientId) {
    console.log('💡 Found saved Client ID - attempting auto-reconnection...');
    
    try {
      await attemptSignIn(false); // Non-interactive sign-in
      console.log('✅ Auto-reconnection successful');
    } catch (error) {
      console.log('⚠️ Auto-reconnection failed:', error.message);
      
      // Show reconnection prompt
      const userInfoDiv = document.getElementById('userInfo');
      if (userInfoDiv) {
        setTimeout(() => {
          userInfoDiv.innerHTML = `
            <div class="text-blue-600 dark:text-blue-400 font-medium">
              ✨ Saved Client ID found! Click "🔗 Connect to Google Calendar" to reconnect.
            </div>
          `;
        }, 100);
      }
    }
  } else {
    console.log('💡 No saved Client ID found - user needs to enter one');
  }
} 