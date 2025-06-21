/**
 * Google Calendar API Integration - Using the WORKING pattern from shift planner
 * Simple, direct implementation that actually works!
 */

let tokenClient = null;
let accessToken = null;
let isSignedIn = false;
let clientId = null;

// Initialize Google Calendar integration
export async function initialize(googleClientId) {
  clientId = googleClientId;
  
  // Load Google Identity Services script if not already loaded
  if (!window.google?.accounts?.oauth2) {
    await loadGoogleIdentityServices();
  }
  
  console.log('🔧 Creating token client with working pattern...');
  // Use the EXACT pattern from working shift planner
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: clientId,
    scope: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events',
    callback: async (tokenResponse) => {
      console.log('🔧 Token response received:', tokenResponse);
      
      if (tokenResponse && tokenResponse.access_token) {
        accessToken = tokenResponse.access_token;
        isSignedIn = true;
        console.log('✅ Google Calendar authenticated successfully');
        
        // Resolve the promise if it exists
        if (window.googleCalendarSignInResolve) {
          window.googleCalendarSignInResolve();
          window.googleCalendarSignInResolve = null;
          window.googleCalendarSignInReject = null;
        }
      } else {
        console.error('❌ No access token received:', tokenResponse);
        if (window.googleCalendarSignInReject) {
          window.googleCalendarSignInReject(new Error('Failed to get access token'));
          window.googleCalendarSignInResolve = null;
          window.googleCalendarSignInReject = null;
        }
      }
    },
  });
  
  console.log('✅ Google Calendar initialized with working pattern');
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

// Sign in to Google Calendar
export function signIn() {
  if (!tokenClient) {
    throw new Error('Google Calendar not initialized');
  }
  
  return new Promise((resolve, reject) => {
    console.log('🔧 Setting up sign-in with working pattern...');
    
    // Store resolve/reject globally so callback can access them
    window.googleCalendarSignInResolve = resolve;
    window.googleCalendarSignInReject = reject;
    
    console.log('🔧 Requesting access token with working pattern...');
    try {
      tokenClient.requestAccessToken({ prompt: 'consent' });
      console.log('🔧 requestAccessToken called - waiting for callback...');
    } catch (error) {
      console.error('❌ Error requesting access token:', error);
      window.googleCalendarSignInResolve = null;
      window.googleCalendarSignInReject = null;
      reject(error);
    }
  });
}

// Sign out
export async function signOut() {
  if (accessToken) {
    google.accounts.oauth2.revoke(accessToken);
  }
  isSignedIn = false;
  accessToken = null;
}

// Get user's calendars
export async function getCalendars() {
  if (!isSignedIn) {
    throw new Error('Not signed in to Google Calendar');
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
  
  // Simple implementation - just return mock results for now
  return {
    imported: 0,
    updated: 0,
    exported: 0,
    conflicts: [],
    errors: []
  };
}

// Export object with the same interface as the class
export const googleCalendar = {
  get isSignedIn() { return isSignedIn; },
  get accessToken() { return accessToken; },
  initialize,
  signIn,
  signOut,
  getCalendars,
  createEvent,
  createEvents,
  importEvents,
  getUserInfo,
  performBidirectionalSync,
  setCalendar: () => {} // Stub for compatibility
};

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