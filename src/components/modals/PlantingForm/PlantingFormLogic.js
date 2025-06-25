import { t } from '../../../core/i18n/index.js';
import { 
  getPlantRegistry, 
  PLANT_CATEGORIES, 
  GROWING_ENVIRONMENTS, 
  SEASONAL_REGIONS, 
  getPlantDataForEnvironment, 
  validatePlantingDate 
} from '../../../core/db/index.js';
import { getPhaseEmoji } from '../../../core/db/utils.js';

/**
 * PlantingFormLogic - Contains all business logic for the planting form
 */

export function createEnvironmentOptions() {
  return Object.entries(GROWING_ENVIRONMENTS).map(([key, value]) => {
    const translatedEnv = t(`environment.${value}`);
    return `<option value="${value}">${translatedEnv}</option>`;
  }).join('');
}

export function createRegionOptions() {
  return Object.entries(SEASONAL_REGIONS).map(([key, value]) => {
    const translatedRegion = t(`region.${value}`);
    return `<option value="${translatedRegion}">${translatedRegion}</option>`;
  }).join('');
}

export function createCategoryOptions() {
  return PLANT_CATEGORIES.map(category => {
    const translatedCategory = t(`plant.category.${category.toLowerCase().replace(/\s+/g, '_').replace(/&/g, '').replace(/\s/g, '')}`) || category;
    return `<option value="${category}">${translatedCategory}</option>`;
  }).join('');
}

export function createPlantOptions() {
  return Array.from(getPlantRegistry().entries()).map(([value, plant]) => 
    `<option value="${value}" data-category="${plant.category}">${plant.name}${plant.legalNote ? ' ⚠️' : ''}</option>`
  ).join('');
}

export function updateEnvironmentFields(environment) {
  const regionField = document.getElementById('regionField');
  if (!regionField) return;
  if (environment === 'outdoor') {
    regionField.style.display = 'block';
  } else {
    regionField.style.display = 'none';
  }
}

export function updatePlantOptions(category) {
  const plantTypeSelect = document.getElementById('plantTypeSelect');
  if (!plantTypeSelect) return;
  
  const options = plantTypeSelect.querySelectorAll('option[data-category]');
  
  options.forEach(option => {
    if (!category || option.dataset.category === category) {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
    }
  });
  
  // Reset selection
  plantTypeSelect.value = '';
}

export function updatePlantInfo() {
  const plantTypeSelect = document.getElementById('plantTypeSelect');
  const plantInfo = document.getElementById('plantInfo');
  const environmentSelect = document.getElementById('environmentSelect');

  if (!plantTypeSelect?.value || !plantInfo) {
    if (plantInfo) {
      plantInfo.style.display = 'none';
      plantInfo.innerHTML = '';
    }
    return;
  }

  const plantData = getPlantDataForEnvironment(plantTypeSelect.value, environmentSelect?.value || 'indoor');
  if (!plantData) {
    plantInfo.style.display = '';
    plantInfo.innerHTML = '<p class="text-red-500">Plant data not found</p>';
    return;
  }

  const phases = Object.entries(plantData.phases).map(([phase, data]) => {
    const emoji = getPhaseEmoji(phase);
    return `${emoji} ${phase}: ${data.days} days`;
  }).join('<br>');

  plantInfo.style.display = '';
  plantInfo.innerHTML = `
    <h4 class="font-medium mb-2">${plantData.name}</h4>
    <p class="text-sm mb-2"><strong>Category:</strong> ${plantData.category}</p>
    <p class="text-sm mb-2"><strong>Total Duration:</strong> ${Object.values(plantData.phases).reduce((sum, phase) => sum + phase.days, 0)} days</p>
    <div class="text-sm">
      <strong>Phases:</strong><br>
      ${phases}
    </div>
  `;
}

