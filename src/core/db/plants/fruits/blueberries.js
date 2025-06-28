/**
 * Blueberries Plant Data
 * Growing information for Blueberries
 */

import { PLANT_TAGS } from '../categories.js';

export const blueberries = {
  name: 'blueberries.name',
  category: 'category.fruits',
  tags: [PLANT_TAGS.PERENNIAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🫐',
  environments: {
    indoor: {
      phases: {
        establishment: {
          days: 90,
          description: 'blueberries.phases.establishment.description',
          care: 'blueberries.phases.establishment.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'blueberries.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'blueberries.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'blueberries.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'blueberries.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'blueberries.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'blueberries.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 120,
          description: 'blueberries.phases.vegetative.description',
          care: 'blueberries.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'blueberries.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'Acid-loving fertilizer in spring, avoid high nitrogen',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'blueberries.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'Acid-loving nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'blueberries.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'Acid-loving feeding, EC 1.0-1.2',
            },
          },
        },
        flowering: {
          days: 21,
          description: 'blueberries.phases.flowering.description',
          care: 'blueberries.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'blueberries.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'blueberries.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'blueberries.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'blueberries.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'blueberries.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'blueberries.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        fruiting: {
          days: 45,
          description: 'blueberries.phases.fruiting.description',
          care: 'blueberries.phases.fruiting.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'blueberries.phases.fruiting.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'blueberries.phases.fruiting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'blueberries.phases.fruiting.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'blueberries.phases.fruiting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'blueberries.phases.fruiting.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'blueberries.phases.fruiting.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          days: 120,
          description: 'blueberries.phases.dormancy.description',
          care: 'blueberries.phases.dormancy.care',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'blueberries.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'blueberries.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'blueberries.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'blueberries.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'blueberries.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'blueberries.phases.dormancy.coco.fertilizing.description',
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
            description: 'blueberries.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '07-01',
            end: '09-30',
            description: 'blueberries.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-01',
            end: '04-15',
            description: 'blueberries.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '04-15',
            end: '07-31',
            description: 'blueberries.seasonalTiming.mediterranean.harvestWindow.description',
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
    watering: 'blueberries.careTips.watering',
    fertilizing: 'blueberries.careTips.fertilizing',
    sunlight: 'blueberries.careTips.sunlight',
    spacing: 'blueberries.careTips.spacing',
    temperature: 'blueberries.careTips.temperature',
    soilPH: 'blueberries.careTips.soilPH',
    mulching: 'blueberries.careTips.mulching',
  },
  commonProblems: {
    'Iron Deficiency': 'blueberries.commonProblems.ironDeficiency',
    'Birds': 'blueberries.commonProblems.birds',
    'Root Rot': 'blueberries.commonProblems.rootRot',
  },
};

export default blueberries; 