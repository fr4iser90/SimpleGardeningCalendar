import { openDB } from 'idb';

export function showClearCalendarModal() {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-red-600 dark:text-red-400">
          <i class="fas fa-exclamation-triangle mr-2"></i>Clear Calendar
        </h2>
        <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <i class="fas fa-times text-xl"></i>
        </button>
      </div>
      
      <div class="mb-6 text-gray-700 dark:text-gray-300">
        <p class="mb-3">⚠️ <strong>Warning:</strong> This action will permanently delete:</p>
        <ul class="list-disc list-inside space-y-1 text-sm">
          <li>All calendar events</li>
          <li>All plantings and their data</li>
          <li>All plant notes</li>
          <li>All growth tracking information</li>
        </ul>
        <p class="mt-3 text-sm text-red-600 dark:text-red-400">
          <strong>This action cannot be undone!</strong>
        </p>
      </div>
      
      <div class="mb-4">
        <label class="flex items-center">
          <input type="checkbox" id="confirmClear" class="mr-2">
          <span class="text-sm dark:text-gray-300">I understand this will delete all my garden data</span>
        </label>
      </div>
      
      <div class="flex space-x-3">
        <button onclick="this.closest('.fixed').remove()" class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
          Cancel
        </button>
        <button onclick="clearAllCalendarData()" class="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed" id="clearBtn" disabled>
          Clear All Data
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Enable/disable clear button based on checkbox
  const checkbox = document.getElementById('confirmClear');
  const clearBtn = document.getElementById('clearBtn');
  
  checkbox.addEventListener('change', function() {
    clearBtn.disabled = !this.checked;
  });
}

// Function to clear all calendar data
async function clearAllCalendarData() {
  const confirmCheckbox = document.getElementById('confirmClear');
  if (!confirmCheckbox.checked) {
    alert('Please confirm that you understand this action will delete all data.');
    return;
  }
  
  const clearBtn = document.getElementById('clearBtn');
  const originalText = clearBtn.textContent;
  clearBtn.textContent = 'Clearing...';
  clearBtn.disabled = true;
  
  try {
    const db = await openDB('gardening-calendar');
    const tx = db.transaction(['events', 'plantings', 'plantNotes'], 'readwrite');
    
    // Clear all stores
    await tx.objectStore('events').clear();
    await tx.objectStore('plantings').clear();
    await tx.objectStore('plantNotes').clear();
    
    await tx.done;
    
    // Close modal
    document.querySelector('.fixed').remove();
    
    // Refresh calendar
    if (window.calendar) {
      window.calendar.refetchEvents();
    }
    
    // Refresh the app sidebar data
    const refreshEvent = new CustomEvent('refreshSidebar');
    document.dispatchEvent(refreshEvent);
    
    // Show success message
    showNotification('Calendar cleared successfully', 'success');
    
  } catch (error) {
    console.error('Error clearing calendar:', error);
    showNotification('Failed to clear calendar', 'error');
    clearBtn.textContent = originalText;
    clearBtn.disabled = false;
  }
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
  
  notification.className = `fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-x-full`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.classList.remove('translate-x-full');
  }, 100);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.classList.add('translate-x-full');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 5000);
}

// Make functions globally available
window.showClearCalendarModal = showClearCalendarModal;
window.clearAllCalendarData = clearAllCalendarData;
