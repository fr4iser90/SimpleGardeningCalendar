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
        
        <!-- Calendar Organization Wizard -->
        <div id="calendarWizard" class="space-y-4 ${googleCalendar.isSignedIn ? '' : 'hidden'}">
          <div class="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 class="text-lg font-semibold mb-4 dark:text-white">🗓️ Calendar Organization</h3>
            
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
              <h4 class="font-medium mb-4 dark:text-white">🌱 How do you want to organize your garden events?</h4>
              
              <div class="space-y-3">
                <!-- Option 1: Single Gardening Calendar -->
                <label class="flex items-start space-x-3 p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors">
                  <input type="radio" name="calendarOrganization" value="single" checked class="mt-1">
                  <div class="flex-1">
                    <div class="font-medium text-gray-900 dark:text-white">🌱 One "Gardening Calendar"</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Recommended for beginners - all garden events in one place</div>
                  </div>
                </label>

                <!-- Option 2: Use Existing Calendar -->
                <label class="flex items-start space-x-3 p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors">
                  <input type="radio" name="calendarOrganization" value="existing" class="mt-1">
                  <div class="flex-1">
                    <div class="font-medium text-gray-900 dark:text-white">📊 Use my existing calendar</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400 mb-2">Mix garden events with your other events</div>
                    <select id="existingCalendarSelect" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white text-sm" disabled>
                      <option value="">Select a calendar...</option>
                    </select>
                  </div>
                </label>

                <!-- Option 3: Separate by Activity Type -->
                <label class="flex items-start space-x-3 p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors">
                  <input type="radio" name="calendarOrganization" value="by_type" class="mt-1">
                  <div class="flex-1">
                    <div class="font-medium text-gray-900 dark:text-white">🏷️ Separate calendars per activity type</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Advanced: Planting, Watering, Fertilizing, Harvesting, Maintenance</div>
                    <div class="text-xs text-blue-600 dark:text-blue-400 mt-1">Creates 5 specialized calendars</div>
                  </div>
                </label>

                <!-- Option 4: Separate by Garden Template -->
                <label class="flex items-start space-x-3 p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors">
                  <input type="radio" name="calendarOrganization" value="by_template" class="mt-1">
                  <div class="flex-1">
                    <div class="font-medium text-gray-900 dark:text-white">🌿 Separate calendar per garden type</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Power user: Vegetables, Herbs, Ornamental, Fruit</div>
                    <div class="text-xs text-blue-600 dark:text-blue-400 mt-1">Creates 4 garden-specific calendars</div>
                  </div>
                </label>

                <!-- Option 5: Separate by Individual Plant -->
                <label class="flex items-start space-x-3 p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors">
                  <input type="radio" name="calendarOrganization" value="by_plant" class="mt-1">
                  <div class="flex-1">
                    <div class="font-medium text-gray-900 dark:text-white">🌱 Separate calendar per individual plant</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Ultimate power user: Tomatoes, Carrots, Roses, etc.</div>
                    <div class="text-xs text-purple-600 dark:text-purple-400 mt-1">Creates one calendar for each plant you grow</div>
                  </div>
                </label>
              </div>

              <div class="mt-6 text-center">
                <button 
                  id="setupCalendarsBtn"
                  type="button"
                  class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
                >
                  🚀 Setup My Calendar Organization
                </button>
              </div>
            </div>
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
  
  // Auto-load saved Client ID and try to reconnect
  autoLoadAndReconnect();
  
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
        
        // Show sync options
        const syncSection = document.getElementById('syncOptions');
        const signOutSection = document.getElementById('signOutSection');
        
        if (syncSection) syncSection.style.display = 'block';
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
    
    // Set calendar if we have a selected one from wizard
    if (settings.selectedCalendarId) {
      googleCalendar.setCalendar(settings.selectedCalendarId);
    }
    
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
  
  // Calendar Organization Wizard Event Listeners
  setupCalendarWizardEventListeners();
}

