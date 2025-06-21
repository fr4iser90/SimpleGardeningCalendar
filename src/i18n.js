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
    'ui.quick_actions': 'Schnellaktionen',
    'ui.plant_categories': 'Pflanzenkategorien',
    'ui.upcoming_tasks': 'Anstehende Aufgaben',
    'ui.no_upcoming_tasks': 'Keine anstehenden Aufgaben',
    'ui.weather': 'Wetter',
    'ui.weather_info': 'Lokale Wetterinformationen werden hier angezeigt',
    'ui.built_with': 'Erstellt mit',
    'ui.language': 'Sprache:',
    
    // Buttons
    'btn.add_event': 'Termin hinzufügen',
    'btn.add_planting': 'Pflanzung hinzufügen',
    'btn.import_template': 'Gartenplan importieren',
    'btn.my_plants': 'Meine Pflanzen',
    'btn.save': 'Speichern',
    'btn.cancel': 'Abbrechen',
    'btn.delete': 'Löschen',
    'btn.edit': 'Bearbeiten',
    'btn.close': 'Schließen',
    'btn.view_details': 'Details anzeigen',
    'btn.add_note': 'Notiz hinzufügen',
    
    // Add Event Modal
    'modal.add_event.title': 'Gartenereignis hinzufügen',
    'modal.event_type.label': 'Ereignistyp',
    'modal.event_type.custom': 'Benutzerdefiniertes Ereignis',
    'modal.event_type.planting': 'Pflanzung beginnen',
    'modal.title.label': 'Titel',
    'modal.type.label': 'Typ',
    'modal.environment.label': 'Anbauumgebung',
    'modal.region.label': 'Klimaregion',
    'modal.plant_category.label': 'Pflanzenkategorie',
    'modal.plant_category.all': 'Alle Kategorien',
    'modal.plant_type.label': 'Pflanzentyp',
    'modal.custom_name.label': 'Benutzerdefinierter Name (Optional)',
    'modal.custom_name.help': 'Geben Sie Ihrer Pflanze einen eindeutigen Namen für einfachere Verfolgung',
    'modal.location.label': 'Standort',
    'modal.date.label': 'Datum',
    'modal.description.label': 'Beschreibung',
    'modal.phase_duration.title': '⏱️ Phasendauer (Optional)',
    'modal.phase_duration.help': 'Passen Sie die Phasendauern an, wenn Ihre Sorte von der Standardzeit abweicht',
    'modal.phase_duration.days': 'Tage',
    'modal.phase_duration.default': 'Standard:',
    'modal.phase_duration.tip': '💡 Tipp: Cannabis-Blüte kann je nach Sorte 6-12 Wochen variieren',
    'modal.reminders.title': '🗓️ Automatische Erinnerungen',
    'modal.reminders.watering': '💧 Gießerinnerungen',
    'modal.reminders.watering_interval': 'Intervall:',
    'modal.reminders.fertilizing': '🌿 Dünger-Erinnerungen',
    'modal.reminders.fertilizing_interval': 'Intervall:',
    'modal.reminders.fertilizing_delay': 'Beginnen nach:',
    'modal.reminders.phase_transitions': '📋 Phasenübergang-Erinnerungen',
    'modal.reminders.weekly_checks': '🔍 Wöchentliche Kontrollen',
    'modal.reminders.harvest': '🌾 Ernte-Erinnerung',
    'modal.reminders.google_sync': '🗓️ Mit Google Kalender synchronisieren',
    'modal.interval.daily': 'Täglich',
    'modal.interval.every_2_days': 'Alle 2 Tage',
    'modal.interval.every_3_days': 'Alle 3 Tage',
    'modal.interval.every_4_days': 'Alle 4 Tage',
    'modal.interval.weekly': 'Wöchentlich',
    'modal.interval.every_2_weeks': 'Alle 2 Wochen',
    'modal.interval.every_3_weeks': 'Alle 3 Wochen',
    'modal.interval.monthly': 'Monatlich',
    'modal.interval.immediately': 'Sofort',
    'modal.interval.1_week': '1 Woche',
    'modal.interval.2_weeks': '2 Wochen',
    
    // Plant Info Display
    'plant.info.growing_cycle': 'Wachstumszyklus:',
    'plant.info.days': 'Tage',
    'plant.info.weeks': 'Wochen',
    'plant.info.phases': 'Phasen:',
    'plant.info.temperature': 'Temperatur:',
    'plant.info.light': 'Licht:',
    'plant.info.legal_notice': '⚠️ Rechtlicher Hinweis:',
    'plant.info.growing': 'Anbau',
    
    // Seasonal Timing
    'timing.good': '✅ Gute Zeit!',
    'timing.notice': '⚠️ Zeithinweis',
    
    // Location Placeholders
    'location.indoor.placeholder': 'z.B. Growzelt, Growraum, Fensterbank',
    'location.outdoor.placeholder': 'z.B. Garten, Hochbeet, Feld',
    'location.greenhouse.placeholder': 'z.B. Gewächshaus Bereich A, Folientunnel',
    'location.default.indoor': 'Innengarten',
    'location.default.outdoor': 'Außengarten',
    'location.default.greenhouse': 'Gewächshaus',
    
    // Custom Name Examples
    'custom_name.cannabis': 'z.B. "Meine {name} #1"',
    'custom_name.vegetables': 'z.B. "Küchengarten {name}"',
    'custom_name.herbs': 'z.B. "Fensterbank {name}"',
    'custom_name.fruits': 'z.B. "Garten {name}"',
    
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
    'plant.category.cannabis': 'Cannabis',
    'plant.category.fruit_trees': 'Obstbäume',
    
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
    
    // Plant Phases
    'phase.germination': 'Keimung',
    'phase.seedling': 'Sämling',
    'phase.vegetative': 'Vegetativ',
    'phase.preflower': 'Vorblüte',
    'phase.flowering': 'Blüte',
    'phase.harvest': 'Ernte',
    
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
    'common.info': 'Info',
    
    // My Plants Modal
    'plants.my_active_plants': 'Meine aktiven Pflanzen',
    'plants.no_active': 'Keine aktiven Pflanzen gefunden',
    'plants.plant_type': 'Pflanzentyp',
    'plants.location': 'Standort',
    'plants.started': 'Gestartet',
    'plants.current_phase': 'Aktuelle Phase',
    'plants.expected_completion': 'Erwarteter Abschluss',
    
    // Error Messages
    'error.title': 'Fehler',
    'error.loading_plants': 'Fehler beim Laden der Pflanzen. Bitte versuchen Sie es erneut.'
  },
  
  en: {
    // UI Elements
    'app.title': 'Simple Gardening Calendar',
    'nav.calendar': 'Calendar',
    'nav.plants': 'Plants',
    'nav.settings': 'Settings',
    'ui.quick_actions': 'Quick Actions',
    'ui.plant_categories': 'Plant Categories',
    'ui.upcoming_tasks': 'Upcoming Tasks',
    'ui.no_upcoming_tasks': 'No upcoming tasks',
    'ui.weather': 'Weather',
    'ui.weather_info': 'Local weather information will be displayed here',
    'ui.built_with': 'Built with',
    'ui.language': 'Language:',
    
    // Buttons
    'btn.add_event': 'Add Event',
    'btn.add_planting': 'Add Planting',
    'btn.import_template': 'Import Garden Plan',
    'btn.my_plants': 'My Plants',
    'btn.save': 'Save',
    'btn.cancel': 'Cancel',
    'btn.delete': 'Delete',
    'btn.edit': 'Edit',
    'btn.close': 'Close',
    'btn.view_details': 'View Details',
    'btn.add_note': 'Add Note',
    
    // Add Event Modal
    'modal.add_event.title': 'Add Garden Event',
    'modal.event_type.label': 'Event Type',
    'modal.event_type.custom': 'Custom Event',
    'modal.event_type.planting': 'Start Planting',
    'modal.title.label': 'Title',
    'modal.type.label': 'Type',
    'modal.environment.label': 'Growing Environment',
    'modal.region.label': 'Climate Region',
    'modal.plant_category.label': 'Plant Category',
    'modal.plant_category.all': 'All Categories',
    'modal.plant_type.label': 'Plant Type',
    'modal.custom_name.label': 'Custom Name (Optional)',
    'modal.custom_name.help': 'Give your plant a unique name for easier tracking',
    'modal.location.label': 'Location',
    'modal.date.label': 'Date',
    'modal.description.label': 'Description',
    'modal.phase_duration.title': '⏱️ Phase Duration (Optional)',
    'modal.phase_duration.help': 'Adjust phase durations if your variety differs from standard timing',
    'modal.phase_duration.days': 'days',
    'modal.phase_duration.default': 'default:',
    'modal.phase_duration.tip': '💡 Tip: Cannabis flowering can vary from 6-12 weeks depending on strain',
    'modal.reminders.title': '🗓️ Automatic Reminders',
    'modal.reminders.watering': '💧 Watering reminders',
    'modal.reminders.watering_interval': 'Interval:',
    'modal.reminders.fertilizing': '🌿 Fertilizing reminders',
    'modal.reminders.fertilizing_interval': 'Interval:',
    'modal.reminders.fertilizing_delay': 'Start after:',
    'modal.reminders.phase_transitions': '📋 Phase transition reminders',
    'modal.reminders.weekly_checks': '🔍 Weekly check-ups',
    'modal.reminders.harvest': '🌾 Harvest reminder',
    'modal.reminders.google_sync': '🗓️ Sync to Google Calendar',
    'modal.interval.daily': 'Daily',
    'modal.interval.every_2_days': 'Every 2 days',
    'modal.interval.every_3_days': 'Every 3 days',
    'modal.interval.every_4_days': 'Every 4 days',
    'modal.interval.weekly': 'Weekly',
    'modal.interval.every_2_weeks': 'Every 2 weeks',
    'modal.interval.every_3_weeks': 'Every 3 weeks',
    'modal.interval.monthly': 'Monthly',
    'modal.interval.immediately': 'Immediately',
    'modal.interval.1_week': '1 week',
    'modal.interval.2_weeks': '2 weeks',
    
    // Plant Info Display
    'plant.info.growing_cycle': 'Growing cycle:',
    'plant.info.days': 'days',
    'plant.info.weeks': 'weeks',
    'plant.info.phases': 'Phases:',
    'plant.info.temperature': 'Temperature:',
    'plant.info.light': 'Light:',
    'plant.info.legal_notice': '⚠️ Legal Notice:',
    'plant.info.growing': 'Growing',
    
    // Seasonal Timing
    'timing.good': '✅ Good timing!',
    'timing.notice': '⚠️ Timing Notice',
    
    // Location Placeholders
    'location.indoor.placeholder': 'e.g., Indoor Tent, Grow Room, Windowsill',
    'location.outdoor.placeholder': 'e.g., Backyard Garden, Raised Bed, Field',
    'location.greenhouse.placeholder': 'e.g., Greenhouse Section A, Hoophouse',
    'location.default.indoor': 'Indoor Garden',
    'location.default.outdoor': 'Outdoor Garden',
    'location.default.greenhouse': 'Greenhouse',
    
    // Custom Name Examples
    'custom_name.cannabis': 'e.g., "My {name} #1"',
    'custom_name.vegetables': 'e.g., "Kitchen Garden {name}"',
    'custom_name.herbs': 'e.g., "Windowsill {name}"',
    'custom_name.fruits': 'e.g., "Backyard {name}"',
    
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
    'plant.category.cannabis': 'Cannabis',
    'plant.category.fruit_trees': 'Fruit Trees',
    
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
    
    // Plant Phases
    'phase.germination': 'Germination',
    'phase.seedling': 'Seedling',
    'phase.vegetative': 'Vegetative',
    'phase.preflower': 'Preflower',
    'phase.flowering': 'Flowering',
    'phase.harvest': 'Harvest',
    
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
    'common.info': 'Info',
    
    // My Plants Modal
    'plants.my_active_plants': 'My Active Plants',
    'plants.no_active': 'No active plants found',
    'plants.plant_type': 'Plant Type',
    'plants.location': 'Location',
    'plants.started': 'Started',
    'plants.current_phase': 'Current Phase',
    'plants.expected_completion': 'Expected Completion',
    
    // Error Messages
    'error.title': 'Error',
    'error.loading_plants': 'Error loading plants. Please try again.'
  },
  
  fr: {
    // UI Elements
    'app.title': 'Calendrier de Jardinage Simple',
    'nav.calendar': 'Calendrier',
    'nav.plants': 'Plantes',
    'nav.settings': 'Paramètres',
    'ui.quick_actions': 'Actions Rapides',
    'ui.plant_categories': 'Catégories de Plantes',
    'ui.upcoming_tasks': 'Tâches à Réaliser',
    'ui.no_upcoming_tasks': 'Aucune tâche à réaliser',
    'ui.weather': 'Météo',
    'ui.weather_info': 'Les informations météorologiques locales seront affichées ici',
    'ui.built_with': 'Construit avec',
    'ui.language': 'Langue:',
    
    // Buttons
    'btn.add_event': 'Ajouter Événement',
    'btn.add_planting': 'Ajouter Plantation',
    'btn.import_template': 'Importer Plan de Jardin',
    'btn.my_plants': 'Mes Plantes',
    'btn.save': 'Enregistrer',
    'btn.cancel': 'Annuler',
    'btn.delete': 'Supprimer',
    'btn.edit': 'Modifier',
    'btn.close': 'Fermer',
    'btn.view_details': 'Voir les Détails',
    'btn.add_note': 'Ajouter une Note',
    
    // Add Event Modal
    'modal.add_event.title': 'Ajouter Événement de Jardin',
    'modal.event_type.label': 'Type d\'Événement',
    'modal.event_type.custom': 'Événement Personnalisé',
    'modal.event_type.planting': 'Commencer Plantation',
    'modal.title.label': 'Titre',
    'modal.type.label': 'Type',
    'modal.environment.label': 'Environnement de Culture',
    'modal.region.label': 'Région Climatique',
    'modal.plant_category.label': 'Catégorie de Plante',
    'modal.plant_category.all': 'Toutes Catégories',
    'modal.plant_type.label': 'Type de Plante',
    'modal.custom_name.label': 'Nom Personnalisé (Optionnel)',
    'modal.custom_name.help': 'Donnez un nom unique à votre plante pour faciliter le suivi',
    'modal.location.label': 'Emplacement',
    'modal.date.label': 'Date',
    'modal.description.label': 'Description',
    'modal.phase_duration.title': '⏱️ Durée des Phases (Optionnel)',
    'modal.phase_duration.help': 'Ajustez les durées des phases si votre variété diffère du timing standard',
    'modal.phase_duration.days': 'jours',
    'modal.phase_duration.default': 'défaut:',
    'modal.phase_duration.tip': '💡 Conseil: La floraison du cannabis peut varier de 6-12 semaines selon la variété',
    'modal.reminders.title': '🗓️ Rappels Automatiques',
    'modal.reminders.watering': '💧 Rappels d\'arrosage',
    'modal.reminders.watering_interval': 'Intervalle:',
    'modal.reminders.fertilizing': '🌿 Rappels de fertilisation',
    'modal.reminders.fertilizing_interval': 'Intervalle:',
    'modal.reminders.fertilizing_delay': 'Commencer après:',
    'modal.reminders.phase_transitions': '📋 Rappels de transition de phase',
    'modal.reminders.weekly_checks': '🔍 Contrôles hebdomadaires',
    'modal.reminders.harvest': '🌾 Rappel de récolte',
    'modal.reminders.google_sync': '🗓️ Synchroniser avec Google Calendar',
    'modal.interval.daily': 'Quotidien',
    'modal.interval.every_2_days': 'Tous les 2 jours',
    'modal.interval.every_3_days': 'Tous les 3 jours',
    'modal.interval.every_4_days': 'Tous les 4 jours',
    'modal.interval.weekly': 'Hebdomadaire',
    'modal.interval.every_2_weeks': 'Toutes les 2 semaines',
    'modal.interval.every_3_weeks': 'Toutes les 3 semaines',
    'modal.interval.monthly': 'Mensuel',
    'modal.interval.immediately': 'Immédiatement',
    'modal.interval.1_week': '1 semaine',
    'modal.interval.2_weeks': '2 semaines',
    
    // Plant Info Display
    'plant.info.growing_cycle': 'Cycle de croissance:',
    'plant.info.days': 'jours',
    'plant.info.weeks': 'semaines',
    'plant.info.phases': 'Phases:',
    'plant.info.temperature': 'Température:',
    'plant.info.light': 'Lumière:',
    'plant.info.legal_notice': '⚠️ Avis Légal:',
    'plant.info.growing': 'Culture',
    
    // Seasonal Timing
    'timing.good': '✅ Bon timing!',
    'timing.notice': '⚠️ Avis de Timing',
    
    // Location Placeholders
    'location.indoor.placeholder': 'ex: Tente de Culture, Salle de Culture, Rebord de Fenêtre',
    'location.outdoor.placeholder': 'ex: Jardin, Bac Surélevé, Champ',
    'location.greenhouse.placeholder': 'ex: Section Serre A, Tunnel',
    'location.default.indoor': 'Jardin Intérieur',
    'location.default.outdoor': 'Jardin Extérieur',
    'location.default.greenhouse': 'Serre',
    
    // Custom Name Examples
    'custom_name.cannabis': 'ex: "Mon {name} #1"',
    'custom_name.vegetables': 'ex: "Jardin Cuisine {name}"',
    'custom_name.herbs': 'ex: "Rebord Fenêtre {name}"',
    'custom_name.fruits': 'ex: "Jardin {name}"',
    
    // Template Import
    'template.modal.title': 'Importer Plan de Jardin',
    'template.modal.description': 'Choisissez un plan de jardin préfabriqué pour importer automatiquement toutes les tâches importantes de jardinage pour l\'année.',
    'template.select.label': 'Sélectionner Plan de Jardin:',
    'template.select.placeholder': '-- Veuillez sélectionner --',
    'template.year.label': 'Année pour Import:',
    'template.year.current': 'Année Actuelle',
    'template.year.next': 'Année Prochaine',
    'template.warning.title': 'Note:',
    'template.warning.text': 'L\'import ajoutera tous les rendez-vous du plan de jardin à votre calendrier. Les rendez-vous existants ne seront pas écrasés.',
    'template.description.title': 'Description:',
    'template.task.count': 'tâches de jardinage tout au long de l\'année',
    'template.import.button': 'Importer Plan de Jardin',
    'template.import.loading': 'Import en cours...',
    'template.import.success': 'Succès! {count} tâches de jardinage de "{name}" pour {year} importées.',
    'template.import.error': 'Erreur lors de l\'import du plan de jardin. Veuillez réessayer.',
    'template.select.required': 'Veuillez sélectionner un plan de jardin.',
    
    // Garden Categories
    'garden.ornamental': 'Jardin d\'Ornement',
    'garden.vegetable_fruit': 'Jardin Légumes & Fruits',
    'garden.herb': 'Jardin d\'Herbes',
    'garden.balcony': 'Balcon & Terrasse',
    'garden.complete': 'Jardin Complet',
    
    // Plant Categories
    'plant.category.vegetables': 'Légumes',
    'plant.category.fruits': 'Fruits',
    'plant.category.herbs': 'Herbes',
    'plant.category.flowers': 'Fleurs',
    'plant.category.trees': 'Arbres',
    'plant.category.cannabis': 'Cannabis',
    'plant.category.fruit_trees': 'Arbres Fruitiers',
    
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
    
    // Plant Phases
    'phase.germination': 'Germination',
    'phase.seedling': 'Plantule',
    'phase.vegetative': 'Végétative',
    'phase.preflower': 'Pré-floraison',
    'phase.flowering': 'Floraison',
    'phase.harvest': 'Récolte',
    
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
    'common.info': 'Info',
    
    // My Plants Modal
    'plants.my_active_plants': 'Mes Plantes Actives',
    'plants.no_active': 'Aucune plante active trouvée',
    'plants.plant_type': 'Type de Plante',
    'plants.location': 'Emplacement',
    'plants.started': 'Démarré',
    'plants.current_phase': 'Phase Actuelle',
    'plants.expected_completion': 'Terminaison Prévue',
    
    // Error Messages
    'error.title': 'Erreur',
    'error.loading_plants': 'Erreur lors du chargement des plantes. Veuillez réessayer.'
  },
  
  es: {
    // UI Elements
    'app.title': 'Calendario de Jardinería Simple',
    'nav.calendar': 'Calendario',
    'nav.plants': 'Plantas',
    'nav.settings': 'Configuración',
    'ui.quick_actions': 'Acciones Rápidas',
    'ui.plant_categories': 'Categorías de Plantas',
    'ui.upcoming_tasks': 'Tareas Pendientes',
    'ui.no_upcoming_tasks': 'No hay tareas pendientes',
    'ui.weather': 'Clima',
    'ui.weather_info': 'Se mostrarán las informaciones meteorológicas locales aquí',
    'ui.built_with': 'Construido con',
    'ui.language': 'Idioma:',
    
    // Buttons
    'btn.add_event': 'Agregar Evento',
    'btn.add_planting': 'Agregar Plantación',
    'btn.import_template': 'Importar Plan de Jardín',
    'btn.my_plants': 'Mis Plantas',
    'btn.save': 'Guardar',
    'btn.cancel': 'Cancelar',
    'btn.delete': 'Eliminar',
    'btn.edit': 'Editar',
    'btn.close': 'Cerrar',
    'btn.view_details': 'Ver Detalles',
    'btn.add_note': 'Agregar Nota',
    
    // Add Event Modal
    'modal.add_event.title': 'Agregar Evento de Jardín',
    'modal.event_type.label': 'Tipo de Evento',
    'modal.event_type.custom': 'Evento Personalizado',
    'modal.event_type.planting': 'Comenzar Plantación',
    'modal.title.label': 'Título',
    'modal.type.label': 'Tipo',
    'modal.environment.label': 'Ambiente de Cultivo',
    'modal.region.label': 'Región Climática',
    'modal.plant_category.label': 'Categoría de Planta',
    'modal.plant_category.all': 'Todas las Categorías',
    'modal.plant_type.label': 'Tipo de Planta',
    'modal.custom_name.label': 'Nombre Personalizado (Opcional)',
    'modal.custom_name.help': 'Dale a tu planta un nombre único para facilitar el seguimiento',
    'modal.location.label': 'Ubicación',
    'modal.date.label': 'Fecha',
    'modal.description.label': 'Descripción',
    'modal.phase_duration.title': '⏱️ Duración de Fases (Opcional)',
    'modal.phase_duration.help': 'Ajusta las duraciones de las fases si tu variedad difiere del tiempo estándar',
    'modal.phase_duration.days': 'días',
    'modal.phase_duration.default': 'predeterminado:',
    'modal.phase_duration.tip': '💡 Consejo: La floración del cannabis puede variar de 6-12 semanas según la cepa',
    'modal.reminders.title': '🗓️ Recordatorios Automáticos',
    'modal.reminders.watering': '💧 Recordatorios de riego',
    'modal.reminders.watering_interval': 'Intervalo:',
    'modal.reminders.fertilizing': '🌿 Recordatorios de fertilización',
    'modal.reminders.fertilizing_interval': 'Intervalo:',
    'modal.reminders.fertilizing_delay': 'Comenzar después de:',
    'modal.reminders.phase_transitions': '📋 Recordatorios de transición de fase',
    'modal.reminders.weekly_checks': '🔍 Controles semanales',
    'modal.reminders.harvest': '🌾 Recordatorio de cosecha',
    'modal.reminders.google_sync': '🗓️ Sincronizar con Google Calendar',
    'modal.interval.daily': 'Diario',
    'modal.interval.every_2_days': 'Cada 2 días',
    'modal.interval.every_3_days': 'Cada 3 días',
    'modal.interval.every_4_days': 'Cada 4 días',
    'modal.interval.weekly': 'Semanal',
    'modal.interval.every_2_weeks': 'Cada 2 semanas',
    'modal.interval.every_3_weeks': 'Cada 3 semanas',
    'modal.interval.monthly': 'Mensual',
    'modal.interval.immediately': 'Inmediatamente',
    'modal.interval.1_week': '1 semana',
    'modal.interval.2_weeks': '2 semanas',
    
    // Plant Info Display
    'plant.info.growing_cycle': 'Ciclo de crecimiento:',
    'plant.info.days': 'días',
    'plant.info.weeks': 'semanas',
    'plant.info.phases': 'Fases:',
    'plant.info.temperature': 'Temperatura:',
    'plant.info.light': 'Luz:',
    'plant.info.legal_notice': '⚠️ Aviso Legal:',
    'plant.info.growing': 'Cultivo',
    
    // Seasonal Timing
    'timing.good': '✅ ¡Buen momento!',
    'timing.notice': '⚠️ Aviso de Tiempo',
    
    // Location Placeholders
    'location.indoor.placeholder': 'ej: Carpa Interior, Cuarto de Cultivo, Alféizar',
    'location.outdoor.placeholder': 'ej: Jardín Trasero, Cama Elevada, Campo',
    'location.greenhouse.placeholder': 'ej: Invernadero Sección A, Túnel',
    'location.default.indoor': 'Jardín Interior',
    'location.default.outdoor': 'Jardín Exterior',
    'location.default.greenhouse': 'Invernadero',
    
    // Custom Name Examples
    'custom_name.cannabis': 'ej: "Mi {name} #1"',
    'custom_name.vegetables': 'ej: "Jardín Cocina {name}"',
    'custom_name.herbs': 'ej: "Alféizar {name}"',
    'custom_name.fruits': 'ej: "Jardín {name}"',
    
    // Template Import
    'template.modal.title': 'Importar Plan de Jardín',
    'template.modal.description': 'Elige un plan de jardín prefabricado para importar automáticamente todas las tareas importantes de jardinería para el año.',
    'template.select.label': 'Seleccionar Plan de Jardín:',
    'template.select.placeholder': '-- Por favor selecciona --',
    'template.year.label': 'Año para Importar:',
    'template.year.current': 'Año Actual',
    'template.year.next': 'Próximo Año',
    'template.warning.title': 'Nota:',
    'template.warning.text': 'La importación agregará todas las citas del plan de jardín a tu calendario. Las citas existentes no serán sobrescritas.',
    'template.description.title': 'Descripción:',
    'template.task.count': 'tareas de jardinería durante todo el año',
    'template.import.button': 'Importar Plan de Jardín',
    'template.import.loading': 'Importando...',
    'template.import.success': '¡Éxito! {count} tareas de jardinería de "{name}" para {year} importadas.',
    'template.import.error': 'Error al importar el plan de jardín. Por favor intenta de nuevo.',
    'template.select.required': 'Por favor selecciona un plan de jardín.',
    
    // Garden Categories
    'garden.ornamental': 'Jardín Ornamental',
    'garden.vegetable_fruit': 'Jardín de Vegetales y Frutas',
    'garden.herb': 'Jardín de Hierbas',
    'garden.balcony': 'Balcón y Terraza',
    'garden.complete': 'Jardín Completo',
    
    // Plant Categories
    'plant.category.vegetables': 'Vegetales',
    'plant.category.fruits': 'Frutas',
    'plant.category.herbs': 'Hierbas',
    'plant.category.flowers': 'Flores',
    'plant.category.trees': 'Árboles',
    'plant.category.cannabis': 'Cannabis',
    'plant.category.fruit_trees': 'Árboles Frutales',
    
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
    
    // Plant Phases
    'phase.germination': 'Germinación',
    'phase.seedling': 'Plántula',
    'phase.vegetative': 'Vegetativa',
    'phase.preflower': 'Floración Previa',
    'phase.flowering': 'Floración',
    'phase.harvest': 'Cosecha',
    
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
    'common.info': 'Info',
    
    // My Plants Modal
    'plants.my_active_plants': 'Mis Plantas Activas',
    'plants.no_active': 'No se encontraron plantas activas',
    'plants.plant_type': 'Tipo de Planta',
    'plants.location': 'Ubicación',
    'plants.started': 'Iniciado',
    'plants.current_phase': 'Fase Actual',
    'plants.expected_completion': 'Finalización Esperada',
    
    // Error Messages
    'error.title': 'Error',
    'error.loading_plants': 'Error al cargar las plantas. Por favor, inténtelo de nuevo.'
  },
  
  it: {
    // UI Elements
    'app.title': 'Calendario Giardinaggio Semplice',
    'nav.calendar': 'Calendario',
    'nav.plants': 'Piante',
    'nav.settings': 'Impostazioni',
    'ui.quick_actions': 'Azioni Rapide',
    'ui.plant_categories': 'Categorie di Piante',
    'ui.upcoming_tasks': 'Attività in Corso',
    'ui.no_upcoming_tasks': 'Nessuna attività in corso',
    'ui.weather': 'Meteo',
    'ui.weather_info': 'Le informazioni meteo locali verranno visualizzate qui',
    'ui.built_with': 'Costruito con',
    'ui.language': 'Lingua:',
    
    // Buttons
    'btn.add_event': 'Aggiungi Evento',
    'btn.add_planting': 'Aggiungi Piantumazione',
    'btn.import_template': 'Importa Piano Giardino',
    'btn.my_plants': 'Le Mie Piante',
    'btn.save': 'Salva',
    'btn.cancel': 'Annulla',
    'btn.delete': 'Elimina',
    'btn.edit': 'Modifica',
    'btn.close': 'Chiudi',
    'btn.view_details': 'Visualizza Dettagli',
    'btn.add_note': 'Aggiungi Nota',
    
    // Add Event Modal
    'modal.add_event.title': 'Aggiungi Evento Giardino',
    'modal.event_type.label': 'Tipo di Evento',
    'modal.event_type.custom': 'Evento Personalizzato',
    'modal.event_type.planting': 'Inizia Piantumazione',
    'modal.title.label': 'Titolo',
    'modal.type.label': 'Tipo',
    'modal.environment.label': 'Ambiente di Coltivazione',
    'modal.region.label': 'Regione Climatica',
    'modal.plant_category.label': 'Categoria Pianta',
    'modal.plant_category.all': 'Tutte le Categorie',
    'modal.plant_type.label': 'Tipo di Pianta',
    'modal.custom_name.label': 'Nome Personalizzato (Opzionale)',
    'modal.custom_name.help': 'Dai alla tua pianta un nome unico per facilitare il monitoraggio',
    'modal.location.label': 'Posizione',
    'modal.date.label': 'Data',
    'modal.description.label': 'Descrizione',
    'modal.phase_duration.title': '⏱️ Durata Fasi (Opzionale)',
    'modal.phase_duration.help': 'Regola le durate delle fasi se la tua varietà differisce dai tempi standard',
    'modal.phase_duration.days': 'giorni',
    'modal.phase_duration.default': 'predefinito:',
    'modal.phase_duration.tip': '💡 Suggerimento: La fioritura della cannabis può variare da 6-12 settimane a seconda della varietà',
    'modal.reminders.title': '🗓️ Promemoria Automatici',
    'modal.reminders.watering': '💧 Promemoria irrigazione',
    'modal.reminders.watering_interval': 'Intervallo:',
    'modal.reminders.fertilizing': '🌿 Promemoria fertilizzazione',
    'modal.reminders.fertilizing_interval': 'Intervallo:',
    'modal.reminders.fertilizing_delay': 'Inizia dopo:',
    'modal.reminders.phase_transitions': '📋 Promemoria transizione fasi',
    'modal.reminders.weekly_checks': '🔍 Controlli settimanali',
    'modal.reminders.harvest': '🌾 Promemoria raccolta',
    'modal.reminders.google_sync': '🗓️ Sincronizza con Google Calendar',
    'modal.interval.daily': 'Giornaliero',
    'modal.interval.every_2_days': 'Ogni 2 giorni',
    'modal.interval.every_3_days': 'Ogni 3 giorni',
    'modal.interval.every_4_days': 'Ogni 4 giorni',
    'modal.interval.weekly': 'Settimanale',
    'modal.interval.every_2_weeks': 'Ogni 2 settimane',
    'modal.interval.every_3_weeks': 'Ogni 3 settimane',
    'modal.interval.monthly': 'Mensile',
    'modal.interval.immediately': 'Immediatamente',
    'modal.interval.1_week': '1 settimana',
    'modal.interval.2_weeks': '2 settimane',
    
    // Plant Info Display
    'plant.info.growing_cycle': 'Ciclo di crescita:',
    'plant.info.days': 'giorni',
    'plant.info.weeks': 'settimane',
    'plant.info.phases': 'Fasi:',
    'plant.info.temperature': 'Temperatura:',
    'plant.info.light': 'Luce:',
    'plant.info.legal_notice': '⚠️ Avviso Legale:',
    'plant.info.growing': 'Coltivazione',
    
    // Seasonal Timing
    'timing.good': '✅ Buon momento!',
    'timing.notice': '⚠️ Avviso Tempistica',
    
    // Location Placeholders
    'location.indoor.placeholder': 'es: Tenda Indoor, Grow Room, Davanzale',
    'location.outdoor.placeholder': 'es: Giardino, Aiuola Rialzata, Campo',
    'location.greenhouse.placeholder': 'es: Serra Sezione A, Tunnel',
    'location.default.indoor': 'Giardino Interno',
    'location.default.outdoor': 'Giardino Esterno',
    'location.default.greenhouse': 'Serra',
    
    // Custom Name Examples
    'custom_name.cannabis': 'es: "La mia {name} #1"',
    'custom_name.vegetables': 'es: "Giardino Cucina {name}"',
    'custom_name.herbs': 'es: "Davanzale {name}"',
    'custom_name.fruits': 'es: "Giardino {name}"',
    
    // Template Import
    'template.modal.title': 'Importa Piano Giardino',
    'template.modal.description': 'Scegli un piano giardino prefabbricato per importare automaticamente tutti i compiti importanti di giardinaggio per l\'anno.',
    'template.select.label': 'Seleziona Piano Giardino:',
    'template.select.placeholder': '-- Per favore seleziona --',
    'template.year.label': 'Anno per Importazione:',
    'template.year.current': 'Anno Corrente',
    'template.year.next': 'Prossimo Anno',
    'template.warning.title': 'Nota:',
    'template.warning.text': 'L\'importazione aggiungerà tutti gli appuntamenti del piano giardino al tuo calendario. Gli appuntamenti esistenti non saranno sovrascritti.',
    'template.description.title': 'Descrizione:',
    'template.task.count': 'compiti di giardinaggio durante l\'anno',
    'template.import.button': 'Importa Piano Giardino',
    'template.import.loading': 'Importando...',
    'template.import.success': 'Successo! {count} compiti di giardinaggio da "{name}" per {year} importati.',
    'template.import.error': 'Errore nell\'importazione del piano giardino. Per favore riprova.',
    'template.select.required': 'Per favore seleziona un piano giardino.',
    
    // Garden Categories
    'garden.ornamental': 'Giardino Ornamentale',
    'garden.vegetable_fruit': 'Giardino Ortaggi e Frutta',
    'garden.herb': 'Giardino Erbe',
    'garden.balcony': 'Balcone e Terrazza',
    'garden.complete': 'Giardino Completo',
    
    // Plant Categories
    'plant.category.vegetables': 'Ortaggi',
    'plant.category.fruits': 'Frutta',
    'plant.category.herbs': 'Erbe',
    'plant.category.flowers': 'Fiori',
    'plant.category.trees': 'Alberi',
    'plant.category.cannabis': 'Cannabis',
    'plant.category.fruit_trees': 'Alberi da Frutto',
    
    // Growing Environments
    'environment.indoor': 'Interno',
    'environment.outdoor': 'Esterno',
    'environment.greenhouse': 'Serra',
    
    // Seasonal Regions
    'region.temperate_north': 'Tempéré Nord',
    'region.temperate_south': 'Tempéré Sud',
    'region.tropical': 'Tropicale',
    'region.mediterranean': 'Mediterraneo',
    
    // Task Types
    'task.planting': 'Piantumazione',
    'task.watering': 'Irrigazione',
    'task.fertilizing': 'Fertilizzazione',
    'task.pruning': 'Potatura',
    'task.harvesting': 'Raccolta',
    'task.maintenance': 'Manutenzione',
    
    // Plant Phases
    'phase.germination': 'Germinazione',
    'phase.seedling': 'Piantolina',
    'phase.vegetative': 'Vegetativa',
    'phase.preflower': 'Prima Fioritura',
    'phase.flowering': 'Fioritura',
    'phase.harvest': 'Raccolta',
    
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
    'common.info': 'Info',
    
    // My Plants Modal
    'plants.my_active_plants': 'Le Mie Piante Attive',
    'plants.no_active': 'Nessuna pianta attiva trovata',
    'plants.plant_type': 'Tipo di Pianta',
    'plants.location': 'Posizione',
    'plants.started': 'Iniziato',
    'plants.current_phase': 'Fase Attuale',
    'plants.expected_completion': 'Completamento Previsto',
    
    // Error Messages
    'error.title': 'Errore',
    'error.loading_plants': 'Errore durante il caricamento delle piante. Per favore riprova.'
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

// Export alias for compatibility
export const initializeI18n = initI18n;

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

// Initialize on module load
initI18n(); 