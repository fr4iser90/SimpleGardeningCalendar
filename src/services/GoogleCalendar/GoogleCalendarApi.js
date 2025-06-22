import { t } from '../../core/i18n/index.js';
import { googleCalendarSettings } from './GoogleCalendarSettings.js';
import { formatDate } from '../../utils/dateUtils.js';
import { isGardeningEvent, convertToGoogleEvent, convertFromGoogleEvent } from '../../utils/eventUtils.js';
import { validateEventData } from '../../utils/validators.js';
import { isGardenCalendar, groupSimilarCalendars, findDuplicateGroups } from '../../utils/calendarUtils.js';

/**
 * Google Calendar API Calls
 * Contains only the core API functions for Google Calendar integration
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

// The single, smart callback for the token client
async function tokenCallback(tokenResponse) {
  console.log('🔧 Token callback triggered:', tokenResponse);
  
  if (tokenResponse && tokenResponse.access_token) {
    accessToken = tokenResponse.access_token;
    isSignedIn = true;
    console.log('✅ Google Calendar authenticated successfully');
    
    document.dispatchEvent(new CustomEvent('googleCalendarStatusChanged', { detail: { isSignedIn: true } }));
  } else {
    console.error('❌ Token request failed:', tokenResponse);
    isSignedIn = false;
    document.dispatchEvent(new CustomEvent('googleCalendarStatusChanged', { detail: { isSignedIn: false, error: tokenResponse.error } }));
  }
}

// NEW UNIFIED & SMART Connect Function
export async function attemptSignIn(interactive = false) {
  try {
    await initializeClient();
    const prompt = interactive ? '' : 'none';
    console.log(`🚀 Attempting sign-in with prompt: '${prompt}'...`);
    tokenClient.requestAccessToken({ prompt });
  } catch (error) {
    console.error('Sign-in attempt failed:', error);
    throw error;
  }
}

// Sign in using the new pattern (wrapper for compatibility)
export function signIn() {
  return new Promise((resolve, reject) => {
    if (isSignedIn) {
      resolve();
    } else {
      reject(new Error('Use attemptSignIn instead'));
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
  tokenClient = null;
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
    summary: calendarData.summary,
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

// Get user info from Google
export async function getUserInfo() {
  if (!accessToken) {
    throw new Error('Not authenticated');
  }
  
  const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });
  
  if (!response.ok) {
    throw new Error('Failed to get user info');
  }
  
  return await response.json();
}

// Fetch details of a specific calendar by ID
export async function fetchCalendarDetails(calendarId) {
  if (!accessToken) {
    throw new Error('Not authenticated');
  }
  
  const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch calendar details: ${response.status} ${response.statusText}`);
  }
  
  return await response.json();
}

// Delete a calendar from Google Calendar
export async function deleteCalendar(calendarId) {
  if (!isSignedIn) {
    throw new Error('Not signed in to Google Calendar');
  }
  
  // Don't allow deletion of primary calendar
  if (calendarId === 'primary') {
    throw new Error('Cannot delete primary calendar');
  }
  
  const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    }
  });
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to delete calendar: ${error}`);
  }
  
  return true;
}

// Detect existing garden calendars
export async function detectGardenCalendars() {
  const calendars = await fetchCalendarList();
  
  const gardenCalendars = calendars.filter(isGardenCalendar);
  const groupedCalendars = groupSimilarCalendars(gardenCalendars);
  const duplicateGroups = findDuplicateGroups(groupedCalendars);
  
  return {
    allCalendars: calendars,
    gardenCalendars,
    groupedCalendars,
    duplicateGroups,
    hasExistingGardenCalendars: gardenCalendars.length > 0,
    hasDuplicates: duplicateGroups.length > 0
  };
}

// Export state getters
export function getAuthState() {
  return { isSignedIn, accessToken };
} 