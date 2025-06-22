import { googleCalendarSettings } from '../../services/GoogleCalendar/GoogleCalendarSettings.js';
import { updateConnectionStatus } from './GoogleCalendarSetupModal.js';
import { showNotification } from '../../utils/notifications.js';
import { getCalendarTypeIcon, generateCleanupSuggestions } from '../../utils/calendarUtils.js';

// Render the calendar wizard HTML section
export function renderCalendarWizardHTML(settings) {
  return `
    <!-- Calendar Organization Wizard -->
    <div id="calendarWizard" class="space-y-4" style="display: none;">
      <div class="border-t border-gray-200 dark:border-gray-700 pt-6">
        <h3 class="text-lg font-semibold mb-4 dark:text-white">🗓️ Calendar Organization</h3>
        
        <!-- Existing Garden Calendars Detection -->
        <div id="existingCalendarsSection" class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6" style="display: none;">
          <h4 class="font-medium text-yellow-800 dark:text-yellow-200 mb-3">
            🔍 Existing Garden Calendars Detected
          </h4>
          
          <!-- Duplicates Warning -->
          <div id="duplicatesWarning" class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 mb-4" style="display: none;">
            <div class="flex items-center space-x-2 mb-2">
              <span class="text-red-600 dark:text-red-400">⚠️</span>
              <span class="font-medium text-red-800 dark:text-red-200">Duplicate Calendars Found!</span>
            </div>
            <p class="text-sm text-red-700 dark:text-red-300 mb-3">
              You have multiple calendars for the same garden categories. This can cause confusion and clutter.
            </p>
            <div id="duplicateGroupsList" class="space-y-2 mb-3">
              <!-- Dynamically populated -->
            </div>
            <button id="cleanupDuplicatesBtn" class="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm">
              🧹 Clean Up Duplicates
            </button>
          </div>
          
          <div id="existingCalendarsList" class="space-y-2 mb-4">
            <!-- Dynamically populated -->
          </div>
          <div class="flex gap-2">
            <button id="manageExistingBtn" class="px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700 text-sm">
              🛠️ Manage All Calendars
            </button>
            <button id="ignoreExistingBtn" class="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm">
              ⏭️ Continue Anyway
            </button>
          </div>
        </div>
        
        <!-- Duplicate Cleanup Modal -->
        <div id="duplicateCleanupModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-60" style="display: none;">
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-semibold dark:text-white">🧹 Clean Up Duplicate Calendars</h3>
              <button id="closeCleanupModal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">✕</button>
            </div>
            
            <div class="space-y-4">
              <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p class="text-sm text-blue-700 dark:text-blue-300">
                  💡 <strong>Smart Cleanup:</strong> We've detected duplicate calendars for the same garden categories. 
                  You can keep the best one and remove the duplicates to stay organized.
                </p>
              </div>
              
              <div id="cleanupSuggestionsList" class="space-y-4">
                <!-- Dynamically populated -->
              </div>
              
              <div class="flex justify-end gap-2 pt-4 border-t">
                <button id="cancelCleanupBtn" class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
                  Cancel
                </button>
                <button id="executeCleanupBtn" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                  🧹 Execute Cleanup
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Calendar Management Modal -->
        <div id="calendarManagementModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-60" style="display: none;">
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-semibold dark:text-white">🛠️ Manage Garden Calendars</h3>
              <button id="closeManagementModal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">✕</button>
            </div>
            
            <div class="space-y-4">
              <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p class="text-sm text-blue-700 dark:text-blue-300">
                  💡 <strong>Tip:</strong> You can remove duplicate or old garden calendars to keep things organized. 
                  Be careful - this will permanently delete the calendar and all its events!
                </p>
              </div>
              
              <div id="calendarManagementList" class="space-y-3">
                <!-- Dynamically populated -->
              </div>
              
              <div class="flex justify-end gap-2 pt-4 border-t">
                <button id="cancelManagementBtn" class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
                  Cancel
                </button>
                <button id="continueAfterManagementBtn" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                  Continue Setup
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
          <h4 class="font-medium mb-4 dark:text-white">🌱 How do you want to organize your garden events?</h4>
          
          <div class="space-y-3">
            <!-- Option 1: Single Gardening Calendar -->
            <label class="flex items-start space-x-3 p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors">
              <input type="radio" name="calendarOrganization" value="single" checked class="mt-1">
              <div class="flex-1">
                <div class="font-medium text-gray-900 dark:text-white">🌱 One "Gardening Calendar"</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Recommended for beginners - all garden events in one place</div>
                <div id="singleCalendarWarning" class="text-xs text-orange-600 dark:text-orange-400 mt-1" style="display: none;">
                  ⚠️ Similar calendar already exists - will create new one or use existing
                </div>
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
                <div id="typeCalendarWarning" class="text-xs text-orange-600 dark:text-orange-400 mt-1" style="display: none;">
                  ⚠️ Some activity calendars already exist - will avoid duplicates
                </div>
              </div>
            </label>

            <!-- Option 4: Separate by Garden Template -->
            <label class="flex items-start space-x-3 p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors">
              <input type="radio" name="calendarOrganization" value="by_template" class="mt-1">
              <div class="flex-1">
                <div class="font-medium text-gray-900 dark:text-white">🌿 Separate calendar per garden type</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Power user: Vegetables, Herbs, Ornamental, Fruit</div>
                <div class="text-xs text-blue-600 dark:text-blue-400 mt-1">Creates 4 garden-specific calendars</div>
                <div id="templateCalendarWarning" class="text-xs text-orange-600 dark:text-orange-400 mt-1" style="display: none;">
                  ⚠️ Some garden type calendars already exist - will avoid duplicates
                </div>
              </div>
            </label>

            <!-- Option 5: Separate by Individual Plant -->
            <label class="flex items-start space-x-3 p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors">
              <input type="radio" name="calendarOrganization" value="by_plant" class="mt-1">
              <div class="flex-1">
                <div class="font-medium text-gray-900 dark:text-white">🌱 Separate calendar per individual plant</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Ultimate power user: Tomatoes, Carrots, Roses, etc.</div>
                <div class="text-xs text-purple-600 dark:text-purple-400 mt-1">Creates one calendar for each plant you grow</div>
                <div id="plantCalendarWarning" class="text-xs text-orange-600 dark:text-orange-400 mt-1" style="display: none;">
                  ⚠️ Some plant calendars already exist - will avoid duplicates
                </div>
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
  `;
}

