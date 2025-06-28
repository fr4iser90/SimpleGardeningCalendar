/**
 * Raspberries Plant Data
 * Growing information for Raspberries
 */

import { PLANT_TAGS } from '../categories.js';

export const raspberries = {
  name: 'raspberries.name',
  category: 'category.fruits',
  tags: [PLANT_TAGS.PERENNIAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🫐',
  environments: {
    indoor: {
      phases: {
        establishment: {
          days: 60,
          description: 'raspberries.phases.establishment.description',
          care: 'raspberries.phases.establishment.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'raspberries.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'raspberries.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'raspberries.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 90,
          description: 'raspberries.phases.vegetative.description',
          care: 'raspberries.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'raspberries.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'Balanced fertilizer in spring, avoid high nitrogen',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'raspberries.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'Balanced nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'raspberries.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'Balanced feeding, EC 1.0-1.2',
            },
          },
        },
        flowering: {
          days: 21,
          description: 'raspberries.phases.flowering.description',
          care: 'raspberries.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'raspberries.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'raspberries.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'raspberries.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        fruiting: {
          days: 30,
          description: 'raspberries.phases.fruiting.description',
          care: 'raspberries.phases.fruiting.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'raspberries.phases.fruiting.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'raspberries.phases.fruiting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'raspberries.phases.fruiting.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'raspberries.phases.fruiting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'raspberries.phases.fruiting.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'raspberries.phases.fruiting.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          days: 120,
          description: 'raspberries.phases.dormancy.description',
          care: 'raspberries.phases.dormancy.care',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'raspberries.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'raspberries.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'raspberries.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.phases.dormancy.coco.fertilizing.description',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        establishment: {
          start: '03-15',
          end: '05-15',
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
          start: '05-16',
          end: '06-14',
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
          start: '06-15',
          end: '07-05',
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
          start: '07-06',
          end: '08-10',
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
          start: '10-01',
          end: '03-14',
          description: 'Winter rest period',
          care: 'Prune old canes, mulch for winter protection',
          editable: false,
          soil: {
            watering: {
              interval: 7,
              description: 'Reduce watering during dormancy, just keep from drying out',
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
            description: 'raspberries.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-15',
            end: '09-30',
            description: 'raspberries.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-01',
            end: '04-15',
            description: 'raspberries.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '04-15',
            end: '07-31',
            description: 'raspberries.seasonalTiming.mediterranean.harvestWindow.description',
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
              description: 'Reduce watering during dormancy, just keep from drying out',
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
    watering: 'raspberries.careTips.watering',
    fertilizing: 'raspberries.careTips.fertilizing',
    sunlight: 'raspberries.careTips.sunlight',
    spacing: 'raspberries.careTips.spacing',
    temperature: 'raspberries.careTips.temperature',
    soilPH: 'raspberries.careTips.soilPH',
    trellising: 'raspberries.careTips.trellising',
  },
  commonProblems: {
    'Cane Borers': 'raspberries.commonProblems.caneBorers',
    'Gray Mold': 'raspberries.commonProblems.grayMold',
    'Spider Mites': 'raspberries.commonProblems.spiderMites',
  },
};

export default raspberries; 