/**
 * Flowers Category
 * Ornamental flowers and decorative plants
 */

// Import flower plants
import lavender from './lavender.js';
import roses from './roses.js';
import sunflowers from './sunflowers.js';

// Export all flower plants
export const it = {
  ...lavender,
  ...roses,
  ...sunflowers,
};

// Export individual plants for direct access
export { lavender, roses, sunflowers };

export default it;
