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
          description: 'oregano.indoor.germination.description',
          care: 'oregano.indoor.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'oregano.indoor.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'oregano.indoor.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'oregano.indoor.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'oregano.indoor.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'oregano.indoor.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'oregano.indoor.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'oregano.indoor.seedling.description',
          care: 'oregano.indoor.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'oregano.indoor.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'oregano.indoor.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'oregano.indoor.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'oregano.indoor.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'oregano.indoor.seedling.coco.watering' },
            fertilizing: { interval: 7, description: 'oregano.indoor.seedling.coco.fertilizing' },
          },
        },
        vegetative: {
          days: 30,
          description: 'oregano.indoor.vegetative.description',
          care: 'oregano.indoor.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'oregano.indoor.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'oregano.indoor.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'oregano.indoor.vegetative.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'oregano.indoor.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'oregano.indoor.vegetative.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'oregano.indoor.vegetative.coco.fertilizing',
            },
          },
        },
        harvest: {
          days: 60,
          description: 'oregano.indoor.harvest.description',
          care: 'oregano.indoor.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'oregano.indoor.harvest.soil.watering' },
            fertilizing: {
              interval: 14,
              description: 'oregano.indoor.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'oregano.indoor.harvest.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'oregano.indoor.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'oregano.indoor.harvest.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'oregano.indoor.harvest.coco.fertilizing',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 10,
          description: 'oregano.outdoor.germination.description',
          care: 'oregano.outdoor.germination.care',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'oregano.outdoor.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'oregano.outdoor.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'oregano.outdoor.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'oregano.outdoor.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'oregano.outdoor.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'oregano.outdoor.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'oregano.outdoor.seedling.description',
          care: 'oregano.outdoor.seedling.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'oregano.outdoor.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'oregano.outdoor.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'oregano.outdoor.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'oregano.outdoor.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'oregano.outdoor.seedling.coco.watering' },
            fertilizing: { interval: 7, description: 'oregano.outdoor.seedling.coco.fertilizing' },
          },
        },
        vegetative: {
          days: 30,
          description: 'oregano.outdoor.vegetative.description',
          care: 'oregano.outdoor.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'oregano.outdoor.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'oregano.outdoor.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'oregano.outdoor.vegetative.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'oregano.outdoor.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'oregano.outdoor.vegetative.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'oregano.outdoor.vegetative.coco.fertilizing',
            },
          },
        },
        harvest: {
          days: 60,
          description: 'oregano.outdoor.harvest.description',
          care: 'oregano.outdoor.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'oregano.outdoor.harvest.soil.watering' },
            fertilizing: {
              interval: 14,
              description: 'oregano.outdoor.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'oregano.outdoor.harvest.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'oregano.outdoor.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'oregano.outdoor.harvest.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'oregano.outdoor.harvest.coco.fertilizing',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-15',
            description: 'oregano.outdoor.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-01',
            end: '10-31',
            description: 'oregano.outdoor.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '07-01',
            description: 'oregano.outdoor.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '05-01',
            end: '11-30',
            description: 'oregano.outdoor.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 10,
          description: 'oregano.greenhouse.germination.description',
          care: 'oregano.greenhouse.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'oregano.greenhouse.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'oregano.greenhouse.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'oregano.greenhouse.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'oregano.greenhouse.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'oregano.greenhouse.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'oregano.greenhouse.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'oregano.greenhouse.seedling.description',
          care: 'oregano.greenhouse.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'oregano.greenhouse.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'oregano.greenhouse.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'oregano.greenhouse.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'oregano.greenhouse.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'oregano.greenhouse.seedling.coco.watering' },
            fertilizing: { interval: 7, description: 'oregano.greenhouse.seedling.coco.fertilizing' },
          },
        },
        vegetative: {
          days: 30,
          description: 'oregano.greenhouse.vegetative.description',
          care: 'oregano.greenhouse.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'oregano.greenhouse.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'oregano.greenhouse.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'oregano.greenhouse.vegetative.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'oregano.greenhouse.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'oregano.greenhouse.vegetative.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'oregano.greenhouse.vegetative.coco.fertilizing',
            },
          },
        },
        harvest: {
          days: 60,
          description: 'oregano.greenhouse.harvest.description',
          care: 'oregano.greenhouse.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'oregano.greenhouse.harvest.soil.watering' },
            fertilizing: {
              interval: 14,
              description: 'oregano.greenhouse.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'oregano.greenhouse.harvest.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'oregano.greenhouse.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'oregano.greenhouse.harvest.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'oregano.greenhouse.harvest.coco.fertilizing',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'oregano.careTips.watering',
    fertilizing: 'oregano.careTips.fertilizing',
    sunlight: 'oregano.careTips.sunlight',
    spacing: 'oregano.careTips.spacing',
    temperature: 'oregano.careTips.temperature',
    soilPH: 'oregano.careTips.soilPH',
    harvesting: 'oregano.careTips.harvesting',
  },
  commonProblems: createProblemRefs(['rootRot', 'leggyGrowth', 'winterDamage'], 'herbs'),
};

export default oregano; 