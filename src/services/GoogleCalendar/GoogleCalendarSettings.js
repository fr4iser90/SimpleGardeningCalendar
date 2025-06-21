/**
 * Google Calendar Settings
 * Handles settings storage and management for Google Calendar integration
 */

export class GoogleCalendarSettings {
  constructor() {
    this.storageKey = 'googleCalendarSettings';
  }

  save(settings) {
    localStorage.setItem(this.storageKey, JSON.stringify(settings));
  }

  load() {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : {
      clientId: '',
      selectedCalendarId: '',
      autoSync: false,
      bidirectionalSync: false,
      userEmail: '',
      calendarList: {},
      syncTypes: {
        planting: true,
        watering: true,
        fertilizing: true,
        harvesting: true,
        maintenance: true,
        pruning: true,
        transplanting: true,
        pest_control: true
      },
      importSettings: {
        importTimeRange: '6months'
      },
      lastSyncTime: null
    };
  }

  clear() {
    localStorage.removeItem(this.storageKey);
  }
}

// Create settings instance
export const googleCalendarSettings = new GoogleCalendarSettings(); 