// PlantsList.js
// Plant management and display component

import { openDB } from 'idb';
import { DB_NAME, DB_VERSION } from '../../core/db/connection.js';
import { t } from '../../core/i18n/index.js';

export async function showMyPlantsModal() {
  const { getActivePlantings } = await import('../../core/db/index.js');
  const plantings = await getActivePlantings();
  
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
  
  const myActivePlantsText = t('plants.my_active_plants');
  const noActiveYetText = t('plants.no_active_yet');
  const viewDetailsText = t('plants.view_details');
  const addNoteText = t('plants.add_note');
  const labelType = t('plants.label.type');
  const labelLocation = t('plants.label.location');
  const labelStarted = t('plants.label.started');
  const labelCurrentPhase = t('plants.label.current_phase');
  const labelExpectedCompletion = t('plants.label.expected_completion');
  const deleteButtonText = t('plants.delete_button');
  const noEventsText = t('plants.no_events');
  const noNotesText = t('plants.no_notes');
  const saveNoteText = t('plants.save_note');
  const deleteConfirmText = t('plants.delete_confirm');
  
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold dark:text-white">${myActivePlantsText}</h2>
        <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onclick="this.closest('.fixed').remove()">✕</button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${plantings.length === 0 ? 
          `<p class="text-gray-500 dark:text-gray-400 col-span-2 text-center py-8">${noActiveYetText}</p>` :
          plantings.map(planting => {
            const displayName = planting.displayName || planting.plantName;
            return `
            <div class="border dark:border-gray-600 rounded-lg p-4">
              <div class="flex justify-between items-start mb-2">
                <h3 class="font-semibold dark:text-white">${displayName}</h3>
                <div class="flex items-center space-x-2">
                  <span class="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">${planting.category}</span>
                  <button onclick="deletePlant(${planting.id})" class="text-red-500 hover:text-red-700 text-sm p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20" title="${deleteButtonText}">
                    🗑️
                  </button>
                </div>
              </div>
              ${planting.customName ? `<div class="text-xs text-gray-500 dark:text-gray-400 mb-1">${labelType}: ${planting.plantName}</div>` : ''}
              <div class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <div><strong>${labelLocation}:</strong> ${planting.location}</div>
                <div><strong>${labelStarted}:</strong> ${new Date(planting.startDate).toLocaleDateString()}</div>
                <div><strong>${labelCurrentPhase}:</strong> ${t('phase.' + planting.currentPhase)}</div>
                <div><strong>${labelExpectedCompletion}:</strong> ${new Date(planting.completionDate).toLocaleDateString()}</div>
              </div>
              <div class="mt-3 flex space-x-2">
                <button onclick="viewPlantDetails(${planting.id})" class="flex-1 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 text-sm">
                  ${viewDetailsText}
                </button>
                <button onclick="addPlantNote(${planting.id})" class="flex-1 bg-green-500 text-white p-2 rounded hover:bg-green-600 text-sm">
                  ${addNoteText}
                </button>
              </div>
            </div>
          `}).join('')
        }
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Make functions available globally
  window.deletePlant = deletePlant;
  window.viewPlantDetails = viewPlantDetails;
  window.addPlantNote = addPlantNoteQuick;
}

