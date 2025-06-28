import { 
  updateEnvironmentFields, 
  updatePlantOptions, 
  updatePlantInfo, 
  updatePhaseInputs, 
  updateCustomNamePlaceholder, 
  checkSeasonalTiming 
} from './PlantingFormLogic.js';

/**
 * PlantingFormHandlers - Contains all event handling logic for the planting form
 */

export function initializePlantingFormHandlers(formContainer) {
  const environmentSelect = formContainer.querySelector('#environmentSelect');
  const regionSelect = formContainer.querySelector('#regionSelect');
  const regionField = formContainer.querySelector('#regionField');
  const plantCategorySelect = formContainer.querySelector('#plantCategorySelect');
  const plantTypeSelect = formContainer.querySelector('#plantTypeSelect');
  const customNameField = formContainer.querySelector('#customNameField');

  // Load default settings from localStorage
  const settings = JSON.parse(localStorage.getItem('localCalendarSettings') || '{}');
  
  // Set default values for checkboxes
  const enablePhaseReminders = formContainer.querySelector('#enablePhaseReminders');
  if (enablePhaseReminders) {
    enablePhaseReminders.checked = settings.defaultPhaseReminders !== false;
  }
  
  const enableWeeklyChecks = formContainer.querySelector('#enableWeeklyChecks');
  if (enableWeeklyChecks) {
    enableWeeklyChecks.checked = settings.defaultWeeklyChecks !== false;
  }
  
  const enableHarvestReminder = formContainer.querySelector('#enableHarvestReminder');
  if (enableHarvestReminder) {
    enableHarvestReminder.checked = settings.defaultHarvestReminders !== false;
  }
  
  // Google Sync is always enabled by default (can be changed per planting)
  const enableGoogleCalendarSync = formContainer.querySelector('#enableGoogleCalendarSync');
  if (enableGoogleCalendarSync) {
    enableGoogleCalendarSync.checked = true;
  }

  // Add event listeners
  environmentSelect?.addEventListener('change', async function() {
    const environment = this.value;
    updateEnvironmentFields(environment);
    // Update plant options when environment changes
    const category = plantCategorySelect?.value || '';
    updatePlantOptions(category, environment);
    updatePlantInfo();
    await checkSeasonalTiming();
  });

  plantCategorySelect?.addEventListener('change', function() {
    const category = this.value;
    const environment = environmentSelect?.value || 'indoor';
    updatePlantOptions(category, environment);
  });

  plantTypeSelect?.addEventListener('change', async function() {
    updatePlantInfo();
    updatePhaseInputs();
    updateCustomNamePlaceholder();
    await checkSeasonalTiming();
  });

  // Initialize form state
  if (environmentSelect) {
    updateEnvironmentFields(environmentSelect.value);
  }
  if (plantCategorySelect) {
    const environment = environmentSelect?.value || 'indoor';
    updatePlantOptions(plantCategorySelect.value, environment);
  }
  updatePlantInfo();
}
