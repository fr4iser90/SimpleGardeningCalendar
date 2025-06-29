// Notification Stack System
export function showNotification(message, type = 'info') {
  // Create or get the notification container
  let container = document.getElementById('notification-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'notification-container';
    container.className = 'fixed top-4 right-4 flex flex-col items-end gap-2 z-50';
    document.body.appendChild(container);
  }

  // Create notification element
  const notification = document.createElement('div');
  const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
  notification.className = `${bgColor} text-white px-6 py-3 rounded-lg shadow-lg min-w-[220px] max-w-xs mb-1 opacity-0 translate-y-4 transition-all duration-300`;
  notification.textContent = message;

  // Add to container (at the end)
  container.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.classList.remove('opacity-0', 'translate-y-4');
    notification.classList.add('opacity-100', 'translate-y-0');
  }, 50);

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.classList.remove('opacity-100', 'translate-y-0');
    notification.classList.add('opacity-0', 'translate-y-4');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
      // Remove container if empty
      if (container.childElementCount === 0) {
        container.parentNode.removeChild(container);
      }
    }, 300);
  }, 5000);
} 