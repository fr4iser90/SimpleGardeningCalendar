import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { openDB } from 'idb';
import { format } from 'date-fns';
import { PLANTS_DATA, PLANT_CATEGORIES, addPlanting, addPlantNote, getPlantNotes, updatePlantingStatus, searchPlants, GROWING_ENVIRONMENTS, SEASONAL_REGIONS, getPlantDataForEnvironment, validatePlantingDate, initializeDB } from './db';
import { getAvailableTemplates, importGardenTemplate, GARDEN_TEMPLATE_CATEGORIES } from './gardenTemplates.js';
import { t, getCurrentLanguage, createLanguageSwitcher, updateUITranslations } from './i18n.js';

let calendar;

export async function initializeCalendar() {
  await initializeDB();
  
  const calendarEl = document.getElementById('calendar');
  
  calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    height: 'auto',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: ''
    },
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    weekends: true,
    select: function(arg) {
      showAddEventModal(arg.startStr);
      calendar.unselect();
    },
    eventClick: function(arg) {
      showEventDetails(arg.event);
    },
    events: async function(fetchInfo, successCallback, failureCallback) {
      try {
        const db = await openDB('gardening-calendar', 5);
        const events = await db.getAll('events');
        const formattedEvents = events.map(event => ({
          id: event.id,
          title: event.title,
          start: event.date,
          backgroundColor: getEventColor(event.type),
          borderColor: getEventColor(event.type),
          extendedProps: {
            type: event.type,
            description: event.description,
            plantingId: event.plantingId,
            phase: event.phase,
            priority: event.priority,
            templateCategory: event.templateCategory,
            templateName: event.templateName,
            language: event.language,
            isTemplate: event.isTemplate
          }
        }));
        successCallback(formattedEvents);
      } catch (error) {
        console.error('Error loading events:', error);
        failureCallback(error);
      }
    }
  });

  calendar.render();
  
  // Make calendar globally available for other modules
  window.calendar = calendar;
  
  // Listen for custom events from the app
  document.addEventListener('showAddEventModal', (e) => {
    showAddEventModal(e.detail.date, e.detail.type);
  });
  
  // Listen for refresh events from other modules
  document.addEventListener('refreshCalendar', () => {
    if (calendar && typeof calendar.refetchEvents === 'function') {
      calendar.refetchEvents();
    }
  });
  
  // Add control buttons
  const controls = document.createElement('div');
  controls.className = 'calendar-controls mb-4 flex flex-wrap gap-2 items-center';
  
  const buttonGroup = document.createElement('div');
  buttonGroup.className = 'flex flex-wrap gap-2';
  
  const addEventBtn = document.createElement('button');
  addEventBtn.innerHTML = '<i class="fas fa-plus mr-2"></i>' + t('btn.add_event');
  addEventBtn.className = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
  addEventBtn.onclick = () => showAddEventModal();
  
  const addPlantingBtn = document.createElement('button');
  addPlantingBtn.innerHTML = '<i class="fas fa-seedling mr-2"></i>' + t('btn.add_planting');
  addPlantingBtn.className = 'px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600';
  addPlantingBtn.onclick = () => showAddEventModal(null, 'planting');

  // Add Template Import button
  const templateImportBtn = document.createElement('button');
  templateImportBtn.innerHTML = '<i class="fas fa-download mr-2"></i>' + t('btn.import_template');
  templateImportBtn.className = 'px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600';
  templateImportBtn.onclick = () => showTemplateImportModal();

  // Add My Plants button
  const myPlantsBtn = document.createElement('button');
  myPlantsBtn.innerHTML = '<i class="fas fa-leaf mr-2"></i>' + t('btn.my_plants');
  myPlantsBtn.className = 'px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600';
  myPlantsBtn.onclick = () => {
    // Use the existing function from app.js
    if (window.showMyPlantsModal) {
      window.showMyPlantsModal();
    }
  };

  buttonGroup.appendChild(addEventBtn);
  buttonGroup.appendChild(addPlantingBtn);
  buttonGroup.appendChild(templateImportBtn);
  buttonGroup.appendChild(myPlantsBtn);
  
  controls.appendChild(buttonGroup);
  
  calendarEl.parentNode.insertBefore(controls, calendarEl);

  // Listen for language changes
  document.addEventListener('languageChanged', () => {
    // Update button texts
    addEventBtn.innerHTML = '<i class="fas fa-plus mr-2"></i>' + t('btn.add_event');
    addPlantingBtn.innerHTML = '<i class="fas fa-seedling mr-2"></i>' + t('btn.add_planting');
    templateImportBtn.innerHTML = '<i class="fas fa-download mr-2"></i>' + t('btn.import_template');
    myPlantsBtn.innerHTML = '<i class="fas fa-leaf mr-2"></i>' + t('btn.my_plants');
    
    // Update other UI elements
    updateUITranslations();
  });
  
  return calendar;
}

function getEventColor(type) {
  const colors = {
    planting: '#2F855A',
    watering: '#4299E1',
    fertilizing: '#805AD5',
    harvesting: '#ED8936',
    maintenance: '#718096'
  };
  return colors[type] || '#2F855A';
}

