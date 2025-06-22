import { showNotification } from '../../utils/notifications.js';

// Calendar switching functionality
export function switchCalendar(calendarId) {
  try {
    const settingsJSON = localStorage.getItem('googleCalendarSettings');
    let settings = settingsJSON ? JSON.parse(settingsJSON) : {};
    
    // Update selected calendar
    settings.selectedCalendarId = calendarId;
    localStorage.setItem('googleCalendarSettings', JSON.stringify(settings));
    
    // Find calendar name for notification
    const calendarName = settings.createdCalendars?.find(cal => cal.id === calendarId)?.name || calendarId;
    
    showNotification(`Switched to calendar: ${calendarName}`, 'success');
    
    // Update status bar if available
    if (window.updateGoogleCalendarStatus) {
      window.updateGoogleCalendarStatus();
    }
    
    // Refresh calendar events if needed
    if (window.calendar) {
      window.calendar.refetchEvents();
    }
    
    // Fire event for other components to listen to
    document.dispatchEvent(new CustomEvent('calendarSwitched', { 
      detail: { calendarId, calendarName } 
    }));
    
  } catch (error) {
    console.error('Failed to switch calendar:', error);
    showNotification('Failed to switch calendar', 'error');
  }
}

// Initialize calendar switch functionality
export function initializeCalendarSwitch() {
  // Make switchCalendar globally available for onclick handlers
  window.switchCalendar = switchCalendar;
  
  console.log('🔄 Calendar Switch initialized');
}
