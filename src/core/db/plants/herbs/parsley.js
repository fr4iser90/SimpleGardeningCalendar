/**
 * Parsley Plant Data
 * Growing information for Parsley
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const parsley = {
  name: 'parsley.name',
  category: 'category.herbs',
  tags: [PLANT_TAGS.BIENNIAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🌿',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 21,
          description: 'parsley.phases.germination.description',
          care: 'parsley.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'parsley.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'parsley.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'parsley.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'parsley.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'parsley.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'parsley.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 28,
          description: 'parsley.phases.seedling.description',
          care: 'parsley.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'parsley.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'parsley.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'parsley.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'parsley.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'parsley.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'parsley.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 45,
          description: 'parsley.phases.vegetative.description',
          care: 'parsley.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'parsley.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'parsley.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'parsley.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'parsley.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'parsley.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'parsley.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 90,
          description: 'parsley.phases.harvest.description',
          care: 'parsley.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 2, 
              description: 'parsley.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'parsley.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'parsley.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'parsley.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'parsley.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'parsley.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 21,
          description: 'parsley.phases.germination.description',
          care: 'parsley.phases.germination.care',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'parsley.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'parsley.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'parsley.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'parsley.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'parsley.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'parsley.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 28,
          description: 'parsley.phases.seedling.description',
          care: 'parsley.phases.seedling.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'parsley.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'parsley.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'parsley.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'parsley.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'parsley.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'parsley.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 45,
          description: 'parsley.phases.vegetative.description',
          care: 'parsley.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'parsley.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'parsley.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'parsley.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'parsley.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'parsley.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'parsley.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 90,
          description: 'parsley.phases.harvest.description',
          care: 'parsley.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 2, 
              description: 'parsley.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'parsley.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'parsley.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'parsley.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'parsley.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'parsley.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '07-01',
            description: 'parsley.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-01',
            end: '11-30',
            description: 'parsley.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '08-01',
            description: 'parsley.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '05-01',
            end: '12-31',
            description: 'parsley.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 21,
          description: 'parsley.phases.germination.description',
          care: 'parsley.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'parsley.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'parsley.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'parsley.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'parsley.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'parsley.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'parsley.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 28,
          description: 'parsley.phases.seedling.description',
          care: 'parsley.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'parsley.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'parsley.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'parsley.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'parsley.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'parsley.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'parsley.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 45,
          description: 'parsley.phases.vegetative.description',
          care: 'parsley.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'parsley.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'parsley.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'parsley.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'parsley.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'parsley.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'parsley.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 90,
          description: 'parsley.phases.harvest.description',
          care: 'parsley.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 2, 
              description: 'parsley.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'parsley.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'parsley.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'parsley.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'parsley.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'parsley.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'parsley.careTips.watering',
    fertilizing: 'parsley.careTips.fertilizing',
    sunlight: 'parsley.careTips.sunlight',
    spacing: 'parsley.careTips.spacing',
    temperature: 'parsley.careTips.temperature',
    soilPH: 'parsley.careTips.soilPH',
    harvesting: 'parsley.careTips.harvesting',
  },
  commonProblems: createProblemRefs(['rootRot', 'leafSpot', 'bolting'], 'herbs'),
};

export default parsley; 