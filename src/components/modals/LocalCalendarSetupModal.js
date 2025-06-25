import { t } from '../../core/i18n/index.js';
import { 
  getAllLocalCalendars,
  getDefaultCalendar,
  createLocalCalendar,
  deleteLocalCalendar,
  updateLocalCalendar
} from '../../core/db/calendars.js';
import { showNotification } from '../../utils/notifications.js';
import { renderLocalCalendarWizardHTML, setupLocalCalendarWizardEventListeners } from './LocalCalendarWizard.js';

/**
 * Local Calendar Setup Modal
 * Verwaltungs-Interface für lokale Kalender mit Einstellungen
 */

export function renderLocalCalendarSetupModal() {
  const modal = document.createElement('div');
  modal.className = 'local-calendar-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
  
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-semibold dark:text-white">🗓️ ${t('local.setup.title')}</h2>
        <button id="closeLocalCalendarModal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">✕</button>
      </div>
      
      <div class="space-y-6">
        <!-- Aktuelle Kalender -->
        <div class="border-b pb-4">
          <h3 class="font-semibold mb-3 dark:text-white">📅 ${t('local.setup.current_calendars')}</h3>
          <div id="currentCalendarsList" class="space-y-2">
            <!-- Dynamisch gefüllt -->
          </div>
          <button id="addNewCalendarBtn" class="mt-3 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
            ➕ ${t('local.setup.add_calendar')}
          </button>
        </div>

        <!-- Standard-Einstellungen -->
        <div class="border-b pb-4">
          <h3 class="font-semibold mb-3 dark:text-white">⚙️ ${t('local.setup.default_settings')}</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Erinnerungen -->
            <div class="space-y-3">
              <h4 class="font-medium dark:text-gray-200">🔔 ${t('local.setup.default_reminders')}</h4>
              
              <div class="space-y-2">
                <label class="flex items-center space-x-2">
                  <input type="checkbox" id="defaultWateringReminders" checked class="rounded">
                  <span class="text-sm dark:text-gray-200">💧 ${t('local.setup.watering_reminders')}</span>
                </label>
                
                <label class="flex items-center space-x-2">
                  <input type="checkbox" id="defaultFertilizingReminders" checked class="rounded">
                  <span class="text-sm dark:text-gray-200">🌿 ${t('local.setup.fertilizing_reminders')}</span>
                </label>
                
                <label class="flex items-center space-x-2">
                  <input type="checkbox" id="defaultPhaseReminders" checked class="rounded">
                  <span class="text-sm dark:text-gray-200">📋 ${t('local.setup.phase_reminders')}</span>
                </label>
                
                <label class="flex items-center space-x-2">
                  <input type="checkbox" id="defaultWeeklyChecks" checked class="rounded">
                  <span class="text-sm dark:text-gray-200">🔍 ${t('local.setup.weekly_checks')}</span>
                </label>
                
                <label class="flex items-center space-x-2">
                  <input type="checkbox" id="defaultHarvestReminders" checked class="rounded">
                  <span class="text-sm dark:text-gray-200">🌾 ${t('local.setup.harvest_reminders')}</span>
                </label>
              </div>
            </div>

            <!-- Intervalle -->
            <div class="space-y-3">
              <h4 class="font-medium dark:text-gray-200">⏱️ ${t('local.setup.default_intervals')}</h4>
              
              <div class="space-y-2">
                <div>
                  <label class="block text-xs dark:text-gray-300 mb-1">${t('local.setup.watering_interval')}</label>
                  <select id="defaultWateringInterval" class="text-sm p-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white w-full">
                    <option value="daily">${t('modal.interval.daily')}</option>
                    <option value="every_2_days" selected>${t('modal.interval.every_2_days')}</option>
                    <option value="every_3_days">${t('modal.interval.every_3_days')}</option>
                    <option value="weekly">${t('modal.interval.weekly')}</option>
                  </select>
                </div>
                
                <div>
                  <label class="block text-xs dark:text-gray-300 mb-1">${t('local.setup.fertilizing_interval')}</label>
                  <select id="defaultFertilizingInterval" class="text-sm p-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white w-full">
                    <option value="weekly" selected>${t('modal.interval.weekly')}</option>
                    <option value="every_2_weeks">${t('modal.interval.every_2_weeks')}</option>
                    <option value="every_3_weeks">${t('modal.interval.every_3_weeks')}</option>
                    <option value="monthly">${t('modal.interval.monthly')}</option>
                  </select>
                </div>
                
                <div>
                  <label class="block text-xs dark:text-gray-300 mb-1">${t('local.setup.fertilizing_delay')}</label>
                  <select id="defaultFertilizingDelay" class="text-sm p-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white w-full">
                    <option value="immediately" selected>${t('modal.interval.immediately')}</option>
                    <option value="1_week">${t('modal.interval.1_week')}</option>
                    <option value="2_weeks">${t('modal.interval.2_weeks')}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Kalender-Organisation -->
        <div class="border-b pb-4">
          <h3 class="font-semibold mb-3 dark:text-white">🏗️ ${t('local.setup.calendar_organization')}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
            ${t('local.setup.organization_description')}
          </p>
          <button id="changeOrganizationBtn" class="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
            🔄 ${t('local.setup.change_organization')}
          </button>
        </div>

        <!-- Wizard Section (versteckt) -->
        <div id="localCalendarWizardSection" class="hidden">
          ${renderLocalCalendarWizardHTML()}
        </div>

        <!-- Aktionen -->
        <div class="flex justify-between items-center pt-4">
          <button id="saveSettingsBtn" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            💾 ${t('local.setup.save_settings')}
          </button>
          <button id="resetToDefaultsBtn" class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
            🔄 ${t('local.setup.reset_defaults')}
          </button>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Event Listeners
  setupLocalCalendarModalEventListeners(modal);
  
  // Initial load
  loadCurrentCalendars();
  loadSettings();
}

