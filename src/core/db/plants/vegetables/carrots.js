/**
 * Carrots Plant Data
 * Growing information for Carrots
 */

import { PLANT_TAGS } from '../categories.js';

export const carrots = {
  name: 'Carrots',
  category: 'category.vegetables',
  tags: [PLANT_TAGS.ROOT, PLANT_TAGS.ANNUAL],
  emoji: '🥕',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 10,
          description: 'Seeds sprouting',
          care: 'Keep soil consistently moist, avoid crusting',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'Keep soil consistently moist but not waterlogged',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizer needed during germination',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous moisture in rockwool or hydroponic system',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during germination',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Keep coco consistently moist but not waterlogged',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizer needed during germination',
            },
          },
        },
        leafing: {
          days: 20,
          description: 'Leaf development',
          care: 'Thin seedlings to 2 inches apart',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Water when top inch of soil feels dry',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during early leaf development',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, low EC',
            },
            fertilizing: {
              interval: 7,
              description: 'Light nutrients, EC 0.5-0.8',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 7,
              description: 'Light feeding, EC 0.5-0.8',
            },
          },
        },
        rooting: {
          days: 30,
          description: 'Root development',
          care: 'Keep soil loose and weed-free',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Deep watering once a week, maintain even moisture',
            },
            fertilizing: {
              interval: 14,
              description:
                'Low nitrogen fertilizer, high in phosphorus and potassium',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 14,
              description: 'Balanced nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 14,
              description: 'Balanced feeding, EC 1.0-1.2',
            },
          },
        },
        maturing: {
          days: 25,
          description: 'Root enlargement',
          care: 'Maintain even moisture to prevent splitting',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Consistent deep watering, avoid drought stress',
            },
            fertilizing: {
              interval: 21,
              description: 'Continue low nitrogen, high phosphorus/potassium feeding',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 21,
              description: 'Balanced nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 21,
              description: 'Balanced feeding, EC 1.0-1.2',
            },
          },
        },
        harvest: {
          days: 30,
          description: 'Root maturation',
          care: 'Harvest when roots reach desired size',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'Deep watering before harvest' },
            fertilizing: { interval: 0, description: 'No fertilizing before harvest' },
          },
          hydro: {
            watering: { interval: 0, description: 'Flush with plain water before harvest' },
            fertilizing: { interval: 0, description: 'No nutrients before harvest' },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco before harvest' },
            fertilizing: { interval: 0, description: 'No fertilizing before harvest' },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 10,
          description: 'Seeds sprouting',
          care: 'Keep soil consistently moist, avoid crusting',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'Keep soil consistently moist but not waterlogged',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizer needed during germination',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous moisture in rockwool or hydroponic system',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during germination',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Keep coco consistently moist but not waterlogged',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizer needed during germination',
            },
          },
        },
        leafing: {
          days: 20,
          description: 'Leaf development',
          care: 'Thin seedlings to 2 inches apart',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'Water when top inch of soil feels dry',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during early leaf development',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, low EC',
            },
            fertilizing: {
              interval: 7,
              description: 'Light nutrients, EC 0.5-0.8',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 7,
              description: 'Light feeding, EC 0.5-0.8',
            },
          },
        },
        rooting: {
          days: 30,
          description: 'Root development',
          care: 'Keep soil loose and weed-free',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'Deep watering once a week, maintain even moisture',
            },
            fertilizing: {
              interval: 14,
              description:
                'Low nitrogen fertilizer, high in phosphorus and potassium',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 14,
              description: 'Balanced nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 14,
              description: 'Balanced feeding, EC 1.0-1.2',
            },
          },
        },
        maturing: {
          days: 25,
          description: 'Root enlargement',
          care: 'Maintain even moisture to prevent splitting',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'Consistent deep watering, avoid drought stress',
            },
            fertilizing: {
              interval: 21,
              description: 'Continue low nitrogen, high phosphorus/potassium feeding',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 21,
              description: 'Balanced nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 21,
              description: 'Balanced feeding, EC 1.0-1.2',
            },
          },
        },
        harvest: {
          days: 30,
          description: 'Root maturation',
          care: 'Harvest when roots reach desired size',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'Deep watering before harvest' },
            fertilizing: { interval: 0, description: 'No fertilizing before harvest' },
          },
          hydro: {
            watering: { interval: 0, description: 'Flush with plain water before harvest' },
            fertilizing: { interval: 0, description: 'No nutrients before harvest' },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco before harvest' },
            fertilizing: { interval: 0, description: 'No fertilizing before harvest' },
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 10,
          description: 'Seeds sprouting',
          care: 'Keep soil consistently moist, avoid crusting',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'Keep soil consistently moist but not waterlogged',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizer needed during germination',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous moisture in rockwool or hydroponic system',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during germination',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Keep coco consistently moist but not waterlogged',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizer needed during germination',
            },
          },
        },
        leafing: {
          days: 20,
          description: 'Leaf development',
          care: 'Thin seedlings to 2 inches apart',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Water when top inch of soil feels dry',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during early leaf development',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, low EC',
            },
            fertilizing: {
              interval: 7,
              description: 'Light nutrients, EC 0.5-0.8',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 7,
              description: 'Light feeding, EC 0.5-0.8',
            },
          },
        },
        rooting: {
          days: 30,
          description: 'Root development',
          care: 'Keep soil loose and weed-free',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Deep watering once a week, maintain even moisture',
            },
            fertilizing: {
              interval: 14,
              description:
                'Low nitrogen fertilizer, high in phosphorus and potassium',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 14,
              description: 'Balanced nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 14,
              description: 'Balanced feeding, EC 1.0-1.2',
            },
          },
        },
        maturing: {
          days: 25,
          description: 'Root enlargement',
          care: 'Maintain even moisture to prevent splitting',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Consistent deep watering, avoid drought stress',
            },
            fertilizing: {
              interval: 21,
              description: 'Continue low nitrogen, high phosphorus/potassium feeding',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 21,
              description: 'Balanced nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 21,
              description: 'Balanced feeding, EC 1.0-1.2',
            },
          },
        },
        harvest: {
          days: 30,
          description: 'Root maturation',
          care: 'Harvest when roots reach desired size',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'Deep watering before harvest' },
            fertilizing: { interval: 0, description: 'No fertilizing before harvest' },
          },
          hydro: {
            watering: { interval: 0, description: 'Flush with plain water before harvest' },
            fertilizing: { interval: 0, description: 'No nutrients before harvest' },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco before harvest' },
            fertilizing: { interval: 0, description: 'No fertilizing before harvest' },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'Keep soil moist but not wet, water deeply once a week',
    fertilizing: 'Low nitrogen fertilizer, high in phosphorus and potassium',
    sunlight: 'Full sun to partial shade',
    spacing: '2-3 inches apart, rows 16 inches apart',
    soil: 'Deep, loose, well-draining soil free from rocks',
    soilPH: '6.0-6.8',
  },
  commonProblems: {
    Forking:
      'Rocky soil or recent fertilizer - prepare soil well before planting',
    'Bitter Taste':
      'Environmental stress - maintain consistent growing conditions',
    'Short Roots': 'Soil too compact - loosen soil deeply before planting',
    'Carrot Fly':
      'Small flies laying eggs - use row covers or companion plant with onions',
  },
};

export default carrots;
