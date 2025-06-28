// Detailed help content for Google API Client ID setup and troubleshooting
import { t } from '../../../core/i18n/index.js';

export function showDetailedHelp() {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-semibold dark:text-white">📋 ${t('google.setup.detailed_guide')}</h2>
        <button id="closeDetailedHelp" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">✕</button>
      </div>
      <div class="space-y-6">
        <!-- Google Cloud Console Setup -->
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h3 class="font-semibold text-blue-800 dark:text-blue-200 mb-3">🚀 ${t('google.setup.cloud_console.title')}</h3>
          <div class="text-sm text-blue-700 dark:text-blue-300 space-y-3">
            <div class="flex items-start space-x-3">
              <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
              <div>
                <p class="font-medium">${t('google.setup.cloud_console.step1')}</p>
                <a href="https://console.cloud.google.com/" target="_blank" class="text-blue-600 hover:text-blue-800 underline">
                  https://console.cloud.google.com/
                </a>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
              <div>
                <p class="font-medium">${t('google.setup.cloud_console.step2')}</p>
                <p class="text-xs opacity-75">${t('google.setup.cloud_console.step2_desc')}</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
              <div>
                <p class="font-medium">${t('google.setup.cloud_console.step3')}</p>
                <a href="https://console.cloud.google.com/apis/library/calendar-json.googleapis.com" target="_blank" class="text-blue-600 hover:text-blue-800 underline">
                  Enable Calendar API
                </a>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</span>
              <div>
                <p class="font-medium">${t('google.setup.cloud_console.step4')}</p>
                <a href="https://console.cloud.google.com/apis/credentials" target="_blank" class="text-blue-600 hover:text-blue-800 underline">
                  Go to Credentials
                </a>
                <p class="text-xs opacity-75 mt-1">${t('google.setup.cloud_console.step4_desc')}</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">5</span>
              <div>
                <p class="font-medium">${t('google.setup.cloud_console.step5')}</p>
                <p class="text-xs opacity-75">${t('google.setup.cloud_console.step5_desc')}</p>
                <p class="text-xs opacity-75">${t('google.setup.cloud_console.step5_desc2')}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Client ID Instructions -->
        <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h3 class="font-semibold text-green-800 dark:text-green-200 mb-2">🔑 ${t('google.setup.client_id.title')}</h3>
          <div class="text-sm text-green-700 dark:text-green-300 space-y-2">
            <p>${t('google.setup.client_id.description')}</p>
            <code class="bg-green-100 dark:bg-green-800 px-2 py-1 rounded text-xs block">${t('google.setup.client_id.example')}</code>
            <p>${t('google.setup.client_id.instruction')}</p>
          </div>
        </div>

        <!-- Troubleshooting -->
        <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <h3 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">🔧 ${t('google.setup.troubleshooting.title')}</h3>
          <ul class="text-sm text-yellow-700 dark:text-yellow-300 space-y-2">
            <li>• <strong>Error: "redirect_uri_mismatch"</strong> - ${t('google.setup.troubleshooting.redirect_mismatch')}</li>
            <li>• <strong>Error: "access_denied"</strong> - ${t('google.setup.troubleshooting.access_denied')}</li>
            <li>• <strong>Error: "invalid_client"</strong> - ${t('google.setup.troubleshooting.invalid_client')}</li>
            <li>• <strong>Calendar not showing</strong> - ${t('google.setup.troubleshooting.calendar_not_showing')}</li>
          </ul>
        </div>

        <!-- API Quotas and Limits -->
        <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <h3 class="font-semibold text-red-800 dark:text-red-200 mb-2">${t('google.api_limits.title')}</h3>
          <div class="text-sm text-red-700 dark:text-red-300 space-y-3">
            <div>
              <p class="font-medium">${t('google.api_limits.calendar_creation.title')}</p>
              <ul class="ml-4 space-y-1">
                <li>• <strong>${t('google.api_limits.calendar_creation.limit')}</strong></li>
                <li>• <strong>${t('google.api_limits.calendar_creation.error')}</strong></li>
                <li>• <strong>${t('google.api_limits.calendar_creation.solution')}</strong></li>
              </ul>
            </div>
            <div>
              <p class="font-medium">${t('google.api_limits.event_creation.title')}</p>
              <ul class="ml-4 space-y-1">
                <li>• <strong>${t('google.api_limits.event_creation.limit')}</strong></li>
                <li>• <strong>${t('google.api_limits.event_creation.no_problem')}</strong></li>
              </ul>
            </div>
            <div>
              <p class="font-medium">${t('google.api_limits.api_calls.title')}</p>
              <ul class="ml-4 space-y-1">
                <li>• <strong>${t('google.api_limits.api_calls.limit')}</strong></li>
                <li>• <strong>${t('google.api_limits.api_calls.sufficient')}</strong></li>
              </ul>
            </div>
            <div class="bg-red-100 dark:bg-red-800 p-3 rounded">
              <p class="font-medium">${t('google.api_limits.pro_tip.title')}</p>
              <p>${t('google.api_limits.pro_tip.text')}</p>
            </div>
          </div>
        </div>

        <!-- Security Note -->
        <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <h3 class="font-semibold text-purple-800 dark:text-purple-200 mb-2">🔒 ${t('google.setup.security.title')}</h3>
          <p class="text-sm text-purple-700 dark:text-purple-300">
            ${t('google.setup.security.description')}
          </p>
        </div>
      </div>
      <div class="mt-6 text-center">
        <button id="closeDetailedHelpBtn" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
          ${t('common.close')}
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  document.getElementById('closeDetailedHelp').addEventListener('click', () => {
    document.body.removeChild(modal);
  });
  document.getElementById('closeDetailedHelpBtn').addEventListener('click', () => {
    document.body.removeChild(modal);
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });
}