export function updatePhaseInputs() {
  const plantTypeSelect = document.getElementById('plantTypeSelect');
  const environmentSelect = document.getElementById('environmentSelect');
  const phaseDurationSection = document.getElementById('phaseDurationSection');
  const phaseInputs = document.getElementById('phaseInputs');
  
  if (!plantTypeSelect?.value || !phaseDurationSection || !phaseInputs) {
    if (phaseDurationSection) {
      phaseDurationSection.style.display = 'none';
    }
    return;
  }
  
  const plantData = getPlantDataForEnvironment(plantTypeSelect.value, environmentSelect?.value || 'indoor');
  if (!plantData || !plantData.phases) {
    phaseDurationSection.style.display = 'none';
    return;
  }
  
  // Check if this is an autoflower (no phase editing needed)
  const isAutoflower = plantTypeSelect.value.includes('autoflower');
  if (isAutoflower) {
    // Autoflowers don't need phase editing - they flower automatically
    phaseInputs.innerHTML = `
      <div class="col-span-full p-3 bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded">
        <div class="flex items-start">
          <span class="text-blue-600 dark:text-blue-400 mr-2">🌱</span>
          <div>
            <p class="text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">
              Autoflower - Automatische Blüte
            </p>
            <p class="text-xs text-blue-700 dark:text-blue-300">
              Autoflowers blühen automatisch unabhängig vom Lichtzyklus. Phasen können nicht angepasst werden.
            </p>
          </div>
        </div>
      </div>
    `;
  } else if (environmentSelect?.value === 'outdoor') {
    // Outdoor cannabis: Only flowering time is editable
    const floweringPhase = plantData.phases.flowering;
    if (floweringPhase) {
      phaseInputs.innerHTML = `
        <div class="col-span-full p-3 bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded mb-3">
          <div class="flex items-start">
            <span class="text-yellow-600 dark:text-yellow-400 mr-2">🌱</span>
            <div>
              <p class="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                Outdoor - Natürliche Jahreszeiten
              </p>
              <p class="text-xs text-yellow-700 dark:text-yellow-300">
                Phasen werden durch natürliche Jahreszeiten bestimmt. Nur die Blütezeit kann je nach Sorte angepasst werden.
              </p>
            </div>
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">🌸 Blütezeit (je nach Sorte 6-12 Wochen)</label>
          <input type="number" name="phase_flowering" value="${floweringPhase.days}" min="42" max="84" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Standard: ${floweringPhase.days} Tage (${Math.round(floweringPhase.days/7)} Wochen)</p>
        </div>
      `;
    }
  } else {
    // Indoor or greenhouse: All phases editable
    phaseInputs.innerHTML = Object.entries(plantData.phases).map(([phase, data]) => `
      <div>
        <label class="block text-sm font-medium mb-1">${getPhaseEmoji(phase)} ${phase}</label>
        <input type="number" name="phase_${phase}" value="${data.days}" min="1" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      </div>
    `).join('');
  }
  
  phaseDurationSection.style.display = 'block';
  updatePhaseCareInputs();
}

export function updateCustomNamePlaceholder() {
  const plantTypeSelect = document.getElementById('plantTypeSelect');
  const customNameField = document.getElementById('customNameField');
  
  if (!plantTypeSelect?.value || !customNameField) return;
  
  const plantData = getPlantDataForEnvironment(plantTypeSelect.value, 'indoor');
  if (plantData) {
    customNameField.placeholder = `e.g., "My ${plantData.name}"`;
  } else {
    customNameField.placeholder = '';
  }
}

export function checkSeasonalTiming() {
  const plantTypeSelect = document.getElementById('plantTypeSelect');
  const environmentSelect = document.getElementById('environmentSelect');
  const dateInput = document.querySelector('input[name="date"]');
  const seasonalWarning = document.getElementById('seasonalWarning');
  const seasonalMessage = document.getElementById('seasonalMessage');
  const seasonalDetails = document.getElementById('seasonalDetails');
  
  if (!plantTypeSelect?.value || !dateInput?.value || !seasonalWarning) {
    if (seasonalWarning) {
      seasonalWarning.classList.add('hidden');
    }
    return;
  }
  
  const validation = validatePlantingDate(plantTypeSelect.value, environmentSelect?.value || 'indoor', dateInput.value);
  
  if (!validation.isValid) {
    seasonalWarning.classList.remove('hidden');
    if (seasonalMessage) seasonalMessage.textContent = validation.message;
    if (seasonalDetails) seasonalDetails.textContent = validation.details || '';
  } else {
    seasonalWarning.classList.add('hidden');
  }
}