async function showAddEventModal(date, preselectedType = null) {
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

  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
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
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-1 dark:text-gray-200">${t('modal.plant_category.label')}</label>
              <select name="plantCategory" id="plantCategorySelect" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <option value="">${t('modal.plant_category.all')}</option>
                ${categoryOptions}
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1 dark:text-gray-200">${t('modal.plant_type.label')}</label>
              <select name="plantType" id="plantTypeSelect" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" ${eventTypeValue === 'planting' ? 'required' : ''}>
                ${Object.entries(PLANTS_DATA).map(([value, plant]) => 
                  `<option value="${value}" data-category="${plant.category}">${plant.name}${plant.legalNote ? ' ⚠️' : ''}</option>`
                ).join('')}
              </select>
            </div>
          </div>
          
          <div id="seasonalWarning" class="hidden">
            <div id="seasonalMessage" class="font-medium"></div>
            <div id="seasonalDetails" class="text-sm mt-1"></div>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1 dark:text-gray-200">${t('modal.custom_name.label')}</label>
            <input type="text" name="customName" id="customNameField" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">${t('modal.custom_name.help')}</p>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1 dark:text-gray-200">${t('modal.location.label')}</label>
            <input type="text" name="location" id="locationField" value="Default Garden" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          </div>
          
          <div id="plantInfo" class="p-3 bg-blue-50 dark:bg-blue-900 rounded border border-blue-200 dark:border-blue-700">
            <!-- Plant information will be populated here -->
          </div>
          
          <div id="phaseDurationSection" style="display: none;">
            <h4 class="font-medium mb-2 dark:text-white">${t('modal.phase_duration.title')}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">${t('modal.phase_duration.help')}</p>
            <div id="phaseInputs" class="grid grid-cols-2 gap-3">
              <!-- Phase duration inputs will be populated here -->
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">${t('modal.phase_duration.tip')}</p>
          </div>
          
          <div>
            <h4 class="font-medium mb-3 dark:text-white">${t('modal.reminders.title')}</h4>
            
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
                <input type="checkbox" id="enableGoogleCalendarSync" name="enableGoogleCalendarSync" class="mr-2">
                <label for="enableGoogleCalendarSync" class="text-sm dark:text-gray-200">${t('modal.reminders.google_sync')}</label>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium mb-1 dark:text-gray-200">${t('modal.date.label')}</label>
          <input type="date" name="date" value="${date}" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" required>
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
    updateLocationPlaceholder();
    checkSeasonalTiming();
  });

  regionSelect.addEventListener('change', function() {
    checkSeasonalTiming();
  });

  plantCategorySelect.addEventListener('change', function() {
    updatePlantOptions(this.value);
  });

  plantTypeSelect.addEventListener('change', function() {
    updatePlantInfo();
    updateCustomNamePlaceholder();
    updatePhaseInputs();
    checkSeasonalTiming();
  });

  // Check seasonal timing when date changes
  document.querySelector('input[name="date"]').addEventListener('change', function() {
    checkSeasonalTiming();
  });

  customNameField.addEventListener('input', function() {
    updateCustomNamePlaceholder();
  });

  // Toggle reminder options
  enableWatering.addEventListener('change', function() {
    wateringOptions.style.display = this.checked ? 'block' : 'none';
  });

  enableFertilizing.addEventListener('change', function() {
    fertilizingOptions.style.display = this.checked ? 'block' : 'none';
  });

  cancelBtn.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  // Form submission handler
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Form submitted');
    
    const formData = new FormData(form);
    
    // Validate based on event type
    const eventType = formData.get('eventType');
    if (eventType === 'custom' && !formData.get('title').trim()) {
      alert('Please enter a title for the event');
      return;
    }
    
    if (eventType === 'planting' && !formData.get('plantType')) {
      alert('Please select a plant type');
      return;
    }
    
    // Disable save button to prevent double submission
    saveBtn.disabled = true;
    saveBtn.textContent = 'Saving...';
    
    try {
      if (eventType === 'planting') {
        // Collect reminder preferences
        const reminderOptions = {
          enableWatering: formData.get('enableWatering') === 'on',
          wateringInterval: parseInt(formData.get('wateringInterval')) || 2,
          enableFertilizing: formData.get('enableFertilizing') === 'on',
          fertilizingInterval: parseInt(formData.get('fertilizingInterval')) || 14,
          fertilizingDelay: parseInt(formData.get('fertilizingDelay')) || 7,
          enablePhaseReminders: formData.get('enablePhaseReminders') === 'on',
          enableWeeklyChecks: formData.get('enableWeeklyChecks') === 'on',
          enableHarvestReminder: formData.get('enableHarvestReminder') === 'on',
          enableGoogleCalendarSync: formData.get('enableGoogleCalendarSync') === 'on'
        };

        // Collect custom phase durations
        const customPhaseDurations = {};
        const environment = document.querySelector('select[name="environment"]')?.value || 'indoor';
        const plantData = getPlantDataForEnvironment(formData.get('plantType'), environment);
        
        if (plantData && plantData.phases) {
          for (const phaseName of Object.keys(plantData.phases)) {
            const customDuration = formData.get(`phase_${phaseName}`);
            if (customDuration && parseInt(customDuration) > 0) {
              customPhaseDurations[phaseName] = parseInt(customDuration);
            }
          }
        }

        console.log('Adding planting with options:', {
          plantType: formData.get('plantType'),
          customName: formData.get('customName'),
          date: formData.get('date'),
          location: formData.get('location'),
          reminderOptions,
          customPhaseDurations
        });
        
        await addPlantingWithOptions(
          formData.get('plantType'),
          formData.get('date'),
          formData.get('location') || 'Default Garden',
          formData.get('customName') || null,
          reminderOptions,
          customPhaseDurations
        );
      } else {
        console.log('Adding custom event');
        
        const eventData = {
          title: formData.get('title'),
          date: formData.get('date'),
          type: formData.get('type'),
          description: formData.get('description')
        };
        
        const db = await openDB('gardening-calendar');
        await db.add('events', eventData);
        
        // Try to sync to Google Calendar if enabled
        const enableGoogleCalendarSync = formData.get('enableGoogleCalendarSync') === 'on';
        if (enableGoogleCalendarSync) {
          try {
            const { autoSyncEvent } = await import('./googleCalendarUI.js');
            await autoSyncEvent(eventData);
          } catch (error) {
            console.warn('Google Calendar sync failed:', error);
          }
        }
      }
      
      console.log('Event saved successfully');
      
      document.body.removeChild(modal);
      calendar.refetchEvents();
      
      // Refresh the app sidebar data
      const refreshEvent = new CustomEvent('refreshSidebar');
      document.dispatchEvent(refreshEvent);
      
    } catch (error) {
      console.error('Error saving event:', error);
      alert('Failed to save event. Please try again.');
      saveBtn.disabled = false;
      saveBtn.textContent = 'Save';
    }
  });

  // Helper functions
  function togglePlantingFields(value) {
    const customFields = document.getElementById('customFields');
    const plantingFields = document.getElementById('plantingFields');
    
    if (value === 'planting') {
      customFields.style.display = 'none';
      plantingFields.style.display = 'block';
      
      // Remove required from title field when hidden
      titleField.removeAttribute('required');
      // Add required to plant type when visible
      plantTypeSelect.setAttribute('required', 'required');
      
      updatePlantInfo();
      updateCustomNamePlaceholder();
      updatePhaseInputs();
    } else {
      customFields.style.display = 'block';
      plantingFields.style.display = 'none';
      
      // Add required to title field when visible
      titleField.setAttribute('required', 'required');
      // Remove required from plant type when hidden
      plantTypeSelect.removeAttribute('required');
    }
  }

  function updatePlantOptions(category) {
    const options = plantTypeSelect.querySelectorAll('option');
    
    options.forEach(option => {
      if (category === '' || option.dataset.category === category) {
        option.style.display = 'block';
      } else {
        option.style.display = 'none';
      }
    });
    
    // Reset selection if current selection is now hidden
    if (category !== '' && plantTypeSelect.selectedOptions[0]?.dataset.category !== category) {
      const firstVisibleOption = Array.from(options).find(opt => opt.style.display !== 'none');
      if (firstVisibleOption) {
        plantTypeSelect.value = firstVisibleOption.value;
      }
    }
    
    updatePlantInfo();
    updateCustomNamePlaceholder();
    updatePhaseInputs();
  }

  function updateEnvironmentFields(environment) {
    if (environment === 'outdoor') {
      regionField.style.display = 'block';
    } else {
      regionField.style.display = 'none';
    }
  }

  function updateLocationPlaceholder() {
    const environment = environmentSelect.value;
    const placeholders = {
      'indoor': 'e.g., Indoor Tent, Grow Room, Windowsill',
      'outdoor': 'e.g., Backyard Garden, Raised Bed, Field',
      'greenhouse': 'e.g., Greenhouse Section A, Hoophouse'
    };
    locationField.placeholder = placeholders[environment] || 'e.g., Indoor Tent, Outdoor Garden';
    
    // Update default value based on environment
    if (locationField.value === 'Default Garden') {
      const defaultValues = {
        'indoor': 'Indoor Garden',
        'outdoor': 'Outdoor Garden', 
        'greenhouse': 'Greenhouse'
      };
      locationField.value = defaultValues[environment] || 'Default Garden';
    }
  }

  function updatePlantInfo() {
    const plantInfo = document.getElementById('plantInfo');
    const environment = environmentSelect.value;
    const plantData = getPlantDataForEnvironment(plantTypeSelect.value, environment);
    
    if (plantData) {
      let infoHtml = `<div class="text-sm">`;
      infoHtml += `<div class="font-semibold text-blue-800 dark:text-blue-200 mb-2">${PLANTS_DATA[plantTypeSelect.value].name}${PLANTS_DATA[plantTypeSelect.value].legalNote ? ' ⚠️' : ''} (${t(`plant.category.${PLANTS_DATA[plantTypeSelect.value].category.toLowerCase().replace(/\s+/g, '_').replace(/&/g, '').replace(/\s/g, '')}`)}) - ${t(`environment.${environment}`)} ${t('plant.info.growing')}</div>`;
      
      if (PLANTS_DATA[plantTypeSelect.value].legalNote) {
        infoHtml += `<div class="text-orange-600 dark:text-orange-400 text-xs mb-2">${t('plant.info.legal_notice')} ${PLANTS_DATA[plantTypeSelect.value].legalNote}</div>`;
      }
      
      if (plantData.growingCycle) {
        const totalDays = Object.values(plantData.growingCycle).reduce((sum, days) => sum + days, 0);
        const totalWeeks = Math.round(totalDays / 7);
        infoHtml += `<div class="mb-1">${t('plant.info.growing_cycle')} ${totalDays} ${t('plant.info.days')} (${totalWeeks} ${t('plant.info.weeks')})</div>`;
        
        const phases = Object.entries(plantData.growingCycle).map(([phase, days]) => {
          const phaseKey = phase.toLowerCase();
          const phaseName = t(`phase.${phaseKey}`) || phase;
          return `${phaseName}: ${days} ${t('plant.info.days')}`;
        }).join(', ');
        infoHtml += `<div class="mb-1">${t('plant.info.phases')} ${phases}</div>`;
      }
      
      if (plantData.temperature) {
        infoHtml += `<div class="mb-1">${t('plant.info.temperature')} ${plantData.temperature}</div>`;
      }
      
      if (plantData.lightRequirements) {
        infoHtml += `<div class="mb-1">${t('plant.info.light')} ${plantData.lightRequirements}</div>`;
      }
      
      infoHtml += `</div>`;
      plantInfo.innerHTML = infoHtml;
      
      // Show/hide phase duration section
      if (plantData.growingCycle && Object.keys(plantData.growingCycle).length > 0) {
        const phaseDurationSection = document.getElementById('phaseDurationSection');
        phaseDurationSection.style.display = 'block';
        
        // Populate phase inputs
        const phaseInputs = document.getElementById('phaseInputs');
        phaseInputs.innerHTML = '';
        Object.entries(plantData.growingCycle).forEach(([phase, defaultDays]) => {
          const phaseKey = phase.toLowerCase();
          const phaseName = t(`phase.${phaseKey}`) || phase;
          const phaseIcon = getPhaseIcon(phase);
          
          const phaseDiv = document.createElement('div');
          phaseDiv.className = 'flex items-center space-x-2';
          phaseDiv.innerHTML = `
            <label class="text-sm font-medium dark:text-white min-w-0 flex-1">
              ${phaseIcon} ${phaseName}:
            </label>
            <input type="number" 
                   name="phase_${phase}" 
                   value="${defaultDays}" 
                   min="1" 
                   max="365" 
                   class="w-16 p-1 text-sm border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <span class="text-xs text-gray-500 dark:text-gray-400">${t('modal.phase_duration.days')}</span>
            <span class="text-xs text-gray-500 dark:text-gray-400">(${t('modal.phase_duration.default')} ${defaultDays})</span>
          `;
          phaseInputs.appendChild(phaseDiv);
        });
      } else {
        const phaseDurationSection = document.getElementById('phaseDurationSection');
        phaseDurationSection.style.display = 'none';
      }
      
      // Check seasonal timing
      const dateField = document.querySelector('input[name="date"]');
      if (dateField && dateField.value) {
        checkSeasonalTiming(plantTypeSelect.value, environment, dateField.value);
      }
    } else {
      plantInfo.innerHTML = '';
      seasonalWarning.classList.add('hidden');
      const phaseDurationSection = document.getElementById('phaseDurationSection');
      phaseDurationSection.style.display = 'none';
    }
  }

  function updatePhaseInputs() {
    const phaseInputs = document.getElementById('phaseInputs');
    const environment = environmentSelect.value;
    const plantData = getPlantDataForEnvironment(plantTypeSelect.value, environment);
    
    if (!plantData) {
      phaseInputs.innerHTML = '';
      return;
    }
    
    let inputsHtml = '';
    
    for (const [phaseName, phaseData] of Object.entries(plantData.phases)) {
      const isFloweringPhase = phaseName.toLowerCase().includes('flower') || 
                              phaseName.toLowerCase().includes('bloom') ||
                              phaseName.toLowerCase().includes('fruiting');
      
      const phaseEmoji = getPhaseEmoji(phaseName);
      const helpText = getPhaseHelpText(phaseName, PLANTS_DATA[plantTypeSelect.value].category, environment);
      
      inputsHtml += `
        <div class="flex items-center space-x-2 ${isFloweringPhase ? 'bg-purple-50 dark:bg-purple-900/20 p-2 rounded' : ''}">
          <label class="text-xs dark:text-gray-300 w-20">${phaseEmoji} ${phaseName}:</label>
          <input 
            type="number" 
            name="phase_${phaseName}" 
            placeholder="${phaseData.days}" 
            min="1" 
            max="365"
            class="w-16 text-xs p-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
          <span class="text-xs text-gray-500 dark:text-gray-400">days (default: ${phaseData.days})</span>
          ${helpText ? `<span class="text-xs text-gray-400 dark:text-gray-500" title="${helpText}">ℹ️</span>` : ''}
        </div>
      `;
    }
    
    phaseInputs.innerHTML = inputsHtml;
  }

  function updateCustomNamePlaceholder() {
    const selectedPlant = PLANTS_DATA[plantTypeSelect.value];
    if (selectedPlant) {
      const examples = {
        'Cannabis': `e.g., 'My ${selectedPlant.name} #1'`,
        'Vegetables': `e.g., 'Kitchen Garden ${selectedPlant.name}'`,
        'Herbs': `e.g., 'Windowsill ${selectedPlant.name}'`,
        'Fruits': `e.g., 'Backyard ${selectedPlant.name}'`
      };
      customNameField.placeholder = examples[selectedPlant.category] || `e.g., 'My ${selectedPlant.name}'`;
    }
  }

  function checkSeasonalTiming() {
    const environment = environmentSelect.value;
    const plantType = plantTypeSelect.value;
    const region = regionSelect.value;
    const plantingDate = document.querySelector('input[name="date"]').value;
    
    if (!plantType || !plantingDate) {
      seasonalWarning.classList.add('hidden');
      return;
    }
    
    const validation = validatePlantingDate(plantType, environment, plantingDate, region);
    
    if (validation.valid) {
      if (validation.message === 'Indoor growing - any time suitable' || validation.message === 'No seasonal restrictions') {
        seasonalWarning.classList.add('hidden');
      } else {
        seasonalWarning.classList.remove('hidden');
        seasonalWarning.className = 'p-3 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded';
        seasonalMessage.innerHTML = `<span class="text-green-600 dark:text-green-400 mr-2">✅</span><span class="text-green-800 dark:text-green-200">${t('timing.good')}</span>`;
        seasonalDetails.innerHTML = `<span class="text-green-700 dark:text-green-300">${validation.message}</span>`;
      }
    } else {
      seasonalWarning.classList.remove('hidden');
      seasonalWarning.className = 'p-3 bg-yellow-100 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700 rounded';
      seasonalMessage.innerHTML = `<span class="text-yellow-600 dark:text-yellow-400 mr-2">⚠️</span><span class="text-yellow-800 dark:text-yellow-200">${t('timing.notice')}</span>`;
      seasonalDetails.innerHTML = `<span class="text-yellow-700 dark:text-yellow-300">${validation.message}</span>`;
    }
  }

  // Initialize environment fields and checks
  updateEnvironmentFields(environmentSelect.value);
  updateLocationPlaceholder();
  
  // Initialize plant info if planting is preselected
  if (eventTypeValue === 'planting') {
    setTimeout(() => {
      updatePlantInfo();
      updateCustomNamePlaceholder();
      updatePhaseInputs();
      checkSeasonalTiming();
    }, 100);
  }
}

