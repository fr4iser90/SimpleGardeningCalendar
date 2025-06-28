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
          description: 'cucumber.environments.indoor.phases.germination.description',
          care: 'cucumber.environments.indoor.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'cucumber.environments.indoor.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cucumber.environments.indoor.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cucumber.environments.indoor.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cucumber.environments.indoor.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cucumber.environments.indoor.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cucumber.environments.indoor.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 14,
          description: 'cucumber.environments.indoor.phases.seedling.description',
          care: 'cucumber.environments.indoor.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'cucumber.environments.indoor.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cucumber.environments.indoor.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cucumber.environments.indoor.phases.seedling.hydro.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cucumber.environments.indoor.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cucumber.environments.indoor.phases.seedling.coco.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cucumber.environments.indoor.phases.seedling.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 21,
          description: 'cucumber.environments.indoor.phases.vegetative.description',
          care: 'cucumber.environments.indoor.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cucumber.environments.indoor.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cucumber.environments.indoor.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cucumber.environments.indoor.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cucumber.environments.indoor.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cucumber.environments.indoor.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'cucumber.environments.indoor.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 14,
          description: 'cucumber.environments.indoor.phases.flowering.description',
          care: 'cucumber.environments.indoor.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'cucumber.environments.indoor.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cucumber.environments.indoor.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cucumber.environments.indoor.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cucumber.environments.indoor.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cucumber.environments.indoor.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'cucumber.environments.indoor.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        fruiting: {
          days: 50,
          description: 'cucumber.environments.indoor.phases.fruiting.description',
          care: 'cucumber.environments.indoor.phases.fruiting.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'cucumber.environments.indoor.phases.fruiting.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'cucumber.environments.indoor.phases.fruiting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cucumber.environments.indoor.phases.fruiting.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'cucumber.environments.indoor.phases.fruiting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'cucumber.environments.indoor.phases.fruiting.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'cucumber.environments.indoor.phases.fruiting.coco.fertilizing.description',
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
          description: 'cucumber.environments.outdoor.phases.germination.description',
          care: 'cucumber.environments.outdoor.phases.germination.care',
          editable: false,
        },
        seedling: {
          description: 'cucumber.environments.outdoor.phases.seedling.description',
          care: 'cucumber.environments.outdoor.phases.seedling.care',
          editable: false,
        },
        vegetative: {
          description: 'cucumber.environments.outdoor.phases.vegetative.description',
          care: 'cucumber.environments.outdoor.phases.vegetative.care',
          editable: false,
        },
        flowering: {
          description: 'cucumber.environments.outdoor.phases.flowering.description',
          care: 'cucumber.environments.outdoor.phases.flowering.care',
          editable: true,
        },
        fruiting: {
          start: '07-01',
          end: '09-30',
          description: 'cucumber.environments.outdoor.phases.fruiting.description',
          care: 'cucumber.environments.outdoor.phases.fruiting.care',
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
          description: 'cucumber.environments.greenhouse.phases.germination.description',
          care: 'cucumber.environments.greenhouse.phases.germination.care',
          editable: true,
        },
        seedling: {
          days: 14,
          description: 'cucumber.environments.greenhouse.phases.seedling.description',
          care: 'cucumber.environments.greenhouse.phases.seedling.care',
          editable: true,
        },
        vegetative: {
          days: 21,
          description: 'cucumber.environments.greenhouse.phases.vegetative.description',
          care: 'cucumber.environments.greenhouse.phases.vegetative.care',
          editable: true,
        },
        flowering: {
          days: 14,
          description: 'cucumber.environments.greenhouse.phases.flowering.description',
          care: 'cucumber.environments.greenhouse.phases.flowering.care',
          editable: true,
        },
        fruiting: {
          days: 50,
          description: 'cucumber.environments.greenhouse.phases.fruiting.description',
          care: 'cucumber.environments.greenhouse.phases.fruiting.care',
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
