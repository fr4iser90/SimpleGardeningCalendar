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
          description: 'mint.germination.description',
          care: 'mint.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'mint.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'mint.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'mint.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'mint.seedling.description',
          care: 'mint.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'mint.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'mint.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'mint.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'mint.seedling.coco.watering' },
            fertilizing: { interval: 7, description: 'mint.seedling.coco.fertilizing' },
          },
        },
        vegetative: {
          days: 30,
          description: 'mint.vegetative.description',
          care: 'mint.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'mint.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'mint.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'mint.vegetative.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'mint.vegetative.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.vegetative.coco.fertilizing',
            },
          },
        },
        harvest: {
          days: 60,
          description: 'mint.harvest.description',
          care: 'mint.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 2, description: 'mint.harvest.soil.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'mint.harvest.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'mint.harvest.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.harvest.coco.fertilizing',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 10,
          description: 'mint.outdoor.germination.description',
          care: 'mint.outdoor.germination.care',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'mint.outdoor.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.outdoor.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'mint.outdoor.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.outdoor.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'mint.outdoor.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.outdoor.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'mint.outdoor.seedling.description',
          care: 'mint.outdoor.seedling.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'mint.outdoor.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.outdoor.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'mint.outdoor.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'mint.outdoor.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'mint.outdoor.seedling.coco.watering' },
            fertilizing: { interval: 7, description: 'mint.outdoor.seedling.coco.fertilizing' },
          },
        },
        vegetative: {
          days: 30,
          description: 'mint.outdoor.vegetative.description',
          care: 'mint.outdoor.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'mint.outdoor.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'mint.outdoor.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'mint.outdoor.vegetative.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.outdoor.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'mint.outdoor.vegetative.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.outdoor.vegetative.coco.fertilizing',
            },
          },
        },
        harvest: {
          days: 60,
          description: 'mint.outdoor.harvest.description',
          care: 'mint.outdoor.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 2, description: 'mint.outdoor.harvest.soil.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.outdoor.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'mint.outdoor.harvest.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.outdoor.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'mint.outdoor.harvest.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.outdoor.harvest.coco.fertilizing',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-15',
            description: 'mint.outdoor.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-01',
            end: '10-31',
            description: 'mint.outdoor.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '07-01',
            description: 'mint.outdoor.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '05-01',
            end: '11-30',
            description: 'mint.outdoor.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 10,
          description: 'mint.greenhouse.germination.description',
          care: 'mint.greenhouse.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'mint.greenhouse.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.greenhouse.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'mint.greenhouse.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.greenhouse.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'mint.greenhouse.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.greenhouse.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'mint.greenhouse.seedling.description',
          care: 'mint.greenhouse.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'mint.greenhouse.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.greenhouse.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'mint.greenhouse.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'mint.greenhouse.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'mint.greenhouse.seedling.coco.watering' },
            fertilizing: { interval: 7, description: 'mint.greenhouse.seedling.coco.fertilizing' },
          },
        },
        vegetative: {
          days: 30,
          description: 'mint.greenhouse.vegetative.description',
          care: 'mint.greenhouse.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'mint.greenhouse.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'mint.greenhouse.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'mint.greenhouse.vegetative.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.greenhouse.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'mint.greenhouse.vegetative.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.greenhouse.vegetative.coco.fertilizing',
            },
          },
        },
        harvest: {
          days: 60,
          description: 'mint.greenhouse.harvest.description',
          care: 'mint.greenhouse.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 2, description: 'mint.greenhouse.harvest.soil.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.greenhouse.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'mint.greenhouse.harvest.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.greenhouse.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'mint.greenhouse.harvest.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.greenhouse.harvest.coco.fertilizing',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'mint.careTips.watering',
    fertilizing: 'mint.careTips.fertilizing',
    sunlight: 'mint.careTips.sunlight',
    spacing: 'mint.careTips.spacing',
    temperature: 'mint.careTips.temperature',
    soilPH: 'mint.careTips.soilPH',
    harvesting: 'mint.careTips.harvesting',
  },
  commonProblems: createProblemRefs(['rustDisease', 'rootRot', 'invasiveGrowth'], 'herbs'),
};

export default mint; 