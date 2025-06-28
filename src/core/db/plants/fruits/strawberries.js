/**
 * Strawberries Plant Data
 * Growing information for Strawberries
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

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
          description: 'strawberries.environments.indoor.phases.establishment.description',
          care: 'strawberries.environments.indoor.phases.establishment.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'strawberries.environments.indoor.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.indoor.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.environments.indoor.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.indoor.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.environments.indoor.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.indoor.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 60,
          description: 'strawberries.environments.indoor.phases.vegetative.description',
          care: 'strawberries.environments.indoor.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'strawberries.environments.indoor.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'strawberries.environments.indoor.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.environments.indoor.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'strawberries.environments.indoor.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.environments.indoor.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'strawberries.environments.indoor.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 21,
          description: 'strawberries.environments.indoor.phases.flowering.description',
          care: 'strawberries.environments.indoor.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'strawberries.environments.indoor.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.indoor.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.environments.indoor.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.indoor.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.environments.indoor.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.indoor.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        fruiting: {
          days: 30,
          description: 'strawberries.environments.indoor.phases.fruiting.description',
          care: 'strawberries.environments.indoor.phases.fruiting.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'strawberries.environments.indoor.phases.fruiting.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'strawberries.environments.indoor.phases.fruiting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.environments.indoor.phases.fruiting.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'strawberries.environments.indoor.phases.fruiting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.environments.indoor.phases.fruiting.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'strawberries.environments.indoor.phases.fruiting.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          days: 120,
          description: 'strawberries.environments.indoor.phases.dormancy.description',
          care: 'strawberries.environments.indoor.phases.dormancy.care',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'strawberries.environments.indoor.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.indoor.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.environments.indoor.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.indoor.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'strawberries.environments.indoor.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.indoor.phases.dormancy.coco.fertilizing.description',
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
          description: 'strawberries.environments.outdoor.phases.establishment.description',
          care: 'strawberries.environments.outdoor.phases.establishment.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'strawberries.environments.outdoor.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.outdoor.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.environments.outdoor.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.outdoor.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.environments.outdoor.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.outdoor.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          start: '04-16',
          end: '06-15',
          description: 'strawberries.environments.outdoor.phases.vegetative.description',
          care: 'strawberries.environments.outdoor.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'strawberries.environments.outdoor.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'strawberries.environments.outdoor.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.environments.outdoor.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'strawberries.environments.outdoor.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.environments.outdoor.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'strawberries.environments.outdoor.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          start: '06-16',
          end: '07-07',
          description: 'strawberries.environments.outdoor.phases.flowering.description',
          care: 'strawberries.environments.outdoor.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'strawberries.environments.outdoor.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.outdoor.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.environments.outdoor.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.outdoor.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.environments.outdoor.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.outdoor.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        fruiting: {
          start: '07-08',
          end: '08-07',
          description: 'strawberries.environments.outdoor.phases.fruiting.description',
          care: 'strawberries.environments.outdoor.phases.fruiting.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'strawberries.environments.outdoor.phases.fruiting.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'strawberries.environments.outdoor.phases.fruiting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.environments.outdoor.phases.fruiting.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'strawberries.environments.outdoor.phases.fruiting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.environments.outdoor.phases.fruiting.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'strawberries.environments.outdoor.phases.fruiting.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          start: '10-01',
          end: '03-14',
          description: 'strawberries.environments.outdoor.phases.dormancy.description',
          care: 'strawberries.environments.outdoor.phases.dormancy.care',
          editable: false,
          soil: {
            watering: {
              interval: 7,
              description: 'strawberries.environments.outdoor.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.outdoor.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.environments.outdoor.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.outdoor.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'strawberries.environments.outdoor.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.outdoor.phases.dormancy.coco.fertilizing.description',
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
          description: 'strawberries.environments.greenhouse.phases.establishment.description',
          care: 'strawberries.environments.greenhouse.phases.establishment.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'strawberries.environments.greenhouse.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.greenhouse.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.environments.greenhouse.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.greenhouse.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.environments.greenhouse.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.greenhouse.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 60,
          description: 'strawberries.environments.greenhouse.phases.vegetative.description',
          care: 'strawberries.environments.greenhouse.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'strawberries.environments.greenhouse.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'strawberries.environments.greenhouse.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.environments.greenhouse.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'strawberries.environments.greenhouse.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.environments.greenhouse.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'strawberries.environments.greenhouse.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 21,
          description: 'strawberries.environments.greenhouse.phases.flowering.description',
          care: 'strawberries.environments.greenhouse.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'strawberries.environments.greenhouse.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.greenhouse.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.environments.greenhouse.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.greenhouse.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.environments.greenhouse.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.greenhouse.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        fruiting: {
          days: 30,
          description: 'strawberries.environments.greenhouse.phases.fruiting.description',
          care: 'strawberries.environments.greenhouse.phases.fruiting.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'strawberries.environments.greenhouse.phases.fruiting.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'strawberries.environments.greenhouse.phases.fruiting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.environments.greenhouse.phases.fruiting.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'strawberries.environments.greenhouse.phases.fruiting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'strawberries.environments.greenhouse.phases.fruiting.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'strawberries.environments.greenhouse.phases.fruiting.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          days: 120,
          description: 'strawberries.environments.greenhouse.phases.dormancy.description',
          care: 'strawberries.environments.greenhouse.phases.dormancy.care',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'strawberries.environments.greenhouse.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.greenhouse.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'strawberries.environments.greenhouse.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.greenhouse.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'strawberries.environments.greenhouse.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'strawberries.environments.greenhouse.phases.dormancy.coco.fertilizing.description',
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
  commonProblems: createProblemRefs(['grayMold', 'slugs', 'birds'], 'fruits'),
};

export default strawberries;
