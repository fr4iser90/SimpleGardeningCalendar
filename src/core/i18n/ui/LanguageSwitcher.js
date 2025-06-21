// Language Switcher UI Component
// Provides language selection dropdown

import { t, setLanguage, getAvailableLanguages } from '../index.js';

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
} 