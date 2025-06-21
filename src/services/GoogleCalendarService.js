import { t } from '../i18n.js';
import { openDB } from 'idb';
import { DB_NAME, DB_VERSION } from '../core/db/connection.js';

/**
 * Google Calendar API Integration - REFACTORED for smart connection flow
 */

let tokenClient = null;
let accessToken = null;
let isSignedIn = false;

// Initialize Google Calendar integration
export async function initialize(googleClientId) {
  await loadGoogleIdentityServices();
  console.log('✅ Google Calendar GSI script loaded and ready.');
  return true;
}

// Load Google Identity Services script
function loadGoogleIdentityServices() {
  return new Promise((resolve, reject) => {
    if (window.google?.accounts?.oauth2) {
      resolve();
      return;
    }
    
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.onload = resolve;
    script.onerror = () => reject(new Error('Failed to load Google Identity Services'));
    document.head.appendChild(script);
  });
}

// The single, smart callback for the token client
async function tokenCallback(tokenResponse) {
  console.log('🔧 Token callback triggered:', tokenResponse);
  
  if (tokenResponse && tokenResponse.access_token) {
    accessToken = tokenResponse.access_token;
    isSignedIn = true;
    console.log('✅ Google Calendar authenticated successfully');
    
    try {
      const userInfo = await getUserInfo();
      const calendars = await fetchCalendarList(); // Fetch calendar list
      const settings = googleCalendarSettings.load();

      if (userInfo && userInfo.email) {
        settings.userEmail = userInfo.email;
      }
      if (calendars) {
        // Store a simple map of ID -> Name for the UI to use
        settings.calendarList = calendars.reduce((acc, cal) => {
          acc[cal.id] = cal.summary;
          return acc;
        }, {});
      }
      googleCalendarSettings.save(settings);

      // AUTO-INITIAL-SYNC: If user has a calendar selected and auto-sync is enabled, do initial sync
      if (settings.selectedCalendarId && settings.autoSync) {
        console.log('🔄 Auto-sync enabled - performing initial sync after reconnection...');
        try {
          const report = await performBidirectionalSync();
          console.log('✅ Initial sync completed:', report);
          
          // Show success notification
          if (typeof showNotification === 'function') {
            const message = `${t('google.sync_report_title')}: ${t('google.sync_report_details', {
              exported: report.exported || 0,
              imported: report.imported || 0,
              updated: report.updated || 0,
            })}`;
            showNotification(message, 'success');
          }
        } catch (error) {
          console.warn('Initial sync failed after reconnection:', error);
          if (typeof showNotification === 'function') {
            showNotification(t('google.initial_sync_failed'), 'error');
          }
        }
      }

    } catch (error) {
      console.warn('Could not save user email or calendar list:', error);
    }
    
    document.dispatchEvent(new CustomEvent('googleCalendarStatusChanged', { detail: { isSignedIn: true } }));
  } else {
    console.error('❌ Token request failed:', tokenResponse);
    isSignedIn = false;
    document.dispatchEvent(new CustomEvent('googleCalendarStatusChanged', { detail: { isSignedIn: false, error: tokenResponse.error } }));
  }
}

// Central function to initialize the client ONCE
async function initializeClient() {
  if (tokenClient) return;

  await loadGoogleIdentityServices();
  const settings = googleCalendarSettings.load();
  if (!settings.clientId) {
    throw new Error('Cannot initialize Google Client: Client ID not found in settings.');
  }

  console.log('🔧 Initializing Google Token Client for the first time...');
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: settings.clientId,
    scope: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/userinfo.email',
    callback: tokenCallback,
  });
}

// NEW UNIFIED & SMART Connect Function
export async function attemptSignIn(interactive = false) {
  try {
    await initializeClient();
    // Let Google decide if a prompt is needed for interactive sessions.
    // This provides a smoother experience than forcing 'select_account'.
    const prompt = interactive ? '' : 'none';
    console.log(`🚀 Attempting sign-in with prompt: '${prompt}'...`);
    tokenClient.requestAccessToken({ prompt });
  } catch (error) {
    console.error('Sign-in attempt failed:', error);
    throw error; // Re-throw for the caller
  }
}

