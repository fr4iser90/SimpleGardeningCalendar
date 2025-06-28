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
          description: 'rosemary.phases.germination.description',
          care: 'rosemary.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'rosemary.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'rosemary.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'rosemary.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 28,
          description: 'rosemary.phases.seedling.description',
          care: 'rosemary.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'rosemary.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'rosemary.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'rosemary.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'rosemary.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'rosemary.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 45,
          description: 'rosemary.phases.vegetative.description',
          care: 'rosemary.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'rosemary.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'rosemary.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'rosemary.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 90,
          description: 'rosemary.phases.harvest.description',
          care: 'rosemary.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 4, 
              description: 'rosemary.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'rosemary.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'rosemary.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 14,
          description: 'rosemary.phases.germination.description',
          care: 'rosemary.phases.germination.care',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'rosemary.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'rosemary.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'rosemary.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 28,
          description: 'rosemary.phases.seedling.description',
          care: 'rosemary.phases.seedling.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'rosemary.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'rosemary.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'rosemary.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'rosemary.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'rosemary.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 45,
          description: 'rosemary.phases.vegetative.description',
          care: 'rosemary.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 4,
              description: 'rosemary.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'rosemary.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'rosemary.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 90,
          description: 'rosemary.phases.harvest.description',
          care: 'rosemary.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 4, 
              description: 'rosemary.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'rosemary.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'rosemary.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.phases.harvest.coco.fertilizing.description',
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
          description: 'rosemary.phases.germination.description',
          care: 'rosemary.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'rosemary.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'rosemary.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'rosemary.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 28,
          description: 'rosemary.phases.seedling.description',
          care: 'rosemary.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'rosemary.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'rosemary.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'rosemary.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'rosemary.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'rosemary.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'rosemary.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 45,
          description: 'rosemary.phases.vegetative.description',
          care: 'rosemary.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'rosemary.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'rosemary.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'rosemary.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 90,
          description: 'rosemary.phases.harvest.description',
          care: 'rosemary.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 4, 
              description: 'rosemary.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'rosemary.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'rosemary.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'rosemary.phases.harvest.coco.fertilizing.description',
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