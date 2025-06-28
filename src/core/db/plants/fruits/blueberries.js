/**
 * Blueberries Plant Data
 * Growing information for Blueberries
 */

import { PLANT_TAGS } from '../categories.js';

export const blueberries = {
  name: 'Blueberries',
  category: 'category.fruits',
  tags: [PLANT_TAGS.PERENNIAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🫐',
  environments: {
    indoor: {
      phases: {
        establishment: {
          days: 90,
          description: 'Root establishment',
          care: 'Remove flowers first year, focus on root development',
          editable: true,
          soil: {
            watering: {
              interval: 3,
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
          days: 120,
          description: 'Bush growth and development',
          care: 'Shape pruning, remove weak growth',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Keep soil consistently moist during vegetative growth',
            },
            fertilizing: {
              interval: 30,
              description: 'Acid-loving fertilizer in spring, avoid high nitrogen',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 30,
              description: 'Acid-loving nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 30,
              description: 'Acid-loving feeding, EC 1.0-1.2',
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
          days: 45,
          description: 'Berry production',
          care: 'Regular watering and feeding during fruiting',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Regular watering during fruiting, avoid wetting berries',
            },
            fertilizing: {
              interval: 21,
              description: 'Light feeding with acid-loving fertilizer during fruiting',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 21,
              description: 'Acid-loving nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 21,
              description: 'Acid-loving feeding, EC 1.0-1.2',
            },
          },
        },
        dormancy: {
          days: 120,
          description: 'Winter rest period',
          care: 'Prune old wood, mulch for winter protection',
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
          end: '06-15',
          description: 'Root establishment',
          care: 'Remove flowers first year, focus on root development',
          editable: false,
          soil: {
            watering: {
              interval: 3,
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
          start: '06-16',
          end: '07-14',
          description: 'Bush growth and development',
          care: 'Shape pruning, remove weak growth',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'Keep soil consistently moist during vegetative growth',
            },
            fertilizing: {
              interval: 30,
              description: 'Acid-loving fertilizer in spring, avoid high nitrogen',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 30,
              description: 'Acid-loving nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 30,
              description: 'Acid-loving feeding, EC 1.0-1.2',
            },
          },
        },
        flowering: {
          start: '07-15',
          end: '08-05',
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
          start: '08-06',
          end: '09-20',
          description: 'Berry production',
          care: 'Regular watering and feeding during fruiting',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Regular watering during fruiting, avoid wetting berries',
            },
            fertilizing: {
              interval: 21,
              description: 'Light feeding with acid-loving fertilizer during fruiting',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 21,
              description: 'Acid-loving nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 21,
              description: 'Acid-loving feeding, EC 1.0-1.2',
            },
          },
        },
        dormancy: {
          start: '10-01',
          end: '03-14',
          description: 'Winter rest period',
          care: 'Prune old wood, mulch for winter protection',
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
          days: 90,
          description: 'Root establishment',
          care: 'Remove flowers first year, focus on root development',
          editable: true,
          soil: {
            watering: {
              interval: 3,
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
          days: 120,
          description: 'Bush growth and development',
          care: 'Shape pruning, remove weak growth',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Keep soil consistently moist during vegetative growth',
            },
            fertilizing: {
              interval: 30,
              description: 'Acid-loving fertilizer in spring, avoid high nitrogen',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 30,
              description: 'Acid-loving nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 30,
              description: 'Acid-loving feeding, EC 1.0-1.2',
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
          days: 45,
          description: 'Berry production',
          care: 'Regular watering and feeding during fruiting',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Regular watering during fruiting, avoid wetting berries',
            },
            fertilizing: {
              interval: 21,
              description: 'Light feeding with acid-loving fertilizer during fruiting',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 21,
              description: 'Acid-loving nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 21,
              description: 'Acid-loving feeding, EC 1.0-1.2',
            },
          },
        },
        dormancy: {
          days: 120,
          description: 'Winter rest period',
          care: 'Prune old wood, mulch for winter protection',
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
    fertilizing: 'Acid-loving fertilizer, pH 4.5-5.5',
    sunlight: 'Full sun (6+ hours daily)',
    spacing: '4-6 feet apart',
    temperature: 'Cool season crop, protect from extreme heat',
    soilPH: '4.5-5.5 (acidic soil required)',
    mulching: 'Pine bark or sawdust mulch to maintain acidity',
  },
  commonProblems: {
    'Iron Deficiency': 'Yellow leaves with green veins - check soil pH',
    'Birds': 'Eat ripe berries - use netting protection',
    'Root Rot': 'Fungal disease - improve drainage, avoid overwatering',
  },
};

export default blueberries; 