import { t } from '../../../core/i18n/index.js';
import { formatDate } from '../../../utils/dateUtils.js';
import { 
  createEnvironmentOptions, 
  createRegionOptions, 
  createCategoryOptions, 
  createPlantOptions,
  getCustomPhaseDurations 
} from './PlantingFormLogic.js';
import { initializePlantingFormHandlers } from './PlantingFormHandlers.js';
import { autoDetectLocation, CLIMATE_ZONE_DESCRIPTIONS } from '../../../core/db/plants/categories.js';
import { getDefaultEnvironment } from './PlantingFormUtils.js';

/**
 * PlantingFormUI - Contains UI creation and data extraction functions
 */

export function createPlantingForm(date, preselectedPlant = null) {
  const formContainer = document.createElement('form');
  formContainer.id = 'plantingForm';
  formContainer.className = 'space-y-4';
  
  // Create form elements
  const environmentOptions = createEnvironmentOptions();
  const regionOptions = createRegionOptions();
  const categoryOptions = createCategoryOptions();
  const plantOptions = createPlantOptions(getDefaultEnvironment()); // Use utility function
  
  const formattedDate = formatDate(date);
  
  formContainer.innerHTML = `
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
        <div class="relative">
          <select name="region" id="regionSelect" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            ${regionOptions}
          </select>
          <button type="button" id="autoDetectBtn" class="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 text-sm">
            🌍 Auto
          </button>
        </div>
        <div id="regionDescription" class="text-xs text-gray-500 dark:text-gray-400 mt-1 hidden"></div>
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
          ${plantOptions}
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
    
    <div id="plantInfo" style="display:none;" class="p-3 bg-blue-50 dark:bg-blue-900 rounded border border-blue-200 dark:border-blue-700">
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
    
    <div id="phaseCareSection" class="mt-4" style="display:none;">
      <h4 class="font-medium mb-3 dark:text-white">${t('modal.reminders.phase_care')}</h4>
      <div class="flex gap-4 mb-2">
        <button type="button" id="markAllWatering" class="px-2 py-1 rounded bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 text-xs">${t('modal.reminders.mark_all_watering')}</button>
        <button type="button" id="markAllFertilizing" class="px-2 py-1 rounded bg-green-200 dark:bg-green-700 text-green-900 dark:text-green-100 text-xs">${t('modal.reminders.mark_all_fertilizing')}</button>
      </div>
      <div id="phaseCareInputs" class="rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 p-3 space-y-2"></div>
    </div>
    
    <div>
      <h4 class="font-medium mb-3 dark:text-white">${t('modal.reminders.title')}</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Right Column -->
        <div class="space-y-3">
          <div class="flex items-center">
            <input type="checkbox" id="enablePhaseReminders" name="enablePhaseReminders" class="mr-2">
            <label for="enablePhaseReminders" class="text-sm dark:text-gray-200">${t('modal.reminders.phase_transitions')}</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="enableWeeklyChecks" name="enableWeeklyChecks" class="mr-2">
            <label for="enableWeeklyChecks" class="text-sm dark:text-gray-200">${t('modal.reminders.weekly_checks')}</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="enableHarvestReminder" name="enableHarvestReminder" class="mr-2">
            <label for="enableHarvestReminder" class="text-sm dark:text-gray-200">${t('modal.reminders.harvest')}</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="enableGoogleCalendarSync" name="enableGoogleCalendarSync" class="mr-2">
            <label for="enableGoogleCalendarSync" class="text-sm dark:text-gray-200">${t('modal.reminders.google_sync')}</label>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Initialize form handlers
  initializePlantingFormHandlers(formContainer);
  
  // Add auto-detection functionality
  initializeAutoDetection(formContainer);
  
  return formContainer;
}

/**
 * Initialize auto-detection functionality
 * @param {HTMLElement} formContainer - Form container element
 */
function initializeAutoDetection(formContainer) {
  const autoDetectBtn = formContainer.querySelector('#autoDetectBtn');
  const regionSelect = formContainer.querySelector('#regionSelect');
  const regionDescription = formContainer.querySelector('#regionDescription');
  
  if (autoDetectBtn && regionSelect) {
    autoDetectBtn.addEventListener('click', async () => {
      const originalText = autoDetectBtn.textContent;
      autoDetectBtn.textContent = '🔍 Erkennen...';
      autoDetectBtn.disabled = true;
      
      try {
        const location = await autoDetectLocation();
        
        if (location.success) {
          regionSelect.value = location.climateZone;
          regionDescription.innerHTML = `
            <div class="p-2 bg-blue-50 dark:bg-blue-900 rounded border border-blue-200 dark:border-blue-700">
              <p class="text-xs"><strong>Erkannt:</strong> ${location.city}, ${location.countryName}</p>
              <p class="text-xs">${location.climateInfo}</p>
            </div>
          `;
          regionDescription.classList.remove('hidden');
          
          // Trigger change event to update plant options
          regionSelect.dispatchEvent(new Event('change'));
        } else {
          regionDescription.innerHTML = `
            <div class="p-2 bg-yellow-50 dark:bg-yellow-900 rounded border border-yellow-200 dark:border-yellow-700">
              <p class="text-xs text-yellow-700 dark:text-yellow-300">Standort konnte nicht automatisch erkannt werden. Bitte wählen Sie manuell.</p>
            </div>
          `;
          regionDescription.classList.remove('hidden');
        }
      } catch (error) {
        console.error('Auto-detection error:', error);
        regionDescription.innerHTML = `
          <div class="p-2 bg-red-50 dark:bg-red-900 rounded border border-red-200 dark:border-red-700">
            <p class="text-xs text-red-700 dark:text-red-300">Fehler bei der Standorterkennung. Bitte wählen Sie manuell.</p>
          </div>
        `;
        regionDescription.classList.remove('hidden');
      } finally {
        autoDetectBtn.textContent = originalText;
        autoDetectBtn.disabled = false;
      }
    });
  }
  
  // Show region description when region changes
  if (regionSelect && regionDescription) {
    regionSelect.addEventListener('change', () => {
      const selectedValue = regionSelect.value;
      const description = CLIMATE_ZONE_DESCRIPTIONS[selectedValue];
      
      if (description) {
        regionDescription.innerHTML = `
          <div class="p-2 bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
            <p class="text-xs"><strong>${description.name}</strong></p>
            <p class="text-xs">${description.description}</p>
            <p class="text-xs"><em>Beispiele:</em> ${description.examples}</p>
          </div>
        `;
        regionDescription.classList.remove('hidden');
      } else {
        regionDescription.classList.add('hidden');
      }
    });
  }
}

export function getPlantingFormData(formContainer) {
  const formData = new FormData(formContainer);
  
  return {
    plantType: formData.get('plantType'),
    startDate: formData.get('date'),
    location: formData.get('location'),
    customName: formData.get('customName'),
    environment: formData.get('environment'),
    region: formData.get('region'),
    reminderOptions: {
      phaseReminders: formData.get('enablePhaseReminders') === 'on',
      weeklyChecks: formData.get('enableWeeklyChecks') === 'on',
      harvestReminder: formData.get('enableHarvestReminder') === 'on',
      googleCalendarSync: formData.get('enableGoogleCalendarSync') === 'on'
    },
    customPhaseDurations: getCustomPhaseDurations(formData)
  };
}
