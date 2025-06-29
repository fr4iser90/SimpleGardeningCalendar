// Automatic Google Calendar Sync Logic
// Handles category-based calendar detection, matching, renaming, and creation

import { t, getCurrentLanguage } from '../../core/i18n/index.js';
import { googleCalendarSettings } from './GoogleCalendarSettings.js';
import { fetchCalendarList, createCalendar, updateCalendar, deleteCalendar } from './GoogleCalendarApi.js';
import { showNotification } from '../../utils/notifications.js';
import { isGardenCalendar } from '../../utils/calendarUtils.js';
import { showQuotaExceededModal } from '../../components/modals/Google/QuotaExceededModal.js';

/**
 * Technical calendar categories that match local calendar organization
 */
const CALENDAR_CATEGORIES = {
  VEGETABLE_GARDEN: 'VEGETABLE_GARDEN',
  HERB_GARDEN: 'HERB_GARDEN', 
  ORNAMENTAL: 'ORNAMENTAL',
  FRUIT_GARDEN: 'FRUIT_GARDEN',
  COMPLETE_GARDEN: 'COMPLETE_GARDEN'
};

/**
 * Get calendar name and emoji for a category in current language
 */
function getCalendarInfoForCategory(category) {
  const currentLang = getCurrentLanguage();
  
  const calendarInfo = {
    [CALENDAR_CATEGORIES.VEGETABLE_GARDEN]: {
      name: t('calendar.vegetables'),
      emoji: '🥕',
      description: t('calendar.vegetables_description')
    },
    [CALENDAR_CATEGORIES.HERB_GARDEN]: {
      name: t('calendar.herbs'),
      emoji: '🌱', 
      description: t('calendar.herbs_description')
    },
    [CALENDAR_CATEGORIES.ORNAMENTAL]: {
      name: t('calendar.ornamental'),
      emoji: '🌸',
      description: t('calendar.ornamental_description')
    },
    [CALENDAR_CATEGORIES.FRUIT_GARDEN]: {
      name: t('calendar.fruits'),
      emoji: '🍎',
      description: t('calendar.fruits_description')
    },
    [CALENDAR_CATEGORIES.COMPLETE_GARDEN]: {
      name: t('calendar.garden'),
      emoji: '🌱',
      description: t('calendar.garden_description')
    }
  };
  
  return calendarInfo[category] || {
    name: t('calendar.garden'),
    emoji: '🌱',
    description: t('calendar.garden_description')
  };
}

/**
 * Detect if a Google calendar matches a local category
 */
function calendarMatchesCategory(googleCalendar, category) {
  const summary = googleCalendar.summary.toLowerCase();
  const { name, emoji } = getCalendarInfoForCategory(category);
  
  // Check for exact name match (case insensitive)
  if (summary === name.toLowerCase()) {
    return true;
  }
  
  // Check for emoji + name pattern
  if (summary.includes(emoji) && summary.includes(name.toLowerCase())) {
    return true;
  }
  
  // Check for category-specific keywords
  const categoryKeywords = {
    [CALENDAR_CATEGORIES.VEGETABLE_GARDEN]: ['vegetable', 'veggie', '🥕', 'carrot', 'tomato'],
    [CALENDAR_CATEGORIES.HERB_GARDEN]: ['herb', '🌱', 'basil', 'thyme', 'rosemary'],
    [CALENDAR_CATEGORIES.ORNAMENTAL]: ['ornamental', 'flower', '🌸', 'rose', 'tulip'],
    [CALENDAR_CATEGORIES.FRUIT_GARDEN]: ['fruit', '🍎', 'apple', 'berry', 'orchard'],
    [CALENDAR_CATEGORIES.COMPLETE_GARDEN]: ['garden', 'gardening', '🌱', 'complete']
  };
  
  const keywords = categoryKeywords[category] || [];
  return keywords.some(keyword => summary.includes(keyword.toLowerCase()));
}

/**
 * Auto-detect and match Google calendars with local categories
 */
