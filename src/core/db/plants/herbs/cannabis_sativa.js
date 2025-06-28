/**
 * Cannabis Sativa Plant Data
 * Growing information for Cannabis Sativa
 * Now categorized as Herb with Cannabis tag
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const cannabis_sativa = {
  name: 'Cannabis Sativa',
  category: 'category.herbs', // Updated category
  tags: [PLANT_TAGS.CANNABIS, PLANT_TAGS.ANNUAL, PLANT_TAGS.PHOTOPERIOD], // New tag structure
  legalNote: 'plant.cannabis_sativa.legal_note',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 3,
          description: 'plant.cannabis_sativa.indoor.germination.description',
          care: 'plant.cannabis_sativa.indoor.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'plant.cannabis_sativa.indoor.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_sativa.indoor.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_sativa.indoor.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_sativa.indoor.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plant.cannabis_sativa.indoor.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_sativa.indoor.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          days: 14,
          description: 'plant.cannabis_sativa.indoor.seedling.description',
          care: 'plant.cannabis_sativa.indoor.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'plant.cannabis_sativa.indoor.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_sativa.indoor.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.cannabis_sativa.indoor.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_sativa.indoor.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_sativa.indoor.seedling.coco.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_sativa.indoor.seedling.coco.fertilizing',
            },
          },
        },
        vegetative: {
          days: 42,
          description: 'plant.cannabis_sativa.indoor.vegetative.description',
          care: 'plant.cannabis_sativa.indoor.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'plant.cannabis_sativa.indoor.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_sativa.indoor.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_sativa.indoor.vegetative.hydro.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_sativa.indoor.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_sativa.indoor.vegetative.coco.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_sativa.indoor.vegetative.coco.fertilizing',
            },
          },
        },
        preflower: {
          days: 7,
          description: 'plant.cannabis_sativa.indoor.preflower.description',
          care: 'plant.cannabis_sativa.indoor.preflower.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'plant.cannabis_sativa.indoor.preflower.soil.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_sativa.indoor.preflower.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_sativa.indoor.preflower.hydro.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_sativa.indoor.preflower.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_sativa.indoor.preflower.coco.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_sativa.indoor.preflower.coco.fertilizing',
            },
          },
        },
        flowering: {
          days: 70,
          description: 'plant.cannabis_sativa.indoor.flowering.description',
          care: 'plant.cannabis_sativa.indoor.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'plant.cannabis_sativa.indoor.flowering.soil.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_sativa.indoor.flowering.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_sativa.indoor.flowering.hydro.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_sativa.indoor.flowering.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_sativa.indoor.flowering.coco.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_sativa.indoor.flowering.coco.fertilizing',
            },
          },
        },
        harvest: {
          days: 7,
          description: 'plant.cannabis_sativa.indoor.harvest.description',
          care: 'plant.cannabis_sativa.indoor.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 1, description: 'plant.cannabis_sativa.indoor.harvest.soil.watering' },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_sativa.indoor.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.cannabis_sativa.indoor.harvest.hydro.watering' },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_sativa.indoor.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_sativa.indoor.harvest.coco.watering' },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_sativa.indoor.harvest.coco.fertilizing',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          start: '04-15',
          end: '04-18',
          description: 'plant.cannabis_sativa.outdoor.germination.description',
          care: 'plant.cannabis_sativa.outdoor.germination.care',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'plant.cannabis_sativa.outdoor.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_sativa.outdoor.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_sativa.outdoor.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_sativa.outdoor.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plant.cannabis_sativa.outdoor.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_sativa.outdoor.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          start: '04-19',
          end: '05-10',
          description: 'plant.cannabis_sativa.outdoor.seedling.description',
          care: 'plant.cannabis_sativa.outdoor.seedling.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'plant.cannabis_sativa.outdoor.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_sativa.outdoor.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.cannabis_sativa.outdoor.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_sativa.outdoor.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_sativa.outdoor.seedling.coco.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_sativa.outdoor.seedling.coco.fertilizing',
            },
          },
        },
        vegetative: {
          start: '05-11',
          end: '08-31',
          description: 'plant.cannabis_sativa.outdoor.vegetative.description',
          care: 'plant.cannabis_sativa.outdoor.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'plant.cannabis_sativa.outdoor.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_sativa.outdoor.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_sativa.outdoor.vegetative.hydro.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_sativa.outdoor.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_sativa.outdoor.vegetative.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_sativa.outdoor.vegetative.coco.fertilizing',
            },
          },
        },
        preflower: {
          start: '09-01',
          end: '09-14',
          description: 'plant.cannabis_sativa.outdoor.preflower.description',
          care: 'plant.cannabis_sativa.outdoor.preflower.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'plant.cannabis_sativa.outdoor.preflower.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_sativa.outdoor.preflower.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.cannabis_sativa.outdoor.preflower.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_sativa.outdoor.preflower.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_sativa.outdoor.preflower.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_sativa.outdoor.preflower.coco.fertilizing',
            },
          },
        },
        flowering: {
          start: '09-15',
          end: '11-15',
          description: 'plant.cannabis_sativa.outdoor.flowering.description',
          care: 'plant.cannabis_sativa.outdoor.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'plant.cannabis_sativa.outdoor.flowering.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_sativa.outdoor.flowering.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_sativa.outdoor.flowering.hydro.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_sativa.outdoor.flowering.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_sativa.outdoor.flowering.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_sativa.outdoor.flowering.coco.fertilizing',
            },
          },
        },
        harvest: {
          start: '11-16',
          end: '11-30',
          description: 'plant.cannabis_sativa.outdoor.harvest.description',
          care: 'plant.cannabis_sativa.outdoor.harvest.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'plant.cannabis_sativa.outdoor.harvest.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_sativa.outdoor.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_sativa.outdoor.harvest.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_sativa.outdoor.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plant.cannabis_sativa.outdoor.harvest.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_sativa.outdoor.harvest.coco.fertilizing',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '05-15',
            description: 'plant.cannabis_sativa.outdoor.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '10-15',
            end: '11-30',
            description: 'plant.cannabis_sativa.outdoor.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '05-01',
            description: 'plant.cannabis_sativa.outdoor.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '10-01',
            end: '12-15',
            description: 'plant.cannabis_sativa.outdoor.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
      naturalTiming: 'plant.cannabis_sativa.outdoor.naturalTiming',
    },
    greenhouse: {
      phases: {
        germination: {
          days: 3,
          description: 'plant.cannabis_sativa.greenhouse.germination.description',
          care: 'plant.cannabis_sativa.greenhouse.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'plant.cannabis_sativa.greenhouse.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_sativa.greenhouse.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_sativa.greenhouse.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_sativa.greenhouse.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plant.cannabis_sativa.greenhouse.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_sativa.greenhouse.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'plant.cannabis_sativa.greenhouse.seedling.description',
          care: 'plant.cannabis_sativa.greenhouse.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'plant.cannabis_sativa.greenhouse.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_sativa.greenhouse.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.cannabis_sativa.greenhouse.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_sativa.greenhouse.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_sativa.greenhouse.seedling.coco.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_sativa.greenhouse.seedling.coco.fertilizing',
            },
          },
        },
        vegetative: {
          days: 90,
          description: 'plant.cannabis_sativa.greenhouse.vegetative.description',
          care: 'plant.cannabis_sativa.greenhouse.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'plant.cannabis_sativa.greenhouse.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_sativa.greenhouse.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_sativa.greenhouse.vegetative.hydro.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_sativa.greenhouse.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_sativa.greenhouse.vegetative.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_sativa.greenhouse.vegetative.coco.fertilizing',
            },
          },
        },
        preflower: {
          days: 14,
          description: 'plant.cannabis_sativa.greenhouse.preflower.description',
          care: 'plant.cannabis_sativa.greenhouse.preflower.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'plant.cannabis_sativa.greenhouse.preflower.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_sativa.greenhouse.preflower.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.cannabis_sativa.greenhouse.preflower.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_sativa.greenhouse.preflower.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_sativa.greenhouse.preflower.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_sativa.greenhouse.preflower.coco.fertilizing',
            },
          },
        },
        flowering: {
          days: 84,
          description: 'plant.cannabis_sativa.greenhouse.flowering.description',
          care: 'plant.cannabis_sativa.greenhouse.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'plant.cannabis_sativa.greenhouse.flowering.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_sativa.greenhouse.flowering.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_sativa.greenhouse.flowering.hydro.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_sativa.greenhouse.flowering.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_sativa.greenhouse.flowering.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_sativa.greenhouse.flowering.coco.fertilizing',
            },
          },
        },
        harvest: {
          days: 14,
          description: 'plant.cannabis_sativa.greenhouse.harvest.description',
          care: 'plant.cannabis_sativa.greenhouse.harvest.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'plant.cannabis_sativa.greenhouse.harvest.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_sativa.greenhouse.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_sativa.greenhouse.harvest.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_sativa.greenhouse.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plant.cannabis_sativa.greenhouse.harvest.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_sativa.greenhouse.harvest.coco.fertilizing',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '02-15',
            end: '05-15',
            description: 'plant.cannabis_sativa.greenhouse.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '10-01',
            end: '12-31',
            description: 'plant.cannabis_sativa.greenhouse.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-01',
            end: '05-15',
            description: 'plant.cannabis_sativa.greenhouse.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '09-15',
            end: '12-31',
            description: 'plant.cannabis_sativa.greenhouse.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
      naturalTiming: 'plant.cannabis_sativa.greenhouse.naturalTiming',
    },
  },
  careTips: {
    watering: 'plant.cannabis_sativa.careTips.watering',
    fertilizing: 'plant.cannabis_sativa.careTips.fertilizing',
    sunlight: 'plant.cannabis_sativa.careTips.sunlight',
    spacing: 'plant.cannabis_sativa.careTips.spacing',
    support: 'plant.cannabis_sativa.careTips.support',
    humidity: 'plant.cannabis_sativa.careTips.humidity',
    temperature: 'plant.cannabis_sativa.careTips.temperature',
  },
  commonProblems: createProblemRefs(['rootRot', 'powderyMildew', 'leggyGrowth'], 'cannabis'),
};

export default cannabis_sativa;
