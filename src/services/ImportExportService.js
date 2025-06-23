/**
 * Import/Export Service - Main orchestrator
 * Central service for all import/export operations
 */

import { detectFileFormat, validateFile } from '../utils/fileUtils.js';
import { JsonHandler } from './formats/JsonHandler.js';
import { getAllEvents, addEvent } from './EventService.js';
import { getAllPlantings } from './PlantService.js';
import { showNotification } from '../utils/notifications.js';
import { t } from '../core/i18n/index.js';

export class ImportExportService {
  /**
   * Import file with automatic format detection
   */
  static async importFile(file, options = {}) {
    try {
      // Validate file
      const { format } = validateFile(file);
      
      // Get appropriate handler
      const handler = this.getHandler(format);
      if (!handler) {
        throw new Error(`No handler available for format: ${format}`);
      }
      
      // Import data
      const importedData = await handler.import(file);
      
      // Validate imported data
      const validatedData = await this.validateImportData(importedData);
      
      // Handle conflicts if any
      const finalData = await this.handleConflicts(validatedData, options);
      
      // Merge with existing data
      const result = await this.mergeWithExisting(finalData);
      
      return {
        success: true,
        imported: result.imported,
        skipped: result.skipped,
        format: format,
        metadata: importedData.metadata
      };
      
    } catch (error) {
      console.error('Import failed:', error);
      throw error;
    }
  }
  
  /**
   * Export data in specified format
   */
  static async exportData(format, options = {}) {
    try {
      // Get data to export
      const data = await this.gatherExportData(options);
      
      if (!data.events.length && !data.plantings.length) {
        throw new Error('No data to export');
      }
      
      // Get appropriate handler
      const handler = this.getHandler(format);
      if (!handler) {
        throw new Error(`No handler available for format: ${format}`);
      }
      
      // Export data
      const exportedData = await handler.export(data, options);
      
      return {
        data: exportedData,
        filename: this.generateFilename(format, options),
        mimeType: handler.getMimeType(),
        metadata: {
          eventsCount: data.events.length,
          plantingsCount: data.plantings.length,
          format: format
        }
      };
      
    } catch (error) {
      console.error('Export failed:', error);
      throw error;
    }
  }
  
  /**
   * Get format handler
   */
  static getHandler(format) {
    switch (format.toUpperCase()) {
      case 'JSON':
        return JsonHandler;
      default:
        return null;
    }
  }
  
  /**
   * Validate imported data structure
   */
  static async validateImportData(data) {
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid import data structure');
    }
    
    const events = data.events || [];
    const plantings = data.plantings || [];
    
    // Validate events
    events.forEach((event, index) => {
      if (!event.title || !event.date) {
        throw new Error(`Event ${index + 1}: Missing required fields (title, date)`);
      }
    });
    
    return {
      events: events,
      plantings: plantings,
      metadata: data.metadata || {}
    };
  }
  
  /**
   * Handle import conflicts
   */
  static async handleConflicts(data, options = {}) {
    // For now, simple implementation - in future add conflict resolution UI
    const conflictStrategy = options.conflictStrategy || 'skip';
    
    const existingEvents = await getAllEvents();
    const newEvents = [];
    const skippedEvents = [];
    
    for (const event of data.events) {
      const exists = existingEvents.some(existing => 
        existing.title === event.title && 
        existing.date === event.date
      );
      
      if (exists) {
        if (conflictStrategy === 'overwrite') {
          newEvents.push(event);
        } else if (conflictStrategy === 'duplicate') {
          newEvents.push({ ...event, title: `${event.title} (Import)` });
        } else {
          skippedEvents.push(event);
        }
      } else {
        newEvents.push(event);
      }
    }
    
    return {
      events: newEvents,
      plantings: data.plantings,
      skipped: skippedEvents,
      metadata: data.metadata
    };
  }
  
  /**
   * Merge imported data with existing database
   */
  static async mergeWithExisting(data) {
    let imported = 0;
    let skipped = data.skipped?.length || 0;
    
    // Import events
    for (const event of data.events) {
      try {
        await addEvent({
          ...event,
          importSource: 'json',
          importTimestamp: new Date().toISOString()
        });
        imported++;
      } catch (error) {
        console.error('Failed to import event:', event, error);
        skipped++;
      }
    }
    
    // TODO: Import plantings when ready
    
    return { imported, skipped };
  }
  
  /**
   * Gather data for export
   */
  static async gatherExportData(options = {}) {
    const events = await getAllEvents();
    const plantings = await getAllPlantings();
    
    // Filter by date range if specified
    let filteredEvents = events;
    if (options.dateRange) {
      const { start, end } = options.dateRange;
      filteredEvents = events.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate >= new Date(start) && eventDate <= new Date(end);
      });
    }
    
    return {
      events: filteredEvents,
      plantings: options.includePlantings ? plantings : []
    };
  }
  
  /**
   * Generate filename for export
   */
  static generateFilename(format, options = {}) {
    const date = new Date().toISOString().split('T')[0];
    const extension = this.getHandler(format)?.getFileExtension() || format.toLowerCase();
    
    if (options.filename) {
      return `${options.filename}.${extension}`;
    }
    
    return `garden-calendar-${date}.${extension}`;
  }
  
  /**
   * Detect file format from file
   */
  static detectFileFormat(file) {
    return detectFileFormat(file);
  }
} 