// Main Calendar Module - Now using modular components
import { initializeCalendar } from './components/calendar/CalendarView.js';
import { createCalendarControls } from './components/calendar/CalendarActions.js';
import { initializeLocalCalendarStatusBar } from './components/app/LocalCalendarStatusBar.js';

export async function initializeCalendarApp() {
  const calendarEl = document.getElementById('calendar');
  
  // Initialize the calendar view
  const calendar = await initializeCalendar();
  
  // Create and add the control buttons
  createCalendarControls(calendarEl);
  
  // Manually trigger the initial status update, as it's now decoupled
  if (window.updateGoogleCalendarStatus) {
    window.updateGoogleCalendarStatus();
  }
  initializeLocalCalendarStatusBar();

  return calendar;
}

// Export for backward compatibility
export { initializeCalendar };
