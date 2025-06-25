import { it as ui } from './ui.js';
import { it as categories } from './categories.js';
import { it as plants } from './plants/index.js';

export const it = {
  ...ui,
  ...categories,
  ...plants,
};
