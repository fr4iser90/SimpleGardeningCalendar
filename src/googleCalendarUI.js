import { googleCalendar, googleCalendarSettings } from './googleCalendar.js';
import { openDB } from 'idb';

// Show Google Calendar setup modal
export function showGoogleCalendarSetup() {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
  
  const settings = googleCalendarSettings.load();
  
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
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
            <p><strong>Step 4:</strong> Create credentials (API Key + OAuth 2.0 Client ID)</p>
            <p><strong>Step 5:</strong> Add your domain to authorized origins</p>
            <button onclick="showDetailedHelp()" class="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs">
              📖 Show Detailed Guide
            </button>
          </div>
        </div>
        
        <!-- Connection Status -->
        <div id="connectionStatus" class="p-3 rounded-lg ${googleCalendar.isSignedIn ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' : 'bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600'}">
          <div class="flex items-center space-x-2">
            <span class="text-lg">${googleCalendar.isSignedIn ? '✅' : '❌'}</span>
            <span class="font-medium dark:text-white">
              ${googleCalendar.isSignedIn ? 'Connected to Google Calendar' : 'Not Connected'}
            </span>
          </div>
          <div id="userInfo" class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            ${googleCalendar.isSignedIn ? 'Loading user info...' : 'Enter your credentials below to connect'}
          </div>
        </div>
        
        <!-- Configuration Form -->
        <form id="googleCalendarForm" class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1 dark:text-gray-200">
              🔑 Google API Key
              <button type="button" onclick="showApiKeyHelp()" class="ml-1 text-blue-500 hover:text-blue-600">ℹ️</button>
            </label>
            <input 
              type="password" 
              name="apiKey" 
              value="${settings.apiKey}" 
              class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
              placeholder="AIza..."
              required
            >
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1 dark:text-gray-200">
              🆔 OAuth 2.0 Client ID
              <button type="button" onclick="showClientIdHelp()" class="ml-1 text-blue-500 hover:text-blue-600">ℹ️</button>
            </label>
            <input 
              type="text" 
              name="clientId" 
              value="${settings.clientId}" 
              class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
              placeholder="123456789-abc.apps.googleusercontent.com"
              required
            >
          </div>
          
          <div class="flex space-x-2">
            <button type="button" id="testConnectionBtn" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              🔗 Test Connection
            </button>
            <button type="button" id="saveSettingsBtn" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              💾 Save Settings
            </button>
          </div>
        </form>
        
        <!-- Calendar Selection -->
        <div id="calendarSelection" style="display: none;" class="border-t pt-4">
          <h3 class="font-semibold mb-2 dark:text-white">📅 Select Calendar</h3>
          <select id="calendarSelect" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <option value="primary">Primary Calendar</option>
          </select>
        </div>
        
        <!-- Sync Options -->
        <div id="syncOptions" style="display: none;" class="border-t pt-4">
          <h3 class="font-semibold mb-3 dark:text-white">⚙️ Sync Settings</h3>
          
          <div class="space-y-3">
            <div class="flex items-center space-x-2">
              <input type="checkbox" id="autoSync" ${settings.autoSync ? 'checked' : ''} class="rounded">
              <label for="autoSync" class="text-sm dark:text-gray-200">
                🔄 Automatically sync new events to Google Calendar
              </label>
            </div>
            
            <div class="ml-6 space-y-2">
              <div class="text-sm font-medium dark:text-gray-200 mb-2">Sync these event types:</div>
              ${Object.entries(settings.syncTypes).map(([type, enabled]) => `
                <div class="flex items-center space-x-2">
                  <input type="checkbox" id="sync_${type}" ${enabled ? 'checked' : ''} class="rounded">
                  <label for="sync_${type}" class="text-sm dark:text-gray-200 capitalize">
                    ${getTypeEmoji(type)} ${type}
                  </label>
                </div>
              `).join('')}
            </div>
          </div>
          
          <div class="mt-4 space-x-2">
            <button type="button" id="syncAllEventsBtn" class="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              📤 Sync All Existing Events
            </button>
            <button type="button" id="saveSyncSettingsBtn" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              💾 Save Sync Settings
            </button>
          </div>
        </div>
        
        <!-- Sign Out -->
        <div id="signOutSection" style="display: none;" class="border-t pt-4">
          <button type="button" id="signOutBtn" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            🚪 Sign Out & Disconnect
          </button>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Initialize event listeners
  initializeGoogleCalendarEventListeners();
  
  // Update UI based on current state
  updateConnectionStatus();
}

