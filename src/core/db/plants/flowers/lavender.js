/**
 * Lavender Plant Data
 * Growing information for Lavender
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const lavender = {
  name: 'lavender.name',
  category: 'category.flowers',
  tags: [PLANT_TAGS.PERENNIAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🪻',
  environments: {
    indoor: {
      phases: {
        establishment: {
          days: 60,
          description: 'lavender.environments.indoor.phases.establishment.description',
          care: 'lavender.environments.indoor.phases.establishment.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'lavender.environments.indoor.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.indoor.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.environments.indoor.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.indoor.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'lavender.environments.indoor.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.indoor.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 90,
          description: 'lavender.environments.indoor.phases.vegetative.description',
          care: 'lavender.environments.indoor.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 5,
              description: 'lavender.environments.indoor.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'lavender.environments.indoor.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.environments.indoor.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'lavender.environments.indoor.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 2,
              description: 'lavender.environments.indoor.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'lavender.environments.indoor.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 30,
          description: 'lavender.environments.indoor.phases.flowering.description',
          care: 'lavender.environments.indoor.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'lavender.environments.indoor.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.indoor.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.environments.indoor.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.indoor.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 2,
              description: 'lavender.environments.indoor.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.indoor.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          days: 120,
          description: 'lavender.environments.indoor.phases.dormancy.description',
          care: 'lavender.environments.indoor.phases.dormancy.care',
          editable: true,
          soil: {
            watering: {
              interval: 10,
              description: 'lavender.environments.indoor.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.indoor.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.environments.indoor.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.indoor.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 10,
              description: 'lavender.environments.indoor.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.indoor.phases.dormancy.coco.fertilizing.description',
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
          description: 'lavender.environments.outdoor.phases.establishment.description',
          care: 'lavender.environments.outdoor.phases.establishment.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'lavender.environments.outdoor.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.outdoor.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.environments.outdoor.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.outdoor.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'lavender.environments.outdoor.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.outdoor.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          description: 'lavender.environments.outdoor.phases.vegetative.description',
          care: 'lavender.environments.outdoor.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 5,
              description: 'lavender.environments.outdoor.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'lavender.environments.outdoor.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.environments.outdoor.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'lavender.environments.outdoor.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 2,
              description: 'lavender.environments.outdoor.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'lavender.environments.outdoor.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          start: '06-15',
          end: '08-01',
          description: 'lavender.environments.outdoor.phases.flowering.description',
          care: 'lavender.environments.outdoor.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'lavender.environments.outdoor.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.outdoor.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.environments.outdoor.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.outdoor.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 2,
              description: 'lavender.environments.outdoor.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.outdoor.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          start: '10-01',
          end: '03-14',
          description: 'lavender.environments.outdoor.phases.dormancy.description',
          care: 'lavender.environments.outdoor.phases.dormancy.care',
          editable: false,
          soil: {
            watering: {
              interval: 10,
              description: 'lavender.environments.outdoor.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.outdoor.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.environments.outdoor.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.outdoor.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 10,
              description: 'lavender.environments.outdoor.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.outdoor.phases.dormancy.coco.fertilizing.description',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-01',
            description: 'lavender.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-15',
            end: '09-15',
            description: 'lavender.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-15',
            end: '05-01',
            description: 'lavender.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '05-15',
            end: '09-30',
            description: 'lavender.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        establishment: {
          days: 60,
          description: 'lavender.environments.greenhouse.phases.establishment.description',
          care: 'lavender.environments.greenhouse.phases.establishment.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'lavender.environments.greenhouse.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.greenhouse.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.environments.greenhouse.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.greenhouse.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'lavender.environments.greenhouse.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.greenhouse.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 90,
          description: 'lavender.environments.greenhouse.phases.vegetative.description',
          care: 'lavender.environments.greenhouse.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 5,
              description: 'lavender.environments.greenhouse.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'lavender.environments.greenhouse.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.environments.greenhouse.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'lavender.environments.greenhouse.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 2,
              description: 'lavender.environments.greenhouse.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'lavender.environments.greenhouse.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 30,
          description: 'lavender.environments.greenhouse.phases.flowering.description',
          care: 'lavender.environments.greenhouse.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'lavender.environments.greenhouse.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.greenhouse.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.environments.greenhouse.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.greenhouse.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 2,
              description: 'lavender.environments.greenhouse.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.greenhouse.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          days: 120,
          description: 'lavender.environments.greenhouse.phases.dormancy.description',
          care: 'lavender.environments.greenhouse.phases.dormancy.care',
          editable: true,
          soil: {
            watering: {
              interval: 10,
              description: 'lavender.environments.greenhouse.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.greenhouse.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.environments.greenhouse.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.greenhouse.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 10,
              description: 'lavender.environments.greenhouse.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.environments.greenhouse.phases.dormancy.coco.fertilizing.description',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'lavender.careTips.watering',
    fertilizing: 'lavender.careTips.fertilizing',
    sunlight: 'lavender.careTips.sunlight',
    spacing: 'lavender.careTips.spacing',
    temperature: 'lavender.careTips.temperature',
    soilPH: 'lavender.careTips.soilPH',
    pruning: 'lavender.careTips.pruning',
  },
  commonProblems: createProblemRefs(['rootRot', 'powderyMildew', 'leggyGrowth'], 'flowers'),
};

export default lavender; 