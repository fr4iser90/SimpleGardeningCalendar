/**
 * Sunflowers Plant Data
 * Growing information for Sunflowers
 */

import { PLANT_TAGS } from '../categories.js';

export const sunflowers = {
  name: 'Sunflowers',
  category: 'category.flowers',
  tags: [PLANT_TAGS.ANNUAL],
  emoji: '🌻',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 7,
          description: 'Seed sprouting',
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
          days: 30,
          description: 'Rapid growth phase',
          care: 'Support tall stems, provide adequate light',
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
          days: 21,
          description: 'Flower head development',
          care: 'Support heavy flower heads, protect from pests',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'Maintain consistent moisture' },
            fertilizing: {
              interval: 21,
              description: 'Light feeding to support flower development',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, moderate EC' },
            fertilizing: {
              interval: 21,
              description: 'Light feeding, EC 1.0-1.2',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 21,
              description: 'Light feeding, EC 1.0-1.2',
            },
          },
        },
        seed_development: {
          days: 30,
          description: 'Seed maturation',
          care: 'Protect from birds, allow seeds to mature',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'Keep soil consistently moist' },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during seed development',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, moderate EC' },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during seed development',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during seed development',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          start: '04-15',
          end: '04-22',
          description: 'Seed sprouting',
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
          start: '04-23',
          end: '05-07',
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
          start: '05-08',
          end: '06-07',
          description: 'Rapid growth phase',
          care: 'Support tall stems, provide adequate light',
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
          start: '06-08',
          end: '06-29',
          description: 'Flower head development',
          care: 'Support heavy flower heads, protect from pests',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'Maintain consistent moisture' },
            fertilizing: {
              interval: 21,
              description: 'Light feeding to support flower development',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, moderate EC' },
            fertilizing: {
              interval: 21,
              description: 'Light feeding, EC 1.0-1.2',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 21,
              description: 'Light feeding, EC 1.0-1.2',
            },
          },
        },
        seed_development: {
          start: '06-30',
          end: '07-30',
          description: 'Seed maturation',
          care: 'Protect from birds, allow seeds to mature',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'Keep soil consistently moist' },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during seed development',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, moderate EC' },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during seed development',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during seed development',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-15',
            end: '06-15',
            description: 'After last frost, soil warm',
          },
          harvestWindow: {
            start: '08-01',
            end: '09-30',
            description: 'Harvest before frost',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '05-15',
            description: 'Early spring to late spring',
          },
          harvestWindow: {
            start: '07-01',
            end: '10-31',
            description: 'Long harvest period',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 7,
          description: 'Seed sprouting',
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
          days: 30,
          description: 'Rapid growth phase',
          care: 'Support tall stems, provide adequate light',
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
          days: 21,
          description: 'Flower head development',
          care: 'Support heavy flower heads, protect from pests',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'Maintain consistent moisture' },
            fertilizing: {
              interval: 21,
              description: 'Light feeding to support flower development',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, moderate EC' },
            fertilizing: {
              interval: 21,
              description: 'Light feeding, EC 1.0-1.2',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 21,
              description: 'Light feeding, EC 1.0-1.2',
            },
          },
        },
        seed_development: {
          days: 30,
          description: 'Seed maturation',
          care: 'Protect from birds, allow seeds to mature',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'Keep soil consistently moist' },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during seed development',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, moderate EC' },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during seed development',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during seed development',
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
    spacing: '1-2 feet apart',
    temperature: 'Warm weather flower, protect from cold',
    soilPH: '6.0-7.5',
    support: 'Stake tall varieties to prevent wind damage',
  },
  commonProblems: {
    'Aphids': 'Small insects on new growth - spray with water',
    'Birds': 'Eat seeds - cover flower heads with netting',
    'Wind Damage': 'Tall stems break - provide support stakes',
  },
};

export default sunflowers; 