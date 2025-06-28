/**
 * Sunflowers Plant Data
 * Growing information for Sunflowers
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const sunflowers = {
  name: 'sunflowers.name',
  category: 'category.flowers',
  tags: [PLANT_TAGS.ANNUAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🌻',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 7,
          description: 'sunflowers.phases.germination.description',
          care: 'sunflowers.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'sunflowers.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sunflowers.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'sunflowers.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sunflowers.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'sunflowers.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sunflowers.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 14,
          description: 'sunflowers.phases.seedling.description',
          care: 'sunflowers.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'sunflowers.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sunflowers.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'sunflowers.phases.seedling.hydro.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'sunflowers.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'sunflowers.phases.seedling.coco.watering.description' },
            fertilizing: { interval: 7, description: 'sunflowers.phases.seedling.coco.fertilizing.description' },
          },
        },
        vegetative: {
          days: 30,
          description: 'sunflowers.phases.vegetative.description',
          care: 'sunflowers.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'sunflowers.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'sunflowers.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'sunflowers.phases.vegetative.hydro.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'sunflowers.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'sunflowers.phases.vegetative.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'sunflowers.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 21,
          description: 'sunflowers.phases.flowering.description',
          care: 'sunflowers.phases.flowering.care',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'sunflowers.phases.flowering.soil.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'sunflowers.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'sunflowers.phases.flowering.hydro.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'sunflowers.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'sunflowers.phases.flowering.coco.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'sunflowers.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        seed_development: {
          days: 30,
          description: 'sunflowers.phases.seed_development.description',
          care: 'sunflowers.phases.seed_development.care',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'sunflowers.phases.seed_development.soil.watering.description' },
            fertilizing: {
              interval: 0,
              description: 'sunflowers.phases.seed_development.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'sunflowers.phases.seed_development.hydro.watering.description' },
            fertilizing: {
              interval: 0,
              description: 'sunflowers.phases.seed_development.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'sunflowers.phases.seed_development.coco.watering.description' },
            fertilizing: {
              interval: 0,
              description: 'sunflowers.phases.seed_development.coco.fertilizing.description',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          start: '04-15',
          end: '04-22',
          description: 'sunflowers.phases.germination.description',
          care: 'sunflowers.phases.germination.care',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'sunflowers.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sunflowers.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'sunflowers.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sunflowers.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'sunflowers.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sunflowers.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          start: '04-23',
          end: '05-07',
          description: 'sunflowers.phases.seedling.description',
          care: 'sunflowers.phases.seedling.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'sunflowers.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sunflowers.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'sunflowers.phases.seedling.hydro.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'sunflowers.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'sunflowers.phases.seedling.coco.watering.description' },
            fertilizing: { interval: 7, description: 'sunflowers.phases.seedling.coco.fertilizing.description' },
          },
        },
        vegetative: {
          start: '05-08',
          end: '06-07',
          description: 'sunflowers.phases.vegetative.description',
          care: 'sunflowers.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'sunflowers.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'sunflowers.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'sunflowers.phases.vegetative.hydro.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'sunflowers.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'sunflowers.phases.vegetative.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'sunflowers.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          start: '06-08',
          end: '06-29',
          description: 'sunflowers.phases.flowering.description',
          care: 'sunflowers.phases.flowering.care',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'sunflowers.phases.flowering.soil.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'sunflowers.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'sunflowers.phases.flowering.hydro.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'sunflowers.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'sunflowers.phases.flowering.coco.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'sunflowers.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        seed_development: {
          start: '06-30',
          end: '07-30',
          description: 'sunflowers.phases.seed_development.description',
          care: 'sunflowers.phases.seed_development.care',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'sunflowers.phases.seed_development.soil.watering.description' },
            fertilizing: {
              interval: 0,
              description: 'sunflowers.phases.seed_development.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'sunflowers.phases.seed_development.hydro.watering.description' },
            fertilizing: {
              interval: 0,
              description: 'sunflowers.phases.seed_development.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'sunflowers.phases.seed_development.coco.watering.description' },
            fertilizing: {
              interval: 0,
              description: 'sunflowers.phases.seed_development.coco.fertilizing.description',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-15',
            end: '06-15',
            description: 'sunflowers.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '08-01',
            end: '09-30',
            description: 'sunflowers.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '05-15',
            description: 'sunflowers.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '07-01',
            end: '10-31',
            description: 'sunflowers.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 7,
          description: 'sunflowers.phases.germination.description',
          care: 'sunflowers.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'sunflowers.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sunflowers.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'sunflowers.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sunflowers.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'sunflowers.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sunflowers.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 14,
          description: 'sunflowers.phases.seedling.description',
          care: 'sunflowers.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'sunflowers.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'sunflowers.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'sunflowers.phases.seedling.hydro.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'sunflowers.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'sunflowers.phases.seedling.coco.watering.description' },
            fertilizing: { interval: 7, description: 'sunflowers.phases.seedling.coco.fertilizing.description' },
          },
        },
        vegetative: {
          days: 30,
          description: 'sunflowers.phases.vegetative.description',
          care: 'sunflowers.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'sunflowers.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'sunflowers.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'sunflowers.phases.vegetative.hydro.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'sunflowers.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'sunflowers.phases.vegetative.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'sunflowers.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 21,
          description: 'sunflowers.phases.flowering.description',
          care: 'sunflowers.phases.flowering.care',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'sunflowers.phases.flowering.soil.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'sunflowers.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'sunflowers.phases.flowering.hydro.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'sunflowers.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'sunflowers.phases.flowering.coco.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'sunflowers.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        seed_development: {
          days: 30,
          description: 'sunflowers.phases.seed_development.description',
          care: 'sunflowers.phases.seed_development.care',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'sunflowers.phases.seed_development.soil.watering.description' },
            fertilizing: {
              interval: 0,
              description: 'sunflowers.phases.seed_development.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'sunflowers.phases.seed_development.hydro.watering.description' },
            fertilizing: {
              interval: 0,
              description: 'sunflowers.phases.seed_development.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'sunflowers.phases.seed_development.coco.watering.description' },
            fertilizing: {
              interval: 0,
              description: 'sunflowers.phases.seed_development.coco.fertilizing.description',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'sunflowers.careTips.watering',
    fertilizing: 'sunflowers.careTips.fertilizing',
    sunlight: 'sunflowers.careTips.sunlight',
    spacing: 'sunflowers.careTips.spacing',
    temperature: 'sunflowers.careTips.temperature',
    soilPH: 'sunflowers.careTips.soilPH',
    support: 'sunflowers.careTips.support',
  },
  commonProblems: createProblemRefs(['downyMildew', 'birds', 'sclerotinia'], 'flowers'),
};

export default sunflowers; 