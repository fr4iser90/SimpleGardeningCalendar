/**
 * Cucumber Plant Data
 * Growing information for Cucumber
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';
export const cucumber = {
  name: 'cucumber.name',
  category: 'category.vegetables',
  tags: [PLANT_TAGS.PHOTOPERIOD, PLANT_TAGS.ANNUAL],
  emoji: '🥒',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 7,
          description: 'cucumber.phases.germination.description',
          care: 'cucumber.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'cucumber.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cucumber.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cucumber.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cucumber.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cucumber.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cucumber.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 14,
          description: 'cucumber.phases.seedling.description',
          care: 'cucumber.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'cucumber.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cucumber.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cucumber.phases.seedling.hydro.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cucumber.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cucumber.phases.seedling.coco.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cucumber.phases.seedling.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 21,
          description: 'cucumber.phases.vegetative.description',
          care: 'cucumber.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cucumber.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cucumber.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cucumber.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cucumber.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cucumber.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cucumber.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 14,
          description: 'cucumber.phases.flowering.description',
          care: 'cucumber.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'cucumber.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cucumber.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cucumber.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cucumber.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cucumber.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cucumber.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        fruiting: {
          days: 50,
          description: 'cucumber.phases.fruiting.description',
          care: 'cucumber.phases.fruiting.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cucumber.phases.fruiting.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'cucumber.phases.fruiting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cucumber.phases.fruiting.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'cucumber.phases.fruiting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cucumber.phases.fruiting.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'cucumber.phases.fruiting.coco.fertilizing.description',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          start: '05-01',
          end: '06-15',
          description: 'cucumber.phases.germination.description',
          care: 'cucumber.phases.germination.care',
          editable: false,
        },
        seedling: {
          description: 'cucumber.phases.seedling.description',
          care: 'cucumber.phases.seedling.care',
          editable: false,
        },
        vegetative: {
          description: 'cucumber.phases.vegetative.description',
          care: 'cucumber.phases.vegetative.care',
          editable: false,
        },
        flowering: {
          description: 'cucumber.phases.flowering.description',
          care: 'cucumber.phases.flowering.care',
          editable: true,
        },
        fruiting: {
          start: '07-01',
          end: '09-30',
          description: 'cucumber.phases.fruiting.description',
          care: 'cucumber.phases.fruiting.care',
          editable: true,
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '05-01',
            end: '06-15',
            description: 'cucumber.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '07-01',
            end: '09-30',
            description: 'cucumber.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'cucumber.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-01',
            end: '10-31',
            description: 'cucumber.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 7,
          description: 'cucumber.phases.germination.description',
          care: 'cucumber.phases.germination.care',
          editable: true,
        },
        seedling: {
          days: 14,
          description: 'cucumber.phases.seedling.description',
          care: 'cucumber.phases.seedling.care',
          editable: true,
        },
        vegetative: {
          days: 21,
          description: 'cucumber.phases.vegetative.description',
          care: 'cucumber.phases.vegetative.care',
          editable: true,
        },
        flowering: {
          days: 14,
          description: 'cucumber.phases.flowering.description',
          care: 'cucumber.phases.flowering.care',
          editable: true,
        },
        fruiting: {
          days: 50,
          description: 'cucumber.phases.fruiting.description',
          care: 'cucumber.phases.fruiting.care',
          editable: true,
        },
      },
    },
  },
  careTips: {
    watering: 'cucumber.careTips.watering',
    fertilizing: 'cucumber.careTips.fertilizing',
    sunlight: 'cucumber.careTips.sunlight',
    spacing: 'cucumber.careTips.spacing',
    temperature: 'cucumber.careTips.temperature',
    soilPH: 'cucumber.careTips.soilPH',
    support: 'cucumber.careTips.support',
  },
  commonProblems: createProblemRefs(['powderyMildew', 'downyMildew', 'cucumberBeetle'], 'vegetables'),
};

export default cucumber;
