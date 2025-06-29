/**
 * Utility function to sanitize HTML content using DOMPurify to prevent XSS attacks.
 */
import DOMPurify from 'dompurify';

/**
 * Sanitizes the provided HTML content to prevent XSS attacks.
 * @param {string} content - The HTML content to sanitize.
 * @returns {string} - The sanitized HTML content.
 */
export function sanitizeHTML(content) {
  return DOMPurify.sanitize(content);
}
