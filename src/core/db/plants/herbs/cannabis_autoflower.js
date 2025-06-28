/**
 * Cannabis Autoflower Plant Data
 * Growing information for Cannabis Autoflower varieties
 * Now categorized as Herb with Cannabis tag
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const cannabis_autoflower = {
  name: 'cannabis_autoflower.name',
  category: 'category.herbs',
  tags: [PLANT_TAGS.CANNABIS, PLANT_TAGS.ANNUAL],
  legalNote: 'cannabis_autoflower.legalNote',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 3,
          description: 'cannabis_autoflower.environments.indoor.phases.germination.description',
          care: 'cannabis_autoflower.environments.indoor.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'cannabis_autoflower.environments.indoor.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.environments.indoor.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.environments.indoor.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.environments.indoor.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cannabis_autoflower.environments.indoor.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.environments.indoor.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 10,
          description: 'cannabis_autoflower.environments.indoor.phases.seedling.description',
          care: 'cannabis_autoflower.environments.indoor.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.environments.indoor.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.environments.indoor.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_autoflower.environments.indoor.phases.seedling.hydro.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.environments.indoor.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.environments.indoor.phases.seedling.coco.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.environments.indoor.phases.seedling.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 21,
          description: 'cannabis_autoflower.environments.indoor.phases.vegetative.description',
          care: 'cannabis_autoflower.environments.indoor.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.environments.indoor.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.environments.indoor.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.environments.indoor.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.environments.indoor.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.environments.indoor.phases.vegetative.coco.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.environments.indoor.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        preflower: {
          days: 7,
          description: 'cannabis_autoflower.environments.indoor.phases.preflower.description',
          care: 'cannabis_autoflower.environments.indoor.phases.preflower.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.environments.indoor.phases.preflower.soil.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.environments.indoor.phases.preflower.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.environments.indoor.phases.preflower.hydro.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.environments.indoor.phases.preflower.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.environments.indoor.phases.preflower.coco.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.environments.indoor.phases.preflower.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 35,
          description: 'cannabis_autoflower.environments.indoor.phases.flowering.description',
          care: 'cannabis_autoflower.environments.indoor.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.environments.indoor.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.environments.indoor.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.environments.indoor.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.environments.indoor.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.environments.indoor.phases.flowering.coco.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.environments.indoor.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 7,
          description: 'cannabis_autoflower.environments.indoor.phases.harvest.description',
          care: 'cannabis_autoflower.environments.indoor.phases.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 1, description: 'cannabis_autoflower.environments.indoor.phases.harvest.soil.watering.description' },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.environments.indoor.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_autoflower.environments.indoor.phases.harvest.hydro.watering.description' },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.environments.indoor.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.environments.indoor.phases.harvest.coco.watering.description' },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.environments.indoor.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 3,
          description: 'cannabis_autoflower.environments.outdoor.phases.germination.description',
          care: 'cannabis_autoflower.environments.outdoor.phases.germination.care',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'cannabis_autoflower.environments.outdoor.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.environments.outdoor.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.environments.outdoor.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.environments.outdoor.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cannabis_autoflower.environments.outdoor.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.environments.outdoor.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'cannabis_autoflower.environments.outdoor.phases.seedling.description',
          care: 'cannabis_autoflower.environments.outdoor.phases.seedling.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.environments.outdoor.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.environments.outdoor.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_autoflower.environments.outdoor.phases.seedling.hydro.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.environments.outdoor.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.environments.outdoor.phases.seedling.coco.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.environments.outdoor.phases.seedling.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 35,
          description: 'cannabis_autoflower.environments.outdoor.phases.vegetative.description',
          care: 'cannabis_autoflower.environments.outdoor.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.environments.outdoor.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.environments.outdoor.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.environments.outdoor.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.environments.outdoor.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.environments.outdoor.phases.vegetative.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.environments.outdoor.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        preflower: {
          days: 7,
          description: 'cannabis_autoflower.environments.outdoor.phases.preflower.description',
          care: 'cannabis_autoflower.environments.outdoor.phases.preflower.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.environments.outdoor.phases.preflower.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.environments.outdoor.phases.preflower.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_autoflower.environments.outdoor.phases.preflower.hydro.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.environments.outdoor.phases.preflower.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.environments.outdoor.phases.preflower.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.environments.outdoor.phases.preflower.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 49,
          description: 'cannabis_autoflower.environments.outdoor.phases.flowering.description',
          care: 'cannabis_autoflower.environments.outdoor.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.environments.outdoor.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.environments.outdoor.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.environments.outdoor.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.environments.outdoor.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.environments.outdoor.phases.flowering.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.environments.outdoor.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 7,
          description: 'cannabis_autoflower.environments.outdoor.phases.harvest.description',
          care: 'cannabis_autoflower.environments.outdoor.phases.harvest.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.environments.outdoor.phases.harvest.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.environments.outdoor.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.environments.outdoor.phases.harvest.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.environments.outdoor.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cannabis_autoflower.environments.outdoor.phases.harvest.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.environments.outdoor.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-15',
            end: '07-01',
            description: 'cannabis_autoflower.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '07-01',
            end: '10-15',
            description: 'cannabis_autoflower.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-15',
            end: '08-01',
            description: 'cannabis_autoflower.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-01',
            end: '11-01',
            description: 'cannabis_autoflower.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 3,
          description: 'cannabis_autoflower.environments.greenhouse.phases.germination.description',
          care: 'cannabis_autoflower.environments.greenhouse.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'cannabis_autoflower.environments.greenhouse.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.environments.greenhouse.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.environments.greenhouse.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.environments.greenhouse.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cannabis_autoflower.environments.greenhouse.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.environments.greenhouse.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'cannabis_autoflower.environments.greenhouse.phases.seedling.description',
          care: 'cannabis_autoflower.environments.greenhouse.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.environments.greenhouse.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.environments.greenhouse.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_autoflower.environments.greenhouse.phases.seedling.hydro.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.environments.greenhouse.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.environments.greenhouse.phases.seedling.coco.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.environments.greenhouse.phases.seedling.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 35,
          description: 'cannabis_autoflower.environments.greenhouse.phases.vegetative.description',
          care: 'cannabis_autoflower.environments.greenhouse.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.environments.greenhouse.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.environments.greenhouse.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.environments.greenhouse.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.environments.greenhouse.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.environments.greenhouse.phases.vegetative.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.environments.greenhouse.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        preflower: {
          days: 7,
          description: 'cannabis_autoflower.environments.greenhouse.phases.preflower.description',
          care: 'cannabis_autoflower.environments.greenhouse.phases.preflower.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.environments.greenhouse.phases.preflower.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.environments.greenhouse.phases.preflower.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_autoflower.environments.greenhouse.phases.preflower.hydro.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.environments.greenhouse.phases.preflower.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.environments.greenhouse.phases.preflower.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.environments.greenhouse.phases.preflower.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 49,
          description: 'cannabis_autoflower.environments.greenhouse.phases.flowering.description',
          care: 'cannabis_autoflower.environments.greenhouse.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.environments.greenhouse.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.environments.greenhouse.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.environments.greenhouse.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.environments.greenhouse.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.environments.greenhouse.phases.flowering.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.environments.greenhouse.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 7,
          description: 'cannabis_autoflower.environments.greenhouse.phases.harvest.description',
          care: 'cannabis_autoflower.environments.greenhouse.phases.harvest.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.environments.greenhouse.phases.harvest.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.environments.greenhouse.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.environments.greenhouse.phases.harvest.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.environments.greenhouse.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cannabis_autoflower.environments.greenhouse.phases.harvest.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.environments.greenhouse.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'cannabis_autoflower.careTips.watering',
    fertilizing: 'cannabis_autoflower.careTips.fertilizing',
    sunlight: 'cannabis_autoflower.careTips.sunlight',
    spacing: 'cannabis_autoflower.careTips.spacing',
    support: 'cannabis_autoflower.careTips.support',
    humidity: 'cannabis_autoflower.careTips.humidity',
    temperature: 'cannabis_autoflower.careTips.temperature',
  },
  commonProblems: createProblemRefs(['stuntedGrowth', 'nutrientBurn', 'shortCycle'], 'cannabis'),
};

export default cannabis_autoflower;
