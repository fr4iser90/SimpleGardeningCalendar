// AppShell.js
// Main app layout component for SimpleGardeningCalendar

import { createThemeToggle, initializeTheme } from './ThemeToggle.js';
import { initializeSidebar } from './Sidebar.js';

export function renderAppShell({
  t,
  getCurrentLanguage,
  onLanguageChange,
  onPlantLibrary,
  onGoogleCalendar,
  onThemeToggle,
  isDarkMode
}) {
  // Initialize theme
  const currentTheme = initializeTheme();
  
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="min-h-screen">
      <nav class="bg-green-600 text-white p-4">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-xl font-bold">🌱 ${t('app.title')}</h1>
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2">
              <span class="text-sm">${t('ui.language')}</span>
              <select id="languageSelect" class="bg-green-700 text-white p-1 rounded text-sm">
                <option value="de" ${getCurrentLanguage() === 'de' ? 'selected' : ''}>Deutsch</option>
                <option value="en" ${getCurrentLanguage() === 'en' ? 'selected' : ''}>English</option>
                <option value="fr" ${getCurrentLanguage() === 'fr' ? 'selected' : ''}>Français</option>
                <option value="es" ${getCurrentLanguage() === 'es' ? 'selected' : ''}>Español</option>
                <option value="it" ${getCurrentLanguage() === 'it' ? 'selected' : ''}>Italiano</option>
              </select>
            </div>
            <button id="plantLibraryBtn" class="p-2 hover:bg-green-700 rounded">📚 ${t('nav.plants')}</button>
            <button id="googleCalendarBtn" class="p-2 hover:bg-green-700 rounded">🗓️ ${t('nav.google_calendar')}</button>
            <div id="themeToggleContainer"></div>
          </div>
        </div>
      </nav>
      <main class="container mx-auto p-4">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div class="lg:col-span-3">
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <div id="calendar"></div>
            </div>
          </div>
          <div class="space-y-4">
            <section class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-4 dark:text-white">${t('ui.plant_categories')}</h2>
              <div id="plantCategories" class="space-y-2"></div>
            </section>
            <section class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-4 dark:text-white">${t('ui.upcoming_tasks')}</h2>
              <div id="upcomingTasks" class="space-y-2"></div>
            </section>
            <section class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-4 dark:text-white">${t('ui.weather')}</h2>
              <div id="weather" class="text-center dark:text-gray-200">
                <p>${t('ui.weather_info')}</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  `;

  // Create and append theme toggle
  const themeToggleContainer = document.getElementById('themeToggleContainer');
  const themeToggle = createThemeToggle(currentTheme, onThemeToggle, t);
  themeToggleContainer.appendChild(themeToggle);

  // Event listeners for the buttons
  document.getElementById('languageSelect').addEventListener('change', onLanguageChange);
  document.getElementById('plantLibraryBtn').addEventListener('click', onPlantLibrary);
  document.getElementById('googleCalendarBtn').addEventListener('click', onGoogleCalendar);
  
  // Initialize sidebar
  initializeSidebar(t);
}