function getPhaseHelpText(phaseName, category, environment) {
  const helpTexts = {
    'Cannabis': {
      indoor: {
        'flowering': 'Cannabis flowering varies widely: Indica 6-8 weeks, Sativa 8-12 weeks, Autoflower 4-6 weeks',
        'vegetative': 'Longer veg = bigger plants. Indoor: 4-8 weeks optimal',
        'preflower': 'Shows sex, usually 1-2 weeks after switching to 12/12'
      },
      outdoor: {
        'flowering': 'Natural flowering triggered by shorter days (usually August-October)',
        'vegetative': 'Outdoor veg can be 3-4 months, plants get much larger',
        'preflower': 'Natural photoperiod change triggers flowering'
      }
    },
    'Vegetables': {
      indoor: {
        'flowering': 'Controlled environment allows year-round growing',
        'fruiting': 'Hand pollination may be needed indoors'
      },
      outdoor: {
        'flowering': 'Natural pollination by insects and wind',
        'fruiting': 'Weather dependent - protect from extreme conditions'
      }
    },
    'Fruit Trees': {
      outdoor: {
        'establishment': 'First year is critical - regular watering and protection',
        'dormancy': 'Winter dormancy is natural and necessary for fruit trees'
      }
    }
  };
  
  return helpTexts[category]?.[environment]?.[phaseName] || null;
}

