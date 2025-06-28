import { t } from '../../../core/i18n/index.js';
import { showNotification } from '../../../utils/notifications.js';
import { googleCalendarSettings } from '../../../services/GoogleCalendar/GoogleCalendarSettings.js';

/**
 * Quota Exceeded Modal
 * Shows when Google Calendar API limits are reached
 */

export function showQuotaExceededModal(errorType = 'calendar_creation') {
  console.log('🚨 Showing Quota Exceeded Modal for:', errorType);
  console.log('🚨 Error type:', errorType);
  console.log('🚨 isCalendarCreation:', errorType === 'calendar_creation');
  console.log('🚨 isEventSync:', errorType === 'event_sync');
  
  // Remove existing modal if present
  const existingModal = document.querySelector('.quota-exceeded-modal');
  if (existingModal) {
    existingModal.remove();
  }
  
  const modal = document.createElement('div');
  modal.className = 'quota-exceeded-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
  
  const isCalendarCreation = errorType === 'calendar_creation';
  const isEventSync = errorType === 'event_sync';
  
  // Get actual calendar names from settings
  const settings = googleCalendarSettings.load();
  const localCalendarsSetting = JSON.parse(localStorage.getItem('localCalendarsSetting') || '{"type": "single"}');
  
  console.log('🚨 Settings:', settings);
  console.log('🚨 Local calendars setting:', localCalendarsSetting);
  
  let calendarExamples = [];
  if (localCalendarsSetting.type === 'single') {
    calendarExamples = [t('calendar.garden')];
  } else if (localCalendarsSetting.type === 'areas') {
    calendarExamples = [
      t('calendar.vegetables'),
      t('calendar.herbs'), 
      t('calendar.ornamental'),
      t('calendar.fruits')
    ];
  }
  
  console.log('🚨 Calendar examples:', calendarExamples);
  
  try {
    modal.innerHTML = `
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <!-- Header -->
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center">
              <span class="text-3xl mr-3">🚨</span>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                ${isCalendarCreation ? t('google.quota.modal.calendar_creation.title') : t('google.quota.modal.event_sync.title')}
              </h2>
            </div>
            <button id="closeQuotaModal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl font-bold">
              ✕
            </button>
          </div>
          
          <!-- Error Icon and Message -->
          <div class="text-center mb-6">
            <div class="text-6xl mb-4">📅</div>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-2">
              ${isCalendarCreation ? t('google.quota.modal.calendar_creation.message') : t('google.quota.modal.event_sync.message')}
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              ${t('google.quota.modal.daily_limit_info')}
            </p>
          </div>
          
          <!-- Instructions Section -->
          <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
            <h3 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-3 flex items-center">
              <span class="text-lg mr-2">💡</span>
              ${t('google.quota.modal.what_to_do')}
            </h3>
            
            ${isCalendarCreation ? `
              <div class="space-y-3">
                <div class="flex items-start">
                  <span class="text-yellow-600 dark:text-yellow-400 font-bold mr-2">1.</span>
                  <p class="text-yellow-700 dark:text-yellow-300">
                    ${t('google.quota.modal.calendar_creation.step1')}
                  </p>
                </div>
                <div class="flex items-start">
                  <span class="text-yellow-600 dark:text-yellow-400 font-bold mr-2">2.</span>
                  <p class="text-yellow-700 dark:text-yellow-300">
                    ${t('google.quota.modal.calendar_creation.step2')}
                  </p>
                </div>
                <div class="flex items-start">
                  <span class="text-yellow-600 dark:text-yellow-400 font-bold mr-2">3.</span>
                  <p class="text-yellow-700 dark:text-yellow-300">
                    ${t('google.quota.modal.calendar_creation.step3')}
                  </p>
                </div>
              </div>
            ` : `
              <div class="space-y-3">
                <div class="flex items-start">
                  <span class="text-yellow-600 dark:text-yellow-400 font-bold mr-2">1.</span>
                  <p class="text-yellow-700 dark:text-yellow-300">
                    ${t('google.quota.modal.event_sync.step1')}
                  </p>
                </div>
                <div class="flex items-start">
                  <span class="text-yellow-600 dark:text-yellow-400 font-bold mr-2">2.</span>
                  <p class="text-yellow-700 dark:text-yellow-300">
                    ${t('google.quota.modal.event_sync.step2')}
                  </p>
                </div>
              </div>
            `}
          </div>
          
          <!-- Calendar Name Examples -->
          ${isCalendarCreation ? `
            <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
              <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                <span class="text-lg mr-2">📝</span>
                ${t('google.quota.modal.calendar_creation.examples_title')}
              </h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                ${calendarExamples.map(name => `
                  <div class="bg-white dark:bg-gray-700 p-2 rounded border">
                    <span class="font-mono">${name}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
          
          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 justify-end">
            <button id="retryLaterBtn" class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors">
              ${t('google.quota.modal.retry_later')}
            </button>
            ${isCalendarCreation ? `
              <button id="openGoogleCalendarBtn" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center justify-center">
                <img src="https://www.gstatic.com/images/branding/product/1x/calendar_48dp.png" alt="Google Calendar" class="w-4 h-4 mr-2">
                ${t('google.quota.modal.open_google_calendar')}
              </button>
            ` : ''}
            <button id="setupCalendarsBtn" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
              ${t('google.quota.modal.setup_calendars')}
            </button>
          </div>
        </div>
      </div>
    `;
    
    console.log('🚨 Modal HTML created successfully');
  } catch (error) {
    console.error('🚨 Error creating modal HTML:', error);
    // Fallback simple modal
    modal.innerHTML = `
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Google Calendar Limit Reached</h2>
        <p class="text-gray-700 dark:text-gray-300 mb-4">You have reached the daily limit for creating Google Calendars. Please try again tomorrow or create calendars manually in Google Calendar.</p>
        <button id="closeQuotaModal" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Close</button>
      </div>
    `;
  }
  
  console.log('🚨 Appending modal to DOM...');
  document.body.appendChild(modal);
  console.log('🚨 Modal appended to DOM successfully');
  
  // Event listeners
  console.log('🚨 Setting up event listeners...');
  modal.querySelector('#closeQuotaModal').addEventListener('click', () => {
    console.log('🚨 Close button clicked');
    modal.remove();
  });
  
  modal.querySelector('#retryLaterBtn').addEventListener('click', () => {
    console.log('🚨 Retry later button clicked');
    modal.remove();
    showNotification(t('google.quota.modal.retry_later_message'), 'info');
  });
  
  if (isCalendarCreation) {
    modal.querySelector('#openGoogleCalendarBtn').addEventListener('click', () => {
      console.log('🚨 Open Google Calendar button clicked');
      window.open('https://calendar.google.com', '_blank');
      modal.remove();
      showNotification(t('google.quota.modal.opened_google_calendar'), 'success');
    });
  }
  
  modal.querySelector('#setupCalendarsBtn').addEventListener('click', () => {
    console.log('🚨 Setup calendars button clicked');
    modal.remove();
    // Open the Google Calendar setup modal
    if (window.renderGoogleCalendarSetupModal) {
      window.renderGoogleCalendarSetupModal();
    } else {
      import('./GoogleCalendarSetupModal.js').then(mod => {
        mod.renderGoogleCalendarSetupModal();
      });
    }
  });
  
  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
  
  // Close modal with Escape key
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      modal.remove();
      document.removeEventListener('keydown', handleEscape);
    }
  };
  document.addEventListener('keydown', handleEscape);
  
  console.log('🚨 Event listeners set up successfully');
  
  return modal;
} 