// Setup Calendar Organization Wizard Event Listeners
function setupCalendarWizardEventListeners() {
  const organizationRadios = document.querySelectorAll('input[name="calendarOrganization"]');
  const existingCalendarSelect = document.getElementById('existingCalendarSelect');
  const setupCalendarsBtn = document.getElementById('setupCalendarsBtn');
  
  // Handle radio button changes
  organizationRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      const value = e.target.value;
      
      // Enable/disable existing calendar dropdown
      if (value === 'existing') {
        existingCalendarSelect.disabled = false;
        loadUserCalendarsForWizard();
      } else {
        existingCalendarSelect.disabled = true;
        existingCalendarSelect.innerHTML = '<option value="">Select a calendar...</option>';
      }
    });
  });
  
  // Setup calendars button
  setupCalendarsBtn?.addEventListener('click', async () => {
    const selectedOrganization = document.querySelector('input[name="calendarOrganization"]:checked')?.value;
    
    if (!selectedOrganization) {
      alert('Please select an organization option');
      return;
    }
    
    setupCalendarsBtn.disabled = true;
    setupCalendarsBtn.textContent = '⏳ Setting up calendars...';
    
    try {
      await handleCalendarSetup(selectedOrganization);
      
      // Hide wizard after successful setup
      const wizardDiv = document.getElementById('calendarWizard');
      if (wizardDiv) {
        wizardDiv.style.display = 'none';
      }
      
      // Show success message
      alert('✅ Calendar setup complete! Your calendars are ready to use.');
      
    } catch (error) {
      console.error('Calendar setup failed:', error);
      alert(`❌ Setup failed: ${error.message}`);
    } finally {
      setupCalendarsBtn.disabled = false;
      setupCalendarsBtn.textContent = '🚀 Setup My Calendar Organization';
    }
  });
}

// Load user's own calendars for the wizard
async function loadUserCalendarsForWizard() {
  const existingCalendarSelect = document.getElementById('existingCalendarSelect');
  
  try {
    existingCalendarSelect.innerHTML = '<option value="">Loading calendars...</option>';
    const calendars = await googleCalendar.getCalendars();
    
    existingCalendarSelect.innerHTML = '<option value="">Select a calendar...</option>';
    calendars.forEach(calendar => {
      const option = document.createElement('option');
      option.value = calendar.id;
      option.textContent = `${calendar.id === 'primary' ? '📧' : '📅'} ${calendar.summary}`;
      existingCalendarSelect.appendChild(option);
    });
  } catch (error) {
    console.error('Failed to load calendars:', error);
    existingCalendarSelect.innerHTML = '<option value="">Failed to load calendars</option>';
  }
}