// Setup Calendar Organization Wizard Event Listeners
export function setupCalendarWizardEventListeners() {
  const organizationRadios = document.querySelectorAll('input[name="calendarOrganization"]');
  const existingCalendarSelect = document.getElementById('existingCalendarSelect');
  const setupCalendarsBtn = document.getElementById('setupCalendarsBtn');
  
  // Detect existing calendars when wizard becomes visible
  const calendarWizard = document.getElementById('calendarWizard');
  if (calendarWizard) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          const isVisible = calendarWizard.style.display !== 'none';
          if (isVisible) {
            detectAndShowExistingCalendars();
          }
        }
      });
    });
    observer.observe(calendarWizard, { attributes: true });
  }
  
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
      
      const wizardDiv = document.getElementById('calendarWizard');
      if (wizardDiv) {
        wizardDiv.style.display = 'none';
      }
      
      alert('✅ Calendar setup complete! Your calendars are ready to use.');
      updateConnectionStatus(); // Refresh the entire view
      
    } catch (error) {
      console.error('Calendar setup failed:', error);
      alert(`❌ Setup failed: ${error.message}`);
    } finally {
      setupCalendarsBtn.disabled = false;
      setupCalendarsBtn.textContent = '🚀 Setup My Calendar Organization';
    }
  });
  
  // Calendar management modal event listeners
  setupCalendarManagementListeners();
}

