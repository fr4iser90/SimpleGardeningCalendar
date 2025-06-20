// Google Calendar API Integration - Enhanced with Import and Sync
class GoogleCalendarIntegration {
  constructor() {
    this.isSignedIn = false;
    this.gapi = null;
    this.clientId = null;
    this.calendarId = 'primary'; // Default to primary calendar
    this.isInitialized = false;
    this.syncMetadataKey = 'GardeningCalendar'; // Key to identify our events
  }

  // Initialize Google API with Client ID only
  async initialize(clientId) {
    if (this.isInitialized) return true;
    
    try {
      this.clientId = clientId;
      
      // Load Google API script if not already loaded
      if (!window.gapi) {
        await this.loadGoogleAPI();
      }
      
      this.gapi = window.gapi;
      
      // Initialize the API
      await new Promise((resolve, reject) => {
        this.gapi.load('client:auth2', {
          callback: resolve,
          onerror: reject
        });
      });
      
      // Initialize the client with Client ID only
      await this.gapi.client.init({
        clientId: this.clientId,
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: 'https://www.googleapis.com/auth/calendar.events'
      });
      
      // Check if user is already signed in
      const authInstance = this.gapi.auth2.getAuthInstance();
      this.isSignedIn = authInstance.isSignedIn.get();
      
      this.isInitialized = true;
      return true;
      
    } catch (error) {
      console.error('Failed to initialize Google Calendar API:', error);
      throw new Error('Failed to initialize Google Calendar API. Please check your Client ID.');
    }
  }

