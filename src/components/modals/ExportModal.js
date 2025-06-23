/**
 * Export Modal - Calendar data export dialog
 * Supports multiple formats and export options
 */

import { t } from '../../core/i18n/index.js';
import { ImportExportService } from '../../services/ImportExportService.js';
import { downloadFile } from '../../utils/fileUtils.js';
import { showNotification } from '../../utils/notifications.js';

let exportModal = null;

/**
 * Show export modal
 */
export function showExportModal() {
  createExportModal();
  exportModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

/**
 * Hide export modal
 */
export function hideExportModal() {
  if (exportModal) {
    exportModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

/**
 * Create export modal HTML and functionality
 */
function createExportModal() {
  if (exportModal) return;

  exportModal = document.createElement('div');
  exportModal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
  exportModal.style.display = 'none';
  
  exportModal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold dark:text-white">${t('export.modal.title')}</h2>
        <button id="closeExportModal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <i class="fas fa-times text-xl"></i>
        </button>
      </div>
      
      <!-- Simple Description -->
      <div class="mb-6 text-sm text-gray-600 dark:text-gray-400">
        Exportiert alle Ihre Kalender-Daten: Events, Pflanzungen und Notizen.
      </div>
      
      <!-- Format Selection -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          ${t('export.format.label')}
        </label>
        <div class="space-y-3">
          <label class="flex items-center space-x-3 p-4 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <input type="radio" name="exportFormat" value="JSON" class="text-blue-500" checked>
            <div class="flex-1">
              <div class="font-medium text-gray-800 dark:text-gray-200">
                <i class="fas fa-file-code mr-2 text-blue-500"></i>
                ${t('export.format.json')}
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">Komplettes Backup für Re-Import</div>
            </div>
          </label>
          
          <label class="flex items-center space-x-3 p-4 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer opacity-50">
            <input type="radio" name="exportFormat" value="ICAL" class="text-blue-500" disabled>
            <div class="flex-1">
              <div class="font-medium text-gray-400">
                <i class="fas fa-calendar mr-2"></i>
                ${t('export.format.ical')} (Coming Soon)
              </div>
              <div class="text-sm text-gray-400">Für andere Kalender-Apps</div>
            </div>
          </label>
        </div>
      </div>
      
      <!-- Action Buttons -->
      <div class="flex space-x-3">
        <button id="exportBtn" class="flex-1 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors">
          <i class="fas fa-download mr-2"></i>
          ${t('export.download')}
        </button>
        <button id="cancelExportBtn" class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors">
          ${t('export.cancel')}
        </button>
      </div>
      
      <!-- Loading Spinner -->
      <div id="exportLoading" class="hidden text-center mt-4">
        <i class="fas fa-spinner fa-spin text-indigo-500 mr-2"></i>
        <span class="text-gray-600 dark:text-gray-400">${t('export.notification.start')}</span>
      </div>
    </div>
  `;
  
  document.body.appendChild(exportModal);
  setupExportModalEvents();
}

/**
 * Setup event listeners for export modal
 */
function setupExportModalEvents() {
  const closeBtn = exportModal.querySelector('#closeExportModal');
  const cancelBtn = exportModal.querySelector('#cancelExportBtn');
  const exportBtn = exportModal.querySelector('#exportBtn');
  
  // Close modal events
  closeBtn.addEventListener('click', hideExportModal);
  cancelBtn.addEventListener('click', hideExportModal);
  
  // Click outside to close
  exportModal.addEventListener('click', (e) => {
    if (e.target === exportModal) {
      hideExportModal();
    }
  });
  
  // Export button
  exportBtn.addEventListener('click', handleExport);
}

/**
 * Handle export process
 */
async function handleExport() {
  const loadingEl = exportModal.querySelector('#exportLoading');
  const exportBtn = exportModal.querySelector('#exportBtn');
  
  try {
    // Show loading state
    loadingEl.classList.remove('hidden');
    exportBtn.disabled = true;
    
    // Get selected format
    const formatInput = exportModal.querySelector('input[name="exportFormat"]:checked');
    const format = formatInput.value;
    
    // Export ALL data - no options needed
    const options = {
      includePlantings: true,
      includeNotes: true,
      includeAllData: true,
      metadata: {
        exportedBy: 'SimpleGardeningCalendar',
        exportType: 'complete',
        exportDate: new Date().toISOString()
      }
    };
    
    // Perform export
    const result = await ImportExportService.exportData(format, options);
    
    // Download file
    downloadFile(result.data, result.filename, result.mimeType);
    
    // Show success
    showNotification(t('export.success'), 'success');
    
    // Close modal
    hideExportModal();
    
  } catch (error) {
    console.error('Export error:', error);
    
    if (error.message.includes('No data')) {
      showNotification(t('export.error.no_data'), 'error');
    } else {
      showNotification(t('export.error.generation_failed'), 'error');
    }
    
  } finally {
    // Hide loading state
    loadingEl.classList.add('hidden');
    exportBtn.disabled = false;
  }
} 