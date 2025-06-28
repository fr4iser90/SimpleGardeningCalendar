/**
 * Basil Plant Data
 * Growing information for Basil
 */

import { PLANT_TAGS } from '../categories.js';

export const basil = {
  name: 'basil.name',
  category: 'category.herbs',
  tags: [PLANT_TAGS.ANNUAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🌿',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 7,
          description: 'basil.phases.germination.description',
          care: 'basil.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'basil.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'basil.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'basil.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 14,
          description: 'basil.phases.seedling.description',
          care: 'basil.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'basil.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.phases.seedling.hydro.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'basil.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.phases.seedling.coco.watering.description' },
            fertilizing: { interval: 7, description: 'basil.phases.seedling.coco.fertilizing.description' },
          },
        },
        vegetative: {
          days: 21,
          description: 'basil.phases.vegetative.description',
          care: 'basil.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'basil.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'basil.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.phases.vegetative.hydro.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.phases.vegetative.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 20,
          description: 'basil.phases.flowering.description',
          care: 'basil.phases.flowering.care',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'basil.phases.flowering.soil.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'basil.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.phases.flowering.hydro.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'basil.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.phases.flowering.coco.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'basil.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 30,
          description: 'basil.phases.harvest.description',
          care: 'basil.phases.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'basil.phases.harvest.soil.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.phases.harvest.hydro.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.phases.harvest.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 7,
          description: 'basil.phases.germination.description',
          care: 'basil.phases.germination.care',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'basil.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'basil.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'basil.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 14,
          description: 'basil.phases.seedling.description',
          care: 'basil.phases.seedling.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'basil.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.phases.seedling.hydro.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'basil.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.phases.seedling.coco.watering.description' },
            fertilizing: { interval: 7, description: 'basil.phases.seedling.coco.fertilizing.description' },
          },
        },
        vegetative: {
          days: 21,
          description: 'basil.phases.vegetative.description',
          care: 'basil.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'basil.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'basil.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.phases.vegetative.hydro.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.phases.vegetative.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 20,
          description: 'basil.phases.flowering.description',
          care: 'basil.phases.flowering.care',
          editable: false,
          soil: {
            watering: { interval: 3, description: 'basil.phases.flowering.soil.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'basil.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.phases.flowering.hydro.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'basil.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.phases.flowering.coco.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'basil.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 30,
          description: 'basil.phases.harvest.description',
          care: 'basil.phases.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'basil.phases.harvest.soil.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.phases.harvest.hydro.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.phases.harvest.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '05-15',
            end: '07-01',
            description: 'basil.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '07-01',
            end: '10-15',
            description: 'basil.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '04-01',
            end: '07-15',
            description: 'basil.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-01',
            end: '11-15',
            description: 'basil.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 7,
          description: 'basil.phases.germination.description',
          care: 'basil.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'basil.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'basil.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'basil.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 14,
          description: 'basil.phases.seedling.description',
          care: 'basil.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'basil.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'basil.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.phases.seedling.hydro.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'basil.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.phases.seedling.coco.watering.description' },
            fertilizing: { interval: 7, description: 'basil.phases.seedling.coco.fertilizing.description' },
          },
        },
        vegetative: {
          days: 21,
          description: 'basil.phases.vegetative.description',
          care: 'basil.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'basil.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'basil.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.phases.vegetative.hydro.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.phases.vegetative.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 20,
          description: 'basil.phases.flowering.description',
          care: 'basil.phases.flowering.care',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'basil.phases.flowering.soil.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'basil.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.phases.flowering.hydro.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'basil.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.phases.flowering.coco.watering.description' },
            fertilizing: {
              interval: 21,
              description: 'basil.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 30,
          description: 'basil.phases.harvest.description',
          care: 'basil.phases.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 3, description: 'basil.phases.harvest.soil.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'basil.phases.harvest.hydro.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'basil.phases.harvest.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'basil.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'basil.careTips.watering',
    fertilizing: 'basil.careTips.fertilizing',
    sunlight: 'basil.careTips.sunlight',
    spacing: 'basil.careTips.spacing',
    temperature: 'basil.careTips.temperature',
    soilPH: 'basil.careTips.soilPH',
    harvesting: 'basil.careTips.harvesting',
  },
  commonProblems: {
    'Fusarium Wilt': 'basil.commonProblems.fusariumWilt',
    'Aphids': 'basil.commonProblems.aphids',
    'Bolting': 'basil.commonProblems.bolting',
  },
};

export default basil;
