/**
 * Potatoes Plant Data
 * Growing information for Potatoes
 */

import { PLANT_TAGS } from '../categories.js';

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
          description: 'potatoes.phases.sprouting.description',
          care: 'potatoes.phases.sprouting.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'potatoes.phases.sprouting.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'potatoes.phases.sprouting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'potatoes.phases.sprouting.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'potatoes.phases.sprouting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'potatoes.phases.sprouting.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'potatoes.phases.sprouting.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 30,
          description: 'potatoes.phases.vegetative.description',
          care: 'potatoes.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'potatoes.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'potatoes.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'potatoes.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'potatoes.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'potatoes.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'potatoes.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        tuberization: {
          days: 40,
          description: 'potatoes.phases.tuberization.description',
          care: 'potatoes.phases.tuberization.care',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'potatoes.phases.tuberization.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'potatoes.phases.tuberization.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'potatoes.phases.tuberization.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'potatoes.phases.tuberization.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'potatoes.phases.tuberization.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'potatoes.phases.tuberization.coco.fertilizing.description',
            },
          },
        },
        bulking: {
          days: 45,
          description: 'potatoes.phases.bulking.description',
          care: 'potatoes.phases.bulking.care',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'potatoes.phases.bulking.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'potatoes.phases.bulking.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'potatoes.phases.bulking.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'potatoes.phases.bulking.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'potatoes.phases.bulking.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'potatoes.phases.bulking.coco.fertilizing.description',
            },
          },
        },
        maturation: {
          days: 20,
          description: 'potatoes.phases.maturation.description',
          care: 'potatoes.phases.maturation.care',
          editable: true,
          soil: {
            watering: {
              interval: 0,
              description: 'potatoes.phases.maturation.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'potatoes.phases.maturation.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'potatoes.phases.maturation.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'potatoes.phases.maturation.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 0,
              description: 'potatoes.phases.maturation.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'potatoes.phases.maturation.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 30,
          description: 'potatoes.phases.harvest.description',
          care: 'potatoes.phases.harvest.care',
          editable: true,
          soil: {
            watering: { 
              interval: 7, 
              description: 'potatoes.phases.harvest.soil.watering.description' 
            },
            fertilizing: { 
              interval: 0, 
              description: 'potatoes.phases.harvest.soil.fertilizing.description' 
            },
          },
          hydro: {
            watering: { 
              interval: 0, 
              description: 'potatoes.phases.harvest.hydro.watering.description' 
            },
            fertilizing: { 
              interval: 0, 
              description: 'potatoes.phases.harvest.hydro.fertilizing.description' 
            },
          },
          coco: {
            watering: { 
              interval: 1, 
              description: 'potatoes.phases.harvest.coco.watering.description' 
            },
            fertilizing: { 
              interval: 0, 
              description: 'potatoes.phases.harvest.coco.fertilizing.description' 
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
          description: 'potatoes.phases.sprouting.description',
          care: 'potatoes.phases.sprouting.care',
          editable: false,
        },
        vegetative: {
          description: 'potatoes.phases.vegetative.description',
          care: 'potatoes.phases.vegetative.care',
          editable: false,
        },
        tuberization: {
          description: 'potatoes.phases.tuberization.description',
          care: 'potatoes.phases.tuberization.care',
          editable: false,
        },
        bulking: {
          description: 'potatoes.phases.bulking.description',
          care: 'potatoes.phases.bulking.care',
          editable: false,
        },
        maturation: {
          description: 'potatoes.phases.maturation.description',
          care: 'potatoes.phases.maturation.care',
          editable: false,
        },
        harvest: {
          start: '07-01',
          end: '09-30',
          description: 'potatoes.phases.harvest.description',
          care: 'potatoes.phases.harvest.care',
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
          description: 'potatoes.phases.sprouting.description',
          care: 'potatoes.phases.sprouting.care',
          editable: true,
        },
        vegetative: {
          days: 30,
          description: 'potatoes.phases.vegetative.description',
          care: 'potatoes.phases.vegetative.care',
          editable: true,
        },
        tuberization: {
          days: 40,
          description: 'potatoes.phases.tuberization.description',
          care: 'potatoes.phases.tuberization.care',
          editable: true,
        },
        bulking: {
          days: 45,
          description: 'potatoes.phases.bulking.description',
          care: 'potatoes.phases.bulking.care',
          editable: true,
        },
        maturation: {
          days: 20,
          description: 'potatoes.phases.maturation.description',
          care: 'potatoes.phases.maturation.care',
          editable: true,
        },
        harvest: {
          days: 30,
          description: 'potatoes.phases.harvest.description',
          care: 'potatoes.phases.harvest.care',
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
  commonProblems: {
    scab: 'potatoes.commonProblems.scab',
    hollowHeart: 'potatoes.commonProblems.hollowHeart',
    greenTubers: 'potatoes.commonProblems.greenTubers',
    coloradoPotatoBeetle: 'potatoes.commonProblems.coloradoPotatoBeetle',
  },
};

export default potatoes;
