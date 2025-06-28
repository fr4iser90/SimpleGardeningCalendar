/**
 * Tomatoes Plant Data
 * Indoor/Outdoor growing information for Tomatoes
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const tomatoes = {
  name: 'tomatoes.name',
  category: 'category.vegetables',
  tags: [PLANT_TAGS.PHOTOPERIOD, PLANT_TAGS.ANNUAL],
  emoji: '🍅',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 7,
          description: 'tomatoes.environments.indoor.phases.germination.description',
          care: 'tomatoes.environments.indoor.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'tomatoes.environments.indoor.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.environments.indoor.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.environments.indoor.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.environments.indoor.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'tomatoes.environments.indoor.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.environments.indoor.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'tomatoes.environments.indoor.phases.seedling.description',
          care: 'tomatoes.environments.indoor.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.environments.indoor.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'tomatoes.environments.indoor.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'tomatoes.environments.indoor.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'tomatoes.environments.indoor.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.environments.indoor.phases.seedling.coco.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'tomatoes.environments.indoor.phases.seedling.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 28,
          description: 'tomatoes.environments.indoor.phases.vegetative.description',
          care: 'tomatoes.environments.indoor.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.environments.indoor.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.indoor.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.environments.indoor.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.indoor.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.environments.indoor.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.indoor.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        transplant: {
          days: 14,
          description: 'tomatoes.environments.indoor.phases.transplant.description',
          care: 'tomatoes.environments.indoor.phases.transplant.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.environments.indoor.phases.transplant.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.environments.indoor.phases.transplant.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.environments.indoor.phases.transplant.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.environments.indoor.phases.transplant.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.environments.indoor.phases.transplant.coco.watering.description' 
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.environments.indoor.phases.transplant.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 20,
          description: 'tomatoes.environments.indoor.phases.flowering.description',
          care: 'tomatoes.environments.indoor.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.environments.indoor.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.indoor.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.environments.indoor.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.indoor.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.environments.indoor.phases.flowering.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.indoor.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        fruiting: {
          days: 45,
          description: 'tomatoes.environments.indoor.phases.fruiting.description',
          care: 'tomatoes.environments.indoor.phases.fruiting.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.environments.indoor.phases.fruiting.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.indoor.phases.fruiting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.environments.indoor.phases.fruiting.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.indoor.phases.fruiting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.environments.indoor.phases.fruiting.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.indoor.phases.fruiting.coco.fertilizing.description',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 7,
          description: 'tomatoes.environments.outdoor.phases.germination.description',
          care: 'tomatoes.environments.outdoor.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'tomatoes.environments.outdoor.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.environments.outdoor.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.environments.outdoor.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.environments.outdoor.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'tomatoes.environments.outdoor.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.environments.outdoor.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'tomatoes.environments.outdoor.phases.seedling.description',
          care: 'tomatoes.environments.outdoor.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.environments.outdoor.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'tomatoes.environments.outdoor.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'tomatoes.environments.outdoor.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'tomatoes.environments.outdoor.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.environments.outdoor.phases.seedling.coco.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'tomatoes.environments.outdoor.phases.seedling.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 28,
          description: 'tomatoes.environments.outdoor.phases.vegetative.description',
          care: 'tomatoes.environments.outdoor.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.environments.outdoor.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.outdoor.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.environments.outdoor.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.outdoor.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.environments.outdoor.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.outdoor.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        transplant: {
          days: 14,
          description: 'tomatoes.environments.outdoor.phases.transplant.description',
          care: 'tomatoes.environments.outdoor.phases.transplant.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.environments.outdoor.phases.transplant.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.environments.outdoor.phases.transplant.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.environments.outdoor.phases.transplant.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.environments.outdoor.phases.transplant.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1, 
              description: 'tomatoes.environments.outdoor.phases.transplant.coco.watering.description' 
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.environments.outdoor.phases.transplant.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 20,
          description: 'tomatoes.environments.outdoor.phases.flowering.description',
          care: 'tomatoes.environments.outdoor.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.environments.outdoor.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.outdoor.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.environments.outdoor.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.outdoor.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.environments.outdoor.phases.flowering.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.outdoor.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        fruiting: {
          days: 45,
          description: 'tomatoes.environments.outdoor.phases.fruiting.description',
          care: 'tomatoes.environments.outdoor.phases.fruiting.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.environments.outdoor.phases.fruiting.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.outdoor.phases.fruiting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.environments.outdoor.phases.fruiting.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.outdoor.phases.fruiting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.environments.outdoor.phases.fruiting.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.outdoor.phases.fruiting.coco.fertilizing.description',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-15',
            end: '06-15',
            description: 'tomatoes.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '07-15',
            end: '10-15',
            description: 'tomatoes.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '05-01',
            description: 'tomatoes.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-01',
            end: '11-30',
            description: 'tomatoes.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 7,
          description: 'tomatoes.environments.greenhouse.phases.germination.description',
          care: 'tomatoes.environments.greenhouse.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'tomatoes.environments.greenhouse.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.environments.greenhouse.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.environments.greenhouse.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.environments.greenhouse.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'tomatoes.environments.greenhouse.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.environments.greenhouse.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'tomatoes.environments.greenhouse.phases.seedling.description',
          care: 'tomatoes.environments.greenhouse.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.environments.greenhouse.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'tomatoes.environments.greenhouse.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'tomatoes.environments.greenhouse.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'tomatoes.environments.greenhouse.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.environments.greenhouse.phases.seedling.coco.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'tomatoes.environments.greenhouse.phases.seedling.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 28,
          description: 'tomatoes.environments.greenhouse.phases.vegetative.description',
          care: 'tomatoes.environments.greenhouse.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.environments.greenhouse.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.greenhouse.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.environments.greenhouse.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.greenhouse.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.environments.greenhouse.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.greenhouse.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        transplant: {
          days: 14,
          description: 'tomatoes.environments.greenhouse.phases.transplant.description',
          care: 'tomatoes.environments.greenhouse.phases.transplant.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.environments.greenhouse.phases.transplant.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.environments.greenhouse.phases.transplant.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.environments.greenhouse.phases.transplant.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.environments.greenhouse.phases.transplant.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.environments.greenhouse.phases.transplant.coco.watering.description' 
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.environments.greenhouse.phases.transplant.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 20,
          description: 'tomatoes.environments.greenhouse.phases.flowering.description',
          care: 'tomatoes.environments.greenhouse.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.environments.greenhouse.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.greenhouse.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.environments.greenhouse.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.greenhouse.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.environments.greenhouse.phases.flowering.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.greenhouse.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        fruiting: {
          days: 45,
          description: 'tomatoes.environments.greenhouse.phases.fruiting.description',
          care: 'tomatoes.environments.greenhouse.phases.fruiting.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.environments.greenhouse.phases.fruiting.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.greenhouse.phases.fruiting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.environments.greenhouse.phases.fruiting.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.greenhouse.phases.fruiting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.environments.greenhouse.phases.fruiting.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.environments.greenhouse.phases.fruiting.coco.fertilizing.description',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'tomatoes.careTips.watering',
    fertilizing: 'tomatoes.careTips.fertilizing',
    sunlight: 'tomatoes.careTips.sunlight',
    spacing: 'tomatoes.careTips.spacing',
    temperature: 'tomatoes.careTips.temperature',
    soilPH: 'tomatoes.careTips.soilPH',
    pruning: 'tomatoes.careTips.pruning',
  },
  commonProblems: createProblemRefs(['blight', 'powderyMildew', 'lateBlight'], 'vegetables'),
};

export default tomatoes;
