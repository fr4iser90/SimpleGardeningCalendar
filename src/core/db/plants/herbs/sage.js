/**
 * Sage Plant Data
 * Growing information for Sage
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const sage = {
  name: 'plants.herbs.sage.name',
  category: 'category.herbs',
  tags: [PLANT_TAGS.PERENNIAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🌿',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 14,
          description: 'plants.herbs.sage.phases.germination.description',
          care: 'plants.herbs.sage.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'plants.herbs.sage.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.sage.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plants.herbs.sage.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.sage.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plants.herbs.sage.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.sage.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 28,
          description: 'plants.herbs.sage.phases.seedling.description',
          care: 'plants.herbs.sage.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'plants.herbs.sage.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.sage.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.sage.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'plants.herbs.sage.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'plants.herbs.sage.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'plants.herbs.sage.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 40,
          description: 'plants.herbs.sage.phases.vegetative.description',
          care: 'plants.herbs.sage.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'plants.herbs.sage.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.sage.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.sage.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.sage.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'plants.herbs.sage.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.sage.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 90,
          description: 'plants.herbs.sage.phases.harvest.description',
          care: 'plants.herbs.sage.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 4, 
              description: 'plants.herbs.sage.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.sage.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.sage.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.sage.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'plants.herbs.sage.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.sage.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 14,
          description: 'plants.herbs.sage.phases.germination.description',
          care: 'plants.herbs.sage.phases.germination.care',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'plants.herbs.sage.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.sage.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plants.herbs.sage.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.sage.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plants.herbs.sage.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.sage.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 28,
          description: 'plants.herbs.sage.phases.seedling.description',
          care: 'plants.herbs.sage.phases.seedling.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'plants.herbs.sage.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.sage.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.sage.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'plants.herbs.sage.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'plants.herbs.sage.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'plants.herbs.sage.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 40,
          description: 'plants.herbs.sage.phases.vegetative.description',
          care: 'plants.herbs.sage.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 4,
              description: 'plants.herbs.sage.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.sage.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.sage.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.sage.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'plants.herbs.sage.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.sage.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 90,
          description: 'plants.herbs.sage.phases.harvest.description',
          care: 'plants.herbs.sage.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 4, 
              description: 'plants.herbs.sage.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.sage.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.sage.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.sage.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'plants.herbs.sage.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.sage.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-15',
            end: '06-01',
            description: 'plants.herbs.sage.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-15',
            end: '10-31',
            description: 'plants.herbs.sage.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'plants.herbs.sage.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '05-15',
            end: '11-30',
            description: 'plants.herbs.sage.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 14,
          description: 'plants.herbs.sage.phases.germination.description',
          care: 'plants.herbs.sage.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'plants.herbs.sage.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.sage.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plants.herbs.sage.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.sage.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plants.herbs.sage.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.sage.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 28,
          description: 'plants.herbs.sage.phases.seedling.description',
          care: 'plants.herbs.sage.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'plants.herbs.sage.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.sage.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.sage.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'plants.herbs.sage.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'plants.herbs.sage.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'plants.herbs.sage.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 40,
          description: 'plants.herbs.sage.phases.vegetative.description',
          care: 'plants.herbs.sage.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'plants.herbs.sage.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.sage.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.sage.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.sage.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'plants.herbs.sage.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.sage.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 90,
          description: 'plants.herbs.sage.phases.harvest.description',
          care: 'plants.herbs.sage.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 4, 
              description: 'plants.herbs.sage.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.sage.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.sage.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.sage.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'plants.herbs.sage.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.sage.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'plants.herbs.sage.careTips.watering',
    fertilizing: 'plants.herbs.sage.careTips.fertilizing',
    sunlight: 'plants.herbs.sage.careTips.sunlight',
    spacing: 'plants.herbs.sage.careTips.spacing',
    temperature: 'plants.herbs.sage.careTips.temperature',
    soilPH: 'plants.herbs.sage.careTips.soilPH',
    harvesting: 'plants.herbs.sage.careTips.harvesting',
  },
  commonProblems: createProblemRefs(['rootRot', 'leggyGrowth', 'winterDamage'], 'herbs'),
};

export default sage; 