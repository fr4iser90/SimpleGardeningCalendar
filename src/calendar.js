import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { openDB } from 'idb';
import { format } from 'date-fns';
import { PLANTS_DATA, PLANT_CATEGORIES, addPlanting, addPlantNote, getPlantNotes, updatePlantingStatus, searchPlants } from './db';

let calendar;

export async function initializeCalendar() {
  const calendarEl = document.getElementById('calendar');
  
  calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    height: 'auto',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth'
    },
    events: async (info, successCallback) => {
      try {
        const db = await openDB('gardening-calendar');
        const events = await db.getAll('events');
        
        successCallback(events.map(event => ({
          id: event.id,
          title: event.title,
          start: event.date,
          backgroundColor: getEventColor(event.type),
          borderColor: getEventColor(event.type),
          textColor: '#ffffff',
          extendedProps: {
            description: event.description,
            type: event.type,
            plantingId: event.plantingId
          }
        })));
      } catch (error) {
        console.error('Error loading events:', error);
        successCallback([]);
      }
    },
    dateClick: (info) => {
      showAddEventModal(info.dateStr);
    },
    eventClick: (info) => {
      showEventDetails(info.event);
    }
  });

  calendar.render();
  
  // Listen for custom events from the app
  document.addEventListener('showAddEventModal', (e) => {
    showAddEventModal(e.detail.date, e.detail.type);
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
  
  // Create category options
  const categoryOptions = PLANT_CATEGORIES.map(category => 
    `<option value="${category}">${category}</option>`
  ).join('');

  const eventTypeValue = preselectedType === 'planting' ? 'planting' : 'custom';

  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
      <h2 class="text-xl font-semibold mb-4 dark:text-white">Add Garden Event</h2>
      <form id="eventForm" class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1 dark:text-gray-200">Event Type</label>
          <select name="eventType" id="eventTypeSelect" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <option value="custom" ${eventTypeValue === 'custom' ? 'selected' : ''}>Custom Event</option>
            <option value="planting" ${eventTypeValue === 'planting' ? 'selected' : ''}>Start Planting</option>
          </select>
        </div>
        
        <div id="customFields" style="display: ${eventTypeValue === 'planting' ? 'none' : 'block'};">
          <div>
            <label class="block text-sm font-medium mb-1 dark:text-gray-200">Title</label>
            <input type="text" name="title" id="titleField" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" ${eventTypeValue === 'custom' ? 'required' : ''}>
          </div>
          <div>
            <label class="block text-sm font-medium mb-1 dark:text-gray-200">Type</label>
            <select name="type" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <option value="maintenance">Maintenance</option>
              <option value="watering">Watering</option>
              <option value="fertilizing">Fertilizing</option>
            </select>
          </div>
        </div>
        
        <div id="plantingFields" style="display: ${eventTypeValue === 'planting' ? 'block' : 'none'};">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-1 dark:text-gray-200">Plant Category</label>
              <select name="plantCategory" id="plantCategorySelect" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <option value="">All Categories</option>
                ${categoryOptions}
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1 dark:text-gray-200">Plant Type</label>
              <select name="plantType" id="plantTypeSelect" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" ${eventTypeValue === 'planting' ? 'required' : ''}>
                ${Object.entries(PLANTS_DATA).map(([value, plant]) => 
                  `<option value="${value}" data-category="${plant.category}">${plant.name}${plant.legalNote ? ' ⚠️' : ''}</option>`
                ).join('')}
              </select>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-1 dark:text-gray-200">Custom Name (Optional)</label>
              <input type="text" name="customName" id="customNameField" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="e.g., 'My Northern Lights #1'">
              <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Give your plant a unique name for easier tracking</div>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1 dark:text-gray-200">Location</label>
              <input type="text" name="location" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="e.g., Indoor Tent, Outdoor Garden" value="Default Garden">
            </div>
          </div>
          
          <div id="plantInfo" class="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 p-3 rounded">
            <!-- Plant information will be displayed here -->
          </div>
          
          <!-- Phase Customization Section -->
          <div id="phaseCustomization" class="border dark:border-gray-600 rounded-lg p-4">
            <h3 class="font-semibold mb-3 dark:text-white">⏱️ Phase Duration (Optional)</h3>
            <div class="text-xs text-gray-500 dark:text-gray-400 mb-3">
              Adjust phase durations if your variety differs from standard timing
            </div>
            <div id="phaseInputs" class="space-y-2">
              <!-- Phase inputs will be populated here -->
            </div>
            <div class="mt-2 text-xs text-gray-500 dark:text-gray-400">
              💡 Tip: Cannabis flowering can vary from 6-12 weeks depending on strain
            </div>
          </div>
          
          <div class="border dark:border-gray-600 rounded-lg p-4">
            <h3 class="font-semibold mb-3 dark:text-white">🗓️ Automatic Reminders</h3>
            <div class="space-y-3">
              <div class="flex items-center space-x-2">
                <input type="checkbox" id="enableWatering" name="enableWatering" checked class="rounded">
                <label for="enableWatering" class="text-sm dark:text-gray-200">💧 Watering reminders</label>
              </div>
              <div id="wateringOptions" class="ml-6 space-y-2">
                <div class="flex items-center space-x-2">
                  <label class="text-xs dark:text-gray-300">Interval:</label>
                  <select name="wateringInterval" class="text-xs p-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <option value="1">Daily</option>
                    <option value="2" selected>Every 2 days</option>
                    <option value="3">Every 3 days</option>
                    <option value="4">Every 4 days</option>
                    <option value="7">Weekly</option>
                  </select>
                </div>
              </div>
              
              <div class="flex items-center space-x-2">
                <input type="checkbox" id="enableFertilizing" name="enableFertilizing" checked class="rounded">
                <label for="enableFertilizing" class="text-sm dark:text-gray-200">🌿 Fertilizing reminders</label>
              </div>
              <div id="fertilizingOptions" class="ml-6 space-y-2">
                <div class="flex items-center space-x-2">
                  <label class="text-xs dark:text-gray-300">Interval:</label>
                  <select name="fertilizingInterval" class="text-xs p-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <option value="7">Weekly</option>
                    <option value="14" selected>Every 2 weeks</option>
                    <option value="21">Every 3 weeks</option>
                    <option value="30">Monthly</option>
                  </select>
                </div>
                <div class="flex items-center space-x-2">
                  <label class="text-xs dark:text-gray-300">Start after:</label>
                  <select name="fertilizingDelay" class="text-xs p-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <option value="0">Immediately</option>
                    <option value="7" selected>1 week</option>
                    <option value="14">2 weeks</option>
                  </select>
                </div>
              </div>
              
              <div class="flex items-center space-x-2">
                <input type="checkbox" id="enablePhaseReminders" name="enablePhaseReminders" checked class="rounded">
                <label for="enablePhaseReminders" class="text-sm dark:text-gray-200">📋 Phase transition reminders</label>
              </div>
              
              <div class="flex items-center space-x-2">
                <input type="checkbox" id="enableWeeklyChecks" name="enableWeeklyChecks" checked class="rounded">
                <label for="enableWeeklyChecks" class="text-sm dark:text-gray-200">🔍 Weekly check-ups</label>
              </div>
              
              <div class="flex items-center space-x-2">
                <input type="checkbox" id="enableHarvestReminder" name="enableHarvestReminder" checked class="rounded">
                <label for="enableHarvestReminder" class="text-sm dark:text-gray-200">🌾 Harvest reminder</label>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium mb-1 dark:text-gray-200">Date</label>
          <input type="date" name="date" value="${date}" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" required>
        </div>
        
        <div>
          <label class="block text-sm font-medium mb-1 dark:text-gray-200">Description</label>
          <textarea name="description" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" rows="3"></textarea>
        </div>
        
        <div class="flex justify-end space-x-2">
          <button type="button" class="px-4 py-2 text-gray-600 dark:text-gray-300" id="cancelBtn">Cancel</button>
          <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700" id="saveBtn">Save</button>
        </div>
      </form>
    </div>
  `;

  document.body.appendChild(modal);

  // Get form elements
  const form = document.getElementById('eventForm');
  const eventTypeSelect = document.getElementById('eventTypeSelect');
  const plantCategorySelect = document.getElementById('plantCategorySelect');
  const plantTypeSelect = document.getElementById('plantTypeSelect');
  const customNameField = document.getElementById('customNameField');
  const titleField = document.getElementById('titleField');
  const cancelBtn = document.getElementById('cancelBtn');
  const saveBtn = document.getElementById('saveBtn');

  // Checkbox elements
  const enableWatering = document.getElementById('enableWatering');
  const enableFertilizing = document.getElementById('enableFertilizing');
  const wateringOptions = document.getElementById('wateringOptions');
  const fertilizingOptions = document.getElementById('fertilizingOptions');

  // Add event listeners
  eventTypeSelect.addEventListener('change', function() {
    togglePlantingFields(this.value);
  });

  plantCategorySelect.addEventListener('change', function() {
    updatePlantOptions(this.value);
  });

  plantTypeSelect.addEventListener('change', function() {
    updatePlantInfo();
    updateCustomNamePlaceholder();
    updatePhaseInputs();
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
          enableHarvestReminder: formData.get('enableHarvestReminder') === 'on'
        };

        // Collect custom phase durations
        const customPhaseDurations = {};
        const selectedPlant = PLANTS_DATA[formData.get('plantType')];
        if (selectedPlant) {
          for (const phaseName of Object.keys(selectedPlant.phases)) {
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

  function updatePlantInfo() {
    const plantInfo = document.getElementById('plantInfo');
    const selectedPlant = PLANTS_DATA[plantTypeSelect.value];
    
    if (selectedPlant) {
      let infoHtml = `<strong>${selectedPlant.name}</strong> (${selectedPlant.category})`;
      
      if (selectedPlant.legalNote) {
        infoHtml += `<div class="mt-2 p-2 bg-yellow-100 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700 rounded">
          <strong>⚠️ Legal Notice:</strong> ${selectedPlant.legalNote}
        </div>`;
      }
      
      const totalDays = Object.values(selectedPlant.phases).reduce((sum, phase) => sum + phase.days, 0);
      infoHtml += `<div class="mt-2"><strong>Growing cycle:</strong> ${totalDays} days (${Math.round(totalDays/7)} weeks)</div>`;
      
      // Show phase breakdown
      const phaseList = Object.entries(selectedPlant.phases).map(([name, data]) => 
        `${name}: ${data.days} days`
      ).join(', ');
      infoHtml += `<div class="mt-1 text-xs"><strong>Phases:</strong> ${phaseList}</div>`;
      
      if (selectedPlant.careTips.temperature) {
        infoHtml += `<div><strong>Temperature:</strong> ${selectedPlant.careTips.temperature}</div>`;
      }
      
      if (selectedPlant.careTips.sunlight) {
        infoHtml += `<div><strong>Light:</strong> ${selectedPlant.careTips.sunlight}</div>`;
      }
      
      plantInfo.innerHTML = infoHtml;
    }
  }

  function updatePhaseInputs() {
    const phaseInputs = document.getElementById('phaseInputs');
    const selectedPlant = PLANTS_DATA[plantTypeSelect.value];
    
    if (!selectedPlant) {
      phaseInputs.innerHTML = '';
      return;
    }
    
    let inputsHtml = '';
    
    for (const [phaseName, phaseData] of Object.entries(selectedPlant.phases)) {
      const isFloweringPhase = phaseName.toLowerCase().includes('flower') || 
                              phaseName.toLowerCase().includes('bloom') ||
                              phaseName.toLowerCase().includes('fruiting');
      
      const phaseEmoji = getPhaseEmoji(phaseName);
      const helpText = getPhaseHelpText(phaseName, selectedPlant.category);
      
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

  // Initialize plant info if planting is preselected
  if (eventTypeValue === 'planting') {
    setTimeout(() => {
      updatePlantInfo();
      updateCustomNamePlaceholder();
      updatePhaseInputs();
    }, 100);
  }
}

function getPhaseHelpText(phaseName, category) {
  const helpTexts = {
    'Cannabis': {
      'flowering': 'Cannabis flowering varies widely: Indica 6-8 weeks, Sativa 8-12 weeks, Autoflower 4-6 weeks',
      'vegetative': 'Longer veg = bigger plants. Indoor: 4-8 weeks, Outdoor: depends on season',
      'preflower': 'Shows sex, usually 1-2 weeks after switching to 12/12'
    },
    'Vegetables': {
      'flowering': 'Varies by variety and growing conditions',
      'fruiting': 'Time from fruit set to harvest readiness'
    }
  };
  
  return helpTexts[category]?.[phaseName] || null;
}

// Enhanced addPlanting function with custom phase durations
async function addPlantingWithOptions(plantType, startDate, location, customName, reminderOptions, customPhaseDurations = {}) {
  const db = await openDB('gardening-calendar');
  const plantData = PLANTS_DATA[plantType];
  
  if (!plantData) {
    throw new Error(`Plant type ${plantType} not found in database`);
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
  
  // Add planting record
  const planting = {
    plantType,
    plantName: plantData.name,
    displayName: displayName,
    customName: customName,
    category: plantData.category || 'Other',
    location,
    startDate: startDate,
    completionDate: completionDate.toISOString().split('T')[0],
    phases,
    currentPhase: Object.keys(modifiedPlantData.phases)[0],
    status: 'active',
    notes: [],
    legalNote: plantData.legalNote || null,
    reminderOptions,
    customPhaseDurations: Object.keys(customPhaseDurations).length > 0 ? customPhaseDurations : null
  };
  
  const tx = db.transaction(['plantings', 'events'], 'readwrite');
  const plantingId = await tx.objectStore('plantings').add(planting);
  
  // Add planting event
  let plantingDescription = `Start planting ${displayName}`;
  if (plantData.legalNote) {
    plantingDescription += `\n\n⚠️ LEGAL NOTICE: ${plantData.legalNote}`;
  }
  
  // Add custom duration info to description
  if (Object.keys(customPhaseDurations).length > 0) {
    plantingDescription += `\n\n🕐 Custom Phase Durations:`;
    for (const [phase, days] of Object.entries(customPhaseDurations)) {
      const originalDays = plantData.phases[phase]?.days;
      plantingDescription += `\n- ${phase}: ${days} days (standard: ${originalDays} days)`;
    }
  }
  
  plantingDescription += `\n\nTotal cycle: ${totalDays} days (${Math.round(totalDays/7)} weeks)`;
  plantingDescription += `\n\nCare Tips:\n${Object.entries(plantData.careTips).map(([key, value]) => `- ${key}: ${value}`).join('\n')}`;

  await tx.objectStore('events').add({
    title: `🌱 Plant ${displayName}`,
    date: startDate,
    type: 'planting',
    description: plantingDescription,
    plantingId
  });
  
  // Add events based on user preferences using modified phase data
  for (let i = 0; i < phases.length; i++) {
    const phase = phases[i];
    
    // Add phase transition events
    if (reminderOptions.enablePhaseReminders) {
      let phaseTitle = `${getPhaseEmoji(phase.name)} ${displayName}: ${phase.name} phase`;
      if (phase.isCustomDuration) {
        phaseTitle += ` (${phase.days}d custom)`;
      }
      
      await tx.objectStore('events').add({
        title: phaseTitle,
        date: phase.startDate,
        type: 'maintenance',
        description: `${phase.description}\n\nCare Instructions:\n${phase.care}${phase.isCustomDuration ? `\n\n⏱️ Custom duration: ${phase.days} days` : ''}`,
        plantingId
      });
    }

    // Add weekly check-ins for longer phases
    if (reminderOptions.enableWeeklyChecks && phase.days > 14) {
      const weeklyChecks = Math.floor(phase.days / 7);
      for (let week = 1; week <= weeklyChecks; week++) {
        const checkDate = new Date(phase.startDate);
        checkDate.setDate(checkDate.getDate() + (week * 7));
        
        if (checkDate < new Date(completionDate)) {
          await tx.objectStore('events').add({
            title: `📋 ${displayName}: Week ${week} check (${phase.name})`,
            date: checkDate.toISOString().split('T')[0],
            type: 'maintenance',
            description: `Weekly check during ${phase.name} phase\n\n${phase.care}\n\nLook for signs of:\n${getPhaseCheckpoints(phase.name, plantData)}`,
            plantingId
          });
        }
      }
    }

    // Add watering reminders
    if (reminderOptions.enableWatering) {
      let wateringDate = new Date(phase.startDate);
      const phaseEnd = new Date(wateringDate);
      phaseEnd.setDate(phaseEnd.getDate() + phase.days);

      while (wateringDate < phaseEnd) {
        await tx.objectStore('events').add({
          title: `💧 Water ${displayName}`,
          date: wateringDate.toISOString().split('T')[0],
          type: 'watering',
          description: `${plantData.careTips.watering || 'Check soil moisture and water as needed'}\n\nPhase: ${phase.name}\nCare: ${phase.care}`,
          plantingId
        });
        wateringDate.setDate(wateringDate.getDate() + reminderOptions.wateringInterval);
      }
    }

    // Add fertilizing reminders
    if (reminderOptions.enableFertilizing && phase.days > 14 && 
        (phase.name === 'vegetative' || phase.name === 'flowering' || phase.name === 'fruiting')) {
      const fertilizeDate = new Date(phase.startDate);
      fertilizeDate.setDate(fertilizeDate.getDate() + reminderOptions.fertilizingDelay);
      
      const phaseEnd = new Date(phase.startDate);
      phaseEnd.setDate(phaseEnd.getDate() + phase.days);
      
      while (fertilizeDate < phaseEnd) {
        await tx.objectStore('events').add({
          title: `🌿 Fertilize ${displayName}`,
          date: fertilizeDate.toISOString().split('T')[0],
          type: 'fertilizing',
          description: `${plantData.careTips.fertilizing || 'Apply appropriate fertilizer'}\n\nPhase: ${phase.name}`,
          plantingId
        });
        fertilizeDate.setDate(fertilizeDate.getDate() + reminderOptions.fertilizingInterval);
      }
    }
  }
  
  // Add final harvest/completion event
  if (reminderOptions.enableHarvestReminder) {
    const finalPhase = Object.keys(modifiedPlantData.phases).pop();
    const eventTitle = finalPhase === 'harvest' ? `🌾 Harvest ${displayName}` : `✅ Complete ${displayName} cycle`;
    
    let harvestDescription = `Time to ${finalPhase === 'harvest' ? 'harvest' : 'complete'} your ${displayName}!`;
    
    if (Object.keys(customPhaseDurations).length > 0) {
      harvestDescription += `\n\n⏱️ This plant used custom phase durations.`;
    }
    
    if (plantData.commonProblems && Object.keys(plantData.commonProblems).length > 0) {
      harvestDescription += `\n\nCommon Problems to Check For:\n${Object.entries(plantData.commonProblems).map(([problem, solution]) => `- ${problem}: ${solution}`).join('\n')}`;
    }
    
    await tx.objectStore('events').add({
      title: eventTitle,
      date: completionDate.toISOString().split('T')[0],
      type: finalPhase === 'harvest' ? 'harvesting' : 'maintenance',
      description: harvestDescription,
      plantingId
    });
  }
  
  await tx.done;
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