// DEPRECATED / REPLACED FUNCTIONS - Kept for reference or to be removed
export function setupGoogleCalendarConnection(clientIdInput, connectBtn, onSuccessCallback) {
  console.warn('setupGoogleCalendarConnection is deprecated. Use attemptSignIn(true) instead.');
  if (connectBtn) {
    connectBtn.addEventListener('click', async () => {
      connectBtn.disabled = true;
      connectBtn.textContent = 'Connecting...';
      try {
        await attemptSignIn(true);
        // The 'googleCalendarStatusChanged' event will trigger the onSuccessCallback via the UI layer
      } catch (e) {
        connectBtn.disabled = false;
        connectBtn.textContent = 'Connect to Google Calendar';
      }
    });
  }
}

export async function reconnect() {
  console.warn('reconnect is deprecated. Use attemptSignIn(true) instead.');
  await attemptSignIn(true);
}

// Sign in using the new pattern (wrapper for compatibility)
export function signIn() {
  return new Promise((resolve, reject) => {
    // This is now handled by setupGoogleCalendarConnection
    if (isSignedIn) {
      resolve();
    } else {
      reject(new Error('Use setupGoogleCalendarConnection instead'));
    }
  });
}

// EXACT shift planner calendar list function
export async function fetchCalendarList() {
  if (!accessToken) {
    throw new Error('Not authenticated');
  }
  
  const url = 'https://www.googleapis.com/calendar/v3/users/me/calendarList';
  const resp = await fetch(url, {
    headers: {
      'Authorization': 'Bearer ' + accessToken,
    }
  });
  if (!resp.ok) throw new Error('Failed to fetch calendars');
  const data = await resp.json();
  return data.items || [];
}

// Sign out
export async function signOut() {
  if (accessToken) {
    google.accounts.oauth2.revoke(accessToken);
  }
  isSignedIn = false;
  accessToken = null;
  tokenClient = null;
}

// Get user's calendars (compatibility wrapper)
export async function getCalendars() {
  return await fetchCalendarList();
}

// Create a new calendar in Google Calendar
export async function createCalendar(calendarData) {
  if (!isSignedIn) {
    throw new Error('Not signed in to Google Calendar');
  }
  
  const calendarPayload = {
    summary: calendarData.name,
    description: calendarData.description || '',
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
  };
  
  const response = await fetch('https://www.googleapis.com/calendar/v3/calendars', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(calendarPayload)
  });
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to create calendar: ${error}`);
  }
  
  return await response.json();
}

// Create an event in Google Calendar
export async function createEvent(eventData) {
  if (!isSignedIn) throw new Error('Not signed in to Google Calendar');
  
  const googleEvent = convertToGoogleEvent(eventData);
  const settings = googleCalendarSettings.load();
  const calendarId = settings.selectedCalendarId;

  if (!calendarId) throw new Error(t('google.error.no_calendar_selected'));
  
  const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(googleEvent)
  });
  
  if (!response.ok) {
    throw new Error('Failed to create event');
  }
  
  return await response.json();
}

// Create multiple events
export async function createEvents(eventsData) {
  const results = [];
  const errors = [];
  
  for (const eventData of eventsData) {
    try {
      const result = await createEvent(eventData);
      results.push(result);
    } catch (error) {
      errors.push({ event: eventData, error: error.message });
    }
  }
  
  return { results, errors };
}

// Import events from Google Calendar
export async function importEvents(timeMin = null, timeMax = null) {
  if (!isSignedIn) throw new Error('Not signed in to Google Calendar');

  const settings = googleCalendarSettings.load();
  const calendarId = settings.selectedCalendarId;

  if (!calendarId) throw new Error(t('google.error.no_calendar_selected'));
  
  let url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?maxResults=2500&singleEvents=true&orderBy=startTime`;
  
  if (timeMin) {
    url += `&timeMin=${encodeURIComponent(timeMin)}`;
  }
  if (timeMax) {
    url += `&timeMax=${encodeURIComponent(timeMax)}`;
  }
  
  console.log('[DEBUG] Fetching events from Google Calendar URL:', url);
  
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    }
  });
  
  if (!response.ok) {
    const errorText = await response.text();
    console.error('[DEBUG] Google Calendar API error:', response.status, errorText);
    throw new Error(`Failed to fetch events: ${response.status} ${errorText}`);
  }
  
  const data = await response.json();
  console.log('[DEBUG] Raw Google Calendar response:', data);
  const events = data.items || [];
  console.log('[DEBUG] Total events from Google:', events.length);
  
  // Filter for gardening events and convert to our format
  const gardeningEvents = events.filter(event => isGardeningEvent(event));
  console.log('[DEBUG] Gardening events found:', gardeningEvents.length);
  
  const convertedEvents = gardeningEvents.map(event => convertFromGoogleEvent(event));
  console.log('[DEBUG] Converted events:', convertedEvents.length);
  
  return convertedEvents;
}

