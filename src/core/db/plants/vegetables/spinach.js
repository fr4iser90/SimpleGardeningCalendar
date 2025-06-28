/**
 * Spinach Plant Data
 * Growing information for Spinach
 */

import { PLANT_TAGS } from '../categories.js';



export const spinach = {
  name: 'Spinach',
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
        leafing: {
          days: 21,
          description: 'Leaf development',
          care: 'Thin seedlings to 4-6 inches apart',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Water every 2 days for leaf growth',
            },
            fertilizing: {
              interval: 14,
              description: 'Fertilize every 2 weeks during leafing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, low EC',
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
          days: 14,
          description: 'Continuous harvest period',
          care: 'Harvest outer leaves, keep center growing',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Water every 3 days during harvest',
            },
            fertilizing: {
              interval: 14,
              description: 'Fertilize every 2 weeks during harvest',
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
        bolting: {
          days: 7,
          description: 'Going to seed',
          care: 'Harvest quickly before leaves become bitter',
          editable: true,
          soil: {
            watering: {
              interval: 0,
              description: 'No watering needed during bolting',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during bolting',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'No watering needed during bolting',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during bolting',
            },
          },
          coco: {
            watering: {
              interval: 0,
              description: 'No watering needed during bolting',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during bolting',
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
        leafing: {
          days: 21,
          description: 'Leaf development',
          care: 'Thin seedlings to 4-6 inches apart',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'Water every 2 days for leaf growth',
            },
            fertilizing: {
              interval: 14,
              description: 'Fertilize every 2 weeks during leafing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, low EC',
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
          care: 'Harvest outer leaves or whole plant',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Water every 3 days during harvest',
            },
            fertilizing: {
              interval: 14,
              description: 'Fertilize every 2 weeks during harvest',
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
        bolting: {
          days: 7,
          description: 'Going to seed',
          care: 'Harvest quickly before leaves become bitter',
          editable: false,
          soil: {
            watering: {
              interval: 0,
              description: 'No watering needed during bolting',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during bolting',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'No watering needed during bolting',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during bolting',
            },
          },
          coco: {
            watering: {
              interval: 0,
              description: 'No watering needed during bolting',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during bolting',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-15',
            end: '05-01',
            description: 'Early spring planting',
          },
          harvestWindow: {
            start: '04-15',
            end: '06-30',
            description: 'Harvest before hot weather',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-15',
            end: '04-01',
            description: 'Very early spring planting',
          },
          harvestWindow: {
            start: '03-15',
            end: '05-31',
            description: 'Harvest before heat',
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
        leafing: {
          days: 21,
          description: 'Leaf development',
          care: 'Thin seedlings to 4-6 inches apart',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Water every 2 days for leaf growth',
            },
            fertilizing: {
              interval: 14,
              description: 'Fertilize every 2 weeks during leafing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, low EC',
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
          days: 14,
          description: 'Continuous harvest period',
          care: 'Harvest outer leaves, keep center growing',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Water every 3 days during harvest',
            },
            fertilizing: {
              interval: 14,
              description: 'Fertilize every 2 weeks during harvest',
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
        bolting: {
          days: 7,
          description: 'Going to seed',
          care: 'Harvest quickly before leaves become bitter',
          editable: true,
          soil: {
            watering: {
              interval: 0,
              description: 'No watering needed during bolting',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during bolting',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'No watering needed during bolting',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during bolting',
            },
          },
          coco: {
            watering: {
              interval: 0,
              description: 'No watering needed during bolting',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during bolting',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'Keep soil consistently moist',
    fertilizing: 'High nitrogen fertilizer for leaf growth',
    sunlight: 'Full sun in cool weather, partial shade in warm weather',
    spacing: '4-6 inches apart',
    temperature: formatTemperature('Cool season crop, 50-70°F optimal'),
    soilPH: '6.0-7.0',
    succession: 'Plant every 2 weeks for continuous harvest',
  },
  commonProblems: {
    Bolting: 'Heat stress - plant in cool season, provide shade',
    'Downy Mildew': 'Fungal disease - improve air circulation',
    'Leaf Miners': 'Tunnels in leaves - remove affected leaves',
  },
};

export default spinach;
