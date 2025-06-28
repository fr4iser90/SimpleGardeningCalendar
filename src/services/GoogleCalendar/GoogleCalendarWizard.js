// Automatic Google Calendar Sync Logic
// Handles category-based calendar detection, matching, renaming, and creation

import { t, getCurrentLanguage } from '../../core/i18n/index.js';
import { googleCalendarSettings } from './GoogleCalendarSettings.js';
import { fetchCalendarList, createCalendar, updateCalendar, deleteCalendar } from './GoogleCalendarApi.js';
import { showNotification } from '../../utils/notifications.js';
import { isGardenCalendar } from '../../utils/calendarUtils.js';

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
    const googleCalendars = await fetchCalendarList();
    const settings = googleCalendarSettings.load();
    const currentLang = getCurrentLanguage();
    
    // Get local calendar organization type
    const localCalendarsSetting = JSON.parse(localStorage.getItem('localCalendarsSetting') || '{"type": "single"}');
    
    // --- DEBUG: Log current organization type and local categories ---
    console.log('[DEBUG] localCalendarsSetting:', localCalendarsSetting);
    // ---------------------------------------------------------------
    
    const results = {
      matched: {},
      created: {},
      renamed: {},
      errors: []
    };
    
    // Handle single calendar organization
    if (localCalendarsSetting.type === 'single') {
      const completeGardenInfo = getCalendarInfoForCategory(CALENDAR_CATEGORIES.COMPLETE_GARDEN);
      
      // Look for existing complete garden calendar
      let matchedCalendar = googleCalendars.find(cal => 
        calendarMatchesCategory(cal, CALENDAR_CATEGORIES.COMPLETE_GARDEN)
      );
      
      if (matchedCalendar) {
        // Check if name needs updating for current language
        if (matchedCalendar.summary !== completeGardenInfo.name) {
          try {
            await updateCalendar(matchedCalendar.id, {
              summary: `${completeGardenInfo.emoji} ${completeGardenInfo.name}`,
              description: completeGardenInfo.description
            });
            results.renamed[CALENDAR_CATEGORIES.COMPLETE_GARDEN] = {
              id: matchedCalendar.id,
              oldName: matchedCalendar.summary,
              newName: `${completeGardenInfo.emoji} ${completeGardenInfo.name}`
            };
            showNotification(`Renamed calendar to "${completeGardenInfo.emoji} ${completeGardenInfo.name}"`, 'success');
          } catch (error) {
            results.errors.push(`Failed to rename calendar: ${error.message}`);
          }
        }
        
        results.matched[CALENDAR_CATEGORIES.COMPLETE_GARDEN] = matchedCalendar.id;
        settings.selectedCalendarId = matchedCalendar.id;
        
      } else {
        // Create new complete garden calendar
        try {
          const newCalendar = await createCalendar({
            summary: `${completeGardenInfo.emoji} ${completeGardenInfo.name}`,
            description: completeGardenInfo.description,
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
          });
          
          results.created[CALENDAR_CATEGORIES.COMPLETE_GARDEN] = {
            id: newCalendar.id,
            name: `${completeGardenInfo.emoji} ${completeGardenInfo.name}`
          };
          results.matched[CALENDAR_CATEGORIES.COMPLETE_GARDEN] = newCalendar.id;
          settings.selectedCalendarId = newCalendar.id;
          
          showNotification(`Created new calendar: "${completeGardenInfo.emoji} ${completeGardenInfo.name}"`, 'success');
        } catch (error) {
          results.errors.push(`Failed to create calendar: ${error.message}`);
        }
      }
    }
    
    // Handle area-based organization
    else if (localCalendarsSetting.type === 'areas') {
      const categories = [
        CALENDAR_CATEGORIES.VEGETABLE_GARDEN,
        CALENDAR_CATEGORIES.HERB_GARDEN,
        CALENDAR_CATEGORIES.ORNAMENTAL,
        CALENDAR_CATEGORIES.FRUIT_GARDEN
      ];
      
      for (const category of categories) {
        const calendarInfo = getCalendarInfoForCategory(category);
        
        // Look for existing calendar for this category
        let matchedCalendar = googleCalendars.find(cal => 
          calendarMatchesCategory(cal, category)
        );
        
        if (matchedCalendar) {
          // Check if name needs updating for current language
          if (matchedCalendar.summary !== calendarInfo.name) {
            try {
              await updateCalendar(matchedCalendar.id, {
                summary: `${calendarInfo.emoji} ${calendarInfo.name}`,
                description: calendarInfo.description
              });
              results.renamed[category] = {
                id: matchedCalendar.id,
                oldName: matchedCalendar.summary,
                newName: `${calendarInfo.emoji} ${calendarInfo.name}`
              };
              showNotification(`Renamed calendar to "${calendarInfo.emoji} ${calendarInfo.name}"`, 'success');
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
            results.errors.push(`Failed to create calendar: ${error.message}`);
          }
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
    // Save updated settings
    settings.calendarMappings = results.matched;
    settings.organizationType = localCalendarsSetting.type;
    googleCalendarSettings.save(settings);
    // --- DEBUG: Log final settings ---
    console.log('[DEBUG] googleCalendarSettings:', settings);
    // -------------------------------
    
    // --- NEU: Automatisches gnadenloses Aufräumen ---
    await cleanupUnusedCalendars(localCalendarsSetting.type, true); // true = force, keine Nachfrage
    // ---
    
    console.log('✅ Calendar detection and matching complete:', results);
    return results;
    
  } catch (error) {
    console.error('❌ Calendar detection failed:', error);
    throw error;
  }
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
        
        if (currentCalendar && currentCalendar.summary !== calendarInfo.name) {
          await updateCalendar(calendarId, {
            summary: `${calendarInfo.emoji} ${calendarInfo.name}`,
            description: calendarInfo.description
          });
          
          results.updated[category] = {
            id: calendarId,
            oldName: currentCalendar.summary,
            newName: calendarInfo.name
          };
          
          showNotification(`Updated calendar name to "${calendarInfo.name}"`, 'success');
        }
      } catch (error) {
        results.errors.push(`Failed to update ${category}: ${error.message}`);
      }
    }
    
    // --- NEU: Automatisches gnadenloses Aufräumen nach Sprachwechsel ---
    const localCalendarsSetting = JSON.parse(localStorage.getItem('localCalendarsSetting') || '{"type": "single"}');
    await cleanupUnusedCalendars(localCalendarsSetting.type, true);
    // ---
    
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
  
  // For single calendar organization, use the main calendar
  if (localCalendarsSetting.type === 'single') {
    return settings.selectedCalendarId;
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
        return settings.calendarMappings[mappedCategory];
      }
    }
  }
  
  // Fallback to selected calendar
  return settings.selectedCalendarId;
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
            showNotification(`Deleted unused calendar`, 'success');
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