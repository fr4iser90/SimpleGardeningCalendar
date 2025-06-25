/**
 * Herbs Plants Index
 * Exports all herb plants including cannabis (with tags)
 */

import { basil } from './basil.js';
import { cannabis_indica } from './cannabis_indica.js';
import { cannabis_sativa } from './cannabis_sativa.js';
import { cannabis_autoflower } from './cannabis_autoflower.js';

// Temporary placeholder - will be populated from db.js
export const HERBS_PLANTS = {
  basil,
  cannabis_indica,
  cannabis_sativa,
  cannabis_autoflower,
};

export { basil, cannabis_indica, cannabis_sativa, cannabis_autoflower };

export default HERBS_PLANTS;
