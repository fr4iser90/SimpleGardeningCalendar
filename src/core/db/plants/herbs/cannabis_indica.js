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
  legalNote: 'cannabis_indica.legal_note',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 3,
          description: 'cannabis_indica.environments.indoor.phases.germination.description',
          care: 'cannabis_indica.environments.indoor.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'cannabis_indica.environments.indoor.phases.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_indica.environments.indoor.phases.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_indica.environments.indoor.phases.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_indica.environments.indoor.phases.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cannabis_indica.environments.indoor.phases.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_indica.environments.indoor.phases.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          days: 14,
          description: 'cannabis_indica.environments.indoor.phases.seedling.description',
          care: 'cannabis_indica.environments.indoor.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_indica.environments.indoor.phases.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_indica.environments.indoor.phases.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_indica.environments.indoor.phases.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_indica.environments.indoor.phases.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_indica.environments.indoor.phases.seedling.coco.watering' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_indica.environments.indoor.phases.seedling.coco.fertilizing',
            },
          },
        },
        vegetative: {
          days: 28,
          description: 'cannabis_indica.environments.indoor.phases.vegetative.description',
          care: 'cannabis_indica.environments.indoor.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_indica.environments.indoor.phases.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_indica.environments.indoor.phases.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_indica.environments.indoor.phases.vegetative.hydro.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_indica.environments.indoor.phases.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_indica.environments.indoor.phases.vegetative.coco.watering' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_indica.environments.indoor.phases.vegetative.coco.fertilizing',
            },
          },
        },
        preflower: {
          days: 7,
          description: 'cannabis_indica.environments.indoor.phases.preflower.description',
          care: 'cannabis_indica.environments.indoor.phases.preflower.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_indica.environments.indoor.phases.preflower.soil.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_indica.environments.indoor.phases.preflower.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_indica.environments.indoor.phases.preflower.hydro.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_indica.environments.indoor.phases.preflower.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_indica.environments.indoor.phases.preflower.coco.watering' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_indica.environments.indoor.phases.preflower.coco.fertilizing',
            },
          },
        },
        flowering: {
          days: 56,
          description: 'cannabis_indica.environments.indoor.phases.flowering.description',
          care: 'cannabis_indica.environments.indoor.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_indica.environments.indoor.phases.flowering.soil.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_indica.environments.indoor.phases.flowering.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_indica.environments.indoor.phases.flowering.hydro.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_indica.environments.indoor.phases.flowering.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_indica.environments.indoor.phases.flowering.coco.watering' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_indica.environments.indoor.phases.flowering.coco.fertilizing',
            },
          },
        },
        harvest: {
          days: 7,
          description: 'cannabis_indica.environments.indoor.phases.harvest.description',
          care: 'cannabis_indica.environments.indoor.phases.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 1, description: 'cannabis_indica.environments.indoor.phases.harvest.soil.watering' },
            fertilizing: {
              interval: 0,
              description: 'cannabis_indica.environments.indoor.phases.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_indica.environments.indoor.phases.harvest.hydro.watering' },
            fertilizing: {
              interval: 0,
              description: 'cannabis_indica.environments.indoor.phases.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_indica.environments.indoor.phases.harvest.coco.watering' },
            fertilizing: {
              interval: 0,
              description: 'cannabis_indica.environments.indoor.phases.harvest.coco.fertilizing',
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
          description: 'cannabis_indica.environments.outdoor.phases.germination.description',
          care: 'cannabis_indica.environments.outdoor.phases.germination.care',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'cannabis_indica.environments.outdoor.phases.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_indica.environments.outdoor.phases.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_indica.environments.outdoor.phases.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_indica.environments.outdoor.phases.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cannabis_indica.environments.outdoor.phases.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_indica.environments.outdoor.phases.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          start: '04-19',
          end: '05-10',
          description: 'cannabis_indica.environments.outdoor.phases.seedling.description',
          care: 'cannabis_indica.environments.outdoor.phases.seedling.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_indica.environments.outdoor.phases.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_indica.environments.outdoor.phases.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_indica.environments.outdoor.phases.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_indica.environments.outdoor.phases.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_indica.environments.outdoor.phases.seedling.coco.watering' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_indica.environments.outdoor.phases.seedling.coco.fertilizing',
            },
          },
        },
        vegetative: {
          start: '05-11',
          end: '08-10',
          description: 'cannabis_indica.environments.outdoor.phases.vegetative.description',
          care: 'cannabis_indica.environments.outdoor.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'cannabis_indica.environments.outdoor.phases.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_indica.environments.outdoor.phases.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_indica.environments.outdoor.phases.vegetative.hydro.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_indica.environments.outdoor.phases.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_indica.environments.outdoor.phases.vegetative.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_indica.environments.outdoor.phases.vegetative.coco.fertilizing',
            },
          },
        },
        preflower: {
          start: '08-11',
          end: '08-24',
          description: 'cannabis_indica.environments.outdoor.phases.preflower.description',
          care: 'cannabis_indica.environments.outdoor.phases.preflower.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'cannabis_indica.environments.outdoor.phases.preflower.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_indica.environments.outdoor.phases.preflower.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_indica.environments.outdoor.phases.preflower.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_indica.environments.outdoor.phases.preflower.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_indica.environments.outdoor.phases.preflower.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_indica.environments.outdoor.phases.preflower.coco.fertilizing',
            },
          },
        },
        flowering: {
          start: '08-25',
          end: '10-27',
          description: 'cannabis_indica.environments.outdoor.phases.flowering.description',
          care: 'cannabis_indica.environments.outdoor.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'cannabis_indica.environments.outdoor.phases.flowering.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_indica.environments.outdoor.phases.flowering.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_indica.environments.outdoor.phases.flowering.hydro.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_indica.environments.outdoor.phases.flowering.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_indica.environments.outdoor.phases.flowering.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_indica.environments.outdoor.phases.flowering.coco.fertilizing',
            },
          },
        },
        harvest: {
          start: '10-28',
          end: '11-11',
          description: 'cannabis_indica.environments.outdoor.phases.harvest.description',
          care: 'cannabis_indica.environments.outdoor.phases.harvest.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'cannabis_indica.environments.outdoor.phases.harvest.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_indica.environments.outdoor.phases.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_indica.environments.outdoor.phases.harvest.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_indica.environments.outdoor.phases.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cannabis_indica.environments.outdoor.phases.harvest.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_indica.environments.outdoor.phases.harvest.coco.fertilizing',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-15',
            end: '06-01',
            description: 'cannabis_indica.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '09-15',
            end: '10-31',
            description: 'cannabis_indica.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'cannabis_indica.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '09-01',
            end: '11-15',
            description: 'cannabis_indica.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 3,
          description: 'cannabis_indica.environments.greenhouse.phases.germination.description',
          care: 'cannabis_indica.environments.greenhouse.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'cannabis_indica.environments.greenhouse.phases.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_indica.environments.greenhouse.phases.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_indica.environments.greenhouse.phases.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_indica.environments.greenhouse.phases.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cannabis_indica.environments.greenhouse.phases.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_indica.environments.greenhouse.phases.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'cannabis_indica.environments.greenhouse.phases.seedling.description',
          care: 'cannabis_indica.environments.greenhouse.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_indica.environments.greenhouse.phases.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_indica.environments.greenhouse.phases.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_indica.environments.greenhouse.phases.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_indica.environments.greenhouse.phases.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_indica.environments.greenhouse.phases.seedling.coco.watering' },
            fertilizing: { interval: 7, description: 'cannabis_indica.environments.greenhouse.phases.seedling.coco.fertilizing' },
          },
        },
        vegetative: {
          days: 60,
          description: 'cannabis_indica.environments.greenhouse.phases.vegetative.description',
          care: 'cannabis_indica.environments.greenhouse.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'cannabis_indica.environments.greenhouse.phases.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_indica.environments.greenhouse.phases.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_indica.environments.greenhouse.phases.vegetative.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_indica.environments.greenhouse.phases.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_indica.environments.greenhouse.phases.vegetative.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_indica.environments.greenhouse.phases.vegetative.coco.fertilizing',
            },
          },
        },
        preflower: {
          days: 14,
          description: 'cannabis_indica.environments.greenhouse.phases.preflower.description',
          care: 'cannabis_indica.environments.greenhouse.phases.preflower.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'cannabis_indica.environments.greenhouse.phases.preflower.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_indica.environments.greenhouse.phases.preflower.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_indica.environments.greenhouse.phases.preflower.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_indica.environments.greenhouse.phases.preflower.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_indica.environments.greenhouse.phases.preflower.coco.watering' },
            fertilizing: { interval: 14, description: 'cannabis_indica.environments.greenhouse.phases.preflower.coco.fertilizing' },
          },
        },
        flowering: {
          days: 63,
          description: 'cannabis_indica.environments.greenhouse.phases.flowering.description',
          care: 'cannabis_indica.environments.greenhouse.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'cannabis_indica.environments.greenhouse.phases.flowering.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_indica.environments.greenhouse.phases.flowering.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_indica.environments.greenhouse.phases.flowering.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_indica.environments.greenhouse.phases.flowering.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_indica.environments.greenhouse.phases.flowering.coco.watering' },
            fertilizing: { interval: 14, description: 'cannabis_indica.environments.greenhouse.phases.flowering.coco.fertilizing' },
          },
        },
        harvest: {
          days: 14,
          description: 'cannabis_indica.environments.greenhouse.phases.harvest.description',
          care: 'cannabis_indica.environments.greenhouse.phases.harvest.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'cannabis_indica.environments.greenhouse.phases.harvest.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_indica.environments.greenhouse.phases.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_indica.environments.greenhouse.phases.harvest.hydro.watering' },
            fertilizing: { interval: 0, description: 'cannabis_indica.environments.greenhouse.phases.harvest.hydro.fertilizing' },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_indica.environments.greenhouse.phases.harvest.coco.watering' },
            fertilizing: { interval: 0, description: 'cannabis_indica.environments.greenhouse.phases.harvest.coco.fertilizing' },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'cannabis_indica.careTips.watering',
    fertilizing: 'cannabis_indica.careTips.fertilizing',
    sunlight: 'cannabis_indica.careTips.sunlight',
    spacing: 'cannabis_indica.careTips.spacing',
    support: 'cannabis_indica.careTips.support',
    humidity: 'cannabis_indica.careTips.humidity',
    temperature: 'cannabis_indica.careTips.temperature',
  },
  commonProblems: createProblemRefs(['rootRot', 'powderyMildew', 'leggyGrowth'], 'cannabis'),
};

export default cannabis_indica;
