/**
 * Basil Plant Data
 * Growing information for Basil
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const basil = {
  name: 'basil.name',
  category: 'category.herbs',
  tags: [PLANT_TAGS.ANNUAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🌿',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 7,
          description: 'basil.environments.indoor.phases.germination.description',
          care: 'basil.environments.indoor.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'basil.environments.indoor.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.environments.indoor.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'basil.environments.indoor.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.environments.indoor.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'basil.environments.indoor.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.environments.indoor.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 14,
          description: 'basil.environments.indoor.phases.seedling.description',
          care: 'basil.environments.indoor.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'basil.environments.indoor.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.environments.indoor.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.environments.indoor.phases.seedling.hydro.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'basil.environments.indoor.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.environments.indoor.phases.seedling.coco.watering.description' },
            fertilizing: { interval: 7, description: 'basil.environments.indoor.phases.seedling.coco.fertilizing.description' },
          },
        },
        vegetative: {
          days: 21,
          description: 'basil.environments.indoor.phases.vegetative.description',
          care: 'basil.environments.indoor.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'basil.environments.indoor.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'basil.environments.indoor.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.environments.indoor.phases.vegetative.hydro.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.environments.indoor.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.environments.indoor.phases.vegetative.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.environments.indoor.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 20,
          description: 'basil.environments.indoor.phases.flowering.description',
          care: 'basil.environments.indoor.phases.flowering.care',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'basil.environments.indoor.phases.flowering.soil.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'basil.environments.indoor.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.environments.indoor.phases.flowering.hydro.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'basil.environments.indoor.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.environments.indoor.phases.flowering.coco.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'basil.environments.indoor.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 30,
          description: 'basil.environments.indoor.phases.harvest.description',
          care: 'basil.environments.indoor.phases.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'basil.environments.indoor.phases.harvest.soil.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.environments.indoor.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.environments.indoor.phases.harvest.hydro.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.environments.indoor.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.environments.indoor.phases.harvest.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.environments.indoor.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 7,
          description: 'basil.environments.outdoor.phases.germination.description',
          care: 'basil.environments.outdoor.phases.germination.care',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'basil.environments.outdoor.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.environments.outdoor.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'basil.environments.outdoor.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.environments.outdoor.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'basil.environments.outdoor.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.environments.outdoor.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 14,
          description: 'basil.environments.outdoor.phases.seedling.description',
          care: 'basil.environments.outdoor.phases.seedling.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'basil.environments.outdoor.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.environments.outdoor.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.environments.outdoor.phases.seedling.hydro.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'basil.environments.outdoor.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.environments.outdoor.phases.seedling.coco.watering.description' },
            fertilizing: { interval: 7, description: 'basil.environments.outdoor.phases.seedling.coco.fertilizing.description' },
          },
        },
        vegetative: {
          days: 21,
          description: 'basil.environments.outdoor.phases.vegetative.description',
          care: 'basil.environments.outdoor.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'basil.environments.outdoor.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'basil.environments.outdoor.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.environments.outdoor.phases.vegetative.hydro.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.environments.outdoor.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.environments.outdoor.phases.vegetative.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.environments.outdoor.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 20,
          description: 'basil.environments.outdoor.phases.flowering.description',
          care: 'basil.environments.outdoor.phases.flowering.care',
          editable: false,
          soil: {
            watering: { interval: 3, description: 'basil.environments.outdoor.phases.flowering.soil.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'basil.environments.outdoor.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.environments.outdoor.phases.flowering.hydro.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'basil.environments.outdoor.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.environments.outdoor.phases.flowering.coco.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'basil.environments.outdoor.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 30,
          description: 'basil.environments.outdoor.phases.harvest.description',
          care: 'basil.environments.outdoor.phases.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'basil.environments.outdoor.phases.harvest.soil.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.environments.outdoor.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.environments.outdoor.phases.harvest.hydro.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.environments.outdoor.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.environments.outdoor.phases.harvest.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.environments.outdoor.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '05-15',
            end: '07-01',
            description: 'basil.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '07-01',
            end: '10-15',
            description: 'basil.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '04-01',
            end: '07-15',
            description: 'basil.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-01',
            end: '11-15',
            description: 'basil.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 7,
          description: 'basil.environments.greenhouse.phases.germination.description',
          care: 'basil.environments.greenhouse.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'basil.environments.greenhouse.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.environments.greenhouse.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'basil.environments.greenhouse.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.environments.greenhouse.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'basil.environments.greenhouse.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.environments.greenhouse.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 14,
          description: 'basil.environments.greenhouse.phases.seedling.description',
          care: 'basil.environments.greenhouse.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'basil.environments.greenhouse.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.environments.greenhouse.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.environments.greenhouse.phases.seedling.hydro.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'basil.environments.greenhouse.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.environments.greenhouse.phases.seedling.coco.watering.description' },
            fertilizing: { interval: 7, description: 'basil.environments.greenhouse.phases.seedling.coco.fertilizing.description' },
          },
        },
        vegetative: {
          days: 21,
          description: 'basil.environments.greenhouse.phases.vegetative.description',
          care: 'basil.environments.greenhouse.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'basil.environments.greenhouse.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'basil.environments.greenhouse.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.environments.greenhouse.phases.vegetative.hydro.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.environments.greenhouse.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.environments.greenhouse.phases.vegetative.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.environments.greenhouse.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 20,
          description: 'basil.environments.greenhouse.phases.flowering.description',
          care: 'basil.environments.greenhouse.phases.flowering.care',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'basil.environments.greenhouse.phases.flowering.soil.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'basil.environments.greenhouse.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.environments.greenhouse.phases.flowering.hydro.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'basil.environments.greenhouse.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.environments.greenhouse.phases.flowering.coco.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'basil.environments.greenhouse.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 30,
          description: 'basil.environments.greenhouse.phases.harvest.description',
          care: 'basil.environments.greenhouse.phases.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'basil.environments.greenhouse.phases.harvest.soil.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.environments.greenhouse.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.environments.greenhouse.phases.harvest.hydro.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.environments.greenhouse.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.environments.greenhouse.phases.harvest.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.environments.greenhouse.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'basil.careTips.watering',
    fertilizing: 'basil.careTips.fertilizing',
    sunlight: 'basil.careTips.sunlight',
    spacing: 'basil.careTips.spacing',
    temperature: 'basil.careTips.temperature',
    soilPH: 'basil.careTips.soilPH',
    harvesting: 'basil.careTips.harvesting',
  },
  commonProblems: createProblemRefs(['fusariumWilt', 'aphids', 'bolting'], 'herbs'),
};

export default basil;