// Detect and show existing garden calendars
async function detectAndShowExistingCalendars() {
  try {
    const { detectGardenCalendars } = await import('../../services/GoogleCalendar/GoogleCalendarApi.js');
    const { gardenCalendars, groupedCalendars, duplicateGroups, hasExistingGardenCalendars, hasDuplicates } = await detectGardenCalendars();
    
    const existingSection = document.getElementById('existingCalendarsSection');
    const existingList = document.getElementById('existingCalendarsList');
    const duplicatesWarning = document.getElementById('duplicatesWarning');
    const duplicateGroupsList = document.getElementById('duplicateGroupsList');
    
    if (hasExistingGardenCalendars) {
      // Show duplicates warning if needed
      if (hasDuplicates) {
        duplicateGroupsList.innerHTML = duplicateGroups.map(group => `
          <div class="flex items-center justify-between p-2 bg-red-100 dark:bg-red-900/30 rounded border">
            <div class="flex items-center space-x-2">
              <span class="text-lg">${getCalendarTypeIcon(group.type, group.groupName)}</span>
              <span class="text-sm font-medium dark:text-white">${group.groupName}</span>
              <span class="text-xs px-2 py-1 bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 rounded">
                ${group.count} duplicates
              </span>
            </div>
          </div>
        `).join('');
        duplicatesWarning.style.display = 'block';
      }
      
      // Show organized calendar list - FIXED: Show only actual calendar names, not confusing group names
      existingList.innerHTML = gardenCalendars.map(cal => `
        <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-3">
          <div class="flex items-center space-x-2">
            <span class="text-lg">${getCalendarTypeIcon(cal.detectedType || 'general', cal.plantType || cal.activityType || cal.templateType || 'general')}</span>
            <span class="font-medium dark:text-white">${cal.summary}</span>
          </div>
        </div>
      `).join('');
      
      existingSection.style.display = 'block';
      
      // Show warnings on relevant options
      updateOrganizationWarnings(gardenCalendars);
      
    } else {
      existingSection.style.display = 'none';
    }
  } catch (error) {
    console.error('Failed to detect existing calendars:', error);
  }
}

// Update warnings based on existing calendars
function updateOrganizationWarnings(existingCalendars) {
  const warnings = {
    single: document.getElementById('singleCalendarWarning'),
    type: document.getElementById('typeCalendarWarning'),
    template: document.getElementById('templateCalendarWarning'),
    plant: document.getElementById('plantCalendarWarning')
  };
  
  // Check for single gardening calendar
  const hasSingleGardenCalendar = existingCalendars.some(cal => 
    cal.summary.toLowerCase().includes('gardening') || 
    cal.summary.includes('🌱')
  );
  if (hasSingleGardenCalendar && warnings.single) {
    warnings.single.style.display = 'block';
  }
  
  // Check for activity type calendars
  const activityKeywords = ['planting', 'watering', 'fertilizing', 'harvesting', 'maintenance'];
  const hasActivityCalendars = existingCalendars.some(cal => 
    activityKeywords.some(keyword => cal.summary.toLowerCase().includes(keyword))
  );
  if (hasActivityCalendars && warnings.type) {
    warnings.type.style.display = 'block';
  }
  
  // Check for template calendars
  const templateKeywords = ['vegetable', 'herb', 'ornamental', 'fruit'];
  const hasTemplateCalendars = existingCalendars.some(cal => 
    templateKeywords.some(keyword => cal.summary.toLowerCase().includes(keyword))
  );
  if (hasTemplateCalendars && warnings.template) {
    warnings.template.style.display = 'block';
  }
  
  // Check for plant calendars
  const plantKeywords = ['tomato', 'carrot', 'rose', '🍅', '🥕', '🌹'];
  const hasPlantCalendars = existingCalendars.some(cal => 
    plantKeywords.some(keyword => cal.summary.toLowerCase().includes(keyword))
  );
  if (hasPlantCalendars && warnings.plant) {
    warnings.plant.style.display = 'block';
  }
}

