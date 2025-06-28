/**
 * Roses Plant Data
 * Growing information for Roses
 */

import { PLANT_TAGS } from '../categories.js';
import { createProblemRefs } from '../problems.js';

export const roses = {
  name: 'roses.name',
  category: 'category.flowers',
  tags: [PLANT_TAGS.PERENNIAL, PLANT_TAGS.PHOTOPERIOD],
  emoji: '🌹',
  environments: {
    indoor: {
      phases: {
        establishment: {
          days: 60,
          description: 'roses.phases.establishment.description',
          care: 'roses.phases.establishment.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'roses.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'roses.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 90,
          description: 'roses.phases.vegetative.description',
          care: 'roses.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'roses.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'roses.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'roses.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'roses.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'roses.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 30,
          description: 'roses.phases.flowering.description',
          care: 'roses.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'roses.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'roses.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'roses.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'roses.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'roses.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          days: 120,
          description: 'roses.phases.dormancy.description',
          care: 'roses.phases.dormancy.care',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'roses.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'roses.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.phases.dormancy.coco.fertilizing.description',
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
          description: 'roses.phases.establishment.description',
          care: 'roses.phases.establishment.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'roses.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'roses.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          start: '05-16',
          end: '06-14',
          description: 'roses.phases.vegetative.description',
          care: 'roses.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'roses.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'roses.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'roses.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'roses.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'roses.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          start: '06-15',
          end: '09-30',
          description: 'roses.phases.flowering.description',
          care: 'roses.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'roses.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'roses.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'roses.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'roses.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'roses.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          start: '10-01',
          end: '03-14',
          description: 'roses.phases.dormancy.description',
          care: 'roses.phases.dormancy.care',
          editable: false,
          soil: {
            watering: {
              interval: 7,
              description: 'roses.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'roses.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.phases.dormancy.coco.fertilizing.description',
            },
          },
        },
      },
    },
    greenhouse: {
      phases: {
        establishment: {
          days: 60,
          description: 'roses.phases.establishment.description',
          care: 'roses.phases.establishment.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'roses.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'roses.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 90,
          description: 'roses.phases.vegetative.description',
          care: 'roses.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'roses.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'roses.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'roses.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'roses.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'roses.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 30,
          description: 'roses.phases.flowering.description',
          care: 'roses.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'roses.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'roses.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'roses.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'roses.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'roses.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          days: 120,
          description: 'roses.phases.dormancy.description',
          care: 'roses.phases.dormancy.care',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'roses.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'roses.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.phases.dormancy.coco.fertilizing.description',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'roses.careTips.watering',
    fertilizing: 'roses.careTips.fertilizing',
    sunlight: 'roses.careTips.sunlight',
    spacing: 'roses.careTips.spacing',
    temperature: 'roses.careTips.temperature',
    soilPH: 'roses.careTips.soilPH',
    pruning: 'roses.careTips.pruning',
  },
  commonProblems: createProblemRefs(['powderyMildew', 'aphids', 'blackSpot'], 'flowers'),
};

export default roses; 