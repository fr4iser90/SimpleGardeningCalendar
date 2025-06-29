/**
 * Modal utility functions for reliable modal management
 */

/**
 * Close a specific modal by finding the button that triggered the action
 * @param {string} buttonSelector - CSS selector to find the button
 * @param {string} actionText - Text or attribute to identify the button
 * @returns {boolean} - True if modal was closed, false otherwise
 */
export function closeModalByButton(buttonSelector, actionText) {
  const button = document.querySelector(`${buttonSelector}[onclick*="${actionText}"]`);
  if (button) {
    const modal = button.closest('.fixed');
    if (modal) {
      modal.remove();
      return true;
    }
  }
  return false;
}

/**
 * Close the last opened modal (most recent one)
 * @returns {boolean} - True if modal was closed, false otherwise
 */
export function closeLastModal() {
  const modals = document.querySelectorAll('.fixed');
  if (modals.length > 0) {
    modals[modals.length - 1].remove();
    return true;
  }
  return false;
}

/**
 * Close all modals
 * @returns {number} - Number of modals closed
 */
export function closeAllModals() {
  const modals = document.querySelectorAll('.fixed');
  const count = modals.length;
  modals.forEach(modal => modal.remove());
  return count;
}

/**
 * Close modal reliably - tries multiple strategies
 * @param {string} buttonSelector - CSS selector for the button
 * @param {string} actionText - Text to identify the button
 * @returns {boolean} - True if modal was closed, false otherwise
 */
export function closeModalReliably(buttonSelector = 'button', actionText = '') {
  // Strategy 1: Find button and close its modal
  if (actionText && closeModalByButton(buttonSelector, actionText)) {
    return true;
  }
  
  // Strategy 2: Close the last modal
  if (closeLastModal()) {
    return true;
  }
  
  // Strategy 3: Close all modals (fallback)
  const closedCount = closeAllModals();
  return closedCount > 0;
}

/**
 * Add click outside to close functionality to a modal
 * @param {HTMLElement} modal - The modal element
 */
export function addClickOutsideToClose(modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
}

/**
 * Add escape key to close functionality to a modal
 * @param {HTMLElement} modal - The modal element
 */
export function addEscapeKeyToClose(modal) {
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      modal.remove();
      document.removeEventListener('keydown', handleEscape);
    }
  };
  document.addEventListener('keydown', handleEscape);
  
  // Clean up when modal is removed
  modal.addEventListener('remove', () => {
    document.removeEventListener('keydown', handleEscape);
  });
} 