// Setup calendar management modal listeners
function setupCalendarManagementListeners() {
  const manageExistingBtn = document.getElementById('manageExistingBtn');
  const ignoreExistingBtn = document.getElementById('ignoreExistingBtn');
  const cleanupDuplicatesBtn = document.getElementById('cleanupDuplicatesBtn');
  const managementModal = document.getElementById('calendarManagementModal');
  const duplicateCleanupModal = document.getElementById('duplicateCleanupModal');
  const closeManagementModal = document.getElementById('closeManagementModal');
  const closeCleanupModal = document.getElementById('closeCleanupModal');
  const cancelManagementBtn = document.getElementById('cancelManagementBtn');
  const cancelCleanupBtn = document.getElementById('cancelCleanupBtn');
  const continueAfterManagementBtn = document.getElementById('continueAfterManagementBtn');
  const executeCleanupBtn = document.getElementById('executeCleanupBtn');
  
  manageExistingBtn?.addEventListener('click', async () => {
    await showCalendarManagementModal();
  });
  
  cleanupDuplicatesBtn?.addEventListener('click', async () => {
    await showDuplicateCleanupModal();
  });
  
  ignoreExistingBtn?.addEventListener('click', () => {
    document.getElementById('existingCalendarsSection').style.display = 'none';
  });
  
  closeManagementModal?.addEventListener('click', () => {
    managementModal.style.display = 'none';
  });
  
  closeCleanupModal?.addEventListener('click', () => {
    duplicateCleanupModal.style.display = 'none';
  });
  
  cancelManagementBtn?.addEventListener('click', () => {
    managementModal.style.display = 'none';
  });
  
  cancelCleanupBtn?.addEventListener('click', () => {
    duplicateCleanupModal.style.display = 'none';
  });
  
  continueAfterManagementBtn?.addEventListener('click', () => {
    managementModal.style.display = 'none';
    document.getElementById('existingCalendarsSection').style.display = 'none';
  });
  
  executeCleanupBtn?.addEventListener('click', async () => {
    await executeCalendarCleanup();
  });
}

// Show calendar management modal
async function showCalendarManagementModal() {
  try {
    const { detectGardenCalendars } = await import('../../services/GoogleCalendar/GoogleCalendarApi.js');
    const { gardenCalendars } = await detectGardenCalendars();
    
    const managementList = document.getElementById('calendarManagementList');
    const managementModal = document.getElementById('calendarManagementModal');
    
    managementList.innerHTML = gardenCalendars.map(cal => `
      <div class="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-600 rounded-lg">
        <div class="flex-1">
          <div class="font-medium dark:text-white">${cal.summary}</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">ID: ${cal.id}</div>
        </div>
        <div class="flex gap-2">
          <button 
            onclick="selectExistingCalendar('${cal.id}', '${cal.summary.replace(/'/g, "\\'")}')"
            class="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
          >
            ✅ Use This
          </button>
          ${!cal.primary ? `
            <button 
              onclick="deleteExistingCalendar('${cal.id}', '${cal.summary.replace(/'/g, "\\'")}')"
              class="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
            >
              🗑️ Delete
            </button>
          ` : ''}
        </div>
      </div>
    `).join('');
    
    managementModal.style.display = 'flex';
    
  } catch (error) {
    console.error('Failed to show calendar management modal:', error);
    showNotification('Failed to load calendar management', 'error');
  }
}

// Global functions for calendar management (attached to window)
window.selectExistingCalendar = function(calendarId, calendarName) {
  const settings = googleCalendarSettings.load();
  settings.selectedCalendarId = calendarId;
  settings.organizationType = 'existing';
  settings.createdCalendars = [{ id: calendarId, name: calendarName }];
  googleCalendarSettings.save(settings);
  
  showNotification(`Selected calendar: ${calendarName}`, 'success');
  document.getElementById('calendarManagementModal').style.display = 'none';
  document.getElementById('existingCalendarsSection').style.display = 'none';
  document.getElementById('calendarWizard').style.display = 'none';
  updateConnectionStatus();
};

