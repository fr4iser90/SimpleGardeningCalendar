import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { openDB } from 'idb';
import { format } from 'date-fns';

export async function initializeCalendar() {
  const calendarEl = document.getElementById('calendar');
  const db = await openDB('gardening-calendar');

  const calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    height: 'auto',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth'
    },
    events: async (info, successCallback) => {
      const tx = db.transaction('events', 'readonly');
      const events = await tx.store.index('date').getAll();
      successCallback(events.map(event => ({
        id: event.id,
        title: event.title,
        start: event.date,
        backgroundColor: getEventColor(event.type),
        extendedProps: {
          description: event.description,
          type: event.type
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
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4';
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
      <h2 class="text-xl font-semibold mb-4">Add Garden Event</h2>
      <form id="eventForm" class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1">Title</label>
          <input type="text" name="title" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" required>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Date</label>
          <input type="date" name="date" value="${date}" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" required>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Type</label>
          <select name="type" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600">
            <option value="planting">Planting</option>
            <option value="watering">Watering</option>
            <option value="fertilizing">Fertilizing</option>
            <option value="harvesting">Harvesting</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Description</label>
          <textarea name="description" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" rows="3"></textarea>
        </div>
        <div class="flex justify-end space-x-2">
          <button type="button" class="px-4 py-2 text-gray-600 dark:text-gray-300" id="cancelBtn">Cancel</button>
          <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Save</button>
        </div>
      </form>
    </div>
  `;

  document.body.appendChild(modal);

  const form = document.getElementById('eventForm');
  const cancelBtn = document.getElementById('cancelBtn');

  cancelBtn.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const eventData = {
      title: formData.get('title'),
      date: formData.get('date'),
      type: formData.get('type'),
      description: formData.get('description')
    };

    const db = await openDB('gardening-calendar');
    await db.add('events', eventData);
    document.body.removeChild(modal);
    window.location.reload();
  });
}

function showEventDetails(event) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4';
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
      <div class="flex justify-between items-start mb-4">
        <h2 class="text-xl font-semibold">${event.title}</h2>
        <span class="px-2 py-1 rounded text-sm" style="background-color: ${event.backgroundColor}; color: white;">
          ${event.extendedProps.type}
        </span>
      </div>
      <div class="space-y-3">
        <p class="text-sm">
          <strong>Date:</strong> ${format(new Date(event.start), 'MMMM d, yyyy')}
        </p>
        <p class="text-sm">
          <strong>Description:</strong><br>
          ${event.extendedProps.description || 'No description provided'}
        </p>
      </div>
      <div class="flex justify-end mt-6">
        <button class="px-4 py-2 text-gray-600 dark:text-gray-300" onclick="this.closest('.fixed').remove()">
          Close
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}