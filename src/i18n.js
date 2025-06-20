// Internationalization (i18n) System for SimpleGardeningCalendar
// Supports multiple languages with automatic detection and fallback

// Supported languages
export const SUPPORTED_LANGUAGES = {
  'de': 'Deutsch',
  'en': 'English', 
  'fr': 'Français',
  'es': 'Español',
  'it': 'Italiano'
};

// Translation keys and texts
export const TRANSLATIONS = {
  de: {
    // UI Elements
    'app.title': 'Einfacher Gartenkalender',
    'nav.calendar': 'Kalender',
    'nav.plants': 'Pflanzen',
    'nav.settings': 'Einstellungen',
    
    // Buttons
    'btn.add_event': 'Termin hinzufügen',
    'btn.add_planting': 'Pflanzung hinzufügen',
    'btn.import_template': 'Gartenplan importieren',
    'btn.save': 'Speichern',
    'btn.cancel': 'Abbrechen',
    'btn.delete': 'Löschen',
    'btn.edit': 'Bearbeiten',
    'btn.close': 'Schließen',
    
    // Template Import
    'template.modal.title': 'Gartenplan importieren',
    'template.modal.description': 'Wählen Sie einen vorgefertigten Gartenplan aus, um automatisch alle wichtigen Gartenarbeiten für das Jahr zu importieren.',
    'template.select.label': 'Gartenplan auswählen:',
    'template.select.placeholder': '-- Bitte wählen --',
    'template.year.label': 'Jahr für Import:',
    'template.year.current': 'Aktuelles Jahr',
    'template.year.next': 'Nächstes Jahr',
    'template.warning.title': 'Hinweis:',
    'template.warning.text': 'Der Import fügt alle Termine des Gartenplans zu Ihrem Kalender hinzu. Bereits vorhandene Termine werden nicht überschrieben.',
    'template.description.title': 'Beschreibung:',
    'template.task.count': 'Gartenarbeiten über das Jahr verteilt',
    'template.import.button': 'Gartenplan importieren',
    'template.import.loading': 'Importiere...',
    'template.import.success': 'Erfolgreich! {count} Gartenarbeiten aus "{name}" für {year} importiert.',
    'template.import.error': 'Fehler beim Importieren des Gartenplans. Bitte versuchen Sie es erneut.',
    'template.select.required': 'Bitte wählen Sie einen Gartenplan aus.',
    
    // Garden Categories
    'garden.ornamental': 'Ziergarten',
    'garden.vegetable_fruit': 'Obst- und Gemüsegarten',
    'garden.herb': 'Kräutergarten',
    'garden.balcony': 'Balkon & Terrasse',
    'garden.complete': 'Kompletter Garten',
    
    // Plant Categories
    'plant.category.vegetables': 'Gemüse',
    'plant.category.fruits': 'Obst',
    'plant.category.herbs': 'Kräuter',
    'plant.category.flowers': 'Blumen',
    'plant.category.trees': 'Bäume',
    
    // Growing Environments
    'environment.indoor': 'Innenbereich',
    'environment.outdoor': 'Außenbereich',
    'environment.greenhouse': 'Gewächshaus',
    
    // Seasonal Regions
    'region.temperate_north': 'Gemäßigt Nord',
    'region.temperate_south': 'Gemäßigt Süd',
    'region.tropical': 'Tropisch',
    'region.mediterranean': 'Mediterran',
    
    // Task Types
    'task.planting': 'Pflanzen',
    'task.watering': 'Gießen',
    'task.fertilizing': 'Düngen',
    'task.pruning': 'Schneiden',
    'task.harvesting': 'Ernten',
    'task.maintenance': 'Pflege',
    
    // Priority Levels
    'priority.high': 'Hoch',
    'priority.medium': 'Mittel',
    'priority.low': 'Niedrig',
    
    // Months
    'month.1': 'Januar',
    'month.2': 'Februar',
    'month.3': 'März',
    'month.4': 'April',
    'month.5': 'Mai',
    'month.6': 'Juni',
    'month.7': 'Juli',
    'month.8': 'August',
    'month.9': 'September',
    'month.10': 'Oktober',
    'month.11': 'November',
    'month.12': 'Dezember',
    
    // Settings
    'settings.language': 'Sprache',
    'settings.theme': 'Design',
    'settings.notifications': 'Benachrichtigungen',
    'settings.data': 'Daten',
    'settings.export': 'Daten exportieren',
    'settings.import': 'Daten importieren',
    
    // Common
    'common.loading': 'Lädt...',
    'common.error': 'Fehler',
    'common.success': 'Erfolgreich',
    'common.warning': 'Warnung',
    'common.info': 'Info'
  },
  
  en: {
    // UI Elements
    'app.title': 'Simple Gardening Calendar',
    'nav.calendar': 'Calendar',
    'nav.plants': 'Plants',
    'nav.settings': 'Settings',
    
    // Buttons
    'btn.add_event': 'Add Event',
    'btn.add_planting': 'Add Planting',
    'btn.import_template': 'Import Garden Plan',
    'btn.save': 'Save',
    'btn.cancel': 'Cancel',
    'btn.delete': 'Delete',
    'btn.edit': 'Edit',
    'btn.close': 'Close',
    
    // Template Import
    'template.modal.title': 'Import Garden Plan',
    'template.modal.description': 'Choose a pre-made garden plan to automatically import all important garden tasks for the year.',
    'template.select.label': 'Select Garden Plan:',
    'template.select.placeholder': '-- Please select --',
    'template.year.label': 'Year for Import:',
    'template.year.current': 'Current Year',
    'template.year.next': 'Next Year',
    'template.warning.title': 'Note:',
    'template.warning.text': 'The import will add all garden plan appointments to your calendar. Existing appointments will not be overwritten.',
    'template.description.title': 'Description:',
    'template.task.count': 'garden tasks throughout the year',
    'template.import.button': 'Import Garden Plan',
    'template.import.loading': 'Importing...',
    'template.import.success': 'Success! {count} garden tasks from "{name}" for {year} imported.',
    'template.import.error': 'Error importing garden plan. Please try again.',
    'template.select.required': 'Please select a garden plan.',
    
    // Garden Categories
    'garden.ornamental': 'Ornamental Garden',
    'garden.vegetable_fruit': 'Vegetable & Fruit Garden',
    'garden.herb': 'Herb Garden',
    'garden.balcony': 'Balcony & Terrace',
    'garden.complete': 'Complete Garden',
    
    // Plant Categories
    'plant.category.vegetables': 'Vegetables',
    'plant.category.fruits': 'Fruits',
    'plant.category.herbs': 'Herbs',
    'plant.category.flowers': 'Flowers',
    'plant.category.trees': 'Trees',
    
    // Growing Environments
    'environment.indoor': 'Indoor',
    'environment.outdoor': 'Outdoor',
    'environment.greenhouse': 'Greenhouse',
    
    // Seasonal Regions
    'region.temperate_north': 'Temperate North',
    'region.temperate_south': 'Temperate South',
    'region.tropical': 'Tropical',
    'region.mediterranean': 'Mediterranean',
    
    // Task Types
    'task.planting': 'Planting',
    'task.watering': 'Watering',
    'task.fertilizing': 'Fertilizing',
    'task.pruning': 'Pruning',
    'task.harvesting': 'Harvesting',
    'task.maintenance': 'Maintenance',
    
    // Priority Levels
    'priority.high': 'High',
    'priority.medium': 'Medium',
    'priority.low': 'Low',
    
    // Months
    'month.1': 'January',
    'month.2': 'February',
    'month.3': 'March',
    'month.4': 'April',
    'month.5': 'May',
    'month.6': 'June',
    'month.7': 'July',
    'month.8': 'August',
    'month.9': 'September',
    'month.10': 'October',
    'month.11': 'November',
    'month.12': 'December',
    
    // Settings
    'settings.language': 'Language',
    'settings.theme': 'Theme',
    'settings.notifications': 'Notifications',
    'settings.data': 'Data',
    'settings.export': 'Export Data',
    'settings.import': 'Import Data',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.warning': 'Warning',
    'common.info': 'Info'
  },
  
  fr: {
    // UI Elements
    'app.title': 'Calendrier de Jardinage Simple',
    'nav.calendar': 'Calendrier',
    'nav.plants': 'Plantes',
    'nav.settings': 'Paramètres',
    
    // Buttons
    'btn.add_event': 'Ajouter Événement',
    'btn.add_planting': 'Ajouter Plantation',
    'btn.import_template': 'Importer Plan de Jardin',
    'btn.save': 'Sauvegarder',
    'btn.cancel': 'Annuler',
    'btn.delete': 'Supprimer',
    'btn.edit': 'Modifier',
    'btn.close': 'Fermer',
    
    // Template Import
    'template.modal.title': 'Importer Plan de Jardin',
    'template.modal.description': 'Choisissez un plan de jardin préfabriqué pour importer automatiquement toutes les tâches importantes de jardinage pour l\'année.',
    'template.select.label': 'Sélectionner Plan de Jardin:',
    'template.select.placeholder': '-- Veuillez sélectionner --',
    'template.year.label': 'Année pour l\'Import:',
    'template.year.current': 'Année Actuelle',
    'template.year.next': 'Année Prochaine',
    'template.warning.title': 'Note:',
    'template.warning.text': 'L\'import ajoutera tous les rendez-vous du plan de jardin à votre calendrier. Les rendez-vous existants ne seront pas écrasés.',
    'template.description.title': 'Description:',
    'template.task.count': 'tâches de jardinage tout au long de l\'année',
    'template.import.button': 'Importer Plan de Jardin',
    'template.import.loading': 'Importation...',
    'template.import.success': 'Succès! {count} tâches de jardinage de "{name}" pour {year} importées.',
    'template.import.error': 'Erreur lors de l\'importation du plan de jardin. Veuillez réessayer.',
    'template.select.required': 'Veuillez sélectionner un plan de jardin.',
    
    // Garden Categories
    'garden.ornamental': 'Jardin d\'Ornement',
    'garden.vegetable_fruit': 'Jardin Potager & Fruitier',
    'garden.herb': 'Jardin d\'Herbes',
    'garden.balcony': 'Balcon & Terrasse',
    'garden.complete': 'Jardin Complet',
    
    // Plant Categories
    'plant.category.vegetables': 'Légumes',
    'plant.category.fruits': 'Fruits',
    'plant.category.herbs': 'Herbes',
    'plant.category.flowers': 'Fleurs',
    'plant.category.trees': 'Arbres',
    
    // Growing Environments
    'environment.indoor': 'Intérieur',
    'environment.outdoor': 'Extérieur',
    'environment.greenhouse': 'Serre',
    
    // Seasonal Regions
    'region.temperate_north': 'Tempéré Nord',
    'region.temperate_south': 'Tempéré Sud',
    'region.tropical': 'Tropical',
    'region.mediterranean': 'Méditerranéen',
    
    // Task Types
    'task.planting': 'Plantation',
    'task.watering': 'Arrosage',
    'task.fertilizing': 'Fertilisation',
    'task.pruning': 'Taille',
    'task.harvesting': 'Récolte',
    'task.maintenance': 'Entretien',
    
    // Priority Levels
    'priority.high': 'Élevé',
    'priority.medium': 'Moyen',
    'priority.low': 'Faible',
    
    // Months
    'month.1': 'Janvier',
    'month.2': 'Février',
    'month.3': 'Mars',
    'month.4': 'Avril',
    'month.5': 'Mai',
    'month.6': 'Juin',
    'month.7': 'Juillet',
    'month.8': 'Août',
    'month.9': 'Septembre',
    'month.10': 'Octobre',
    'month.11': 'Novembre',
    'month.12': 'Décembre',
    
    // Settings
    'settings.language': 'Langue',
    'settings.theme': 'Thème',
    'settings.notifications': 'Notifications',
    'settings.data': 'Données',
    'settings.export': 'Exporter Données',
    'settings.import': 'Importer Données',
    
    // Common
    'common.loading': 'Chargement...',
    'common.error': 'Erreur',
    'common.success': 'Succès',
    'common.warning': 'Avertissement',
    'common.info': 'Info'
  },
  
  es: {
    // UI Elements
    'app.title': 'Calendario de Jardinería Simple',
    'nav.calendar': 'Calendario',
    'nav.plants': 'Plantas',
    'nav.settings': 'Configuración',
    
    // Buttons
    'btn.add_event': 'Añadir Evento',
    'btn.add_planting': 'Añadir Plantación',
    'btn.import_template': 'Importar Plan de Jardín',
    'btn.save': 'Guardar',
    'btn.cancel': 'Cancelar',
    'btn.delete': 'Eliminar',
    'btn.edit': 'Editar',
    'btn.close': 'Cerrar',
    
    // Template Import
    'template.modal.title': 'Importar Plan de Jardín',
    'template.modal.description': 'Elija un plan de jardín prefabricado para importar automáticamente todas las tareas importantes de jardinería para el año.',
    'template.select.label': 'Seleccionar Plan de Jardín:',
    'template.select.placeholder': '-- Por favor seleccione --',
    'template.year.label': 'Año para Importación:',
    'template.year.current': 'Año Actual',
    'template.year.next': 'Año Próximo',
    'template.warning.title': 'Nota:',
    'template.warning.text': 'La importación añadirá todas las citas del plan de jardín a su calendario. Las citas existentes no serán sobrescritas.',
    'template.description.title': 'Descripción:',
    'template.task.count': 'tareas de jardinería a lo largo del año',
    'template.import.button': 'Importar Plan de Jardín',
    'template.import.loading': 'Importando...',
    'template.import.success': '¡Éxito! {count} tareas de jardinería de "{name}" para {year} importadas.',
    'template.import.error': 'Error al importar el plan de jardín. Por favor inténtelo de nuevo.',
    'template.select.required': 'Por favor seleccione un plan de jardín.',
    
    // Garden Categories
    'garden.ornamental': 'Jardín Ornamental',
    'garden.vegetable_fruit': 'Huerto & Frutales',
    'garden.herb': 'Jardín de Hierbas',
    'garden.balcony': 'Balcón & Terraza',
    'garden.complete': 'Jardín Completo',
    
    // Plant Categories
    'plant.category.vegetables': 'Verduras',
    'plant.category.fruits': 'Frutas',
    'plant.category.herbs': 'Hierbas',
    'plant.category.flowers': 'Flores',
    'plant.category.trees': 'Árboles',
    
    // Growing Environments
    'environment.indoor': 'Interior',
    'environment.outdoor': 'Exterior',
    'environment.greenhouse': 'Invernadero',
    
    // Seasonal Regions
    'region.temperate_north': 'Templado Norte',
    'region.temperate_south': 'Templado Sur',
    'region.tropical': 'Tropical',
    'region.mediterranean': 'Mediterráneo',
    
    // Task Types
    'task.planting': 'Plantación',
    'task.watering': 'Riego',
    'task.fertilizing': 'Fertilización',
    'task.pruning': 'Poda',
    'task.harvesting': 'Cosecha',
    'task.maintenance': 'Mantenimiento',
    
    // Priority Levels
    'priority.high': 'Alto',
    'priority.medium': 'Medio',
    'priority.low': 'Bajo',
    
    // Months
    'month.1': 'Enero',
    'month.2': 'Febrero',
    'month.3': 'Marzo',
    'month.4': 'Abril',
    'month.5': 'Mayo',
    'month.6': 'Junio',
    'month.7': 'Julio',
    'month.8': 'Agosto',
    'month.9': 'Septiembre',
    'month.10': 'Octubre',
    'month.11': 'Noviembre',
    'month.12': 'Diciembre',
    
    // Settings
    'settings.language': 'Idioma',
    'settings.theme': 'Tema',
    'settings.notifications': 'Notificaciones',
    'settings.data': 'Datos',
    'settings.export': 'Exportar Datos',
    'settings.import': 'Importar Datos',
    
    // Common
    'common.loading': 'Cargando...',
    'common.error': 'Error',
    'common.success': 'Éxito',
    'common.warning': 'Advertencia',
    'common.info': 'Información'
  },
  
  it: {
    // UI Elements
    'app.title': 'Calendario di Giardinaggio Semplice',
    'nav.calendar': 'Calendario',
    'nav.plants': 'Piante',
    'nav.settings': 'Impostazioni',
    
    // Buttons
    'btn.add_event': 'Aggiungi Evento',
    'btn.add_planting': 'Aggiungi Piantumazione',
    'btn.import_template': 'Importa Piano Giardino',
    'btn.save': 'Salva',
    'btn.cancel': 'Annulla',
    'btn.delete': 'Elimina',
    'btn.edit': 'Modifica',
    'btn.close': 'Chiudi',
    
    // Template Import
    'template.modal.title': 'Importa Piano Giardino',
    'template.modal.description': 'Scegli un piano giardino prefabbricato per importare automaticamente tutti i compiti di giardinaggio importanti per l\'anno.',
    'template.select.label': 'Seleziona Piano Giardino:',
    'template.select.placeholder': '-- Prego selezionare --',
    'template.year.label': 'Anno per Importazione:',
    'template.year.current': 'Anno Corrente',
    'template.year.next': 'Anno Prossimo',
    'template.warning.title': 'Nota:',
    'template.warning.text': 'L\'importazione aggiungerà tutti gli appuntamenti del piano giardino al vostro calendario. Gli appuntamenti esistenti non saranno sovrascritti.',
    'template.description.title': 'Descrizione:',
    'template.task.count': 'compiti di giardinaggio durante l\'anno',
    'template.import.button': 'Importa Piano Giardino',
    'template.import.loading': 'Importando...',
    'template.import.success': 'Successo! {count} compiti di giardinaggio da "{name}" per {year} importati.',
    'template.import.error': 'Errore nell\'importazione del piano giardino. Prego riprovare.',
    'template.select.required': 'Prego selezionare un piano giardino.',
    
    // Garden Categories
    'garden.ornamental': 'Giardino Ornamentale',
    'garden.vegetable_fruit': 'Orto & Frutteto',
    'garden.herb': 'Giardino delle Erbe',
    'garden.balcony': 'Balcone & Terrazza',
    'garden.complete': 'Giardino Completo',
    
    // Plant Categories
    'plant.category.vegetables': 'Verdure',
    'plant.category.fruits': 'Frutti',
    'plant.category.herbs': 'Erbe',
    'plant.category.flowers': 'Fiori',
    'plant.category.trees': 'Alberi',
    
    // Growing Environments
    'environment.indoor': 'Interno',
    'environment.outdoor': 'Esterno',
    'environment.greenhouse': 'Serra',
    
    // Seasonal Regions
    'region.temperate_north': 'Temperato Nord',
    'region.temperate_south': 'Temperato Sud',
    'region.tropical': 'Tropicale',
    'region.mediterranean': 'Mediterraneo',
    
    // Task Types
    'task.planting': 'Piantumazione',
    'task.watering': 'Innaffiatura',
    'task.fertilizing': 'Fertilizzazione',
    'task.pruning': 'Potatura',
    'task.harvesting': 'Raccolta',
    'task.maintenance': 'Manutenzione',
    
    // Priority Levels
    'priority.high': 'Alto',
    'priority.medium': 'Medio',
    'priority.low': 'Basso',
    
    // Months
    'month.1': 'Gennaio',
    'month.2': 'Febbraio',
    'month.3': 'Marzo',
    'month.4': 'Aprile',
    'month.5': 'Maggio',
    'month.6': 'Giugno',
    'month.7': 'Luglio',
    'month.8': 'Agosto',
    'month.9': 'Settembre',
    'month.10': 'Ottobre',
    'month.11': 'Novembre',
    'month.12': 'Dicembre',
    
    // Settings
    'settings.language': 'Lingua',
    'settings.theme': 'Tema',
    'settings.notifications': 'Notifiche',
    'settings.data': 'Dati',
    'settings.export': 'Esporta Dati',
    'settings.import': 'Importa Dati',
    
    // Common
    'common.loading': 'Caricamento...',
    'common.error': 'Errore',
    'common.success': 'Successo',
    'common.warning': 'Avvertimento',
    'common.info': 'Informazioni'
  }
};

