/**
 * Raspberries Plant Data
 * Growing information for Raspberries
 */

import { PLANT_TAGS } from '../categories.js';

export const raspberries = {
  name: 'Raspberries',
  category: 'Fruits',
  tags: [PLANT_TAGS.PERENNIAL],
  emoji: '🫐',
  environments: {
    indoor: {
      phases: {
        establishment: {
          days: 60,
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
          days: 90,
          description: 'Cane growth and development',
          care: 'Train canes to trellis, remove weak growth',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Keep soil consistently moist during vegetative growth',
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
          care: 'Prune old canes, mulch for winter protection',
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
          days: 60,
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
          days: 90,
          description: 'Cane growth and development',
          care: 'Train canes to trellis, remove weak growth',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'Keep soil consistently moist during vegetative growth',
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
          days: 35,
          description: 'Berry development',
          care: 'Regular harvest, protect from birds',
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
          care: 'Prune old canes, mulch for winter protection',
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
    },
    greenhouse: {
      phases: {
        establishment: {
          days: 60,
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
          days: 90,
          description: 'Cane growth and development',
          care: 'Train canes to trellis, remove weak growth',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Keep soil consistently moist during vegetative growth',
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
          care: 'Prune old canes, mulch for winter protection',
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
    spacing: '2-3 feet apart',
    temperature: 'Cool season crop, protect from extreme heat',
    soilPH: '5.5-6.5',
    trellising: 'Support canes with trellis or wire system',
  },
  commonProblems: {
    'Cane Borers': 'Insect damage to canes - remove and destroy affected canes',
    'Gray Mold': 'Fungal disease on fruit - improve air circulation',
    'Spider Mites': 'Tiny pests on leaves - increase humidity, use predatory mites',
  },
};

export default raspberries; 