window.deleteExistingCalendar = async function(calendarId, calendarName) {
  if (!confirm(`Are you sure you want to permanently delete "${calendarName}"?\n\nThis will delete the calendar and ALL its events. This action cannot be undone!`)) {
    return;
  }
  
  try {
    const { deleteCalendar } = await import('../../services/GoogleCalendar/GoogleCalendarApi.js');
    await deleteCalendar(calendarId);
    showNotification(`Calendar "${calendarName}" deleted successfully`, 'success');
    
    // Refresh the management modal
    await showCalendarManagementModal();
    
    // Refresh the existing calendars detection
    setTimeout(() => detectAndShowExistingCalendars(), 500);
    
  } catch (error) {
    console.error('Failed to delete calendar:', error);
    showNotification(`Failed to delete calendar: ${error.message}`, 'error');
  }
};

// Load user's own calendars for the wizard
async function loadUserCalendarsForWizard() {
  const existingCalendarSelect = document.getElementById('existingCalendarSelect');
  const { fetchCalendarList } = await import('../../services/GoogleCalendar/GoogleCalendarApi.js');
  
  try {
    existingCalendarSelect.innerHTML = '<option value="">Loading calendars...</option>';
    const calendars = await fetchCalendarList();
    
    existingCalendarSelect.innerHTML = '<option value="">Select a calendar...</option>';
    calendars.forEach(calendar => {
      const option = document.createElement('option');
      option.value = calendar.id;
      option.textContent = `${calendar.primary ? '📧' : '📅'} ${calendar.summary}`;
      existingCalendarSelect.appendChild(option);
    });
  } catch (error) {
    console.error('Failed to load calendars:', error);
    existingCalendarSelect.innerHTML = '<option value="">Failed to load calendars</option>';
  }
}

