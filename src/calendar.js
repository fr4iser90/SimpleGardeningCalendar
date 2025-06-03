import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { openDB } from 'idb';
import { format } from 'date-fns';
import { PLANTS_DATA, addPlanting, addPlantNote, getPlantNotes, updatePlantingStatus } from './db';

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
      const db = await openDB('gardening-calendar');
      const tx = db.transaction('events', 'readonly');
      const store = tx.objectStore('events');
      const events = await store.getAll();
      
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
    },
    dateClick: (info) => {
      showAddEventModal(info.dateStr);
    },
    eventClick: (info) => {
      showEventDetails(info.event);
    }
  });

  calendar.render();
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

async function showAddEventModal(date) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
      <h2 class="text-xl font-semibold mb-4 dark:text-white">Add Garden Event</h2>
      <form id="eventForm" class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1 dark:text-gray-200">Event Type</label>
          <select name="eventType" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" onchange="togglePlantingFields(this.value)">
            <option value="custom">Custom Event</option>
            <option value="planting">Start Planting</option>
          </select>
        </div>
        
        <div id="customFields">
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
        
        <div id="plantingFields" style="display: none;">
          <div>
            <label class="block text-sm font-medium mb-1 dark:text-gray-200">Plant Type</label>
            <select name="plantType" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              ${Object.entries(PLANTS_DATA).map(([value, plant]) => 
                `<option value="${value}">${plant.name}</option>`
              ).join('')}
            </select>
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
          <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Save</button>
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
    } else {
      customFields.style.display = 'block';
      plantingFields.style.display = 'none';
    }
  };

  const form = document.getElementById('eventForm');
  const cancelBtn = document.getElementById('cancelBtn');

  cancelBtn.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    try {
      if (formData.get('eventType') === 'planting') {
        await addPlanting(
          formData.get('plantType'),
          formData.get('date')
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
    } catch (error) {
      console.error('Error saving event:', error);
      alert('Failed to save event. Please try again.');
    }
  });
}

async function showEventDetails(event) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
  
  let notesHtml = '';
  let plantingStatus = '';
  
  if (event.extendedProps.plantingId) {
    const notes = await getPlantNotes(event.extendedProps.plantingId);
    notesHtml = `
      <div class="mt-4">
        <h3 class="font-semibold mb-2 dark:text-white">Notes</h3>
        <div class="space-y-2">
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
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
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
        <p class="text-sm">
          <strong>Description:</strong><br>
          ${event.extendedProps.description || 'No description provided'}
        </p>
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
  } catch (error) {
    console.error('Error deleting event:', error);
    alert('Failed to delete event. Please try again.');
  }
}