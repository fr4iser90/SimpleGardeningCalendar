/**
 * Plant Categories Definition
 * Defines all available plant categories and their metadata
 */

export const PLANT_CATEGORIES = {
  VEGETABLES: 'Vegetables',
  HERBS: 'Herbs',
  FRUITS: 'Fruits', 
  FRUIT_TREES: 'Fruit Trees',
  FLOWERS: 'Flowers'
};

export const PLANT_TAGS = {
  ROOT: 'Root Vegetable',
  LEAFY: 'Leafy Green',
  LEGUME: 'Legume',
  SPRING: 'Spring',
  SUMMER: 'Summer',
  FALL: 'Fall',
  WINTER: 'Winter',
  PERENNIAL: 'Perennial',
  ANNUAL: 'Annual',
  BIENNIAL: 'Biennial',
  CANNABIS: 'Cannabis'  // Optional, länderabhängig
};

export const CATEGORY_METADATA = {
  [PLANT_CATEGORIES.VEGETABLES]: {
    name: 'Vegetables',
    description: 'Common garden vegetables for food production',
    icon: '🥕',
    color: '#F59E0B'
  },
  [PLANT_CATEGORIES.HERBS]: {
    name: 'Herbs',
    description: 'Culinary and medicinal herbs',
    icon: '🌱',
    color: '#10B981'
  },
  [PLANT_CATEGORIES.FRUITS]: {
    name: 'Fruits',
    description: 'Small fruit plants and berry bushes',
    icon: '🍓',
    color: '#EF4444'
  },
  [PLANT_CATEGORIES.FRUIT_TREES]: {
    name: 'Fruit Trees',
    description: 'Larger fruit-bearing trees',
    icon: '🍎',
    color: '#DC2626'
  },
  [PLANT_CATEGORIES.FLOWERS]: {
    name: 'Flowers',
    description: 'Ornamental flowers and decorative plants',
    icon: '🌸',
    color: '#EC4899'
  }
};

// Country-specific settings for cannabis display
export const COUNTRY_SETTINGS = {
  'DE': { showCannabis: true },   // ✅ Korrigiert - Cannabis in DE erlaubt!
  'AT': { showCannabis: false },
  'CH': { showCannabis: false },
  'NL': { showCannabis: true },
  'CA': { showCannabis: true },
  'US': { showCannabis: false }, // Default, can be overridden by state
  'ES': { showCannabis: false },
  'FR': { showCannabis: false },
  'IT': { showCannabis: false }
};

export const GROWING_ENVIRONMENTS = {
  INDOOR: 'indoor',
  OUTDOOR: 'outdoor'
};

export const SEASONAL_REGIONS = {
  TEMPERATE_NORTH: 'temperate_north',
  MEDITERRANEAN: 'mediterranean'
};

export default PLANT_CATEGORIES; 