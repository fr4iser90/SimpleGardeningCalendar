import { t } from '../../../core/i18n/index.js';
import { 
  getPlantRegistry, 
  validatePlantingDate 
} from '../../../core/db/index.js';
import { PLANT_CATEGORIES, GROWING_ENVIRONMENTS, SEASONAL_REGIONS } from '../../../core/db/plants/categories.js';
import { getPhaseEmoji } from '../../../core/db/utils.js';
import { 
  getEnvironmentKey, 
  getPlantDataForEnvironment, 
  getPlantingTips, 
  isAutoflower, 
  getDefaultEnvironment 
} from './PlantingFormUtils.js';
import { getAllTranslatedPlantData } from '../../../core/i18n/index.js';

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
    const translatedRegion = t(value);
    return `<option value="${value}">${translatedRegion}</option>`;
  }).join('');
}

export function createCategoryOptions() {
  return Object.values(PLANT_CATEGORIES).map(category => {
    const translatedCategory = t(category) || category;
    return `<option value="${category}">${translatedCategory}</option>`;
  }).join('');
}

export async function createPlantOptions(environment = getDefaultEnvironment()) {
  const envKey = getEnvironmentKey(environment);
  
  // Try to get translated plant data first
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
  
  const plants = Array.from(plantData.entries());
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
  if (environment === 'environment.outdoor') {
    regionField.style.display = 'block';
  } else {
    regionField.style.display = 'none';
  }
}

