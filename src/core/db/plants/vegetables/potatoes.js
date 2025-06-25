/**
 * Potatoes Plant Data
 * Growing information for Potatoes
 */

import { PLANT_TAGS } from '../categories.js';

export const potatoes = {
  name: 'Potatoes',
  category: 'Vegetables',
  tags: [PLANT_TAGS.ROOT, PLANT_TAGS.ANNUAL],
  phases: {
    sprouting: {
      days: 14,
      description: 'Eye sprouting',
      care: 'Keep seed potatoes in warm, dark place',
      watering: {
        interval: 1,
        description: 'Keep soil moist during sprouting',
      },
      fertilizing: {
        interval: 0,
        description: 'No fertilizing during sprouting',
      },
    },
    vegetative: {
      days: 30,
      description: 'Leaf and stem growth',
      care: 'Start hilling when plants are 6 inches tall',
      watering: { interval: 7, description: 'Weekly deep watering' },
      fertilizing: {
        interval: 14,
        description: 'Fertilize every 2 weeks during vegetative growth',
      },
    },
    tuberization: {
      days: 40,
      description: 'Tuber formation',
      care: 'Hill soil around base every 2-3 weeks',
      watering: { interval: 7, description: 'Weekly deep watering' },
      fertilizing: {
        interval: 21,
        description: 'Fertilize every 3 weeks during tuberization',
      },
    },
    bulking: {
      days: 45,
      description: 'Tuber growth',
      care: 'Maintain consistent moisture, continue hilling',
      watering: { interval: 7, description: 'Weekly deep watering' },
      fertilizing: {
        interval: 21,
        description: 'Fertilize every 3 weeks during bulking',
      },
    },
    maturation: {
      days: 20,
      description: 'Plant dies back, tubers ready',
      care: 'Reduce watering when plants start yellowing',
      watering: {
        interval: 0,
        description: 'No watering needed during maturation',
      },
      fertilizing: {
        interval: 0,
        description: 'No fertilizing during maturation',
      },
    },
  },
  careTips: {
    watering: 'Regular watering (1-2 inches per week), avoid waterlogging',
    fertilizing:
      'High phosphorus fertilizer at planting, side-dress when flowering',
    sunlight: 'Full sun (6+ hours daily)',
    spacing: '12 inches apart, rows 3 feet apart',
    soil: 'Well-draining, slightly acidic soil (pH 5.0-6.0)',
    hilling: 'Hill soil around stems to prevent green tubers',
  },
  commonProblems: {
    Scab: 'Keep soil pH below 5.5, maintain even moisture',
    'Hollow Heart': 'Irregular growing conditions - maintain consistent care',
    'Green Tubers': 'Exposure to light - ensure proper hilling',
    'Colorado Potato Beetle':
      'Orange and black striped beetles - hand pick or use row covers',
  },
};

export default potatoes;
