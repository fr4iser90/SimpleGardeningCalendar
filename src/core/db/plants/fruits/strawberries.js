/**
 * Strawberries Plant Data
 * Growing information for Strawberries
 */

import { PLANT_TAGS } from '../categories.js';

export const strawberries = {
  name: 'Strawberries',
  category: 'Fruits',
  tags: [PLANT_TAGS.PERENNIAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🍓',
  environments: {
    indoor: {
      phases: {
        establishment: {
          days: 30,
          description: 'Root establishment',
          care: 'Keep soil moist, remove flowers first year',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Keep soil consistently moist during establishment',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during establishment, remove flowers',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, low EC',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during establishment',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during establishment',
            },
          },
        },
        vegetative: {
          days: 60,
          description: 'Runner and leaf production',
          care: 'Allow runners to establish new plants',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Keep soil consistently moist, avoid overhead watering',
            },
            fertilizing: {
              interval: 21,
              description: 'Balanced fertilizer in spring, avoid high nitrogen',
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
        flowering: {
          days: 21,
          description: 'Flower development',
          care: 'Protect flowers from late frost',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Maintain consistent moisture during flowering',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during flowering to avoid blossom damage',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during flowering',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during flowering',
            },
          },
        },
        fruiting: {
          days: 30,
          description: 'Berry production',
          care: 'Regular watering and feeding during fruiting',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Regular watering during fruiting, avoid wetting berries',
            },
            fertilizing: {
              interval: 14,
              description: 'Light feeding with balanced fertilizer during fruiting',
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
        dormancy: {
          days: 120,
          description: 'Winter rest period',
          care: 'Mulch for winter protection',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description:
                'Reduce watering during dormancy, just keep from drying out',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during dormancy',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Minimal flow during dormancy',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during dormancy',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'Minimal watering during dormancy',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during dormancy',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        establishment: {
          start: '03-15',
          end: '04-15',
          description: 'Root establishment',
          care: 'Keep soil moist, remove flowers first year',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'Keep soil consistently moist during establishment',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during establishment, remove flowers',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, low EC',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during establishment',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during establishment',
            },
          },
        },
        vegetative: {
          start: '04-16',
          end: '06-15',
          description: 'Runner and leaf production',
          care: 'Allow runners to establish new plants',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'Keep soil consistently moist, avoid overhead watering',
            },
            fertilizing: {
              interval: 21,
              description: 'Balanced fertilizer in spring, avoid high nitrogen',
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
        flowering: {
          start: '06-16',
          end: '07-07',
          description: 'Flower development',
          care: 'Protect flowers from late frost',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Maintain consistent moisture during flowering',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during flowering to avoid blossom damage',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during flowering',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during flowering',
            },
          },
        },
        fruiting: {
          start: '07-08',
          end: '08-07',
          description: 'Berry production',
          care: 'Regular watering and feeding during fruiting',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Regular watering during fruiting, avoid wetting berries',
            },
            fertilizing: {
              interval: 14,
              description: 'Light feeding with balanced fertilizer during fruiting',
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
        dormancy: {
          start: '10-01',
          end: '03-14',
          description: 'Winter rest period',
          care: 'Mulch for winter protection',
          editable: false,
          soil: {
            watering: {
              interval: 7,
              description:
                'Reduce watering during dormancy, just keep from drying out',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during dormancy',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Minimal flow during dormancy',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during dormancy',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'Minimal watering during dormancy',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during dormancy',
            },
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
            start: '06-01',
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
            start: '04-15',
            end: '07-31',
            description: 'Harvest before summer heat',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        establishment: {
          days: 30,
          description: 'Root establishment',
          care: 'Keep soil moist, remove flowers first year',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Keep soil consistently moist during establishment',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during establishment, remove flowers',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, low EC',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during establishment',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during establishment',
            },
          },
        },
        vegetative: {
          days: 60,
          description: 'Runner and leaf production',
          care: 'Allow runners to establish new plants',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Keep soil consistently moist, avoid overhead watering',
            },
            fertilizing: {
              interval: 21,
              description: 'Balanced fertilizer in spring, avoid high nitrogen',
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
        flowering: {
          days: 21,
          description: 'Flower development',
          care: 'Protect flowers from late frost',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Maintain consistent moisture during flowering',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during flowering to avoid blossom damage',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during flowering',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during flowering',
            },
          },
        },
        fruiting: {
          days: 30,
          description: 'Berry production',
          care: 'Regular watering and feeding during fruiting',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Regular watering during fruiting, avoid wetting berries',
            },
            fertilizing: {
              interval: 14,
              description: 'Light feeding with balanced fertilizer during fruiting',
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
        dormancy: {
          days: 120,
          description: 'Winter rest period',
          care: 'Mulch for winter protection',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description:
                'Reduce watering during dormancy, just keep from drying out',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during dormancy',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Minimal flow during dormancy',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during dormancy',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'Minimal watering during dormancy',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during dormancy',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'Keep soil consistently moist, avoid overhead watering',
    fertilizing: 'Balanced fertilizer in spring, avoid high nitrogen',
    sunlight: 'Full sun (6+ hours daily)',
    spacing: '12-18 inches apart',
    temperature: 'Cool season crop, protect from extreme heat',
    soilPH: '5.5-6.5',
    mulching: 'Straw mulch to keep berries clean and retain moisture',
  },
  commonProblems: {
    'Gray Mold': 'Fungal disease on fruit - improve air circulation',
    Slugs: 'Eat holes in berries - use beer traps or diatomaceous earth',
    Birds: 'Eat ripe berries - use netting protection',
  },
};

export default strawberries;
