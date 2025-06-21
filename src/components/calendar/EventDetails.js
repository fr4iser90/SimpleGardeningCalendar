import { format } from 'date-fns';
import { openDB } from 'idb';
import { t } from '../../core/i18n/index.js';
import { getPlantNotes, addPlantNote, updatePlantingStatus } from '../../core/db/index.js';

export async function showEventDetails(event) {
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
    if (window.calendar) {
      window.calendar.refetchEvents();
    }
    
    // Refresh the app sidebar data
    const refreshEvent = new CustomEvent('refreshSidebar');
    document.dispatchEvent(refreshEvent);
  };
}

export async function deleteEvent(eventId, plantingId) {
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
    if (window.calendar) {
      window.calendar.refetchEvents();
    }
    
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
