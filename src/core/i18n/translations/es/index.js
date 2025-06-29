import { es as ui } from './ui.js';
import { es as categories } from './categories.js';
import { es as plants } from './plants/index.js';
import problems from './problems.js';

export const es = {
  ...ui,
  ...categories,
  ...plants,
  ...problems,
};
