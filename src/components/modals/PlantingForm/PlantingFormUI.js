import { t } from '../../../core/i18n/index.js';
import { formatDateForGerman } from '../../../utils/dateUtils.js';
import { 
  createEnvironmentOptions, 
  createRegionOptions, 
  createCategoryOptions, 
  createPlantOptions,
  getCustomPhaseDurations 
} from './PlantingFormLogic.js';
import { initializePlantingFormHandlers } from './PlantingFormHandlers.js';

/**
 * PlantingFormUI - Contains UI creation and data extraction functions
 */

export function createPlantingForm(date, preselectedPlant = null) {
  const formContainer = document.createElement('div');
  formContainer.id = 'plantingFields';
  formContainer.className = 'space-y-4';
  
  // Create form elements
  const environmentOptions = createEnvironmentOptions();
  const regionOptions = createRegionOptions();
  const categoryOptions = createCategoryOptions();
  const plantOptions = createPlantOptions('indoor'); // Default to indoor
  
  const formattedDate = formatDateForGerman(date);
  
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
        <button type="button" id="markAllWatering" class="px-2 py-1 rounded bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 text-xs">Alle Gieß-Erinnerungen an/aus</button>
        <button type="button" id="markAllFertilizing" class="px-2 py-1 rounded bg-green-200 dark:bg-green-700 text-green-900 dark:text-green-100 text-xs">Alle Dünger-Erinnerungen an/aus</button>
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
  
  return formContainer;
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
