/**
 * iCal Handler - .ics format import/export
 * Supports iCal format for integration with other calendar apps
 */

export class ICalHandler {
  /**
   * Import iCal file
   */
  static async import(file) {
    const text = await file.text();
    const events = this.parseICalEvents(text);
    
    return {
      events: events,
      plantings: [],
      metadata: {
        format: 'iCal',
        source: file.name,
        importDate: new Date().toISOString(),
        eventsCount: events.length
      }
    };
  }
  
  /**
   * Export data to iCal format
   */
  static async export(data, options = {}) {
    const icalData = this.generateICalString(data.events, options);
    return new Blob([icalData], { type: 'text/calendar;charset=utf-8' });
  }
  
  /**
   * Parse iCal events from string
   */
  static parseICalEvents(icalString) {
    const events = [];
    const lines = icalString.split(/\r?\n/);
    let currentEvent = null;
    let isInEvent = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (line === 'BEGIN:VEVENT') {
        isInEvent = true;
        currentEvent = {
          type: 'event',
          priority: 'medium'
        };
      } else if (line === 'END:VEVENT' && isInEvent) {
        if (currentEvent && currentEvent.title && currentEvent.date) {
          events.push(currentEvent);
        }
        currentEvent = null;
        isInEvent = false;
      } else if (isInEvent && currentEvent) {
        this.parseEventProperty(line, currentEvent);
      }
    }
    
    return events;
  }
  
  /**
   * Parse individual event property
   */
  static parseEventProperty(line, event) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;
    
    const property = line.substring(0, colonIndex).toUpperCase();
    const value = line.substring(colonIndex + 1);
    
    switch (property) {
      case 'SUMMARY':
        event.title = this.unescapeText(value);
        break;
        
      case 'DTSTART':
      case 'DTSTART;VALUE=DATE':
        event.date = this.parseICalDate(value);
        break;
        
      case 'DESCRIPTION':
        event.description = this.unescapeText(value);
        break;
        
      case 'CATEGORIES':
        event.type = this.mapCategoryToType(value);
        break;
        
      case 'PRIORITY':
        event.priority = this.mapPriorityLevel(value);
        break;
        
      case 'UID':
        event.originalId = value;
        break;
    }
  }
  
  /**
   * Generate iCal string from events
   */
  static generateICalString(events, options = {}) {
    const now = new Date();
    const timestamp = now.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    let ical = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//SimpleGardeningCalendar//Garden Calendar//DE',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'X-WR-CALNAME:Gartenkalender',
      'X-WR-CALDESC:Gartenarbeiten und Pflanzungen'
    ];
    
    events.forEach(event => {
      const eventLines = this.generateEventLines(event, timestamp);
      ical = ical.concat(eventLines);
    });
    
    ical.push('END:VCALENDAR');
    
    return ical.join('\r\n');
  }
  
  /**
   * Generate iCal lines for single event
   */
  static generateEventLines(event, timestamp) {
    const uid = event.originalId || `${event.id || Date.now()}-${Math.random().toString(36).substr(2, 9)}@gardenapp.local`;
    const dtstart = this.formatICalDate(event.date);
    
    return [
      'BEGIN:VEVENT',
      `UID:${uid}`,
      `DTSTART;VALUE=DATE:${dtstart}`,
      `DTEND;VALUE=DATE:${dtstart}`,
      `DTSTAMP:${timestamp}`,
      `CREATED:${timestamp}`,
      `LAST-MODIFIED:${timestamp}`,
      `SUMMARY:${this.escapeText(event.title)}`,
      `DESCRIPTION:${this.escapeText(event.description || '')}`,
      `CATEGORIES:${this.mapTypeToCategory(event.type)}`,
      `PRIORITY:${this.mapPriorityToLevel(event.priority)}`,
      'TRANSP:TRANSPARENT',
      'STATUS:CONFIRMED',
      'END:VEVENT'
    ];
  }
  
  /**
   * Parse iCal date format
   */
  static parseICalDate(dateStr) {
    // Handle different iCal date formats
    if (dateStr.includes('T')) {
      // DateTime format: YYYYMMDDTHHMMSSZ
      const cleanDate = dateStr.replace(/[TZ]/g, '');
      const year = cleanDate.substr(0, 4);
      const month = cleanDate.substr(4, 2);
      const day = cleanDate.substr(6, 2);
      return `${year}-${month}-${day}`;
    } else {
      // Date only format: YYYYMMDD
      const year = dateStr.substr(0, 4);
      const month = dateStr.substr(4, 2);
      const day = dateStr.substr(6, 2);
      return `${year}-${month}-${day}`;
    }
  }
  
  /**
   * Format date to iCal format
   */
  static formatICalDate(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  }
  
  /**
   * Map category to event type
   */
  static mapCategoryToType(category) {
    const categoryMap = {
      'GARDENING': 'maintenance',
      'PLANTING': 'planting',
      'HARVESTING': 'harvesting',
      'PRUNING': 'pruning',
      'WATERING': 'watering',
      'FERTILIZING': 'fertilizing'
    };
    
    return categoryMap[category.toUpperCase()] || 'event';
  }
  
  /**
   * Map event type to category
   */
  static mapTypeToCategory(type) {
    const typeMap = {
      'maintenance': 'GARDENING',
      'planting': 'PLANTING',
      'harvesting': 'HARVESTING',
      'pruning': 'PRUNING',
      'watering': 'WATERING',
      'fertilizing': 'FERTILIZING'
    };
    
    return typeMap[type] || 'GARDENING';
  }
  
  /**
   * Map priority level
   */
  static mapPriorityLevel(priority) {
    const priorityMap = {
      '1': 'high',
      '2': 'high',
      '3': 'high',
      '4': 'medium',
      '5': 'medium',
      '6': 'medium',
      '7': 'low',
      '8': 'low',
      '9': 'low'
    };
    
    return priorityMap[priority] || 'medium';
  }
  
  /**
   * Map priority to level
   */
  static mapPriorityToLevel(priority) {
    const levelMap = {
      'high': '2',
      'medium': '5',
      'low': '8'
    };
    
    return levelMap[priority] || '5';
  }
  
  /**
   * Escape text for iCal format
   */
  static escapeText(text) {
    if (!text) return '';
    return text
      .replace(/\\/g, '\\\\')
      .replace(/;/g, '\\;')
      .replace(/,/g, '\\,')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '');
  }
  
  /**
   * Unescape text from iCal format
   */
  static unescapeText(text) {
    if (!text) return '';
    return text
      .replace(/\\n/g, '\n')
      .replace(/\\,/g, ',')
      .replace(/\\;/g, ';')
      .replace(/\\\\/g, '\\');
  }
  
  /**
   * Get MIME type
   */
  static getMimeType() {
    return 'text/calendar';
  }
  
  /**
   * Get file extension
   */
  static getFileExtension() {
    return 'ics';
  }
} 