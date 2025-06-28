/**
 * Kale Plant Data
 * Growing information for Kale
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const kale = {
  name: 'kale.name',
  category: 'category.vegetables',
  emoji: '🥬',
  tags: [PLANT_TAGS.LEAFY, PLANT_TAGS.ANNUAL, PLANT_TAGS.PHOTOPERIOD],
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 7,
          description: 'kale.environments.indoor.phases.germination.description',
          care: 'kale.environments.indoor.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'kale.environments.indoor.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'kale.environments.indoor.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'kale.environments.indoor.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'kale.environments.indoor.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'kale.environments.indoor.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'kale.environments.indoor.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 14,
          description: 'kale.environments.indoor.phases.seedling.description',
          care: 'kale.environments.indoor.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'kale.environments.indoor.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'kale.environments.indoor.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'kale.environments.indoor.phases.seedling.hydro.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'kale.environments.indoor.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'kale.environments.indoor.phases.seedling.coco.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'kale.environments.indoor.phases.seedling.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 21,
          description: 'kale.environments.indoor.phases.vegetative.description',
          care: 'kale.environments.indoor.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'kale.environments.indoor.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'kale.environments.indoor.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'kale.environments.indoor.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'kale.environments.indoor.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'kale.environments.indoor.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'kale.environments.indoor.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        leaf_development: {
          days: 14,
          description: 'kale.environments.indoor.phases.leaf_development.description',
          care: 'kale.environments.indoor.phases.leaf_development.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'kale.environments.indoor.phases.leaf_development.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'kale.environments.indoor.phases.leaf_development.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'kale.environments.indoor.phases.leaf_development.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'kale.environments.indoor.phases.leaf_development.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'kale.environments.indoor.phases.leaf_development.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'kale.environments.indoor.phases.leaf_development.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 30,
          description: 'kale.environments.indoor.phases.harvest.description',
          care: 'kale.environments.indoor.phases.harvest.care',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'kale.environments.indoor.phases.harvest.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'kale.environments.indoor.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'kale.environments.indoor.phases.harvest.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'kale.environments.indoor.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'kale.environments.indoor.phases.harvest.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'kale.environments.indoor.phases.harvest.coco.fertilizing.description',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          start: '03-15',
          end: '05-15',
          description: 'kale.environments.outdoor.phases.germination.description',
          care: 'kale.environments.outdoor.phases.germination.care',
          editable: false,
        },
        seedling: {
          description: 'kale.environments.outdoor.phases.seedling.description',
          care: 'kale.environments.outdoor.phases.seedling.care',
          editable: false,
        },
        vegetative: {
          description: 'kale.environments.outdoor.phases.vegetative.description',
          care: 'kale.environments.outdoor.phases.vegetative.care',
          editable: false,
        },
        leaf_development: {
          description: 'kale.environments.outdoor.phases.leaf_development.description',
          care: 'kale.environments.outdoor.phases.leaf_development.care',
          editable: false,
        },
        harvest: {
          start: '06-01',
          end: '11-30',
          description: 'kale.environments.outdoor.phases.harvest.description',
          care: 'kale.environments.outdoor.phases.harvest.care',
          editable: true,
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'kale.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-01',
            end: '11-30',
            description: 'kale.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '09-01',
            end: '11-01',
            description: 'kale.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '11-01',
            end: '04-30',
            description: 'kale.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 7,
          description: 'kale.environments.greenhouse.phases.germination.description',
          care: 'kale.environments.greenhouse.phases.germination.care',
          editable: true,
        },
        seedling: {
          days: 14,
          description: 'kale.environments.greenhouse.phases.seedling.description',
          care: 'kale.environments.greenhouse.phases.seedling.care',
          editable: true,
        },
        vegetative: {
          days: 21,
          description: 'kale.environments.greenhouse.phases.vegetative.description',
          care: 'kale.environments.greenhouse.phases.vegetative.care',
          editable: true,
        },
        leaf_development: {
          days: 14,
          description: 'kale.environments.greenhouse.phases.leaf_development.description',
          care: 'kale.environments.greenhouse.phases.leaf_development.care',
          editable: true,
        },
        harvest: {
          days: 30,
          description: 'kale.environments.greenhouse.phases.harvest.description',
          care: 'kale.environments.greenhouse.phases.harvest.care',
          editable: true,
        },
      },
    },
  },
  careTips: {
    watering: 'kale.careTips.watering',
    fertilizing: 'kale.careTips.fertilizing',
    sunlight: 'kale.careTips.sunlight',
    spacing: 'kale.careTips.spacing',
    temperature: 'kale.careTips.temperature',
    soilPH: 'kale.careTips.soilPH',
    harvesting: 'kale.careTips.harvesting',
  },
  commonProblems: createProblemRefs(['aphids', 'downyMildew', 'cabbageWorm'], 'vegetables'),
};

export default kale;
