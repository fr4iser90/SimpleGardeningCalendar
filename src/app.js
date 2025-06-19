export function initializeApp() {
  const app = document.getElementById('app');
  
  // Create the main layout
  app.innerHTML = `
    <div class="min-h-screen">
      <nav class="bg-green-600 text-white p-4">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-xl font-bold">🌱 Gardening Calendar</h1>
          <div class="flex items-center space-x-4">
            <button id="plantLibraryBtn" class="p-2 hover:bg-green-700 rounded">📚 Plant Library</button>
            <button id="googleCalendarBtn" class="p-2 hover:bg-green-700 rounded">🗓️ Google Calendar</button>
            <button id="themeToggle" class="p-2 hover:bg-green-700 rounded">🌙</button>
          </div>
        </div>
      </nav>
      
      <main class="container mx-auto p-4">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div class="lg:col-span-3">
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <div id="calendar"></div>
            </div>
          </div>
          
          <div class="space-y-4">
            <section class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-4 dark:text-white">Quick Actions</h2>
              <div class="space-y-2">
                <button id="addPlantBtn" class="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
                  🌱 Add Plant
                </button>
                <button id="scheduleTaskBtn" class="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
                  📅 Schedule Task
                </button>
                <button id="viewPlantsBtn" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                  🌿 View My Plants
                </button>
              </div>
            </section>
            
            <section class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-4 dark:text-white">Plant Categories</h2>
              <div id="plantCategories" class="space-y-2">
                <!-- Categories will be populated here -->
              </div>
            </section>
            
            <section class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-4 dark:text-white">Upcoming Tasks</h2>
              <div id="upcomingTasks" class="space-y-2">
                <!-- Tasks will be populated here -->
              </div>
            </section>
            
            <section class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-4 dark:text-white">Weather</h2>
              <div id="weather" class="text-center dark:text-gray-200">
                <!-- Weather info will be added here -->
                <p>Local weather information will appear here</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  `;

  // Initialize theme toggle
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    themeToggle.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
  });

  // Check system preference for dark mode
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
    themeToggle.textContent = '☀️';
  }

  // Initialize quick action buttons
  initializeQuickActions();
  
  // Load plant categories
  loadPlantCategories();
  
  // Load upcoming tasks
  loadUpcomingTasks();
  
  // Listen for refresh events
  document.addEventListener('refreshSidebar', () => {
    loadPlantCategories();
    loadUpcomingTasks();
  });
}

function initializeQuickActions() {
  const addPlantBtn = document.getElementById('addPlantBtn');
  const scheduleTaskBtn = document.getElementById('scheduleTaskBtn');
  const viewPlantsBtn = document.getElementById('viewPlantsBtn');
  const plantLibraryBtn = document.getElementById('plantLibraryBtn');
  const googleCalendarBtn = document.getElementById('googleCalendarBtn');

  addPlantBtn.addEventListener('click', () => {
    // Trigger the calendar's add event modal with planting pre-selected
    const today = new Date().toISOString().split('T')[0];
    showQuickPlantModal(today);
  });

  scheduleTaskBtn.addEventListener('click', () => {
    // Trigger the calendar's add event modal
    const today = new Date().toISOString().split('T')[0];
    const event = new CustomEvent('showAddEventModal', { detail: { date: today } });
    document.dispatchEvent(event);
  });

  viewPlantsBtn.addEventListener('click', () => {
    showMyPlantsModal();
  });

  plantLibraryBtn.addEventListener('click', () => {
    showPlantLibraryModal();
  });

  googleCalendarBtn.addEventListener('click', async () => {
    const { showGoogleCalendarSetup } = await import('./googleCalendarUI.js');
    showGoogleCalendarSetup();
  });
}

async function loadPlantCategories() {
  const { PLANT_CATEGORIES, getPlantingsByCategory } = await import('./db.js');
  const categoriesContainer = document.getElementById('plantCategories');
  
  if (!categoriesContainer) return;
  
  categoriesContainer.innerHTML = '';
  
  for (const category of PLANT_CATEGORIES) {
    const plantings = await getPlantingsByCategory(category);
    const activeCount = plantings.filter(p => p.status === 'active').length;
    
    const categoryEl = document.createElement('div');
    categoryEl.className = 'flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600';
    categoryEl.innerHTML = `
      <span class="dark:text-gray-200">${category}</span>
      <span class="text-sm text-gray-500 dark:text-gray-400">${activeCount}</span>
    `;
    
    categoryEl.addEventListener('click', () => {
      showCategoryPlantsModal(category, plantings);
    });
    
    categoriesContainer.appendChild(categoryEl);
  }
}