  // Load Google API script dynamically
  loadGoogleAPI() {
    return new Promise((resolve, reject) => {
      if (window.gapi) {
        resolve();
        return;
      }
      
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api.js';
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  // Sign in to Google
  async signIn() {
    if (!this.isInitialized) {
      throw new Error('Google Calendar API not initialized');
    }
    
    try {
      const authInstance = this.gapi.auth2.getAuthInstance();
      await authInstance.signIn();
      this.isSignedIn = true;
      return true;
    } catch (error) {
      console.error('Sign in failed:', error);
      throw new Error('Failed to sign in to Google Calendar');
    }
  }

  // Sign out from Google
  async signOut() {
    if (!this.isInitialized) return;
    
    try {
      const authInstance = this.gapi.auth2.getAuthInstance();
      await authInstance.signOut();
      this.isSignedIn = false;
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  }

  // Get user's calendars
  async getCalendars() {
    if (!this.isSignedIn) {
      throw new Error('Not signed in to Google Calendar');
    }
    
    try {
      const response = await this.gapi.client.calendar.calendarList.list();
      return response.result.items || [];
    } catch (error) {
      console.error('Failed to get calendars:', error);
      throw new Error('Failed to retrieve calendars');
    }
  }

  // Set the calendar to use for events
  setCalendar(calendarId) {
    this.calendarId = calendarId;
  }

  // Create an event in Google Calendar with sync metadata
  async createEvent(eventData) {
    if (!this.isSignedIn) {
      throw new Error('Not signed in to Google Calendar');
    }
    
    try {
      // Convert our event format to Google Calendar format
      const googleEvent = this.convertToGoogleEvent(eventData);
      
      const response = await this.gapi.client.calendar.events.insert({
        calendarId: this.calendarId,
        resource: googleEvent
      });
      
      return response.result;
    } catch (error) {
      console.error('Failed to create event:', error);
      throw new Error('Failed to create event in Google Calendar');
    }
  }

  // Create multiple events (batch)
  async createEvents(eventsData) {
    if (!this.isSignedIn) {
      throw new Error('Not signed in to Google Calendar');
    }
    
    const results = [];
    const errors = [];
    
    for (const eventData of eventsData) {
      try {
        const result = await this.createEvent(eventData);
        results.push(result);
      } catch (error) {
        errors.push({ event: eventData, error: error.message });
      }
    }
    
    return { results, errors };
  }

  // Import events from Google Calendar
  async importEvents(timeMin = null, timeMax = null) {
    if (!this.isSignedIn) {
      throw new Error('Not signed in to Google Calendar');
    }
    
    try {
      const params = {
        calendarId: this.calendarId,
        maxResults: 2500,
        singleEvents: true,
        orderBy: 'startTime'
      };
      
      // Add time range if specified
      if (timeMin) {
        params.timeMin = timeMin;
      }
      if (timeMax) {
        params.timeMax = timeMax;
      }
      
      const response = await this.gapi.client.calendar.events.list(params);
      const events = response.result.items || [];
      
      // Filter for our gardening events and convert to our format
      const gardeningEvents = events
        .filter(event => this.isGardeningEvent(event))
        .map(event => this.convertFromGoogleEvent(event));
      
      return gardeningEvents;
    } catch (error) {
      console.error('Failed to import events:', error);
      throw new Error('Failed to import events from Google Calendar');
    }
  }

  // Check if a Google Calendar event is one of our gardening events
  isGardeningEvent(googleEvent) {
    if (!googleEvent.summary && !googleEvent.description) return false;
    
    // Check for our sync metadata or gardening-related emojis/keywords
    const summary = googleEvent.summary || '';
    const description = googleEvent.description || '';
    
    // Look for our sync metadata
    if (description.includes(`[${this.syncMetadataKey}]`)) return true;
    
    // Look for gardening emojis
    const gardeningEmojis = ['🌱', '💧', '🌿', '🌾', '🔧', '📅', '🌸', '🍅'];
    if (gardeningEmojis.some(emoji => summary.includes(emoji))) return true;
    
    // Look for gardening keywords
    const gardeningKeywords = ['plant', 'water', 'fertilize', 'harvest', 'garden', 'grow'];
    const text = (summary + ' ' + description).toLowerCase();
    if (gardeningKeywords.some(keyword => text.includes(keyword))) return true;
    
    return false;
  }

  // Convert Google Calendar event to our format
  convertFromGoogleEvent(googleEvent) {
    const summary = googleEvent.summary || '';
    const description = googleEvent.description || '';
    
    // Extract metadata if present
    const metadataMatch = description.match(/\[GardeningCalendar:([^\]]+)\]/);
    let metadata = {};
    if (metadataMatch) {
      try {
        metadata = JSON.parse(metadataMatch[1]);
      } catch (error) {
        console.warn('Failed to parse event metadata:', error);
      }
    }
    
    // Determine event type from emoji or metadata
    let type = metadata.type || 'maintenance';
    if (summary.includes('🌱')) type = 'planting';
    else if (summary.includes('💧')) type = 'watering';
    else if (summary.includes('🌿')) type = 'fertilizing';
    else if (summary.includes('🌾')) type = 'harvesting';
    
    // Extract date
    const startDate = googleEvent.start?.date || googleEvent.start?.dateTime;
    const date = startDate ? new Date(startDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
    
    // Clean title (remove emoji prefix if present)
    const title = summary.replace(/^[🌱💧🌿🌾🔧📅🌸🍅]\s*/, '');
    
    // Clean description (remove metadata)
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

  // Convert our event format to Google Calendar format with sync metadata
  convertToGoogleEvent(eventData) {
    const startDate = new Date(eventData.date);
    const endDate = new Date(startDate);
    endDate.setHours(endDate.getHours() + 1); // Default 1 hour duration
    
    // Add emoji and category to title for better visual identification
    const categoryEmojis = {
      planting: '🌱',
      watering: '💧',
      fertilizing: '🌿',
      harvesting: '🌾',
      maintenance: '🔧'
    };
    
    const emoji = categoryEmojis[eventData.type] || '📅';
    const title = eventData.title.startsWith(emoji) ? eventData.title : `${emoji} ${eventData.title}`;
    
    // Add sync metadata to description
    const metadata = {
      type: eventData.type,
      localId: eventData.id,
      plantingId: eventData.plantingId,
      syncedAt: new Date().toISOString()
    };
    
    const metadataString = `[${this.syncMetadataKey}:${JSON.stringify(metadata)}]`;
    const description = `${eventData.description || ''}\n\n${metadataString}`.trim();
    
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
      },
      colorId: this.getEventColorId(eventData.type),
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'popup', minutes: 60 }, // 1 hour before
          { method: 'popup', minutes: 1440 } // 1 day before
        ]
      }
    };
  }

  // Get Google Calendar color ID for event type
  getEventColorId(type) {
    const colorMap = {
      planting: '10', // Green
      watering: '1',  // Blue
      fertilizing: '9', // Purple
      harvesting: '6', // Orange
      maintenance: '8' // Gray
    };
    return colorMap[type] || '10';
  }

