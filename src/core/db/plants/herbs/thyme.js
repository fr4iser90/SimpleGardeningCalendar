/**
 * Thyme Plant Data
 * Growing information for Thyme
 */

import { PLANT_TAGS } from '../categories.js';

export const thyme = {
  name: 'Thyme',
  category: 'category.herbs',
  tags: [PLANT_TAGS.PERENNIAL],
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 14,
          description: 'Seeds sprouting',
          care: 'Keep warm and moist',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'Keep soil moist during germination',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during germination',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous moisture in rockwool',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during germination',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Keep coco moist during germination',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during germination',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'First true leaves',
          care: 'Provide adequate light',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Water when top inch of soil feels dry',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during seedling stage',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, low EC' },
            fertilizing: {
              interval: 7,
              description: 'Light nutrients, EC 0.5-0.8',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: { interval: 7, description: 'Light feeding, EC 0.5-0.8' },
          },
        },
        vegetative: {
          days: 35,
          description: 'Leaf growth',
          care: 'Pinch tips for bushiness',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'Allow soil to dry between watering',
            },
            fertilizing: {
              interval: 21,
              description: 'Light feeding with balanced fertilizer',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, moderate EC' },
            fertilizing: {
              interval: 21,
              description: 'Balanced nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: { interval: 2, description: 'Water every 2 days in coco' },
            fertilizing: {
              interval: 21,
              description: 'Balanced feeding, EC 1.0-1.2',
            },
          },
        },
        harvest: {
          days: 75,
          description: 'Continuous harvest',
          care: 'Harvest sprigs regularly',
          editable: true,
          soil: {
            watering: { interval: 4, description: 'Allow soil to dry between watering' },
            fertilizing: {
              interval: 21,
              description: 'Regular feeding to support new growth',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, moderate EC' },
            fertilizing: {
              interval: 21,
              description: 'Regular nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: { interval: 2, description: 'Water every 2 days in coco' },
            fertilizing: {
              interval: 21,
              description: 'Regular feeding, EC 1.0-1.2',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 14,
          description: 'Seeds sprouting',
          care: 'Keep warm and moist',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'Keep soil moist during germination',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during germination',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous moisture in rockwool',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during germination',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Keep coco moist during germination',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during germination',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'First true leaves',
          care: 'Provide adequate light',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'Water when top inch of soil feels dry',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during seedling stage',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, low EC' },
            fertilizing: {
              interval: 7,
              description: 'Light nutrients, EC 0.5-0.8',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: { interval: 7, description: 'Light feeding, EC 0.5-0.8' },
          },
        },
        vegetative: {
          days: 35,
          description: 'Leaf growth',
          care: 'Pinch tips for bushiness',
          editable: false,
          soil: {
            watering: {
              interval: 4,
              description: 'Allow soil to dry between watering',
            },
            fertilizing: {
              interval: 21,
              description: 'Light feeding with balanced fertilizer',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, moderate EC' },
            fertilizing: {
              interval: 21,
              description: 'Balanced nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: { interval: 2, description: 'Water every 2 days in coco' },
            fertilizing: {
              interval: 21,
              description: 'Balanced feeding, EC 1.0-1.2',
            },
          },
        },
        harvest: {
          days: 75,
          description: 'Continuous harvest',
          care: 'Harvest sprigs regularly',
          editable: true,
          soil: {
            watering: { interval: 4, description: 'Allow soil to dry between watering' },
            fertilizing: {
              interval: 21,
              description: 'Regular feeding to support new growth',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, moderate EC' },
            fertilizing: {
              interval: 21,
              description: 'Regular nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: { interval: 2, description: 'Water every 2 days in coco' },
            fertilizing: {
              interval: 21,
              description: 'Regular feeding, EC 1.0-1.2',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-15',
            description: 'Spring to early summer planting',
          },
          harvestWindow: {
            start: '06-01',
            end: '10-31',
            description: 'Continuous harvest throughout growing season',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '07-01',
            description: 'Early spring to early summer planting',
          },
          harvestWindow: {
            start: '05-01',
            end: '11-30',
            description: 'Extended harvest season',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 14,
          description: 'Seeds sprouting',
          care: 'Keep warm and moist',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'Keep soil moist during germination',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during germination',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous moisture in rockwool',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during germination',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Keep coco moist during germination',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during germination',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'First true leaves',
          care: 'Provide adequate light',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Water when top inch of soil feels dry',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during seedling stage',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, low EC' },
            fertilizing: {
              interval: 7,
              description: 'Light nutrients, EC 0.5-0.8',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: { interval: 7, description: 'Light feeding, EC 0.5-0.8' },
          },
        },
        vegetative: {
          days: 35,
          description: 'Leaf growth',
          care: 'Pinch tips for bushiness',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'Allow soil to dry between watering',
            },
            fertilizing: {
              interval: 21,
              description: 'Light feeding with balanced fertilizer',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, moderate EC' },
            fertilizing: {
              interval: 21,
              description: 'Balanced nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: { interval: 2, description: 'Water every 2 days in coco' },
            fertilizing: {
              interval: 21,
              description: 'Balanced feeding, EC 1.0-1.2',
            },
          },
        },
        harvest: {
          days: 75,
          description: 'Continuous harvest',
          care: 'Harvest sprigs regularly',
          editable: true,
          soil: {
            watering: { interval: 4, description: 'Allow soil to dry between watering' },
            fertilizing: {
              interval: 21,
              description: 'Regular feeding to support new growth',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, moderate EC' },
            fertilizing: {
              interval: 21,
              description: 'Regular nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: { interval: 2, description: 'Water every 2 days in coco' },
            fertilizing: {
              interval: 21,
              description: 'Regular feeding, EC 1.0-1.2',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'Allow soil to dry between watering',
    fertilizing: 'Light feeding every 3-4 weeks',
    sunlight: 'Full sun (6+ hours daily)',
    spacing: '12-18 inches apart',
    temperature: 'Warm weather herb, drought tolerant',
    soilPH: '6.0-8.0',
    harvesting: 'Harvest sprigs regularly to encourage growth',
  },
  commonProblems: {
    'Root Rot': 'Overwatering - ensure good drainage',
    'Leggy Growth': 'Insufficient light - provide more sunlight',
    'Winter Damage': 'Protect from frost in cold climates',
  },
};

export default thyme; 