function initializeGoogleCalendarEventListeners() {
  const form = document.getElementById('googleCalendarForm');
  const testConnectionBtn = document.getElementById('testConnectionBtn');
  const saveSettingsBtn = document.getElementById('saveSettingsBtn');
  const syncAllEventsBtn = document.getElementById('syncAllEventsBtn');
  const saveSyncSettingsBtn = document.getElementById('saveSyncSettingsBtn');
  const signOutBtn = document.getElementById('signOutBtn');
  
  // Test connection
  testConnectionBtn?.addEventListener('click', async () => {
    const formData = new FormData(form);
    const apiKey = formData.get('apiKey');
    const clientId = formData.get('clientId');
    
    if (!apiKey || !clientId) {
      alert('Please enter both API Key and Client ID');
      return;
    }
    
    testConnectionBtn.disabled = true;
    testConnectionBtn.textContent = '🔄 Testing...';
    
    try {
      await googleCalendar.initialize(clientId, apiKey);
      await googleCalendar.signIn();
      
      // Save settings on successful connection
      const settings = googleCalendarSettings.load();
      settings.apiKey = apiKey;
      settings.clientId = clientId;
      googleCalendarSettings.save(settings);
      
      await updateConnectionStatus();
      await loadCalendars();
      
      alert('✅ Successfully connected to Google Calendar!');
      
    } catch (error) {
      console.error('Connection test failed:', error);
      alert(`❌ Connection failed: ${error.message}`);
    } finally {
      testConnectionBtn.disabled = false;
      testConnectionBtn.textContent = '🔗 Test Connection';
    }
  });
  
  // Save settings
  saveSettingsBtn?.addEventListener('click', () => {
    const formData = new FormData(form);
    const settings = googleCalendarSettings.load();
    settings.apiKey = formData.get('apiKey');
    settings.clientId = formData.get('clientId');
    googleCalendarSettings.save(settings);
    alert('💾 Settings saved!');
  });
  
  // Sync all events
  syncAllEventsBtn?.addEventListener('click', async () => {
    if (!googleCalendar.isSignedIn) {
      alert('Please connect to Google Calendar first');
      return;
    }
    
    syncAllEventsBtn.disabled = true;
    syncAllEventsBtn.textContent = '🔄 Syncing...';
    
    try {
      await syncAllEventsToGoogle();
      alert('✅ All events synced successfully!');
    } catch (error) {
      console.error('Sync failed:', error);
      alert(`❌ Sync failed: ${error.message}`);
    } finally {
      syncAllEventsBtn.disabled = false;
      syncAllEventsBtn.textContent = '📤 Sync All Existing Events';
    }
  });
  
  // Save sync settings
  saveSyncSettingsBtn?.addEventListener('click', () => {
    const settings = googleCalendarSettings.load();
    
    settings.autoSync = document.getElementById('autoSync').checked;
    settings.selectedCalendarId = document.getElementById('calendarSelect').value;
    
    // Update sync types
    Object.keys(settings.syncTypes).forEach(type => {
      const checkbox = document.getElementById(`sync_${type}`);
      if (checkbox) {
        settings.syncTypes[type] = checkbox.checked;
      }
    });
    
    googleCalendarSettings.save(settings);
    googleCalendar.setCalendar(settings.selectedCalendarId);
    
    alert('💾 Sync settings saved!');
  });
  
  // Sign out
  signOutBtn?.addEventListener('click', async () => {
    if (confirm('Are you sure you want to disconnect from Google Calendar?')) {
      await googleCalendar.signOut();
      googleCalendarSettings.clear();
      updateConnectionStatus();
      alert('🚪 Disconnected from Google Calendar');
    }
  });
  
  // Help functions
  window.showDetailedHelp = () => showDetailedSetupGuide();
  window.showApiKeyHelp = () => showApiKeyHelp();
  window.showClientIdHelp = () => showClientIdHelp();
}