// Enhanced addPlanting function with custom phase durations and Google Calendar sync
async function addPlantingWithOptions(plantType, startDate, location, customName, reminderOptions, customPhaseDurations = {}) {
  const db = await openDB('gardening-calendar');
  
  // Get environment and region from the form
  const environment = document.querySelector('select[name="environment"]')?.value || 'indoor';
  const region = document.querySelector('select[name="region"]')?.value || 'temperate_north';
  
  const plantData = getPlantDataForEnvironment(plantType, environment);
  
  if (!plantData) {
    throw new Error(`Plant type ${plantType} not found in database for ${environment} environment`);
  }
  
  // Use custom name or default to plant name
  const displayName = customName || plantData.name;
  
  // Create modified plant data with custom phase durations
  const modifiedPlantData = { ...plantData };
  modifiedPlantData.phases = { ...plantData.phases };
  
  // Apply custom phase durations
  for (const [phaseName, customDays] of Object.entries(customPhaseDurations)) {
    if (modifiedPlantData.phases[phaseName]) {
      modifiedPlantData.phases[phaseName] = {
        ...modifiedPlantData.phases[phaseName],
        days: customDays
      };
    }
  }
  
  // Calculate all phase dates with custom durations
  let currentDate = new Date(startDate);
  const phases = [];
  let totalDays = 0;
  
  for (const [phase, { days, description, care }] of Object.entries(modifiedPlantData.phases)) {
    const phaseStartDate = new Date(currentDate);
    phaseStartDate.setDate(phaseStartDate.getDate() + totalDays);
    
    phases.push({
      name: phase,
      startDate: phaseStartDate.toISOString().split('T')[0],
      days,
      description,
      care,
      isCustomDuration: customPhaseDurations[phase] ? true : false
    });
    
    totalDays += days;
  }
  
  // Calculate harvest/completion date
  const completionDate = new Date(currentDate);
  completionDate.setDate(completionDate.getDate() + totalDays);
  
  // Add planting record with environment information
  const planting = {
    plantType,
    plantName: plantData.name,
    displayName: displayName,
    customName: customName,
    category: plantData.category || 'Other',
    location,
    environment, // NEW: Store growing environment
    region, // NEW: Store climate region
    startDate: startDate,
    completionDate: completionDate.toISOString().split('T')[0],
    phases,
    currentPhase: Object.keys(modifiedPlantData.phases)[0],
    status: 'active',
    notes: [],
    legalNote: plantData.legalNote || null,
    reminderOptions,
    customPhaseDurations: Object.keys(customPhaseDurations).length > 0 ? customPhaseDurations : null,
    seasonalTiming: plantData.seasonalTiming || null // NEW: Store seasonal timing info
  };
  
  const tx = db.transaction(['plantings', 'events'], 'readwrite');
  const plantingId = await tx.objectStore('plantings').add(planting);
  
  // Collect all events for potential Google Calendar sync
  const eventsToSync = [];
  
  // Add planting event with environment info
  let plantingDescription = `Start ${environment} growing of ${displayName}`;
  if (plantData.legalNote) {
    plantingDescription += `\n\n⚠️ LEGAL NOTICE: ${plantData.legalNote}`;
  }
  
  // Add environment-specific info
  plantingDescription += `\n\n🌱 Growing Environment: ${environment.charAt(0).toUpperCase() + environment.slice(1)}`;
  if (environment === 'outdoor' && region) {
    plantingDescription += `\n🌍 Climate Region: ${region.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`;
  }
  
  // Add custom duration info to description
  if (Object.keys(customPhaseDurations).length > 0) {
    plantingDescription += `\n\n🕐 Custom Phase Durations:`;
    for (const [phase, days] of Object.entries(customPhaseDurations)) {
      const originalDays = PLANTS_DATA[plantType]?.phases?.[phase]?.days || 
                          PLANTS_DATA[plantType]?.environments?.[environment]?.phases?.[phase]?.days;
      plantingDescription += `\n- ${phase}: ${days} days (standard: ${originalDays} days)`;
    }
  }
  
  plantingDescription += `\n\nTotal cycle: ${totalDays} days (${Math.round(totalDays/7)} weeks)`;
  plantingDescription += `\n\nCare Tips:\n${Object.entries(plantData.careTips).map(([key, value]) => `- ${key}: ${value}`).join('\n')}`;

  const plantingEvent = {
    title: `🌱 Plant ${displayName} (${environment})`,
    date: startDate,
    type: 'planting',
    description: plantingDescription,
    plantingId,
    environment // NEW: Add environment to event
  };
  
  await tx.objectStore('events').add(plantingEvent);
  if (reminderOptions.enableGoogleCalendarSync) {
    eventsToSync.push(plantingEvent);
  }
  
  // Add events based on user preferences using modified phase data
  for (let i = 0; i < phases.length; i++) {
    const phase = phases[i];
    
    // Add phase transition events
    if (reminderOptions.enablePhaseReminders) {
      let phaseTitle = `${getPhaseEmoji(phase.name)} ${displayName}: ${phase.name} phase`;
      if (phase.isCustomDuration) {
        phaseTitle += ` (${phase.days}d custom)`;
      }
      if (environment !== 'indoor') {
        phaseTitle += ` [${environment}]`;
      }
      
      const phaseEvent = {
        title: phaseTitle,
        date: phase.startDate,
        type: 'maintenance',
        description: `${phase.description}\n\nCare Instructions:\n${phase.care}${phase.isCustomDuration ? `\n\n⏱️ Custom duration: ${phase.days} days` : ''}\n\n🌱 Environment: ${environment}`,
        plantingId,
        environment
      };
      
      await tx.objectStore('events').add(phaseEvent);
      if (reminderOptions.enableGoogleCalendarSync) {
        eventsToSync.push(phaseEvent);
      }
    }

    // Add weekly check-ins for longer phases (adjusted for environment)
    const minDaysForWeeklyChecks = environment === 'outdoor' ? 21 : 14; // Longer phases outdoor
    if (reminderOptions.enableWeeklyChecks && phase.days > minDaysForWeeklyChecks) {
      const weeklyChecks = Math.floor(phase.days / 7);
      for (let week = 1; week <= weeklyChecks; week++) {
        const checkDate = new Date(phase.startDate);
        checkDate.setDate(checkDate.getDate() + (week * 7));
        
        if (checkDate < new Date(completionDate)) {
          const checkEvent = {
            title: `📋 ${displayName}: Week ${week} check (${phase.name}) [${environment}]`,
            date: checkDate.toISOString().split('T')[0],
            type: 'maintenance',
            description: `Weekly check during ${phase.name} phase\n\n${phase.care}\n\nLook for signs of:\n${getPhaseCheckpoints(phase.name, plantData)}\n\n🌱 Environment: ${environment}`,
            plantingId,
            environment
          };
          
          await tx.objectStore('events').add(checkEvent);
          if (reminderOptions.enableGoogleCalendarSync) {
            eventsToSync.push(checkEvent);
          }
        }
      }
    }

    // Add watering reminders (adjusted for environment)
    if (reminderOptions.enableWatering) {
      let wateringDate = new Date(phase.startDate);
      const phaseEnd = new Date(wateringDate);
      phaseEnd.setDate(phaseEnd.getDate() + phase.days);

      // Adjust watering interval based on environment
      let adjustedInterval = reminderOptions.wateringInterval;
      if (environment === 'outdoor') {
        adjustedInterval = Math.max(adjustedInterval, 3); // Less frequent outdoor watering
      }

      while (wateringDate < phaseEnd) {
        const wateringEvent = {
          title: `💧 Water ${displayName} [${environment}]`,
          date: wateringDate.toISOString().split('T')[0],
          type: 'watering',
          description: `${plantData.careTips.watering || 'Check soil moisture and water as needed'}\n\nPhase: ${phase.name}\nCare: ${phase.care}\n\n🌱 Environment: ${environment}${environment === 'outdoor' ? '\n☔ Check weather before watering' : ''}`,
          plantingId,
          environment
        };
        
        await tx.objectStore('events').add(wateringEvent);
        if (reminderOptions.enableGoogleCalendarSync) {
          eventsToSync.push(wateringEvent);
        }
        
        wateringDate.setDate(wateringDate.getDate() + adjustedInterval);
      }
    }

    // Add fertilizing reminders (environment-specific)
    if (reminderOptions.enableFertilizing && phase.days > 14 && 
        (phase.name === 'vegetative' || phase.name === 'flowering' || phase.name === 'fruiting' || phase.name === 'productive')) {
      const fertilizeDate = new Date(phase.startDate);
      fertilizeDate.setDate(fertilizeDate.getDate() + reminderOptions.fertilizingDelay);
      
      const phaseEnd = new Date(phase.startDate);
      phaseEnd.setDate(phaseEnd.getDate() + phase.days);
      
      while (fertilizeDate < phaseEnd) {
        const fertilizeEvent = {
          title: `🌿 Fertilize ${displayName} [${environment}]`,
          date: fertilizeDate.toISOString().split('T')[0],
          type: 'fertilizing',
          description: `${plantData.careTips.fertilizing || 'Apply appropriate fertilizer'}\n\nPhase: ${phase.name}\n\n🌱 Environment: ${environment}${environment === 'outdoor' ? '\n🌧️ Avoid fertilizing before heavy rain' : ''}`,
          plantingId,
          environment
        };
        
        await tx.objectStore('events').add(fertilizeEvent);
        if (reminderOptions.enableGoogleCalendarSync) {
          eventsToSync.push(fertilizeEvent);
        }
        
        fertilizeDate.setDate(fertilizeDate.getDate() + reminderOptions.fertilizingInterval);
      }
    }
  }
  
  // Add final harvest/completion event
  if (reminderOptions.enableHarvestReminder) {
    const finalPhase = Object.keys(modifiedPlantData.phases).pop();
    const eventTitle = finalPhase === 'harvest' ? `🌾 Harvest ${displayName} [${environment}]` : `✅ Complete ${displayName} cycle [${environment}]`;
    
    let harvestDescription = `Time to ${finalPhase === 'harvest' ? 'harvest' : 'complete'} your ${displayName}!`;
    
    harvestDescription += `\n\n🌱 Environment: ${environment}`;
    if (environment === 'outdoor') {
      harvestDescription += `\n🌤️ Check weather conditions before harvesting`;
      if (plantData.seasonalTiming && plantData.seasonalTiming[region]?.harvestWindow) {
        const harvestWindow = plantData.seasonalTiming[region].harvestWindow;
        harvestDescription += `\n📅 Typical harvest window: ${harvestWindow.start} to ${harvestWindow.end}`;
      }
    }
    
    if (Object.keys(customPhaseDurations).length > 0) {
      harvestDescription += `\n\n⏱️ This plant used custom phase durations.`;
    }
    
    if (plantData.commonProblems && Object.keys(plantData.commonProblems).length > 0) {
      harvestDescription += `\n\nCommon Problems to Check For:\n${Object.entries(plantData.commonProblems).map(([problem, solution]) => `- ${problem}: ${solution}`).join('\n')}`;
    }
    
    const harvestEvent = {
      title: eventTitle,
      date: completionDate.toISOString().split('T')[0],
      type: finalPhase === 'harvest' ? 'harvesting' : 'maintenance',
      description: harvestDescription,
      plantingId,
      environment
    };
    
    await tx.objectStore('events').add(harvestEvent);
    if (reminderOptions.enableGoogleCalendarSync) {
      eventsToSync.push(harvestEvent);
    }
  }
  
  await tx.done;
  
  // Sync to Google Calendar if enabled
  if (reminderOptions.enableGoogleCalendarSync && eventsToSync.length > 0) {
    try {
      const { googleCalendar } = await import('./googleCalendar.js');
      if (googleCalendar.isSignedIn) {
        const { results, errors } = await googleCalendar.createEvents(eventsToSync);
        console.log(`Google Calendar sync: ${results.length} events synced, ${errors.length} failed`);
        
        if (errors.length > 0) {
          console.warn('Some events failed to sync to Google Calendar:', errors);
        }
      }
    } catch (error) {
      console.warn('Google Calendar sync failed:', error);
    }
  }
  
  return plantingId;
}

