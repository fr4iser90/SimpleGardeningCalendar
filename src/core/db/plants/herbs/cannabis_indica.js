/**
 * Cannabis Indica Plant Data
 * Indoor/Outdoor growing information for Cannabis Indica
 * Now categorized as Herb with Cannabis tag
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const cannabis_indica = {
  name: 'Cannabis Indica',
  category: 'category.herbs', // Updated category
  tags: [PLANT_TAGS.CANNABIS, PLANT_TAGS.ANNUAL, PLANT_TAGS.PHOTOPERIOD], // New tag structure
  legalNote: 'plant.cannabis_indica.legal_note',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 3,
          description: 'plant.cannabis_indica.indoor.germination.description',
          care: 'plant.cannabis_indica.indoor.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'plant.cannabis_indica.indoor.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_indica.indoor.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_indica.indoor.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_indica.indoor.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plant.cannabis_indica.indoor.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_indica.indoor.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          days: 14,
          description: 'plant.cannabis_indica.indoor.seedling.description',
          care: 'plant.cannabis_indica.indoor.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'plant.cannabis_indica.indoor.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_indica.indoor.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.cannabis_indica.indoor.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_indica.indoor.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_indica.indoor.seedling.coco.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_indica.indoor.seedling.coco.fertilizing',
            },
          },
        },
        vegetative: {
          days: 28,
          description: 'plant.cannabis_indica.indoor.vegetative.description',
          care: 'plant.cannabis_indica.indoor.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'plant.cannabis_indica.indoor.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_indica.indoor.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_indica.indoor.vegetative.hydro.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_indica.indoor.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_indica.indoor.vegetative.coco.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_indica.indoor.vegetative.coco.fertilizing',
            },
          },
        },
        preflower: {
          days: 7,
          description: 'plant.cannabis_indica.indoor.preflower.description',
          care: 'plant.cannabis_indica.indoor.preflower.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'plant.cannabis_indica.indoor.preflower.soil.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_indica.indoor.preflower.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_indica.indoor.preflower.hydro.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_indica.indoor.preflower.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_indica.indoor.preflower.coco.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_indica.indoor.preflower.coco.fertilizing',
            },
          },
        },
        flowering: {
          days: 56,
          description: 'plant.cannabis_indica.indoor.flowering.description',
          care: 'plant.cannabis_indica.indoor.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'plant.cannabis_indica.indoor.flowering.soil.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_indica.indoor.flowering.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_indica.indoor.flowering.hydro.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_indica.indoor.flowering.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_indica.indoor.flowering.coco.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_indica.indoor.flowering.coco.fertilizing',
            },
          },
        },
        harvest: {
          days: 7,
          description: 'plant.cannabis_indica.indoor.harvest.description',
          care: 'plant.cannabis_indica.indoor.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 1, description: 'plant.cannabis_indica.indoor.harvest.soil.watering' },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_indica.indoor.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.cannabis_indica.indoor.harvest.hydro.watering' },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_indica.indoor.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_indica.indoor.harvest.coco.watering' },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_indica.indoor.harvest.coco.fertilizing',
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
          description: 'plant.cannabis_indica.outdoor.germination.description',
          care: 'plant.cannabis_indica.outdoor.germination.care',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'plant.cannabis_indica.outdoor.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_indica.outdoor.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_indica.outdoor.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_indica.outdoor.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plant.cannabis_indica.outdoor.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_indica.outdoor.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          start: '04-19',
          end: '05-10',
          description: 'plant.cannabis_indica.outdoor.seedling.description',
          care: 'plant.cannabis_indica.outdoor.seedling.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'plant.cannabis_indica.outdoor.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_indica.outdoor.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.cannabis_indica.outdoor.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_indica.outdoor.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_indica.outdoor.seedling.coco.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_indica.outdoor.seedling.coco.fertilizing',
            },
          },
        },
        vegetative: {
          start: '05-11',
          end: '08-10',
          description: 'plant.cannabis_indica.outdoor.vegetative.description',
          care: 'plant.cannabis_indica.outdoor.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'plant.cannabis_indica.outdoor.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_indica.outdoor.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_indica.outdoor.vegetative.hydro.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_indica.outdoor.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_indica.outdoor.vegetative.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_indica.outdoor.vegetative.coco.fertilizing',
            },
          },
        },
        preflower: {
          start: '08-11',
          end: '08-24',
          description: 'plant.cannabis_indica.outdoor.preflower.description',
          care: 'plant.cannabis_indica.outdoor.preflower.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'plant.cannabis_indica.outdoor.preflower.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_indica.outdoor.preflower.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.cannabis_indica.outdoor.preflower.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_indica.outdoor.preflower.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_indica.outdoor.preflower.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_indica.outdoor.preflower.coco.fertilizing',
            },
          },
        },
        flowering: {
          start: '08-25',
          end: '10-27',
          description: 'plant.cannabis_indica.outdoor.flowering.description',
          care: 'plant.cannabis_indica.outdoor.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'plant.cannabis_indica.outdoor.flowering.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_indica.outdoor.flowering.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_indica.outdoor.flowering.hydro.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_indica.outdoor.flowering.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_indica.outdoor.flowering.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_indica.outdoor.flowering.coco.fertilizing',
            },
          },
        },
        harvest: {
          start: '10-28',
          end: '11-11',
          description: 'plant.cannabis_indica.outdoor.harvest.description',
          care: 'plant.cannabis_indica.outdoor.harvest.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'plant.cannabis_indica.outdoor.harvest.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_indica.outdoor.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_indica.outdoor.harvest.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_indica.outdoor.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plant.cannabis_indica.outdoor.harvest.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_indica.outdoor.harvest.coco.fertilizing',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-15',
            end: '06-01',
            description: 'plant.cannabis_indica.outdoor.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '09-15',
            end: '10-31',
            description: 'plant.cannabis_indica.outdoor.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'plant.cannabis_indica.outdoor.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '09-01',
            end: '11-15',
            description: 'plant.cannabis_indica.outdoor.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
      naturalTiming: 'plant.cannabis_indica.outdoor.naturalTiming',
    },
    greenhouse: {
      phases: {
        germination: {
          days: 3,
          description: 'plant.cannabis_indica.greenhouse.germination.description',
          care: 'plant.cannabis_indica.greenhouse.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'plant.cannabis_indica.greenhouse.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_indica.greenhouse.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_indica.greenhouse.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_indica.greenhouse.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plant.cannabis_indica.greenhouse.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_indica.greenhouse.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'plant.cannabis_indica.greenhouse.seedling.description',
          care: 'plant.cannabis_indica.greenhouse.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'plant.cannabis_indica.greenhouse.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_indica.greenhouse.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.cannabis_indica.greenhouse.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_indica.greenhouse.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_indica.greenhouse.seedling.coco.watering' },
            fertilizing: {
              interval: 7,
              description: 'plant.cannabis_indica.greenhouse.seedling.coco.fertilizing',
            },
          },
        },
        vegetative: {
          days: 60,
          description: 'plant.cannabis_indica.greenhouse.vegetative.description',
          care: 'plant.cannabis_indica.greenhouse.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'plant.cannabis_indica.greenhouse.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_indica.greenhouse.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_indica.greenhouse.vegetative.hydro.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_indica.greenhouse.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_indica.greenhouse.vegetative.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_indica.greenhouse.vegetative.coco.fertilizing',
            },
          },
        },
        preflower: {
          days: 14,
          description: 'plant.cannabis_indica.greenhouse.preflower.description',
          care: 'plant.cannabis_indica.greenhouse.preflower.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'plant.cannabis_indica.greenhouse.preflower.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_indica.greenhouse.preflower.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'plant.cannabis_indica.greenhouse.preflower.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_indica.greenhouse.preflower.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_indica.greenhouse.preflower.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_indica.greenhouse.preflower.coco.fertilizing',
            },
          },
        },
        flowering: {
          days: 63,
          description: 'plant.cannabis_indica.greenhouse.flowering.description',
          care: 'plant.cannabis_indica.greenhouse.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'plant.cannabis_indica.greenhouse.flowering.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_indica.greenhouse.flowering.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_indica.greenhouse.flowering.hydro.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_indica.greenhouse.flowering.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'plant.cannabis_indica.greenhouse.flowering.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'plant.cannabis_indica.greenhouse.flowering.coco.fertilizing',
            },
          },
        },
        harvest: {
          days: 14,
          description: 'plant.cannabis_indica.greenhouse.harvest.description',
          care: 'plant.cannabis_indica.greenhouse.harvest.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'plant.cannabis_indica.greenhouse.harvest.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_indica.greenhouse.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'plant.cannabis_indica.greenhouse.harvest.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_indica.greenhouse.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'plant.cannabis_indica.greenhouse.harvest.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'plant.cannabis_indica.greenhouse.harvest.coco.fertilizing',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-01',
            end: '06-01',
            description: 'plant.cannabis_indica.greenhouse.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '09-01',
            end: '11-30',
            description: 'plant.cannabis_indica.greenhouse.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-15',
            end: '06-15',
            description: 'plant.cannabis_indica.greenhouse.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '08-15',
            end: '12-15',
            description: 'plant.cannabis_indica.greenhouse.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
      naturalTiming: 'plant.cannabis_indica.greenhouse.naturalTiming',
    },
  },
  careTips: {
    watering: 'plant.cannabis_indica.careTips.watering',
    fertilizing: 'plant.cannabis_indica.careTips.fertilizing',
    sunlight: 'plant.cannabis_indica.careTips.sunlight',
    spacing: 'plant.cannabis_indica.careTips.spacing',
    support: 'plant.cannabis_indica.careTips.support',
    humidity: 'plant.cannabis_indica.careTips.humidity',
    temperature: 'plant.cannabis_indica.careTips.temperature',
  },
  commonProblems: createProblemRefs(['rootRot', 'powderyMildew', 'leggyGrowth'], 'cannabis'),
};

export default cannabis_indica;