export function updatePhaseCareInputs() {
  const plantTypeSelect = document.getElementById('plantTypeSelect');
  const environmentSelect = document.getElementById('environmentSelect');
  const phaseCareSection = document.getElementById('phaseCareSection');
  const phaseCareInputs = document.getElementById('phaseCareInputs');
  if (!plantTypeSelect?.value || !phaseCareInputs || !phaseCareSection) {
    if (phaseCareSection) phaseCareSection.style.display = 'none';
    return;
  }
  phaseCareSection.style.display = '';
  const plantData = getPlantDataForEnvironment(plantTypeSelect.value, environmentSelect?.value || 'indoor');
  if (!plantData || !plantData.phases) return;
  const medium = 'soil'; // Default-Medium, kann ggf. dynamisch gemacht werden
  phaseCareInputs.innerHTML = Object.entries(plantData.phases).map(([phase, data]) => {
    // Werte aus soil, fallback auf direktes Feld
    const watering = (data[medium]?.watering?.interval ?? data.watering?.interval) || '';
    const fertilizing = (data[medium]?.fertilizing?.interval ?? data.fertilizing?.interval) || '';
    return `
      <div class="flex items-center gap-4 mb-2">
        <span class="w-32">${getPhaseEmoji(phase)} ${phase}</span>
        <label class="flex items-center gap-1">
          <input type="checkbox" name="watering_${phase}_enabled" class="accent-blue-500" ${watering ? 'checked' : ''}>
          ${t('modal.reminders.watering')}
        </label>
        <input type="number" name="watering_${phase}_interval" value="${watering}" min="1" class="w-16 p-1 border rounded ml-1 dark:bg-gray-700 dark:text-white bg-white text-gray-900">
        <label class="flex items-center gap-1 ml-4">
          <input type="checkbox" name="fertilizing_${phase}_enabled" class="accent-green-500" ${fertilizing ? 'checked' : ''}>
          ${t('modal.reminders.fertilizing')}
        </label>
        <input type="number" name="fertilizing_${phase}_interval" value="${fertilizing}" min="1" class="w-16 p-1 border rounded ml-1 dark:bg-gray-700 dark:text-white bg-white text-gray-900">
      </div>
    `;
  }).join('');

  // MarkAll-Buttons Event-Handler
  const markAllWatering = document.getElementById('markAllWatering');
  const markAllFertilizing = document.getElementById('markAllFertilizing');
  if (markAllWatering) {
    markAllWatering.onclick = () => {
      const boxes = phaseCareInputs.querySelectorAll('input[type="checkbox"][name$="_enabled"]:not([name^="fertilizing"])');
      const allChecked = Array.from(boxes).every(b => b.checked);
      boxes.forEach(b => b.checked = !allChecked);
    };
  }
  if (markAllFertilizing) {
    markAllFertilizing.onclick = () => {
      const boxes = phaseCareInputs.querySelectorAll('input[type="checkbox"][name^="fertilizing"][name$="_enabled"]');
      const allChecked = Array.from(boxes).every(b => b.checked);
      boxes.forEach(b => b.checked = !allChecked);
    };
  }
}

export function getCustomPhaseDurations(formData) {
  const customPhaseDurations = {};
  const plantType = formData.get('plantType');
  const environment = formData.get('environment');
  
  if (plantType && environment) {
    const plantData = getPlantDataForEnvironment(plantType, environment);
    if (plantData && plantData.phases) {
      const isAutoflower = plantType.includes('autoflower');
      
      if (isAutoflower) {
        // Autoflowers: No custom phase durations needed
        // Phases are automatic and cannot be adjusted
      } else if (environment === 'outdoor') {
        // Outdoor cannabis: Only flowering time can be adjusted
        const floweringValue = formData.get('phase_flowering');
        if (floweringValue) {
          customPhaseDurations.flowering = parseInt(floweringValue);
        }
      } else {
        // Indoor or greenhouse: All phases can be adjusted
        Object.keys(plantData.phases).forEach(phase => {
          const value = formData.get(`phase_${phase}`);
          if (value) {
            customPhaseDurations[phase] = parseInt(value);
          }
        });
      }
    }
  }
  
  return customPhaseDurations;
}