// Handle calendar setup based on selected organization
async function handleCalendarSetup(organizationType) {
  const { createCalendar, detectGardenCalendars } = await import('../../services/GoogleCalendar/GoogleCalendarApi.js');
  const settings = googleCalendarSettings.load();
  
  // Get existing calendars to avoid duplicates
  const { gardenCalendars } = await detectGardenCalendars();
  
  switch (organizationType) {
    case 'single':
      // Check if a gardening calendar already exists
      const existingGardeningCal = gardenCalendars.find(cal => 
        cal.summary.toLowerCase().includes('gardening') || 
        cal.summary.includes('🌱')
      );
      
      if (existingGardeningCal) {
        const useExisting = confirm(`Found existing gardening calendar: "${existingGardeningCal.summary}"\n\nDo you want to use this existing calendar instead of creating a new one?`);
        if (useExisting) {
          settings.selectedCalendarId = existingGardeningCal.id;
          settings.organizationType = 'single';
          settings.createdCalendars = [{ id: existingGardeningCal.id, name: existingGardeningCal.summary }];
          break;
        }
      }
      
      const gardeningCalendar = await createCalendar({
        summary: '🌱 Gardening Calendar',
        description: 'All your gardening tasks and events in one place'
      });
      settings.selectedCalendarId = gardeningCalendar.id;
      settings.organizationType = 'single';
      settings.createdCalendars = [{ id: gardeningCalendar.id, name: gardeningCalendar.summary }];
      break;
      
    case 'existing':
      const selectedCalendarId = document.getElementById('existingCalendarSelect').value;
      if (!selectedCalendarId) {
        throw new Error('Please select a calendar');
      }
      settings.selectedCalendarId = selectedCalendarId;
      settings.organizationType = 'existing';
      break;
      
    case 'by_type':
      const currentYear = new Date().getFullYear();
      const activityTypes = [
        { name: `🌱 Garden: Planting ${currentYear}`, description: 'All planting activities', keyword: 'planting' },
        { name: `💧 Garden: Watering ${currentYear}`, description: 'Watering schedules and reminders', keyword: 'watering' },
        { name: `🌿 Garden: Fertilizing ${currentYear}`, description: 'Fertilizing and feeding tasks', keyword: 'fertilizing' },
        { name: `🌾 Garden: Harvesting ${currentYear}`, description: 'Harvest times and activities', keyword: 'harvesting' },
        { name: `🔧 Garden: Maintenance ${currentYear}`, description: 'General garden maintenance', keyword: 'maintenance' }
      ];
      
      const typeCalendars = [];
      for (const type of activityTypes) {
        // Check if this type already exists
        const existingTypeCal = gardenCalendars.find(cal => 
          cal.summary.toLowerCase().includes(type.keyword)
        );
        
        if (existingTypeCal) {
          const useExisting = confirm(`Found existing ${type.keyword} calendar: "${existingTypeCal.summary}"\n\nDo you want to use this existing calendar?`);
          if (useExisting) {
            typeCalendars.push({ id: existingTypeCal.id, name: existingTypeCal.summary, type: type.keyword });
            continue;
          }
        }
        
        const calendar = await createCalendar({ summary: type.name, description: type.description });
        typeCalendars.push({ id: calendar.id, name: calendar.summary, type: type.keyword });
      }
      settings.selectedCalendarId = typeCalendars[0].id; // Use first as default
      settings.organizationType = 'by_type';
      settings.createdCalendars = typeCalendars;
      break;
    
    case 'by_template':
      const gardenTemplates = [
        { name: `🌸 Ornamental Garden`, description: 'Ornamental garden tasks and care', keyword: 'ornamental' },
        { name: `🥕 Vegetable Garden`, description: 'Vegetable growing calendar', keyword: 'vegetable' },
        { name: `🌿 Herb Garden`, description: 'Herb cultivation and harvesting', keyword: 'herb' },
        { name: `🍎 Fruit Garden`, description: 'Fruit tree and bush care', keyword: 'fruit' }
      ];
      
      const templateCalendars = [];
      for (const template of gardenTemplates) {
        // Check if this template already exists
        const existingTemplateCal = gardenCalendars.find(cal => 
          cal.summary.toLowerCase().includes(template.keyword)
        );
        
        if (existingTemplateCal) {
          const useExisting = confirm(`Found existing ${template.keyword} garden calendar: "${existingTemplateCal.summary}"\n\nDo you want to use this existing calendar?`);
          if (useExisting) {
            templateCalendars.push({ id: existingTemplateCal.id, name: existingTemplateCal.summary, type: template.keyword });
            continue;
          }
        }
        
        const calendar = await createCalendar({ summary: template.name, description: template.description });
        templateCalendars.push({ id: calendar.id, name: calendar.summary, type: template.keyword });
      }
      settings.selectedCalendarId = templateCalendars[0].id; // Use first as default
      settings.organizationType = 'by_template';
      settings.createdCalendars = templateCalendars;
      break;
    
    case 'by_plant':
      // This is a placeholder. In a real app, you would get this list from the user's plants.
      const plants = [
        { name: `🍅 Tomatoes`, description: 'Tomato planting, care, and harvest schedule', keyword: 'tomato' },
        { name: `🥕 Carrots`, description: 'Carrot growing and harvesting calendar', keyword: 'carrot' },
        { name: `🌹 Roses`, description: 'Rose care, pruning, and blooming schedule', keyword: 'rose' }
      ];
      
      const plantCalendars = [];
      for (const plant of plants) {
        // Check if this plant already exists
        const existingPlantCal = gardenCalendars.find(cal => 
          cal.summary.toLowerCase().includes(plant.keyword)
        );
        
        if (existingPlantCal) {
          const useExisting = confirm(`Found existing ${plant.keyword} calendar: "${existingPlantCal.summary}"\n\nDo you want to use this existing calendar?`);
          if (useExisting) {
            plantCalendars.push({ id: existingPlantCal.id, name: existingPlantCal.summary, type: plant.keyword });
            continue;
          }
        }
        
        const calendar = await createCalendar({ summary: plant.name, description: plant.description });
        plantCalendars.push({ id: calendar.id, name: calendar.summary, type: plant.keyword });
      }
      settings.selectedCalendarId = plantCalendars[0].id; // Use first as default
      settings.organizationType = 'by_plant';
      settings.createdCalendars = plantCalendars;
      break;
    
    default:
      throw new Error('Invalid organization type');
  }
  
  googleCalendarSettings.save(settings);
}