  // Bidirectional sync: compare local and Google events
  async performBidirectionalSync() {
    if (!this.isSignedIn) {
      throw new Error('Not signed in to Google Calendar');
    }
    
    try {
      // Import events from Google Calendar (last 6 months to next 2 years)
      const timeMin = new Date();
      timeMin.setMonth(timeMin.getMonth() - 6);
      const timeMax = new Date();
      timeMax.setFullYear(timeMax.getFullYear() + 2);
      
      const googleEvents = await this.importEvents(
        timeMin.toISOString(),
        timeMax.toISOString()
      );
      
      // Get local events
      const { openDB } = await import('idb');
      const db = await openDB('gardening-calendar');
      const localEvents = await db.getAll('events');
      
      const syncResults = {
        imported: 0,
        updated: 0,
        exported: 0,
        conflicts: [],
        errors: []
      };
      
      // Process Google events
      for (const googleEvent of googleEvents) {
        try {
          if (googleEvent.plantingId) {
            // Event has plant ID, try to match with local event
            const localEvent = localEvents.find(e => 
              e.id === googleEvent.id || 
              (e.plantingId === googleEvent.plantingId && 
               e.date === googleEvent.date && 
               e.type === googleEvent.type)
            );
            
            if (localEvent) {
              // Update local event if Google version is newer
              const localModified = new Date(localEvent.lastModified || 0);
              const googleModified = new Date(googleEvent.lastModified);
              
              if (googleModified > localModified) {
                await db.put('events', {
                  ...localEvent,
                  title: googleEvent.title,
                  description: googleEvent.description,
                  lastModified: googleEvent.lastModified,
                  googleEventId: googleEvent.googleEventId
                });
                syncResults.updated++;
              }
            } else {
              // Import new event from Google
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
              syncResults.imported++;
            }
          } else {
            // Generic gardening event without plant ID
            const existingEvent = localEvents.find(e => 
              e.title === googleEvent.title && 
              e.date === googleEvent.date
            );
            
            if (!existingEvent) {
              const newEvent = {
                title: googleEvent.title,
                date: googleEvent.date,
                type: googleEvent.type,
                description: googleEvent.description,
                googleEventId: googleEvent.googleEventId,
                lastModified: googleEvent.lastModified
              };
              await db.add('events', newEvent);
              syncResults.imported++;
            }
          }
        } catch (error) {
          syncResults.errors.push({
            event: googleEvent,
            error: error.message
          });
        }
      }
      
      // Export local events that aren't in Google Calendar
      const googleEventIds = new Set(googleEvents.map(e => e.googleEventId).filter(Boolean));
      const localEventsToExport = localEvents.filter(e => !e.googleEventId || !googleEventIds.has(e.googleEventId));
      
      for (const localEvent of localEventsToExport) {
        try {
          const googleEvent = await this.createEvent(localEvent);
          
          // Update local event with Google event ID
          await db.put('events', {
            ...localEvent,
            googleEventId: googleEvent.id,
            lastModified: new Date().toISOString()
          });
          
          syncResults.exported++;
        } catch (error) {
          syncResults.errors.push({
            event: localEvent,
            error: error.message
          });
        }
      }
      
      return syncResults;
      
    } catch (error) {
      console.error('Bidirectional sync failed:', error);
      throw new Error('Failed to perform bidirectional sync');
    }
  }

  // Get current user info
  async getUserInfo() {
    if (!this.isSignedIn) return null;
    
    try {
      const authInstance = this.gapi.auth2.getAuthInstance();
      const user = authInstance.currentUser.get();
      const profile = user.getBasicProfile();
      
      return {
        name: profile.getName(),
        email: profile.getEmail(),
        imageUrl: profile.getImageUrl()
      };
    } catch (error) {
      console.error('Failed to get user info:', error);
      return null;
    }
  }
}

// Create singleton instance
export const googleCalendar = new GoogleCalendarIntegration();

// Enhanced Settings management with sync options
export class GoogleCalendarSettings {
  constructor() {
    this.storageKey = 'googleCalendarSettings';
  }

  // Save settings to localStorage
  save(settings) {
    localStorage.setItem(this.storageKey, JSON.stringify(settings));
  }

  // Load settings from localStorage
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
      syncInterval: 'manual', // 'manual', 'hourly', 'daily'
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
        importTimeRange: '1year', // '6months', '1year', '2years', 'all'
        conflictResolution: 'newer' // 'newer', 'local', 'google'
      }
    };
  }

  // Clear settings
  clear() {
    localStorage.removeItem(this.storageKey);
  }
}

export const googleCalendarSettings = new GoogleCalendarSettings();