// Handle calendar setup based on selected organization
async function handleCalendarSetup(organizationType) {
  const settings = googleCalendarSettings.load();
  
  switch (organizationType) {
    case 'single':
      // Create single gardening calendar
      const gardeningCalendar = await googleCalendar.createCalendar({
        name: '🌱 Gardening Calendar',
        description: 'All your gardening tasks and events in one place'
      });
      
      settings.selectedCalendarId = gardeningCalendar.id;
      settings.organizationType = 'single';
      settings.createdCalendars = [{ id: gardeningCalendar.id, name: gardeningCalendar.summary }];
      break;
      
    case 'existing':
      // Use existing calendar
      const selectedCalendarId = document.getElementById('existingCalendarSelect').value;
      if (!selectedCalendarId) {
        throw new Error('Please select a calendar');
      }
      
      settings.selectedCalendarId = selectedCalendarId;
      settings.organizationType = 'existing';
      break;
      
    case 'by_type':
      // Create calendars for each activity type
      const currentYear = new Date().getFullYear();
      const activityTypes = [
        { name: `🌱 Garden: Planting ${currentYear}`, desc: 'All planting activities' },
        { name: `💧 Garden: Watering ${currentYear}`, desc: 'Watering schedules and reminders' },
        { name: `🌿 Garden: Fertilizing ${currentYear}`, desc: 'Fertilizing and feeding tasks' },
        { name: `🌾 Garden: Harvesting ${currentYear}`, desc: 'Harvest times and activities' },
        { name: `🔧 Garden: Maintenance ${currentYear}`, desc: 'General garden maintenance' }
      ];
      
      const typeCalendars = [];
      for (const type of activityTypes) {
        const calendar = await googleCalendar.createCalendar({
          name: type.name,
          description: type.desc
        });
        typeCalendars.push({ id: calendar.id, name: calendar.summary });
      }
      
      settings.selectedCalendarId = typeCalendars[0].id; // Use first as default
      settings.organizationType = 'by_type';
      settings.createdCalendars = typeCalendars;
      break;
      
    case 'by_template':
      // Create calendars for each garden template
      const currentYear2 = new Date().getFullYear();
      const gardenTemplates = [
        { name: `🌸 Ornamental Garden ${currentYear2}`, desc: 'Ornamental garden tasks and care' },
        { name: `🥕 Vegetable Garden ${currentYear2}`, desc: 'Vegetable growing calendar' },
        { name: `🌿 Herb Garden ${currentYear2}`, desc: 'Herb cultivation and harvesting' },
        { name: `🍎 Fruit Garden ${currentYear2}`, desc: 'Fruit tree and bush care' }
      ];
      
      const templateCalendars = [];
      for (const template of gardenTemplates) {
        const calendar = await googleCalendar.createCalendar({
          name: template.name,
          description: template.desc
        });
        templateCalendars.push({ id: calendar.id, name: calendar.summary });
      }
      
      settings.selectedCalendarId = templateCalendars[0].id; // Use first as default
      settings.organizationType = 'by_template';
      settings.createdCalendars = templateCalendars;
      break;
      
    case 'by_plant':
      // Create calendars for each individual plant
      const currentYear3 = new Date().getFullYear();
      
      // Get unique plants from user's garden (this would be from your plant database)
      // For now, we'll create some example plant calendars
      const plants = [
        { name: `🍅 Tomatoes ${currentYear3}`, desc: 'Tomato planting, care, and harvest schedule' },
        { name: `🥕 Carrots ${currentYear3}`, desc: 'Carrot growing and harvesting calendar' },
        { name: `🌹 Roses ${currentYear3}`, desc: 'Rose care, pruning, and blooming schedule' },
        { name: `🥬 Lettuce ${currentYear3}`, desc: 'Lettuce planting and harvesting cycles' },
        { name: `🌿 Basil ${currentYear3}`, desc: 'Basil growing and harvesting calendar' }
      ];
      
      const plantCalendars = [];
      for (const plant of plants) {
        const calendar = await googleCalendar.createCalendar({
          name: plant.name,
          description: plant.desc
        });
        plantCalendars.push({ id: calendar.id, name: calendar.summary });
      }
      
      settings.selectedCalendarId = plantCalendars[0].id; // Use first as default
      settings.organizationType = 'by_plant';
      settings.createdCalendars = plantCalendars;
      break;
      
    default:
      throw new Error('Invalid organization type');
  }
  
  // Save settings
  googleCalendarSettings.save(settings);
  
  // Load calendars to ensure they're available
  await loadCalendarsInternal();
}

// Perform sync operations with progress feedback
async function performSyncOperation(operation, button, originalText) {
  const syncStatusText = document.getElementById('syncStatusText');
  const syncProgress = document.getElementById('syncProgress');
  
  // Store original state
  const originalDisabled = button.disabled;
  const originalButtonText = button.textContent;
  
  button.disabled = true;
  button.textContent = '🔄 Working...';
  if (syncStatusText) syncStatusText.textContent = 'Syncing...';
  
  try {
    let result;
    
    switch (operation) {
      case 'export':
        if (syncProgress) syncProgress.textContent = 'Exporting local events to Google Calendar...';
        result = await syncAllEventsToGoogle();
        alert(`✅ Export complete!\n\n• ${result.synced} events exported\n• ${result.failed} failed`);
        break;
        
      case 'import':
        if (syncProgress) syncProgress.textContent = 'Importing events from Google Calendar...';
        result = await importEventsFromGoogle();
        alert(`✅ Import complete!\n\n• ${result.imported} events imported\n• ${result.updated} events updated\n• ${result.skipped} events skipped`);
        break;
        
      case 'bidirectional':
        if (syncProgress) syncProgress.textContent = 'Performing bidirectional sync...';
        result = await googleCalendar.performBidirectionalSync();
        
        // Update last sync time
        const settings = googleCalendarSettings.load();
        settings.lastSyncTime = new Date().toISOString();
        googleCalendarSettings.save(settings);
        
        // Update UI
        const lastSyncInfo = document.getElementById('lastSyncInfo');
        if (lastSyncInfo) {
          lastSyncInfo.textContent = `Last sync: ${new Date().toLocaleString()}`;
        }
        
        const errorMsg = result.errors.length > 0 ? `\n• Errors: ${result.errors.join(', ')}` : '';
        alert(`✅ Bidirectional sync complete!\n\n• ${result.imported} events imported\n• ${result.updated} events updated\n• ${result.exported} events exported${errorMsg}`);
        break;
    }
    
    if (syncStatusText) syncStatusText.textContent = 'Sync completed successfully';
    if (syncProgress) syncProgress.textContent = '';
    
    // Refresh calendar
    if (window.calendar && typeof window.calendar.refetchEvents === 'function') {
      window.calendar.refetchEvents();
    }
    
    // Refresh sidebar
    const refreshEvent = new CustomEvent('refreshSidebar');
    document.dispatchEvent(refreshEvent);
    
  } catch (error) {
    console.error(`${operation} failed:`, error);
    if (syncStatusText) syncStatusText.textContent = 'Sync failed';
    if (syncProgress) syncProgress.textContent = error.message;
    alert(`❌ ${operation} failed: ${error.message}`);
  } finally {
    // Always restore button state
    button.disabled = originalDisabled;
    button.textContent = originalText;
    
    // Clear status after delay
    setTimeout(() => {
      if (syncStatusText) syncStatusText.textContent = 'Ready';
      if (syncProgress) syncProgress.textContent = '';
    }, 5000);
  }
}

