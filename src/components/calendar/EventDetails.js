import { format } from 'date-fns';
import { openDB } from 'idb';
import { t } from '../../core/i18n/index.js';
import { getPlantNotes, addPlantNote, updatePlantingStatus } from '../../core/db/index.js';
import { DB_NAME, DB_VERSION } from '../../core/db/connection.js';
import { formatDateWithLocale } from '../../core/db/utils.js';

export async function showEventDetails(event) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
  
  let notesHtml = '';
  let plantingStatus = '';
  let plantingInfo = '';
  
  if (event.extendedProps.plantingId) {
    const notes = await getPlantNotes(event.extendedProps.plantingId);
    notesHtml = `
      <div class="mt-6">
        <h3 class="text-lg font-semibold mb-3 dark:text-white flex items-center">
          <span class="mr-2">📝</span>
          ${t('plants_list.notes')}
        </h3>
        <div class="space-y-3 max-h-48 overflow-y-auto">
          ${notes.length > 0 ? notes.map(note => `
            <div class="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 p-3 rounded-r-lg">
              <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">
                ${format(new Date(note.date), 'MMM d, yyyy h:mm a')}
              </div>
              <div class="text-sm dark:text-gray-200">${note.note}</div>
            </div>
          `).join('') : `
            <div class="text-center text-gray-500 dark:text-gray-400 py-4">
              ${t('plants.no_notes')}
            </div>
          `}
        </div>
        <div class="mt-4">
          <textarea id="newNote" class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows="3" placeholder="${t('plants.add_note')}..."></textarea>
          <button onclick="addNote(${event.extendedProps.plantingId})" class="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center">
            <span class="mr-2">➕</span>
            ${t('btn.add_note')}
          </button>
        </div>
      </div>
    `;

    const db = await openDB(DB_NAME, DB_VERSION);
    const planting = await db.get('plantings', event.extendedProps.plantingId);
    if (planting) {
      const displayName = planting.displayName || planting.plantName;
      let customDurationInfo = '';
      
      if (planting.customPhaseDurations) {
        customDurationInfo = `
          <div class="mt-3 p-3 bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700 rounded-lg">
            <div class="flex items-center text-sm text-purple-700 dark:text-purple-300">
              <span class="mr-2">⏱️</span>
              ${t('event.details.custom_phase_durations')}
            </div>
          </div>
        `;
      }
      
      plantingInfo = `
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
          <h3 class="text-lg font-semibold mb-3 dark:text-white flex items-center">
            <span class="mr-2">🌱</span>
            ${t('event.details.plant_info')}
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div class="flex justify-between">
              <span class="font-medium text-gray-600 dark:text-gray-300">${t('event.details.plant')}:</span>
              <span class="dark:text-white">${displayName}${planting.customName ? ` (${t(planting.plantName)})` : ''}</span>
            </div>
            <div class="flex justify-between">
              <span class="font-medium text-gray-600 dark:text-gray-300">${t('event.details.category')}:</span>
              <span class="dark:text-white">${t(planting.category)}</span>
            </div>
            <div class="flex justify-between">
              <span class="font-medium text-gray-600 dark:text-gray-300">${t('event.details.environment')}:</span>
              <span class="dark:text-white">${t(planting.environment)}</span>
            </div>
            ${planting.location ? `
              <div class="flex justify-between">
                <span class="font-medium text-gray-600 dark:text-gray-300">${t('event.details.location')}:</span>
                <span class="dark:text-white">${planting.location}</span>
              </div>
            ` : ''}
            <div class="flex justify-between">
              <span class="font-medium text-gray-600 dark:text-gray-300">${t('event.details.current_phase')}:</span>
              <span class="dark:text-white">${t('phase.' + planting.currentPhase)}</span>
            </div>
            <div class="flex justify-between">
              <span class="font-medium text-gray-600 dark:text-gray-300">${t('event.details.started')}:</span>
              <span class="dark:text-white">${formatDateWithLocale(planting.startDate)}</span>
            </div>
            <div class="flex justify-between">
              <span class="font-medium text-gray-600 dark:text-gray-300">${t('event.details.expected_completion')}:</span>
              <span class="dark:text-white">${formatDateWithLocale(planting.completionDate)}</span>
            </div>
          </div>
          ${customDurationInfo}
        </div>
      `;

      plantingStatus = `
        <div class="mt-6">
          <h3 class="text-lg font-semibold mb-3 dark:text-white flex items-center">
            <span class="mr-2">📊</span>
            ${t('planting.status.title')}
          </h3>
          <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
            <select id="plantingStatus" class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" onchange="updateStatus(${event.extendedProps.plantingId}, this.value)">
              <option value="active" ${planting.status === 'active' ? 'selected' : ''}>${t('planting.status.active')}</option>
              <option value="completed" ${planting.status === 'completed' ? 'selected' : ''}>${t('planting.status.completed')}</option>
              <option value="failed" ${planting.status === 'failed' ? 'selected' : ''}>${t('planting.status.failed')}</option>
            </select>
          </div>
        </div>
      `;
    }
  }

  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
      <!-- Header -->
      <div class="flex justify-between items-start mb-6">
        <div class="flex-1">
          <h2 class="text-2xl font-bold dark:text-white mb-2">${event.title}</h2>
          <div class="flex items-center space-x-2">
            <span class="px-3 py-1 rounded-full text-sm font-medium text-white" style="background-color: ${event.backgroundColor};">
              ${t('task.' + event.extendedProps.type)}
            </span>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              ${format(new Date(event.start), 'EEEE, MMMM d, yyyy')}
            </span>
          </div>
        </div>
        <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-200" onclick="this.closest('.fixed').remove()">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Content -->
      <div class="space-y-6">
        ${plantingInfo}
        
        <!-- Description -->
        <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
          <h3 class="text-lg font-semibold mb-3 dark:text-white flex items-center">
            <span class="mr-2">📋</span>
            ${t('event.details.description')}
          </h3>
          <div class="text-sm dark:text-gray-200 whitespace-pre-wrap leading-relaxed">${event.extendedProps.description || t('event.details.no_description')}</div>
        </div>

        ${plantingStatus}
        ${notesHtml}
      </div>

      <!-- Footer -->
      <div class="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <button class="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center" onclick="deleteEvent(${event.id}, ${event.extendedProps.plantingId})">
          <span class="mr-2">🗑️</span>
          ${t('btn.delete')}
        </button>
        <button class="px-6 py-3 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors duration-200" onclick="this.closest('.fixed').remove()">
          ${t('btn.close')}
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
    if (window.calendar) {
      window.calendar.refetchEvents();
    }
    
    // Refresh the app sidebar data
    const refreshEvent = new CustomEvent('refreshSidebar');
    document.dispatchEvent(refreshEvent);
  };
}

export async function deleteEvent(eventId, plantingId) {
  if (!confirm(t('planting.delete.confirm'))) {
    return;
  }

  try {
    const db = await openDB(DB_NAME, DB_VERSION);
    
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
    if (window.calendar) {
      window.calendar.refetchEvents();
    }
    
    // Refresh the app sidebar data
    const refreshEvent = new CustomEvent('refreshSidebar');
    document.dispatchEvent(refreshEvent);
    
  } catch (error) {
    console.error('Error deleting event:', error);
    alert(t('planting.delete.error'));
  }
}

// Make deleteEvent available globally
window.deleteEvent = deleteEvent;
