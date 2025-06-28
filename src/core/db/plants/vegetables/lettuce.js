/**
 * Lettuce Plant Data
 * Growing information for Lettuce
 */

import { PLANT_TAGS } from '../categories.js';

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
          description: 'lettuce.phases.germination.description',
          care: 'lettuce.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'lettuce.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lettuce.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lettuce.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lettuce.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'lettuce.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lettuce.phases.germination.coco.fertilizing.description',
            },
          },
        },
        leafing: {
          days: 20,
          description: 'lettuce.phases.leafing.description',
          care: 'lettuce.phases.leafing.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'lettuce.phases.leafing.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lettuce.phases.leafing.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lettuce.phases.leafing.hydro.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'lettuce.phases.leafing.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'lettuce.phases.leafing.coco.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'lettuce.phases.leafing.coco.fertilizing.description',
            },
          },
        },
        heading: {
          days: 25,
          description: 'lettuce.phases.heading.description',
          care: 'lettuce.phases.heading.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'lettuce.phases.heading.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'lettuce.phases.heading.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lettuce.phases.heading.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'lettuce.phases.heading.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'lettuce.phases.heading.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'lettuce.phases.heading.coco.fertilizing.description',
            },
          },
        },
        harvest: {
          days: 10,
          description: 'lettuce.phases.harvest.description',
          care: 'lettuce.phases.harvest.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'lettuce.phases.harvest.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lettuce.phases.harvest.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lettuce.phases.harvest.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lettuce.phases.harvest.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'lettuce.phases.harvest.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lettuce.phases.harvest.coco.fertilizing.description',
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
          description: 'lettuce.phases.germination.description',
          care: 'lettuce.phases.germination.care',
          editable: false,
        },
        leafing: {
          description: 'lettuce.phases.leafing.description',
          care: 'lettuce.phases.leafing.care',
          editable: false,
        },
        heading: {
          description: 'lettuce.phases.heading.description',
          care: 'lettuce.phases.heading.care',
          editable: false,
        },
        harvest: {
          start: '05-01',
          end: '07-15',
          description: 'lettuce.phases.harvest.description',
          care: 'lettuce.phases.harvest.care',
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
          description: 'lettuce.phases.germination.description',
          care: 'lettuce.phases.germination.care',
          editable: true,
        },
        leafing: {
          days: 20,
          description: 'lettuce.phases.leafing.description',
          care: 'lettuce.phases.leafing.care',
          editable: true,
        },
        heading: {
          days: 25,
          description: 'lettuce.phases.heading.description',
          care: 'lettuce.phases.heading.care',
          editable: true,
        },
        harvest: {
          days: 10,
          description: 'lettuce.phases.harvest.description',
          care: 'lettuce.phases.harvest.care',
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
  commonProblems: {
    bolting: 'lettuce.commonProblems.bolting',
    tipBurn: 'lettuce.commonProblems.tipBurn',
    bitterLeaves: 'lettuce.commonProblems.bitterLeaves',
    aphids: 'lettuce.commonProblems.aphids',
  },
};

export default lettuce;