// Delete plant and all associated events
export async function deletePlant(plantingId) {
  try {
    // Import what we need
    const { openDB } = await import('idb');
    
    // Open database with error handling
    let db;
    try {
      db = await openDB(DB_NAME, DB_VERSION);
    } catch (error) {
      console.error('Could not open database:', error);
      alert('❌ Database connection failed. Please refresh the page and try again.');
      return;
    }
    
    // Get plant info first with simple approach
    let planting;
    try {
      planting = await db.get('plantings', plantingId);
    } catch (error) {
      console.error('Could not get planting:', error);
      alert('❌ Could not find plant. Please refresh the page and try again.');
      return;
    }
    
    if (!planting) {
      alert('❌ Plant not found');
      return;
    }
    
    const displayName = planting.displayName || planting.plantName || 'Unknown Plant';
    
    // Simple confirmation
    if (!confirm(`🗑️ ${deleteConfirmText} "${displayName}"?\n\nThis will permanently delete the plant and all its events.\n\n⚠️ This action cannot be undone!`)) {
      return;
    }
    
    // Delete everything step by step with error handling
    let deletedEvents = 0;
    let deletedNotes = 0;
    
    // Step 1: Delete events
    try {
      const allEvents = await db.getAll('events');
      const plantEvents = allEvents.filter(event => event.plantingId === plantingId);
      
      for (const event of plantEvents) {
        try {
          await db.delete('events', event.id);
          deletedEvents++;
        } catch (error) {
          console.warn('Could not delete event:', event.id, error);
        }
      }
    } catch (error) {
      console.warn('Could not access events:', error);
    }
    
    // Step 2: Delete notes (if they exist)
    try {
      if (db.objectStoreNames.contains('plantNotes')) {
        const allNotes = await db.getAll('plantNotes');
        const plantNotes = allNotes.filter(note => note.plantingId === plantingId);
        
        for (const note of plantNotes) {
          try {
            await db.delete('plantNotes', note.id);
            deletedNotes++;
          } catch (error) {
            console.warn('Could not delete note:', note.id, error);
          }
        }
      }
    } catch (error) {
      console.warn('Could not access notes:', error);
    }
    
    // Step 3: Delete the plant itself
    try {
      await db.delete('plantings', plantingId);
      console.log('✅ Planting deleted successfully');
    } catch (error) {
      console.warn('Could not delete planting:', error);
    }
    
    // Close modal and refresh UI
    const modal = document.querySelector('.fixed');
    if (modal) {
      modal.remove();
    }
    
    // Refresh calendar and sidebar
    const refreshEvent = new CustomEvent('refreshSidebar');
    document.dispatchEvent(refreshEvent);
    
    // Refresh calendar if it exists and has the refetchEvents method
    if (window.calendar && typeof window.calendar.refetchEvents === 'function') {
      try {
        window.calendar.refetchEvents();
      } catch (error) {
        console.warn('Could not refresh calendar:', error);
      }
    } else {
      // Alternative: dispatch a custom event that the calendar can listen to
      const calendarRefreshEvent = new CustomEvent('refreshCalendar');
      document.dispatchEvent(calendarRefreshEvent);
    }
    
    // Success message with details
    alert(`✅ "${displayName}" ${deleteButtonText} successfully!\n\n• Plant record deleted\n• ${deletedEvents} events deleted\n• ${deletedNotes} notes deleted`);
    
  } catch (error) {
    console.error('Error deleting plant:', error);
    alert(`❌ Failed to delete plant: ${error.message}\n\nPlease refresh the page and try again.`);
  }
}

