import { t, getCurrentLanguage, initializeI18n } from './core/i18n/index.js';
import { renderAppShell } from './components/app/AppShell.js';
import { showPlantLibraryModal } from './components/app/PlantLibrary.js';
import { showMyPlantsModal } from './components/app/PlantsList.js';
import { toggleTheme } from './components/app/ThemeToggle.js';

export function initializeApp() {
  // Initialize i18n first
  initializeI18n();

  // Initial Darkmode-Status
  const isDarkMode = document.documentElement.classList.contains('dark') || window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Render AppShell
  renderAppShell({
    t,
    getCurrentLanguage,
    isDarkMode,
    onLanguageChange: async (e) => {
      const newLanguage = e.target.value;
      const { setLanguage } = await import('./core/i18n/index.js');
      setLanguage(newLanguage);
      location.reload();
    },
    onPlantLibrary: () => showPlantLibraryModal(),
    onGoogleCalendar: async () => {
      const { renderGoogleCalendarSetupModal } = await import('./components/modals/GoogleCalendarSetupModal.js');
      renderGoogleCalendarSetupModal();
    },
    onThemeToggle: () => {
      toggleTheme(t);
    }
  });

  // Listen for refresh events
  document.addEventListener('refreshSidebar', () => {
    // The sidebar will handle its own refresh through the initializeSidebar function
  });
}

// Make functions globally available for backward compatibility
window.showMyPlantsModal = showMyPlantsModal;
window.showPlantLibraryModal = showPlantLibraryModal;