/**
 * Spinach Plant Data
 * Growing information for Spinach
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const spinach = {
  name: 'spinach.name',
  category: 'category.vegetables',
  emoji: '🥬',
  tags: [PLANT_TAGS.LEAFY, PLANT_TAGS.ANNUAL, PLANT_TAGS.PHOTOPERIOD],
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 7,
          description: 'spinach.environments.indoor.phases.germination.description',
          care: 'spinach.environments.indoor.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'spinach.environments.indoor.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'spinach.environments.indoor.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'spinach.environments.indoor.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'spinach.environments.indoor.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'spinach.environments.indoor.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'spinach.environments.indoor.phases.germination.coco.fertilizing.description',
            },
          },
        },
        leafing: {
          days: 21,
          description: 'spinach.environments.indoor.phases.leafing.description',
          care: 'spinach.environments.indoor.phases.leafing.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'spinach.environments.indoor.phases.leafing.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'spinach.environments.indoor.phases.leafing.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'spinach.environments.indoor.phases.leafing.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'spinach.environments.indoor.phases.leafing.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'spinach.environments.indoor.phases.leafing.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'spinach.environments.indoor.phases.leafing.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 14,
          description: 'spinach.environments.indoor.phases.harvest.description',
          care: 'spinach.environments.indoor.phases.harvest.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'spinach.environments.indoor.phases.harvest.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'spinach.environments.indoor.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'spinach.environments.indoor.phases.harvest.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'spinach.environments.indoor.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'spinach.environments.indoor.phases.harvest.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'spinach.environments.indoor.phases.harvest.coco.fertilizing.description',
            },
          },
        },
        bolting: {
          days: 7,
          description: 'spinach.environments.indoor.phases.bolting.description',
          care: 'spinach.environments.indoor.phases.bolting.care',
          editable: true,
          soil: {
            watering: {
              interval: 0,
              description: 'spinach.environments.indoor.phases.bolting.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'spinach.environments.indoor.phases.bolting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'spinach.environments.indoor.phases.bolting.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'spinach.environments.indoor.phases.bolting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 0,
              description: 'spinach.environments.indoor.phases.bolting.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'spinach.environments.indoor.phases.bolting.coco.fertilizing.description',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          start: '03-15',
          end: '05-01',
          description: 'spinach.environments.outdoor.phases.germination.description',
          care: 'spinach.environments.outdoor.phases.germination.care',
          editable: false,
        },
        leafing: {
          description: 'spinach.environments.outdoor.phases.leafing.description',
          care: 'spinach.environments.outdoor.phases.leafing.care',
          editable: false,
        },
        harvest: {
          start: '04-15',
          end: '06-30',
          description: 'spinach.environments.outdoor.phases.harvest.description',
          care: 'spinach.environments.outdoor.phases.harvest.care',
          editable: true,
        },
        bolting: {
          description: 'spinach.environments.outdoor.phases.bolting.description',
          care: 'spinach.environments.outdoor.phases.bolting.care',
          editable: false,
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-15',
            end: '05-01',
            description: 'spinach.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '04-15',
            end: '06-30',
            description: 'spinach.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '09-01',
            end: '11-01',
            description: 'spinach.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '10-15',
            end: '04-30',
            description: 'spinach.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 7,
          description: 'spinach.environments.greenhouse.phases.germination.description',
          care: 'spinach.environments.greenhouse.phases.germination.care',
          editable: true,
        },
        leafing: {
          days: 21,
          description: 'spinach.environments.greenhouse.phases.leafing.description',
          care: 'spinach.environments.greenhouse.phases.leafing.care',
          editable: true,
        },
        harvest: {
          days: 14,
          description: 'spinach.environments.greenhouse.phases.harvest.description',
          care: 'spinach.environments.greenhouse.phases.harvest.care',
          editable: true,
        },
        bolting: {
          days: 7,
          description: 'spinach.environments.greenhouse.phases.bolting.description',
          care: 'spinach.environments.greenhouse.phases.bolting.care',
          editable: true,
        },
      },
    },
  },
  careTips: {
    watering: 'spinach.careTips.watering',
    fertilizing: 'spinach.careTips.fertilizing',
    sunlight: 'spinach.careTips.sunlight',
    spacing: 'spinach.careTips.spacing',
    temperature: 'spinach.careTips.temperature',
    soilPH: 'spinach.careTips.soilPH',
    succession: 'spinach.careTips.succession',
  },
  commonProblems: createProblemRefs(['downyMildew', 'bolting', 'leafMiner'], 'vegetables'),
};

export default spinach;
