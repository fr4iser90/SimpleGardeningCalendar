/**
 * Cherry Tree Plant Data
 * Growing information for Cherry Trees
 */

import { PLANT_TAGS } from '../categories.js';

export const cherry_tree = {
  name: 'Cherry Tree',
  category: 'Fruit Trees',
  tags: [PLANT_TAGS.PERENNIAL],
  environments: {
    outdoor: {
      phases: {
        establishment: {
          days: 365,
          description: 'First year establishment',
          care: 'Regular watering, protection from birds',
          watering: {
            interval: 7,
            description: 'Weekly deep watering during establishment',
          },
          fertilizing: {
            interval: 90,
            description: 'Fertilize every 3 months during establishment',
          },
        },
        juvenile: {
          days: 1095,
          description: 'Years 2-4 development',
          care: 'Training pruning, disease prevention',
          watering: {
            interval: 7,
            description: 'Weekly deep watering during juvenile phase',
          },
          fertilizing: {
            interval: 90,
            description: 'Fertilize every 3 months during juvenile phase',
          },
        },
        productive: {
          days: 5475,
          description: 'Productive years 5-20',
          care: 'Harvest timing, bird protection, disease management',
          watering: {
            interval: 7,
            description: 'Weekly deep watering during productive years',
          },
          fertilizing: {
            interval: 90,
            description: 'Fertilize every 3 months during productive years',
          },
        },
        dormancy: {
          days: 120,
          description: 'Winter dormancy',
          care: 'Dormant pruning, trunk protection',
          watering: {
            interval: 14,
            description: 'Minimal watering during dormancy',
          },
          fertilizing: {
            interval: 0,
            description: 'No fertilizing during dormancy',
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-01',
            end: '04-15',
            description: 'Early spring planting',
          },
          harvestWindow: {
            start: '06-01',
            end: '08-15',
            description: 'Early summer harvest',
          },
          pruningWindow: {
            start: '02-01',
            end: '03-15',
            description: 'Late winter pruning',
          },
        },
      },
    },
  },
  careTips: {
    watering:
      'Regular watering but avoid overwatering, good drainage essential',
    fertilizing: 'Light annual feeding, avoid excess nitrogen',
    sunlight: 'Full sun exposure',
    spacing: '20-25 feet apart for sweet cherries, 15-20 feet for sour',
    pruning: 'Minimal pruning, prune in late winter',
    pollination: 'Sweet cherries usually need cross-pollination',
    birdProtection: 'Netting or other bird deterrents essential at harvest',
  },
  commonProblems: {
    'Brown Rot':
      'Fungal disease - remove infected fruit, improve air circulation',
    'Cherry Fruit Fly': 'Maggots in fruit - yellow sticky traps, proper timing',
    'Bacterial Canker':
      'Trunk/branch disease - avoid winter injury, proper pruning',
    Birds: 'Fruit theft - netting, scare devices, early harvest',
  },
};

export default cherry_tree;
