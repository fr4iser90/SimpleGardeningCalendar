/**
 * Lavender Plant Data
 * Growing information for Lavender
 */

import { PLANT_TAGS } from '../categories.js';

export const lavender = {
  name: 'lavender.name',
  category: 'category.flowers',
  tags: [PLANT_TAGS.PERENNIAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🪻',
  environments: {
    indoor: {
      phases: {
        establishment: {
          days: 60,
          description: 'lavender.phases.establishment.description',
          care: 'lavender.phases.establishment.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'lavender.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'lavender.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 90,
          description: 'lavender.phases.vegetative.description',
          care: 'lavender.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 5,
              description: 'lavender.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'lavender.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'lavender.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 2,
              description: 'lavender.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'lavender.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 30,
          description: 'lavender.phases.flowering.description',
          care: 'lavender.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'lavender.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 2,
              description: 'lavender.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          days: 120,
          description: 'lavender.phases.dormancy.description',
          care: 'lavender.phases.dormancy.care',
          editable: true,
          soil: {
            watering: {
              interval: 10,
              description: 'lavender.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 10,
              description: 'lavender.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.dormancy.coco.fertilizing.description',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        establishment: {
          start: '03-15',
          end: '05-15',
          description: 'lavender.phases.establishment.description',
          care: 'lavender.phases.establishment.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'lavender.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'lavender.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          description: 'lavender.phases.vegetative.description',
          care: 'lavender.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 5,
              description: 'lavender.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'lavender.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'lavender.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 2,
              description: 'lavender.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'lavender.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          start: '06-15',
          end: '08-01',
          description: 'lavender.phases.flowering.description',
          care: 'lavender.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'lavender.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 2,
              description: 'lavender.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          start: '10-01',
          end: '03-14',
          description: 'lavender.phases.dormancy.description',
          care: 'lavender.phases.dormancy.care',
          editable: false,
          soil: {
            watering: {
              interval: 10,
              description: 'lavender.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 10,
              description: 'lavender.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.dormancy.coco.fertilizing.description',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-01',
            description: 'lavender.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-15',
            end: '09-15',
            description: 'lavender.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-15',
            end: '05-01',
            description: 'lavender.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '05-15',
            end: '09-30',
            description: 'lavender.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        establishment: {
          days: 60,
          description: 'lavender.phases.establishment.description',
          care: 'lavender.phases.establishment.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'lavender.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'lavender.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 90,
          description: 'lavender.phases.vegetative.description',
          care: 'lavender.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 5,
              description: 'lavender.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'lavender.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'lavender.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 2,
              description: 'lavender.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 30,
              description: 'lavender.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 30,
          description: 'lavender.phases.flowering.description',
          care: 'lavender.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'lavender.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 2,
              description: 'lavender.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          days: 120,
          description: 'lavender.phases.dormancy.description',
          care: 'lavender.phases.dormancy.care',
          editable: true,
          soil: {
            watering: {
              interval: 10,
              description: 'lavender.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'lavender.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 10,
              description: 'lavender.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'lavender.phases.dormancy.coco.fertilizing.description',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'lavender.careTips.watering',
    fertilizing: 'lavender.careTips.fertilizing',
    sunlight: 'lavender.careTips.sunlight',
    spacing: 'lavender.careTips.spacing',
    temperature: 'lavender.careTips.temperature',
    soilPH: 'lavender.careTips.soilPH',
    pruning: 'lavender.careTips.pruning',
  },
  commonProblems: {
    'Root Rot': 'lavender.commonProblems.rootRot',
    'Powdery Mildew': 'lavender.commonProblems.powderyMildew',
    'Leggy Growth': 'lavender.commonProblems.leggyGrowth',
  },
};

export default lavender; 