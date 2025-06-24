import { t } from '../../core/i18n/index.js';
import { showAddEventModal } from '../modals/AddEventModal.js';
import { showTemplateImportModal } from '../modals/TemplateModal.js';
import { showClearCalendarModal } from '../modals/ClearDataModal.js';
import { showImportModal } from '../modals/ImportModal.js';
import { showExportModal } from '../modals/ExportModal.js';

export function createCalendarControls(calendarEl) {
  // Add control buttons
  const controls = document.createElement('div');
  controls.className = 'calendar-controls mb-4 flex flex-wrap gap-2 items-center';
  
  const buttonGroup = document.createElement('div');
  buttonGroup.className = 'flex flex-wrap gap-2';
  
  const addEventBtn = document.createElement('button');
  addEventBtn.innerHTML = '<i class="fas fa-plus mr-2"></i>' + t('btn.add_event');
  addEventBtn.className = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
  addEventBtn.onclick = () => showAddEventModal();
  
  const addPlantingBtn = document.createElement('button');
  addPlantingBtn.innerHTML = '<i class="fas fa-seedling mr-2"></i>' + t('btn.add_planting');
  addPlantingBtn.className = 'px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600';
  addPlantingBtn.onclick = () => {
    // Get today's date in YYYY-MM-DD format for the date input
    const today = new Date().toISOString().split('T')[0];
    showAddEventModal(today, 'planting');
  };

  // Add Template Import button
  const templateImportBtn = document.createElement('button');
  templateImportBtn.innerHTML = '<i class="fas fa-download mr-2"></i>' + t('btn.import_template');
  templateImportBtn.className = 'px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600';
  templateImportBtn.onclick = () => showTemplateImportModal();

  // Add My Plants button
  const myPlantsBtn = document.createElement('button');
  myPlantsBtn.innerHTML = '<i class="fas fa-leaf mr-2"></i>' + t('btn.my_plants');
  myPlantsBtn.className = 'px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600';
  myPlantsBtn.onclick = () => {
    // Use the existing function from app.js
    if (window.showMyPlantsModal) {
      window.showMyPlantsModal();
    }
  };

  // Add Import Calendar button
  const importBtn = document.createElement('button');
  importBtn.innerHTML = '<i class="fas fa-file-import mr-2"></i>' + t('btn.import_calendar');
  importBtn.className = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
  importBtn.onclick = () => showImportModal();

  // Add Export Calendar button
  const exportBtn = document.createElement('button');
  exportBtn.innerHTML = '<i class="fas fa-file-export mr-2"></i>' + t('btn.export_calendar');
  exportBtn.className = 'px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600';
  exportBtn.onclick = () => showExportModal();

  // Add Clear Calendar button
  const clearCalendarBtn = document.createElement('button');
  clearCalendarBtn.innerHTML = '<i class="fas fa-trash mr-2"></i>' + t('btn.clear_calendar');
  clearCalendarBtn.className = 'px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600';
  clearCalendarBtn.onclick = () => showClearCalendarModal();

  buttonGroup.appendChild(addEventBtn);
  buttonGroup.appendChild(addPlantingBtn);
  buttonGroup.appendChild(templateImportBtn);
  buttonGroup.appendChild(myPlantsBtn);
  buttonGroup.appendChild(importBtn);
  buttonGroup.appendChild(exportBtn);
  buttonGroup.appendChild(clearCalendarBtn);
  
  controls.appendChild(buttonGroup);

  // Google Calendar status display immer darunter, mit Abstand
  const googleCalendarStatus = document.createElement('div');
  googleCalendarStatus.id = 'googleCalendarStatusDisplay';
  googleCalendarStatus.className = 'mt-3 text-sm text-gray-600 dark:text-gray-400 flex items-center';
  controls.appendChild(googleCalendarStatus);
  
  calendarEl.parentNode.insertBefore(controls, calendarEl);

  // Listen for language changes
  document.addEventListener('languageChanged', () => {
    // Update button texts
    addEventBtn.innerHTML = '<i class="fas fa-plus mr-2"></i>' + t('btn.add_event');
    addPlantingBtn.innerHTML = '<i class="fas fa-seedling mr-2"></i>' + t('btn.add_planting');
    templateImportBtn.innerHTML = '<i class="fas fa-download mr-2"></i>' + t('btn.import_template');
    myPlantsBtn.innerHTML = '<i class="fas fa-leaf mr-2"></i>' + t('btn.my_plants');
    importBtn.innerHTML = '<i class="fas fa-file-import mr-2"></i>' + t('btn.import_calendar');
    exportBtn.innerHTML = '<i class="fas fa-file-export mr-2"></i>' + t('btn.export_calendar');
    clearCalendarBtn.innerHTML = '<i class="fas fa-trash mr-2"></i>' + t('btn.clear_calendar');
  });

  return {
    addEventBtn,
    addPlantingBtn,
    templateImportBtn,
    myPlantsBtn,
    importBtn,
    exportBtn,
    clearCalendarBtn,
    googleCalendarStatus
  };
}
