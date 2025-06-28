/**
 * Carrots Plant Data
 * Growing information for Carrots
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const carrots = {
  name: 'carrots.name',
  category: 'category.vegetables',
  tags: [PLANT_TAGS.ROOT, PLANT_TAGS.BIENNIAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🥕',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 10,
          description: 'carrots.environments.indoor.phases.germination.description',
          care: 'carrots.environments.indoor.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'carrots.environments.indoor.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'carrots.environments.indoor.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'carrots.environments.indoor.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'carrots.environments.indoor.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'carrots.environments.indoor.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'carrots.environments.indoor.phases.germination.coco.fertilizing.description',
            },
          },
        },
        leafing: {
          days: 20,
          description: 'carrots.environments.indoor.phases.leafing.description',
          care: 'carrots.environments.indoor.phases.leafing.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'carrots.environments.indoor.phases.leafing.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'carrots.environments.indoor.phases.leafing.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'carrots.environments.indoor.phases.leafing.hydro.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'carrots.environments.indoor.phases.leafing.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'carrots.environments.indoor.phases.leafing.coco.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'carrots.environments.indoor.phases.leafing.coco.fertilizing.description',
            },
          },
        },
        rooting: {
          days: 30,
          description: 'carrots.environments.indoor.phases.rooting.description',
          care: 'carrots.environments.indoor.phases.rooting.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'carrots.environments.indoor.phases.rooting.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'carrots.environments.indoor.phases.rooting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'carrots.environments.indoor.phases.rooting.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'carrots.environments.indoor.phases.rooting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'carrots.environments.indoor.phases.rooting.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'carrots.environments.indoor.phases.rooting.coco.fertilizing.description',
            },
          },
        },
        maturing: {
          days: 25,
          description: 'carrots.environments.indoor.phases.maturing.description',
          care: 'carrots.environments.indoor.phases.maturing.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'carrots.environments.indoor.phases.maturing.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'carrots.environments.indoor.phases.maturing.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'carrots.environments.indoor.phases.maturing.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'carrots.environments.indoor.phases.maturing.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'carrots.environments.indoor.phases.maturing.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'carrots.environments.indoor.phases.maturing.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 30,
          description: 'carrots.environments.indoor.phases.harvest.description',
          care: 'carrots.environments.indoor.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 3, 
              description: 'carrots.environments.indoor.phases.harvest.soil.watering.description' 
            },
            fertilizing: { 
              interval: 0, 
              description: 'carrots.environments.indoor.phases.harvest.soil.fertilizing.description' 
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'carrots.environments.indoor.phases.harvest.hydro.watering.description' 
            },
            fertilizing: { 
              interval: 0, 
              description: 'carrots.environments.indoor.phases.harvest.hydro.fertilizing.description' 
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'carrots.environments.indoor.phases.harvest.coco.watering.description' 
            },
            fertilizing: { 
              interval: 0, 
              description: 'carrots.environments.indoor.phases.harvest.coco.fertilizing.description' 
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          start: '04-01',
          end: '06-15',
          description: 'carrots.environments.outdoor.phases.germination.description',
          care: 'carrots.environments.outdoor.phases.germination.care',
          editable: false,
        },
        leafing: {
          description: 'carrots.environments.outdoor.phases.leafing.description',
          care: 'carrots.environments.outdoor.phases.leafing.care',
          editable: false,
        },
        rooting: {
          description: 'carrots.environments.outdoor.phases.rooting.description',
          care: 'carrots.environments.outdoor.phases.rooting.care',
          editable: false,
        },
        maturing: {
          description: 'carrots.environments.outdoor.phases.maturing.description',
          care: 'carrots.environments.outdoor.phases.maturing.care',
          editable: false,
        },
        harvest: {
          start: '07-01',
          end: '10-15',
          description: 'carrots.environments.outdoor.phases.harvest.description',
          care: 'carrots.environments.outdoor.phases.harvest.care',
          editable: true,
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-15',
            description: 'carrots.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '07-01',
            end: '10-15',
            description: 'carrots.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-15',
            end: '05-01',
            description: 'carrots.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '05-15',
            end: '11-01',
            description: 'carrots.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 10,
          description: 'carrots.environments.greenhouse.phases.germination.description',
          care: 'carrots.environments.greenhouse.phases.germination.care',
          editable: true,
        },
        leafing: {
          days: 20,
          description: 'carrots.environments.greenhouse.phases.leafing.description',
          care: 'carrots.environments.greenhouse.phases.leafing.care',
          editable: true,
        },
        rooting: {
          days: 30,
          description: 'carrots.environments.greenhouse.phases.rooting.description',
          care: 'carrots.environments.greenhouse.phases.rooting.care',
          editable: true,
        },
        maturing: {
          days: 25,
          description: 'carrots.environments.greenhouse.phases.maturing.description',
          care: 'carrots.environments.greenhouse.phases.maturing.care',
          editable: true,
        },
        harvest: {
          days: 30,
          description: 'carrots.environments.greenhouse.phases.harvest.description',
          care: 'carrots.environments.greenhouse.phases.harvest.care',
          editable: true,
        },
      },
    },
  },
  careTips: {
    watering: 'carrots.careTips.watering',
    fertilizing: 'carrots.careTips.fertilizing',
    sunlight: 'carrots.careTips.sunlight',
    spacing: 'carrots.careTips.spacing',
    soil: 'carrots.careTips.soil',
    soilPH: 'carrots.careTips.soilPH',
  },
  commonProblems: createProblemRefs(['forking', 'bitterTaste', 'shortRoots', 'carrotFly'], 'vegetables'),
};

export default carrots;
