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
          description: 'mint.environments.indoor.phases.germination.description',
          care: 'mint.environments.indoor.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'mint.environments.indoor.phases.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.environments.indoor.phases.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'mint.environments.indoor.phases.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.environments.indoor.phases.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'mint.environments.indoor.phases.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.environments.indoor.phases.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'mint.environments.indoor.phases.seedling.description',
          care: 'mint.environments.indoor.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'mint.environments.indoor.phases.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.environments.indoor.phases.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'mint.environments.indoor.phases.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'mint.environments.indoor.phases.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'mint.environments.indoor.phases.seedling.coco.watering' },
            fertilizing: { interval: 7, description: 'mint.environments.indoor.phases.seedling.coco.fertilizing' },
          },
        },
        vegetative: {
          days: 30,
          description: 'mint.environments.indoor.phases.vegetative.description',
          care: 'mint.environments.indoor.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'mint.environments.indoor.phases.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'mint.environments.indoor.phases.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'mint.environments.indoor.phases.vegetative.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.environments.indoor.phases.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'mint.environments.indoor.phases.vegetative.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.environments.indoor.phases.vegetative.coco.fertilizing',
            },
          },
        },
        harvest: {
          days: 60,
          description: 'mint.environments.indoor.phases.harvest.description',
          care: 'mint.environments.indoor.phases.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 2, description: 'mint.environments.indoor.phases.harvest.soil.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.environments.indoor.phases.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'mint.environments.indoor.phases.harvest.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.environments.indoor.phases.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'mint.environments.indoor.phases.harvest.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.environments.indoor.phases.harvest.coco.fertilizing',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 10,
          description: 'mint.environments.outdoor.phases.germination.description',
          care: 'mint.environments.outdoor.phases.germination.care',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'mint.environments.outdoor.phases.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.environments.outdoor.phases.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'mint.environments.outdoor.phases.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.environments.outdoor.phases.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'mint.environments.outdoor.phases.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.environments.outdoor.phases.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'mint.environments.outdoor.phases.seedling.description',
          care: 'mint.environments.outdoor.phases.seedling.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'mint.environments.outdoor.phases.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.environments.outdoor.phases.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'mint.environments.outdoor.phases.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'mint.environments.outdoor.phases.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'mint.environments.outdoor.phases.seedling.coco.watering' },
            fertilizing: { interval: 7, description: 'mint.environments.outdoor.phases.seedling.coco.fertilizing' },
          },
        },
        vegetative: {
          days: 30,
          description: 'mint.environments.outdoor.phases.vegetative.description',
          care: 'mint.environments.outdoor.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'mint.environments.outdoor.phases.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'mint.environments.outdoor.phases.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'mint.environments.outdoor.phases.vegetative.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.environments.outdoor.phases.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'mint.environments.outdoor.phases.vegetative.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.environments.outdoor.phases.vegetative.coco.fertilizing',
            },
          },
        },
        harvest: {
          days: 60,
          description: 'mint.environments.outdoor.phases.harvest.description',
          care: 'mint.environments.outdoor.phases.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 2, description: 'mint.environments.outdoor.phases.harvest.soil.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.environments.outdoor.phases.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'mint.environments.outdoor.phases.harvest.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.environments.outdoor.phases.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'mint.environments.outdoor.phases.harvest.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.environments.outdoor.phases.harvest.coco.fertilizing',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-15',
            description: 'mint.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-01',
            end: '10-31',
            description: 'mint.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '07-01',
            description: 'mint.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '05-01',
            end: '11-30',
            description: 'mint.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
      naturalTiming: 'mint.environments.outdoor.naturalTiming',
    },
    greenhouse: {
      phases: {
        germination: {
          days: 10,
          description: 'mint.environments.greenhouse.phases.germination.description',
          care: 'mint.environments.greenhouse.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'mint.environments.greenhouse.phases.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.environments.greenhouse.phases.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'mint.environments.greenhouse.phases.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.environments.greenhouse.phases.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'mint.environments.greenhouse.phases.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.environments.greenhouse.phases.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'mint.environments.greenhouse.phases.seedling.description',
          care: 'mint.environments.greenhouse.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'mint.environments.greenhouse.phases.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'mint.environments.greenhouse.phases.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'mint.environments.greenhouse.phases.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'mint.environments.greenhouse.phases.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'mint.environments.greenhouse.phases.seedling.coco.watering' },
            fertilizing: { interval: 7, description: 'mint.environments.greenhouse.phases.seedling.coco.fertilizing' },
          },
        },
        vegetative: {
          days: 30,
          description: 'mint.environments.greenhouse.phases.vegetative.description',
          care: 'mint.environments.greenhouse.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'mint.environments.greenhouse.phases.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'mint.environments.greenhouse.phases.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'mint.environments.greenhouse.phases.vegetative.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.environments.greenhouse.phases.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'mint.environments.greenhouse.phases.vegetative.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.environments.greenhouse.phases.vegetative.coco.fertilizing',
            },
          },
        },
        harvest: {
          days: 60,
          description: 'mint.environments.greenhouse.phases.harvest.description',
          care: 'mint.environments.greenhouse.phases.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 2, description: 'mint.environments.greenhouse.phases.harvest.soil.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.environments.greenhouse.phases.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'mint.environments.greenhouse.phases.harvest.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.environments.greenhouse.phases.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'mint.environments.greenhouse.phases.harvest.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'mint.environments.greenhouse.phases.harvest.coco.fertilizing',
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