// Current language state
let currentLanguage = 'en'; // Default to English

// Initialize i18n system
export function initI18n() {
  // Try to detect language from browser
  const browserLang = navigator.language.split('-')[0];
  const savedLang = localStorage.getItem('garden-calendar-language');
  
  // Priority: saved > browser > default
  if (savedLang && SUPPORTED_LANGUAGES[savedLang]) {
    currentLanguage = savedLang;
  } else if (SUPPORTED_LANGUAGES[browserLang]) {
    currentLanguage = browserLang;
  } else {
    currentLanguage = 'en'; // Default fallback to English
  }
  
  console.log(`🌍 Language initialized: ${currentLanguage} (${SUPPORTED_LANGUAGES[currentLanguage]})`);
}

// Get current language
export function getCurrentLanguage() {
  return currentLanguage;
}

// Set language
export function setLanguage(lang) {
  if (!SUPPORTED_LANGUAGES[lang]) {
    console.warn(`Language ${lang} not supported. Available: ${Object.keys(SUPPORTED_LANGUAGES).join(', ')}`);
    return false;
  }
  
  currentLanguage = lang;
  localStorage.setItem('garden-calendar-language', lang);
  
  // Trigger UI update event
  document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
  
  return true;
}

// Translate function with parameter substitution
export function t(key, params = {}) {
  const translation = TRANSLATIONS[currentLanguage]?.[key] || TRANSLATIONS['en'][key] || key;
  
  // Replace parameters like {count}, {name}, {year}
  return translation.replace(/\{(\w+)\}/g, (match, param) => {
    return params[param] !== undefined ? params[param] : match;
  });
}

// Translate with fallback
export function tWithFallback(key, fallback = null) {
  return TRANSLATIONS[currentLanguage]?.[key] || fallback || key;
}

// Get all available languages for UI
export function getAvailableLanguages() {
  return Object.entries(SUPPORTED_LANGUAGES).map(([code, name]) => ({
    code,
    name,
    isActive: code === currentLanguage
  }));
}

// Add language switcher to UI
export function createLanguageSwitcher() {
  const switcher = document.createElement('div');
  switcher.className = 'language-switcher flex items-center space-x-2';
  
  const label = document.createElement('span');
  label.textContent = t('settings.language') + ':';
  label.className = 'text-sm font-medium text-gray-700 dark:text-gray-300';
  
  const select = document.createElement('select');
  select.className = 'px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm';
  
  // Add options
  Object.entries(SUPPORTED_LANGUAGES).forEach(([code, name]) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = name;
    option.selected = code === currentLanguage;
    select.appendChild(option);
  });
  
  // Add change handler
  select.addEventListener('change', (e) => {
    setLanguage(e.target.value);
    // Reload page to apply translations
    window.location.reload();
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

// Initialize on module load
initI18n(); 