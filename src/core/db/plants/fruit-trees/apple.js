/**
 * Apple Tree Plant Data
 * Growing information for Apple Trees
 */

import { PLANT_TAGS } from '../categories.js';

export const apple_tree = {
  name: 'Apple Tree',
  category: 'Fruit Trees',
  tags: [PLANT_TAGS.PERENNIAL],
  environments: {
    outdoor: {
      phases: {
        establishment: {
          days: 365,
          description: 'First year root establishment',
          care: 'Regular watering, weed control, light pruning',
          watering: {
            interval: 7,
            description:
              'Deep weekly watering, 1-2 inches per week during growing season',
          },
          fertilizing: {
            interval: 90,
            description:
              'Light feeding in spring and fall, avoid high nitrogen',
          },
        },
        juvenile: {
          days: 730,
          description: 'Years 2-3 growth',
          care: 'Shape pruning, continued care, no fruit expected',
          watering: {
            interval: 7,
            description: 'Deep weekly watering during growing season',
          },
          fertilizing: {
            interval: 90,
            description:
              'Annual spring fertilizer application, avoid high nitrogen in fall',
          },
        },
        productive: {
          days: 7300,
          description: 'Productive years 4-20+',
          care: 'Annual pruning, pest management, harvest timing',
          watering: {
            interval: 7,
            description:
              'Deep weekly watering, 1-2 inches per week during growing season',
          },
          fertilizing: {
            interval: 90,
            description:
              'Annual spring fertilizer application, avoid high nitrogen in fall',
          },
        },
        dormancy: {
          days: 120,
          description: 'Winter dormancy period',
          care: 'Dormant season pruning, pest oil application',
          watering: {
            interval: 14,
            description:
              'Minimal watering during dormancy, just prevent complete drying',
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
            end: '05-01',
            description: 'Early spring before bud break',
          },
          harvestWindow: {
            start: '08-01',
            end: '10-31',
            description: 'Variety dependent harvest',
          },
          pruningWindow: {
            start: '01-15',
            end: '03-15',
            description: 'Dormant season pruning',
          },
        },
      },
    },
  },
  careTips: {
    watering: 'Deep weekly watering, 1-2 inches per week during growing season',
    fertilizing:
      'Annual spring fertilizer application, avoid high nitrogen in fall',
    sunlight: 'Full sun, 6+ hours daily',
    spacing: '15-20 feet apart for standard trees, 8-12 feet for dwarf',
    pruning: 'Annual dormant season pruning for shape and disease prevention',
    pollination:
      'Most varieties need cross-pollination with another apple variety',
    soilPH: '6.0-7.0',
  },
  commonProblems: {
    'Apple Scab':
      'Fungal disease - choose resistant varieties, improve air circulation',
    'Codling Moth': 'Worm in apples - pheromone traps, proper timing of sprays',
    'Fire Blight':
      'Bacterial disease - prune infected branches, avoid high nitrogen',
    'Biennial Bearing': 'Fruit every other year - thin fruit in heavy years',
  },
};

export default apple_tree;
