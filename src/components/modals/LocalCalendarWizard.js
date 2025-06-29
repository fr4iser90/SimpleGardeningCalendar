import { t } from '../../core/i18n/index.js';
import { 
  initializeDefaultCalendars, 
  createGardenTemplateCalendars, 
  createLocalCalendar,
  getDefaultCalendar,
  getAllLocalCalendars,
  migrateEventsToNewOrganization
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
            <label class="flex items-start space-x-3 p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors relative">
              <input type="radio" name="localCalendarOrganization" value="areas" class="mt-1">
              <div class="flex-1">
                <div class="font-medium text-gray-900 dark:text-white">🌿 ${t('local.wizard.option_areas')}</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">${t('local.wizard.option_areas_desc')}</div>
                <div class="text-xs text-blue-600 dark:text-blue-400 mt-1">${t('local.wizard.option_areas_creates')}</div>
                <div id="areaCalendarsCheckboxes" class="mt-2 hidden">
                  <label class="flex items-center gap-2">
                    <input type="checkbox" class="area-checkbox" value="vegetables" checked>
                    ${t('calendar.vegetables')}
                  </label>
                  <label class="flex items-center gap-2">
                    <input type="checkbox" class="area-checkbox" value="herbs" checked>
                    ${t('calendar.herbs')}
                  </label>
                  <label class="flex items-center gap-2">
                    <input type="checkbox" class="area-checkbox" value="flowers" checked>
                    ${t('calendar.ornamental')}
                  </label>
                  <label class="flex items-center gap-2">
                    <input type="checkbox" class="area-checkbox" value="fruits" checked>
                    ${t('calendar.fruits')}
                  </label>
                </div>
              </div>
            </label>

            <!-- Option 3: Custom Calendars (jetzt mit flexibler Eingabe) -->
            <label class="flex items-start space-x-3 p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors relative">
              <input type="radio" name="localCalendarOrganization" value="custom" class="mt-1">
              <div class="flex-1">
                <div class="font-medium text-gray-900 dark:text-white">➕ ${t('local.wizard.option_custom')}</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">${t('local.wizard.option_custom_desc')}</div>
                <div class="text-xs text-purple-600 dark:text-purple-400 mt-1">${t('local.wizard.option_custom_creates')}</div>
                <div id="customCalendarsInputSection" class="mt-3 space-y-2 hidden">
                  <div class="flex gap-2 items-center">
                    <select id="customCalendarIconInput" class="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <option value="🌱">🌱</option>
                      <option value="🌿">🌿</option>
                      <option value="🌻">🌻</option>
                      <option value="🌹">🌹</option>
                      <option value="🌷">🌷</option>
                      <option value="🌸">🌸</option>
                      <option value="🌺">🌺</option>
                      <option value="🌼">🌼</option>
                      <option value="🌾">🌾</option>
                      <option value="🌽">🌽</option>
                      <option value="🥕">🥕</option>
                      <option value="🍅">🍅</option>
                      <option value="🥬">🥬</option>
                      <option value="🥒">🥒</option>
                      <option value="🫑">🫑</option>
                      <option value="🧅">🧅</option>
                      <option value="🧄">🧄</option>
                      <option value="🥔">🥔</option>
                      <option value="🍆">🍆</option>
                      <option value="🌶️">🌶️</option>
                      <option value="🍓">🍓</option>
                      <option value="🫐">🫐</option>
                      <option value="🍇">🍇</option>
                      <option value="🍎">🍎</option>
                      <option value="🍐">🍐</option>
                      <option value="🍑">🍑</option>
                      <option value="🍒">🍒</option>
                      <option value="🌳">🌳</option>
                      <option value="🌲">🌲</option>
                      <option value="🌴">🌴</option>
                      <option value="🌵">🌵</option>
                      <option value="🍄">🍄</option>
                      <option value="☘️">☘️</option>
                      <option value="🍀">🍀</option>
                    </select>
                    <input type="text" id="customCalendarNameInput" class="p-2 border rounded w-1/2 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Kalendername">
                    <button type="button" id="addCustomCalendarBtn" class="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">+</button>
                  </div>
                  <div id="customCalendarsList" class="space-y-1"></div>
                </div>
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
export async function setupLocalCalendarWizardEventListeners() {
  const setupCalendarsBtn = document.getElementById('setupLocalCalendarsBtn');
  const customCalendarsInputSection = document.getElementById('customCalendarsInputSection');
  const addCustomCalendarBtn = document.getElementById('addCustomCalendarBtn');
  const customCalendarNameInput = document.getElementById('customCalendarNameInput');
  const customCalendarIconInput = document.getElementById('customCalendarIconInput');
  const customCalendarsList = document.getElementById('customCalendarsList');
  const areaCalendarsCheckboxes = document.getElementById('areaCalendarsCheckboxes');

  let customCalendars = [];

  // Zeige die Checkboxen nur, wenn Option 2 gewählt ist
  document.querySelectorAll('input[name="localCalendarOrganization"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      if (e.target.value === 'areas') {
        areaCalendarsCheckboxes.classList.remove('hidden');
      } else {
        areaCalendarsCheckboxes.classList.add('hidden');
      }
      if (e.target.value === 'custom') {
        customCalendarsInputSection.classList.remove('hidden');
      } else {
        customCalendarsInputSection.classList.add('hidden');
      }
    });
  });

  // Kalender hinzufügen
  addCustomCalendarBtn?.addEventListener('click', () => {
    const name = customCalendarNameInput.value.trim();
    const icon = customCalendarIconInput.value.trim() || '🌱';
    if (!name) return;
    customCalendars.push({ name, icon });
    customCalendarNameInput.value = '';
    customCalendarIconInput.value = '';
    renderCustomCalendarsList();
  });

  // Kalender aus Liste entfernen
  function renderCustomCalendarsList() {
    customCalendarsList.innerHTML = customCalendars.map((cal, idx) => `
      <div class="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded px-2 py-1">
        <span>${cal.icon}</span>
        <span>${cal.name}</span>
        <button type="button" class="ml-auto text-red-500 hover:text-red-700" data-remove-idx="${idx}">✕</button>
      </div>
    `).join('');
    // Remove-Button-Handler
    customCalendarsList.querySelectorAll('button[data-remove-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-remove-idx'));
        customCalendars.splice(idx, 1);
        renderCustomCalendarsList();
      });
    });
  }

  // Setup calendars button
  setupCalendarsBtn?.addEventListener('click', async () => {
    const selectedOrganization = document.querySelector('input[name="localCalendarOrganization"]:checked')?.value;
    
    if (!selectedOrganization) {
      showNotification(t('local.wizard.select_option'), 'warning');
      return;
    }

    // Prüfe, ob schon Kalender existieren - bei ALLEN Optionen
    const existingCalendars = await getAllLocalCalendars();
    if (existingCalendars.length > 0) {
      const organizationType = selectedOrganization === 'single' ? 'einen Standardkalender' : 
                              selectedOrganization === 'areas' ? 'Bereichskalender' : 'benutzerdefinierte Kalender';
      
      // Create warning modal instead of confirm
      const warningModal = document.createElement('div');
      warningModal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
      warningModal.innerHTML = `
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
          <div class="flex items-center mb-4">
            <span class="text-2xl mr-3">⚠️</span>
            <h3 class="text-lg font-semibold dark:text-white">Kalender-Organisation ändern</h3>
          </div>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Achtung: Das Setup löscht alle bestehenden lokalen Kalender und richtet ${organizationType} ein.
          </p>
          <div class="flex justify-end space-x-3">
            <button id="cancelWarningBtn" class="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-400 dark:hover:bg-gray-500">
              Abbrechen
            </button>
            <button id="confirmWarningBtn" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Fortfahren
            </button>
          </div>
        </div>
      `;
      
      document.body.appendChild(warningModal);
      
      // Wait for user decision
      const userConfirmed = await new Promise((resolve) => {
        warningModal.querySelector('#cancelWarningBtn').addEventListener('click', () => {
          warningModal.remove();
          resolve(false);
        });
        
        warningModal.querySelector('#confirmWarningBtn').addEventListener('click', () => {
          warningModal.remove();
          resolve(true);
        });
      });
      
      if (!userConfirmed) {
        return;
      }
    }

    // Bei Option 3: Prüfe, ob mindestens ein Kalender eingegeben wurde
    if (selectedOrganization === 'custom' && customCalendars.length === 0) {
      showNotification('Bitte mindestens einen benutzerdefinierten Kalender hinzufügen.', 'warning');
      return;
    }
    
    // Areas: nur ausgewählte Bereiche als Kalender anlegen
    if (selectedOrganization === 'areas') {
      const checkedAreas = Array.from(document.querySelectorAll('.area-checkbox:checked')).map(cb => cb.value);
      if (checkedAreas.length === 0) {
        showNotification('Bitte mindestens einen Bereich auswählen.', 'warning');
        return;
      }
    }
    
    setupCalendarsBtn.disabled = true;
    setupCalendarsBtn.textContent = `⏳ ${t('local.wizard.setting_up_calendars')}`;
    
    try {
      await handleLocalCalendarSetup(selectedOrganization, customCalendars);
      
      showNotification(t('local.wizard.setup_complete'), 'success');
      
      // Show migration notification if there were events to migrate
      const { getAllEvents } = await import('../../services/EventService.js');
      const events = await getAllEvents();
      if (events.length > 0) {
        showNotification(`✅ ${events.length} Events wurden automatisch in die neue Kalender-Organisation verschoben!`, 'info');
      }
      
      // Refresh the view
      document.dispatchEvent(new CustomEvent('localCalendarsUpdated'));
      
      // Refresh the calendar to show migrated events
      document.dispatchEvent(new CustomEvent('refreshCalendar'));
      
      // NEU: Alle Google-IDs zurücksetzen, damit Events in neue Kalender exportiert werden
      try {
        const { openDB } = await import('idb');
        const { DB_NAME, DB_VERSION } = await import('../../core/db/connection.js');
        const db = await openDB(DB_NAME, DB_VERSION);
        const allEvents = await db.getAll('events');
        
        let resetCount = 0;
        for (const event of allEvents) {
          if (event.googleEventId || event.googleCalendarId) {
            event.googleEventId = null;
            event.googleCalendarId = null;
            await db.put('events', event);
            resetCount++;
          }
        }
        
        if (resetCount > 0) {
          console.log(`🔄 Reset Google IDs for ${resetCount} events after organization change`);
          showNotification(`🔄 ${resetCount} Events werden für neuen Google-Export vorbereitet...`, 'info');
        }
      } catch (error) {
        console.error('Failed to reset Google IDs:', error);
      }
      
      // NEU: Automatischer Google-Sync nach Kalender-Setup
      try {
        const { performBidirectionalSync } = await import('../../services/GoogleCalendar/GoogleCalendarSync.js');
        const { getAuthState } = await import('../../services/GoogleCalendar/GoogleCalendarApi.js');
        const { isSignedIn } = getAuthState();
        
        if (isSignedIn) {
          showNotification('🔄 Google-Kalender werden automatisch angepasst...', 'info');
          await performBidirectionalSync();
          showNotification('✅ Google-Sync nach Kalender-Setup erfolgreich!', 'success');
        } else {
          console.log('Google nicht verbunden - überspringe automatischen Sync');
        }
      } catch (error) {
        console.error('Google-Sync nach Kalender-Setup fehlgeschlagen:', error);
        showNotification('⚠️ Google-Sync nach Kalender-Setup fehlgeschlagen: ' + error.message, 'warning');
      }
      
      // Close the entire modal after organization is complete
      const modal = document.querySelector('.local-calendar-modal');
      if (modal) {
        modal.remove();
      }
      
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
async function handleLocalCalendarSetup(organizationType, customCalendars = []) {
  // Immer zuerst alle bestehenden Kalender löschen (Reset)
  const { getDB } = await import('../../core/db/connection.js');
  const db = await getDB();
  const tx = db.transaction('calendars', 'readwrite');
  await tx.store.clear();
  await tx.done;

  if (organizationType === 'single') {
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
    
    // Save organization type to localStorage
    localStorage.setItem('localCalendarsSetting', JSON.stringify({
      type: 'single',
      calendarIds: [defaultCalendar.id]
    }));
    
    // Migrate existing events to new organization
    await migrateEventsToNewOrganization('single');
    return;
  }

  if (organizationType === 'areas') {
    // Nur ausgewählte Bereiche als Kalender anlegen
    const checkedAreas = Array.from(document.querySelectorAll('.area-checkbox:checked')).map(cb => cb.value);
    const areaTemplates = [
      { key: 'vegetables', name: t('calendar.vegetables'), icon: '🥕', categoryKey: 'vegetables' },
      { key: 'herbs', name: t('calendar.herbs'), icon: '🌿', categoryKey: 'herbs' },
      { key: 'flowers', name: t('calendar.ornamental'), icon: '🌸', categoryKey: 'ornamental' },
      { key: 'fruits', name: t('calendar.fruits'), icon: '🍓', categoryKey: 'fruits' }
    ];
    const selectedTemplates = areaTemplates.filter(tpl => checkedAreas.includes(tpl.key));
    const areaCalendarIds = [];
    for (const tpl of selectedTemplates) {
      const calendarId = await createLocalCalendar({ name: tpl.name, icon: tpl.icon, categoryKey: tpl.categoryKey });
      areaCalendarIds.push(calendarId);
    }
    if (areaCalendarIds.length > 0) {
      localStorage.setItem('selectedLocalCalendarId', areaCalendarIds[0].toString());
    }
    localStorage.setItem('localCalendarsSetting', JSON.stringify({
      type: 'areas',
      calendarIds: areaCalendarIds
    }));
    
    // Migrate existing events to new organization
    await migrateEventsToNewOrganization('areas');
    return;
  }

  if (organizationType === 'custom') {
    // Erstelle alle benutzerdefinierten Kalender
    const customCalendarIds = [];
    for (const customCalendar of customCalendars) {
      const calendarId = await createLocalCalendar(customCalendar);
      customCalendarIds.push(calendarId);
    }
    // Setze den ersten als aktiv
    if (customCalendarIds.length > 0) {
      localStorage.setItem('selectedLocalCalendarId', customCalendarIds[0].toString());
    }
    // Speichere alle Kalender
    localStorage.setItem('localCalendarsSetting', JSON.stringify({
      type: 'custom',
      calendarIds: customCalendarIds
    }));
    
    // Migrate existing events to new organization
    await migrateEventsToNewOrganization('custom');
    return;
  }

  throw new Error('Invalid organization type');
}

export default {
  renderLocalCalendarWizardHTML,
  setupLocalCalendarWizardEventListeners
}; 