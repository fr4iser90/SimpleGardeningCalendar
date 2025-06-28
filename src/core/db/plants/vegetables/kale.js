/**
 * Kale Plant Data
 * Growing information for Kale
 */

import { PLANT_TAGS } from '../categories.js';

export const kale = {
  name: 'Kale',
  category: 'category.vegetables',
  emoji: '🥬',
  tags: [PLANT_TAGS.LEAFY, PLANT_TAGS.ANNUAL, PLANT_TAGS.PHOTOPERIOD],
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 7,
          description: 'Seeds sprouting',
          care: 'Keep cool and moist',
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
          description: 'Young plant development',
          care: 'Provide adequate light',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Water when top inch of soil is dry',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during seedling stage',
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
        vegetative: {
          days: 21,
          description: 'Leaf production',
          care: 'Regular feeding for leaf growth',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Deep watering every 3 days',
            },
            fertilizing: {
              interval: 14,
              description: 'Fertilize every 2 weeks during vegetative growth',
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
        leaf_development: {
          days: 14,
          description: 'Leaf maturation',
          care: 'Leaves developing full size and flavor',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Deep watering every 3 days',
            },
            fertilizing: {
              interval: 14,
              description: 'Fertilize every 2 weeks during leaf development',
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
        harvest: {
          days: 30,
          description: 'Continuous harvest',
          care: 'Harvest outer leaves, leave center to grow',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'Weekly watering during harvest',
            },
            fertilizing: {
              interval: 21,
              description: 'Fertilize every 3 weeks during harvest',
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
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 7,
          description: 'Seeds sprouting',
          care: 'Keep cool and moist',
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
          description: 'Young plant development',
          care: 'Provide adequate light',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'Water when top inch of soil is dry',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during seedling stage',
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
        vegetative: {
          days: 21,
          description: 'Leaf production',
          care: 'Regular feeding for leaf growth',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'Deep watering every 3 days',
            },
            fertilizing: {
              interval: 14,
              description: 'Fertilize every 2 weeks during vegetative growth',
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
        leaf_development: {
          days: 14,
          description: 'Leaf maturation',
          care: 'Leaves developing full size and flavor',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'Deep watering every 3 days',
            },
            fertilizing: {
              interval: 14,
              description: 'Fertilize every 2 weeks during leaf development',
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
        harvest: {
          days: 30,
          description: 'Leaf maturation',
          care: 'Harvest outer leaves, allow center to continue growing',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'Weekly watering during harvest',
            },
            fertilizing: {
              interval: 21,
              description: 'Fertilize every 3 weeks during harvest',
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
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 7,
          description: 'Seeds sprouting',
          care: 'Keep cool and moist',
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
          description: 'Young plant development',
          care: 'Provide adequate light',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Water when top inch of soil is dry',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during seedling stage',
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
        vegetative: {
          days: 21,
          description: 'Leaf production',
          care: 'Regular feeding for leaf growth',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Deep watering every 3 days',
            },
            fertilizing: {
              interval: 14,
              description: 'Fertilize every 2 weeks during vegetative growth',
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
        leaf_development: {
          days: 14,
          description: 'Leaf maturation',
          care: 'Leaves developing full size and flavor',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Deep watering every 3 days',
            },
            fertilizing: {
              interval: 14,
              description: 'Fertilize every 2 weeks during leaf development',
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
        harvest: {
          days: 30,
          description: 'Continuous harvest',
          care: 'Harvest outer leaves, leave center to grow',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'Weekly watering during harvest',
            },
            fertilizing: {
              interval: 21,
              description: 'Fertilize every 3 weeks during harvest',
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
      },
    },
  },
  careTips: {
    watering: 'Deep, regular watering',
    fertilizing: 'High nitrogen fertilizer every 3-4 weeks',
    sunlight: 'Full sun to partial shade',
    spacing: '12-18 inches apart',
    temperature: 'Cool season crop, tolerates frost',
    soilPH: '6.0-7.5',
    harvesting: 'Harvest outer leaves when 8-10 inches long',
  },
  commonProblems: {
    'Cabbage Worms': 'Green caterpillars - use BT spray or row covers',
    Aphids: 'Small insects - spray with water or insecticidal soap',
    Clubroot: 'Soil disease - rotate crops and improve drainage',
  },
};

export default kale;