async function loadUpcomingTasks() {
  const { openDB } = await import('idb');
  const db = await openDB('gardening-calendar');
  
  const today = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);
  
  const events = await db.getAll('events');
  const upcomingEvents = events
    .filter(event => {
      const eventDate = new Date(event.date);
      return eventDate >= today && eventDate <= nextWeek;
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5);
  
  const tasksContainer = document.getElementById('upcomingTasks');
  if (!tasksContainer) return;
  
  tasksContainer.innerHTML = '';
  
  if (upcomingEvents.length === 0) {
    tasksContainer.innerHTML = '<p class="text-gray-500 dark:text-gray-400 text-sm">No upcoming tasks</p>';
    return;
  }
  
  upcomingEvents.forEach(event => {
    const taskEl = document.createElement('div');
    taskEl.className = 'text-sm p-2 bg-gray-50 dark:bg-gray-700 rounded';
    
    const eventDate = new Date(event.date);
    const isToday = eventDate.toDateString() === today.toDateString();
    const dateStr = isToday ? 'Today' : eventDate.toLocaleDateString();
    
    taskEl.innerHTML = `
      <div class="font-medium dark:text-white">${event.title}</div>
      <div class="text-gray-500 dark:text-gray-400">${dateStr}</div>
    `;
    
    tasksContainer.appendChild(taskEl);
  });
}

function showQuickPlantModal(date) {
  // This will be handled by the calendar module
  const event = new CustomEvent('showAddEventModal', { 
    detail: { date, type: 'planting' } 
  });
  document.dispatchEvent(event);
}

