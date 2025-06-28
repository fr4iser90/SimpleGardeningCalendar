/**
 * Cherry Tree Plant Data
 * Growing information for Cherry Trees
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const cherry_tree = {
  name: 'cherry_tree.name',
  category: 'category.fruit_trees',
  tags: [PLANT_TAGS.PERENNIAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🍒',
  environments: {
    outdoor: {
      phases: {
        establishment: {
          start: '03-01',
          end: '02-28',
          description: 'cherry_tree.environments.outdoor.phases.establishment.description',
          care: 'cherry_tree.environments.outdoor.phases.establishment.care',
          editable: false,
          soil: {
            watering: {
              interval: 7,
              description: 'cherry_tree.environments.outdoor.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 90,
              description: 'cherry_tree.environments.outdoor.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cherry_tree.environments.outdoor.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 90,
              description: 'cherry_tree.environments.outdoor.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'cherry_tree.environments.outdoor.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 90,
              description: 'cherry_tree.environments.outdoor.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        juvenile: {
          start: '03-01',
          end: '02-28',
          description: 'cherry_tree.environments.outdoor.phases.juvenile.description',
          care: 'cherry_tree.environments.outdoor.phases.juvenile.care',
          editable: false,
          soil: {
            watering: {
              interval: 7,
              description: 'cherry_tree.environments.outdoor.phases.juvenile.soil.watering.description',
            },
            fertilizing: {
              interval: 90,
              description: 'cherry_tree.environments.outdoor.phases.juvenile.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cherry_tree.environments.outdoor.phases.juvenile.hydro.watering.description',
            },
            fertilizing: {
              interval: 90,
              description: 'cherry_tree.environments.outdoor.phases.juvenile.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'cherry_tree.environments.outdoor.phases.juvenile.coco.watering.description',
            },
            fertilizing: {
              interval: 90,
              description: 'cherry_tree.environments.outdoor.phases.juvenile.coco.fertilizing.description',
            },
          },
        },
        productive: {
          start: '03-01',
          end: '02-28',
          description: 'cherry_tree.environments.outdoor.phases.productive.description',
          care: 'cherry_tree.environments.outdoor.phases.productive.care',
          editable: false,
          soil: {
            watering: {
              interval: 7,
              description: 'cherry_tree.environments.outdoor.phases.productive.soil.watering.description',
            },
            fertilizing: {
              interval: 90,
              description: 'cherry_tree.environments.outdoor.phases.productive.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cherry_tree.environments.outdoor.phases.productive.hydro.watering.description',
            },
            fertilizing: {
              interval: 90,
              description: 'cherry_tree.environments.outdoor.phases.productive.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'cherry_tree.environments.outdoor.phases.productive.coco.watering.description',
            },
            fertilizing: {
              interval: 90,
              description: 'cherry_tree.environments.outdoor.phases.productive.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          start: '11-01',
          end: '02-28',
          description: 'cherry_tree.environments.outdoor.phases.dormancy.description',
          care: 'cherry_tree.environments.outdoor.phases.dormancy.care',
          editable: false,
          soil: {
            watering: {
              interval: 14,
              description: 'cherry_tree.environments.outdoor.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cherry_tree.environments.outdoor.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'cherry_tree.environments.outdoor.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cherry_tree.environments.outdoor.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 14,
              description: 'cherry_tree.environments.outdoor.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'cherry_tree.environments.outdoor.phases.dormancy.coco.fertilizing.description',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-01',
            end: '05-01',
            description: 'cherry_tree.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-01',
            end: '07-31',
            description: 'cherry_tree.seasonalTiming.temperate_north.harvestWindow.description',
          },
          pruningWindow: {
            start: '01-15',
            end: '03-15',
            description: 'cherry_tree.seasonalTiming.temperate_north.pruningWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-01',
            end: '04-01',
            description: 'cherry_tree.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '05-01',
            end: '06-30',
            description: 'cherry_tree.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
  },
  careTips: {
    watering: 'cherry_tree.careTips.watering',
    fertilizing: 'cherry_tree.careTips.fertilizing',
    sunlight: 'cherry_tree.careTips.sunlight',
    spacing: 'cherry_tree.careTips.spacing',
    pruning: 'cherry_tree.careTips.pruning',
    pollination: 'cherry_tree.careTips.pollination',
    birdProtection: 'cherry_tree.careTips.birdProtection',
  },
  commonProblems: createProblemRefs(['rootRot', 'powderyMildew', 'birds'], 'fruits'),
};

export default cherry_tree;
