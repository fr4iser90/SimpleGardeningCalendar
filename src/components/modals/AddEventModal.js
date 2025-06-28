import { openDB } from 'idb';
import { t } from '../../core/i18n/index.js';
import { addPlanting } from '../../core/db/index.js';
import { showButtonSpinner, hideButtonSpinner } from '../ui/LoadingSpinner.js';
import { DB_NAME, DB_VERSION } from '../../core/db/connection.js';
import { createPlantingForm, getPlantingFormData } from './PlantingForm';

export async function showAddEventModal(date, preselectedType = null) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
  modal.selectedDate = date;

  const eventTypeValue = preselectedType === 'planting' ? 'planting' : 'custom';

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
          <div>
            <label class="block text-sm font-medium mb-1 dark:text-gray-200">${t('modal.date.label')}</label>
            <input type="date" name="date" value="${date}" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" required>
          </div>
          <div>
            <label class="block text-sm font-medium mb-1 dark:text-gray-200">${t('modal.description.label')}</label>
            <textarea name="description" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" rows="3"></textarea>
          </div>
        </div>
        
        <div id="plantingFields" style="display: ${eventTypeValue === 'planting' ? 'block' : 'none'};">
          <!-- Planting form will be dynamically created here -->
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
  await initializeAddEventModalHandlers(modal);
}

async function initializeAddEventModalHandlers(modal) {
  const form = document.getElementById('eventForm');
  const eventTypeSelect = document.getElementById('eventTypeSelect');
  const cancelBtn = document.getElementById('cancelBtn');
  const saveBtn = document.getElementById('saveBtn');

  eventTypeSelect.addEventListener('change', async function() {
    await togglePlantingFields(this.value);
  });

  cancelBtn.addEventListener('click', function() {
    modal.remove();
  });

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const eventType = formData.get('eventType');
    const originalText = saveBtn.textContent;
    const spinnerId = showButtonSpinner(saveBtn, originalText, t('modal.saving'));
    try {
      if (eventType === 'planting') {
        await handlePlantingSubmission();
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

  // Initial state
  await togglePlantingFields(eventTypeSelect.value);
}

async function togglePlantingFields(value) {
  const customFields = document.getElementById('customFields');
  const plantingFields = document.getElementById('plantingFields');
  const titleField = document.getElementById('titleField');
  const modal = document.querySelector('.fixed.inset-0');
  const selectedDate = modal?.selectedDate || new Date();

  if (value === 'planting') {
    customFields.style.display = 'none';
    plantingFields.style.display = 'block';
    titleField.removeAttribute('required');
    if (!plantingFields.querySelector('#plantingForm')) {
      const plantingForm = await createPlantingForm(selectedDate);
      plantingFields.appendChild(plantingForm);
    }
  } else {
    customFields.style.display = 'block';
    plantingFields.style.display = 'none';
    titleField.setAttribute('required', 'required');
  }
}

async function handlePlantingSubmission() {
  const plantingForm = document.getElementById('plantingForm');
  if (!plantingForm) throw new Error('Planting form not found');
  const plantingData = getPlantingFormData(plantingForm);
  const selectedCalendarId = localStorage.getItem('selectedLocalCalendarId');
  const { plantingId, calendarId } = await addPlanting(
    plantingData.plantType,
    plantingData.startDate,
    plantingData.location,
    plantingData.customName,
    plantingData.reminderOptions,
    plantingData.customPhaseDurations,
    selectedCalendarId
  );
  if (calendarId && calendarId !== selectedCalendarId) {
    localStorage.setItem('selectedLocalCalendarId', calendarId.toString());
  }
  showNotification(t('notification.planting_added'), 'success');
  document.dispatchEvent(new CustomEvent('refreshCalendar'));
}

async function handleCustomEventSubmission(formData) {
  const title = formData.get('title');
  const type = formData.get('type');
  const description = formData.get('description');
  const date = formData.get('date');
  const selectedCalendarId = localStorage.getItem('selectedLocalCalendarId');
  const db = await openDB(DB_NAME, DB_VERSION);
  await db.add('events', {
    title,
    type,
    description,
    date,
    calendarId: selectedCalendarId,
    createdAt: new Date().toISOString()
  });
  showNotification(t('notification.event_added'), 'success');
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
