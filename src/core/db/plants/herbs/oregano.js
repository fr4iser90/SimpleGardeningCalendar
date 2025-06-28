/**
 * Oregano Plant Data
 * Growing information for Oregano
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const oregano = {
  name: 'Oregano',
  category: 'category.herbs',
  tags: [PLANT_TAGS.PERENNIAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🌿',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 10,
          description: 'plant.oregano.indoor.germination.description',
          care: 'plant.oregano.indoor.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'plant.oregano.indoor.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.oregano.indoor.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.oregano.indoor.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.oregano.indoor.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plant.oregano.indoor.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.oregano.indoor.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'plant.oregano.indoor.seedling.description',
          care: 'plant.oregano.indoor.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'plant.oregano.indoor.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.oregano.indoor.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.oregano.indoor.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.oregano.indoor.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.oregano.indoor.seedling.coco.watering' },
            fertilizing: { interval: 7, description: 'plant.oregano.indoor.seedling.coco.fertilizing' },
          },
        },
        vegetative: {
          days: 30,
          description: 'plant.oregano.indoor.vegetative.description',
          care: 'plant.oregano.indoor.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'plant.oregano.indoor.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.oregano.indoor.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.oregano.indoor.vegetative.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.oregano.indoor.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.oregano.indoor.vegetative.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.oregano.indoor.vegetative.coco.fertilizing',
            },
          },
        },
        harvest: {
          days: 60,
          description: 'plant.oregano.indoor.harvest.description',
          care: 'plant.oregano.indoor.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'plant.oregano.indoor.harvest.soil.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.oregano.indoor.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.oregano.indoor.harvest.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.oregano.indoor.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.oregano.indoor.harvest.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.oregano.indoor.harvest.coco.fertilizing',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 10,
          description: 'plant.oregano.outdoor.germination.description',
          care: 'plant.oregano.outdoor.germination.care',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'plant.oregano.outdoor.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.oregano.outdoor.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.oregano.outdoor.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.oregano.outdoor.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plant.oregano.outdoor.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.oregano.outdoor.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'plant.oregano.outdoor.seedling.description',
          care: 'plant.oregano.outdoor.seedling.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'plant.oregano.outdoor.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.oregano.outdoor.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.oregano.outdoor.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.oregano.outdoor.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.oregano.outdoor.seedling.coco.watering' },
            fertilizing: { interval: 7, description: 'plant.oregano.outdoor.seedling.coco.fertilizing' },
          },
        },
        vegetative: {
          days: 30,
          description: 'plant.oregano.outdoor.vegetative.description',
          care: 'plant.oregano.outdoor.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'plant.oregano.outdoor.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.oregano.outdoor.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.oregano.outdoor.vegetative.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.oregano.outdoor.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.oregano.outdoor.vegetative.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.oregano.outdoor.vegetative.coco.fertilizing',
            },
          },
        },
        harvest: {
          days: 60,
          description: 'plant.oregano.outdoor.harvest.description',
          care: 'plant.oregano.outdoor.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'plant.oregano.outdoor.harvest.soil.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.oregano.outdoor.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.oregano.outdoor.harvest.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.oregano.outdoor.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.oregano.outdoor.harvest.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.oregano.outdoor.harvest.coco.fertilizing',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-15',
            description: 'plant.oregano.outdoor.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-01',
            end: '10-31',
            description: 'plant.oregano.outdoor.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '07-01',
            description: 'plant.oregano.outdoor.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '05-01',
            end: '11-30',
            description: 'plant.oregano.outdoor.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 10,
          description: 'plant.oregano.greenhouse.germination.description',
          care: 'plant.oregano.greenhouse.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'plant.oregano.greenhouse.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.oregano.greenhouse.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.oregano.greenhouse.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.oregano.greenhouse.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plant.oregano.greenhouse.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.oregano.greenhouse.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'plant.oregano.greenhouse.seedling.description',
          care: 'plant.oregano.greenhouse.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'plant.oregano.greenhouse.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.oregano.greenhouse.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.oregano.greenhouse.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.oregano.greenhouse.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.oregano.greenhouse.seedling.coco.watering' },
            fertilizing: { interval: 7, description: 'plant.oregano.greenhouse.seedling.coco.fertilizing' },
          },
        },
        vegetative: {
          days: 30,
          description: 'plant.oregano.greenhouse.vegetative.description',
          care: 'plant.oregano.greenhouse.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'plant.oregano.greenhouse.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.oregano.greenhouse.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.oregano.greenhouse.vegetative.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.oregano.greenhouse.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.oregano.greenhouse.vegetative.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.oregano.greenhouse.vegetative.coco.fertilizing',
            },
          },
        },
        harvest: {
          days: 60,
          description: 'plant.oregano.greenhouse.harvest.description',
          care: 'plant.oregano.greenhouse.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'plant.oregano.greenhouse.harvest.soil.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.oregano.greenhouse.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.oregano.greenhouse.harvest.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.oregano.greenhouse.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.oregano.greenhouse.harvest.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.oregano.greenhouse.harvest.coco.fertilizing',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'plant.oregano.careTips.watering',
    fertilizing: 'plant.oregano.careTips.fertilizing',
    sunlight: 'plant.oregano.careTips.sunlight',
    spacing: 'plant.oregano.careTips.spacing',
    temperature: 'plant.oregano.careTips.temperature',
    soilPH: 'plant.oregano.careTips.soilPH',
    harvesting: 'plant.oregano.careTips.harvesting',
  },
  commonProblems: createProblemRefs(['rootRot', 'leggyGrowth', 'winterDamage'], 'herbs'),
};

export default oregano; 