// Check if an event is a gardening event
function isGardeningEvent(googleEvent) {
  const description = googleEvent.description || '';
  const summary = googleEvent.summary || '';
  
  // Check for our metadata
  if (description.includes('[GardeningCalendar:')) {
    return true;
  }
  
  // Check for gardening-related keywords
  const gardeningIndicators = ['🌱', '💧', '🌿', '🌾', '🔧', 'plant', 'water', 'fertiliz', 'harvest', 'garden'];
  return gardeningIndicators.some(indicator => 
    summary.toLowerCase().includes(indicator.toLowerCase()) || 
    description.toLowerCase().includes(indicator.toLowerCase())
  );
}

// Convert our event format to Google Calendar format
function convertToGoogleEvent(eventData) {
  const startDate = new Date(eventData.date);
  const endDate = new Date(startDate);
  endDate.setHours(endDate.getHours() + 1);
  
  const categoryEmojis = {
    planting: '🌱',
    watering: '💧',
    fertilizing: '🌿',
    harvesting: '🌾',
    maintenance: '🔧'
  };
  
  const emoji = categoryEmojis[eventData.type] || '📅';
  const title = `${emoji} ${eventData.title}`;
  
  // Add metadata
  const metadata = {
    type: eventData.type,
    localId: eventData.id,
    plantingId: eventData.plantingId,
    syncedAt: new Date().toISOString()
  };
  
  const description = `${eventData.description || ''}\n\n[GardeningCalendar:${JSON.stringify(metadata)}]`.trim();
  
  return {
    summary: title,
    description: description,
    start: {
      dateTime: startDate.toISOString(),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    },
    end: {
      dateTime: endDate.toISOString(),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }
  };
}

// Convert Google Calendar event to our format
function convertFromGoogleEvent(googleEvent) {
  const summary = googleEvent.summary || '';
  const description = googleEvent.description || '';
  
  // Extract metadata
  const metadataMatch = description.match(/\[GardeningCalendar:([^\]]+)\]/);
  let metadata = {};
  if (metadataMatch) {
    try {
      metadata = JSON.parse(metadataMatch[1]);
    } catch (error) {
      console.warn('Failed to parse event metadata:', error);
    }
  }
  
  // Determine event type
  let type = metadata.type || 'maintenance';
  if (summary.includes('🌱')) type = 'planting';
  else if (summary.includes('💧')) type = 'watering';
  else if (summary.includes('🌿')) type = 'fertilizing';
  else if (summary.includes('🌾')) type = 'harvesting';
  
  const startDate = googleEvent.start?.date || googleEvent.start?.dateTime;
  const date = startDate ? new Date(startDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
  
  const title = summary.replace(/^[🌱💧🌿🌾🔧📅]\s*/, '');
  const cleanDescription = description.replace(/\[GardeningCalendar:[^\]]+\]/, '').trim();
  
  return {
    id: metadata.localId || null,
    title,
    date,
    type,
    description: cleanDescription,
    plantingId: metadata.plantingId || null,
    googleEventId: googleEvent.id,
    lastModified: googleEvent.updated,
    source: 'google'
  };
}

