/**
 * Cannabis Sativa Plant Data
 * Growing information for Cannabis Sativa
 * Now categorized as Herb with Cannabis tag
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const cannabis_sativa = {
  name: 'cannabis_sativa.name',
  category: 'category.herbs', // Updated category
  tags: [PLANT_TAGS.CANNABIS, PLANT_TAGS.ANNUAL, PLANT_TAGS.PHOTOPERIOD], // New tag structure
  legalNote: 'cannabis_sativa.legalNote',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 3,
          description: 'cannabis_sativa.environments.indoor.phases.germination.description',
          care: 'cannabis_sativa.environments.indoor.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'cannabis_sativa.environments.indoor.phases.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_sativa.environments.indoor.phases.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_sativa.environments.indoor.phases.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_sativa.environments.indoor.phases.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cannabis_sativa.environments.indoor.phases.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_sativa.environments.indoor.phases.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          days: 14,
          description: 'cannabis_sativa.environments.indoor.phases.seedling.description',
          care: 'cannabis_sativa.environments.indoor.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_sativa.environments.indoor.phases.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_sativa.environments.indoor.phases.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_sativa.environments.indoor.phases.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_sativa.environments.indoor.phases.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_sativa.environments.indoor.phases.seedling.coco.watering' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_sativa.environments.indoor.phases.seedling.coco.fertilizing',
            },
          },
        },
        vegetative: {
          days: 42,
          description: 'cannabis_sativa.environments.indoor.phases.vegetative.description',
          care: 'cannabis_sativa.environments.indoor.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_sativa.environments.indoor.phases.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_sativa.environments.indoor.phases.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_sativa.environments.indoor.phases.vegetative.hydro.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_sativa.environments.indoor.phases.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_sativa.environments.indoor.phases.vegetative.coco.watering' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_sativa.environments.indoor.phases.vegetative.coco.fertilizing',
            },
          },
        },
        preflower: {
          days: 7,
          description: 'cannabis_sativa.environments.indoor.phases.preflower.description',
          care: 'cannabis_sativa.environments.indoor.phases.preflower.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_sativa.environments.indoor.phases.preflower.soil.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_sativa.environments.indoor.phases.preflower.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_sativa.environments.indoor.phases.preflower.hydro.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_sativa.environments.indoor.phases.preflower.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_sativa.environments.indoor.phases.preflower.coco.watering' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_sativa.environments.indoor.phases.preflower.coco.fertilizing',
            },
          },
        },
        flowering: {
          days: 70,
          description: 'cannabis_sativa.environments.indoor.phases.flowering.description',
          care: 'cannabis_sativa.environments.indoor.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_sativa.environments.indoor.phases.flowering.soil.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_sativa.environments.indoor.phases.flowering.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_sativa.environments.indoor.phases.flowering.hydro.watering',
            },
            fertilizing: {
              interval: 7,
              description: 'cannabis_sativa.environments.indoor.phases.flowering.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_sativa.environments.indoor.phases.flowering.coco.watering' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_sativa.environments.indoor.phases.flowering.coco.fertilizing',
            },
          },
        },
        harvest: {
          days: 7,
          description: 'cannabis_sativa.environments.indoor.phases.harvest.description',
          care: 'cannabis_sativa.environments.indoor.phases.harvest.care',
          editable: true,
          soil: {
            watering: { interval: 1, description: 'cannabis_sativa.environments.indoor.phases.harvest.soil.watering' },
            fertilizing: {
              interval: 0,
              description: 'cannabis_sativa.environments.indoor.phases.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_sativa.environments.indoor.phases.harvest.hydro.watering' },
            fertilizing: {
              interval: 0,
              description: 'cannabis_sativa.environments.indoor.phases.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_sativa.environments.indoor.phases.harvest.coco.watering' },
            fertilizing: {
              interval: 0,
              description: 'cannabis_sativa.environments.indoor.phases.harvest.coco.fertilizing',
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
          description: 'cannabis_sativa.environments.outdoor.phases.germination.description',
          care: 'cannabis_sativa.environments.outdoor.phases.germination.care',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'cannabis_sativa.environments.outdoor.phases.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_sativa.environments.outdoor.phases.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_sativa.environments.outdoor.phases.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_sativa.environments.outdoor.phases.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cannabis_sativa.environments.outdoor.phases.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_sativa.environments.outdoor.phases.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          start: '04-19',
          end: '05-10',
          description: 'cannabis_sativa.environments.outdoor.phases.seedling.description',
          care: 'cannabis_sativa.environments.outdoor.phases.seedling.care',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_sativa.environments.outdoor.phases.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_sativa.environments.outdoor.phases.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_sativa.environments.outdoor.phases.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_sativa.environments.outdoor.phases.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_sativa.environments.outdoor.phases.seedling.coco.watering' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_sativa.environments.outdoor.phases.seedling.coco.fertilizing',
            },
          },
        },
        vegetative: {
          start: '05-11',
          end: '08-31',
          description: 'cannabis_sativa.environments.outdoor.phases.vegetative.description',
          care: 'cannabis_sativa.environments.outdoor.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'cannabis_sativa.environments.outdoor.phases.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_sativa.environments.outdoor.phases.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_sativa.environments.outdoor.phases.vegetative.hydro.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_sativa.environments.outdoor.phases.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_sativa.environments.outdoor.phases.vegetative.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_sativa.environments.outdoor.phases.vegetative.coco.fertilizing',
            },
          },
        },
        preflower: {
          start: '09-01',
          end: '09-14',
          description: 'cannabis_sativa.environments.outdoor.phases.preflower.description',
          care: 'cannabis_sativa.environments.outdoor.phases.preflower.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'cannabis_sativa.environments.outdoor.phases.preflower.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_sativa.environments.outdoor.phases.preflower.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_sativa.environments.outdoor.phases.preflower.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_sativa.environments.outdoor.phases.preflower.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_sativa.environments.outdoor.phases.preflower.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_sativa.environments.outdoor.phases.preflower.coco.fertilizing',
            },
          },
        },
        flowering: {
          start: '09-15',
          end: '11-15',
          description: 'cannabis_sativa.environments.outdoor.phases.flowering.description',
          care: 'cannabis_sativa.environments.outdoor.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'cannabis_sativa.environments.outdoor.phases.flowering.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_sativa.environments.outdoor.phases.flowering.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_sativa.environments.outdoor.phases.flowering.hydro.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_sativa.environments.outdoor.phases.flowering.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_sativa.environments.outdoor.phases.flowering.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_sativa.environments.outdoor.phases.flowering.coco.fertilizing',
            },
          },
        },
        harvest: {
          start: '11-16',
          end: '11-30',
          description: 'cannabis_sativa.environments.outdoor.phases.harvest.description',
          care: 'cannabis_sativa.environments.outdoor.phases.harvest.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'cannabis_sativa.environments.outdoor.phases.harvest.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_sativa.environments.outdoor.phases.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_sativa.environments.outdoor.phases.harvest.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_sativa.environments.outdoor.phases.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cannabis_sativa.environments.outdoor.phases.harvest.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_sativa.environments.outdoor.phases.harvest.coco.fertilizing',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '05-15',
            description: 'cannabis_sativa.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '10-15',
            end: '11-30',
            description: 'cannabis_sativa.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '05-01',
            description: 'cannabis_sativa.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '10-01',
            end: '12-15',
            description: 'cannabis_sativa.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 3,
          description: 'cannabis_sativa.environments.greenhouse.phases.germination.description',
          care: 'cannabis_sativa.environments.greenhouse.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'cannabis_sativa.environments.greenhouse.phases.germination.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_sativa.environments.greenhouse.phases.germination.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_sativa.environments.greenhouse.phases.germination.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_sativa.environments.greenhouse.phases.germination.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cannabis_sativa.environments.greenhouse.phases.germination.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_sativa.environments.greenhouse.phases.germination.coco.fertilizing',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'cannabis_sativa.environments.greenhouse.phases.seedling.description',
          care: 'cannabis_sativa.environments.greenhouse.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cannabis_sativa.environments.greenhouse.phases.seedling.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_sativa.environments.greenhouse.phases.seedling.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_sativa.environments.greenhouse.phases.seedling.hydro.watering' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_sativa.environments.greenhouse.phases.seedling.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_sativa.environments.greenhouse.phases.seedling.coco.watering' },
            fertilizing: {
              interval: 7,
              description: 'cannabis_sativa.environments.greenhouse.phases.seedling.coco.fertilizing',
            },
          },
        },
        vegetative: {
          days: 90,
          description: 'cannabis_sativa.environments.greenhouse.phases.vegetative.description',
          care: 'cannabis_sativa.environments.greenhouse.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'cannabis_sativa.environments.greenhouse.phases.vegetative.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_sativa.environments.greenhouse.phases.vegetative.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_sativa.environments.greenhouse.phases.vegetative.hydro.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_sativa.environments.greenhouse.phases.vegetative.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_sativa.environments.greenhouse.phases.vegetative.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_sativa.environments.greenhouse.phases.vegetative.coco.fertilizing',
            },
          },
        },
        preflower: {
          days: 14,
          description: 'cannabis_sativa.environments.greenhouse.phases.preflower.description',
          care: 'cannabis_sativa.environments.greenhouse.phases.preflower.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'cannabis_sativa.environments.greenhouse.phases.preflower.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_sativa.environments.greenhouse.phases.preflower.soil.fertilizing',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'cannabis_sativa.environments.greenhouse.phases.preflower.hydro.watering' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_sativa.environments.greenhouse.phases.preflower.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_sativa.environments.greenhouse.phases.preflower.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_sativa.environments.greenhouse.phases.preflower.coco.fertilizing',
            },
          },
        },
        flowering: {
          days: 84,
          description: 'cannabis_sativa.environments.greenhouse.phases.flowering.description',
          care: 'cannabis_sativa.environments.greenhouse.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'cannabis_sativa.environments.greenhouse.phases.flowering.soil.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_sativa.environments.greenhouse.phases.flowering.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_sativa.environments.greenhouse.phases.flowering.hydro.watering',
            },
            fertilizing: {
              interval: 14,
              description: 'cannabis_sativa.environments.greenhouse.phases.flowering.hydro.fertilizing',
            },
          },
          coco: {
            watering: { interval: 1, description: 'cannabis_sativa.environments.greenhouse.phases.flowering.coco.watering' },
            fertilizing: {
              interval: 14,
              description: 'cannabis_sativa.environments.greenhouse.phases.flowering.coco.fertilizing',
            },
          },
        },
        harvest: {
          days: 14,
          description: 'cannabis_sativa.environments.greenhouse.phases.harvest.description',
          care: 'cannabis_sativa.environments.greenhouse.phases.harvest.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'cannabis_sativa.environments.greenhouse.phases.harvest.soil.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_sativa.environments.greenhouse.phases.harvest.soil.fertilizing',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cannabis_sativa.environments.greenhouse.phases.harvest.hydro.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_sativa.environments.greenhouse.phases.harvest.hydro.fertilizing',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cannabis_sativa.environments.greenhouse.phases.harvest.coco.watering',
            },
            fertilizing: {
              interval: 0,
              description: 'cannabis_sativa.environments.greenhouse.phases.harvest.coco.fertilizing',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'cannabis_sativa.careTips.watering',
    fertilizing: 'cannabis_sativa.careTips.fertilizing',
    sunlight: 'cannabis_sativa.careTips.sunlight',
    spacing: 'cannabis_sativa.careTips.spacing',
    support: 'cannabis_sativa.careTips.support',
    humidity: 'cannabis_sativa.careTips.humidity',
    temperature: 'cannabis_sativa.careTips.temperature',
  },
  commonProblems: createProblemRefs(['rootRot', 'powderyMildew', 'leggyGrowth'], 'cannabis'),
};

export default cannabis_sativa;
