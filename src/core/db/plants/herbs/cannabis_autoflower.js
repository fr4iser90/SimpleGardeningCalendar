/**
 * Cannabis Autoflower Plant Data
 * Growing information for Cannabis Autoflower varieties
 * Now categorized as Herb with Cannabis tag
 */

import { PLANT_TAGS } from '../categories.js';



export const cannabis_autoflower = {
  name: 'cannabis_autoflower.name',
  category: 'category.herbs',
  tags: [PLANT_TAGS.CANNABIS, PLANT_TAGS.ANNUAL],
  legalNote: 'cannabis_autoflower.legalNote',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 3,
          description: 'cannabis_autoflower.phases.germination.description',
          care: 'cannabis_autoflower.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'cannabis_autoflower.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cannabis_autoflower.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 10,
          description: 'cannabis_autoflower.phases.seedling.description',
          care: 'cannabis_autoflower.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_autoflower.phases.seedling.hydro.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.phases.seedling.coco.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.phases.seedling.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 21,
          description: 'cannabis_autoflower.phases.vegetative.description',
          care: 'cannabis_autoflower.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.phases.vegetative.coco.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        preflower: {
          days: 7,
          description: 'cannabis_autoflower.phases.preflower.description',
          care: 'cannabis_autoflower.phases.preflower.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.phases.preflower.soil.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.phases.preflower.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.phases.preflower.hydro.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.phases.preflower.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.phases.preflower.coco.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.phases.preflower.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 35,
          description: 'cannabis_autoflower.phases.flowering.description',
          care: 'cannabis_autoflower.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.phases.flowering.coco.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 7,
          description: 'cannabis_autoflower.phases.harvest.description',
          care: 'cannabis_autoflower.phases.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 1, description: 'cannabis_autoflower.phases.harvest.soil.watering.description' },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_autoflower.phases.harvest.hydro.watering.description' },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.phases.harvest.coco.watering.description' },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 3,
          description: 'cannabis_autoflower.phases.germination.description',
          care: 'cannabis_autoflower.phases.germination.care',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'cannabis_autoflower.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cannabis_autoflower.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'cannabis_autoflower.phases.seedling.description',
          care: 'cannabis_autoflower.phases.seedling.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_autoflower.phases.seedling.hydro.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.phases.seedling.coco.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.phases.seedling.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 35,
          description: 'cannabis_autoflower.phases.vegetative.description',
          care: 'cannabis_autoflower.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.phases.vegetative.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        preflower: {
          days: 7,
          description: 'cannabis_autoflower.phases.preflower.description',
          care: 'cannabis_autoflower.phases.preflower.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.phases.preflower.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.phases.preflower.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_autoflower.phases.preflower.hydro.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.phases.preflower.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.phases.preflower.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.phases.preflower.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 49,
          description: 'cannabis_autoflower.phases.flowering.description',
          care: 'cannabis_autoflower.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.phases.flowering.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 7,
          description: 'cannabis_autoflower.phases.harvest.description',
          care: 'cannabis_autoflower.phases.harvest.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.phases.harvest.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.phases.harvest.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cannabis_autoflower.phases.harvest.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-15',
            end: '07-01',
            description: 'cannabis_autoflower.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '07-01',
            end: '10-15',
            description: 'cannabis_autoflower.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-15',
            end: '08-01',
            description: 'cannabis_autoflower.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-01',
            end: '11-01',
            description: 'cannabis_autoflower.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
      naturalTiming: 'cannabis_autoflower.naturalTiming',
    },
    greenhouse: {
      phases: {
        germination: {
          days: 3,
          description: 'cannabis_autoflower.phases.germination.description',
          care: 'cannabis_autoflower.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'cannabis_autoflower.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cannabis_autoflower.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'cannabis_autoflower.phases.seedling.description',
          care: 'cannabis_autoflower.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_autoflower.phases.seedling.hydro.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.phases.seedling.coco.watering.description' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_autoflower.phases.seedling.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 35,
          description: 'cannabis_autoflower.phases.vegetative.description',
          care: 'cannabis_autoflower.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.phases.vegetative.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        preflower: {
          days: 7,
          description: 'cannabis_autoflower.phases.preflower.description',
          care: 'cannabis_autoflower.phases.preflower.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.phases.preflower.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.phases.preflower.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_autoflower.phases.preflower.hydro.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.phases.preflower.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.phases.preflower.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.phases.preflower.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 49,
          description: 'cannabis_autoflower.phases.flowering.description',
          care: 'cannabis_autoflower.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_autoflower.phases.flowering.coco.watering.description' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_autoflower.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 7,
          description: 'cannabis_autoflower.phases.harvest.description',
          care: 'cannabis_autoflower.phases.harvest.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_autoflower.phases.harvest.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_autoflower.phases.harvest.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cannabis_autoflower.phases.harvest.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_autoflower.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-01',
            end: '08-01',
            description: 'cannabis_autoflower.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '05-15',
            end: '11-15',
            description: 'cannabis_autoflower.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-15',
            end: '09-01',
            description: 'cannabis_autoflower.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '05-01',
            end: '12-01',
            description: 'cannabis_autoflower.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
      naturalTiming: 'cannabis_autoflower.naturalTiming',
    },
  },
  careTips: {
    watering: 'cannabis_autoflower.careTips.watering',
    fertilizing: 'cannabis_autoflower.careTips.fertilizing',
    sunlight: 'cannabis_autoflower.careTips.sunlight',
    spacing: 'cannabis_autoflower.careTips.spacing',
    support: 'cannabis_autoflower.careTips.support',
    humidity: 'cannabis_autoflower.careTips.humidity',
    temperature: 'cannabis_autoflower.careTips.temperature',
  },
  commonProblems: {
    'Stunted Growth': 'cannabis_autoflower.commonProblems.stuntedGrowth',
    'Nutrient Burn': 'cannabis_autoflower.commonProblems.nutrientBurn',
    'Short Cycle': 'cannabis_autoflower.commonProblems.shortCycle',
  },
};

export default cannabis_autoflower;
