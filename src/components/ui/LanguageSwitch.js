// Language Switcher UI Component
// Provides language selection dropdown

import { t, setLanguage, getAvailableLanguages } from '../../core/i18n/index.js';

/**
 * LanguageSwitch - UI Component for language switching
 * Moved from core/i18n/ui/LanguageSwitcher.js and enhanced
 */

// Create language switcher component
export function createLanguageSwitcher() {
  const switcher = document.createElement('div');
  switcher.className = 'language-switcher flex items-center space-x-2';
  
  const label = document.createElement('span');
  label.textContent = t('settings.language') + ':';
  label.className = 'text-sm font-medium text-gray-700 dark:text-gray-300';
  
  const select = document.createElement('select');
  select.className = 'px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm';
  
  // Add options
  const languages = getAvailableLanguages();
  languages.forEach(({ code, name, isActive }) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = name;
    option.selected = isActive;
    select.appendChild(option);
  });
  
  // Add change handler
  select.addEventListener('change', (e) => {
    setLanguage(e.target.value);
    // Update UI dynamically instead of reloading
    updateUITranslations();
  });
  
  switcher.appendChild(label);
  switcher.appendChild(select);
  
  return switcher;
}

// Create compact language switcher (just the select)
export function createCompactLanguageSwitcher() {
  const select = document.createElement('select');
  select.className = 'px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm';
  select.title = t('settings.language');
  
  // Add options
  const languages = getAvailableLanguages();
  languages.forEach(({ code, name, isActive }) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = code.toUpperCase(); // Just show language codes
    option.selected = isActive;
    select.appendChild(option);
  });
  
  // Add change handler
  select.addEventListener('change', (e) => {
    setLanguage(e.target.value);
    updateUITranslations();
  });
  
  return select;
}

// Create language switcher with flags
export function createLanguageSwitcherWithFlags() {
  const switcher = document.createElement('div');
  switcher.className = 'language-switcher flex items-center space-x-2';
  
  const select = document.createElement('select');
  select.className = 'px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm';
  
  // Language flags mapping
  const flags = {
    'de': '🇩🇪',
    'en': '🇺🇸',
    'fr': '🇫🇷',
    'es': '🇪🇸',
    'it': '🇮🇹'
  };
  
  // Add options
  const languages = getAvailableLanguages();
  languages.forEach(({ code, name, isActive }) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = `${flags[code] || '🌐'} ${name}`;
    option.selected = isActive;
    select.appendChild(option);
  });
  
  // Add change handler
  select.addEventListener('change', (e) => {
    setLanguage(e.target.value);
    updateUITranslations();
  });
  
  switcher.appendChild(select);
  
  return switcher;
}

// Create language switcher as buttons
export function createLanguageSwitcherButtons() {
  const container = document.createElement('div');
  container.className = 'language-switcher-buttons flex space-x-1';
  
  // Language flags mapping
  const flags = {
    'de': '🇩🇪',
    'en': '🇺🇸',
    'fr': '🇫🇷',
    'es': '🇪🇸',
    'it': '🇮🇹'
  };
  
  const languages = getAvailableLanguages();
  languages.forEach(({ code, name, isActive }) => {
    const button = document.createElement('button');
    button.className = `px-2 py-1 rounded text-sm transition-colors ${
      isActive 
        ? 'bg-green-500 text-white' 
        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
    }`;
    button.title = name;
    button.textContent = flags[code] || '🌐';
    
    button.addEventListener('click', () => {
      setLanguage(code);
      updateUITranslations();
      
      // Update button states
      container.querySelectorAll('button').forEach(btn => {
        btn.className = btn === button 
          ? 'px-2 py-1 rounded text-sm transition-colors bg-green-500 text-white'
          : 'px-2 py-1 rounded text-sm transition-colors bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600';
      });
    });
    
    container.appendChild(button);
  });
  
  return container;
}

// Update UI text elements with translations
export function updateUITranslations() {
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translated = t(key);
    
    if (element.tagName === 'INPUT' && (element.type === 'submit' || element.type === 'button')) {
      element.value = translated;
    } else if (element.tagName === 'INPUT' && element.type === 'text') {
      element.placeholder = translated;
    } else {
      element.textContent = translated;
    }
  });
  
  // Update page title
  const titleElement = document.querySelector('title');
  if (titleElement && titleElement.getAttribute('data-i18n')) {
    const titleKey = titleElement.getAttribute('data-i18n');
    titleElement.textContent = t(titleKey);
  }
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && metaDescription.getAttribute('data-i18n')) {
    const descKey = metaDescription.getAttribute('data-i18n');
    metaDescription.setAttribute('content', t(descKey));
  }
  
  // Dispatch custom event for other components to listen to
  document.dispatchEvent(new CustomEvent('languageChanged', {
    detail: { language: getCurrentLanguage() }
  }));
}

// Get current language
export function getCurrentLanguage() {
  return document.documentElement.lang || 'en';
}

// Set language with additional UI updates
export function switchLanguage(languageCode) {
  setLanguage(languageCode);
  updateUITranslations();
  
  // Update document lang attribute
  document.documentElement.lang = languageCode;
  
  // Update any language-specific CSS classes
  document.documentElement.className = document.documentElement.className
    .replace(/lang-\w+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  document.documentElement.classList.add(`lang-${languageCode}`);
  
  // Save language preference
  localStorage.setItem('preferred-language', languageCode);
}

// Initialize language switcher in header
export function initializeHeaderLanguageSwitcher() {
  const header = document.querySelector('header');
  if (!header) return;
  
  const existingSwitcher = header.querySelector('.language-switcher');
  if (existingSwitcher) {
    existingSwitcher.remove();
  }
  
  const switcher = createCompactLanguageSwitcher();
  switcher.className += ' ml-auto';
  
  header.appendChild(switcher);
}

// Initialize language switcher in sidebar
export function initializeSidebarLanguageSwitcher() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;
  
  const existingSwitcher = sidebar.querySelector('.language-switcher');
  if (existingSwitcher) {
    existingSwitcher.remove();
  }
  
  const switcher = createLanguageSwitcher();
  switcher.className += ' mt-4 p-2 border-t border-gray-200 dark:border-gray-700';
  
  sidebar.appendChild(switcher);
}

// Export for global use
window.createLanguageSwitcher = createLanguageSwitcher;
window.createCompactLanguageSwitcher = createCompactLanguageSwitcher;
window.createLanguageSwitcherWithFlags = createLanguageSwitcherWithFlags;
window.createLanguageSwitcherButtons = createLanguageSwitcherButtons;
window.updateUITranslations = updateUITranslations;
window.switchLanguage = switchLanguage; 