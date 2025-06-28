/**
 * Peppers Plant Data
 * Growing information for Peppers
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const peppers = {
  name: 'peppers.name',
  category: 'category.vegetables',
  tags: [PLANT_TAGS.PHOTOPERIOD, PLANT_TAGS.ANNUAL],
  emoji: '🌶️',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 10,
          description: 'peppers.environments.indoor.phases.germination.description',
          care: 'peppers.environments.indoor.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'peppers.environments.indoor.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'peppers.environments.indoor.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'peppers.environments.indoor.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'peppers.environments.indoor.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'peppers.environments.indoor.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'peppers.environments.indoor.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'peppers.environments.indoor.phases.seedling.description',
          care: 'peppers.environments.indoor.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'peppers.environments.indoor.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'peppers.environments.indoor.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'peppers.environments.indoor.phases.seedling.hydro.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'peppers.environments.indoor.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'peppers.environments.indoor.phases.seedling.coco.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'peppers.environments.indoor.phases.seedling.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 35,
          description: 'peppers.environments.indoor.phases.vegetative.description',
          care: 'peppers.environments.indoor.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'peppers.environments.indoor.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'peppers.environments.indoor.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'peppers.environments.indoor.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'peppers.environments.indoor.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'peppers.environments.indoor.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'peppers.environments.indoor.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 21,
          description: 'peppers.environments.indoor.phases.flowering.description',
          care: 'peppers.environments.indoor.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'peppers.environments.indoor.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'peppers.environments.indoor.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'peppers.environments.indoor.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'peppers.environments.indoor.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'peppers.environments.indoor.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'peppers.environments.indoor.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        fruiting: {
          days: 60,
          description: 'peppers.environments.indoor.phases.fruiting.description',
          care: 'peppers.environments.indoor.phases.fruiting.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'peppers.environments.indoor.phases.fruiting.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'peppers.environments.indoor.phases.fruiting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'peppers.environments.indoor.phases.fruiting.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'peppers.environments.indoor.phases.fruiting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'peppers.environments.indoor.phases.fruiting.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'peppers.environments.indoor.phases.fruiting.coco.fertilizing.description',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          start: '03-15',
          end: '04-15',
          description: 'peppers.environments.outdoor.phases.germination.description',
          care: 'peppers.environments.outdoor.phases.germination.care',
          editable: false,
        },
        seedling: {
          description: 'peppers.environments.outdoor.phases.seedling.description',
          care: 'peppers.environments.outdoor.phases.seedling.care',
          editable: false,
        },
        vegetative: {
          description: 'peppers.environments.outdoor.phases.vegetative.description',
          care: 'peppers.environments.outdoor.phases.vegetative.care',
          editable: false,
        },
        flowering: {
          description: 'peppers.environments.outdoor.phases.flowering.description',
          care: 'peppers.environments.outdoor.phases.flowering.care',
          editable: true,
        },
        fruiting: {
          start: '07-15',
          end: '10-15',
          description: 'peppers.environments.outdoor.phases.fruiting.description',
          care: 'peppers.environments.outdoor.phases.fruiting.care',
          editable: true,
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '05-15',
            end: '06-15',
            description: 'peppers.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '08-01',
            end: '10-15',
            description: 'peppers.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'peppers.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-15',
            end: '11-15',
            description: 'peppers.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 10,
          description: 'peppers.environments.greenhouse.phases.germination.description',
          care: 'peppers.environments.greenhouse.phases.germination.care',
          editable: true,
        },
        seedling: {
          days: 21,
          description: 'peppers.environments.greenhouse.phases.seedling.description',
          care: 'peppers.environments.greenhouse.phases.seedling.care',
          editable: true,
        },
        vegetative: {
          days: 35,
          description: 'peppers.environments.greenhouse.phases.vegetative.description',
          care: 'peppers.environments.greenhouse.phases.vegetative.care',
          editable: true,
        },
        flowering: {
          days: 21,
          description: 'peppers.environments.greenhouse.phases.flowering.description',
          care: 'peppers.environments.greenhouse.phases.flowering.care',
          editable: true,
        },
        fruiting: {
          days: 60,
          description: 'peppers.environments.greenhouse.phases.fruiting.description',
          care: 'peppers.environments.greenhouse.phases.fruiting.care',
          editable: true,
        },
      },
    },
  },
  careTips: {
    watering: 'peppers.careTips.watering',
    fertilizing: 'peppers.careTips.fertilizing',
    sunlight: 'peppers.careTips.sunlight',
    spacing: 'peppers.careTips.spacing',
    temperature: 'peppers.careTips.temperature',
    soilPH: 'peppers.careTips.soilPH',
    support: 'peppers.careTips.support',
  },
  commonProblems: createProblemRefs(['blossomEndRot', 'lateBlight', 'powderyMildew'], 'vegetables'),
};

export default peppers;
