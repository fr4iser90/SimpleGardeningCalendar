import { openDB } from 'idb';
import { t } from '../../core/i18n/index.js';
import { getAvailableTemplates, importGardenTemplate } from '../../services/TemplateService.js';

export function showTemplateImportModal() {
  const modal = document.createElement('div');
  modal.id = 'template-import-modal';
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-gray-900 dark:text-white" data-i18n="template.modal.title">${t('template.modal.title')}</h2>
        <button onclick="document.getElementById('template-import-modal').remove()" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <i class="fas fa-times text-xl"></i>
        </button>
      </div>
      
      <div class="mb-4 text-sm text-gray-600 dark:text-gray-400" data-i18n="template.modal.description">
        ${t('template.modal.description')}
      </div>
      
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-i18n="template.select.label">
          ${t('template.select.label')}
        </label>
        <select id="templateSelect" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
          <option value="" data-i18n="template.select.placeholder">${t('template.select.placeholder')}</option>
        </select>
      </div>
      
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-i18n="template.year.label">
          ${t('template.year.label')}
        </label>
        <select id="yearSelect" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
          <option value="${new Date().getFullYear()}" data-i18n="template.year.current">${new Date().getFullYear()} (${t('template.year.current')})</option>
          <option value="${new Date().getFullYear() + 1}" data-i18n="template.year.next">${new Date().getFullYear() + 1} (${t('template.year.next')})</option>
        </select>
      </div>
      
      <div id="templateDescription" class="mb-4 hidden">
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
          <h4 class="font-medium text-blue-900 dark:text-blue-100 mb-1" data-i18n="template.description.title">${t('template.description.title')}</h4>
          <p id="templateDescText" class="text-sm text-blue-800 dark:text-blue-200"></p>
          <p id="templateTaskCount" class="text-xs text-blue-600 dark:text-blue-300 mt-1"></p>
        </div>
      </div>
      
      <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 mb-4">
        <div class="flex items-start">
          <i class="fas fa-info-circle text-yellow-600 dark:text-yellow-400 mr-2 mt-0.5"></i>
          <div>
            <h4 class="font-medium text-yellow-900 dark:text-yellow-100 text-sm" data-i18n="template.warning.title">${t('template.warning.title')}</h4>
            <p class="text-xs text-yellow-800 dark:text-yellow-200" data-i18n="template.warning.text">${t('template.warning.text')}</p>
          </div>
        </div>
      </div>
      
      <div class="flex space-x-3">
        <button onclick="this.closest('.fixed').remove()" class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700" data-i18n="btn.cancel">
          ${t('btn.cancel')}
        </button>
        <button onclick="importSelectedTemplate()" class="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed" id="importBtn" disabled data-i18n="template.import.button">
          ${t('template.import.button')}
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  loadTemplateOptions();
}

function loadTemplateOptions() {
  const templateSelect = document.getElementById('templateSelect');
  const templates = getAvailableTemplates();
  
  templates.forEach((template, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = template.name;
    templateSelect.appendChild(option);
  });
  
  // Add change handler
  templateSelect.addEventListener('change', function() {
    showTemplateDescription(this.value);
    document.getElementById('importBtn').disabled = this.value === '';
  });
}

function showTemplateDescription(templateIndex) {
  const descriptionDiv = document.getElementById('templateDescription');
  const descText = document.getElementById('templateDescText');
  const taskCount = document.getElementById('templateTaskCount');
  
  if (templateIndex === '' || templateIndex === null) {
    descriptionDiv.classList.add('hidden');
    return;
  }
  
  const templates = getAvailableTemplates();
  const template = templates[parseInt(templateIndex)];
  
  if (template) {
    descText.textContent = template.description;
    taskCount.textContent = `${template.tasks.length} ${t('template.task.count')}`;
    descriptionDiv.classList.remove('hidden');
  } else {
    descriptionDiv.classList.add('hidden');
  }
}

async function importSelectedTemplate() {
  const templateSelect = document.getElementById('templateSelect');
  const yearSelect = document.getElementById('yearSelect');
  const importBtn = document.getElementById('importBtn');
  const modal = document.getElementById('template-import-modal');

  if (templateSelect.value === '') {
    showNotification(t('template.select.required'), 'error');
    return;
  }

  // Check for duplicate import
  const templates = getAvailableTemplates();
  const selectedTemplate = templates[templateSelect.value];
  const year = parseInt(yearSelect.value);
  const db = await openDB('gardening-calendar');
  const allEvents = await db.getAll('events');
  const alreadyImported = allEvents.some(ev => ev.templateName === selectedTemplate.name && ev.date.startsWith(year.toString()));
  if (alreadyImported) {
    const confirmMsg = `${t('template.import.success', {count: '', name: selectedTemplate.name, year: year})}\n\n${t('common.warning')}: ${t('template.import.button')}?`;
    if (!window.confirm(`Gartenplan "${selectedTemplate.name}" für ${year} wurde bereits importiert.\n\nNochmal importieren?`)) {
      // Modal bleibt offen, Import abgebrochen
      importBtn.textContent = t('template.import.button');
      importBtn.disabled = false;
      return;
    }
  }

  // Show loading state
  const originalText = importBtn.textContent;
  importBtn.textContent = t('template.import.loading');
  importBtn.disabled = true;

  try {
    // Import template events
    const events = await importGardenTemplate(selectedTemplate, year);

    // Refresh calendar
    if (window.calendar) {
      window.calendar.refetchEvents();
    }

    // Close modal robust
    if (modal) {
      modal.remove();
    }

    // Show success message
    showNotification(
      t('template.import.success', {
        count: events.length,
        name: selectedTemplate.name,
        year: year
      }),
      'success'
    );

  } catch (error) {
    console.error('Error importing template:', error);
    showNotification(t('template.import.error'), 'error');
  } finally {
    // Reset button
    importBtn.textContent = originalText;
    importBtn.disabled = false;
  }
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
  
  notification.className = `fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-x-full`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.classList.remove('translate-x-full');
  }, 100);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.classList.add('translate-x-full');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 5000);
}

// Make functions available globally
window.importSelectedTemplate = importSelectedTemplate;