function getPhaseEmoji(phase) {
  const emojis = {
    germination: '🌱',
    sprouting: '🌱',
    seedling: '🌿',
    vegetative: '🍃',
    leafing: '🍃',
    rooting: '🌿',
    preflower: '🌸',
    flowering: '🌸',
    blooming: '🌺',
    fruiting: '🍅',
    tuberization: '🥔',
    bulking: '🥔',
    harvest: '🌾',
    maturation: '🌾',
    establishment: '🌱',
    dormancy: '😴'
  };
  return emojis[phase] || '📅';
}

function getPhaseCheckpoints(phase, plantData) {
  const checkpoints = {
    'germination': 'Sprouting progress, moisture levels, temperature',
    'seedling': 'Leaf development, stem strength, pest signs',
    'vegetative': 'Growth rate, leaf color, branching, training needs',
    'flowering': 'Flower development, pollination, nutrient needs',
    'fruiting': 'Fruit set, size development, ripening signs',
    'harvest': 'Ripeness indicators, harvest timing'
  };
  
  let phaseChecks = checkpoints[phase] || 'General plant health, growth progress';
  
  // Add plant-specific problems to watch for
  if (plantData.commonProblems) {
    const problems = Object.keys(plantData.commonProblems).slice(0, 3).join(', ');
    phaseChecks += `\nCommon issues: ${problems}`;
  }
  
  return phaseChecks;
}

