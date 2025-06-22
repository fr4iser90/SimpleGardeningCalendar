import { t } from '../../core/i18n/index.js';

/**
 * Notifications - Central notification system
 * Extends the basic showNotification from utils/notifications.js
 */

// Re-export the basic notification function
export { showNotification } from '../../utils/notifications.js';

// Enhanced notification types
export function showSuccessNotification(message, duration = 5000) {
  return showNotification(message, 'success');
}

export function showErrorNotification(message, duration = 7000) {
  return showNotification(message, 'error');
}

export function showInfoNotification(message, duration = 5000) {
  return showNotification(message, 'info');
}

export function showWarningNotification(message, duration = 6000) {
  return showNotification(message, 'warning');
}

// Specific notification functions for common operations
export function showTemplateImportSuccess(count, name, year) {
  return showSuccessNotification(
    t('template.import.success', { count, name, year })
  );
}

export function showTemplateImportError() {
  return showErrorNotification(t('template.import.error'));
}

export function showEventAddedNotification() {
  return showSuccessNotification(t('notification.event_added'));
}

export function showPlantingAddedNotification() {
  return showSuccessNotification(t('notification.planting_added'));
}

export function showEventSaveError() {
  return showErrorNotification(t('notification.error_saving'));
}

export function showGoogleCalendarSyncSuccess(operation, details) {
  let message = '';
  switch (operation) {
    case 'export':
      message = `Export complete: ${details.synced} events exported.`;
      break;
    case 'import':
      message = `Import complete: ${details.imported} new, ${details.updated} updated.`;
      break;
    case 'bidirectional':
      message = `Bidirectional sync complete: ${details.exported} exported, ${details.imported} imported, ${details.updated} updated.`;
      break;
    default:
      message = 'Sync completed successfully.';
  }
  return showSuccessNotification(message);
}

export function showGoogleCalendarSyncError(error) {
  return showErrorNotification(`Sync failed: ${error.message}`);
}

export function showGoogleCalendarConnectionSuccess() {
  return showSuccessNotification('Connected to Google Calendar successfully!');
}

export function showGoogleCalendarConnectionError(error) {
  return showErrorNotification(`Connection failed: ${error.message}`);
}

export function showDataClearSuccess() {
  return showSuccessNotification('Calendar cleared successfully');
}

export function showDataClearError() {
  return showErrorNotification('Failed to clear calendar');
}

export function showSettingsSavedNotification() {
  return showSuccessNotification('Settings saved successfully!');
}

export function showSignOutSuccess() {
  return showSuccessNotification('Signed out successfully');
}

export function showSignOutError(error) {
  return showErrorNotification(`Sign out failed: ${error.message}`);
}

// Toast notification with custom styling
export function showToastNotification(message, type = 'info', options = {}) {
  const {
    duration = 5000,
    position = 'top-right',
    showIcon = true,
    showCloseButton = true
  } = options;

  const notification = document.createElement('div');
  
  // Position classes
  const positionClasses = {
    'top-right': 'fixed top-4 right-4',
    'top-left': 'fixed top-4 left-4',
    'bottom-right': 'fixed bottom-4 right-4',
    'bottom-left': 'fixed bottom-4 left-4',
    'top-center': 'fixed top-4 left-1/2 transform -translate-x-1/2',
    'bottom-center': 'fixed bottom-4 left-1/2 transform -translate-x-1/2'
  };

  // Color classes
  const colorClasses = {
    success: 'bg-green-500 border-green-600',
    error: 'bg-red-500 border-red-600',
    warning: 'bg-yellow-500 border-yellow-600',
    info: 'bg-blue-500 border-blue-600'
  };

  // Icons
  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };

  const icon = showIcon ? icons[type] : '';
  const closeButton = showCloseButton ? 
    '<button class="ml-2 text-white hover:text-gray-200" onclick="this.parentElement.remove()">✕</button>' : '';

  notification.className = `${positionClasses[position]} ${colorClasses[type]} text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-x-full border`;
  notification.innerHTML = `
    <div class="flex items-center">
      ${icon} <span class="ml-2">${message}</span>${closeButton}
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.classList.remove('translate-x-full');
  }, 100);
  
  // Auto remove
  setTimeout(() => {
    notification.classList.add('translate-x-full');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, duration);
  
  return notification;
}

// Notification queue manager
class NotificationQueue {
  constructor() {
    this.queue = [];
    this.maxNotifications = 3;
    this.isProcessing = false;
  }

  add(notificationFunction, ...args) {
    this.queue.push({ notificationFunction, args });
    this.process();
  }

  async process() {
    if (this.isProcessing || this.queue.length === 0) return;
    
    this.isProcessing = true;
    
    while (this.queue.length > 0) {
      const { notificationFunction, args } = this.queue.shift();
      
      // Wait a bit between notifications
      if (this.queue.length > 0) {
        await new Promise(resolve => setTimeout(resolve, 300));
      }
      
      notificationFunction(...args);
    }
    
    this.isProcessing = false;
  }

  clear() {
    this.queue = [];
  }
}

// Global notification queue instance
export const notificationQueue = new NotificationQueue();

// Queue-based notification functions
export function queueNotification(notificationFunction, ...args) {
  notificationQueue.add(notificationFunction, ...args);
}

// Export for global use
window.showSuccessNotification = showSuccessNotification;
window.showErrorNotification = showErrorNotification;
window.showInfoNotification = showInfoNotification;
window.showWarningNotification = showWarningNotification;
window.showToastNotification = showToastNotification;
window.notificationQueue = notificationQueue;
