/**
 * Thyme Plant Data
 * Growing information for Thyme
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const thyme = {
  name: 'plants.herbs.thyme.name',
  category: 'category.herbs',
  tags: [PLANT_TAGS.PERENNIAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🌿',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 14,
          description: 'plants.herbs.thyme.phases.germination.description',
          care: 'plants.herbs.thyme.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'plants.herbs.thyme.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.thyme.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plants.herbs.thyme.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.thyme.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plants.herbs.thyme.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.thyme.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'plants.herbs.thyme.phases.seedling.description',
          care: 'plants.herbs.thyme.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'plants.herbs.thyme.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.thyme.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.thyme.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'plants.herbs.thyme.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'plants.herbs.thyme.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'plants.herbs.thyme.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 35,
          description: 'plants.herbs.thyme.phases.vegetative.description',
          care: 'plants.herbs.thyme.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'plants.herbs.thyme.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.thyme.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.thyme.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.thyme.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'plants.herbs.thyme.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.thyme.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 75,
          description: 'plants.herbs.thyme.phases.harvest.description',
          care: 'plants.herbs.thyme.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 4, 
              description: 'plants.herbs.thyme.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.thyme.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.thyme.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.thyme.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'plants.herbs.thyme.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.thyme.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 14,
          description: 'plants.herbs.thyme.phases.germination.description',
          care: 'plants.herbs.thyme.phases.germination.care',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'plants.herbs.thyme.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.thyme.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plants.herbs.thyme.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.thyme.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plants.herbs.thyme.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.thyme.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'plants.herbs.thyme.phases.seedling.description',
          care: 'plants.herbs.thyme.phases.seedling.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'plants.herbs.thyme.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.thyme.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.thyme.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'plants.herbs.thyme.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'plants.herbs.thyme.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'plants.herbs.thyme.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 35,
          description: 'plants.herbs.thyme.phases.vegetative.description',
          care: 'plants.herbs.thyme.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 4,
              description: 'plants.herbs.thyme.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.thyme.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.thyme.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.thyme.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'plants.herbs.thyme.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.thyme.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 75,
          description: 'plants.herbs.thyme.phases.harvest.description',
          care: 'plants.herbs.thyme.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 4, 
              description: 'plants.herbs.thyme.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.thyme.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.thyme.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.thyme.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'plants.herbs.thyme.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.thyme.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-15',
            description: 'plants.herbs.thyme.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-01',
            end: '10-31',
            description: 'plants.herbs.thyme.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '07-01',
            description: 'plants.herbs.thyme.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '05-01',
            end: '11-30',
            description: 'plants.herbs.thyme.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 14,
          description: 'plants.herbs.thyme.phases.germination.description',
          care: 'plants.herbs.thyme.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'plants.herbs.thyme.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.thyme.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plants.herbs.thyme.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.thyme.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plants.herbs.thyme.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.thyme.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'plants.herbs.thyme.phases.seedling.description',
          care: 'plants.herbs.thyme.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'plants.herbs.thyme.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'plants.herbs.thyme.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.thyme.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'plants.herbs.thyme.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'plants.herbs.thyme.phases.seedling.coco.watering.description' 
            },
            fertilizing: { 
              interval: 7, 
              description: 'plants.herbs.thyme.phases.seedling.coco.fertilizing.description' 
            },
          },
        },
        vegetative: {
          days: 35,
          description: 'plants.herbs.thyme.phases.vegetative.description',
          care: 'plants.herbs.thyme.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'plants.herbs.thyme.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.thyme.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.thyme.phases.vegetative.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.thyme.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'plants.herbs.thyme.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.thyme.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 75,
          description: 'plants.herbs.thyme.phases.harvest.description',
          care: 'plants.herbs.thyme.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 4, 
              description: 'plants.herbs.thyme.phases.harvest.soil.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.thyme.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'plants.herbs.thyme.phases.harvest.hydro.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.thyme.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 2, 
              description: 'plants.herbs.thyme.phases.harvest.coco.watering.description' 
            },
            fertilizing: {
              interval: 21,
              description: 'plants.herbs.thyme.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'plants.herbs.thyme.careTips.watering',
    fertilizing: 'plants.herbs.thyme.careTips.fertilizing',
    sunlight: 'plants.herbs.thyme.careTips.sunlight',
    spacing: 'plants.herbs.thyme.careTips.spacing',
    temperature: 'plants.herbs.thyme.careTips.temperature',
    soilPH: 'plants.herbs.thyme.careTips.soilPH',
    harvesting: 'plants.herbs.thyme.careTips.harvesting',
  },
  commonProblems: createProblemRefs(['rootRot', 'leggyGrowth', 'winterDamage'], 'herbs'),
};

export default thyme; 