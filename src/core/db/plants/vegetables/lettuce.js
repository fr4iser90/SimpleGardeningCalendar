/**
 * Lettuce Plant Data
 * Growing information for Lettuce
 */

import { PLANT_TAGS } from '../categories.js';

export const lettuce = {
  name: 'Lettuce',
  category: 'category.vegetables',
  emoji: '🥬',
  tags: [PLANT_TAGS.LEAFY, PLANT_TAGS.ANNUAL],
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 5,
          description: 'Seeds sprouting',
          care: 'Keep soil moist and cool',
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
          care: 'Thin seedlings, maintain moisture',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Regular light watering, keep soil consistently moist',
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
        heading: {
          days: 25,
          description: 'Head formation',
          care: 'Regular watering, watch for bolting',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Regular light watering, keep soil consistently moist',
            },
            fertilizing: {
              interval: 14,
              description: 'Light feeder - balanced fertilizer at planting',
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
          days: 10,
          description: 'Ready for harvest',
          care: 'Harvest outer leaves or whole heads',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Maintain moisture for crisp leaves',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during harvest period',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during harvest',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during harvest period',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 5,
          description: 'Seeds sprouting',
          care: 'Keep soil moist and cool',
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
          care: 'Thin seedlings, maintain moisture',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'Regular light watering, keep soil consistently moist',
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
        heading: {
          days: 25,
          description: 'Head formation',
          care: 'Regular watering, watch for bolting',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'Regular light watering, keep soil consistently moist',
            },
            fertilizing: {
              interval: 14,
              description: 'Light feeder - balanced fertilizer at planting',
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
          days: 21,
          description: 'Leaf maturation',
          care: 'Harvest outer leaves or whole head',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Maintain moisture for crisp leaves',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during harvest period',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during harvest',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during harvest period',
            },
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 5,
          description: 'Seeds sprouting',
          care: 'Keep soil moist and cool',
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
          care: 'Thin seedlings, maintain moisture',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Regular light watering, keep soil consistently moist',
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
        heading: {
          days: 25,
          description: 'Head formation',
          care: 'Regular watering, watch for bolting',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Regular light watering, keep soil consistently moist',
            },
            fertilizing: {
              interval: 14,
              description: 'Light feeder - balanced fertilizer at planting',
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
          days: 10,
          description: 'Ready for harvest',
          care: 'Harvest outer leaves or whole heads',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Maintain moisture for crisp leaves',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during harvest period',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during harvest',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during harvest period',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'Regular light watering, keep soil consistently moist',
    fertilizing: 'Light feeder - balanced fertilizer at planting',
    sunlight: 'Partial shade in warm weather, full sun in cool weather',
    spacing: '6-8 inches apart for leaf, 10-12 inches for head lettuce',
    temperature: 'Cool weather crop, protect from heat',
    soilPH: '6.0-7.0',
  },
  commonProblems: {
    Bolting: 'Heat stress - plant in cool season, provide shade',
    'Tip Burn': 'Calcium deficiency or irregular watering',
    'Bitter Leaves': 'Heat or water stress - maintain cool, moist conditions',
    Aphids: 'Small green insects - spray with water or use insecticidal soap',
  },
};

export default lettuce;
