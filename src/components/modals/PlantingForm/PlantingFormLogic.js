import { t } from '../../../core/i18n/index.js';
import { 
  getPlantRegistry, 
  validatePlantingDate 
} from '../../../core/db/index.js';
import { PLANT_CATEGORIES, GROWING_ENVIRONMENTS, SEASONAL_REGIONS } from '../../../core/db/plants/categories.js';
import { getPhaseEmoji } from '../../../core/db/utils.js';

/**
 * PlantingFormLogic - Contains all business logic for the planting form
 */

export function createEnvironmentOptions() {
  return Object.entries(GROWING_ENVIRONMENTS).map(([key, value]) => {
    const translatedEnv = t(value);
    return `<option value="${value}">${translatedEnv}</option>`;
  }).join('');
}

export function createRegionOptions() {
  return Object.entries(SEASONAL_REGIONS).map(([key, value]) => {
    const translatedRegion = t(`region.${value}`);
    return `<option value="${value}">${translatedRegion}</option>`;
  }).join('');
}

export function createCategoryOptions() {
  return Object.values(PLANT_CATEGORIES).map(category => {
    const translatedCategory = t(category) || category;
    return `<option value="${category}">${translatedCategory}</option>`;
  }).join('');
}

export function createPlantOptions(environment = 'environment.indoor') {
  const envKey = environment.replace('environment.', '');
  const registry = getPlantRegistry();
  const plants = Array.from(registry.entries());
  return plants
    .filter(([key, plant]) => plant.environments && plant.environments[envKey])
    .map(([key, plant]) => {
      const legalNote = plant.legalNote ? ' ⚠️' : '';
      return `<option value="${key}" data-category="${plant.category}">${plant.name}${legalNote}</option>`;
    })
    .join('');
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

export function updatePlantOptions(category, environment = 'environment.indoor') {
  const plantTypeSelect = document.getElementById('plantTypeSelect');
  if (!plantTypeSelect) return;
  const envKey = environment.replace('environment.', '');
  const registry = getPlantRegistry();
  const plants = Array.from(registry.entries());
  plantTypeSelect.innerHTML = `<option value="">${t('modal.plant_type.select')}</option>`;
  const filteredPlants = plants.filter(([key, plant]) => {
    const categoryMatch = !category || plant.category === category;
    const environmentMatch = plant.environments && plant.environments[envKey];
    return categoryMatch && environmentMatch;
  });
  filteredPlants.forEach(([key, plant]) => {
    const option = document.createElement('option');
    option.value = key;
    option.dataset.category = plant.category;
    option.textContent = plant.name + (plant.legalNote ? ' ⚠️' : '');
    plantTypeSelect.appendChild(option);
  });
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

  const registry = getPlantRegistry();
  const plantData = registry.get(plantTypeSelect.value);
  const environment = environmentSelect?.value || 'indoor';
  
  if (!plantData || !plantData.environments || !plantData.environments[environment]) {
    plantInfo.style.display = '';
    plantInfo.innerHTML = '<p class="text-red-500">Plant data not found for this environment</p>';
    return;
  }

  const envData = plantData.environments[environment];
  const phases = Object.entries(envData.phases).map(([phase, data]) => {
    const emoji = getPhaseEmoji(phase);
    const editable = data.editable ? ' (editable)' : ' (fixed)';
    return `${emoji} ${phase}: ${data.days} days${editable}`;
  }).join('<br>');

  const totalDays = Object.values(envData.phases).reduce((sum, phase) => sum + phase.days, 0);

  plantInfo.style.display = '';
  plantInfo.innerHTML = `
    <h4 class="font-medium mb-2">${plantData.name}</h4>
    <p class="text-sm mb-2"><strong>Category:</strong> ${plantData.category}</p>
    <p class="text-sm mb-2"><strong>Environment:</strong> ${environment}</p>
    <p class="text-sm mb-2"><strong>Total Duration:</strong> ${totalDays} days</p>
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
  
  const registry = getPlantRegistry();
  const plantData = registry.get(plantTypeSelect.value);
  const environment = environmentSelect?.value || 'indoor';
  
  if (!plantData || !plantData.environments || !plantData.environments[environment]) {
    phaseDurationSection.style.display = 'none';
    return;
  }
  
  const envData = plantData.environments[environment];
  const phases = envData.phases;
  
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
  } else if (environment === 'outdoor') {
    // Outdoor: Only editable phases can be adjusted
    const editablePhases = Object.entries(phases).filter(([phase, data]) => data.editable);
    
    if (editablePhases.length === 0) {
      phaseInputs.innerHTML = `
        <div class="col-span-full p-3 bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded">
          <div class="flex items-start">
            <span class="text-yellow-600 dark:text-yellow-400 mr-2">🌱</span>
            <div>
              <p class="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                Outdoor - Natürliche Jahreszeiten
              </p>
              <p class="text-xs text-yellow-700 dark:text-yellow-300">
                Phasen werden durch natürliche Jahreszeiten bestimmt und können nicht angepasst werden.
              </p>
            </div>
          </div>
        </div>
      `;
    } else {
      const nonEditablePhases = Object.entries(phases).filter(([phase, data]) => !data.editable);
      const nonEditableInfo = nonEditablePhases.map(([phase, data]) => 
        `${getPhaseEmoji(phase)} ${phase}: ${data.days} Tage (fest)`
      ).join('<br>');
      
      phaseInputs.innerHTML = `
        <div class="col-span-full p-3 bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded mb-3">
          <div class="flex items-start">
            <span class="text-yellow-600 dark:text-yellow-400 mr-2">🌱</span>
            <div>
              <p class="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                Outdoor - Natürliche Jahreszeiten
              </p>
              <p class="text-xs text-yellow-700 dark:text-yellow-300">
                ${nonEditableInfo}
              </p>
            </div>
          </div>
        </div>
        ${editablePhases.map(([phase, data]) => `
          <div>
            <label class="block text-sm font-medium mb-1">${getPhaseEmoji(phase)} ${phase}</label>
            <input type="number" name="phase_${phase}" value="${data.days}" min="1" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          </div>
        `).join('')}
      `;
    }
  } else {
    // Indoor or greenhouse: All phases editable
    phaseInputs.innerHTML = Object.entries(phases).map(([phase, data]) => `
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
  
  const registry = getPlantRegistry();
  const plantData = registry.get(plantTypeSelect.value);
  if (plantData) {
    customNameField.placeholder = `e.g., "My ${plantData.name}"`;
  } else {
    customNameField.placeholder = '';
  }
}

export function checkSeasonalTiming() {
  const plantTypeSelect = document.getElementById('plantTypeSelect');
  const environmentSelect = document.getElementById('environmentSelect');
  const regionSelect = document.getElementById('regionSelect');
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
  const region = regionSelect?.value || 'temperate_north';
  
  if (!validation.isValid) {
    seasonalWarning.classList.remove('hidden');
    seasonalWarning.className = 'p-3 bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded mb-3';
    
    if (seasonalMessage) {
      seasonalMessage.innerHTML = `
        <div class="flex items-start">
          <span class="text-yellow-600 dark:text-yellow-400 mr-2">⚠️</span>
          <div>
            <p class="font-medium text-yellow-800 dark:text-yellow-200">${validation.message}</p>
          </div>
        </div>
      `;
    }
    
    if (seasonalDetails) {
      seasonalDetails.innerHTML = `
        <div class="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
          <p><strong>Empfohlene Pflanzzeit:</strong> ${validation.recommendedPeriod || 'Bitte prüfen Sie die Pflanzzeiten für Ihre Region'}</p>
          ${validation.details ? `<p class="mt-1">${validation.details}</p>` : ''}
        </div>
      `;
    }
  } else {
    seasonalWarning.classList.remove('hidden');
    seasonalWarning.className = 'p-3 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded mb-3';
    
    if (seasonalMessage) {
      seasonalMessage.innerHTML = `
        <div class="flex items-start">
          <span class="text-green-600 dark:text-green-400 mr-2">✅</span>
          <div>
            <p class="font-medium text-green-800 dark:text-green-200">Perfekte Pflanzzeit!</p>
          </div>
        </div>
      `;
    }
    
    if (seasonalDetails) {
      seasonalDetails.innerHTML = `
        <div class="mt-2 text-sm text-green-700 dark:text-green-300">
          <p><strong>Ideal für:</strong> ${validation.recommendedPeriod || 'Aktuelle Jahreszeit'}</p>
          ${getPlantingTips(plantTypeSelect.value, region) ? `<p class="mt-1"><strong>Tipps:</strong> ${getPlantingTips(plantTypeSelect.value, region)}</p>` : ''}
        </div>
      `;
    }
  }
}

/**
 * Get planting tips and cutting information for a plant
 * @param {string} plantType - Plant type
 * @param {string} region - Climate region
 * @returns {string} Planting tips
 */
function getPlantingTips(plantType, region) {
  const registry = getPlantRegistry();
  const plantData = registry.get(plantType);
  
  if (!plantData) return '';
  
  const tips = [];
  
  // Add general planting tips
  if (plantData.category === 'Vegetables') {
    tips.push('Direktsaat oder Vorkultur möglich');
  } else if (plantData.category === 'Herbs') {
    tips.push('Stecklinge oder Samen möglich');
  } else if (plantData.category === 'Fruits') {
    tips.push('Containerpflanzen oder wurzelnackte Pflanzen');
  }
  
  // Add cutting information if available
  if (plantData.cuttingInfo) {
    tips.push(`Stecklinge: ${plantData.cuttingInfo}`);
  }
  
  // Add region-specific tips
  if (region === 'mediterranean') {
    tips.push('Schatten in der Mittagshitze, morgens gießen');
  } else if (region === 'temperate_north') {
    tips.push('Nach dem letzten Frost pflanzen, Mulch verwenden');
  } else if (region === 'tropical') {
    tips.push('Ganzjährig möglich, auf Regenzeiten achten');
  }
  
  return tips.join('. ');
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
  
  const registry = getPlantRegistry();
  const plantData = registry.get(plantTypeSelect.value);
  const environment = environmentSelect?.value || 'indoor';
  
  if (!plantData || !plantData.environments || !plantData.environments[environment]) {
    phaseCareSection.style.display = 'none';
    return;
  }
  
  const envData = plantData.environments[environment];
  const phases = envData.phases;
  
  phaseCareSection.style.display = '';
  const medium = 'soil'; // Default-Medium, kann ggf. dynamisch gemacht werden
  
  phaseCareInputs.innerHTML = Object.entries(phases).map(([phase, data]) => {
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
    const registry = getPlantRegistry();
    const plantData = registry.get(plantType);
    
    if (plantData && plantData.environments && plantData.environments[environment]) {
      const envData = plantData.environments[environment];
      const phases = envData.phases;
      
      const isAutoflower = plantType.includes('autoflower');
      
      if (isAutoflower) {
        // Autoflowers: No custom phase durations needed
        // Phases are automatic and cannot be adjusted
      } else if (environment === 'outdoor') {
        // Outdoor: Only editable phases can be adjusted
        Object.entries(phases).forEach(([phase, data]) => {
          if (data.editable) {
            const value = formData.get(`phase_${phase}`);
            if (value) {
              customPhaseDurations[phase] = parseInt(value);
            }
          }
        });
      } else {
        // Indoor or greenhouse: All phases can be adjusted
        Object.keys(phases).forEach(phase => {
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