function setupLocalCalendarModalEventListeners(modal) {
  const closeBtn = modal.querySelector('#closeLocalCalendarModal');
  const addNewCalendarBtn = modal.querySelector('#addNewCalendarBtn');
  const changeOrganizationBtn = modal.querySelector('#changeOrganizationBtn');
  const saveSettingsBtn = modal.querySelector('#saveSettingsBtn');
  const resetToDefaultsBtn = modal.querySelector('#resetToDefaultsBtn');
  const wizardSection = modal.querySelector('#localCalendarWizardSection');

  // Close modal
  closeBtn?.addEventListener('click', () => {
    modal.remove();
  });

  // Add new calendar
  addNewCalendarBtn?.addEventListener('click', () => {
    const calendarName = prompt(t('local.setup.enter_calendar_name'));
    if (calendarName) {
      createLocalCalendar({ name: calendarName, icon: '🌱' })
        .then(() => {
          loadCurrentCalendars();
          showNotification(t('local.setup.calendar_added'), 'success');
        })
        .catch(error => {
          showNotification(t('local.setup.calendar_add_failed'), 'error');
        });
    }
  });

  // Change organization
  changeOrganizationBtn?.addEventListener('click', () => {
    wizardSection.classList.remove('hidden');
    
    // Make wizard visible again
    const wizardDiv = wizardSection.querySelector('#localCalendarWizard');
    if (wizardDiv) {
      wizardDiv.style.display = 'block';
    }
    
    setupLocalCalendarWizardEventListeners();
  });

  // Save settings
  saveSettingsBtn?.addEventListener('click', () => {
    saveSettings();
    showNotification(t('local.setup.settings_saved'), 'success');
    
    // Close modal after saving
    modal.remove();
  });

  // Reset to defaults
  resetToDefaultsBtn?.addEventListener('click', () => {
    if (confirm(t('local.setup.confirm_reset'))) {
      resetToDefaults();
      loadSettings();
      showNotification(t('local.setup.reset_complete'), 'success');
    }
  });

  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });

  // Listen for calendar updates and refresh the modal
  const handleCalendarUpdate = () => {
    // Only update if modal is still open
    const currentCalendarsList = document.getElementById('currentCalendarsList');
    if (currentCalendarsList) {
      loadCurrentCalendars();
    }
  };
  
  document.addEventListener('localCalendarsUpdated', handleCalendarUpdate);
  
  // Clean up event listener when modal is removed
  modal.addEventListener('remove', () => {
    document.removeEventListener('localCalendarsUpdated', handleCalendarUpdate);
  });
  
  // Also listen for the event when modal is being removed
  modal.addEventListener('DOMNodeRemoved', () => {
    document.removeEventListener('localCalendarsUpdated', handleCalendarUpdate);
  });
}

