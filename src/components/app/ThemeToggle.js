// ThemeToggle.js
// Dark/Light mode toggle component

export function createThemeToggle(isDarkMode, onThemeToggle, t) {
  const themeToggle = document.createElement('button');
  themeToggle.id = 'themeToggle';
  themeToggle.className = 'p-2 hover:bg-green-700 rounded';
  themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
  themeToggle.title = isDarkMode ? t('theme.toggle.light') : t('theme.toggle.dark');
  
  themeToggle.addEventListener('click', onThemeToggle);
  
  return themeToggle;
}

export function updateThemeToggle(isDarkMode, t) {
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    themeToggle.title = isDarkMode ? t('theme.toggle.light') : t('theme.toggle.dark');
  }
}

export function toggleTheme(t) {
  document.documentElement.classList.toggle('dark');
  const isDarkMode = document.documentElement.classList.contains('dark');
  updateThemeToggle(isDarkMode, t);
  
  // Save theme preference to localStorage
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  
  return isDarkMode;
}

export function getInitialTheme() {
  // Check localStorage first
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme === 'dark';
  }
  
  // Check system preference
  return document.documentElement.classList.contains('dark') || 
         window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function initializeTheme() {
  const isDarkMode = getInitialTheme();
  
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  return isDarkMode;
}
