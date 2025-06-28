/**
 * Blueberries Plant Data
 * Growing information for Blueberries
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

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
              description: 'blueberries.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'blueberries.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'blueberries.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'blueberries.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'blueberries.phases.vegetative.coco.fertilizing.description',
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
          description: 'blueberries.phases.establishment.description',
          care: 'blueberries.phases.establishment.care',
          editable: false,
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
          start: '06-16',
          end: '07-14',
          description: 'blueberries.phases.vegetative.description',
          care: 'blueberries.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'blueberries.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'blueberries.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'blueberries.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'blueberries.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'blueberries.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'blueberries.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          start: '07-15',
          end: '08-05',
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
          start: '08-06',
          end: '09-20',
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
          start: '10-01',
          end: '03-14',
          description: 'blueberries.phases.dormancy.description',
          care: 'blueberries.phases.dormancy.care',
          editable: false,
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
              description: 'blueberries.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'blueberries.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'blueberries.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'blueberries.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'blueberries.phases.vegetative.coco.fertilizing.description',
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
  commonProblems: createProblemRefs(['ironDeficiency', 'birds', 'rootRot'], 'fruits'),
};

export default blueberries; 