async function showEventDetails(event) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
  
  let notesHtml = '';
  let plantingStatus = '';
  let plantingInfo = '';
  
  if (event.extendedProps.plantingId) {
    const notes = await getPlantNotes(event.extendedProps.plantingId);
    notesHtml = `
      <div class="mt-4">
        <h3 class="font-semibold mb-2 dark:text-white">Notes</h3>
        <div class="space-y-2 max-h-32 overflow-y-auto">
          ${notes.map(note => `
            <div class="text-sm bg-gray-50 dark:bg-gray-700 p-2 rounded">
              <div class="text-xs text-gray-500 dark:text-gray-400">${format(new Date(note.date), 'MMM d, yyyy h:mm a')}</div>
              <div class="mt-1">${note.note}</div>
            </div>
          `).join('')}
        </div>
        <div class="mt-2">
          <textarea id="newNote" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" rows="2" placeholder="Add a note..."></textarea>
          <button onclick="addNote(${event.extendedProps.plantingId})" class="mt-1 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">
            Add Note
          </button>
        </div>
      </div>
    `;

    const db = await openDB('gardening-calendar');
    const planting = await db.get('plantings', event.extendedProps.plantingId);
    if (planting) {
      const displayName = planting.displayName || planting.plantName;
      let customDurationInfo = '';
      
      if (planting.customPhaseDurations) {
        customDurationInfo = `<div class="text-xs text-purple-600 dark:text-purple-400 mt-1">
          ⏱️ Custom phase durations applied
        </div>`;
      }
      
      plantingInfo = `
        <div class="mt-2 text-sm">
          <strong>Plant:</strong> ${displayName}${planting.customName ? ` (${planting.plantName})` : ''}<br>
          <strong>Category:</strong> ${planting.category}<br>
          <strong>Location:</strong> ${planting.location}<br>
          <strong>Current Phase:</strong> ${planting.currentPhase}<br>
          <strong>Started:</strong> ${new Date(planting.startDate).toLocaleDateString()}<br>
          <strong>Expected Completion:</strong> ${new Date(planting.completionDate).toLocaleDateString()}
          ${customDurationInfo}
        </div>
      `;

      plantingStatus = `
        <div class="mt-4">
          <h3 class="font-semibold mb-2 dark:text-white">Status</h3>
          <select id="plantingStatus" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" onchange="updateStatus(${event.extendedProps.plantingId}, this.value)">
            <option value="active" ${planting.status === 'active' ? 'selected' : ''}>Active</option>
            <option value="completed" ${planting.status === 'completed' ? 'selected' : ''}>Completed</option>
            <option value="failed" ${planting.status === 'failed' ? 'selected' : ''}>Failed</option>
          </select>
        </div>
      `;
    }
  }

  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
      <div class="flex justify-between items-start mb-4">
        <h2 class="text-xl font-semibold dark:text-white">${event.title}</h2>
        <span class="px-2 py-1 rounded text-sm text-white" style="background-color: ${event.backgroundColor};">
          ${event.extendedProps.type}
        </span>
      </div>
      <div class="space-y-3 dark:text-gray-200">
        <p class="text-sm">
          <strong>Date:</strong> ${format(new Date(event.start), 'MMMM d, yyyy')}
        </p>
        ${plantingInfo}
        <div class="text-sm">
          <strong>Description:</strong><br>
          <div class="mt-1 whitespace-pre-wrap">${event.extendedProps.description || 'No description provided'}</div>
        </div>
        ${plantingStatus}
        ${notesHtml}
      </div>
      <div class="flex justify-between mt-6">
        <button class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700" onclick="deleteEvent(${event.id}, ${event.extendedProps.plantingId})">
          Delete
        </button>
        <button class="px-4 py-2 text-gray-600 dark:text-gray-300" onclick="this.closest('.fixed').remove()">
          Close
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Add the note function to window scope
  window.addNote = async function(plantingId) {
    const noteText = document.getElementById('newNote').value.trim();
    if (noteText) {
      await addPlantNote(plantingId, noteText);
      document.querySelector('.fixed').remove();
      showEventDetails(event);
    }
  };

  // Add the status update function to window scope
  window.updateStatus = async function(plantingId, status) {
    await updatePlantingStatus(plantingId, status);
    calendar.refetchEvents();
    
    // Refresh the app sidebar data
    const refreshEvent = new CustomEvent('refreshSidebar');
    document.dispatchEvent(refreshEvent);
  };
}