export async function autoDetectAndMatchCalendars() {
  console.log('🔍 Starting automatic calendar detection and matching...');
  
  try {
    // Add timeout for the entire operation
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Calendar detection timeout after 30 seconds')), 30000);
    });
    
    const detectionPromise = performCalendarDetection();
    
    // Race between detection and timeout
    const results = await Promise.race([detectionPromise, timeoutPromise]);
    
    console.log('✅ Calendar detection completed successfully:', results);
    return results;
    
  } catch (error) {
    console.error('❌ Calendar detection failed:', error);
    
    if (error.message.includes('timeout')) {
      showNotification('Calendar detection timed out. Please try again.', 'error');
    } else {
      showNotification(`Calendar detection failed: ${error.message}`, 'error');
    }
    
    throw error;
  }
}

async function performCalendarDetection() {
  // Update status to show we're starting
  if (window.updateStatusBarActivity) {
    window.updateStatusBarActivity(t('google.activity.fetching_calendars'), true);
  }
  
  // OPTIMIERT: Kalender-Liste nur einmal laden und cachen
  console.log('🔍 Fetching Google calendars...');
  const googleCalendars = await fetchCalendarList();
  console.log(`📋 Found ${googleCalendars.length} calendars`);
  
  const settings = googleCalendarSettings.load();
  const currentLang = getCurrentLanguage();
  
  // Limit the number of calendars to process (prevent browser crash)
  const maxCalendarsToProcess = 50;
  if (googleCalendars.length > maxCalendarsToProcess) {
    console.warn(`⚠️ Too many calendars (${googleCalendars.length}), limiting to ${maxCalendarsToProcess}`);
    googleCalendars.splice(maxCalendarsToProcess);
  }
  
  // Get local calendar organization type
  const localCalendarsSetting = JSON.parse(localStorage.getItem('localCalendarsSetting') || '{"type": "single"}');
  
  console.log('[DEBUG] localCalendarsSetting:', localCalendarsSetting);
  
  // OPTIMIERT: Bei Organisationswechsel nur wenn wirklich nötig löschen
  const oldOrganizationType = settings.organizationType;
  if (oldOrganizationType && oldOrganizationType !== localCalendarsSetting.type) {
    console.log(`🔄 Organization changed from ${oldOrganizationType} to ${localCalendarsSetting.type} - cleaning up old garden calendars`);
    
    if (window.updateStatusBarActivity) {
      window.updateStatusBarActivity(t('google.activity.cleaning_old_calendars'), true);
    }
    
    // OPTIMIERT: Nur Garten-Kalender aus der bereits geladenen Liste filtern
    const gardenCalendars = googleCalendars.filter(cal => isGardenCalendar(cal));
    const maxDeletions = 10; // Limit deletions per session
    
    console.log(`🗑️ Found ${gardenCalendars.length} garden calendars to potentially delete`);
    
    for (let i = 0; i < Math.min(gardenCalendars.length, maxDeletions); i++) {
      const cal = gardenCalendars[i];
      try {
        await deleteCalendar(cal.id);
        console.log(`🗑️ Deleted old garden calendar: ${cal.summary}`);
        showNotification(t('google.activity.deleted_old_calendar', { name: cal.summary }), 'info');
        
        // Add small delay between deletions to prevent rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (error) {
        console.error(`Failed to delete calendar ${cal.summary}:`, error);
      }
    }
    
    // Settings zurücksetzen
    settings.calendarMappings = {};
    settings.selectedCalendarId = '';
    googleCalendarSettings.save(settings);
    
    // OPTIMIERT: Kalender-Liste nur einmal neu laden nach Löschungen
    if (window.updateStatusBarActivity) {
      window.updateStatusBarActivity(t('google.activity.refreshing_calendars'), true);
    }
    console.log('🔄 Refreshing calendar list after deletions...');
    const freshGoogleCalendars = await fetchCalendarList();
    googleCalendars.length = 0;
    googleCalendars.push(...freshGoogleCalendars);
    console.log(`📋 Refreshed calendar list: ${googleCalendars.length} calendars`);
  }
  
  const results = {
    matched: {},
    created: {},
    renamed: {},
    errors: []
  };
  
  // Handle single calendar organization
  if (localCalendarsSetting.type === 'single') {
    if (window.updateStatusBarActivity) {
      window.updateStatusBarActivity(t('google.activity.setup_single_calendar'), true);
    }
    
    const completeGardenInfo = getCalendarInfoForCategory(CALENDAR_CATEGORIES.COMPLETE_GARDEN);
    
    // Look for existing complete garden calendar
    let matchedCalendar = googleCalendars.find(cal => 
      calendarMatchesCategory(cal, CALENDAR_CATEGORIES.COMPLETE_GARDEN)
    );
    
    if (matchedCalendar) {
      // Check if full summary (emoji + name) needs updating for current language
      const desiredSummary = `${completeGardenInfo.emoji} ${completeGardenInfo.name}`;
      if (matchedCalendar.summary !== desiredSummary) {
        try {
          await updateCalendar(matchedCalendar.id, {
            summary: desiredSummary,
            description: completeGardenInfo.description
          });
          results.renamed[CALENDAR_CATEGORIES.COMPLETE_GARDEN] = {
            id: matchedCalendar.id,
            oldName: matchedCalendar.summary,
            newName: desiredSummary
          };
          showNotification(`Renamed calendar to "${desiredSummary}"`, 'success');
        } catch (error) {
          results.errors.push(`Failed to rename calendar: ${error.message}`);
        }
      }
      
      results.matched[CALENDAR_CATEGORIES.COMPLETE_GARDEN] = matchedCalendar.id;
      settings.selectedCalendarId = matchedCalendar.id;
      
    } else {
      // Create new complete garden calendar
      try {
        console.log(`🔄 Creating new garden calendar: "${completeGardenInfo.emoji} ${completeGardenInfo.name}"`);
        
        const newCalendar = await createCalendar({
          summary: `${completeGardenInfo.emoji} ${completeGardenInfo.name}`,
          description: completeGardenInfo.description,
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
        });
        
        console.log(`✅ Successfully created calendar:`, newCalendar);
        
        results.created[CALENDAR_CATEGORIES.COMPLETE_GARDEN] = {
          id: newCalendar.id,
          name: `${completeGardenInfo.emoji} ${completeGardenInfo.name}`
        };
        results.matched[CALENDAR_CATEGORIES.COMPLETE_GARDEN] = newCalendar.id;
        settings.selectedCalendarId = newCalendar.id;
        
        showNotification(`Created new calendar: "${completeGardenInfo.emoji} ${completeGardenInfo.name}"`, 'success');
      } catch (error) {
        console.error(`❌ Failed to create garden calendar:`, error);
        console.error(`❌ Error details:`, {
          message: error.message,
          status: error.status,
          statusText: error.statusText,
          response: error.response
        });
        
        results.errors.push(`Failed to create calendar: ${error.message}`);
        // NEU: Robustere Quota-Fehlererkennung
        const errorStr = [error.message, error.errorText, error.body, error.response && error.response.errorText]
          .filter(Boolean)
          .join(' ');
        console.log('🚨 Error string for quota check:', errorStr);
        if (errorStr.includes('quotaExceeded') || errorStr.includes('usageLimits')) {
          console.log('🚨 QUOTA EXCEEDED DETECTED! Showing modal...');
          showQuotaExceededModal('calendar_creation');
          settings.lastError = errorStr;
          googleCalendarSettings.save(settings);
        } else if (errorStr.includes('403')) {
          showNotification(t('google.error.permission_denied'), 'error');
        } else {
          showNotification(t('google.error.create_calendar_failed', { name: `${completeGardenInfo.emoji} ${completeGardenInfo.name}` }), 'error');
        }
      }
    }
  }
  
  // Handle area-based organization
  else if (localCalendarsSetting.type === 'areas') {
    if (window.updateStatusBarActivity) {
      window.updateStatusBarActivity(t('google.activity.setup_area_based_calendars'), true);
    }
    
    const categories = [
      CALENDAR_CATEGORIES.VEGETABLE_GARDEN,
      CALENDAR_CATEGORIES.HERB_GARDEN,
      CALENDAR_CATEGORIES.ORNAMENTAL,
      CALENDAR_CATEGORIES.FRUIT_GARDEN
    ];
    
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      const calendarInfo = getCalendarInfoForCategory(category);
      
      if (window.updateStatusBarActivity) {
        window.updateStatusBarActivity(t('google.activity.setting_up', { name: calendarInfo.name }), true);
      }
      
      // Look for existing calendar for this category
      let matchedCalendar = googleCalendars.find(cal => 
        calendarMatchesCategory(cal, category)
      );
      
      if (matchedCalendar) {
        // Check if full summary (emoji + name) needs updating for current language
        const desiredSummary = `${calendarInfo.emoji} ${calendarInfo.name}`;
        if (matchedCalendar.summary !== desiredSummary) {
          try {
            await updateCalendar(matchedCalendar.id, {
              summary: desiredSummary,
              description: calendarInfo.description
            });
            results.renamed[category] = {
              id: matchedCalendar.id,
              oldName: matchedCalendar.summary,
              newName: desiredSummary
            };
            showNotification(`Renamed calendar to "${desiredSummary}"`, 'success');
          } catch (error) {
            results.errors.push(`Failed to rename calendar: ${error.message}`);
          }
        }
        
        results.matched[category] = matchedCalendar.id;
        
      } else {
        // Create new calendar for this category
        try {
          const newCalendar = await createCalendar({
            summary: `${calendarInfo.emoji} ${calendarInfo.name}`,
            description: calendarInfo.description,
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
          });
          
          results.created[category] = {
            id: newCalendar.id,
            name: `${calendarInfo.emoji} ${calendarInfo.name}`
          };
          results.matched[category] = newCalendar.id;
          
          showNotification(`Created new calendar: "${calendarInfo.emoji} ${calendarInfo.name}"`, 'success');
        } catch (error) {
          console.error(`❌ Failed to create calendar for ${category}:`, error);
          results.errors.push(`Failed to create calendar: ${error.message}`);
          
          // NEU: Robustere Quota-Fehlererkennung für Area-basierte Kalender
          const errorStr = [error.message, error.errorText, error.body, error.response && error.response.errorText]
            .filter(Boolean)
            .join(' ');
          console.log('🚨 Error string for quota check (area):', errorStr);
          if (errorStr.includes('quotaExceeded') || errorStr.includes('usageLimits')) {
            console.log('🚨 QUOTA EXCEEDED DETECTED in area calendar creation! Showing modal...');
            showQuotaExceededModal('calendar_creation');
            settings.lastError = errorStr;
            googleCalendarSettings.save(settings);
            // Break out of the loop since we've shown the modal
            break;
          } else if (errorStr.includes('403')) {
            showNotification(t('google.error.permission_denied'), 'error');
          } else {
            showNotification(t('google.error.create_calendar_failed', { name: `${calendarInfo.emoji} ${calendarInfo.name}` }), 'error');
          }
        }
      }
      
      // OPTIMIERT: Kürzerer Delay zwischen Operationen
      if (i < categories.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }
    
    // Set primary calendar (use first matched or created)
    const firstCategory = Object.keys(results.matched)[0];
    if (firstCategory) {
      settings.selectedCalendarId = results.matched[firstCategory];
    }
  }
  
  // --- DEBUG: Log matched results ---
  console.log('[DEBUG] results.matched:', results.matched);
  // ----------------------------------
  
  // KRITISCHER SICHERHEITSCHECK: Verhindere Primary Calendar Verwendung
  if (settings.selectedCalendarId === 'primary' || settings.selectedCalendarId === settings.userEmail) {
    console.error('🚨 BLOCKED: Attempted to use primary calendar! Setting selectedCalendarId to null');
    settings.selectedCalendarId = null;
  }
  
  // Save updated settings
  settings.calendarMappings = results.matched;
  settings.organizationType = localCalendarsSetting.type;
  googleCalendarSettings.save(settings);
  // --- DEBUG: Log final settings ---
  console.log('[DEBUG] googleCalendarSettings:', settings);
  // -------------------------------
  
  // Final status update
  if (window.updateStatusBarActivity) {
    const matchedCount = Object.keys(results.matched).length;
    const createdCount = Object.keys(results.created).length;
    window.updateStatusBarActivity(t('google.activity.setup_complete', { matched: matchedCount, created: createdCount }), false);
  }
  
  console.log('✅ Calendar detection and matching complete:', results);
  return results;
}

