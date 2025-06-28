/**
 * Lettuce Plant Data
 * Growing information for Lettuce
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const lettuce = {
  name: 'lettuce.name',
  category: 'category.vegetables',
  emoji: '🥬',
  tags: [PLANT_TAGS.LEAFY, PLANT_TAGS.ANNUAL, PLANT_TAGS.PHOTOPERIOD],
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 5,
          description: 'lettuce.environments.indoor.phases.germination.description',
          care: 'lettuce.environments.indoor.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'lettuce.environments.indoor.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lettuce.environments.indoor.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lettuce.environments.indoor.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lettuce.environments.indoor.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'lettuce.environments.indoor.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lettuce.environments.indoor.phases.germination.coco.fertilizing.description',
            },
          },
        },
        leafing: {
          days: 20,
          description: 'lettuce.environments.indoor.phases.leafing.description',
          care: 'lettuce.environments.indoor.phases.leafing.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'lettuce.environments.indoor.phases.leafing.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lettuce.environments.indoor.phases.leafing.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lettuce.environments.indoor.phases.leafing.hydro.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'lettuce.environments.indoor.phases.leafing.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'lettuce.environments.indoor.phases.leafing.coco.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'lettuce.environments.indoor.phases.leafing.coco.fertilizing.description',
            },
          },
        },
        heading: {
          days: 25,
          description: 'lettuce.environments.indoor.phases.heading.description',
          care: 'lettuce.environments.indoor.phases.heading.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'lettuce.environments.indoor.phases.heading.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'lettuce.environments.indoor.phases.heading.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lettuce.environments.indoor.phases.heading.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'lettuce.environments.indoor.phases.heading.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'lettuce.environments.indoor.phases.heading.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'lettuce.environments.indoor.phases.heading.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 10,
          description: 'lettuce.environments.indoor.phases.harvest.description',
          care: 'lettuce.environments.indoor.phases.harvest.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'lettuce.environments.indoor.phases.harvest.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lettuce.environments.indoor.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lettuce.environments.indoor.phases.harvest.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lettuce.environments.indoor.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'lettuce.environments.indoor.phases.harvest.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lettuce.environments.indoor.phases.harvest.coco.fertilizing.description',
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
          description: 'lettuce.environments.outdoor.phases.germination.description',
          care: 'lettuce.environments.outdoor.phases.germination.care',
          editable: false,
        },
        leafing: {
          description: 'lettuce.environments.outdoor.phases.leafing.description',
          care: 'lettuce.environments.outdoor.phases.leafing.care',
          editable: false,
        },
        heading: {
          description: 'lettuce.environments.outdoor.phases.heading.description',
          care: 'lettuce.environments.outdoor.phases.heading.care',
          editable: false,
        },
        harvest: {
          start: '05-01',
          end: '07-15',
          description: 'lettuce.environments.outdoor.phases.harvest.description',
          care: 'lettuce.environments.outdoor.phases.harvest.care',
          editable: true,
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'lettuce.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '05-01',
            end: '07-15',
            description: 'lettuce.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '09-01',
            end: '11-01',
            description: 'lettuce.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '11-01',
            end: '04-30',
            description: 'lettuce.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 5,
          description: 'lettuce.environments.greenhouse.phases.germination.description',
          care: 'lettuce.environments.greenhouse.phases.germination.care',
          editable: true,
        },
        leafing: {
          days: 20,
          description: 'lettuce.environments.greenhouse.phases.leafing.description',
          care: 'lettuce.environments.greenhouse.phases.leafing.care',
          editable: true,
        },
        heading: {
          days: 25,
          description: 'lettuce.environments.greenhouse.phases.heading.description',
          care: 'lettuce.environments.greenhouse.phases.heading.care',
          editable: true,
        },
        harvest: {
          days: 10,
          description: 'lettuce.environments.greenhouse.phases.harvest.description',
          care: 'lettuce.environments.greenhouse.phases.harvest.care',
          editable: true,
        },
      },
    },
  },
  careTips: {
    watering: 'lettuce.careTips.watering',
    fertilizing: 'lettuce.careTips.fertilizing',
    sunlight: 'lettuce.careTips.sunlight',
    spacing: 'lettuce.careTips.spacing',
    temperature: 'lettuce.careTips.temperature',
    soilPH: 'lettuce.careTips.soilPH',
  },
  commonProblems: createProblemRefs(['bolting', 'aphids', 'downyMildew'], 'vegetables'),
};

export default lettuce;