// View detailed plant information
export async function viewPlantDetails(plantingId) {
  const { openDB } = await import('idb');
  const { getPlantRegistry } = await import('../../core/db/index.js');
  
  try {
    const db = await openDB('gardening-calendar');
    
    // Create a single transaction for all read operations
    const storeNames = ['plantings', 'events'];
    if (db.objectStoreNames.contains('plantNotes')) {
      storeNames.push('plantNotes');
    }
    
    const tx = db.transaction(storeNames, 'readonly');
    
    const planting = await tx.objectStore('plantings').get(plantingId);
    if (!planting) {
      alert('❌ Plant not found');
      return;
    }
    
    const events = await tx.objectStore('events').index('plantingId').getAll(plantingId);
    
    let notes = [];
    if (db.objectStoreNames.contains('plantNotes')) {
      try {
        // Get all notes and filter by plantingId
        const allNotes = await tx.objectStore('plantNotes').getAll();
        notes = allNotes.filter(note => note.plantingId === plantingId);
      } catch (error) {
        console.warn('Could not access plant notes:', error);
      }
    }
    
    await tx.done;
    
    const plantRegistry = getPlantRegistry();
    const plantData = plantRegistry.get(planting.plantType);
    const displayName = planting.displayName || planting.plantName;
    
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
    
    const viewDetailsText = t('plants.view_details');
    const addNoteText = t('plants.add_note');
    const labelType = t('plants.label.type');
    const labelLocation = t('plants.label.location');
    const labelStarted = t('plants.label.started');
    const labelCurrentPhase = t('plants.label.current_phase');
    const labelExpectedCompletion = t('plants.label.expected_completion');
    const deleteButtonText = t('plants.delete_button');
    const noEventsText = t('plants.no_events');
    const noNotesText = t('plants.no_notes');
    const saveNoteText = t('plants.save_note');
    const deleteConfirmText = t('plants.delete_confirm');
    
    modal.innerHTML = `
      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-semibold dark:text-white">🌱 ${displayName}</h2>
          <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onclick="this.closest('.fixed').remove()">✕</button>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Plant Information -->
          <div class="space-y-4">
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="font-semibold mb-3 dark:text-white">📋 Plant Information</h3>
              <div class="space-y-2 text-sm">
                <div><strong>${labelType}:</strong> ${planting.plantName}</div>
                ${planting.customName ? `<div><strong>Custom Name:</strong> ${planting.customName}</div>` : ''}
                <div><strong>Category:</strong> ${planting.category}</div>
                <div><strong>${labelLocation}:</strong> ${planting.location}</div>
                <div><strong>Status:</strong> <span class="px-2 py-1 rounded text-xs ${
                  planting.status === 'active' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                  planting.status === 'completed' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                  'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                }">${planting.status}</span></div>
                <div><strong>${labelStarted}:</strong> ${new Date(planting.startDate).toLocaleDateString()}</div>
                <div><strong>${labelExpectedCompletion}:</strong> ${new Date(planting.completionDate).toLocaleDateString()}</div>
                <div><strong>${labelCurrentPhase}:</strong> ${t('phase.' + planting.currentPhase)}</div>
              </div>
              
              ${planting.legalNote ? `
                <div class="mt-3 p-3 bg-yellow-100 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700 rounded">
                  <strong>${t('plant_details.legal_notice')}</strong> ${planting.legalNote}
                </div>
              ` : ''}
            </div>
            
            <!-- Growth Phases -->
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="font-semibold mb-3 dark:text-white">${t('plants_list.growth_phases')}</h3>
              <div class="space-y-2">
                ${planting.phases ? Object.entries(planting.phases).map(([phase, data]) => {
                  const isCurrentPhase = phase.name === planting.currentPhase;
                  const phaseDate = new Date(data.startDate);
                  const isPast = phaseDate < new Date();
                  
                  return `
                    <div class="flex items-center justify-between p-2 rounded ${
                      isCurrentPhase ? 'bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700' :
                      isPast ? 'bg-gray-100 dark:bg-gray-600' : 'bg-white dark:bg-gray-800'
                    }">
                      <div class="flex items-center space-x-2">
                        <span class="text-lg">${getPhaseEmoji(phase.name)}</span>
                        <div>
                          <div class="font-medium text-sm dark:text-white">${t('phase.' + phase.name)}</div>
                          <div class="text-xs text-gray-500 dark:text-gray-400">${data.days} days</div>
                        </div>
                      </div>
                      <div class="text-right">
                        <div class="text-sm dark:text-white">${phaseDate.toLocaleDateString()}</div>
                        ${isCurrentPhase ? `<div class="text-xs text-green-600 dark:text-green-400">${t('plants_list.current')}</div>` : ''}
                      </div>
                    </div>
                  `;
                }).join('') : `<div class="text-gray-500 dark:text-gray-400">${t('plants_list.no_phase_info')}</div>`}
              </div>
            </div>
          </div>
          
          <!-- Events and Notes -->
          <div class="space-y-4">
            <!-- Recent Events -->
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="font-semibold mb-3 dark:text-white">${t('plants_list.recent_events')} (${events.length})</h3>
              <div class="space-y-2 max-h-40 overflow-y-auto">
                ${events.slice(0, 10).map(event => `
                  <div class="text-sm p-2 bg-white dark:bg-gray-800 rounded">
                    <div class="font-medium dark:text-white">${event.title}</div>
                    <div class="text-gray-500 dark:text-gray-400">${new Date(event.date).toLocaleDateString()}</div>
                  </div>
                `).join('')}
                ${events.length === 0 ? `<p class="text-gray-500 dark:text-gray-400 text-sm">${noEventsText}</p>` : ''}
              </div>
            </div>
            
            <!-- Notes -->
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="font-semibold mb-3 dark:text-white">${t('plants_list.notes')} (${notes.length})</h3>
              <div class="space-y-2 max-h-40 overflow-y-auto">
                ${notes.slice(0, 10).map(note => `
                  <div class="text-sm p-2 bg-white dark:bg-gray-800 rounded">
                    <div class="text-gray-500 dark:text-gray-400 text-xs">${new Date(note.date).toLocaleDateString()}</div>
                    <div class="mt-1 dark:text-white">${note.note}</div>
                  </div>
                `).join('')}
                ${notes.length === 0 ? `<p class="text-gray-500 dark:text-gray-400 text-sm">${noNotesText}</p>` : ''}
              </div>
              
              <div class="mt-3">
                <textarea id="newNote_${plantingId}" class="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white" rows="2" placeholder="${addNoteText}..."></textarea>
                <button onclick="saveNote(${plantingId})" class="mt-1 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm">
                  ${saveNoteText}
                </button>
              </div>
            </div>
            
            <!-- Care Tips -->
            ${plantData ? `
              <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 class="font-semibold mb-3 dark:text-white">${t('plants_list.care_tips')}</h3>
                <div class="space-y-2 text-sm">
                  ${Object.entries(plantData.careTips).map(([tip, value]) => `
                    <div>
                      <strong class="dark:text-white">${tip.charAt(0).toUpperCase() + tip.slice(1)}:</strong>
                      <div class="text-gray-600 dark:text-gray-400">${value}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        </div>
        
        <!-- Action Buttons -->
        <div class="flex justify-between mt-6 pt-4 border-t dark:border-gray-600">
          <button onclick="deletePlant(${plantingId})" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            ${deleteButtonText} ${deleteButtonText} & All Events
          </button>
          <button onclick="this.closest('.fixed').remove()" class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
            ${t('plant_details.close')}
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Make functions available
    window.deletePlant = deletePlant;
    window.saveNote = async function(plantingId) {
      const { addPlantNote } = await import('../../core/db/index.js');
      const noteText = document.getElementById(`newNote_${plantingId}`).value.trim();
      if (noteText) {
        await addPlantNote(plantingId, noteText);
        document.querySelector('.fixed').remove();
        viewPlantDetails(plantingId); // Refresh the modal
      }
    };
    
  } catch (error) {
    console.error('Error viewing plant details:', error);
    alert(t('plants_list.failed_load_details'));
  }
}

// Quick add note function
export async function addPlantNoteQuick(plantingId) {
  const noteText = prompt('📝 ${addNoteText} for this plant:');
  if (noteText && noteText.trim()) {
    try {
      const { addPlantNote } = await import('../../core/db/index.js');
      await addPlantNote(plantingId, noteText.trim());
      alert('✅ ${addNoteText} added successfully!');
      
      // Refresh the modal if it's open
      document.querySelector('.fixed').remove();
      showMyPlantsModal();
    } catch (error) {
      console.error('Error adding note:', error);
      alert('❌ Failed to add note');
    }
  }
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

// Make functions globally available
window.showMyPlantsModal = showMyPlantsModal;
window.deletePlant = deletePlant;
window.viewPlantDetails = viewPlantDetails;
window.addPlantNoteQuick = addPlantNoteQuick;

// Update plant status
export async function updatePlantStatus(plantingId, newStatus) {
  try {
    const db = await openDB(DB_NAME, DB_VERSION);
    const planting = await db.get('plantings', plantingId);
    
    if (planting) {
      planting.status = newStatus;
      await db.put('plantings', planting);
      
      // Refresh the plants list
      await loadPlantsList();
      
      showNotification(`Plant status updated to ${newStatus}`, 'success');
    }
  } catch (error) {
    console.error('Error updating plant status:', error);
    showNotification('Failed to update plant status', 'error');
  }
}