async function updateConnectionStatus() {
  const statusDiv = document.getElementById('connectionStatus');
  const userInfoDiv = document.getElementById('userInfo');
  const calendarSelection = document.getElementById('calendarSelection');
  const syncOptions = document.getElementById('syncOptions');
  const signOutSection = document.getElementById('signOutSection');
  
  if (googleCalendar.isSignedIn) {
    statusDiv.className = 'p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800';
    statusDiv.querySelector('span:first-child').textContent = '✅';
    statusDiv.querySelector('span:last-child').textContent = 'Connected to Google Calendar';
    
    // Get user info
    try {
      const userInfo = await googleCalendar.getUserInfo();
      if (userInfo) {
        userInfoDiv.innerHTML = `
          <div class="flex items-center space-x-2">
            <img src="${userInfo.imageUrl}" alt="Profile" class="w-6 h-6 rounded-full">
            <span>${userInfo.name} (${userInfo.email})</span>
          </div>
        `;
      }
    } catch (error) {
      userInfoDiv.textContent = 'Connected (unable to load user info)';
    }
    
    calendarSelection.style.display = 'block';
    syncOptions.style.display = 'block';
    signOutSection.style.display = 'block';
    
  } else {
    statusDiv.className = 'p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600';
    statusDiv.querySelector('span:first-child').textContent = '❌';
    statusDiv.querySelector('span:last-child').textContent = 'Not Connected';
    userInfoDiv.textContent = 'Enter your credentials below to connect';
    
    calendarSelection.style.display = 'none';
    syncOptions.style.display = 'none';
    signOutSection.style.display = 'none';
  }
}

async function loadCalendars() {
  if (!googleCalendar.isSignedIn) return;
  
  try {
    const calendars = await googleCalendar.getCalendars();
    const select = document.getElementById('calendarSelect');
    const settings = googleCalendarSettings.load();
    
    select.innerHTML = '';
    
    calendars.forEach(calendar => {
      const option = document.createElement('option');
      option.value = calendar.id;
      option.textContent = calendar.summary;
      if (calendar.id === settings.selectedCalendarId) {
        option.selected = true;
      }
      select.appendChild(option);
    });
    
  } catch (error) {
    console.error('Failed to load calendars:', error);
  }
}

// Sync all existing events to Google Calendar
async function syncAllEventsToGoogle() {
  const db = await openDB('gardening-calendar');
  const events = await db.getAll('events');
  const settings = googleCalendarSettings.load();
  
  // Filter events based on sync settings
  const eventsToSync = events.filter(event => settings.syncTypes[event.type]);
  
  if (eventsToSync.length === 0) {
    throw new Error('No events to sync based on your settings');
  }
  
  const { results, errors } = await googleCalendar.createEvents(eventsToSync);
  
  if (errors.length > 0) {
    console.warn('Some events failed to sync:', errors);
  }
  
  return { synced: results.length, failed: errors.length };
}

// Auto-sync new event to Google Calendar
export async function autoSyncEvent(eventData) {
  const settings = googleCalendarSettings.load();
  
  if (!settings.autoSync || !googleCalendar.isSignedIn) {
    return false;
  }
  
  if (!settings.syncTypes[eventData.type]) {
    return false;
  }
  
  try {
    await googleCalendar.createEvent(eventData);
    return true;
  } catch (error) {
    console.error('Auto-sync failed:', error);
    return false;
  }
}

