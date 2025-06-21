import { t } from '../../i18n.js';
import { openDB } from 'idb';
import { DB_NAME, DB_VERSION } from '../../core/db/connection.js';
import { getAuthState } from './GoogleCalendarApi.js';
import { googleCalendarSettings } from './GoogleCalendarSettings.js';
import { isGardeningEvent } from '../../utils/eventUtils.js';
import { formatDate } from '../../utils/dateUtils.js';
import { validateEventData } from '../../utils/validators.js';
import { convertToGoogleEvent, convertFromGoogleEvent } from '../../utils/eventUtils.js';

/**
 * Google Calendar Sync Logic
 * Handles bidirectional synchronization between local and Google Calendar
 */

// Bidirectional sync
export async function performBidirectionalSync() {
  const { isSignedIn } = getAuthState();
  if (!isSignedIn) {
    throw new Error('Not signed in to Google Calendar');
  }
  
  let imported = 0, updated = 0, exported = 0;
  const errors = [];
  
  try {
    // Step 1: Export local events to Google
    console.log('🔄 Exporting local events to Google...');
    const exportResult = await exportLocalEventsToGoogle();
    exported = exportResult.synced;
    if (exportResult.failed > 0) {
      errors.push(`${exportResult.failed} events failed to export`);
    }
  } catch (error) {
    console.error('Export failed:', error);
    errors.push(`Export failed: ${error.message}`);
  }
  
  try {
    // Step 2: Import events from Google
    console.log('🔄 Importing events from Google...');
    const importResult = await importGoogleEvents();
    imported = importResult.imported;
    updated = importResult.updated;
  } catch (error) {
    console.error('Import failed:', error);
    errors.push(`Import failed: ${error.message}`);
  }
  
  return {
    imported,
    updated,
    exported,
    conflicts: [],
    errors
  };
}

// Create multiple events in Google Calendar
export async function createEvents(eventsData) {
  const { isSignedIn, accessToken } = getAuthState();
  if (!isSignedIn) throw new Error('Not signed in to Google Calendar');
  
  const settings = googleCalendarSettings.load();
  const calendarId = settings.selectedCalendarId;

  if (!calendarId) throw new Error(t('google.error.no_calendar_selected'));
  
  const results = [];
  const errors = [];
  
  for (const eventData of eventsData) {
    try {
      const googleEvent = convertToGoogleEvent(eventData);
      const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(googleEvent)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const result = await response.json();
      results.push(result);
    } catch (error) {
      console.error(`Failed to create event "${eventData.title}":`, error);
      errors.push(error);
      results.push(null);
    }
  }
  
  return { results, errors };
}