// Show duplicate cleanup modal
async function showDuplicateCleanupModal() {
  try {
    const { detectGardenCalendars } = await import('../../services/GoogleCalendar/GoogleCalendarApi.js');
    const { duplicateGroups } = await detectGardenCalendars();
    const suggestions = generateCleanupSuggestions(duplicateGroups);
    
    const cleanupSuggestionsList = document.getElementById('cleanupSuggestionsList');
    const duplicateCleanupModal = document.getElementById('duplicateCleanupModal');
    
    cleanupSuggestionsList.innerHTML = suggestions.map((suggestion, index) => `
      <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
        <div class="flex items-center space-x-2 mb-3">
          <span class="text-lg">${getCalendarTypeIcon(suggestion.type, suggestion.groupName)}</span>
          <h4 class="font-medium dark:text-white">${suggestion.groupName}</h4>
          <span class="text-xs px-2 py-1 bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200 rounded">
            ${suggestion.delete.length} to delete
          </span>
        </div>
        
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">${suggestion.reason}</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded p-3">
            <h5 class="font-medium text-green-800 dark:text-green-200 mb-2">✅ Keep This Calendar</h5>
            <div class="text-sm">
              <div class="font-medium dark:text-white">${suggestion.keep.summary}</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">${suggestion.keep.id}</div>
            </div>
          </div>
          
          <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded p-3">
            <h5 class="font-medium text-red-800 dark:text-red-200 mb-2">🗑️ Delete These Calendars</h5>
            <div class="space-y-1">
              ${suggestion.delete.map(cal => `
                <div class="text-sm">
                  <div class="font-medium dark:text-white">${cal.summary}</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">${cal.id}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        
        <div class="mt-3 flex justify-end">
          <label class="flex items-center space-x-2">
            <input type="checkbox" name="cleanupAction" value="${index}" checked class="rounded">
            <span class="text-sm dark:text-white">Include in cleanup</span>
          </label>
        </div>
      </div>
    `).join('');
    
    duplicateCleanupModal.style.display = 'flex';
    
  } catch (error) {
    console.error('Failed to show duplicate cleanup modal:', error);
    showNotification('Failed to load cleanup suggestions', 'error');
  }
}

// Execute calendar cleanup
async function executeCalendarCleanup() {
  const executeBtn = document.getElementById('executeCleanupBtn');
  const selectedActions = document.querySelectorAll('input[name="cleanupAction"]:checked');
  
  if (selectedActions.length === 0) {
    showNotification('No cleanup actions selected', 'warning');
    return;
  }
  
  if (!confirm(`Are you sure you want to delete ${Array.from(selectedActions).length} duplicate calendar groups?\n\nThis action cannot be undone!`)) {
    return;
  }
  
  executeBtn.disabled = true;
  executeBtn.textContent = '🧹 Cleaning up...';
  
  try {
    const { detectGardenCalendars, deleteCalendar } = await import('../../services/GoogleCalendar/GoogleCalendarApi.js');
    const { duplicateGroups } = await detectGardenCalendars();
    const suggestions = generateCleanupSuggestions(duplicateGroups);
    
    let deletedCount = 0;
    let errorCount = 0;
    
    for (const checkbox of selectedActions) {
      const suggestionIndex = parseInt(checkbox.value);
      const suggestion = suggestions[suggestionIndex];
      
      for (const calendarToDelete of suggestion.delete) {
        try {
          await deleteCalendar(calendarToDelete.id);
          deletedCount++;
        } catch (error) {
          console.error(`Failed to delete calendar ${calendarToDelete.summary}:`, error);
          errorCount++;
        }
      }
    }
    
    showNotification(`Cleanup complete! Deleted ${deletedCount} calendars${errorCount > 0 ? `, ${errorCount} errors` : ''}`, 'success');
    
    // Close modal and refresh
    document.getElementById('duplicateCleanupModal').style.display = 'none';
    setTimeout(() => detectAndShowExistingCalendars(), 500);
    
  } catch (error) {
    console.error('Failed to execute cleanup:', error);
    showNotification(`Cleanup failed: ${error.message}`, 'error');
  } finally {
    executeBtn.disabled = false;
    executeBtn.textContent = '🧹 Execute Cleanup';
  }
}