async function updateConnectionStatus() {
  const statusDiv = document.getElementById('connectionStatus');
  const userInfoDiv = document.getElementById('userInfo');
  const syncOptions = document.getElementById('syncOptions');
  const signOutSection = document.getElementById('signOutSection');
  const calendarWizard = document.getElementById('calendarWizard');
  
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
    
    // Show calendar wizard and other sections
    if (calendarWizard) calendarWizard.style.display = 'block';
    if (syncOptions) syncOptions.style.display = 'block';
    if (signOutSection) signOutSection.style.display = 'block';
    
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
    
    // Hide all sections when not connected
    if (calendarWizard) calendarWizard.style.display = 'none';
    if (syncOptions) syncOptions.style.display = 'none';
    if (signOutSection) signOutSection.style.display = 'none';
    
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

// Load calendars for internal use (not for UI dropdown)
async function loadCalendarsInternal() {
  if (!googleCalendar.isSignedIn) return [];
  
  try {
    const calendars = await googleCalendar.getCalendars();
    return calendars;
  } catch (error) {
    console.error('Failed to load calendars:', error);
    return [];
  }
}

// Export all existing events to Google Calendar
export async function syncAllEventsToGoogle() {
  // Use the internal function from googleCalendar.js to avoid circular imports
  if (!googleCalendar.isSignedIn) {
    throw new Error('Not signed in to Google Calendar');
  }
  
  // Call the internal export function from googleCalendar module
  const { exportLocalEventsToGoogle } = await import('./googleCalendar.js');
  return await exportLocalEventsToGoogle();
}

// Import events from Google Calendar
export async function importEventsFromGoogle() {
  // Use the internal function from googleCalendar.js to avoid circular imports
  if (!googleCalendar.isSignedIn) {
    throw new Error('Not signed in to Google Calendar');
  }
  
  // Call the internal import function from googleCalendar module
  const { importGoogleEvents } = await import('./googleCalendar.js');
  return await importGoogleEvents();
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
                    const syncSection = document.getElementById('syncOptions');
                    const signOutSection = document.getElementById('signOutSection');
                    
                    if (syncSection) syncSection.style.display = 'block';
                    if (signOutSection) signOutSection.style.display = 'block';
                    
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

// Auto-load saved Client ID and try to reconnect
async function autoLoadAndReconnect() {
  const settings = googleCalendarSettings.load();
  const clientIdInput = document.getElementById('googleClientId');
  
  // The Client ID is already loaded in the HTML template, but let's ensure it's there
  if (settings.clientId && clientIdInput && !clientIdInput.value) {
    clientIdInput.value = settings.clientId;
    console.log('🔄 Loaded saved Client ID into input field');
  }
  
  // If we have a saved Client ID, show a helpful message
  if (settings.clientId) {
    console.log('💡 Found saved Client ID - you can click "Connect" to reconnect');
    
    // Always update the user info to show we have a saved ID (regardless of connection status)
    const userInfoDiv = document.getElementById('userInfo');
    
    if (userInfoDiv) {
      // Wait a bit to ensure the connection status is properly determined
      setTimeout(() => {
        if (!googleCalendar.isSignedIn) {
          userInfoDiv.innerHTML = `
            <div class="text-blue-600 dark:text-blue-400 font-medium">
              ✨ Saved Client ID found! Click "🔗 Connect to Google Calendar" to reconnect.
            </div>
          `;
        }
      }, 100);
    }
  } else {
    console.log('💡 No saved Client ID found - user needs to enter one');
  }
}