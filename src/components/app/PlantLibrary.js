// PlantLibrary.js
// Plant library and plant details component

import { t, getAllTranslatedPlantData } from '../../core/i18n/index.js';
import { shouldShowCannabis, getCurrentCountry } from '../../core/i18n/index.js';
import { PLANT_TAGS } from '../../core/db/plants/categories.js';

export async function showPlantLibraryModal() {
  const { getPlantRegistry, PLANT_CATEGORIES } = await import('../../core/db/plants/index.js');
  
  // Get translated plant data first, fallback to original registry
  let plantData = new Map();
  try {
    plantData = await getAllTranslatedPlantData();
    if (plantData.size === 0) {
      // Fallback to original registry if no translations available
      plantData = getPlantRegistry();
    }
  } catch (error) {
    console.warn('Failed to load translated plant data, using original registry:', error);
    plantData = getPlantRegistry();
  }
  
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
  
  const plantLibraryTitle = t('plant_library.title');
  const searchPlaceholder = t('plant_library.search_placeholder');
  const allCategories = t('plant_library.all_categories');
  const allTags = t('plant_library.all_tags');
  const viewDetailsText = t('plant_library.view_details');
  const noPhasesText = t('plant_library.no_phases');
  const noCareTipsText = t('plant_library.no_care_tips');
  const commonProblemsText = t('plant_library.common_problems');
  const startGrowingText = t('plant_library.start_growing');
  const lightLabel = t('plant_library.light');
  const temperatureLabel = t('plant_library.temperature');
  const growingCycleLabel = t('plant_library.growing_cycle');
  const noGrowingCycleLabel = t('plant_library.no_growing_cycle');
  
  // Filter plants based on country settings
  const filteredPlants = Array.from(plantData.entries()).filter(([key, plant]) => {
    // Hide cannabis if not allowed in current country
    if (plant.tags && plant.tags.includes(PLANT_TAGS.CANNABIS) && !shouldShowCannabis()) {
      return false;
    }
    return true;
  });
  
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold dark:text-white">${plantLibraryTitle}</h2>
        <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onclick="this.closest('.fixed').remove()">✕</button>
      </div>
      
      <div class="mb-4">
        <input type="text" id="plantSearch" placeholder="${searchPlaceholder}" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium mb-1 dark:text-gray-200">${t('plant_library.category_filter')}</label>
          <select id="categoryFilter" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <option value="">${allCategories}</option>
            ${Object.values(PLANT_CATEGORIES).map(cat => `<option value="${cat}">${t(cat)}</option>`).join('')}
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-medium mb-1 dark:text-gray-200">${t('plant_library.tag_filter')}</label>
          <select id="tagFilter" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <option value="">${allTags}</option>
            ${Object.values(PLANT_TAGS).map(tag => `<option value="${tag}">${t(tag)}</option>`).join('')}
          </select>
        </div>
      </div>
      
      <div id="plantLibraryContent" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${filteredPlants.map(([key, plant]) => {
          // Handle both old and new phase structures
          const plantPhases = plant.phases || plant.environments?.indoor?.phases || {};
          const totalDays = Object.values(plantPhases).reduce((sum, phase) => sum + (phase.days || 0), 0);
          const growingCycleText = totalDays > 0
            ? `${totalDays} days (${Math.round(totalDays/7)} weeks)`
            : noGrowingCycleLabel;
          
          return `
            <div class="plant-card border dark:border-gray-600 rounded-lg p-4" 
                 data-category="${plant.category}" 
                 data-name="${plant.name.toLowerCase()}" 
                 data-key="${key}"
                 data-tags="${(plant.tags || []).join(',')}">
              <div class="flex justify-between items-start mb-2">
                <h3 class="font-semibold dark:text-white">${plant.name}</h3>
                <div class="flex flex-col items-end space-y-1">
                  <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded">${t(plant.category)}</span>
                  ${(plant.tags || []).map(tag => `
                    <span class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">${t(tag)}</span>
                  `).join('')}
                </div>
              </div>
              ${plant.legalNote ? `
                <div class="mb-2 p-2 bg-yellow-100 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700 rounded text-xs">
                  ⚠️ ${plant.legalNote}
                </div>
              ` : ''}
              <div class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <div><strong>${growingCycleLabel}:</strong> ${growingCycleText}</div>
                ${plant.careTips && plant.careTips.sunlight ? `<div><strong>${lightLabel}:</strong> ${plant.careTips.sunlight}</div>` : ''}
                ${plant.careTips && plant.careTips.temperature ? `<div><strong>${temperatureLabel}:</strong> ${plant.careTips.temperature}</div>` : ''}
              </div>
              <button onclick="showPlantDetails('${key}')" class="mt-3 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 text-sm">
                ${viewDetailsText}
              </button>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Add search and filter functionality
  const searchInput = document.getElementById('plantSearch');
  const categoryFilter = document.getElementById('categoryFilter');
  const tagFilter = document.getElementById('tagFilter');
  
  function filterPlants() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedTag = tagFilter.value;
    const cards = document.querySelectorAll('.plant-card');
    
    cards.forEach(card => {
      const matchesSearch = card.dataset.name.includes(searchTerm) || card.dataset.key.includes(searchTerm);
      const matchesCategory = !selectedCategory || card.dataset.category === selectedCategory;
      const matchesTag = !selectedTag || card.dataset.tags.includes(selectedTag);
      
      card.style.display = matchesSearch && matchesCategory && matchesTag ? 'block' : 'none';
    });
  }
  
  searchInput.addEventListener('input', filterPlants);
  categoryFilter.addEventListener('change', filterPlants);
  tagFilter.addEventListener('change', filterPlants);
  
  // Make showPlantDetails available globally
  window.showPlantDetails = function(plantKey) {
    const plant = plantData.get(plantKey);
    showPlantDetailsModal(plant, plantKey);
  };
}

export function showPlantDetailsModal(plant, plantKey) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
  
  // Handle both old and new phase structures
  const plantPhases = plant.phases || plant.environments?.indoor?.phases || {};
  
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
      
      ${(plant.tags || []).length > 0 ? `
        <div class="mb-4">
          <h3 class="font-semibold mb-2 dark:text-white">Tags</h3>
          <div class="flex flex-wrap gap-2">
            ${plant.tags.map(tag => `
              <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">${tag}</span>
            `).join('')}
          </div>
        </div>
      ` : ''}
      
      <div class="space-y-6">
        <div>
          <h3 class="font-semibold mb-2 dark:text-white">Growing Phases</h3>
          <div class="space-y-2">
            ${Object.keys(plantPhases).length > 0 ? Object.entries(plantPhases).map(([phase, data]) => `
              <div class="border dark:border-gray-600 rounded p-3">
                <div class="flex justify-between items-center mb-1">
                  <strong class="dark:text-white">${phase.charAt(0).toUpperCase() + phase.slice(1)}</strong>
                  <span class="text-sm text-gray-500 dark:text-gray-400">${data.days} days</span>
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-400 mb-1">${data.description}</div>
                <div class="text-sm"><strong>Care:</strong> ${data.care}</div>
              </div>
            `).join('') : '<div class="text-gray-500 dark:text-gray-400">No phases available</div>'}
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
            `).join('') : '<div class="text-gray-500 dark:text-gray-400">No care tips available</div>'}
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
            Start Growing
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