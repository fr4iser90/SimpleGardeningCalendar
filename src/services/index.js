/**
 * Services Index
 * Exports all service functions for easy importing
 */

// Google Calendar Services
export * from './GoogleCalendar/GoogleCalendarApi.js';
export * from './GoogleCalendar/GoogleCalendarSync.js';
export * from './GoogleCalendar/GoogleCalendarUI.js';
export * from './GoogleCalendar/GoogleCalendarSettings.js';

// Event Service
export * from './EventService.js';

// Plant Service
export * from './PlantService.js';

// Template Service
export * from './TemplateService.js';

// Convenience exports for common operations
export { default as EventService } from './EventService.js';
export { default as PlantService } from './PlantService.js';
export { default as TemplateService } from './TemplateService.js'; 