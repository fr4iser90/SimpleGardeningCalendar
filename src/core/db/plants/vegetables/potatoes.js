/**
 * Potatoes Plant Data
 * Growing information for Potatoes
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const potatoes = {
  name: 'potatoes.name',
  category: 'category.vegetables',
  tags: [PLANT_TAGS.ROOT, PLANT_TAGS.ANNUAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🥔',
  environments: {
    indoor: {
      phases: {
        sprouting: {
          days: 14,
          description: 'potatoes.environments.indoor.phases.sprouting.description',
          care: 'potatoes.environments.indoor.phases.sprouting.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'potatoes.environments.indoor.phases.sprouting.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'potatoes.environments.indoor.phases.sprouting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'potatoes.environments.indoor.phases.sprouting.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'potatoes.environments.indoor.phases.sprouting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'potatoes.environments.indoor.phases.sprouting.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'potatoes.environments.indoor.phases.sprouting.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 30,
          description: 'potatoes.environments.indoor.phases.vegetative.description',
          care: 'potatoes.environments.indoor.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'potatoes.environments.indoor.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'potatoes.environments.indoor.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'potatoes.environments.indoor.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'potatoes.environments.indoor.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'potatoes.environments.indoor.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'potatoes.environments.indoor.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        tuberization: {
          days: 40,
          description: 'potatoes.environments.indoor.phases.tuberization.description',
          care: 'potatoes.environments.indoor.phases.tuberization.care',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'potatoes.environments.indoor.phases.tuberization.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'potatoes.environments.indoor.phases.tuberization.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'potatoes.environments.indoor.phases.tuberization.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'potatoes.environments.indoor.phases.tuberization.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'potatoes.environments.indoor.phases.tuberization.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'potatoes.environments.indoor.phases.tuberization.coco.fertilizing.description',
            },
          },
        },
        bulking: {
          days: 45,
          description: 'potatoes.environments.indoor.phases.bulking.description',
          care: 'potatoes.environments.indoor.phases.bulking.care',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'potatoes.environments.indoor.phases.bulking.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'potatoes.environments.indoor.phases.bulking.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'potatoes.environments.indoor.phases.bulking.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'potatoes.environments.indoor.phases.bulking.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'potatoes.environments.indoor.phases.bulking.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'potatoes.environments.indoor.phases.bulking.coco.fertilizing.description',
            },
          },
        },
        maturation: {
          days: 20,
          description: 'potatoes.environments.indoor.phases.maturation.description',
          care: 'potatoes.environments.indoor.phases.maturation.care',
          editable: true,
          soil: {
            watering: {
              interval: 0,
              description: 'potatoes.environments.indoor.phases.maturation.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'potatoes.environments.indoor.phases.maturation.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'potatoes.environments.indoor.phases.maturation.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'potatoes.environments.indoor.phases.maturation.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 0,
              description: 'potatoes.environments.indoor.phases.maturation.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'potatoes.environments.indoor.phases.maturation.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 30,
          description: 'potatoes.environments.indoor.phases.harvest.description',
          care: 'potatoes.environments.indoor.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 7, 
              description: 'potatoes.environments.indoor.phases.harvest.soil.watering.description' 
            },
            fertilizing: { 
              interval: 0, 
              description: 'potatoes.environments.indoor.phases.harvest.soil.fertilizing.description' 
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'potatoes.environments.indoor.phases.harvest.hydro.watering.description' 
            },
            fertilizing: { 
              interval: 0, 
              description: 'potatoes.environments.indoor.phases.harvest.hydro.fertilizing.description' 
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'potatoes.environments.indoor.phases.harvest.coco.watering.description' 
            },
            fertilizing: { 
              interval: 0, 
              description: 'potatoes.environments.indoor.phases.harvest.coco.fertilizing.description' 
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        sprouting: {
          start: '03-15',
          end: '05-15',
          description: 'potatoes.environments.outdoor.phases.sprouting.description',
          care: 'potatoes.environments.outdoor.phases.sprouting.care',
          editable: false,
        },
        vegetative: {
          description: 'potatoes.environments.outdoor.phases.vegetative.description',
          care: 'potatoes.environments.outdoor.phases.vegetative.care',
          editable: false,
        },
        tuberization: {
          description: 'potatoes.environments.outdoor.phases.tuberization.description',
          care: 'potatoes.environments.outdoor.phases.tuberization.care',
          editable: false,
        },
        bulking: {
          description: 'potatoes.environments.outdoor.phases.bulking.description',
          care: 'potatoes.environments.outdoor.phases.bulking.care',
          editable: false,
        },
        maturation: {
          description: 'potatoes.environments.outdoor.phases.maturation.description',
          care: 'potatoes.environments.outdoor.phases.maturation.care',
          editable: false,
        },
        harvest: {
          start: '07-01',
          end: '09-30',
          description: 'potatoes.environments.outdoor.phases.harvest.description',
          care: 'potatoes.environments.outdoor.phases.harvest.care',
          editable: true,
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'potatoes.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '07-01',
            end: '09-30',
            description: 'potatoes.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-01',
            end: '04-15',
            description: 'potatoes.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '05-01',
            end: '08-31',
            description: 'potatoes.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        sprouting: {
          days: 14,
          description: 'potatoes.environments.greenhouse.phases.sprouting.description',
          care: 'potatoes.environments.greenhouse.phases.sprouting.care',
          editable: true,
        },
        vegetative: {
          days: 30,
          description: 'potatoes.environments.greenhouse.phases.vegetative.description',
          care: 'potatoes.environments.greenhouse.phases.vegetative.care',
          editable: true,
        },
        tuberization: {
          days: 40,
          description: 'potatoes.environments.greenhouse.phases.tuberization.description',
          care: 'potatoes.environments.greenhouse.phases.tuberization.care',
          editable: true,
        },
        bulking: {
          days: 45,
          description: 'potatoes.environments.greenhouse.phases.bulking.description',
          care: 'potatoes.environments.greenhouse.phases.bulking.care',
          editable: true,
        },
        maturation: {
          days: 20,
          description: 'potatoes.environments.greenhouse.phases.maturation.description',
          care: 'potatoes.environments.greenhouse.phases.maturation.care',
          editable: true,
        },
        harvest: {
          days: 30,
          description: 'potatoes.environments.greenhouse.phases.harvest.description',
          care: 'potatoes.environments.greenhouse.phases.harvest.care',
          editable: true,
        },
      },
    },
  },
  careTips: {
    watering: 'potatoes.careTips.watering',
    fertilizing: 'potatoes.careTips.fertilizing',
    sunlight: 'potatoes.careTips.sunlight',
    spacing: 'potatoes.careTips.spacing',
    soil: 'potatoes.careTips.soil',
    hilling: 'potatoes.careTips.hilling',
  },
  commonProblems: createProblemRefs(['blight', 'scab', 'wireworm'], 'vegetables'),
};

export default potatoes;
