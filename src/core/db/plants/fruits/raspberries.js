/**
 * Raspberries Plant Data
 * Growing information for Raspberries
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

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
          description: 'raspberries.environments.indoor.phases.establishment.description',
          care: 'raspberries.environments.indoor.phases.establishment.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'raspberries.environments.indoor.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.indoor.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'raspberries.environments.indoor.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.indoor.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'raspberries.environments.indoor.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.indoor.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 90,
          description: 'raspberries.environments.indoor.phases.vegetative.description',
          care: 'raspberries.environments.indoor.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'raspberries.environments.indoor.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'raspberries.environments.indoor.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'raspberries.environments.indoor.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'raspberries.environments.indoor.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'raspberries.environments.indoor.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'raspberries.environments.indoor.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 21,
          description: 'raspberries.environments.indoor.phases.flowering.description',
          care: 'raspberries.environments.indoor.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'raspberries.environments.indoor.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.indoor.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'raspberries.environments.indoor.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.indoor.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'raspberries.environments.indoor.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.indoor.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        fruiting: {
          days: 30,
          description: 'raspberries.environments.indoor.phases.fruiting.description',
          care: 'raspberries.environments.indoor.phases.fruiting.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'raspberries.environments.indoor.phases.fruiting.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'raspberries.environments.indoor.phases.fruiting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'raspberries.environments.indoor.phases.fruiting.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'raspberries.environments.indoor.phases.fruiting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'raspberries.environments.indoor.phases.fruiting.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'raspberries.environments.indoor.phases.fruiting.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          days: 120,
          description: 'raspberries.environments.indoor.phases.dormancy.description',
          care: 'raspberries.environments.indoor.phases.dormancy.care',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'raspberries.environments.indoor.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.indoor.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'raspberries.environments.indoor.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.indoor.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'raspberries.environments.indoor.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.indoor.phases.dormancy.coco.fertilizing.description',
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
          description: 'raspberries.environments.outdoor.phases.establishment.description',
          care: 'raspberries.environments.outdoor.phases.establishment.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'raspberries.environments.outdoor.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.outdoor.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'raspberries.environments.outdoor.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.outdoor.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'raspberries.environments.outdoor.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.outdoor.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          start: '05-16',
          end: '06-14',
          description: 'raspberries.environments.outdoor.phases.vegetative.description',
          care: 'raspberries.environments.outdoor.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'raspberries.environments.outdoor.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'raspberries.environments.outdoor.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'raspberries.environments.outdoor.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'raspberries.environments.outdoor.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'raspberries.environments.outdoor.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'raspberries.environments.outdoor.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          start: '06-15',
          end: '07-05',
          description: 'raspberries.environments.outdoor.phases.flowering.description',
          care: 'raspberries.environments.outdoor.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'raspberries.environments.outdoor.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.outdoor.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'raspberries.environments.outdoor.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.outdoor.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'raspberries.environments.outdoor.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.outdoor.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        fruiting: {
          start: '07-06',
          end: '08-10',
          description: 'raspberries.environments.outdoor.phases.fruiting.description',
          care: 'raspberries.environments.outdoor.phases.fruiting.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'raspberries.environments.outdoor.phases.fruiting.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'raspberries.environments.outdoor.phases.fruiting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'raspberries.environments.outdoor.phases.fruiting.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'raspberries.environments.outdoor.phases.fruiting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'raspberries.environments.outdoor.phases.fruiting.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'raspberries.environments.outdoor.phases.fruiting.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          start: '10-01',
          end: '03-14',
          description: 'raspberries.environments.outdoor.phases.dormancy.description',
          care: 'raspberries.environments.outdoor.phases.dormancy.care',
          editable: false,
          soil: {
            watering: {
              interval: 7,
              description: 'raspberries.environments.outdoor.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.outdoor.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'raspberries.environments.outdoor.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.outdoor.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'raspberries.environments.outdoor.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.outdoor.phases.dormancy.coco.fertilizing.description',
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
          description: 'raspberries.environments.greenhouse.phases.establishment.description',
          care: 'raspberries.environments.greenhouse.phases.establishment.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'raspberries.environments.greenhouse.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.greenhouse.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'raspberries.environments.greenhouse.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.greenhouse.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'raspberries.environments.greenhouse.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.greenhouse.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 90,
          description: 'raspberries.environments.greenhouse.phases.vegetative.description',
          care: 'raspberries.environments.greenhouse.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'raspberries.environments.greenhouse.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'raspberries.environments.greenhouse.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'raspberries.environments.greenhouse.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'raspberries.environments.greenhouse.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'raspberries.environments.greenhouse.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'raspberries.environments.greenhouse.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 21,
          description: 'raspberries.environments.greenhouse.phases.flowering.description',
          care: 'raspberries.environments.greenhouse.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'raspberries.environments.greenhouse.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.greenhouse.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'raspberries.environments.greenhouse.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.greenhouse.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'raspberries.environments.greenhouse.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.greenhouse.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        fruiting: {
          days: 30,
          description: 'raspberries.environments.greenhouse.phases.fruiting.description',
          care: 'raspberries.environments.greenhouse.phases.fruiting.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'raspberries.environments.greenhouse.phases.fruiting.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'raspberries.environments.greenhouse.phases.fruiting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'raspberries.environments.greenhouse.phases.fruiting.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'raspberries.environments.greenhouse.phases.fruiting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'raspberries.environments.greenhouse.phases.fruiting.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'raspberries.environments.greenhouse.phases.fruiting.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          days: 120,
          description: 'raspberries.environments.greenhouse.phases.dormancy.description',
          care: 'raspberries.environments.greenhouse.phases.dormancy.care',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'raspberries.environments.greenhouse.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.greenhouse.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'raspberries.environments.greenhouse.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.greenhouse.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'raspberries.environments.greenhouse.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'raspberries.environments.greenhouse.phases.dormancy.coco.fertilizing.description',
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
  commonProblems: createProblemRefs(['caneBorers', 'grayMold', 'spiderMites'], 'fruits'),
};

export default raspberries; 