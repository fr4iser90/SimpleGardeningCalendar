/**
 * Strawberries Plant Data
 * Growing information for Strawberries
 */

import { PLANT_TAGS } from '../categories.js';

export const strawberries = {
  name: 'strawberries.name',
  category: 'category.fruits',
  tags: [PLANT_TAGS.PERENNIAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🍓',
  environments: {
    indoor: {
      phases: {
        establishment: {
          days: 30,
          description: 'strawberries.phases.establishment.description',
          care: 'strawberries.phases.establishment.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'strawberries.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 60,
          description: 'strawberries.phases.vegetative.description',
          care: 'strawberries.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'strawberries.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'strawberries.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'strawberries.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'strawberries.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 21,
          description: 'strawberries.phases.flowering.description',
          care: 'strawberries.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'strawberries.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        fruiting: {
          days: 30,
          description: 'strawberries.phases.fruiting.description',
          care: 'strawberries.phases.fruiting.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'strawberries.phases.fruiting.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'strawberries.phases.fruiting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.phases.fruiting.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'strawberries.phases.fruiting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.phases.fruiting.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'strawberries.phases.fruiting.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          days: 120,
          description: 'strawberries.phases.dormancy.description',
          care: 'strawberries.phases.dormancy.care',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'strawberries.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'strawberries.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.dormancy.coco.fertilizing.description',
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
          description: 'strawberries.phases.establishment.description',
          care: 'strawberries.phases.establishment.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'strawberries.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          start: '04-16',
          end: '06-15',
          description: 'strawberries.phases.vegetative.description',
          care: 'strawberries.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'strawberries.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'strawberries.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'strawberries.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'strawberries.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          start: '06-16',
          end: '07-07',
          description: 'strawberries.phases.flowering.description',
          care: 'strawberries.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'strawberries.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        fruiting: {
          start: '07-08',
          end: '08-07',
          description: 'strawberries.phases.fruiting.description',
          care: 'strawberries.phases.fruiting.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'strawberries.phases.fruiting.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'strawberries.phases.fruiting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.phases.fruiting.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'strawberries.phases.fruiting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.phases.fruiting.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'strawberries.phases.fruiting.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          start: '10-01',
          end: '03-14',
          description: 'strawberries.phases.dormancy.description',
          care: 'strawberries.phases.dormancy.care',
          editable: false,
          soil: {
            watering: {
              interval: 7,
              description: 'strawberries.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'strawberries.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.dormancy.coco.fertilizing.description',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'strawberries.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-01',
            end: '09-30',
            description: 'strawberries.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-01',
            end: '04-15',
            description: 'strawberries.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '04-15',
            end: '07-31',
            description: 'strawberries.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        establishment: {
          days: 30,
          description: 'strawberries.phases.establishment.description',
          care: 'strawberries.phases.establishment.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'strawberries.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 60,
          description: 'strawberries.phases.vegetative.description',
          care: 'strawberries.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'strawberries.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'strawberries.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'strawberries.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'strawberries.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 21,
          description: 'strawberries.phases.flowering.description',
          care: 'strawberries.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'strawberries.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        fruiting: {
          days: 30,
          description: 'strawberries.phases.fruiting.description',
          care: 'strawberries.phases.fruiting.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'strawberries.phases.fruiting.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'strawberries.phases.fruiting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.phases.fruiting.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'strawberries.phases.fruiting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.phases.fruiting.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'strawberries.phases.fruiting.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          days: 120,
          description: 'strawberries.phases.dormancy.description',
          care: 'strawberries.phases.dormancy.care',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'strawberries.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'strawberries.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.phases.dormancy.coco.fertilizing.description',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'strawberries.careTips.watering',
    fertilizing: 'strawberries.careTips.fertilizing',
    sunlight: 'strawberries.careTips.sunlight',
    spacing: 'strawberries.careTips.spacing',
    temperature: 'strawberries.careTips.temperature',
    soilPH: 'strawberries.careTips.soilPH',
    mulching: 'strawberries.careTips.mulching',
  },
  commonProblems: {
    "Gray Mold": 'strawberries.commonProblems.grayMold',
    "Slugs": 'strawberries.commonProblems.slugs',
    "Birds": 'strawberries.commonProblems.birds',
  },
};

export default strawberries;