async function deleteEvent(eventId, plantingId) {
  if (!confirm('Are you sure you want to delete this event?')) {
    return;
  }

  try {
    const db = await openDB('gardening-calendar');
    
    if (plantingId) {
      // Delete all events related to this planting
      const tx = db.transaction(['events', 'plantings', 'plantNotes'], 'readwrite');
      const events = await tx.objectStore('events').index('plantingId').getAll(plantingId);
      
      for (const event of events) {
        await tx.objectStore('events').delete(event.id);
      }
      
      // Delete all notes
      const notes = await tx.objectStore('plantNotes').index('plantingId').getAll(plantingId);
      for (const note of notes) {
        await tx.objectStore('plantNotes').delete(note.id);
      }
      
      await tx.objectStore('plantings').delete(plantingId);
      await tx.done;
    } else {
      await db.delete('events', eventId);
    }
    
    document.querySelector('.fixed').remove();
    calendar.refetchEvents();
    
    // Refresh the app sidebar data
    const refreshEvent = new CustomEvent('refreshSidebar');
    document.dispatchEvent(refreshEvent);
    
  } catch (error) {
    console.error('Error deleting event:', error);
    alert('Failed to delete event. Please try again.');
  }
}

// Make deleteEvent available globally
window.deleteEvent = deleteEvent;

