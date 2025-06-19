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
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
      <h2 class="text-xl font-semibold mb-4 dark:text-white">Add Garden Event</h2>
      <form id="eventForm" class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1 dark:text-gray-200">Event Type</label>
          <select name="eventType" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" onchange="togglePlantingFields(this.value)">
            <option value="custom" ${eventTypeValue === 'custom' ? 'selected' : ''}>Custom Event</option>
            <option value="planting" ${eventTypeValue === 'planting' ? 'selected' : ''}>Start Planting</option>
          </select>
        </div>
        
        <div id="customFields" style="display: ${eventTypeValue === 'planting' ? 'none' : 'block'};">
          <div>
            <label class="block text-sm font-medium mb-1 dark:text-gray-200">Title</label>
            <input type="text" name="title" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" required>
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
          <div>
            <label class="block text-sm font-medium mb-1 dark:text-gray-200">Plant Category</label>
            <select name="plantCategory" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" onchange="updatePlantOptions(this.value)">
              <option value="">All Categories</option>
              ${categoryOptions}
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium mb-1 dark:text-gray-200">Plant Type</label>
            <select name="plantType" id="plantTypeSelect" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" onchange="updatePlantInfo()">
              ${Object.entries(PLANTS_DATA).map(([value, plant]) => 
                `<option value="${value}" data-category="${plant.category}">${plant.name}${plant.legalNote ? ' ⚠️' : ''}</option>`
              ).join('')}
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium mb-1 dark:text-gray-200">Location</label>
            <input type="text" name="location" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="e.g., Indoor Tent, Outdoor Garden" value="Default Garden">
          </div>
          <div id="plantInfo" class="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 p-3 rounded">
            <!-- Plant information will be displayed here -->
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

  // Add the toggle function
  window.togglePlantingFields = function(value) {
    const customFields = document.getElementById('customFields');
    const plantingFields = document.getElementById('plantingFields');
    
    if (value === 'planting') {
      customFields.style.display = 'none';
      plantingFields.style.display = 'block';
      updatePlantInfo(); // Show initial plant info
    } else {
      customFields.style.display = 'block';
      plantingFields.style.display = 'none';
    }
  };

  // Add the category filter function
  window.updatePlantOptions = function(category) {
    const plantSelect = document.getElementById('plantTypeSelect');
    const options = plantSelect.querySelectorAll('option');
    
    options.forEach(option => {
      if (category === '' || option.dataset.category === category) {
        option.style.display = 'block';
      } else {
        option.style.display = 'none';
      }
    });
    
    // Reset selection if current selection is now hidden
    if (category !== '' && plantSelect.selectedOptions[0]?.dataset.category !== category) {
      const firstVisibleOption = Array.from(options).find(opt => opt.style.display !== 'none');
      if (firstVisibleOption) {
        plantSelect.value = firstVisibleOption.value;
      }
    }
    
    updatePlantInfo();
  };

  // Add plant info update function
  window.updatePlantInfo = function() {
    const plantSelect = document.getElementById('plantTypeSelect');
    const plantInfo = document.getElementById('plantInfo');
    const selectedPlant = PLANTS_DATA[plantSelect.value];
    
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
  };

  // Initialize plant info if planting is preselected
  if (eventTypeValue === 'planting') {
    setTimeout(() => updatePlantInfo(), 100);
  }

  const form = document.getElementById('eventForm');
  const cancelBtn = document.getElementById('cancelBtn');
  const saveBtn = document.getElementById('saveBtn');

  cancelBtn.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    // Disable save button to prevent double submission
    saveBtn.disabled = true;
    saveBtn.textContent = 'Saving...';
    
    try {
      if (formData.get('eventType') === 'planting') {
        await addPlanting(
          formData.get('plantType'),
          formData.get('date'),
          formData.get('location') || 'Default Garden'
        );
      } else {
        const eventData = {
          title: formData.get('title'),
          date: formData.get('date'),
          type: formData.get('type'),
          description: formData.get('description')
        };
        
        const db = await openDB('gardening-calendar');
        await db.add('events', eventData);
      }
      
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
      plantingInfo = `
        <div class="mt-2 text-sm">
          <strong>Plant:</strong> ${planting.plantName}<br>
          <strong>Category:</strong> ${planting.category}<br>
          <strong>Location:</strong> ${planting.location}<br>
          <strong>Current Phase:</strong> ${planting.currentPhase}<br>
          <strong>Started:</strong> ${new Date(planting.startDate).toLocaleDateString()}<br>
          <strong>Expected Completion:</strong> ${new Date(planting.completionDate).toLocaleDateString()}
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