// PlantLibrary.js
// Plant library and plant details component

export async function showPlantLibraryModal() {
  const { getPlantRegistry, PLANT_CATEGORIES } = await import('../../core/db/index.js');
  const plantRegistry = getPlantRegistry();
  
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
  
  const plantLibraryTitle = t('plant_library.title');
  const searchPlaceholder = t('plant_library.search_placeholder');
  const allCategories = t('plant_library.all_categories');
  const viewDetailsText = t('plant_library.view_details');
  const noPhasesText = t('plant_library.no_phases');
  const noCareTipsText = t('plant_library.no_care_tips');
  const commonProblemsText = t('plant_library.common_problems');
  const startGrowingText = t('plant_library.start_growing');
  
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold dark:text-white">${plantLibraryTitle}</h2>
        <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onclick="this.closest('.fixed').remove()">✕</button>
      </div>
      
      <div class="mb-4">
        <input type="text" id="plantSearch" placeholder="${searchPlaceholder}" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      </div>
      
      <div class="mb-4">
        <select id="categoryFilter" class="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <option value="">${allCategories}</option>
          ${PLANT_CATEGORIES.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
        </select>
      </div>
      
      <div id="plantLibraryContent" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${Array.from(plantRegistry.entries()).map(([key, plant]) => `
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
              <div><strong>Growing cycle:</strong> ${plant.phases ? Object.values(plant.phases).reduce((sum, phase) => sum + phase.days, 0) : 0} days (${plant.phases ? Math.round(Object.values(plant.phases).reduce((sum, phase) => sum + phase.days, 0)/7) : 0} weeks)</div>
              ${plant.careTips && plant.careTips.sunlight ? `<div><strong>Light:</strong> ${plant.careTips.sunlight}</div>` : ''}
              ${plant.careTips && plant.careTips.temperature ? `<div><strong>Temperature:</strong> ${plant.careTips.temperature}</div>` : ''}
            </div>
            <button onclick="showPlantDetails('${key}')" class="mt-3 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 text-sm">
              ${viewDetailsText}
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
    const plant = plantRegistry.get(plantKey);
    showPlantDetailsModal(plant, plantKey);
  };
}

export function showPlantDetailsModal(plant, plantKey) {
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
            ${plant.phases ? Object.entries(plant.phases).map(([phase, data]) => `
              <div class="border dark:border-gray-600 rounded p-3">
                <div class="flex justify-between items-center mb-1">
                  <strong class="dark:text-white">${phase.charAt(0).toUpperCase() + phase.slice(1)}</strong>
                  <span class="text-sm text-gray-500 dark:text-gray-400">${data.days} days</span>
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-400 mb-1">${data.description}</div>
                <div class="text-sm"><strong>Care:</strong> ${data.care}</div>
              </div>
            `).join('') : '<div class="text-gray-500 dark:text-gray-400">${noPhasesText}</div>'}
          </div>
        </div>
        
        <div>
          <h3 class="font-semibold mb-2 dark:text-white">Care Tips</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${plant.careTips ? Object.entries(plant.careTips).map(([tip, value]) => `
              <div class="text-sm">
                <strong class="dark:text-white">${tip.charAt(0).toUpperCase() + tip.slice(1)}:</strong>
                <div class="text-gray-600 dark:text-gray-400">${value}</div>
              </div>
            `).join('') : '<div class="text-gray-500 dark:text-gray-400">${noCareTipsText}</div>'}
          </div>
        </div>
        
        ${plant.commonProblems ? `
          <div>
            <h3 class="font-semibold mb-2 dark:text-white">${commonProblemsText}</h3>
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
            ${startGrowingText}
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

function showQuickPlantModal(date) {
  // This will be handled by the calendar module
  const event = new CustomEvent('showAddEventModal', { 
    detail: { date, type: 'planting' } 
  });
  document.dispatchEvent(event);
}

// Make functions globally available
window.showPlantLibraryModal = showPlantLibraryModal; 