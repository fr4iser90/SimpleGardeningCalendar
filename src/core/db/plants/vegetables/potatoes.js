/**
 * Potatoes Plant Data
 * Growing information for Potatoes
 */

import { PLANT_TAGS } from '../categories.js';

export const potatoes = {
  name: 'Potatoes',
  category: 'category.vegetables',
  emoji: '🥔',
  tags: [PLANT_TAGS.ROOT, PLANT_TAGS.ANNUAL],
  environments: {
    indoor: {
      phases: {
        sprouting: {
          days: 14,
          description: 'Eye sprouting',
          care: 'Keep seed potatoes in warm, dark place',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'Keep soil moist during sprouting',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during sprouting',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous moisture in rockwool or hydroponic system',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during sprouting',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Keep coco moist during sprouting',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during sprouting',
            },
          },
        },
        vegetative: {
          days: 30,
          description: 'Leaf and stem growth',
          care: 'Start hilling when plants are 6 inches tall',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'Weekly deep watering',
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
        tuberization: {
          days: 40,
          description: 'Tuber formation',
          care: 'Hill soil around base every 2-3 weeks',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'Weekly deep watering',
            },
            fertilizing: {
              interval: 21,
              description: 'Fertilize every 3 weeks during tuberization',
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
        bulking: {
          days: 45,
          description: 'Tuber growth',
          care: 'Maintain consistent moisture, continue hilling',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'Weekly deep watering',
            },
            fertilizing: {
              interval: 21,
              description: 'Fertilize every 3 weeks during bulking',
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
        maturation: {
          days: 20,
          description: 'Plant dies back, tubers ready',
          care: 'Reduce watering when plants start yellowing',
          editable: true,
          soil: {
            watering: {
              interval: 0,
              description: 'No watering needed during maturation',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during maturation',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'No watering needed during maturation',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during maturation',
            },
          },
          coco: {
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
        harvest: {
          days: 30,
          description: 'Tuber maturation',
          care: 'Harvest when foliage dies back',
          editable: true,
          soil: {
            watering: { interval: 7, description: 'Stop watering 1-2 weeks before harvest' },
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
        }
      },
    },
    outdoor: {
      phases: {
        sprouting: {
          days: 14,
          description: 'Eye sprouting',
          care: 'Keep seed potatoes in warm, dark place',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'Keep soil moist during sprouting',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during sprouting',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous moisture in rockwool or hydroponic system',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during sprouting',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Keep coco moist during sprouting',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during sprouting',
            },
          },
        },
        vegetative: {
          days: 30,
          description: 'Leaf and stem growth',
          care: 'Start hilling when plants are 6 inches tall',
          editable: false,
          soil: {
            watering: {
              interval: 7,
              description: 'Weekly deep watering',
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
        tuberization: {
          days: 40,
          description: 'Tuber formation',
          care: 'Hill soil around base every 2-3 weeks',
          editable: false,
          soil: {
            watering: {
              interval: 7,
              description: 'Weekly deep watering',
            },
            fertilizing: {
              interval: 21,
              description: 'Fertilize every 3 weeks during tuberization',
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
        bulking: {
          days: 45,
          description: 'Tuber growth',
          care: 'Maintain consistent moisture, continue hilling',
          editable: false,
          soil: {
            watering: {
              interval: 7,
              description: 'Weekly deep watering',
            },
            fertilizing: {
              interval: 21,
              description: 'Fertilize every 3 weeks during bulking',
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
        maturation: {
          days: 20,
          description: 'Plant dies back, tubers ready',
          care: 'Reduce watering when plants start yellowing',
          editable: false,
          soil: {
            watering: {
              interval: 0,
              description: 'No watering needed during maturation',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during maturation',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'No watering needed during maturation',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during maturation',
            },
          },
          coco: {
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
        harvest: {
          days: 30,
          description: 'Tuber maturation',
          care: 'Harvest when foliage dies back',
          editable: true,
          soil: {
            watering: { interval: 7, description: 'Stop watering 1-2 weeks before harvest' },
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
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'Early to mid spring planting',
          },
          harvestWindow: {
            start: '07-01',
            end: '09-30',
            description: 'Harvest throughout summer',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-01',
            end: '04-15',
            description: 'Very early spring planting',
          },
          harvestWindow: {
            start: '05-01',
            end: '08-31',
            description: 'Harvest before autumn rains',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        sprouting: {
          days: 14,
          description: 'Eye sprouting',
          care: 'Keep seed potatoes in warm, dark place',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'Keep soil moist during sprouting',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during sprouting',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous moisture in rockwool or hydroponic system',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during sprouting',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Keep coco moist during sprouting',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during sprouting',
            },
          },
        },
        vegetative: {
          days: 30,
          description: 'Leaf and stem growth',
          care: 'Start hilling when plants are 6 inches tall',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'Weekly deep watering',
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
        tuberization: {
          days: 40,
          description: 'Tuber formation',
          care: 'Hill soil around base every 2-3 weeks',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'Weekly deep watering',
            },
            fertilizing: {
              interval: 21,
              description: 'Fertilize every 3 weeks during tuberization',
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
        bulking: {
          days: 45,
          description: 'Tuber growth',
          care: 'Maintain consistent moisture, continue hilling',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'Weekly deep watering',
            },
            fertilizing: {
              interval: 21,
              description: 'Fertilize every 3 weeks during bulking',
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
        maturation: {
          days: 20,
          description: 'Plant dies back, tubers ready',
          care: 'Reduce watering when plants start yellowing',
          editable: true,
          soil: {
            watering: {
              interval: 0,
              description: 'No watering needed during maturation',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during maturation',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'No watering needed during maturation',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during maturation',
            },
          },
          coco: {
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
        harvest: {
          days: 30,
          description: 'Tuber maturation',
          care: 'Harvest when foliage dies back',
          editable: true,
          soil: {
            watering: { interval: 7, description: 'Stop watering 1-2 weeks before harvest' },
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
        }
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

