/**
 * Sage Plant Data
 * Growing information for Sage
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const sage = {
  name: 'sage.name',
  category: 'category.herbs',
  tags: [PLANT_TAGS.PERENNIAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🌿',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 14,
          description: 'sage.phases.germination.description',
          care: 'sage.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'sage.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sage.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'sage.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sage.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'sage.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sage.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 28,
          description: 'sage.phases.seedling.description',
          care: 'sage.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'sage.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sage.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'sage.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'sage.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'sage.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'sage.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 40,
          description: 'sage.phases.vegetative.description',
          care: 'sage.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'sage.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'sage.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'sage.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'sage.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'sage.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'sage.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 90,
          description: 'sage.phases.harvest.description',
          care: 'sage.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 4, 
              description: 'sage.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'sage.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'sage.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'sage.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'sage.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'sage.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 14,
          description: 'sage.phases.germination.description',
          care: 'sage.phases.germination.care',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'sage.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sage.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'sage.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sage.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'sage.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sage.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 28,
          description: 'sage.phases.seedling.description',
          care: 'sage.phases.seedling.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'sage.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sage.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'sage.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'sage.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'sage.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'sage.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 40,
          description: 'sage.phases.vegetative.description',
          care: 'sage.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 4,
              description: 'sage.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'sage.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'sage.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'sage.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'sage.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'sage.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 90,
          description: 'sage.phases.harvest.description',
          care: 'sage.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 4, 
              description: 'sage.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'sage.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'sage.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'sage.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'sage.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'sage.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-15',
            end: '06-01',
            description: 'sage.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-15',
            end: '10-31',
            description: 'sage.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'sage.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '05-15',
            end: '11-30',
            description: 'sage.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 14,
          description: 'sage.phases.germination.description',
          care: 'sage.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'sage.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sage.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'sage.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sage.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'sage.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sage.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 28,
          description: 'sage.phases.seedling.description',
          care: 'sage.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'sage.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sage.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'sage.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'sage.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'sage.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'sage.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 40,
          description: 'sage.phases.vegetative.description',
          care: 'sage.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'sage.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'sage.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'sage.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'sage.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'sage.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'sage.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 90,
          description: 'sage.phases.harvest.description',
          care: 'sage.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 4, 
              description: 'sage.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'sage.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'sage.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'sage.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'sage.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'sage.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'sage.careTips.watering',
    fertilizing: 'sage.careTips.fertilizing',
    sunlight: 'sage.careTips.sunlight',
    spacing: 'sage.careTips.spacing',
    temperature: 'sage.careTips.temperature',
    soilPH: 'sage.careTips.soilPH',
    harvesting: 'sage.careTips.harvesting',
  },
  commonProblems: createProblemRefs(['rootRot', 'leggyGrowth', 'winterDamage'], 'herbs'),
};

export default sage; 