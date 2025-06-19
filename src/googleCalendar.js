// Google Calendar API Integration - Simplified with Client ID only
class GoogleCalendarIntegration {
  constructor() {
    this.isSignedIn = false;
    this.gapi = null;
    this.clientId = null;
    this.calendarId = 'primary'; // Default to primary calendar
    this.isInitialized = false;
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

  // Create an event in Google Calendar
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

  // Convert our event format to Google Calendar format
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
    
    return {
      summary: title,
      description: eventData.description || '',
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

// Settings management
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
      syncTypes: {
        planting: true,
        watering: true,
        fertilizing: true,
        harvesting: true,
        maintenance: true
      }
    };
  }

  // Clear settings
  clear() {
    localStorage.removeItem(this.storageKey);
  }
}

export const googleCalendarSettings = new GoogleCalendarSettings();