/**
 * Update Google calendar names when language changes
 */
export async function updateCalendarNamesForLanguage() {
  console.log('🌍 Updating Google calendar names for language change...');
  
  try {
    const settings = googleCalendarSettings.load();
    if (!settings.calendarMappings) {
      console.log('No calendar mappings found, skipping language update');
      return;
    }
    
    const results = {
      updated: {},
      errors: []
    };
    
    for (const [category, calendarId] of Object.entries(settings.calendarMappings)) {
      try {
        const calendarInfo = getCalendarInfoForCategory(category);
        
        // Get current calendar info
        const calendars = await fetchCalendarList();
        const currentCalendar = calendars.find(cal => cal.id === calendarId);
        
        const desiredSummary = `${calendarInfo.emoji} ${calendarInfo.name}`;
        if (currentCalendar && currentCalendar.summary !== desiredSummary) {
          await updateCalendar(calendarId, {
            summary: desiredSummary,
            description: calendarInfo.description
          });
          
          results.updated[category] = {
            id: calendarId,
            oldName: currentCalendar.summary,
            newName: desiredSummary
          };
          
          showNotification(`Updated calendar name to "${desiredSummary}"`, 'success');
        }
      } catch (error) {
        results.errors.push(`Failed to update ${category}: ${error.message}`);
      }
    }
    
    // ENTFERNT: Automatisches cleanupUnusedCalendars verursacht Endlosschleife!
    // const localCalendarsSetting = JSON.parse(localStorage.getItem('localCalendarsSetting') || '{"type": "single"}');
    // await cleanupUnusedCalendars(localCalendarsSetting.type, true);
    
    console.log('✅ Calendar name updates complete:', results);
    return results;
    
  } catch (error) {
    console.error('❌ Calendar name update failed:', error);
    throw error;
  }
}