async function showMyPlantsModal() {
  const { getActivePlantings } = await import('./db.js');
  const plantings = await getActivePlantings();
  
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
  
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold dark:text-white">My Active Plants</h2>
        <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onclick="this.closest('.fixed').remove()">✕</button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${plantings.length === 0 ? 
          '<p class="text-gray-500 dark:text-gray-400 col-span-2 text-center py-8">No active plants yet. Start by adding your first plant!</p>' :
          plantings.map(planting => {
            const displayName = planting.displayName || planting.plantName;
            return `
            <div class="border dark:border-gray-600 rounded-lg p-4">
              <div class="flex justify-between items-start mb-2">
                <h3 class="font-semibold dark:text-white">${displayName}</h3>
                <div class="flex items-center space-x-2">
                  <span class="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">${planting.category}</span>
                  <button onclick="deletePlant(${planting.id})" class="text-red-500 hover:text-red-700 text-sm p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20" title="Delete plant and all events">
                    🗑️
                  </button>
                </div>
              </div>
              ${planting.customName ? `<div class="text-xs text-gray-500 dark:text-gray-400 mb-1">Plant type: ${planting.plantName}</div>` : ''}
              <div class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <div><strong>Location:</strong> ${planting.location}</div>
                <div><strong>Started:</strong> ${new Date(planting.startDate).toLocaleDateString()}</div>
                <div><strong>Current Phase:</strong> ${planting.currentPhase}</div>
                <div><strong>Expected Completion:</strong> ${new Date(planting.completionDate).toLocaleDateString()}</div>
              </div>
              <div class="mt-3 flex space-x-2">
                <button onclick="viewPlantDetails(${planting.id})" class="flex-1 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 text-sm">
                  📋 View Details
                </button>
                <button onclick="addPlantNote(${planting.id})" class="flex-1 bg-green-500 text-white p-2 rounded hover:bg-green-600 text-sm">
                  📝 Add Note
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

async function showCategoryPlantsModal(category, plantings) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
  
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold dark:text-white">${category} Plants</h2>
        <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onclick="this.closest('.fixed').remove()">✕</button>
      </div>
      
      <div class="space-y-3">
        ${plantings.length === 0 ? 
          `<p class="text-gray-500 dark:text-gray-400 text-center py-8">No ${category.toLowerCase()} plants yet.</p>` :
          plantings.map(planting => {
            const displayName = planting.displayName || planting.plantName;
            return `
            <div class="border dark:border-gray-600 rounded-lg p-4 flex justify-between items-center">
              <div class="flex-1">
                <h3 class="font-semibold dark:text-white">${displayName}</h3>
                ${planting.customName ? `<div class="text-xs text-gray-500 dark:text-gray-400">Plant type: ${planting.plantName}</div>` : ''}
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  ${planting.location} • Started ${new Date(planting.startDate).toLocaleDateString()} • ${planting.currentPhase}
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <span class="px-2 py-1 rounded text-xs ${
                  planting.status === 'active' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                  planting.status === 'completed' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                  'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                }">
                  ${planting.status}
                </span>
                <button onclick="deletePlant(${planting.id})" class="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20" title="Delete plant and all events">
                  🗑️
                </button>
              </div>
            </div>
          `}).join('')
        }
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Make delete function available globally
  window.deletePlant = deletePlant;
}

// Delete plant and all associated events
async function deletePlant(plantingId) {
  try {
    // Import what we need
    const { openDB } = await import('idb');
    
    // Open database with error handling
    let db;
    try {
      db = await openDB('gardening-calendar');
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
    if (!confirm(`🗑️ Delete "${displayName}"?\n\nThis will permanently delete the plant and all its events.\n\n⚠️ This action cannot be undone!`)) {
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
    } catch (error) {
      console.error('Could not delete planting:', error);
      alert('❌ Failed to delete plant. Please try again.');
      return;
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
    alert(`✅ "${displayName}" deleted successfully!\n\n• Plant record deleted\n• ${deletedEvents} events deleted\n• ${deletedNotes} notes deleted`);
    
  } catch (error) {
    console.error('Error deleting plant:', error);
    alert(`❌ Failed to delete plant: ${error.message}\n\nPlease refresh the page and try again.`);
  }
}

// View detailed plant information
async function viewPlantDetails(plantingId) {
  const { openDB } = await import('idb');
  const { PLANTS_DATA } = await import('./db.js');
  
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
    
    const plantData = PLANTS_DATA[planting.plantType];
    const displayName = planting.displayName || planting.plantName;
    
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
    
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
                <div><strong>Type:</strong> ${planting.plantName}</div>
                ${planting.customName ? `<div><strong>Custom Name:</strong> ${planting.customName}</div>` : ''}
                <div><strong>Category:</strong> ${planting.category}</div>
                <div><strong>Location:</strong> ${planting.location}</div>
                <div><strong>Status:</strong> <span class="px-2 py-1 rounded text-xs ${
                  planting.status === 'active' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                  planting.status === 'completed' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                  'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                }">${planting.status}</span></div>
                <div><strong>Started:</strong> ${new Date(planting.startDate).toLocaleDateString()}</div>
                <div><strong>Expected Completion:</strong> ${new Date(planting.completionDate).toLocaleDateString()}</div>
                <div><strong>Current Phase:</strong> ${planting.currentPhase}</div>
              </div>
              
              ${planting.legalNote ? `
                <div class="mt-3 p-3 bg-yellow-100 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700 rounded">
                  <strong>⚠️ Legal Notice:</strong> ${planting.legalNote}
                </div>
              ` : ''}
            </div>
            
            <!-- Growth Phases -->
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="font-semibold mb-3 dark:text-white">🌱 Growth Phases</h3>
              <div class="space-y-2">
                ${planting.phases.map(phase => {
                  const isCurrentPhase = phase.name === planting.currentPhase;
                  const phaseDate = new Date(phase.startDate);
                  const isPast = phaseDate < new Date();
                  
                  return `
                    <div class="flex items-center justify-between p-2 rounded ${
                      isCurrentPhase ? 'bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700' :
                      isPast ? 'bg-gray-100 dark:bg-gray-600' : 'bg-white dark:bg-gray-800'
                    }">
                      <div class="flex items-center space-x-2">
                        <span class="text-lg">${getPhaseEmoji(phase.name)}</span>
                        <div>
                          <div class="font-medium text-sm dark:text-white">${phase.name}</div>
                          <div class="text-xs text-gray-500 dark:text-gray-400">${phase.days} days</div>
                        </div>
                      </div>
                      <div class="text-right">
                        <div class="text-sm dark:text-white">${phaseDate.toLocaleDateString()}</div>
                        ${isCurrentPhase ? '<div class="text-xs text-green-600 dark:text-green-400">Current</div>' : ''}
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </div>
          
          <!-- Events and Notes -->
          <div class="space-y-4">
            <!-- Recent Events -->
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="font-semibold mb-3 dark:text-white">📅 Recent Events (${events.length})</h3>
              <div class="space-y-2 max-h-40 overflow-y-auto">
                ${events.slice(0, 10).map(event => `
                  <div class="text-sm p-2 bg-white dark:bg-gray-800 rounded">
                    <div class="font-medium dark:text-white">${event.title}</div>
                    <div class="text-gray-500 dark:text-gray-400">${new Date(event.date).toLocaleDateString()}</div>
                  </div>
                `).join('')}
                ${events.length === 0 ? '<p class="text-gray-500 dark:text-gray-400 text-sm">No events yet</p>' : ''}
              </div>
            </div>
            
            <!-- Notes -->
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="font-semibold mb-3 dark:text-white">📝 Notes (${notes.length})</h3>
              <div class="space-y-2 max-h-40 overflow-y-auto">
                ${notes.slice(0, 10).map(note => `
                  <div class="text-sm p-2 bg-white dark:bg-gray-800 rounded">
                    <div class="text-gray-500 dark:text-gray-400 text-xs">${new Date(note.date).toLocaleDateString()}</div>
                    <div class="mt-1 dark:text-white">${note.note}</div>
                  </div>
                `).join('')}
                ${notes.length === 0 ? '<p class="text-gray-500 dark:text-gray-400 text-sm">No notes yet</p>' : ''}
              </div>
              
              <div class="mt-3">
                <textarea id="newNote_${plantingId}" class="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white" rows="2" placeholder="Add a note..."></textarea>
                <button onclick="saveNote(${plantingId})" class="mt-1 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm">
                  💾 Save Note
                </button>
              </div>
            </div>
            
            <!-- Care Tips -->
            ${plantData ? `
              <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 class="font-semibold mb-3 dark:text-white">💡 Care Tips</h3>
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
            🗑️ Delete Plant & All Events
          </button>
          <button onclick="this.closest('.fixed').remove()" class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
            Close
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Make functions available
    window.deletePlant = deletePlant;
    window.saveNote = async function(plantingId) {
      const { addPlantNote } = await import('./db.js');
      const noteText = document.getElementById(`newNote_${plantingId}`).value.trim();
      if (noteText) {
        await addPlantNote(plantingId, noteText);
        document.querySelector('.fixed').remove();
        viewPlantDetails(plantingId); // Refresh the modal
      }
    };
    
  } catch (error) {
    console.error('Error viewing plant details:', error);
    alert('❌ Failed to load plant details');
  }
}

// Quick add note function
async function addPlantNoteQuick(plantingId) {
  const noteText = prompt('📝 Add a note for this plant:');
  if (noteText && noteText.trim()) {
    try {
      const { addPlantNote } = await import('./db.js');
      await addPlantNote(plantingId, noteText.trim());
      alert('✅ Note added successfully!');
      
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

async function showPlantLibraryModal() {
  const { PLANTS_DATA, PLANT_CATEGORIES } = await import('./db.js');
  
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
  
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold dark:text-white">Plant Library</h2>
        <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onclick="this.closest('.fixed').remove()">✕</button>
      </div>
      
      <div class="mb-4">
        <input type="text" id="plantSearch" placeholder="Search plants..." class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      </div>
      
      <div class="mb-4">
        <select id="categoryFilter" class="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <option value="">All Categories</option>
          ${PLANT_CATEGORIES.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
        </select>
      </div>
      
      <div id="plantLibraryContent" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${Object.entries(PLANTS_DATA).map(([key, plant]) => `
          <div class="plant-card border dark:border-gray-600 rounded-lg p-4" data-category="${plant.category}" data-name="${plant.name.toLowerCase()}" data-key="${key}">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-semibold dark:text-white">${plant.name}</h3>
              <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded">${plant.category}</span>
            </div>
            ${plant.legalNote ? `
              <div class="mb-2 p-2 bg-yellow-100 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700 rounded text-xs">
                ⚠️ ${plant.legalNote}
              </div>
            ` : ''}
            <div class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <div><strong>Growing cycle:</strong> ${Object.values(plant.phases).reduce((sum, phase) => sum + phase.days, 0)} days (${Math.round(Object.values(plant.phases).reduce((sum, phase) => sum + phase.days, 0)/7)} weeks)</div>
              ${plant.careTips.sunlight ? `<div><strong>Light:</strong> ${plant.careTips.sunlight}</div>` : ''}
              ${plant.careTips.temperature ? `<div><strong>Temperature:</strong> ${plant.careTips.temperature}</div>` : ''}
            </div>
            <button onclick="showPlantDetails('${key}')" class="mt-3 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 text-sm">
              View Details
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Add search functionality
  const searchInput = document.getElementById('plantSearch');
  const categoryFilter = document.getElementById('categoryFilter');
  
  function filterPlants() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const cards = document.querySelectorAll('.plant-card');
    
    cards.forEach(card => {
      const matchesSearch = card.dataset.name.includes(searchTerm) || card.dataset.key.includes(searchTerm);
      const matchesCategory = !selectedCategory || card.dataset.category === selectedCategory;
      
      card.style.display = matchesSearch && matchesCategory ? 'block' : 'none';
    });
  }
  
  searchInput.addEventListener('input', filterPlants);
  categoryFilter.addEventListener('change', filterPlants);
  
  // Make showPlantDetails available globally
  window.showPlantDetails = function(plantKey) {
    const plant = PLANTS_DATA[plantKey];
    showPlantDetailsModal(plant, plantKey);
  };
}

function showPlantDetailsModal(plant, plantKey) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
  
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold dark:text-white">${plant.name}</h2>
        <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onclick="this.closest('.fixed').remove()">✕</button>
      </div>
      
      ${plant.legalNote ? `
        <div class="mb-4 p-3 bg-yellow-100 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700 rounded">
          <strong>⚠️ Legal Notice:</strong> ${plant.legalNote}
        </div>
      ` : ''}
      
      <div class="space-y-6">
        <div>
          <h3 class="font-semibold mb-2 dark:text-white">Growing Phases</h3>
          <div class="space-y-2">
            ${Object.entries(plant.phases).map(([phase, data]) => `
              <div class="border dark:border-gray-600 rounded p-3">
                <div class="flex justify-between items-center mb-1">
                  <strong class="dark:text-white">${phase.charAt(0).toUpperCase() + phase.slice(1)}</strong>
                  <span class="text-sm text-gray-500 dark:text-gray-400">${data.days} days</span>
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-400 mb-1">${data.description}</div>
                <div class="text-sm"><strong>Care:</strong> ${data.care}</div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div>
          <h3 class="font-semibold mb-2 dark:text-white">Care Tips</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${Object.entries(plant.careTips).map(([tip, value]) => `
              <div class="text-sm">
                <strong class="dark:text-white">${tip.charAt(0).toUpperCase() + tip.slice(1)}:</strong>
                <div class="text-gray-600 dark:text-gray-400">${value}</div>
              </div>
            `).join('')}
          </div>
        </div>
        
        ${plant.commonProblems ? `
          <div>
            <h3 class="font-semibold mb-2 dark:text-white">Common Problems</h3>
            <div class="space-y-2">
              ${Object.entries(plant.commonProblems).map(([problem, solution]) => `
                <div class="text-sm">
                  <strong class="text-red-600 dark:text-red-400">${problem}:</strong>
                  <div class="text-gray-600 dark:text-gray-400">${solution}</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
        
        <div class="flex justify-center">
          <button onclick="startPlanting('${plantKey}')" class="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Start Growing This Plant
          </button>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Make startPlanting available globally
  window.startPlanting = function(plantKey) {
    document.querySelector('.fixed').remove();
    const today = new Date().toISOString().split('T')[0];
    showQuickPlantModal(today);
  };
}