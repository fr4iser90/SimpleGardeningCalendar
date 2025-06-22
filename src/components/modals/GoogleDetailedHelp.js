import { t } from '../../core/i18n/index.js';

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
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h3 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">🎯 ${t('google.help.overview_title')}</h3>
          <p class="text-sm text-blue-700 dark:text-blue-300">${t('google.help.overview_text')}</p>
        </div>
        
        <div class="space-y-4">
          <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <h4 class="font-medium text-gray-900 dark:text-white mb-2">
              <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm mr-2">1</span>
              ${t('google.help.step1_title')}
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">${t('google.help.step1_text')}</p>
            <a href="https://console.cloud.google.com/" target="_blank" class="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm">
              🔗 ${t('google.help.open_console')} <span class="ml-1">↗</span>
            </a>
          </div>
          
          <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <h4 class="font-medium text-gray-900 dark:text-white mb-2">
              <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm mr-2">2</span>
              ${t('google.help.step2_title')}
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">${t('google.help.step2_text')}</p>
          </div>
          
          <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <h4 class="font-medium text-gray-900 dark:text-white mb-2">
              <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm mr-2">3</span>
              ${t('google.help.step3_title')}
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">${t('google.help.step3_text')}</p>
            <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded border">
              <p class="text-xs text-gray-600 dark:text-gray-400">${t('google.help.step3_search')}: <code class="bg-gray-200 dark:bg-gray-600 px-1 rounded">Google Calendar API</code></p>
            </div>
          </div>
          
          <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <h4 class="font-medium text-gray-900 dark:text-white mb-2">
              <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm mr-2">4</span>
              ${t('google.help.step4_title')}
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">${t('google.help.step4_text')}</p>
            <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded border">
              <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">${t('google.help.step4_path')}:</p>
              <p class="text-xs font-mono bg-gray-200 dark:bg-gray-600 p-2 rounded">${t('google.help.step4_navigation')}</p>
            </div>
          </div>
          
          <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <h4 class="font-medium text-gray-900 dark:text-white mb-2">
              <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm mr-2">5</span>
              ${t('google.help.step5_title')}
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">${t('google.help.step5_text')}</p>
            <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-3 rounded">
              <p class="text-xs text-yellow-700 dark:text-yellow-300 mb-2">
                <strong>⚠️ ${t('google.help.step5_important')}:</strong>
              </p>
              <p class="text-xs font-mono bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded">${window.location.origin}</p>
            </div>
          </div>
          
          <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <h4 class="font-medium text-gray-900 dark:text-white mb-2">
              <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm mr-2">6</span>
              ${t('google.help.step6_title')}
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">${t('google.help.step6_text')}</p>
          </div>
        </div>
        
        <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h3 class="font-semibold text-green-800 dark:text-green-200 mb-2">✅ ${t('google.help.troubleshooting_title')}</h3>
          <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
            <li>• ${t('google.help.troubleshooting_1')}</li>
            <li>• ${t('google.help.troubleshooting_2')}</li>
            <li>• ${t('google.help.troubleshooting_3')}</li>
          </ul>
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
  
  // Event listeners
  document.getElementById('closeDetailedHelp').addEventListener('click', () => {
    document.body.removeChild(modal);
  });
  document.getElementById('closeDetailedHelpBtn').addEventListener('click', () => {
    document.body.removeChild(modal);
  });
  
  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });
}
