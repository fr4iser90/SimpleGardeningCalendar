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
          description: 'tomatoes.phases.germination.description',
          care: 'tomatoes.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'tomatoes.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'tomatoes.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'tomatoes.phases.seedling.description',
          care: 'tomatoes.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'tomatoes.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'tomatoes.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'tomatoes.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.phases.seedling.coco.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'tomatoes.phases.seedling.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 28,
          description: 'tomatoes.phases.vegetative.description',
          care: 'tomatoes.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        transplant: {
          days: 14,
          description: 'tomatoes.phases.transplant.description',
          care: 'tomatoes.phases.transplant.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.phases.transplant.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.phases.transplant.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.phases.transplant.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.phases.transplant.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.phases.transplant.coco.watering.description' 
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.phases.transplant.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 20,
          description: 'tomatoes.phases.flowering.description',
          care: 'tomatoes.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.phases.flowering.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        fruiting: {
          days: 45,
          description: 'tomatoes.phases.fruiting.description',
          care: 'tomatoes.phases.fruiting.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.phases.fruiting.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.fruiting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.phases.fruiting.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.fruiting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.phases.fruiting.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.fruiting.coco.fertilizing.description',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 7,
          description: 'tomatoes.phases.germination.description',
          care: 'tomatoes.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'tomatoes.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'tomatoes.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'tomatoes.phases.seedling.description',
          care: 'tomatoes.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'tomatoes.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'tomatoes.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'tomatoes.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.phases.seedling.coco.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'tomatoes.phases.seedling.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 28,
          description: 'tomatoes.phases.vegetative.description',
          care: 'tomatoes.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        transplant: {
          days: 14,
          description: 'tomatoes.phases.transplant.description',
          care: 'tomatoes.phases.transplant.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.phases.transplant.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.phases.transplant.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.phases.transplant.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.phases.transplant.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.phases.transplant.coco.watering.description' 
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.phases.transplant.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 20,
          description: 'tomatoes.phases.flowering.description',
          care: 'tomatoes.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.phases.flowering.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        fruiting: {
          days: 45,
          description: 'tomatoes.phases.fruiting.description',
          care: 'tomatoes.phases.fruiting.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.phases.fruiting.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.fruiting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.phases.fruiting.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.fruiting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.phases.fruiting.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.fruiting.coco.fertilizing.description',
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
          description: 'tomatoes.phases.germination.description',
          care: 'tomatoes.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'tomatoes.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'tomatoes.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'tomatoes.phases.seedling.description',
          care: 'tomatoes.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'tomatoes.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'tomatoes.phases.seedling.hydro.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'tomatoes.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.phases.seedling.coco.watering.description' 
            },
            fertilizing: {
              interval: 7,
              description: 'tomatoes.phases.seedling.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 28,
          description: 'tomatoes.phases.vegetative.description',
          care: 'tomatoes.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.phases.vegetative.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        transplant: {
          days: 14,
          description: 'tomatoes.phases.transplant.description',
          care: 'tomatoes.phases.transplant.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.phases.transplant.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.phases.transplant.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.phases.transplant.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.phases.transplant.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.phases.transplant.coco.watering.description' 
            },
            fertilizing: {
              interval: 0,
              description: 'tomatoes.phases.transplant.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 20,
          description: 'tomatoes.phases.flowering.description',
          care: 'tomatoes.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.phases.flowering.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        fruiting: {
          days: 45,
          description: 'tomatoes.phases.fruiting.description',
          care: 'tomatoes.phases.fruiting.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'tomatoes.phases.fruiting.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.fruiting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'tomatoes.phases.fruiting.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.fruiting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'tomatoes.phases.fruiting.coco.watering.description' 
            },
            fertilizing: {
              interval: 14,
              description: 'tomatoes.phases.fruiting.coco.fertilizing.description',
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