// Import events from Google Calendar
export async function importEvents(timeMin = null, timeMax = null) {
  const { isSignedIn, accessToken } = getAuthState();
  if (!isSignedIn) throw new Error('Not signed in to Google Calendar');
  
  const settings = googleCalendarSettings.load();
  const calendarId = settings.selectedCalendarId;

  if (!calendarId) throw new Error(t('google.error.no_calendar_selected'));
  
  let url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?singleEvents=true&orderBy=startTime`;
  
  if (timeMin) {
    url += `&timeMin=${encodeURIComponent(timeMin)}`;
  }
  if (timeMax) {
    url += `&timeMax=${encodeURIComponent(timeMax)}`;
  }
  
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch events from Google Calendar');
  }
  
  const data = await response.json();
  return data.items || [];
}

// Export local events to Google (internal implementation)
async function exportLocalEventsToGoogle() {
  const db = await openDB(DB_NAME, DB_VERSION);
  
  const eventCount = await db.count('events');
  console.log(`[DEBUG] exportLocalEventsToGoogle: Found ${eventCount} events in the database.`);

  const events = await db.getAll('events');
  const settings = googleCalendarSettings.load();
  
  // Check if no calendar is selected, search for existing gardening calendars
  if (!settings.selectedCalendarId) {
    console.log('[DEBUG] No calendar selected - searching for existing gardening calendars...');
    try {
      const { fetchCalendarList } = await import('./GoogleCalendarApi.js');
      const calendars = await fetchCalendarList();
      
      // Search for gardening-related calendars by summary name
      const gardeningKeywords = ['garden', 'gardening', 'plant', '🌱', '🌿', '🌾', '💧', '🔧'];
      const gardeningCalendars = calendars.filter(cal => 
        gardeningKeywords.some(keyword => 
          cal.summary.toLowerCase().includes(keyword.toLowerCase())
        )
      );
      
      if (gardeningCalendars.length > 0) {
        // Auto-select the first gardening calendar found
        const selectedCalendar = gardeningCalendars[0];
        settings.selectedCalendarId = selectedCalendar.id;
        settings.calendarList = calendars.reduce((acc, cal) => {
          acc[cal.id] = cal.summary;
          return acc;
        }, {});
        googleCalendarSettings.save(settings);
        console.log(`[DEBUG] Auto-selected gardening calendar: ${selectedCalendar.summary} (${selectedCalendar.id})`);
      } else {
        throw new Error('No gardening calendar found. Please select a calendar from your available calendars.');
      }
    } catch (error) {
      console.error('[DEBUG] Failed to search for calendars:', error);
      throw new Error('No calendar selected for sync. Please complete the Google Calendar setup wizard to choose a calendar.');
    }
  }
  
  // Filter events based on sync settings AND skip events that already have googleEventId
  const eventsToSync = events.filter(event => {
    const syncTypeEnabled = settings.syncTypes[event.type];
    const notAlreadySynced = !event.googleEventId;
    
    return syncTypeEnabled && notAlreadySynced;
  });
  
  console.log(`[DEBUG] Events to sync: ${eventsToSync.length} out of ${events.length} total events`);
  
  if (eventsToSync.length === 0) {
    console.log('[DEBUG] No events to sync - all events either disabled for sync or already synced');
    return { synced: 0, failed: 0 };
  }
  
  console.log(`🔄 Exporting ${eventsToSync.length} NEW events to Google (skipping ${events.length - eventsToSync.length} already synced)`);
  
  const { results, errors } = await createEvents(eventsToSync);
  
  // Update local events with Google event IDs
  for (let i = 0; i < results.length; i++) {
    const localEvent = eventsToSync[i];
    const googleEvent = results[i];
    
    if (googleEvent && googleEvent.id) {
      await db.put('events', {
        ...localEvent,
        googleEventId: googleEvent.id,
        lastModified: new Date().toISOString()
      });
    }
  }
  
  return { synced: results.length, failed: errors.length };
}

// Import Google events (internal implementation)
async function importGoogleEvents() {
  const settings = googleCalendarSettings.load();
  const importSettings = settings.importSettings || {};
  
  console.log('[DEBUG] Starting import from Google Calendar...');
  console.log('[DEBUG] Import settings:', importSettings);
  console.log('[DEBUG] Selected calendar ID:', settings.selectedCalendarId);
  
  // Calculate time range
  let timeMin = null;
  let timeMax = null;
  
  if (importSettings.importTimeRange !== 'all') {
    timeMin = new Date();
    switch (importSettings.importTimeRange) {
      case '6months':
        timeMin.setMonth(timeMin.getMonth() - 6);
        break;
      case '1year':
        timeMin.setFullYear(timeMin.getFullYear() - 1);
        break;
      case '2years':
        timeMin.setFullYear(timeMin.getFullYear() - 2);
        break;
    }
    timeMin = timeMin.toISOString();
    
    // Set max time to 2 years in future
    timeMax = new Date();
    timeMax.setFullYear(timeMax.getFullYear() + 2);
    timeMax = timeMax.toISOString();
  }
  
  console.log('[DEBUG] Time range for import:', { timeMin, timeMax });
  
  let googleEvents = [];
  try {
    googleEvents = await importEvents(timeMin, timeMax);
    console.log('[DEBUG] Raw Google events fetched:', googleEvents.length);
  } catch (error) {
    console.error('[DEBUG] Failed to import events from Google:', error);
    throw error;
  }
  
  const db = await openDB(DB_NAME, DB_VERSION);
  const localEvents = await db.getAll('events');
  
  let imported = 0;
  let updated = 0;
  let skipped = 0;
  
  for (const googleEvent of googleEvents) {
    // Check if event already exists locally
    const existingEvent = localEvents.find(e => {
      // First check: exact googleEventId match
      if (e.googleEventId === googleEvent.id) {
        return true;
      }
      
      // Second check: same title, date, and type
      if (e.title === googleEvent.summary && 
          e.date === googleEvent.start.dateTime && 
          e.type === 'gardening') {
        return true;
      }
      
      return false;
    });
    
    if (existingEvent) {
      // Update existing event
      const updatedEvent = {
        ...existingEvent,
        googleEventId: googleEvent.id,
        lastModified: new Date().toISOString()
      };
      
      await db.put('events', updatedEvent);
      updated++;
      console.log(`[DEBUG] Updated existing event: ${googleEvent.summary}`);
    } else {
      // Import new event
      const newEvent = convertFromGoogleEvent(googleEvent);
      await db.add('events', newEvent);
      imported++;
      console.log(`[DEBUG] Imported new event: ${googleEvent.summary}`);
    }
  }
  
  console.log(`[DEBUG] Import results: imported=${imported}, updated=${updated}, skipped=${skipped}`);
  
  return { imported, updated, skipped };
}

// Auto-sync event when created locally
export async function autoSyncEvent(eventData) {
  const settings = googleCalendarSettings.load();
  if (!settings.autoSync) {
    console.log('[DEBUG] Auto-sync disabled in settings.');
    return;
  }
  
  try {
    const { isSignedIn } = getAuthState();
    if (!isSignedIn) {
      console.log('[DEBUG] Auto-sync skipped: not signed in.');
      return;
    }
    
    const { results, errors } = await createEvents([eventData]);
    if (errors.length > 0) {
        console.error('Auto-sync failed for event:', eventData.title, errors[0]);
    } else {
        console.log('✅ Event auto-synced to Google Calendar:', results[0].summary);
    }
  } catch (error) {
    console.error('Auto-sync failed:', error);
  }
} 