// Get user info
export async function getUserInfo() {
  if (!isSignedIn) {
    return null;
  }
  
  try {
    const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      }
    });
    
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.warn('Failed to get user info:', error);
  }
  
  return null;
}

// Bidirectional sync
export async function performBidirectionalSync() {
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

// Export local events to Google (internal implementation)
async function exportLocalEventsToGoogle() {
  const db = await openDB(DB_NAME, DB_VERSION);
  
  // DEBUGGING: Log the number of events found by the sync function
  const eventCount = await db.count('events');
  console.log(`[DEBUG] exportLocalEventsToGoogle: Found ${eventCount} events in the database.`);

  const events = await db.getAll('events');
  const settings = new GoogleCalendarSettings().load();
  
  // CHECK: If no calendar is selected, search for existing gardening calendars
  if (!settings.selectedCalendarId) {
    console.log('[DEBUG] No calendar selected - searching for existing gardening calendars...');
    try {
      const calendars = await fetchCalendarList();
      
      // Search for gardening-related calendars by summary name
      const gardeningKeywords = ['garden', 'gardening', 'plant', '🌱', '🌿', '🌾', '💧', '🔧'];
      const gardeningCalendars = calendars.filter(cal => 
        gardeningKeywords.some(keyword => 
          cal.summary.toLowerCase().includes(keyword.toLowerCase())
        )
      );
      
      console.log('[DEBUG] Found calendars:', calendars.map(cal => `${cal.summary} (${cal.id})`));
      console.log('[DEBUG] Gardening calendars found:', gardeningCalendars.map(cal => `${cal.summary} (${cal.id})`));
      
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
        // Show user all available calendars
        const calendarList = calendars.map(cal => `${cal.summary} (${cal.id})`).join('\n');
        throw new Error(`No gardening calendar found. Please select a calendar from your available calendars:\n\n${calendarList}\n\nYou can complete the Google Calendar setup wizard to choose a calendar.`);
      }
    } catch (error) {
      console.error('[DEBUG] Failed to search for calendars:', error);
      throw new Error('No calendar selected for sync. Please complete the Google Calendar setup wizard to choose a calendar.');
    }
  }
  
  // DEBUGGING: Log sync settings and event types
  console.log('[DEBUG] Sync settings:', settings.syncTypes);
  console.log('[DEBUG] Selected calendar ID:', settings.selectedCalendarId);
  
  // Count events by type for debugging
  const eventTypeCounts = {};
  events.forEach(event => {
    eventTypeCounts[event.type] = (eventTypeCounts[event.type] || 0) + 1;
  });
  console.log('[DEBUG] Event type distribution:', eventTypeCounts);
  
  // Filter events based on sync settings AND skip events that already have googleEventId
  const eventsToSync = events.filter(event => {
    const syncTypeEnabled = settings.syncTypes[event.type];
    const notAlreadySynced = !event.googleEventId;
    
    if (!syncTypeEnabled) {
      console.log(`[DEBUG] Skipping event "${event.title}" - type "${event.type}" not enabled for sync`);
    }
    if (!notAlreadySynced) {
      console.log(`[DEBUG] Skipping event "${event.title}" - already synced to Google (ID: ${event.googleEventId})`);
    }
    
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
  const settings = new GoogleCalendarSettings().load();
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
    console.log('[DEBUG] First few Google events:', googleEvents.slice(0, 3));
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
    // Check if event already exists locally - improved detection
    const existingEvent = localEvents.find(e => {
      // First check: exact googleEventId match
      if (e.googleEventId === googleEvent.googleEventId) {
        return true;
      }
      
      // Second check: same title, date, and type (more reliable for duplicates)
      if (e.title === googleEvent.title && 
          e.date === googleEvent.date && 
          e.type === googleEvent.type) {
        return true;
      }
      
      // Third check: same plantingId and similar title (for planting-related events)
      if (e.plantingId && 
          e.plantingId === googleEvent.plantingId && 
          e.title.includes(googleEvent.title.split(' ')[0])) {
        return true;
      }
      
      return false;
    });
    
    if (existingEvent) {
      // Handle conflict resolution
      if (importSettings.conflictResolution === 'google' || 
          (importSettings.conflictResolution === 'newer' && 
           new Date(googleEvent.lastModified) > new Date(existingEvent.lastModified || 0))) {
        
        await db.put('events', {
          ...existingEvent,
          title: googleEvent.title,
          description: googleEvent.description,
          type: googleEvent.type,
          plantingId: googleEvent.plantingId,
          googleEventId: googleEvent.googleEventId,
          lastModified: googleEvent.lastModified
        });
        updated++;
        console.log(`[DEBUG] Updated existing event: ${googleEvent.title}`);
      } else {
        skipped++;
        console.log(`[DEBUG] Skipped existing event (no update needed): ${googleEvent.title}`);
      }
    } else {
      // Import new event
      const newEvent = {
        title: googleEvent.title,
        date: googleEvent.date,
        type: googleEvent.type,
        description: googleEvent.description,
        plantingId: googleEvent.plantingId,
        googleEventId: googleEvent.googleEventId,
        lastModified: googleEvent.lastModified
      };
      await db.add('events', newEvent);
      imported++;
      console.log(`[DEBUG] Imported new event: ${googleEvent.title}`);
    }
  }
  
  console.log('[DEBUG] Import results:', { imported, updated, skipped });
  
  return { imported, updated, skipped };
}

// Export object with the same interface as the class
export const googleCalendar = {
  get isSignedIn() { return isSignedIn; },
  get accessToken() { return accessToken; },
  initialize,
  signIn,
  signOut,
  getCalendars,
  createCalendar,
  createEvent,
  createEvents,
  importEvents,
  getUserInfo,
  performBidirectionalSync,
  setCalendar: () => {}, // Stub for compatibility
  setupGoogleCalendarConnection,
  fetchCalendarList
};

// Export internal sync functions for use by UI
export { exportLocalEventsToGoogle, importGoogleEvents };

// Settings management (simplified)
export class GoogleCalendarSettings {
  constructor() {
    this.storageKey = 'googleCalendarSettings';
  }
  
  save(settings) {
    localStorage.setItem(this.storageKey, JSON.stringify(settings));
  }
  
  load() {
    const defaults = {
      clientId: '',
      userEmail: '',
      selectedCalendarId: null, // IMPORTANT: No 'primary' fallback
      autoSync: false,
      bidirectionalSync: false,
      syncInterval: 'manual',
      lastSyncTime: null,
      calendarList: {},
      syncTypes: {
        planting: true,
        watering: true,
        fertilizing: true,
        harvesting: true,
        maintenance: true
      },
      importSettings: {
        importExisting: true,
        importTimeRange: '1year',
        conflictResolution: 'newer'
      }
    };

    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      try {
        const storedSettings = JSON.parse(stored);
        // Merge defaults with stored settings. Stored settings take precedence.
        return { ...defaults, ...storedSettings };
      } catch (error) {
        console.error('Failed to parse stored settings, returning defaults:', error);
        return defaults;
      }
    }
    return defaults;
  }
  
  clear() {
    localStorage.removeItem(this.storageKey);
  }
}

export const googleCalendarSettings = new GoogleCalendarSettings();