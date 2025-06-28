/**
 * Rosemary Plant Data
 * Growing information for Rosemary
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const rosemary = {
  name: 'plants.herbs.rosemary.name',
  category: 'category.herbs',
  tags: [PLANT_TAGS.PERENNIAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🌿',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 14,
          description: 'plants.herbs.rosemary.phases.germination.description',
          care: 'plants.herbs.rosemary.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'plants.herbs.rosemary.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.rosemary.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plants.herbs.rosemary.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.rosemary.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plants.herbs.rosemary.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.rosemary.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 28,
          description: 'plants.herbs.rosemary.phases.seedling.description',
          care: 'plants.herbs.rosemary.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'plants.herbs.rosemary.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.rosemary.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.rosemary.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'plants.herbs.rosemary.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'plants.herbs.rosemary.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'plants.herbs.rosemary.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 45,
          description: 'plants.herbs.rosemary.phases.vegetative.description',
          care: 'plants.herbs.rosemary.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'plants.herbs.rosemary.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.rosemary.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.rosemary.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.rosemary.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'plants.herbs.rosemary.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.rosemary.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 90,
          description: 'plants.herbs.rosemary.phases.harvest.description',
          care: 'plants.herbs.rosemary.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 4, 
              description: 'plants.herbs.rosemary.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.rosemary.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.rosemary.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.rosemary.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'plants.herbs.rosemary.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.rosemary.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 14,
          description: 'plants.herbs.rosemary.phases.germination.description',
          care: 'plants.herbs.rosemary.phases.germination.care',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'plants.herbs.rosemary.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.rosemary.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plants.herbs.rosemary.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.rosemary.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plants.herbs.rosemary.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.rosemary.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 28,
          description: 'plants.herbs.rosemary.phases.seedling.description',
          care: 'plants.herbs.rosemary.phases.seedling.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'plants.herbs.rosemary.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.rosemary.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.rosemary.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'plants.herbs.rosemary.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'plants.herbs.rosemary.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'plants.herbs.rosemary.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 45,
          description: 'plants.herbs.rosemary.phases.vegetative.description',
          care: 'plants.herbs.rosemary.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 4,
              description: 'plants.herbs.rosemary.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.rosemary.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.rosemary.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.rosemary.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'plants.herbs.rosemary.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.rosemary.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 90,
          description: 'plants.herbs.rosemary.phases.harvest.description',
          care: 'plants.herbs.rosemary.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 4, 
              description: 'plants.herbs.rosemary.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.rosemary.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.rosemary.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.rosemary.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'plants.herbs.rosemary.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.rosemary.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-15',
            description: 'plants.herbs.rosemary.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-01',
            end: '10-31',
            description: 'plants.herbs.rosemary.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '07-01',
            description: 'plants.herbs.rosemary.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '05-01',
            end: '11-30',
            description: 'plants.herbs.rosemary.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 14,
          description: 'plants.herbs.rosemary.phases.germination.description',
          care: 'plants.herbs.rosemary.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'plants.herbs.rosemary.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.rosemary.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plants.herbs.rosemary.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.rosemary.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plants.herbs.rosemary.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.rosemary.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 28,
          description: 'plants.herbs.rosemary.phases.seedling.description',
          care: 'plants.herbs.rosemary.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'plants.herbs.rosemary.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.rosemary.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.rosemary.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'plants.herbs.rosemary.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'plants.herbs.rosemary.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'plants.herbs.rosemary.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 45,
          description: 'plants.herbs.rosemary.phases.vegetative.description',
          care: 'plants.herbs.rosemary.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'plants.herbs.rosemary.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.rosemary.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.rosemary.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.rosemary.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'plants.herbs.rosemary.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.rosemary.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 90,
          description: 'plants.herbs.rosemary.phases.harvest.description',
          care: 'plants.herbs.rosemary.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 4, 
              description: 'plants.herbs.rosemary.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.rosemary.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.rosemary.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.rosemary.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'plants.herbs.rosemary.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.rosemary.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'plants.herbs.rosemary.careTips.watering',
    fertilizing: 'plants.herbs.rosemary.careTips.fertilizing',
    sunlight: 'plants.herbs.rosemary.careTips.sunlight',
    spacing: 'plants.herbs.rosemary.careTips.spacing',
    temperature: 'plants.herbs.rosemary.careTips.temperature',
    soilPH: 'plants.herbs.rosemary.careTips.soilPH',
    harvesting: 'plants.herbs.rosemary.careTips.harvesting',
  },
  commonProblems: createProblemRefs(['rootRot', 'leggyGrowth', 'winterDamage'], 'herbs'),
};

export default rosemary; 