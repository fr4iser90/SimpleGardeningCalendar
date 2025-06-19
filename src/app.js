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
}

function initializeQuickActions() {
  const addPlantBtn = document.getElementById('addPlantBtn');
  const scheduleTaskBtn = document.getElementById('scheduleTaskBtn');
  const viewPlantsBtn = document.getElementById('viewPlantsBtn');
  const plantLibraryBtn = document.getElementById('plantLibraryBtn');

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
}

async function loadPlantCategories() {
  const { PLANT_CATEGORIES, getPlantingsByCategory } = await import('./db.js');
  const categoriesContainer = document.getElementById('plantCategories');
  
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
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold dark:text-white">My Active Plants</h2>
        <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onclick="this.closest('.fixed').remove()">✕</button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${plantings.length === 0 ? 
          '<p class="text-gray-500 dark:text-gray-400 col-span-2 text-center py-8">No active plants yet. Start by adding your first plant!</p>' :
          plantings.map(planting => `
            <div class="border dark:border-gray-600 rounded-lg p-4">
              <div class="flex justify-between items-start mb-2">
                <h3 class="font-semibold dark:text-white">${planting.plantName}</h3>
                <span class="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">${planting.category}</span>
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <div><strong>Location:</strong> ${planting.location}</div>
                <div><strong>Started:</strong> ${new Date(planting.startDate).toLocaleDateString()}</div>
                <div><strong>Current Phase:</strong> ${planting.currentPhase}</div>
                <div><strong>Expected Completion:</strong> ${new Date(planting.completionDate).toLocaleDateString()}</div>
              </div>
            </div>
          `).join('')
        }
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
}

async function showCategoryPlantsModal(category, plantings) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
  
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold dark:text-white">${category} Plants</h2>
        <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onclick="this.closest('.fixed').remove()">✕</button>
      </div>
      
      <div class="space-y-3">
        ${plantings.length === 0 ? 
          `<p class="text-gray-500 dark:text-gray-400 text-center py-8">No ${category.toLowerCase()} plants yet.</p>` :
          plantings.map(planting => `
            <div class="border dark:border-gray-600 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h3 class="font-semibold dark:text-white">${planting.plantName}</h3>
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  ${planting.location} • Started ${new Date(planting.startDate).toLocaleDateString()} • ${planting.currentPhase}
                </div>
              </div>
              <span class="px-2 py-1 rounded text-xs ${
                planting.status === 'active' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                planting.status === 'completed' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
              }">
                ${planting.status}
              </span>
            </div>
          `).join('')
        }
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
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
              <div><strong>Growing cycle:</strong> ${Object.values(plant.phases).reduce((sum, phase) => sum + phase.days, 0)} days</div>
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