/**
 * Get the appropriate Google calendar ID for an event based on its category
 */
export function getGoogleCalendarIdForEvent(eventData) {
  const settings = googleCalendarSettings.load();
  const localCalendarsSetting = JSON.parse(localStorage.getItem('localCalendarsSetting') || '{"type": "single"}');
  
  // KRITISCHER SICHERHEITSCHECK: Verhindere Primary Calendar Verwendung
  function validateCalendarId(calendarId) {
    if (!calendarId || calendarId === 'primary' || calendarId === settings.userEmail) {
      console.error('🚨 BLOCKED: Attempted to use primary calendar!', { calendarId, userEmail: settings.userEmail });
      return null;
    }
    return calendarId;
  }
  
  // For single calendar organization, use the main calendar
  if (localCalendarsSetting.type === 'single') {
    const calendarId = validateCalendarId(settings.selectedCalendarId);
    if (!calendarId) {
      console.error('🚨 No valid garden calendar found for single organization!');
      return null;
    }
    return calendarId;
  }
  
  // For area-based organization, determine category from event/planting
  if (localCalendarsSetting.type === 'areas') {
    let category = null;
    
    // Try to get category from event data
    if (eventData.category) {
      category = eventData.category.toLowerCase();
    } else if (eventData.plantingId) {
      // Get category from planting (would need to fetch from DB)
      // For now, use a simple mapping
      const eventType = eventData.type || '';
      if (eventType.includes('vegetable') || eventType.includes('carrot') || eventType.includes('tomato')) {
        category = 'vegetable';
      } else if (eventType.includes('herb') || eventType.includes('basil') || eventType.includes('thyme')) {
        category = 'herb';
      } else if (eventType.includes('flower') || eventType.includes('rose') || eventType.includes('tulip')) {
        category = 'ornamental';
      } else if (eventType.includes('fruit') || eventType.includes('apple') || eventType.includes('berry')) {
        category = 'fruit';
      }
    }
    
    // Map category to calendar
    if (category) {
      const categoryMapping = {
        'vegetable': CALENDAR_CATEGORIES.VEGETABLE_GARDEN,
        'herb': CALENDAR_CATEGORIES.HERB_GARDEN,
        'ornamental': CALENDAR_CATEGORIES.ORNAMENTAL,
        'flower': CALENDAR_CATEGORIES.ORNAMENTAL,
        'fruit': CALENDAR_CATEGORIES.FRUIT_GARDEN
      };
      
      const mappedCategory = categoryMapping[category];
      if (mappedCategory && settings.calendarMappings?.[mappedCategory]) {
        const calendarId = validateCalendarId(settings.calendarMappings[mappedCategory]);
        if (calendarId) {
          return calendarId;
        }
      }
    }
  }
  
  // Fallback to selected calendar (with validation)
  const fallbackId = validateCalendarId(settings.selectedCalendarId);
  if (!fallbackId) {
    console.error('🚨 No valid garden calendar found! Cannot create event.');
    return null;
  }
  return fallbackId;
}

