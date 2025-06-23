/**
 * JSON Handler - Import/Export for JSON format
 * Handles JSON calendar data import and export
 */

import { readFileAsText } from '../../utils/fileUtils.js';

export class JsonHandler {
  /**
   * Import JSON file
   */
  static async import(file) {
    try {
      const content = await readFileAsText(file);
      const data = JSON.parse(content);
      
      // Validate JSON structure
      this.validateSchema(data);
      
      return {
        events: data.events || [],
        plantings: data.plantings || [],
        metadata: data.metadata || {},
        format: 'JSON'
      };
    } catch (error) {
      throw new Error(`JSON Import Error: ${error.message}`);
    }
  }
  
  /**
   * Export data as JSON
   */
  static async export(data, options = {}) {
    try {
      const exportData = {
        metadata: {
          exportDate: new Date().toISOString(),
          version: '1.0',
          source: 'SimpleGardeningCalendar',
          eventsCount: data.events?.length || 0,
          plantingsCount: data.plantings?.length || 0,
          ...options.metadata
        },
        events: data.events || [],
        plantings: data.plantings || []
      };
      
      return JSON.stringify(exportData, null, 2);
    } catch (error) {
      throw new Error(`JSON Export Error: ${error.message}`);
    }
  }
  
  /**
   * Validate JSON schema
   */
  static validateSchema(data) {
    if (typeof data !== 'object' || data === null) {
      throw new Error('Invalid JSON: Root must be an object');
    }
    
    // Check if events array exists and is valid
    if (data.events && !Array.isArray(data.events)) {
      throw new Error('Invalid JSON: events must be an array');
    }
    
    // Check if plantings array exists and is valid
    if (data.plantings && !Array.isArray(data.plantings)) {
      throw new Error('Invalid JSON: plantings must be an array');
    }
    
    // Validate individual events
    if (data.events) {
      data.events.forEach((event, index) => {
        if (!event.title || !event.date) {
          throw new Error(`Invalid event at index ${index}: Missing title or date`);
        }
        
        // Validate date format
        if (!/^\d{4}-\d{2}-\d{2}$/.test(event.date)) {
          throw new Error(`Invalid event at index ${index}: Date must be in YYYY-MM-DD format`);
        }
      });
    }
    
    return true;
  }
  
  /**
   * Get file extension
   */
  static getFileExtension() {
    return 'json';
  }
  
  /**
   * Get MIME type
   */
  static getMimeType() {
    return 'application/json';
  }
} 