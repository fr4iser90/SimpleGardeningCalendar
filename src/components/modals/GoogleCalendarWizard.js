import { googleCalendarSettings } from '../../services/GoogleCalendar/GoogleCalendarSettings.js';
import { updateConnectionStatus } from './GoogleCalendarSetupModal.js';

// Render the calendar wizard HTML section
export function renderCalendarWizardHTML(settings) {
  return `
    <!-- Calendar Organization Wizard -->
    <div id="calendarWizard" class="space-y-4" style="display: none;">
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
  `;
}

// Setup Calendar Organization Wizard Event Listeners
export function setupCalendarWizardEventListeners() {
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
}

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
    const { createCalendar } = await import('../../services/GoogleCalendar/GoogleCalendarApi.js');
    const settings = googleCalendarSettings.load();
  
  switch (organizationType) {
    case 'single':
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
        { name: `🌱 Garden: Planting ${currentYear}`, description: 'All planting activities' },
        { name: `💧 Garden: Watering ${currentYear}`, description: 'Watering schedules and reminders' },
        { name: `🌿 Garden: Fertilizing ${currentYear}`, description: 'Fertilizing and feeding tasks' },
        { name: `🌾 Garden: Harvesting ${currentYear}`, description: 'Harvest times and activities' },
        { name: `🔧 Garden: Maintenance ${currentYear}`, description: 'General garden maintenance' }
      ];
      const typeCalendars = [];
      for (const type of activityTypes) {
        const calendar = await createCalendar({ summary: type.name, description: type.description });
        typeCalendars.push({ id: calendar.id, name: calendar.summary, type: type.name.split(' ')[2].toLowerCase() });
      }
      settings.selectedCalendarId = typeCalendars[0].id; // Use first as default
      settings.organizationType = 'by_type';
      settings.createdCalendars = typeCalendars;
      break;
    
    case 'by_template':
      const gardenTemplates = [
        { name: `🌸 Ornamental Garden`, description: 'Ornamental garden tasks and care' },
        { name: `🥕 Vegetable Garden`, description: 'Vegetable growing calendar' },
        { name: `🌿 Herb Garden`, description: 'Herb cultivation and harvesting' },
        { name: `🍎 Fruit Garden`, description: 'Fruit tree and bush care' }
      ];
      const templateCalendars = [];
      for (const template of gardenTemplates) {
        const calendar = await createCalendar({ summary: template.name, description: template.description });
        templateCalendars.push({ id: calendar.id, name: calendar.summary, type: template.name.split(' ')[1].toLowerCase() });
      }
      settings.selectedCalendarId = templateCalendars[0].id; // Use first as default
      settings.organizationType = 'by_template';
      settings.createdCalendars = templateCalendars;
      break;
    
    case 'by_plant':
      // This is a placeholder. In a real app, you would get this list from the user's plants.
      const plants = [
        { name: `🍅 Tomatoes`, description: 'Tomato planting, care, and harvest schedule' },
        { name: `🥕 Carrots`, description: 'Carrot growing and harvesting calendar' },
        { name: `🌹 Roses`, description: 'Rose care, pruning, and blooming schedule' }
      ];
      const plantCalendars = [];
      for (const plant of plants) {
        const calendar = await createCalendar({ summary: plant.name, description: plant.description });
        plantCalendars.push({ id: calendar.id, name: calendar.summary, type: plant.name.split(' ')[1].toLowerCase() });
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
