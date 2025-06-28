/**
 * Thyme Plant Data
 * Growing information for Thyme
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const thyme = {
  name: 'thyme.name',
  category: 'category.herbs',
  tags: [PLANT_TAGS.PERENNIAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🌿',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 14,
          description: 'thyme.phases.germination.description',
          care: 'thyme.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'thyme.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'thyme.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'thyme.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'thyme.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'thyme.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'thyme.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'thyme.phases.seedling.description',
          care: 'thyme.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'thyme.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'thyme.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'thyme.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'thyme.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'thyme.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'thyme.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 35,
          description: 'thyme.phases.vegetative.description',
          care: 'thyme.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'thyme.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'thyme.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'thyme.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'thyme.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'thyme.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'thyme.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 75,
          description: 'thyme.phases.harvest.description',
          care: 'thyme.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 4, 
              description: 'thyme.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'thyme.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'thyme.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'thyme.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'thyme.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'thyme.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 14,
          description: 'thyme.phases.germination.description',
          care: 'thyme.phases.germination.care',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'thyme.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'thyme.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'thyme.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'thyme.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'thyme.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'thyme.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'thyme.phases.seedling.description',
          care: 'thyme.phases.seedling.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'thyme.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'thyme.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'thyme.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'thyme.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'thyme.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'thyme.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 35,
          description: 'thyme.phases.vegetative.description',
          care: 'thyme.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 4,
              description: 'thyme.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'thyme.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'thyme.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'thyme.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'thyme.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'thyme.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 75,
          description: 'thyme.phases.harvest.description',
          care: 'thyme.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 4, 
              description: 'thyme.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'thyme.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'thyme.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'thyme.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'thyme.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'thyme.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-15',
            description: 'thyme.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-01',
            end: '10-31',
            description: 'thyme.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '07-01',
            description: 'thyme.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '05-01',
            end: '11-30',
            description: 'thyme.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 14,
          description: 'thyme.phases.germination.description',
          care: 'thyme.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'thyme.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'thyme.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'thyme.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'thyme.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'thyme.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'thyme.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'thyme.phases.seedling.description',
          care: 'thyme.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'thyme.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'thyme.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'thyme.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'thyme.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'thyme.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'thyme.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 35,
          description: 'thyme.phases.vegetative.description',
          care: 'thyme.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'thyme.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'thyme.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'thyme.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'thyme.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'thyme.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'thyme.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 75,
          description: 'thyme.phases.harvest.description',
          care: 'thyme.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 4, 
              description: 'thyme.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'thyme.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'thyme.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'thyme.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'thyme.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'thyme.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'thyme.careTips.watering',
    fertilizing: 'thyme.careTips.fertilizing',
    sunlight: 'thyme.careTips.sunlight',
    spacing: 'thyme.careTips.spacing',
    temperature: 'thyme.careTips.temperature',
    soilPH: 'thyme.careTips.soilPH',
    harvesting: 'thyme.careTips.harvesting',
  },
  commonProblems: createProblemRefs(['rootRot', 'leggyGrowth', 'winterDamage'], 'herbs'),
};

export default thyme; 