async function loadCurrentCalendars() {
  try {
    const calendars = await getAllLocalCalendars();
    const activeCalendarId = localStorage.getItem('selectedLocalCalendarId');
    const currentCalendarsList = document.getElementById('currentCalendarsList');
    
    if (calendars.length === 0) {
      currentCalendarsList.innerHTML = `
        <div class="text-gray-500 dark:text-gray-400 text-sm">
          ${t('local.setup.no_calendars')}
        </div>
      `;
      return;
    }

    currentCalendarsList.innerHTML = calendars.map(calendar => `
      <div class="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-600 rounded-lg ${calendar.id.toString() === activeCalendarId ? 'bg-blue-50 dark:bg-blue-900/20' : ''}">
        <div class="flex items-center space-x-2">
          <span class="text-lg">${calendar.icon || '🌱'}</span>
          <span class="font-medium dark:text-white">${calendar.name}</span>
          ${calendar.id.toString() === activeCalendarId ? '<span class="text-xs px-2 py-1 bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded">Aktiv</span>' : ''}
        </div>
        <div class="flex gap-2">
          ${calendar.id.toString() !== activeCalendarId ? `
            <button onclick="switchToCalendar('${calendar.id}')" class="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs">
              ${t('local.setup.switch_to')}
            </button>
          ` : ''}
          ${!calendar.isDefault ? `
            <button onclick="deleteCalendar('${calendar.id}')" class="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-xs">
              🗑️
            </button>
          ` : ''}
        </div>
      </div>
    `).join('');
    
  } catch (error) {
    console.error('Failed to load calendars:', error);
  }
}

function loadSettings() {
  // Load from localStorage or use defaults
  const settings = JSON.parse(localStorage.getItem('localCalendarSettings') || '{}');
  
  // Set checkboxes
  document.getElementById('defaultWateringReminders').checked = settings.defaultWateringReminders !== false;
  document.getElementById('defaultFertilizingReminders').checked = settings.defaultFertilizingReminders !== false;
  document.getElementById('defaultPhaseReminders').checked = settings.defaultPhaseReminders !== false;
  document.getElementById('defaultWeeklyChecks').checked = settings.defaultWeeklyChecks !== false;
  document.getElementById('defaultHarvestReminders').checked = settings.defaultHarvestReminders !== false;
  
  // Set selects
  document.getElementById('defaultWateringInterval').value = settings.defaultWateringInterval || 'every_2_days';
  document.getElementById('defaultFertilizingInterval').value = settings.defaultFertilizingInterval || 'weekly';
  document.getElementById('defaultFertilizingDelay').value = settings.defaultFertilizingDelay || 'immediately';
}

function saveSettings() {
  const settings = {
    defaultWateringReminders: document.getElementById('defaultWateringReminders').checked,
    defaultFertilizingReminders: document.getElementById('defaultFertilizingReminders').checked,
    defaultPhaseReminders: document.getElementById('defaultPhaseReminders').checked,
    defaultWeeklyChecks: document.getElementById('defaultWeeklyChecks').checked,
    defaultHarvestReminders: document.getElementById('defaultHarvestReminders').checked,
    defaultWateringInterval: document.getElementById('defaultWateringInterval').value,
    defaultFertilizingInterval: document.getElementById('defaultFertilizingInterval').value,
    defaultFertilizingDelay: document.getElementById('defaultFertilizingDelay').value
  };
  
  localStorage.setItem('localCalendarSettings', JSON.stringify(settings));
}

function resetToDefaults() {
  localStorage.removeItem('localCalendarSettings');
}

// Global functions for calendar management
window.switchToCalendar = async function(calendarId) {
  try {
    localStorage.setItem('selectedLocalCalendarId', calendarId);
    loadCurrentCalendars();
    showNotification(t('local.status.switched', { name: 'Calendar' }), 'success');
    
    // Trigger calendar update event
    document.dispatchEvent(new CustomEvent('localCalendarsUpdated'));
  } catch (error) {
    showNotification(t('local.status.switch_error'), 'error');
  }
};

window.deleteCalendar = async function(calendarId) {
  if (!confirm(t('local.setup.confirm_delete'))) {
    return;
  }
  
  try {
    await deleteLocalCalendar(calendarId);
    loadCurrentCalendars();
    showNotification(t('local.setup.calendar_deleted'), 'success');
    
    // Trigger calendar update event
    document.dispatchEvent(new CustomEvent('localCalendarsUpdated'));
  } catch (error) {
    showNotification(t('local.setup.delete_failed'), 'error');
  }
};

export default {
  renderLocalCalendarSetupModal
};
