// Traductions UI des plantes françaises (si nécessaire)
// Les données des plantes elles-mêmes viennent des fichiers de données, pas des traductions

import { fr as flowers } from './flowers/index.js';

export const fr = {
  ...flowers,
  // Seulement les traductions UI spécifiques ici, si nécessaire
  // Les données des plantes sont dans src/core/db/plants/...
};
