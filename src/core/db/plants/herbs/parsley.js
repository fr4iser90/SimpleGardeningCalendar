/**
 * Parsley Plant Data
 * Growing information for Parsley
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const parsley = {
  name: 'plants.herbs.parsley.name',
  category: 'category.herbs',
  tags: [PLANT_TAGS.BIENNIAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🌿',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 21,
          description: 'plants.herbs.parsley.phases.germination.description',
          care: 'plants.herbs.parsley.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'plants.herbs.parsley.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.parsley.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plants.herbs.parsley.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.parsley.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plants.herbs.parsley.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.parsley.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 28,
          description: 'plants.herbs.parsley.phases.seedling.description',
          care: 'plants.herbs.parsley.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'plants.herbs.parsley.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.parsley.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.parsley.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'plants.herbs.parsley.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'plants.herbs.parsley.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'plants.herbs.parsley.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 45,
          description: 'plants.herbs.parsley.phases.vegetative.description',
          care: 'plants.herbs.parsley.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'plants.herbs.parsley.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'plants.herbs.parsley.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.parsley.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'plants.herbs.parsley.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'plants.herbs.parsley.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'plants.herbs.parsley.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 90,
          description: 'plants.herbs.parsley.phases.harvest.description',
          care: 'plants.herbs.parsley.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 2, 
              description: 'plants.herbs.parsley.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'plants.herbs.parsley.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.parsley.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'plants.herbs.parsley.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'plants.herbs.parsley.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'plants.herbs.parsley.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 21,
          description: 'plants.herbs.parsley.phases.germination.description',
          care: 'plants.herbs.parsley.phases.germination.care',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'plants.herbs.parsley.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.parsley.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plants.herbs.parsley.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.parsley.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plants.herbs.parsley.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.parsley.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 28,
          description: 'plants.herbs.parsley.phases.seedling.description',
          care: 'plants.herbs.parsley.phases.seedling.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'plants.herbs.parsley.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.parsley.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.parsley.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'plants.herbs.parsley.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'plants.herbs.parsley.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'plants.herbs.parsley.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 45,
          description: 'plants.herbs.parsley.phases.vegetative.description',
          care: 'plants.herbs.parsley.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'plants.herbs.parsley.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'plants.herbs.parsley.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.parsley.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'plants.herbs.parsley.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'plants.herbs.parsley.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'plants.herbs.parsley.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 90,
          description: 'plants.herbs.parsley.phases.harvest.description',
          care: 'plants.herbs.parsley.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 2, 
              description: 'plants.herbs.parsley.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'plants.herbs.parsley.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.parsley.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'plants.herbs.parsley.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'plants.herbs.parsley.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'plants.herbs.parsley.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '07-01',
            description: 'plants.herbs.parsley.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-01',
            end: '11-30',
            description: 'plants.herbs.parsley.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '08-01',
            description: 'plants.herbs.parsley.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '05-01',
            end: '12-31',
            description: 'plants.herbs.parsley.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 21,
          description: 'plants.herbs.parsley.phases.germination.description',
          care: 'plants.herbs.parsley.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'plants.herbs.parsley.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.parsley.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plants.herbs.parsley.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.parsley.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plants.herbs.parsley.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.parsley.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 28,
          description: 'plants.herbs.parsley.phases.seedling.description',
          care: 'plants.herbs.parsley.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'plants.herbs.parsley.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.parsley.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.parsley.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'plants.herbs.parsley.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'plants.herbs.parsley.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'plants.herbs.parsley.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 45,
          description: 'plants.herbs.parsley.phases.vegetative.description',
          care: 'plants.herbs.parsley.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'plants.herbs.parsley.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'plants.herbs.parsley.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.parsley.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'plants.herbs.parsley.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'plants.herbs.parsley.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'plants.herbs.parsley.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 90,
          description: 'plants.herbs.parsley.phases.harvest.description',
          care: 'plants.herbs.parsley.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 2, 
              description: 'plants.herbs.parsley.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'plants.herbs.parsley.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.parsley.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'plants.herbs.parsley.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'plants.herbs.parsley.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'plants.herbs.parsley.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'plants.herbs.parsley.careTips.watering',
    fertilizing: 'plants.herbs.parsley.careTips.fertilizing',
    sunlight: 'plants.herbs.parsley.careTips.sunlight',
    spacing: 'plants.herbs.parsley.careTips.spacing',
    temperature: 'plants.herbs.parsley.careTips.temperature',
    soilPH: 'plants.herbs.parsley.careTips.soilPH',
    harvesting: 'plants.herbs.parsley.careTips.harvesting',
  },
  commonProblems: createProblemRefs(['rootRot', 'leafSpot', 'bolting'], 'herbs'),
};

export default parsley; 