/**
 * Clean up unused Google calendars when organization changes
 */
export async function cleanupUnusedCalendars(newOrganizationType, force = false) {
  console.log('🧹 Cleaning up unused calendars for organization change...');
  
  try {
    const settings = googleCalendarSettings.load();
    const googleCalendars = await fetchCalendarList();
    
    const results = {
      deleted: {},
      errors: []
    };
    
    // Get calendars that are no longer needed
    const unusedCalendars = [];
    
    if (newOrganizationType === 'single') {
      // Only keep complete garden calendar
      for (const [category, calendarId] of Object.entries(settings.calendarMappings || {})) {
        if (category !== CALENDAR_CATEGORIES.COMPLETE_GARDEN) {
          unusedCalendars.push({ category, calendarId });
        }
      }
      // Alle anderen Garten-Kalender, die nicht gemappt sind, auch löschen
      const mappedIds = Object.values(settings.calendarMappings || {});
      for (const cal of googleCalendars) {
        if (!mappedIds.includes(cal.id) && isGardenCalendar(cal)) {
          unusedCalendars.push({ category: 'unmapped', calendarId: cal.id });
        }
      }
    } else if (newOrganizationType === 'areas') {
      // Keep only area-specific calendars
      for (const [category, calendarId] of Object.entries(settings.calendarMappings || {})) {
        if (category === CALENDAR_CATEGORIES.COMPLETE_GARDEN) {
          unusedCalendars.push({ category, calendarId });
        }
      }
      // Alle anderen Garten-Kalender, die nicht gemappt sind, auch löschen
      const mappedIds = Object.values(settings.calendarMappings || {});
      for (const cal of googleCalendars) {
        if (!mappedIds.includes(cal.id) && isGardenCalendar(cal)) {
          unusedCalendars.push({ category: 'unmapped', calendarId: cal.id });
        }
      }
    }
    
    // --- NEU: Automatisches Löschen ohne Nachfrage, wenn force=true ---
    if (unusedCalendars.length > 0) {
      if (force) {
        for (const { category, calendarId } of unusedCalendars) {
          try {
            await deleteCalendar(calendarId);
            results.deleted[category] = calendarId;
            showNotification(t('google.activity.deleted_unused_calendar', { name: category }), 'success');
          } catch (error) {
            results.errors.push(`Failed to delete ${category}: ${error.message}`);
          }
        }
        // Update settings
        for (const { category } of unusedCalendars) {
          delete settings.calendarMappings[category];
        }
        googleCalendarSettings.save(settings);
      } else {
        // (Fallback: bisherige Nachfrage-Logik)
        // ...
      }
    }
    
    console.log('✅ Calendar cleanup complete:', results);
    return results;
    
  } catch (error) {
    console.error('❌ Calendar cleanup failed:', error);
    throw error;
  }
} 