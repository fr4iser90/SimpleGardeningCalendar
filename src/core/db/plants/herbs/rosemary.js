/**
 * Rosemary Plant Data
 * Growing information for Rosemary
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const rosemary = {
  name: 'rosemary.name',
  category: 'category.herbs',
  tags: [PLANT_TAGS.PERENNIAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🌿',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 14,
          description: 'rosemary.environments.indoor.phases.germination.description',
          care: 'rosemary.environments.indoor.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'rosemary.environments.indoor.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.environments.indoor.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'rosemary.environments.indoor.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.environments.indoor.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'rosemary.environments.indoor.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.environments.indoor.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 28,
          description: 'rosemary.environments.indoor.phases.seedling.description',
          care: 'rosemary.environments.indoor.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'rosemary.environments.indoor.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.environments.indoor.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'rosemary.environments.indoor.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'rosemary.environments.indoor.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'rosemary.environments.indoor.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'rosemary.environments.indoor.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 45,
          description: 'rosemary.environments.indoor.phases.vegetative.description',
          care: 'rosemary.environments.indoor.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'rosemary.environments.indoor.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.environments.indoor.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'rosemary.environments.indoor.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.environments.indoor.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'rosemary.environments.indoor.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.environments.indoor.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 90,
          description: 'rosemary.environments.indoor.phases.harvest.description',
          care: 'rosemary.environments.indoor.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 4, 
              description: 'rosemary.environments.indoor.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.environments.indoor.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'rosemary.environments.indoor.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.environments.indoor.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'rosemary.environments.indoor.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.environments.indoor.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 14,
          description: 'rosemary.environments.outdoor.phases.germination.description',
          care: 'rosemary.environments.outdoor.phases.germination.care',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'rosemary.environments.outdoor.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.environments.outdoor.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'rosemary.environments.outdoor.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.environments.outdoor.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'rosemary.environments.outdoor.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.environments.outdoor.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 28,
          description: 'rosemary.environments.outdoor.phases.seedling.description',
          care: 'rosemary.environments.outdoor.phases.seedling.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'rosemary.environments.outdoor.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.environments.outdoor.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'rosemary.environments.outdoor.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'rosemary.environments.outdoor.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'rosemary.environments.outdoor.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'rosemary.environments.outdoor.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 45,
          description: 'rosemary.environments.outdoor.phases.vegetative.description',
          care: 'rosemary.environments.outdoor.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 4,
              description: 'rosemary.environments.outdoor.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.environments.outdoor.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'rosemary.environments.outdoor.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.environments.outdoor.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'rosemary.environments.outdoor.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.environments.outdoor.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 90,
          description: 'rosemary.environments.outdoor.phases.harvest.description',
          care: 'rosemary.environments.outdoor.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 4, 
              description: 'rosemary.environments.outdoor.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.environments.outdoor.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'rosemary.environments.outdoor.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.environments.outdoor.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'rosemary.environments.outdoor.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.environments.outdoor.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-15',
            description: 'rosemary.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-01',
            end: '10-31',
            description: 'rosemary.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '07-01',
            description: 'rosemary.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '05-01',
            end: '11-30',
            description: 'rosemary.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 14,
          description: 'rosemary.environments.greenhouse.phases.germination.description',
          care: 'rosemary.environments.greenhouse.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'rosemary.environments.greenhouse.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.environments.greenhouse.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'rosemary.environments.greenhouse.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.environments.greenhouse.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'rosemary.environments.greenhouse.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.environments.greenhouse.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 28,
          description: 'rosemary.environments.greenhouse.phases.seedling.description',
          care: 'rosemary.environments.greenhouse.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'rosemary.environments.greenhouse.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.environments.greenhouse.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'rosemary.environments.greenhouse.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'rosemary.environments.greenhouse.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'rosemary.environments.greenhouse.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'rosemary.environments.greenhouse.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 45,
          description: 'rosemary.environments.greenhouse.phases.vegetative.description',
          care: 'rosemary.environments.greenhouse.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'rosemary.environments.greenhouse.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.environments.greenhouse.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'rosemary.environments.greenhouse.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.environments.greenhouse.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'rosemary.environments.greenhouse.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.environments.greenhouse.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 90,
          description: 'rosemary.environments.greenhouse.phases.harvest.description',
          care: 'rosemary.environments.greenhouse.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 4, 
              description: 'rosemary.environments.greenhouse.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.environments.greenhouse.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'rosemary.environments.greenhouse.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.environments.greenhouse.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'rosemary.environments.greenhouse.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.environments.greenhouse.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'rosemary.careTips.watering',
    fertilizing: 'rosemary.careTips.fertilizing',
    sunlight: 'rosemary.careTips.sunlight',
    spacing: 'rosemary.careTips.spacing',
    temperature: 'rosemary.careTips.temperature',
    soilPH: 'rosemary.careTips.soilPH',
    harvesting: 'rosemary.careTips.harvesting',
  },
  commonProblems: createProblemRefs(['rootRot', 'leggyGrowth', 'winterDamage'], 'herbs'),
};

export default rosemary;
