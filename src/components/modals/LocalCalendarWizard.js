import { t } from '../../core/i18n/index.js';
import { 
  initializeDefaultCalendars, 
  createGardenTemplateCalendars, 
  createLocalCalendar,
  getDefaultCalendar 
} from '../../core/db/calendars.js';
import { showNotification } from '../../utils/notifications.js';

// Render the local calendar wizard HTML
export function renderLocalCalendarWizardHTML() {
  return `
    <!-- Local Calendar Organization Wizard -->
    <div id="localCalendarWizard" class="space-y-4">
      <div class="border-t border-gray-200 dark:border-gray-700 pt-6">
        <h3 class="text-lg font-semibold mb-4 dark:text-white">🗓️ ${t('local.wizard.title')}</h3>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
          <h4 class="font-medium mb-4 dark:text-white">🌱 ${t('local.wizard.organize_question')}</h4>
          
          <div class="space-y-3">
            <!-- Option 1: Single Garden Calendar -->
            <label class="flex items-start space-x-3 p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors">
              <input type="radio" name="localCalendarOrganization" value="single" checked class="mt-1">
              <div class="flex-1">
                <div class="font-medium text-gray-900 dark:text-white">🌱 ${t('local.wizard.option_single')}</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">${t('local.wizard.option_single_desc')}</div>
              </div>
            </label>

            <!-- Option 2: Garden Areas -->
            <label class="flex items-start space-x-3 p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors">
              <input type="radio" name="localCalendarOrganization" value="areas" class="mt-1">
              <div class="flex-1">
                <div class="font-medium text-gray-900 dark:text-white">🌿 ${t('local.wizard.option_areas')}</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">${t('local.wizard.option_areas_desc')}</div>
                <div class="text-xs text-blue-600 dark:text-blue-400 mt-1">${t('local.wizard.option_areas_creates')}</div>
              </div>
            </label>

            <!-- Option 3: Custom Calendars -->
            <label class="flex items-start space-x-3 p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors">
              <input type="radio" name="localCalendarOrganization" value="custom" class="mt-1">
              <div class="flex-1">
                <div class="font-medium text-gray-900 dark:text-white">➕ ${t('local.wizard.option_custom')}</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">${t('local.wizard.option_custom_desc')}</div>
                <div class="text-xs text-purple-600 dark:text-purple-400 mt-1">${t('local.wizard.option_custom_creates')}</div>
              </div>
            </label>
          </div>

          <div class="mt-6 text-center">
            <button 
              id="setupLocalCalendarsBtn"
              type="button"
              class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
            >
              🚀 ${t('local.wizard.setup_button')}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Setup Local Calendar Wizard Event Listeners
export function setupLocalCalendarWizardEventListeners() {
  const setupCalendarsBtn = document.getElementById('setupLocalCalendarsBtn');
  
  // Setup calendars button
  setupCalendarsBtn?.addEventListener('click', async () => {
    const selectedOrganization = document.querySelector('input[name="localCalendarOrganization"]:checked')?.value;
    
    if (!selectedOrganization) {
      showNotification(t('local.wizard.select_option'), 'warning');
      return;
    }

    // Bei Option 1: Warnung/Bestätigung anzeigen
    if (selectedOrganization === 'single') {
      const confirmReset = confirm('Achtung: Alle bisherigen lokalen Kalender werden gelöscht und durch einen neuen Standardkalender ersetzt. Fortfahren?');
      if (!confirmReset) {
        return;
      }
    }
    
    setupCalendarsBtn.disabled = true;
    setupCalendarsBtn.textContent = `⏳ ${t('local.wizard.setting_up_calendars')}`;
    
    try {
      await handleLocalCalendarSetup(selectedOrganization);
      
      const wizardDiv = document.getElementById('localCalendarWizard');
      if (wizardDiv) {
        wizardDiv.style.display = 'none';
      }
      
      showNotification(t('local.wizard.setup_complete'), 'success');
      
      // Refresh the view
      document.dispatchEvent(new CustomEvent('localCalendarsUpdated'));
      
    } catch (error) {
      console.error('Local calendar setup failed:', error);
      showNotification(t('local.wizard.setup_failed'), 'error');
    } finally {
      setupCalendarsBtn.disabled = false;
      setupCalendarsBtn.textContent = `🚀 ${t('local.wizard.setup_button')}`;
    }
  });
}

// Handle local calendar setup based on selected organization
async function handleLocalCalendarSetup(organizationType) {
  if (organizationType === 'single') {
    // Alle bestehenden Kalender löschen (Reset)
    const { getDB } = await import('../../core/db/connection.js');
    const db = await getDB();
    const tx = db.transaction('calendars', 'readwrite');
    await tx.store.clear();
    await tx.done;

    // Jetzt Standardkalender anlegen
    await initializeDefaultCalendars();

    // Hole den Standardkalender robust (ohne Index)
    const allCalendars = await db.getAll('calendars');
    const defaultCalendar = allCalendars.find(cal => cal.isDefault) || allCalendars[0];
    if (defaultCalendar) {
      localStorage.setItem('selectedLocalCalendarId', defaultCalendar.id.toString());
    } else {
      throw new Error('Standardkalender konnte nicht angelegt werden!');
    }
    return;
  }

  // Initialize default calendars if needed
  await initializeDefaultCalendars();
  
  switch (organizationType) {
    case 'areas':
      // Create garden area calendars
      const areaCalendarIds = await createGardenTemplateCalendars();
      
      // Set the first one as default
      if (areaCalendarIds.length > 0) {
        localStorage.setItem('selectedLocalCalendarId', areaCalendarIds[0].toString());
      }
      
      // Store all created calendars
      localStorage.setItem('localCalendars', JSON.stringify({
        type: 'areas',
        calendarIds: areaCalendarIds
      }));
      break;
    
    case 'custom':
      // Create a few example custom calendars
      const customCalendars = [
        {
          name: 'Test Garten',
          color: '#8B5CF6',
          icon: '🧪',
          description: 'Für Experimente und Tests'
        },
        {
          name: 'Indoor Garten',
          color: '#06B6D4',
          icon: '🏠',
          description: 'Für Zimmerpflanzen und Indoor-Anbau'
        },
        {
          name: 'Balkon Garten',
          color: '#84CC16',
          icon: '🏢',
          description: 'Für Balkon- und Terrassenpflanzen'
        }
      ];
      
      const customCalendarIds = [];
      for (const customCalendar of customCalendars) {
        const calendarId = await createLocalCalendar(customCalendar);
        customCalendarIds.push(calendarId);
      }
      
      // Set the first one as default
      if (customCalendarIds.length > 0) {
        localStorage.setItem('selectedLocalCalendarId', customCalendarIds[0].toString());
      }
      
      // Store all created calendars
      localStorage.setItem('localCalendars', JSON.stringify({
        type: 'custom',
        calendarIds: customCalendarIds
      }));
      break;
    
    default:
      throw new Error('Invalid organization type');
  }
}

export default {
  renderLocalCalendarWizardHTML,
  setupLocalCalendarWizardEventListeners
}; 