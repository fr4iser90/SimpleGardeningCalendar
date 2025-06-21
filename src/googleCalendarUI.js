import { googleCalendar, googleCalendarSettings } from './googleCalendar.js';
import { openDB } from 'idb';

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
        <div id="connectionStatus" class="p-3 rounded-lg ${googleCalendar.isSignedIn ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' : 'bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600'}">
          <div class="flex items-center space-x-2">
            <span class="text-lg">${googleCalendar.isSignedIn ? '✅' : '❌'}</span>
            <span class="font-medium dark:text-white">
              ${googleCalendar.isSignedIn ? 'Connected to Google Calendar' : 'Not Connected'}
            </span>
          </div>
          <div id="userInfo" class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            ${googleCalendar.isSignedIn ? 'Loading user info...' : 'Enter your Client ID below to connect'}
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
        
        <!-- Calendar Selection -->
        <div id="calendarSelection" style="display: none;" class="border-t pt-4">
          <h3 class="font-semibold mb-2 dark:text-white">📅 Select Calendar</h3>
          <select id="calendarSelect" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <option value="primary">Primary Calendar</option>
          </select>
        </div>
        
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
              
              <div class="ml-6">
                <label class="block text-xs dark:text-gray-300 mb-1">Sync frequency:</label>
                <select id="syncInterval" class="text-sm p-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <option value="manual" ${settings.syncInterval === 'manual' ? 'selected' : ''}>Manual only</option>
                  <option value="hourly" ${settings.syncInterval === 'hourly' ? 'selected' : ''}>Every hour</option>
                  <option value="daily" ${settings.syncInterval === 'daily' ? 'selected' : ''}>Daily</option>
                </select>
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
              
              <div>
                <label class="block text-xs dark:text-gray-300 mb-1">Conflict resolution:</label>
                <select id="conflictResolution" class="text-sm p-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white w-full">
                  <option value="newer" ${settings.importSettings?.conflictResolution === 'newer' ? 'selected' : ''}>Use newer version</option>
                  <option value="local" ${settings.importSettings?.conflictResolution === 'local' ? 'selected' : ''}>Keep local version</option>
                  <option value="google" ${settings.importSettings?.conflictResolution === 'google' ? 'selected' : ''}>Use Google version</option>
                </select>
              </div>
            </div>
          </div>
          
          <!-- Event Types -->
          <div class="mt-4">
            <h4 class="font-medium dark:text-gray-200 mb-2">📋 Sync these event types:</h4>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
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
            <div id="syncProgress" class="mt-2 text-xs text-gray-500 dark:text-gray-400"></div>
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
  
  // Initialize event listeners with FIXED pattern
  initializeGoogleCalendarEventListeners();
  
  // Update UI based on current state
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
  
  // FIXED: Use EXACT shift planner connection pattern
  console.log('🔧 Setting up Google Calendar with EXACT shift planner pattern...');
  
  // Initialize Google Calendar
  googleCalendar.initialize('temp-client-id').then(() => {
    console.log('🔧 Google Calendar initialized, setting up connection...');
    
    // Use the EXACT shift planner setupGoogleCalendarConnection function
    googleCalendar.setupGoogleCalendarConnection(clientIdInput, connectBtn, async () => {
      console.log('🔧 Google Calendar connection successful - updating UI with shift planner pattern...');
      
      try {
        // Save settings on successful connection
        const settings = googleCalendarSettings.load();
        settings.clientId = clientIdInput.value.trim();
        googleCalendarSettings.save(settings);
        
        // Update UI to show connected state - EXACT shift planner pattern
        connectBtn.textContent = 'Connected';
        connectBtn.disabled = false;
        connectBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
        connectBtn.classList.add('bg-green-600', 'hover:bg-green-700');
        
        // Update connection status
        await updateConnectionStatus();
        
        // Load calendars - EXACT shift planner pattern
        const calendars = await googleCalendar.fetchCalendarList();
        const calendarSelect = document.getElementById('calendarSelect');
        if (calendarSelect && calendars) {
          calendarSelect.innerHTML = '';
          calendars.forEach(cal => {
            const opt = document.createElement('option');
            opt.value = cal.id;
            opt.textContent = cal.summary || cal.id;
            calendarSelect.appendChild(opt);
          });
        }
        
        // Show sync options
        const syncSection = document.getElementById('syncOptions');
        const calendarSelection = document.getElementById('calendarSelection');
        const signOutSection = document.getElementById('signOutSection');
        
        if (syncSection) syncSection.style.display = 'block';
        if (calendarSelection) calendarSelection.style.display = 'block';
        if (signOutSection) signOutSection.style.display = 'block';
        
        console.log('✅ Google Calendar UI updated successfully with shift planner pattern');
        alert('✅ Successfully connected to Google Calendar!');
        
      } catch (error) {
        console.error('Calendar setup error:', error);
        alert('Error during calendar setup: ' + error.message);
        
        // Reset UI on error
        connectBtn.disabled = false;
        connectBtn.textContent = 'Connect to Google Calendar';
        connectBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
        connectBtn.classList.add('bg-blue-600', 'hover:bg-blue-700');
      }
    });
  }).catch(error => {
    console.error('Failed to initialize Google Calendar:', error);
  });
  
  // Save settings
  saveSettingsBtn?.addEventListener('click', () => {
    const formData = new FormData(form);
    const settings = googleCalendarSettings.load();
    settings.clientId = formData.get('clientId');
    googleCalendarSettings.save(settings);
    alert('💾 Settings saved!');
  });
  
  // Export all events
  syncAllEventsBtn?.addEventListener('click', async () => {
    if (!googleCalendar.isSignedIn) {
      alert('Please connect to Google Calendar first');
      return;
    }
    
    await performSyncOperation('export', syncAllEventsBtn, '📤 Export All Local Events');
  });
  
  // Import events
  importEventsBtn?.addEventListener('click', async () => {
    if (!googleCalendar.isSignedIn) {
      alert('Please connect to Google Calendar first');
      return;
    }
    
    await performSyncOperation('import', importEventsBtn, '📥 Import from Google Calendar');
  });
  
  // Bidirectional sync
  bidirectionalSyncBtn?.addEventListener('click', async () => {
    if (!googleCalendar.isSignedIn) {
      alert('Please connect to Google Calendar first');
      return;
    }
    
    await performSyncOperation('bidirectional', bidirectionalSyncBtn, '🔄 Full Bidirectional Sync');
  });
  
  // Save sync settings
  saveSyncSettingsBtn?.addEventListener('click', () => {
    const settings = googleCalendarSettings.load();
    
    settings.autoSync = document.getElementById('autoSync').checked;
    settings.bidirectionalSync = document.getElementById('bidirectionalSync').checked;
    settings.syncInterval = document.getElementById('syncInterval').value;
    settings.selectedCalendarId = document.getElementById('calendarSelect').value;
    
    // Import settings
    settings.importSettings = {
      importTimeRange: document.getElementById('importTimeRange').value,
      conflictResolution: document.getElementById('conflictResolution').value
    };
    
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
  window.showClientIdHelp = () => showClientIdHelp();
}

// Perform sync operations with progress feedback
async function performSyncOperation(operation, button, originalText) {
  const syncStatusText = document.getElementById('syncStatusText');
  const syncProgress = document.getElementById('syncProgress');
  
  button.disabled = true;
  button.textContent = '🔄 Working...';
  syncStatusText.textContent = 'Syncing...';
  
  try {
    let result;
    
    switch (operation) {
      case 'export':
        syncProgress.textContent = 'Exporting local events to Google Calendar...';
        result = await syncAllEventsToGoogle();
        alert(`✅ Export complete!\n\n• ${result.synced} events exported\n• ${result.failed} failed`);
        break;
        
      case 'import':
        syncProgress.textContent = 'Importing events from Google Calendar...';
        result = await importEventsFromGoogle();
        alert(`✅ Import complete!\n\n• ${result.imported} events imported\n• ${result.updated} events updated\n• ${result.skipped} events skipped`);
        break;
        
      case 'bidirectional':
        syncProgress.textContent = 'Performing bidirectional sync...';
        result = await googleCalendar.performBidirectionalSync();
        
        // Update last sync time
        const settings = googleCalendarSettings.load();
        settings.lastSyncTime = new Date().toISOString();
        googleCalendarSettings.save(settings);
        
        // Update UI
        document.getElementById('lastSyncInfo').textContent = `Last sync: ${new Date().toLocaleString()}`;
        
        alert(`✅ Bidirectional sync complete!\n\n• ${result.imported} events imported\n• ${result.updated} events updated\n• ${result.exported} events exported\n• ${result.errors.length} errors`);
        break;
    }
    
    syncStatusText.textContent = 'Sync completed successfully';
    syncProgress.textContent = '';
    
    // Refresh calendar
    if (window.calendar && typeof window.calendar.refetchEvents === 'function') {
      window.calendar.refetchEvents();
    }
    
    // Refresh sidebar
    const refreshEvent = new CustomEvent('refreshSidebar');
    document.dispatchEvent(refreshEvent);
    
  } catch (error) {
    console.error(`${operation} failed:`, error);
    syncStatusText.textContent = 'Sync failed';
    syncProgress.textContent = error.message;
    alert(`❌ ${operation} failed: ${error.message}`);
  } finally {
    button.disabled = false;
    button.textContent = originalText;
    
    setTimeout(() => {
      syncStatusText.textContent = 'Ready';
      syncProgress.textContent = '';
    }, 5000);
  }
}

async function updateConnectionStatus() {
  const statusDiv = document.getElementById('connectionStatus');
  const userInfoDiv = document.getElementById('userInfo');
  const calendarSelection = document.getElementById('calendarSelection');
  const syncOptions = document.getElementById('syncOptions');
  const signOutSection = document.getElementById('signOutSection');
  
  // Check if we're actually signed in
  const isConnected = googleCalendar.isSignedIn && googleCalendar.accessToken;
  
  if (isConnected) {
    statusDiv.className = 'p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800';
    statusDiv.querySelector('span:first-child').textContent = '✅';
    statusDiv.querySelector('span:last-child').textContent = 'Connected to Google Calendar';
    
    // Get user info
    try {
      const userInfo = await googleCalendar.getUserInfo();
      if (userInfo) {
        userInfoDiv.innerHTML = `
          <div class="flex items-center space-x-2">
            ${userInfo.picture ? `<img src="${userInfo.picture}" alt="Profile" class="w-6 h-6 rounded-full">` : ''}
            <span>${userInfo.name || userInfo.email || 'Connected User'}</span>
          </div>
        `;
      } else {
        userInfoDiv.textContent = 'Connected successfully';
      }
    } catch (error) {
      console.warn('Failed to get user info:', error);
      userInfoDiv.textContent = 'Connected (unable to load user info)';
    }
    
    calendarSelection.style.display = 'block';
    syncOptions.style.display = 'block';
    signOutSection.style.display = 'block';
    
    // Hide connect button, show connected state
    const connectBtn = document.getElementById('connectBtn');
    if (connectBtn) {
      connectBtn.textContent = '✅ Connected';
      connectBtn.disabled = true;
      connectBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
      connectBtn.classList.add('bg-green-600');
    }
    
  } else {
    statusDiv.className = 'p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600';
    statusDiv.querySelector('span:first-child').textContent = '❌';
    statusDiv.querySelector('span:last-child').textContent = 'Not Connected';
    userInfoDiv.textContent = 'Enter your Client ID below to connect';
    
    calendarSelection.style.display = 'none';
    syncOptions.style.display = 'none';
    signOutSection.style.display = 'none';
    
    // Reset connect button
    const connectBtn = document.getElementById('connectBtn');
    if (connectBtn) {
      connectBtn.textContent = '🔗 Connect to Google Calendar';
      connectBtn.disabled = false;
      connectBtn.classList.remove('bg-green-600');
      connectBtn.classList.add('bg-blue-600', 'hover:bg-blue-700');
    }
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

// Export all existing events to Google Calendar
export async function syncAllEventsToGoogle() {
  const db = await openDB('gardening-calendar');
  const events = await db.getAll('events');
  const settings = googleCalendarSettings.load();
  
  // Filter events based on sync settings
  const eventsToSync = events.filter(event => settings.syncTypes[event.type]);
  
  if (eventsToSync.length === 0) {
    throw new Error('No events to sync based on your settings');
  }
  
  const { results, errors } = await googleCalendar.createEvents(eventsToSync);
  
  // Update local events with Google event IDs
  for (let i = 0; i < results.length; i++) {
    const localEvent = eventsToSync[i];
    const googleEvent = results[i];
    
    if (googleEvent && googleEvent.id) {
      await db.put('events', {
        ...localEvent,
        googleEventId: googleEvent.id,
        lastModified: new Date().toISOString()
      });
    }
  }
  
  if (errors.length > 0) {
    console.warn('Some events failed to sync:', errors);
  }
  
  return { synced: results.length, failed: errors.length };
}

// Import events from Google Calendar
export async function importEventsFromGoogle() {
  const settings = googleCalendarSettings.load();
  const importSettings = settings.importSettings || {};
  
  // Calculate time range
  let timeMin = null;
  let timeMax = null;
  
  if (importSettings.importTimeRange !== 'all') {
    timeMin = new Date();
    switch (importSettings.importTimeRange) {
      case '6months':
        timeMin.setMonth(timeMin.getMonth() - 6);
        break;
      case '1year':
        timeMin.setFullYear(timeMin.getFullYear() - 1);
        break;
      case '2years':
        timeMin.setFullYear(timeMin.getFullYear() - 2);
        break;
    }
    timeMin = timeMin.toISOString();
    
    // Set max time to 2 years in future
    timeMax = new Date();
    timeMax.setFullYear(timeMax.getFullYear() + 2);
    timeMax = timeMax.toISOString();
  }
  
  const googleEvents = await googleCalendar.importEvents(timeMin, timeMax);
  
  const db = await openDB('gardening-calendar');
  const localEvents = await db.getAll('events');
  
  let imported = 0;
  let updated = 0;
  let skipped = 0;
  
  for (const googleEvent of googleEvents) {
    // Check if event already exists locally
    const existingEvent = localEvents.find(e => 
      e.googleEventId === googleEvent.googleEventId ||
      (e.title === googleEvent.title && e.date === googleEvent.date)
    );
    
    if (existingEvent) {
      // Handle conflict resolution
      if (importSettings.conflictResolution === 'google' || 
          (importSettings.conflictResolution === 'newer' && 
           new Date(googleEvent.lastModified) > new Date(existingEvent.lastModified || 0))) {
        
        await db.put('events', {
          ...existingEvent,
          title: googleEvent.title,
          description: googleEvent.description,
          type: googleEvent.type,
          plantingId: googleEvent.plantingId,
          googleEventId: googleEvent.googleEventId,
          lastModified: googleEvent.lastModified
        });
        updated++;
      } else {
        skipped++;
      }
    } else {
      // Import new event
      const newEvent = {
        title: googleEvent.title,
        date: googleEvent.date,
        type: googleEvent.type,
        description: googleEvent.description,
        plantingId: googleEvent.plantingId,
        googleEventId: googleEvent.googleEventId,
        lastModified: googleEvent.lastModified
      };
      await db.add('events', newEvent);
      imported++;
    }
  }
  
  return { imported, updated, skipped };
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
    const googleEvent = await googleCalendar.createEvent(eventData);
    
    // Update local event with Google event ID
    if (eventData.id && googleEvent.id) {
      const { openDB } = await import('idb');
      const db = await openDB('gardening-calendar');
      const localEvent = await db.get('events', eventData.id);
      if (localEvent) {
        await db.put('events', {
          ...localEvent,
          googleEventId: googleEvent.id,
          lastModified: new Date().toISOString()
        });
      }
    }
    
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
          <h3 class="font-semibold text-purple-600 dark:text-purple-400">Step 3: Create OAuth Client ID</h3>
          <ol class="list-decimal list-inside space-y-1 mt-2 dark:text-gray-300">
            <li>Go to "APIs & Services" → "Credentials"</li>
            <li>Click "Create Credentials" → "OAuth client ID"</li>
            <li>Choose "Web application" as application type</li>
            <li>Add your website URL to "Authorized JavaScript origins"</li>
            <li>For local development, add: <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">http://localhost:5173</code></li>
            <li>Copy the Client ID (ends with ".apps.googleusercontent.com")</li>
          </ol>
        </div>
        
        <div class="border-l-4 border-orange-500 pl-4">
          <h3 class="font-semibold text-orange-600 dark:text-orange-400">Step 4: Configure OAuth Consent</h3>
          <ol class="list-decimal list-inside space-y-1 mt-2 dark:text-gray-300">
            <li>Go to "APIs & Services" → "OAuth consent screen"</li>
            <li>Choose "External" user type (unless you have Google Workspace)</li>
            <li>Fill in required fields (app name, user support email)</li>
            <li>Add your email to test users if in testing mode</li>
            <li>Add scope: <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">https://www.googleapis.com/auth/calendar.events</code></li>
          </ol>
        </div>
        
        <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded p-4">
          <h3 class="font-semibold text-green-800 dark:text-green-200">🔄 New: Bidirectional Sync Features</h3>
          <ul class="list-disc list-inside space-y-1 mt-2 text-green-700 dark:text-green-300">
            <li><strong>Import Events:</strong> Pull gardening events from Google Calendar</li>
            <li><strong>Conflict Resolution:</strong> Choose how to handle conflicting changes</li>
            <li><strong>Plant ID Preservation:</strong> Maintains plant relationships when syncing</li>
            <li><strong>Automatic Sync:</strong> Optional scheduled synchronization</li>
          </ul>
        </div>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-4">
          <h3 class="font-semibold text-blue-800 dark:text-blue-200">🔧 Testing Your Setup</h3>
          <ol class="list-decimal list-inside space-y-1 mt-2 text-blue-700 dark:text-blue-300">
            <li>Enter your Client ID in the form above</li>
            <li>Click "Connect to Google Calendar"</li>
            <li>You should see a Google sign-in popup</li>
            <li>Grant calendar permissions</li>
            <li>You should see "Connected" status with your profile</li>
            <li>Try importing existing events or exporting local events</li>
          </ol>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(helpModal);
}

function showClientIdHelp() {
  alert(`🆔 Client ID Help:

The Client ID is used for user authentication and authorization.

Where to find it:
1. Google Cloud Console → APIs & Services → Credentials  
2. Look for "OAuth 2.0 Client IDs" section
3. It ends with ".apps.googleusercontent.com"

Setup Requirements:
• Must be configured as "Web application"
• Add your domain to "Authorized JavaScript origins"
• For local development: http://localhost:5173
• Used to request calendar permissions from users

New Sync Features:
• Events now include metadata for plant tracking
• Bidirectional sync preserves plant relationships
• Import/export maintains data integrity
• Conflict resolution handles simultaneous changes`);
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

// Google Calendar Integration
export function initGoogleCalendarModal() {
    const modal = document.getElementById('googleCalendarModal');
    const openBtn = document.getElementById('googleCalendarBtn');
    const closeBtn = modal?.querySelector('.close-modal');
    const connectBtn = document.getElementById('connectGoogleBtn');
    const clientIdInput = document.getElementById('googleClientId');

    if (!modal || !openBtn) return;

    openBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        updateConnectionStatus();
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Use the EXACT shift planner pattern - import the module first
    console.log('🔄 Starting Google Calendar connection...');
    
    // Import the working function from shift planner pattern
    import('./googleCalendar.js').then(module => {
        console.log('🔧 Setting up Google Calendar with EXACT shift planner pattern...');
        
        // Use the EXACT shift planner setupGoogleCalendarConnection function
        if (connectBtn && clientIdInput) {
            module.setupGoogleCalendarConnection(clientIdInput, connectBtn, async () => {
                console.log('🔧 Google Calendar connection successful - updating UI with shift planner pattern...');
                
                try {
                    // Update UI to show connected state - EXACT shift planner pattern
                    connectBtn.textContent = 'Verbunden';
                    connectBtn.disabled = false;
                    connectBtn.classList.remove('bg-blue-500', 'hover:bg-blue-600');
                    connectBtn.classList.add('bg-green-500', 'hover:bg-green-600');
                    
                    // Show sync options
                    const syncSection = document.getElementById('syncOptionsSection');
                    if (syncSection) {
                        syncSection.style.display = 'block';
                    }
                    
                    // Load calendars - EXACT shift planner pattern
                    const calendars = await module.fetchCalendarList();
                    const calendarSelect = document.getElementById('calendarSelect');
                    if (calendarSelect && calendars) {
                        calendarSelect.innerHTML = '';
                        calendars.forEach(cal => {
                            const opt = document.createElement('option');
                            opt.value = cal.id;
                            opt.textContent = cal.summary || cal.id;
                            calendarSelect.appendChild(opt);
                        });
                        calendarSelect.style.display = 'block';
                        calendarSelect.disabled = false;
                    }
                    
                    console.log('✅ Google Calendar UI updated successfully with shift planner pattern');
                    
                } catch (error) {
                    console.error('Calendar list error:', error);
                    alert('Fehler beim Abrufen der Kalenderliste.');
                    connectBtn.disabled = false;
                    connectBtn.textContent = 'Mit Google verbinden';
                    connectBtn.classList.remove('bg-green-500', 'hover:bg-green-600');
                    connectBtn.classList.add('bg-blue-500', 'hover:bg-blue-600');
                }
            });
        }
    }).catch(error => {
        console.error('Failed to load Google Calendar module:', error);
    });
}