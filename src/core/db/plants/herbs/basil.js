/**
 * Basil Plant Data
 * Growing information for Basil
 */

import { PLANT_TAGS } from '../categories.js';

export const basil = {
  name: 'Basil',
  category: 'category.herbs',
  tags: [PLANT_TAGS.ANNUAL],
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 7,
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
          days: 14,
          description: 'First true leaves',
          care: 'Provide adequate light',
          editable: true,
          soil: {
            watering: {
              interval: 2,
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
          days: 21,
          description: 'Leaf growth',
          care: 'Pinch tips for bushiness',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Keep soil moist but not waterlogged',
            },
            fertilizing: {
              interval: 14,
              description: 'Light feeding with balanced fertilizer',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, moderate EC' },
            fertilizing: {
              interval: 14,
              description: 'Balanced nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 14,
              description: 'Balanced feeding, EC 1.0-1.2',
            },
          },
        },
        flowering: {
          days: 20,
          description: 'Flower spike development',
          care: 'Pinch flowers for continued leaf harvest',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'Maintain consistent moisture' },
            fertilizing: {
              interval: 21,
              description: 'Continue light feeding to support leaf production',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, moderate EC' },
            fertilizing: {
              interval: 21,
              description: 'Continue light feeding, EC 1.0-1.2',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 21,
              description: 'Continue light feeding, EC 1.0-1.2',
            },
          },
        },
        harvest: {
          days: 30,
          description: 'Continuous harvest',
          care: 'Harvest leaves regularly, prevent flowering',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'Keep soil consistently moist' },
            fertilizing: {
              interval: 14,
              description: 'Regular feeding to support new growth',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, moderate EC' },
            fertilizing: {
              interval: 14,
              description: 'Regular nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 14,
              description: 'Regular feeding, EC 1.0-1.2',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 7,
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
          days: 14,
          description: 'First true leaves',
          care: 'Provide adequate light',
          editable: false,
          soil: {
            watering: {
              interval: 2,
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
          days: 21,
          description: 'Leaf growth',
          care: 'Pinch tips for bushiness',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'Keep soil moist but not waterlogged',
            },
            fertilizing: {
              interval: 14,
              description: 'Light feeding with balanced fertilizer',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, moderate EC' },
            fertilizing: {
              interval: 14,
              description: 'Balanced nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 14,
              description: 'Balanced feeding, EC 1.0-1.2',
            },
          },
        },
        flowering: {
          days: 20,
          description: 'Flower spike development',
          care: 'Pinch flowers for continued leaf harvest',
          editable: false,
          soil: {
            watering: { interval: 3, description: 'Maintain consistent moisture' },
            fertilizing: {
              interval: 21,
              description: 'Continue light feeding to support leaf production',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, moderate EC' },
            fertilizing: {
              interval: 21,
              description: 'Continue light feeding, EC 1.0-1.2',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 21,
              description: 'Continue light feeding, EC 1.0-1.2',
            },
          },
        },
        harvest: {
          days: 30,
          description: 'Continuous harvest',
          care: 'Harvest leaves regularly, prevent flowering',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'Keep soil consistently moist' },
            fertilizing: {
              interval: 14,
              description: 'Regular feeding to support new growth',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, moderate EC' },
            fertilizing: {
              interval: 14,
              description: 'Regular nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 14,
              description: 'Regular feeding, EC 1.0-1.2',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '05-15',
            end: '07-01',
            description: 'Late spring to early summer planting',
          },
          harvestWindow: {
            start: '07-01',
            end: '10-15',
            description: 'Harvest leaves before first frost',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '04-01',
            end: '07-15',
            description: 'Spring to mid-summer planting',
          },
          harvestWindow: {
            start: '06-01',
            end: '11-15',
            description: 'Extended harvest season',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 7,
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
          days: 14,
          description: 'First true leaves',
          care: 'Provide adequate light',
          editable: true,
          soil: {
            watering: {
              interval: 2,
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
          days: 21,
          description: 'Leaf growth',
          care: 'Pinch tips for bushiness',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Keep soil moist but not waterlogged',
            },
            fertilizing: {
              interval: 14,
              description: 'Light feeding with balanced fertilizer',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, moderate EC' },
            fertilizing: {
              interval: 14,
              description: 'Balanced nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 14,
              description: 'Balanced feeding, EC 1.0-1.2',
            },
          },
        },
        flowering: {
          days: 20,
          description: 'Flower spike development',
          care: 'Pinch flowers for continued leaf harvest',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'Maintain consistent moisture' },
            fertilizing: {
              interval: 21,
              description: 'Continue light feeding to support leaf production',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, moderate EC' },
            fertilizing: {
              interval: 21,
              description: 'Continue light feeding, EC 1.0-1.2',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 21,
              description: 'Continue light feeding, EC 1.0-1.2',
            },
          },
        },
        harvest: {
          days: 30,
          description: 'Continuous harvest',
          care: 'Harvest leaves regularly, prevent flowering',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'Keep soil consistently moist' },
            fertilizing: {
              interval: 14,
              description: 'Regular feeding to support new growth',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, moderate EC' },
            fertilizing: {
              interval: 14,
              description: 'Regular nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 14,
              description: 'Regular feeding, EC 1.0-1.2',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'Keep soil moist but not waterlogged',
    fertilizing: 'Light feeding every 2-3 weeks',
    sunlight: 'Full sun (6+ hours daily)',
    spacing: '6-12 inches apart',
    temperature: 'Warm weather herb, protect from cold',
    soilPH: '6.0-7.0',
    harvesting: 'Pinch leaves regularly to encourage growth',
  },
  commonProblems: {
    'Fusarium Wilt': 'Soil-borne disease - use disease-free soil and rotate crops',
    'Aphids': 'Small insects on new growth - spray with water',
    'Bolting': 'Going to seed too early - pinch flower buds regularly',
  },
};

export default basil;
