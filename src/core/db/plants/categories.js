/**
 * Plant Categories Definition
 * Defines all available plant categories and their metadata
 */

export const PLANT_CATEGORIES = {
  CANNABIS: 'Cannabis',
  VEGETABLES: 'Vegetables', 
  HERBS: 'Herbs',
  FRUITS: 'Fruits',
  FRUIT_TREES: 'Fruit Trees'
};

export const CATEGORY_METADATA = {
  [PLANT_CATEGORIES.CANNABIS]: {
    name: 'Cannabis',
    description: 'Cannabis varieties with indoor/outdoor growing options',
    legalNote: 'Check local laws before cultivation. This information is for educational purposes only.',
    icon: '🌿',
    color: '#10B981'
  },
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
  }
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