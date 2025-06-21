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
  if (!isSignedIn) {
    throw new Error('Not signed in to Google Calendar');
  }
  
  const googleEvent = convertToGoogleEvent(eventData);
  
  const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events`, {
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
  if (!isSignedIn) {
    throw new Error('Not signed in to Google Calendar');
  }
  
  let url = `https://www.googleapis.com/calendar/v3/calendars/primary/events?maxResults=2500&singleEvents=true&orderBy=startTime`;
  
  if (timeMin) {
    url += `&timeMin=${encodeURIComponent(timeMin)}`;
  }
  if (timeMax) {
    url += `&timeMax=${encodeURIComponent(timeMax)}`;
  }
  
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    }
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch events');
  }
  
  const data = await response.json();
  const events = data.items || [];
  
  // Filter for gardening events and convert to our format
  return events
    .filter(event => isGardeningEvent(event))
    .map(event => convertFromGoogleEvent(event));
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
  // Import IndexedDB dynamically to avoid circular imports
  const { openDB } = await import('idb');
  
  const db = await openDB('gardening-calendar');
  const events = await db.getAll('events');
  const settings = new GoogleCalendarSettings().load();
  
  // Filter events based on sync settings AND skip events that already have googleEventId
  const eventsToSync = events.filter(event => 
    settings.syncTypes[event.type] && 
    !event.googleEventId  // CRITICAL: Skip events already synced to Google!
  );
  
  if (eventsToSync.length === 0) {
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
  
  const googleEvents = await importEvents(timeMin, timeMax);
  
  // Import IndexedDB dynamically
  const { openDB } = await import('idb');
  const db = await openDB('gardening-calendar');
  const localEvents = await db.getAll('events');
  
  let imported = 0;
  let updated = 0;
  let skipped = 0;
  
  for (const googleEvent of googleEvents) {
    // Check if event already exists locally
    const existingEvent = localEvents.find(e => 
      e.googleEventId === googleEvent.googleEventId ||
      (e.title === googleEvent.title && e.date === googleEvent.date)
    );
    
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
      } else {
        skipped++;
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
    }
  }
  
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
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.error('Failed to parse stored settings:', error);
      }
    }
    return {
      clientId: '',
      userEmail: '',
      selectedCalendarId: 'primary',
      autoSync: false,
      bidirectionalSync: false,
      syncInterval: 'manual',
      lastSyncTime: null,
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
  }
  
  clear() {
    localStorage.removeItem(this.storageKey);
  }
}

export const googleCalendarSettings = new GoogleCalendarSettings();