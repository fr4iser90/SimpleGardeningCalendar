/**
 * Apple Tree Plant Data
 * Growing information for Apple Trees
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const apple_tree = {
  name: 'apple_tree.name',
  category: 'category.fruit_trees',
  tags: [PLANT_TAGS.PERENNIAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🍎',
  environments: {
    outdoor: {
      phases: {
        establishment: {
          start: '03-01',
          end: '02-28',
          description: 'apple_tree.phases.establishment.description',
          care: 'apple_tree.phases.establishment.care',
          editable: false,
          soil: {
            watering: {
              interval: 7,
              description: 'apple_tree.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 90,
              description: 'apple_tree.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'apple_tree.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 90,
              description: 'apple_tree.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'apple_tree.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 90,
              description: 'apple_tree.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        juvenile: {
          start: '03-01',
          end: '02-28',
          description: 'apple_tree.phases.juvenile.description',
          care: 'apple_tree.phases.juvenile.care',
          editable: false,
          soil: {
            watering: {
              interval: 7,
              description: 'apple_tree.phases.juvenile.soil.watering.description',
            },
            fertilizing: {
              interval: 90,
              description: 'apple_tree.phases.juvenile.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'apple_tree.phases.juvenile.hydro.watering.description',
            },
            fertilizing: {
              interval: 90,
              description: 'apple_tree.phases.juvenile.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'apple_tree.phases.juvenile.coco.watering.description',
            },
            fertilizing: {
              interval: 90,
              description: 'apple_tree.phases.juvenile.coco.fertilizing.description',
            },
          },
        },
        productive: {
          start: '03-01',
          end: '02-28',
          description: 'apple_tree.phases.productive.description',
          care: 'apple_tree.phases.productive.care',
          editable: false,
          soil: {
            watering: {
              interval: 7,
              description: 'apple_tree.phases.productive.soil.watering.description',
            },
            fertilizing: {
              interval: 90,
              description: 'apple_tree.phases.productive.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'apple_tree.phases.productive.hydro.watering.description',
            },
            fertilizing: {
              interval: 90,
              description: 'apple_tree.phases.productive.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'apple_tree.phases.productive.coco.watering.description',
            },
            fertilizing: {
              interval: 90,
              description: 'apple_tree.phases.productive.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          start: '11-01',
          end: '02-28',
          description: 'apple_tree.phases.dormancy.description',
          care: 'apple_tree.phases.dormancy.care',
          editable: false,
          soil: {
            watering: {
              interval: 14,
              description: 'apple_tree.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'apple_tree.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'apple_tree.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'apple_tree.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 14,
              description: 'apple_tree.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'apple_tree.phases.dormancy.coco.fertilizing.description',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-01',
            end: '05-01',
            description: 'apple_tree.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '08-01',
            end: '10-31',
            description: 'apple_tree.seasonalTiming.temperate_north.harvestWindow.description',
          },
          pruningWindow: {
            start: '01-15',
            end: '03-15',
            description: 'apple_tree.seasonalTiming.temperate_north.pruningWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-01',
            end: '04-01',
            description: 'apple_tree.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-01',
            end: '09-30',
            description: 'apple_tree.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
  },
  careTips: {
    watering: 'apple_tree.careTips.watering',
    fertilizing: 'apple_tree.careTips.fertilizing',
    sunlight: 'apple_tree.careTips.sunlight',
    spacing: 'apple_tree.careTips.spacing',
    pruning: 'apple_tree.careTips.pruning',
    pollination: 'apple_tree.careTips.pollination',
    soilPH: 'apple_tree.careTips.soilPH',
  },
  commonProblems: createProblemRefs(['rootRot', 'powderyMildew', 'birds'], 'fruits'),
};

export default apple_tree;
