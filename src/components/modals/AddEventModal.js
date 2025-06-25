import { openDB } from 'idb';
import { t } from '../../core/i18n/index.js';
import { 
  getPlantRegistry, 
  PLANT_CATEGORIES, 
  addPlanting, 
  GROWING_ENVIRONMENTS, 
  SEASONAL_REGIONS, 
  getPlantDataForEnvironment, 
  validatePlantingDate 
} from '../../core/db/index.js';
import { getPhaseEmoji, getPhaseCheckpoints } from '../../core/db/utils.js';
import { formatDateForGerman } from '../../utils/dateUtils.js';
import { showButtonSpinner, hideButtonSpinner } from '../ui/LoadingSpinner.js';

export async function showAddEventModal(date, preselectedType = null) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
  
  // Create category options with translations
  const categoryOptions = PLANT_CATEGORIES.map(category => {
    const translatedCategory = t(`plant.category.${category.toLowerCase().replace(/\s+/g, '_').replace(/&/g, '').replace(/\s/g, '')}`) || category;
    return `<option value="${category}">${translatedCategory}</option>`;
  }).join('');

  // Create environment options with translations
  const environmentOptions = Object.entries(GROWING_ENVIRONMENTS).map(([key, value]) => {
    const translatedEnv = t(`environment.${value}`);
    return `<option value="${value}">${translatedEnv}</option>`;
  }).join('');

  // Create region options with translations
  const regionOptions = Object.entries(SEASONAL_REGIONS).map(([key, value]) => {
    const translatedRegion = t(`region.${value}`);
    return `<option value="${value}">${translatedRegion}</option>`;
  }).join('');

  const eventTypeValue = preselectedType === 'planting' ? 'planting' : 'custom';

  // Format the date properly for the input field
  const formattedDate = formatDateForGerman(date);

  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <h2 class="text-xl font-semibold mb-4 dark:text-white">${t('modal.add_event.title')}</h2>
      <form id="eventForm" class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1 dark:text-gray-200">${t('modal.event_type.label')}</label>
          <select name="eventType" id="eventTypeSelect" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <option value="custom" ${eventTypeValue === 'custom' ? 'selected' : ''}>${t('modal.event_type.custom')}</option>
            <option value="planting" ${eventTypeValue === 'planting' ? 'selected' : ''}>${t('modal.event_type.planting')}</option>
          </select>
        </div>
        
        <div id="customFields" style="display: ${eventTypeValue === 'planting' ? 'none' : 'block'};">
          <div>
            <label class="block text-sm font-medium mb-1 dark:text-gray-200">${t('modal.title.label')}</label>
            <input type="text" name="title" id="titleField" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" ${eventTypeValue === 'custom' ? 'required' : ''}>
          </div>
          <div>
            <label class="block text-sm font-medium mb-1 dark:text-gray-200">${t('modal.type.label')}</label>
            <select name="type" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <option value="maintenance">${t('task.maintenance')}</option>
              <option value="watering">${t('task.watering')}</option>
              <option value="fertilizing">${t('task.fertilizing')}</option>
            </select>
          </div>
        </div>
        
        <div id="plantingFields" style="display: ${eventTypeValue === 'planting' ? 'block' : 'none'};">
          <!-- Environment and Region Row -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="block text-sm font-medium mb-1 dark:text-gray-200">${t('modal.environment.label')}</label>
              <select name="environment" id="environmentSelect" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                ${environmentOptions}
              </select>
            </div>
            <div id="regionField" style="display: none;">
              <label class="block text-sm font-medium mb-1 dark:text-gray-200">${t('modal.region.label')}</label>
              <select name="region" id="regionSelect" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                ${regionOptions}
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1 dark:text-gray-200">${t('modal.date.label')}</label>
              <input type="date" name="date" value="${formattedDate}" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" required>
            </div>
          </div>
          
          <!-- Plant Selection Row -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-1 dark:text-gray-200">${t('modal.plant_category.label')}</label>
              <select name="plantCategory" id="plantCategorySelect" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <option value="">${t('modal.plant_category.all')}</option>
                ${categoryOptions}
              </select>
            </div>
            <div class="plant-type-field">
              <label class="block text-sm font-medium mb-1 dark:text-gray-200">${t('modal.plant_type.label')}</label>
              <select name="plantType" id="plantTypeSelect" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <option value="">${t('modal.plant_type.select')}</option>
                ${Array.from(getPlantRegistry().entries()).map(([value, plant]) => 
                  `<option value="${value}" data-category="${plant.category}">${plant.name}${plant.legalNote ? ' ⚠️' : ''}</option>`
                ).join('')}
              </select>
            </div>
          </div>
          
          <!-- Name and Location Row -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-1 dark:text-gray-200">${t('modal.custom_name.label')}</label>
              <input type="text" name="customName" id="customNameField" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">${t('modal.custom_name.help')}</p>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1 dark:text-gray-200">${t('modal.location.label')}</label>
              <input type="text" name="location" id="locationField" value="Default Garden" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            </div>
          </div>
          
          <div id="seasonalWarning" class="hidden">
            <div id="seasonalMessage" class="font-medium"></div>
            <div id="seasonalDetails" class="text-sm mt-1"></div>
          </div>
          
          <div id="plantInfo" class="p-3 bg-blue-50 dark:bg-blue-900 rounded border border-blue-200 dark:border-blue-700">
            <!-- Plant information will be populated here -->
          </div>
          
          <div id="phaseDurationSection" style="display: none;">
            <h4 class="font-medium mb-2 dark:text-white">${t('modal.phase_duration.title')}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">${t('modal.phase_duration.help')}</p>
            <div id="phaseInputs" class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <!-- Phase duration inputs will be populated here -->
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">${t('modal.phase_duration.tip')}</p>
          </div>
          
          <div>
            <h4 class="font-medium mb-3 dark:text-white">${t('modal.reminders.title')}</h4>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Left Column -->
              <div class="space-y-3">
                <div class="flex items-center">
                  <input type="checkbox" id="enableWatering" name="enableWatering" checked class="mr-2">
                  <label for="enableWatering" class="text-sm dark:text-gray-200">${t('modal.reminders.watering')}</label>
                </div>
                <div id="wateringOptions" class="ml-6 space-y-2">
                  <div>
                    <label class="block text-xs text-gray-600 dark:text-gray-400 mb-1">${t('modal.reminders.watering_interval')}</label>
                    <select name="wateringInterval" class="w-full p-1 text-sm border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <option value="1">${t('modal.interval.daily')}</option>
                      <option value="2">${t('modal.interval.every_2_days')}</option>
                      <option value="3" selected>${t('modal.interval.every_3_days')}</option>
                      <option value="4">${t('modal.interval.every_4_days')}</option>
                      <option value="7">${t('modal.interval.weekly')}</option>
                    </select>
                  </div>
                </div>
                
                <div class="flex items-center">
                  <input type="checkbox" id="enableFertilizing" name="enableFertilizing" checked class="mr-2">
                  <label for="enableFertilizing" class="text-sm dark:text-gray-200">${t('modal.reminders.fertilizing')}</label>
                </div>
                <div id="fertilizingOptions" class="ml-6 space-y-2">
                  <div>
                    <label class="block text-xs text-gray-600 dark:text-gray-400 mb-1">${t('modal.reminders.fertilizing_interval')}</label>
                    <select name="fertilizingInterval" class="w-full p-1 text-sm border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <option value="7">${t('modal.interval.weekly')}</option>
                      <option value="14" selected>${t('modal.interval.every_2_weeks')}</option>
                      <option value="21">${t('modal.interval.every_3_weeks')}</option>
                      <option value="30">${t('modal.interval.monthly')}</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-xs text-gray-600 dark:text-gray-400 mb-1">${t('modal.reminders.fertilizing_delay')}</label>
                    <select name="fertilizingDelay" class="w-full p-1 text-sm border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <option value="0">${t('modal.interval.immediately')}</option>
                      <option value="7" selected>${t('modal.interval.1_week')}</option>
                      <option value="14">${t('modal.interval.2_weeks')}</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <!-- Right Column -->
              <div class="space-y-3">
                <div class="flex items-center">
                  <input type="checkbox" id="enablePhaseReminders" name="enablePhaseReminders" checked class="mr-2">
                  <label for="enablePhaseReminders" class="text-sm dark:text-gray-200">${t('modal.reminders.phase_transitions')}</label>
                </div>
                
                <div class="flex items-center">
                  <input type="checkbox" id="enableWeeklyChecks" name="enableWeeklyChecks" checked class="mr-2">
                  <label for="enableWeeklyChecks" class="text-sm dark:text-gray-200">${t('modal.reminders.weekly_checks')}</label>
                </div>
                
                <div class="flex items-center">
                  <input type="checkbox" id="enableHarvestReminder" name="enableHarvestReminder" checked class="mr-2">
                  <label for="enableHarvestReminder" class="text-sm dark:text-gray-200">${t('modal.reminders.harvest')}</label>
                </div>
                
                <div class="flex items-center">
                  <input type="checkbox" id="enableGoogleCalendarSync" name="enableGoogleCalendarSync" checked class="mr-2">
                  <label for="enableGoogleCalendarSync" class="text-sm dark:text-gray-200">${t('modal.reminders.google_sync')}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="customDescription" style="display: ${eventTypeValue === 'planting' ? 'none' : 'block'};">
          <label class="block text-sm font-medium mb-1 dark:text-gray-200">${t('modal.description.label')}</label>
          <textarea name="description" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" rows="3"></textarea>
        </div>
        
        <div class="flex justify-end space-x-2 pt-4">
          <button type="button" id="cancelBtn" class="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-400 dark:hover:bg-gray-500">
            ${t('btn.cancel')}
          </button>
          <button type="submit" id="saveBtn" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            ${t('btn.save')}
          </button>
        </div>
      </form>
    </div>
  `;

  document.body.appendChild(modal);

  // Initialize event listeners and form handling
  initializeAddEventModalHandlers(modal);
}

function initializeAddEventModalHandlers(modal) {
  // Get form elements
  const form = document.getElementById('eventForm');
  const eventTypeSelect = document.getElementById('eventTypeSelect');
  const environmentSelect = document.getElementById('environmentSelect');
  const regionSelect = document.getElementById('regionSelect');
  const regionField = document.getElementById('regionField');
  const plantCategorySelect = document.getElementById('plantCategorySelect');
  const plantTypeSelect = document.getElementById('plantTypeSelect');
  const customNameField = document.getElementById('customNameField');
  const titleField = document.getElementById('titleField');
  const locationField = document.getElementById('locationField');
  const cancelBtn = document.getElementById('cancelBtn');
  const saveBtn = document.getElementById('saveBtn');
  const seasonalWarning = document.getElementById('seasonalWarning');
  const seasonalMessage = document.getElementById('seasonalMessage');
  const seasonalDetails = document.getElementById('seasonalDetails');

  // Checkbox elements
  const enableWatering = document.getElementById('enableWatering');
  const enableFertilizing = document.getElementById('enableFertilizing');
  const wateringOptions = document.getElementById('wateringOptions');
  const fertilizingOptions = document.getElementById('fertilizingOptions');

  // Add event listeners
  eventTypeSelect.addEventListener('change', function() {
    togglePlantingFields(this.value);
  });

  environmentSelect.addEventListener('change', function() {
    updateEnvironmentFields(this.value);
    updatePlantInfo();
  });

  plantCategorySelect.addEventListener('change', function() {
    updatePlantOptions(this.value);
  });

  plantTypeSelect.addEventListener('change', function() {
    updatePlantInfo();
    updatePhaseInputs();
    updateCustomNamePlaceholder();
    checkSeasonalTiming();
  });

  // Toggle watering options visibility
  enableWatering.addEventListener('change', function() {
    wateringOptions.style.display = this.checked ? 'block' : 'none';
  });

  // Toggle fertilizing options visibility
  enableFertilizing.addEventListener('change', function() {
    fertilizingOptions.style.display = this.checked ? 'block' : 'none';
  });

  // Cancel button
  cancelBtn.addEventListener('click', function() {
    modal.remove();
  });

  // Form submission
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    const eventType = formData.get('eventType');
    
    const originalText = saveBtn.textContent;
    const spinnerId = showButtonSpinner(saveBtn, originalText, t('modal.saving'));
    
    try {
      if (eventType === 'planting') {
        await handlePlantingSubmission(formData);
      } else {
        await handleCustomEventSubmission(formData);
      }
      
      modal.remove();
    } catch (error) {
      console.error('Error saving event:', error);
      showNotification(t('notification.error_saving'), 'error');
    } finally {
      hideButtonSpinner(saveBtn, spinnerId);
    }
  });

  // Initialize form state
  togglePlantingFields(eventTypeSelect.value);
  updateEnvironmentFields(environmentSelect.value);
  updatePlantOptions(plantCategorySelect.value);
  updatePlantInfo();
}

// Helper functions will be implemented in the next part
function togglePlantingFields(value) {
  const customFields = document.getElementById('customFields');
  const plantingFields = document.getElementById('plantingFields');
  const customDescription = document.getElementById('customDescription');
  const titleField = document.getElementById('titleField');
  
  if (value === 'planting') {
    customFields.style.display = 'none';
    plantingFields.style.display = 'block';
    customDescription.style.display = 'none';
    titleField.removeAttribute('required');
  } else {
    customFields.style.display = 'block';
    plantingFields.style.display = 'none';
    customDescription.style.display = 'block';
    titleField.setAttribute('required', 'required');
  }
}

function updateEnvironmentFields(environment) {
  const regionField = document.getElementById('regionField');
  
  if (environment === 'outdoor') {
    regionField.style.display = 'block';
  } else {
    regionField.style.display = 'none';
  }
}

function updatePlantOptions(category) {
  const plantTypeSelect = document.getElementById('plantTypeSelect');
  const options = plantTypeSelect.querySelectorAll('option[data-category]');
  
  options.forEach(option => {
    if (!category || option.dataset.category === category) {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
    }
  });
  
  // Reset selection
  plantTypeSelect.value = '';
}

function updatePlantInfo() {
  const plantTypeSelect = document.getElementById('plantTypeSelect');
  const plantInfo = document.getElementById('plantInfo');
  const environmentSelect = document.getElementById('environmentSelect');
  
  if (!plantTypeSelect.value) {
    plantInfo.innerHTML = '<p class="text-gray-500 dark:text-gray-400">Select a plant to see information</p>';
    return;
  }
  
  const plantData = getPlantDataForEnvironment(plantTypeSelect.value, environmentSelect.value);
  if (!plantData) {
    plantInfo.innerHTML = '<p class="text-red-500">Plant data not found</p>';
    return;
  }
  
  const phases = Object.entries(plantData.phases).map(([phase, data]) => {
    const emoji = getPhaseEmoji(phase);
    return `${emoji} ${phase}: ${data.days} days`;
  }).join('<br>');
  
  plantInfo.innerHTML = `
    <h4 class="font-medium mb-2">${plantData.name}</h4>
    <p class="text-sm mb-2"><strong>Category:</strong> ${plantData.category}</p>
    <p class="text-sm mb-2"><strong>Total Duration:</strong> ${Object.values(plantData.phases).reduce((sum, phase) => sum + phase.days, 0)} days</p>
    <div class="text-sm">
      <strong>Phases:</strong><br>
      ${phases}
    </div>
  `;
}

function updatePhaseInputs() {
  const plantTypeSelect = document.getElementById('plantTypeSelect');
  const environmentSelect = document.getElementById('environmentSelect');
  const phaseDurationSection = document.getElementById('phaseDurationSection');
  const phaseInputs = document.getElementById('phaseInputs');
  
  if (!plantTypeSelect.value) {
    phaseDurationSection.style.display = 'none';
    return;
  }
  
  const plantData = getPlantDataForEnvironment(plantTypeSelect.value, environmentSelect.value);
  if (!plantData || !plantData.phases) {
    phaseDurationSection.style.display = 'none';
    return;
  }
  
  // Check if this is an autoflower (no phase editing needed)
  const isAutoflower = plantTypeSelect.value.includes('autoflower');
  if (isAutoflower) {
    // Autoflowers don't need phase editing - they flower automatically
    phaseInputs.innerHTML = `
      <div class="col-span-full p-3 bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded">
        <div class="flex items-start">
          <span class="text-blue-600 dark:text-blue-400 mr-2">🌱</span>
          <div>
            <p class="text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">
              Autoflower - Automatische Blüte
            </p>
            <p class="text-xs text-blue-700 dark:text-blue-300">
              Autoflowers blühen automatisch unabhängig vom Lichtzyklus. Phasen können nicht angepasst werden.
            </p>
          </div>
        </div>
      </div>
    `;
  } else if (environmentSelect.value === 'outdoor') {
    // Outdoor cannabis: Only flowering time is editable
    const floweringPhase = plantData.phases.flowering;
    if (floweringPhase) {
      phaseInputs.innerHTML = `
        <div class="col-span-full p-3 bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded mb-3">
          <div class="flex items-start">
            <span class="text-yellow-600 dark:text-yellow-400 mr-2">🌱</span>
            <div>
              <p class="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                Outdoor - Natürliche Jahreszeiten
              </p>
              <p class="text-xs text-yellow-700 dark:text-yellow-300">
                Phasen werden durch natürliche Jahreszeiten bestimmt. Nur die Blütezeit kann je nach Sorte angepasst werden.
              </p>
            </div>
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">🌸 Blütezeit (je nach Sorte 6-12 Wochen)</label>
          <input type="number" name="phase_flowering" value="${floweringPhase.days}" min="42" max="84" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Standard: ${floweringPhase.days} Tage (${Math.round(floweringPhase.days/7)} Wochen)</p>
        </div>
      `;
    }
  } else {
    // Indoor or greenhouse: All phases editable
    phaseInputs.innerHTML = Object.entries(plantData.phases).map(([phase, data]) => `
      <div>
        <label class="block text-sm font-medium mb-1">${getPhaseEmoji(phase)} ${phase}</label>
        <input type="number" name="phase_${phase}" value="${data.days}" min="1" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      </div>
    `).join('');
  }
  
  phaseDurationSection.style.display = 'block';
}

function updateCustomNamePlaceholder() {
  const plantTypeSelect = document.getElementById('plantTypeSelect');
  const customNameField = document.getElementById('customNameField');
  
  if (plantTypeSelect.value) {
    const plantData = getPlantDataForEnvironment(plantTypeSelect.value, 'indoor');
    if (plantData) {
      customNameField.placeholder = `e.g., "My ${plantData.name}"`;
    }
  } else {
    customNameField.placeholder = '';
  }
}

function checkSeasonalTiming() {
  const plantTypeSelect = document.getElementById('plantTypeSelect');
  const environmentSelect = document.getElementById('environmentSelect');
  const dateInput = document.querySelector('input[name="date"]');
  const seasonalWarning = document.getElementById('seasonalWarning');
  const seasonalMessage = document.getElementById('seasonalMessage');
  const seasonalDetails = document.getElementById('seasonalDetails');
  
  if (!plantTypeSelect.value || !dateInput.value) {
    seasonalWarning.classList.add('hidden');
    return;
  }
  
  const validation = validatePlantingDate(plantTypeSelect.value, environmentSelect.value, dateInput.value);
  
  if (!validation.isValid) {
    seasonalWarning.classList.remove('hidden');
    seasonalMessage.textContent = validation.message;
    seasonalDetails.textContent = validation.details || '';
  } else {
    seasonalWarning.classList.add('hidden');
  }
}

async function handlePlantingSubmission(formData) {
  const plantType = formData.get('plantType');
  const startDate = formData.get('date');
  const location = formData.get('location');
  const customName = formData.get('customName');
  const environment = formData.get('environment');
  
  // Collect reminder options
  const reminderOptions = {
    watering: {
      enabled: formData.get('enableWatering') === 'on',
      interval: parseInt(formData.get('wateringInterval')) || 3
    },
    fertilizing: {
      enabled: formData.get('enableFertilizing') === 'on',
      interval: parseInt(formData.get('fertilizingInterval')) || 14,
      delay: parseInt(formData.get('fertilizingDelay')) || 7
    },
    phaseReminders: formData.get('enablePhaseReminders') === 'on',
    weeklyChecks: formData.get('enableWeeklyChecks') === 'on',
    harvestReminder: formData.get('enableHarvestReminder') === 'on',
    googleCalendarSync: formData.get('enableGoogleCalendarSync') === 'on'
  };
  
  // Collect custom phase durations only if not using natural timing
  const customPhaseDurations = {};
  const plantData = getPlantDataForEnvironment(plantType, environment);
  if (plantData && plantData.phases) {
    const isAutoflower = plantType.includes('autoflower');
    
    if (isAutoflower) {
      // Autoflowers: No custom phase durations needed
      // Phases are automatic and cannot be adjusted
    } else if (environment === 'outdoor') {
      // Outdoor cannabis: Only flowering time can be adjusted
      const floweringValue = formData.get('phase_flowering');
      if (floweringValue) {
        customPhaseDurations.flowering = parseInt(floweringValue);
      }
    } else {
      // Indoor or greenhouse: All phases can be adjusted
      Object.keys(plantData.phases).forEach(phase => {
        const value = formData.get(`phase_${phase}`);
        if (value) {
          customPhaseDurations[phase] = parseInt(value);
        }
      });
    }
  }
  
  await addPlanting(plantType, startDate, location, customName, reminderOptions, customPhaseDurations);
  showNotification(t('notification.planting_added'), 'success');
  
  // Refresh calendar
  document.dispatchEvent(new CustomEvent('refreshCalendar'));
}

async function handleCustomEventSubmission(formData) {
  const title = formData.get('title');
  const type = formData.get('type');
  const description = formData.get('description');
  const date = formData.get('date');
  
  const db = await openDB('gardening-calendar', 5);
  await db.add('events', {
    title,
    type,
    description,
    date,
    createdAt: new Date().toISOString()
  });
  
  showNotification(t('notification.event_added'), 'success');
  
  // Refresh calendar
  document.dispatchEvent(new CustomEvent('refreshCalendar'));
}

function showNotification(message, type = 'info') {
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