// Add new function to show template import modal
function showTemplateImportModal() {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-gray-900 dark:text-white" data-i18n="template.modal.title">${t('template.modal.title')}</h2>
        <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <i class="fas fa-times text-xl"></i>
        </button>
      </div>
      
      <div class="mb-4 text-sm text-gray-600 dark:text-gray-400" data-i18n="template.modal.description">
        ${t('template.modal.description')}
      </div>
      
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-i18n="template.select.label">
          ${t('template.select.label')}
        </label>
        <select id="templateSelect" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
          <option value="" data-i18n="template.select.placeholder">${t('template.select.placeholder')}</option>
        </select>
      </div>
      
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-i18n="template.year.label">
          ${t('template.year.label')}
        </label>
        <select id="yearSelect" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
          <option value="${new Date().getFullYear()}" data-i18n="template.year.current">${new Date().getFullYear()} (${t('template.year.current')})</option>
          <option value="${new Date().getFullYear() + 1}" data-i18n="template.year.next">${new Date().getFullYear() + 1} (${t('template.year.next')})</option>
        </select>
      </div>
      
      <div id="templateDescription" class="mb-4 hidden">
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
          <h4 class="font-medium text-blue-900 dark:text-blue-100 mb-1" data-i18n="template.description.title">${t('template.description.title')}</h4>
          <p id="templateDescText" class="text-sm text-blue-800 dark:text-blue-200"></p>
          <p id="templateTaskCount" class="text-xs text-blue-600 dark:text-blue-300 mt-1"></p>
        </div>
      </div>
      
      <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 mb-4">
        <div class="flex items-start">
          <i class="fas fa-info-circle text-yellow-600 dark:text-yellow-400 mr-2 mt-0.5"></i>
          <div>
            <h4 class="font-medium text-yellow-900 dark:text-yellow-100 text-sm" data-i18n="template.warning.title">${t('template.warning.title')}</h4>
            <p class="text-xs text-yellow-800 dark:text-yellow-200" data-i18n="template.warning.text">${t('template.warning.text')}</p>
          </div>
        </div>
      </div>
      
      <div class="flex space-x-3">
        <button onclick="this.closest('.fixed').remove()" class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700" data-i18n="btn.cancel">
          ${t('btn.cancel')}
        </button>
        <button onclick="importSelectedTemplate()" class="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed" id="importBtn" disabled data-i18n="template.import.button">
          ${t('template.import.button')}
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  loadTemplateOptions();
}

function loadTemplateOptions() {
  const templateSelect = document.getElementById('templateSelect');
  const templates = getAvailableTemplates();
  
  templates.forEach((template, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = template.name;
    templateSelect.appendChild(option);
  });
  
  // Add change handler
  templateSelect.addEventListener('change', function() {
    showTemplateDescription(this.value);
    document.getElementById('importBtn').disabled = this.value === '';
  });
}

function showTemplateDescription(templateIndex) {
  const descriptionDiv = document.getElementById('templateDescription');
  const descText = document.getElementById('templateDescText');
  const taskCount = document.getElementById('templateTaskCount');
  
  if (templateIndex === '' || templateIndex === null) {
    descriptionDiv.classList.add('hidden');
    return;
  }
  
  const templates = getAvailableTemplates();
  const template = templates[parseInt(templateIndex)];
  
  if (template) {
    descText.textContent = template.description;
    taskCount.textContent = `${template.tasks.length} ${t('template.task.count')}`;
    descriptionDiv.classList.remove('hidden');
  } else {
    descriptionDiv.classList.add('hidden');
  }
}

async function importSelectedTemplate() {
  const templateSelect = document.getElementById('templateSelect');
  const yearSelect = document.getElementById('yearSelect');
  const importBtn = document.getElementById('importBtn');
  
  if (templateSelect.value === '') {
    showNotification(t('template.select.required'), 'error');
    return;
  }
  
  // Show loading state
  const originalText = importBtn.textContent;
  importBtn.textContent = t('template.import.loading');
  importBtn.disabled = true;
  
  try {
    const templates = getAvailableTemplates();
    const selectedTemplate = templates[templateSelect.value];
    const year = parseInt(yearSelect.value);
    
    // Import template events
    const events = await importGardenTemplate(selectedTemplate, year);
    
    // Save events to database
    const db = await openDB('gardening-calendar');
    const tx = db.transaction('events', 'readwrite');
    
    for (const event of events) {
      await tx.objectStore('events').add({
        title: event.title,
        date: event.date,
        type: event.type,
        description: event.description,
        priority: event.priority,
        templateCategory: event.templateCategory,
        templateName: event.templateName,
        language: event.language,
        isTemplate: event.isTemplate
      });
    }
    
    await tx.complete;
    
    // Refresh calendar
    calendar.refetchEvents();
    
    // Close modal
    document.querySelector('.fixed').remove();
    
    // Show success message
    showNotification(
      t('template.import.success', {
        count: events.length,
        name: selectedTemplate.name,
        year: year
      }),
      'success'
    );
    
  } catch (error) {
    console.error('Error importing template:', error);
    showNotification(t('template.import.error'), 'error');
  } finally {
    // Reset button
    importBtn.textContent = originalText;
    importBtn.disabled = false;
  }
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
  
  notification.className = `fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-x-full`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.classList.remove('translate-x-full');
  }, 100);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.classList.add('translate-x-full');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 5000);
}

// Make functions globally available
window.importSelectedTemplate = importSelectedTemplate;

// Helper function to get phase icon
function getPhaseIcon(phase) {
  const icons = {
    'germination': '🌱',
    'seedling': '🌿',
    'vegetative': '🍃',
    'preflower': '🌸',
    'flowering': '🌸',
    'harvest': '🌾'
  };
  return icons[phase.toLowerCase()] || '🌱';
}

// Check seasonal timing and show warning if needed
function checkSeasonalTiming(plantKey, environment, plantingDate) {
  const seasonalWarning = document.getElementById('seasonalWarning');
  const seasonalMessage = document.getElementById('seasonalMessage');
  const seasonalDetails = document.getElementById('seasonalDetails');
  
  if (environment === 'indoor' || environment === 'greenhouse') {
    seasonalWarning.classList.add('hidden');
    return;
  }
  
  // Use the validation function from db.js
  const validation = validatePlantingDate(plantKey, environment, plantingDate);
  
  if (validation.valid) {
    if (validation.message === 'Indoor growing - any time suitable' || validation.message === 'No seasonal restrictions') {
      seasonalWarning.classList.add('hidden');
    } else {
      seasonalWarning.classList.remove('hidden');
      seasonalWarning.className = 'p-3 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded';
      seasonalMessage.innerHTML = `<span class="text-green-600 dark:text-green-400 mr-2">✅</span><span class="text-green-800 dark:text-green-200">${t('timing.good')}</span>`;
      seasonalDetails.innerHTML = `<span class="text-green-700 dark:text-green-300">${validation.message}</span>`;
    }
  } else {
    seasonalWarning.classList.remove('hidden');
    seasonalWarning.className = 'p-3 bg-yellow-100 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700 rounded';
    seasonalMessage.innerHTML = `<span class="text-yellow-600 dark:text-yellow-400 mr-2">⚠️</span><span class="text-yellow-800 dark:text-yellow-200">${t('timing.notice')}</span>`;
    seasonalDetails.innerHTML = `<span class="text-yellow-700 dark:text-yellow-300">${validation.message}</span>`;
  }
}
