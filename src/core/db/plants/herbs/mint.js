/**
 * Mint Plant Data
 * Growing information for Mint
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const mint = {
  name: 'Mint',
  category: 'category.herbs',
  tags: [PLANT_TAGS.PERENNIAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🌿',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 10,
          description: 'plant.mint.indoor.germination.description',
          care: 'plant.mint.indoor.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'plant.mint.indoor.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.mint.indoor.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.mint.indoor.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.mint.indoor.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plant.mint.indoor.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.mint.indoor.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'plant.mint.indoor.seedling.description',
          care: 'plant.mint.indoor.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'plant.mint.indoor.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.mint.indoor.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.mint.indoor.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.mint.indoor.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.mint.indoor.seedling.coco.watering' },
            fertilizing: { interval: 7, description: 'plant.mint.indoor.seedling.coco.fertilizing' },
          },
        },
        vegetative: {
          days: 30,
          description: 'plant.mint.indoor.vegetative.description',
          care: 'plant.mint.indoor.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'plant.mint.indoor.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.mint.indoor.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.mint.indoor.vegetative.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.mint.indoor.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.mint.indoor.vegetative.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.mint.indoor.vegetative.coco.fertilizing',
            },
          },
        },
        harvest: {
          days: 60,
          description: 'plant.mint.indoor.harvest.description',
          care: 'plant.mint.indoor.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 2, description: 'plant.mint.indoor.harvest.soil.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.mint.indoor.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.mint.indoor.harvest.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.mint.indoor.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.mint.indoor.harvest.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.mint.indoor.harvest.coco.fertilizing',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 10,
          description: 'plant.mint.outdoor.germination.description',
          care: 'plant.mint.outdoor.germination.care',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'plant.mint.outdoor.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.mint.outdoor.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.mint.outdoor.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.mint.outdoor.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plant.mint.outdoor.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.mint.outdoor.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'plant.mint.outdoor.seedling.description',
          care: 'plant.mint.outdoor.seedling.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'plant.mint.outdoor.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.mint.outdoor.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.mint.outdoor.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.mint.outdoor.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.mint.outdoor.seedling.coco.watering' },
            fertilizing: { interval: 7, description: 'plant.mint.outdoor.seedling.coco.fertilizing' },
          },
        },
        vegetative: {
          days: 30,
          description: 'plant.mint.outdoor.vegetative.description',
          care: 'plant.mint.outdoor.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'plant.mint.outdoor.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.mint.outdoor.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.mint.outdoor.vegetative.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.mint.outdoor.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.mint.outdoor.vegetative.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.mint.outdoor.vegetative.coco.fertilizing',
            },
          },
        },
        harvest: {
          days: 60,
          description: 'plant.mint.outdoor.harvest.description',
          care: 'plant.mint.outdoor.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 2, description: 'plant.mint.outdoor.harvest.soil.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.mint.outdoor.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.mint.outdoor.harvest.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.mint.outdoor.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.mint.outdoor.harvest.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.mint.outdoor.harvest.coco.fertilizing',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-15',
            description: 'plant.mint.outdoor.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-01',
            end: '10-31',
            description: 'plant.mint.outdoor.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '07-01',
            description: 'plant.mint.outdoor.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '05-01',
            end: '11-30',
            description: 'plant.mint.outdoor.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 10,
          description: 'plant.mint.greenhouse.germination.description',
          care: 'plant.mint.greenhouse.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'plant.mint.greenhouse.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.mint.greenhouse.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.mint.greenhouse.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.mint.greenhouse.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plant.mint.greenhouse.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.mint.greenhouse.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'plant.mint.greenhouse.seedling.description',
          care: 'plant.mint.greenhouse.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'plant.mint.greenhouse.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.mint.greenhouse.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.mint.greenhouse.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.mint.greenhouse.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.mint.greenhouse.seedling.coco.watering' },
            fertilizing: { interval: 7, description: 'plant.mint.greenhouse.seedling.coco.fertilizing' },
          },
        },
        vegetative: {
          days: 30,
          description: 'plant.mint.greenhouse.vegetative.description',
          care: 'plant.mint.greenhouse.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'plant.mint.greenhouse.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.mint.greenhouse.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.mint.greenhouse.vegetative.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.mint.greenhouse.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.mint.greenhouse.vegetative.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.mint.greenhouse.vegetative.coco.fertilizing',
            },
          },
        },
        harvest: {
          days: 60,
          description: 'plant.mint.greenhouse.harvest.description',
          care: 'plant.mint.greenhouse.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 2, description: 'plant.mint.greenhouse.harvest.soil.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.mint.greenhouse.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.mint.greenhouse.harvest.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.mint.greenhouse.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.mint.greenhouse.harvest.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.mint.greenhouse.harvest.coco.fertilizing',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'plant.mint.careTips.watering',
    fertilizing: 'plant.mint.careTips.fertilizing',
    sunlight: 'plant.mint.careTips.sunlight',
    spacing: 'plant.mint.careTips.spacing',
    temperature: 'plant.mint.careTips.temperature',
    soilPH: 'plant.mint.careTips.soilPH',
    harvesting: 'plant.mint.careTips.harvesting',
  },
  commonProblems: createProblemRefs(['rustDisease', 'rootRot', 'invasiveGrowth'], 'herbs'),
};

export default mint; 