export async function updatePlantOptions(category, environment = getDefaultEnvironment()) {
  const plantTypeSelect = document.getElementById('plantTypeSelect');
  if (!plantTypeSelect) return;
  const envKey = getEnvironmentKey(environment);
  
  // Try to get translated plant data first
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
  
  const plants = Array.from(plantData.entries());
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

  const plantEnvData = getPlantDataForEnvironment(plantTypeSelect.value, environmentSelect?.value);
  
  if (!plantEnvData) {
    plantInfo.style.display = '';
    plantInfo.innerHTML = '<p class="text-red-500">Plant data not found for this environment</p>';
    return;
  }

  const { plantData, envData, envKey } = plantEnvData;
  const phases = Object.entries(envData.phases).map(([phase, data]) => {
    const emoji = getPhaseEmoji(phase);
    const editable = data.editable ? ` (${t('phase.editable')})` : ` (${t('phase.fixed')})`;
    return `${emoji} ${t('phase.' + phase)}: ${data.days} ${t('plant.info.days')}${editable}`;
  }).join('<br>');

  const totalDays = Object.values(envData.phases).reduce((sum, phase) => sum + phase.days, 0);

  plantInfo.style.display = '';
  plantInfo.innerHTML = `
    <h4 class="font-medium mb-2">${plantData.name}</h4>
    <p class="text-sm mb-2"><strong>${t('plant.info.category')}</strong> ${plantData.category}</p>
    <p class="text-sm mb-2"><strong>${t('plant.info.environment')}</strong> ${envKey}</p>
    <p class="text-sm mb-2"><strong>${t('plant.info.total_duration')}</strong> ${totalDays} ${t('plant.info.days')}</p>
    <div class="text-sm">
      <strong>${t('plant.info.phases')}</strong><br>
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
  
  const plantEnvData = getPlantDataForEnvironment(plantTypeSelect.value, environmentSelect?.value);
  
  if (!plantEnvData) {
    phaseDurationSection.style.display = 'none';
    return;
  }
  
  const { plantData, envData, envKey } = plantEnvData;
  const phases = envData.phases;
  
  // Check if this is an autoflower (no phase editing needed)
  if (isAutoflower(plantTypeSelect.value)) {
    // Autoflowers don't need phase editing - they flower automatically
    phaseInputs.innerHTML = `
      <div class="col-span-full p-3 bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded">
        <div class="flex items-start">
          <span class="text-blue-600 dark:text-blue-400 mr-2">🌱</span>
          <div>
            <p class="text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">
              ${t('plant.info.autoflower.title')}
            </p>
            <p class="text-xs text-blue-700 dark:text-blue-300">
              ${t('plant.info.autoflower.description')}
            </p>
          </div>
        </div>
      </div>
    `;
  } else if (envKey === 'outdoor') {
    // Outdoor: Only editable phases can be adjusted
    const editablePhases = Object.entries(phases).filter(([phase, data]) => data.editable);
    
    if (editablePhases.length === 0) {
      phaseInputs.innerHTML = `
        <div class="col-span-full p-3 bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded">
          <div class="flex items-start">
            <span class="text-yellow-600 dark:text-yellow-400 mr-2">🌱</span>
            <div>
              <p class="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                ${t('plant.info.outdoor.title')}
              </p>
              <p class="text-xs text-yellow-700 dark:text-yellow-300">
                ${t('plant.info.outdoor.description')}
              </p>
            </div>
          </div>
        </div>
      `;
    } else {
      const nonEditablePhases = Object.entries(phases).filter(([phase, data]) => !data.editable);
      const nonEditableInfo = nonEditablePhases.map(([phase, data]) => 
        `${getPhaseEmoji(phase)} ${t('phase.' + phase)}: ${data.days} ${t('plant.info.days')} (${t('plant.info.outdoor.fixed')})`
      ).join('<br>');
      
      phaseInputs.innerHTML = `
        <div class="col-span-full p-3 bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded mb-3">
          <div class="flex items-start">
            <span class="text-yellow-600 dark:text-yellow-400 mr-2">🌱</span>
            <div>
              <p class="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                ${t('plant.info.outdoor.title')}
              </p>
              <p class="text-xs text-yellow-700 dark:text-yellow-300">
                ${nonEditableInfo}
              </p>
            </div>
          </div>
        </div>
        ${editablePhases.map(([phase, data]) => `
          <div>
            <label class="block text-sm font-medium mb-1">${getPhaseEmoji(phase)} ${t('phase.' + phase)}</label>
            <input type="number" name="phase_${phase}" value="${data.days}" min="1" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          </div>
        `).join('')}
      `;
    }
  } else {
    // Indoor or greenhouse: All phases editable
    phaseInputs.innerHTML = Object.entries(phases).map(([phase, data]) => `
      <div>
        <label class="block text-sm font-medium mb-1">${getPhaseEmoji(phase)} ${t('phase.' + phase)}</label>
        <input type="number" name="phase_${phase}" value="${data.days}" min="1" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      </div>
    `).join('');
  }
  
  phaseDurationSection.style.display = 'block';
  updatePhaseCareInputs();
}

export async function updateCustomNamePlaceholder() {
  const plantTypeSelect = document.getElementById('plantTypeSelect');
  const customNameField = document.getElementById('customNameField');
  
  if (!plantTypeSelect?.value || !customNameField) return;
  
  // Try to get translated plant data first
  let plantData = null;
  try {
    const allTranslatedPlants = await getAllTranslatedPlantData();
    plantData = allTranslatedPlants.get(plantTypeSelect.value);
    if (!plantData) {
      // Fallback to original registry if no translation available
      const registry = getPlantRegistry();
      plantData = registry.get(plantTypeSelect.value);
    }
  } catch (error) {
    console.warn('Failed to load translated plant data, using original registry:', error);
    const registry = getPlantRegistry();
    plantData = registry.get(plantTypeSelect.value);
  }
  
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
  
  const envKey = getEnvironmentKey(environmentSelect?.value);
  const validation = validatePlantingDate(plantTypeSelect.value, envKey, dateInput.value);
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
          <p><strong>${t('plant.info.recommended_planting_time')}</strong> ${validation.recommendedPeriod || t('plant.info.check_planting_times')}</p>
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
            <p class="font-medium text-green-800 dark:text-green-200">${t('timing.perfect')}</p>
          </div>
        </div>
      `;
    }
    
    if (seasonalDetails) {
      seasonalDetails.innerHTML = `
        <div class="mt-2 text-sm text-green-700 dark:text-green-300">
          <p><strong>${t('timing.ideal_for')}:</strong> ${validation.recommendedPeriod || t('timing.current_season')}</p>
          ${getPlantingTips(plantTypeSelect.value, region) ? `<p class="mt-1"><strong>${t('timing.tips')}:</strong> ${getPlantingTips(plantTypeSelect.value, region)}</p>` : ''}
        </div>
      `;
    }
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
  
  const plantEnvData = getPlantDataForEnvironment(plantTypeSelect.value, environmentSelect?.value);
  
  if (!plantEnvData) {
    phaseCareSection.style.display = 'none';
    return;
  }
  
  const { envData } = plantEnvData;
  const phases = envData.phases;
  
  phaseCareSection.style.display = '';
  const medium = 'soil'; // Default-Medium, kann ggf. dynamisch gemacht werden
  
  phaseCareInputs.innerHTML = Object.entries(phases).map(([phase, data]) => {
    // Werte aus soil, fallback auf direktes Feld
    const watering = (data[medium]?.watering?.interval ?? data.watering?.interval) || '';
    const fertilizing = (data[medium]?.fertilizing?.interval ?? data.fertilizing?.interval) || '';
    return `
      <div class="flex items-center gap-4 mb-2">
        <span class="w-32">${getPhaseEmoji(phase)} ${t('phase.' + phase)}</span>
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
  const envKey = getEnvironmentKey(environment);
  
  if (plantType && environment) {
    const registry = getPlantRegistry();
    const plantData = registry.get(plantType);
    
    if (plantData && plantData.environments && plantData.environments[envKey]) {
      const envData = plantData.environments[envKey];
      const phases = envData.phases;
      
      if (isAutoflower(plantType)) {
        // Autoflowers: No custom phase durations needed
        // Phases are automatic and cannot be adjusted
      } else if (envKey === 'outdoor') {
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

export async function createPlantTypeOptions() {
  // Try to get translated plant data first
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
  
  const options = [];
  
  // Group plants by category
  const categories = {};
  
  for (const [plantKey, plantData] of plantData) {
    const category = plantData.category;
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push({ key: plantKey, data: plantData });
  }
  
  // Create option groups
  for (const [category, plants] of Object.entries(categories)) {
    const categoryName = t(category);
    options.push(`<optgroup label="${categoryName}">`);
    
    for (const plant of plants) {
      const plantName = plant.data.name;
      options.push(`<option value="${plant.key}">${plantName}</option>`);
    }
    
    options.push('</optgroup>');
  }
  
  return options.join('');
}

export async function handlePlantTypeChange(plantType) {
  if (!plantType) return { phases: [], tips: '' };
  
  try {
    // Get plant data for the default environment
    const defaultEnv = getDefaultEnvironment(plantType);
    const envData = await getPlantDataForEnvironment(plantType, defaultEnv);
    
    if (!envData) {
      return { phases: [], tips: '' };
    }
    
    // Get phases
    const phases = Object.entries(envData.envData.phases || {}).map(([key, phase]) => ({
      key,
      name: phase.name,
      description: phase.description,
      care: phase.care,
      emoji: getPhaseEmoji(key)
    }));
    
    // Get planting tips
    const tips = await getPlantingTips(plantType, defaultEnv);
    
    return { phases, tips };
    
  } catch (error) {
    console.error('Error loading plant data:', error);
    return { phases: [], tips: '' };
  }
}

export async function handleEnvironmentChange(plantType, environment) {
  if (!plantType || !environment) return { phases: [], tips: '' };
  
  try {
    const envData = await getPlantDataForEnvironment(plantType, environment);
    
    if (!envData) {
      return { phases: [], tips: '' };
    }
    
    // Get phases for the new environment
    const phases = Object.entries(envData.envData.phases || {}).map(([key, phase]) => ({
      key,
      name: phase.name,
      description: phase.description,
      care: phase.care,
      emoji: getPhaseEmoji(key)
    }));
    
    // Get planting tips for the new environment
    const tips = await getPlantingTips(plantType, environment);
    
    return { phases, tips };
    
  } catch (error) {
    console.error('Error loading environment data:', error);
    return { phases: [], tips: '' };
  }
}

export function validateForm(formData) {
  const errors = [];
  
  if (!formData.plantType) {
    errors.push(t('modal.planting.errors.plant_type_required'));
  }
  
  if (!formData.environment) {
    errors.push(t('modal.planting.errors.environment_required'));
  }
  
  if (!formData.plantingDate) {
    errors.push(t('modal.planting.errors.date_required'));
  }
  
  if (!formData.region) {
    errors.push(t('modal.planting.errors.region_required'));
  }
  
  return errors;
}

export function getDefaultPlantingDate() {
  const today = new Date();
  return today.toISOString().split('T')[0];
}
