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
          <h3 class="font-semibold text-blue-800 dark:text-blue-200 mb-3">🚀 Google Cloud Console Setup</h3>
          <div class="text-sm text-blue-700 dark:text-blue-300 space-y-3">
            <div class="flex items-start space-x-3">
              <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
              <div>
                <p class="font-medium">Go to Google Cloud Console</p>
                <a href="https://console.cloud.google.com/" target="_blank" class="text-blue-600 hover:text-blue-800 underline">
                  https://console.cloud.google.com/
                </a>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
              <div>
                <p class="font-medium">Create a new project or select existing one</p>
                <p class="text-xs opacity-75">Click on the project dropdown at the top and create a new project</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
              <div>
                <p class="font-medium">Enable Google Calendar API</p>
                <a href="https://console.cloud.google.com/apis/library/calendar-json.googleapis.com" target="_blank" class="text-blue-600 hover:text-blue-800 underline">
                  Enable Calendar API
                </a>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</span>
              <div>
                <p class="font-medium">Create OAuth 2.0 Client ID</p>
                <a href="https://console.cloud.google.com/apis/credentials" target="_blank" class="text-blue-600 hover:text-blue-800 underline">
                  Go to Credentials
                </a>
                <p class="text-xs opacity-75 mt-1">Click "Create Credentials" → "OAuth 2.0 Client IDs" → "Web application"</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">5</span>
              <div>
                <p class="font-medium">Add your domain to "Authorized JavaScript origins"</p>
                <p class="text-xs opacity-75">Add: <code class="bg-blue-100 px-1 rounded">http://localhost:5173</code> (for development)</p>
                <p class="text-xs opacity-75">Add your production domain when deploying</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Client ID Instructions -->
        <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h3 class="font-semibold text-green-800 dark:text-green-200 mb-2">🔑 Getting Your Client ID</h3>
          <div class="text-sm text-green-700 dark:text-green-300 space-y-2">
            <p>After creating the OAuth 2.0 Client ID, you'll get a Client ID that looks like:</p>
            <code class="bg-green-100 dark:bg-green-800 px-2 py-1 rounded text-xs block">123456789-abc123def456.apps.googleusercontent.com</code>
            <p>Copy this Client ID and paste it in the field above.</p>
          </div>
        </div>

        <!-- Troubleshooting -->
        <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <h3 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">🔧 Troubleshooting</h3>
          <ul class="text-sm text-yellow-700 dark:text-yellow-300 space-y-2">
            <li>• <strong>Error: "redirect_uri_mismatch"</strong> - Make sure you added the correct domain to authorized origins</li>
            <li>• <strong>Error: "access_denied"</strong> - Check that the Calendar API is enabled</li>
            <li>• <strong>Error: "invalid_client"</strong> - Verify your Client ID is correct</li>
            <li>• <strong>Calendar not showing</strong> - Make sure you're signed in with the correct Google account</li>
          </ul>
        </div>

        <!-- Security Note -->
        <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <h3 class="font-semibold text-purple-800 dark:text-purple-200 mb-2">🔒 Security Note</h3>
          <p class="text-sm text-purple-700 dark:text-purple-300">
            Your Client ID is stored locally in your browser and is safe to use. 
            Never share your Client Secret (if you have one) - only the Client ID is needed.
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