// Helper functions for the help system
function showDetailedSetupGuide() {
  const helpModal = document.createElement('div');
  helpModal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
  
  helpModal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold dark:text-white">📖 Google Calendar Setup Guide</h2>
        <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onclick="this.closest('.fixed').remove()">✕</button>
      </div>
      
      <div class="space-y-6 text-sm">
        <div class="border-l-4 border-blue-500 pl-4">
          <h3 class="font-semibold text-blue-600 dark:text-blue-400">Step 1: Google Cloud Console</h3>
          <ol class="list-decimal list-inside space-y-1 mt-2 dark:text-gray-300">
            <li>Go to <a href="https://console.cloud.google.com/" target="_blank" class="text-blue-600 underline">Google Cloud Console</a></li>
            <li>Sign in with your Google account</li>
            <li>Create a new project or select an existing one</li>
            <li>Note your project name/ID for reference</li>
          </ol>
        </div>
        
        <div class="border-l-4 border-green-500 pl-4">
          <h3 class="font-semibold text-green-600 dark:text-green-400">Step 2: Enable Calendar API</h3>
          <ol class="list-decimal list-inside space-y-1 mt-2 dark:text-gray-300">
            <li>In the Cloud Console, go to "APIs & Services" → "Library"</li>
            <li>Search for "Google Calendar API"</li>
            <li>Click on it and press "Enable"</li>
            <li>Wait for the API to be enabled</li>
          </ol>
        </div>
        
        <div class="border-l-4 border-purple-500 pl-4">
          <h3 class="font-semibold text-purple-600 dark:text-purple-400">Step 3: Create API Key</h3>
          <ol class="list-decimal list-inside space-y-1 mt-2 dark:text-gray-300">
            <li>Go to "APIs & Services" → "Credentials"</li>
            <li>Click "Create Credentials" → "API Key"</li>
            <li>Copy the API key (starts with "AIza...")</li>
            <li>Optionally restrict the key to Calendar API only</li>
          </ol>
        </div>
        
        <div class="border-l-4 border-orange-500 pl-4">
          <h3 class="font-semibold text-orange-600 dark:text-orange-400">Step 4: Create OAuth Client ID</h3>
          <ol class="list-decimal list-inside space-y-1 mt-2 dark:text-gray-300">
            <li>Still in "Credentials", click "Create Credentials" → "OAuth client ID"</li>
            <li>Choose "Web application" as application type</li>
            <li>Add your website URL to "Authorized JavaScript origins"</li>
            <li>For local development, add: <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">http://localhost:5173</code></li>
            <li>Copy the Client ID (ends with ".apps.googleusercontent.com")</li>
          </ol>
        </div>
        
        <div class="border-l-4 border-red-500 pl-4">
          <h3 class="font-semibold text-red-600 dark:text-red-400">Step 5: Configure OAuth Consent</h3>
          <ol class="list-decimal list-inside space-y-1 mt-2 dark:text-gray-300">
            <li>Go to "APIs & Services" → "OAuth consent screen"</li>
            <li>Choose "External" user type (unless you have G Suite)</li>
            <li>Fill in required fields (app name, user support email)</li>
            <li>Add your email to test users if in testing mode</li>
            <li>Add scope: <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">https://www.googleapis.com/auth/calendar.events</code></li>
          </ol>
        </div>
        
        <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded p-4">
          <h3 class="font-semibold text-yellow-800 dark:text-yellow-200">⚠️ Important Notes</h3>
          <ul class="list-disc list-inside space-y-1 mt-2 text-yellow-700 dark:text-yellow-300">
            <li>Keep your API key and Client ID secure</li>
            <li>For production, restrict API key to your domain</li>
            <li>OAuth consent screen may need Google verification for public use</li>
            <li>Test with your own Google account first</li>
          </ul>
        </div>
        
        <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded p-4">
          <h3 class="font-semibold text-green-800 dark:text-green-200">✅ Testing Your Setup</h3>
          <ol class="list-decimal list-inside space-y-1 mt-2 text-green-700 dark:text-green-300">
            <li>Enter your API Key and Client ID in the form above</li>
            <li>Click "Test Connection"</li>
            <li>You should see a Google sign-in popup</li>
            <li>Grant calendar permissions</li>
            <li>You should see "Connected" status</li>
          </ol>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(helpModal);
}

function showApiKeyHelp() {
  alert(`🔑 API Key Help:

The API Key is used to authenticate your app with Google's servers.

Where to find it:
1. Google Cloud Console → APIs & Services → Credentials
2. Look for "API Keys" section
3. It starts with "AIza..." and is about 39 characters long

Security:
• Keep it secure, don't share publicly
• For production, restrict it to your domain
• It's used for read-only operations`);
}

function showClientIdHelp() {
  alert(`🆔 OAuth Client ID Help:

The Client ID is used for user authentication and authorization.

Where to find it:
1. Google Cloud Console → APIs & Services → Credentials  
2. Look for "OAuth 2.0 Client IDs" section
3. It ends with ".apps.googleusercontent.com"

Setup:
• Must be configured as "Web application"
• Add your domain to "Authorized JavaScript origins"
• For local development: http://localhost:5173
• Used to request calendar permissions from users`);
}

function getTypeEmoji(type) {
  const emojis = {
    planting: '🌱',
    watering: '💧',
    fertilizing: '🌿',
    harvesting: '🌾',
    maintenance: '🔧'
  };
  return emojis[type] || '📅';
}