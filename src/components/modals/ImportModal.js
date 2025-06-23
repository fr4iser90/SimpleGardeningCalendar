/**
 * Import Modal - Calendar data import dialog
 * Supports drag & drop, file selection, and import preview
 */

import { t } from '../../core/i18n/index.js';
import { ImportExportService } from '../../services/ImportExportService.js';
import { setupDragAndDrop, createFileInput } from '../../utils/fileUtils.js';
import { showNotification } from '../../utils/notifications.js';

let importModal = null;
let fileInput = null;

/**
 * Show import modal
 */
export function showImportModal() {
  createImportModal();
  importModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

/**
 * Hide import modal
 */
export function hideImportModal() {
  if (importModal) {
    importModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

/**
 * Create import modal HTML and functionality
 */
function createImportModal() {
  if (importModal) return;

  importModal = document.createElement('div');
  importModal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
  importModal.style.display = 'none';
  
  importModal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold dark:text-white">${t('import.modal.title')}</h2>
        <button id="closeImportModal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <i class="fas fa-times text-xl"></i>
        </button>
      </div>
      
      <!-- Drag & Drop Area -->
      <div id="dropArea" class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-4 cursor-pointer hover:border-blue-500 transition-colors">
        <i class="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-4"></i>
        <p class="text-gray-600 dark:text-gray-400 mb-2">${t('import.drag_drop')}</p>
        <p class="text-sm text-gray-500 dark:text-gray-500">${t('import.supported_formats')}</p>
      </div>
      
      <!-- File Info Display -->
      <div id="fileInfo" class="hidden bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
        <div class="flex items-center space-x-3">
          <i class="fas fa-file text-blue-500"></i>
          <div>
            <p id="fileName" class="font-medium text-blue-800 dark:text-blue-200"></p>
            <p id="fileDetails" class="text-sm text-blue-600 dark:text-blue-300"></p>
          </div>
        </div>
      </div>
      
      <!-- Preview Area -->
      <div id="previewArea" class="hidden bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
        <h3 class="font-medium text-gray-800 dark:text-gray-200 mb-2">${t('import.preview.title')}</h3>
        <div id="previewContent" class="text-sm text-gray-600 dark:text-gray-400 max-h-32 overflow-y-auto"></div>
      </div>
      
      <!-- Action Buttons -->
      <div class="flex space-x-3">
        <button id="importBtn" class="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
          <i class="fas fa-download mr-2"></i>
          ${t('import.confirm')}
        </button>
        <button id="cancelImportBtn" class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
          ${t('import.cancel')}
        </button>
      </div>
      
      <!-- Loading Spinner -->
      <div id="importLoading" class="hidden text-center mt-4">
        <i class="fas fa-spinner fa-spin text-blue-500 mr-2"></i>
        <span class="text-gray-600 dark:text-gray-400">${t('import.notification.start')}</span>
      </div>
    </div>
  `;
  
  document.body.appendChild(importModal);
  setupImportModalEvents();
}

/**
 * Setup event listeners for import modal
 */
function setupImportModalEvents() {
  const closeBtn = importModal.querySelector('#closeImportModal');
  const cancelBtn = importModal.querySelector('#cancelImportBtn');
  const importBtn = importModal.querySelector('#importBtn');
  const dropArea = importModal.querySelector('#dropArea');
  
  // Close modal events
  closeBtn.addEventListener('click', hideImportModal);
  cancelBtn.addEventListener('click', hideImportModal);
  
  // Click outside to close
  importModal.addEventListener('click', (e) => {
    if (e.target === importModal) {
      hideImportModal();
    }
  });
  
  // Setup drag and drop
  setupDragAndDrop(
    dropArea,
    handleFileSelect,
    () => dropArea.classList.add('border-blue-500', 'bg-blue-50', 'dark:bg-blue-900/20'),
    () => dropArea.classList.remove('border-blue-500', 'bg-blue-50', 'dark:bg-blue-900/20')
  );
  
  // Click to select file
  dropArea.addEventListener('click', () => {
    if (!fileInput) {
      fileInput = createFileInput('.json,.ics,.csv', handleFileSelect);
    }
    fileInput.click();
  });
  
  // Import button
  importBtn.addEventListener('click', handleImport);
}

/**
 * Handle file selection
 */
async function handleFileSelect(file) {
  try {
    // Show file info
    showFileInfo(file);
    
    // Try to preview the file
    await previewFile(file);
    
    // Enable import button
    const importBtn = importModal.querySelector('#importBtn');
    importBtn.disabled = false;
    importBtn.dataset.file = file.name;
    
    // Store file for import
    window.selectedImportFile = file;
    
  } catch (error) {
    console.error('File selection error:', error);
    showNotification(t('import.error.invalid_file'), 'error');
  }
}

/**
 * Show file information
 */
function showFileInfo(file) {
  const fileInfo = importModal.querySelector('#fileInfo');
  const fileName = importModal.querySelector('#fileName');
  const fileDetails = importModal.querySelector('#fileDetails');
  
  const format = ImportExportService.detectFileFormat(file);
  const sizeKB = Math.round(file.size / 1024);
  
  fileName.textContent = file.name;
  fileDetails.textContent = t('import.file_detected', { format: format || 'Unknown' }) + ` • ${sizeKB} KB`;
  
  fileInfo.classList.remove('hidden');
}

/**
 * Preview file contents
 */
async function previewFile(file) {
  try {
    const format = ImportExportService.detectFileFormat(file);
    
    if (format === 'JSON') {
      // For JSON, try to parse and show event count
      const previewData = await ImportExportService.importFile(file);
      showPreview(`${t('import.events_found', { count: previewData.imported || 0 })}`);
    } else {
      showPreview(`${format} file ready for import`);
    }
  } catch (error) {
    showPreview('File preview unavailable');
  }
}

/**
 * Show preview content
 */
function showPreview(content) {
  const previewArea = importModal.querySelector('#previewArea');
  const previewContent = importModal.querySelector('#previewContent');
  
  previewContent.textContent = content;
  previewArea.classList.remove('hidden');
}

/**
 * Handle import process
 */
async function handleImport() {
  if (!window.selectedImportFile) {
    showNotification(t('import.error.invalid_file'), 'error');
    return;
  }
  
  const loadingEl = importModal.querySelector('#importLoading');
  const importBtn = importModal.querySelector('#importBtn');
  
  try {
    // Show loading state
    loadingEl.classList.remove('hidden');
    importBtn.disabled = true;
    
    // Perform import
    const result = await ImportExportService.importFile(window.selectedImportFile);
    
    // Show success
    showNotification(t('import.success', { count: result.imported }), 'success');
    
    // Refresh calendar - use FullCalendar's refetchEvents method
    if (window.calendar) {
      window.calendar.refetchEvents();
    }
    
    // Close modal
    hideImportModal();
    
  } catch (error) {
    console.error('Import error:', error);
    showNotification(t('import.error.database'), 'error');
    
  } finally {
    // Hide loading state
    loadingEl.classList.add('hidden');
    importBtn.disabled = false;
  }
}

// CSS for drag states
const style = document.createElement('style');
style.textContent = `
  .drag-over {
    border-color: #3b82f6 !important;
    background-color: rgba(59, 130, 246, 0.1) !important;
  }
`;
document.head.appendChild(style); 