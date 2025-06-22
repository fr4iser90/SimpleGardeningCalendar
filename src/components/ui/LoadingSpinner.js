import { t } from '../../core/i18n/index.js';

/**
 * LoadingSpinner - Handles loading states and spinners
 * Used for Google Calendar sync, template import, and other async operations
 */

export function showLoadingSpinner(message = 'Loading...', overlay = true) {
  const spinnerId = 'loading-spinner-' + Date.now();
  
  const spinnerHTML = `
    <div id="${spinnerId}" class="loading-spinner ${overlay ? 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50' : 'flex items-center justify-center p-4'}">
      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg max-w-sm w-full mx-4">
        <div class="flex items-center space-x-3">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
          <div class="text-gray-700 dark:text-gray-300">${message}</div>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', spinnerHTML);
  return spinnerId;
}

export function showInlineSpinner(container, message = 'Loading...') {
  const spinnerId = 'inline-spinner-' + Date.now();
  
  const spinnerHTML = `
    <div id="${spinnerId}" class="inline-spinner flex items-center space-x-2 p-2">
      <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600"></div>
      <span class="text-sm text-gray-600 dark:text-gray-400">${message}</span>
    </div>
  `;
  
  container.insertAdjacentHTML('beforeend', spinnerHTML);
  return spinnerId;
}

export function showButtonSpinner(button, originalText, message = 'Loading...') {
  const spinnerId = 'button-spinner-' + Date.now();
  
  // Store original content
  button.dataset.originalText = originalText;
  button.disabled = true;
  
  const spinnerHTML = `
    <div id="${spinnerId}" class="flex items-center space-x-2">
      <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
      <span>${message}</span>
    </div>
  `;
  
  button.innerHTML = spinnerHTML;
  return spinnerId;
}

export function hideLoadingSpinner(spinnerId) {
  const spinner = document.getElementById(spinnerId);
  if (spinner) {
    spinner.remove();
  }
}

export function hideButtonSpinner(button, spinnerId) {
  const spinner = document.getElementById(spinnerId);
  if (spinner) {
    spinner.remove();
  }
  
  // Restore original content
  if (button.dataset.originalText) {
    button.textContent = button.dataset.originalText;
    delete button.dataset.originalText;
  }
  
  button.disabled = false;
}

// Specific loading states for common operations
export function showGoogleCalendarSyncSpinner() {
  return showLoadingSpinner(t('loading.google_calendar_sync'), true);
}

export function showTemplateImportSpinner() {
  return showLoadingSpinner(t('loading.template_import'), true);
}

export function showEventSaveSpinner() {
  return showLoadingSpinner(t('loading.saving_event'), false);
}

export function showPlantingSaveSpinner() {
  return showLoadingSpinner(t('loading.saving_planting'), false);
}

export function showDataClearSpinner() {
  return showLoadingSpinner(t('loading.clearing_data'), true);
}

// Progress spinner for operations with known duration
export function showProgressSpinner(message = 'Processing...', progress = 0) {
  const spinnerId = 'progress-spinner-' + Date.now();
  
  const spinnerHTML = `
    <div id="${spinnerId}" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg max-w-sm w-full mx-4">
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
            <div class="text-gray-700 dark:text-gray-300">${message}</div>
          </div>
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div class="bg-green-600 h-2 rounded-full transition-all duration-300" style="width: ${progress}%"></div>
          </div>
          <div class="text-center text-sm text-gray-500 dark:text-gray-400">${progress}%</div>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', spinnerHTML);
  return spinnerId;
}

export function updateProgressSpinner(spinnerId, progress, message = null) {
  const spinner = document.getElementById(spinnerId);
  if (!spinner) return;
  
  const progressBar = spinner.querySelector('.bg-green-600');
  const progressText = spinner.querySelector('.text-gray-500');
  const messageText = spinner.querySelector('.text-gray-700');
  
  if (progressBar) {
    progressBar.style.width = `${progress}%`;
  }
  
  if (progressText) {
    progressText.textContent = `${progress}%`;
  }
  
  if (message && messageText) {
    messageText.textContent = message;
  }
}

// Mini spinner for small operations
export function showMiniSpinner(container, size = 'sm') {
  const spinnerId = 'mini-spinner-' + Date.now();
  const sizeClass = size === 'sm' ? 'h-4 w-4' : size === 'md' ? 'h-6 w-6' : 'h-8 w-8';
  
  const spinnerHTML = `
    <div id="${spinnerId}" class="mini-spinner">
      <div class="animate-spin rounded-full ${sizeClass} border-b-2 border-green-600"></div>
    </div>
  `;
  
  container.insertAdjacentHTML('beforeend', spinnerHTML);
  return spinnerId;
}

// Loading state manager for complex operations
export class LoadingStateManager {
  constructor() {
    this.activeSpinners = new Map();
  }
  
  showSpinner(operation, message, type = 'overlay') {
    let spinnerId;
    
    switch (type) {
      case 'overlay':
        spinnerId = showLoadingSpinner(message, true);
        break;
      case 'inline':
        spinnerId = showInlineSpinner(document.body, message);
        break;
      case 'button':
        spinnerId = showButtonSpinner(document.activeElement, message);
        break;
      case 'progress':
        spinnerId = showProgressSpinner(message, 0);
        break;
      default:
        spinnerId = showLoadingSpinner(message, true);
    }
    
    this.activeSpinners.set(operation, { id: spinnerId, type });
    return spinnerId;
  }
  
  hideSpinner(operation) {
    const spinnerInfo = this.activeSpinners.get(operation);
    if (spinnerInfo) {
      hideLoadingSpinner(spinnerInfo.id);
      this.activeSpinners.delete(operation);
    }
  }
  
  updateProgress(operation, progress, message = null) {
    const spinnerInfo = this.activeSpinners.get(operation);
    if (spinnerInfo && spinnerInfo.type === 'progress') {
      updateProgressSpinner(spinnerInfo.id, progress, message);
    }
  }
  
  hideAllSpinners() {
    this.activeSpinners.forEach((spinnerInfo) => {
      hideLoadingSpinner(spinnerInfo.id);
    });
    this.activeSpinners.clear();
  }
}

// Global loading state manager instance
export const loadingManager = new LoadingStateManager();

// Utility function to wrap async operations with loading spinner
export async function withLoadingSpinner(operation, message, asyncFunction) {
  const spinnerId = showLoadingSpinner(message);
  
  try {
    const result = await asyncFunction();
    return result;
  } finally {
    hideLoadingSpinner(spinnerId);
  }
}

// Export for global use
window.showLoadingSpinner = showLoadingSpinner;
window.hideLoadingSpinner = hideLoadingSpinner;
window.showButtonSpinner = showButtonSpinner;
window.hideButtonSpinner = hideButtonSpinner;
window.loadingManager = loadingManager;
