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
          description: 'roses.environments.indoor.phases.establishment.description',
          care: 'roses.environments.indoor.phases.establishment.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'roses.environments.indoor.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.environments.indoor.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.environments.indoor.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.environments.indoor.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'roses.environments.indoor.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.environments.indoor.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 90,
          description: 'roses.environments.indoor.phases.vegetative.description',
          care: 'roses.environments.indoor.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'roses.environments.indoor.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'roses.environments.indoor.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.environments.indoor.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'roses.environments.indoor.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'roses.environments.indoor.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'roses.environments.indoor.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 30,
          description: 'roses.environments.indoor.phases.flowering.description',
          care: 'roses.environments.indoor.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'roses.environments.indoor.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'roses.environments.indoor.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.environments.indoor.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'roses.environments.indoor.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'roses.environments.indoor.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'roses.environments.indoor.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          days: 120,
          description: 'roses.environments.indoor.phases.dormancy.description',
          care: 'roses.environments.indoor.phases.dormancy.care',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'roses.environments.indoor.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.environments.indoor.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.environments.indoor.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.environments.indoor.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'roses.environments.indoor.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.environments.indoor.phases.dormancy.coco.fertilizing.description',
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
          description: 'roses.environments.outdoor.phases.establishment.description',
          care: 'roses.environments.outdoor.phases.establishment.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'roses.environments.outdoor.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.environments.outdoor.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.environments.outdoor.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.environments.outdoor.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'roses.environments.outdoor.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.environments.outdoor.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          description: 'roses.environments.outdoor.phases.vegetative.description',
          care: 'roses.environments.outdoor.phases.vegetative.care',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'roses.environments.outdoor.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'roses.environments.outdoor.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.environments.outdoor.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'roses.environments.outdoor.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'roses.environments.outdoor.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'roses.environments.outdoor.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          start: '06-01',
          end: '09-30',
          description: 'roses.environments.outdoor.phases.flowering.description',
          care: 'roses.environments.outdoor.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'roses.environments.outdoor.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'roses.environments.outdoor.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.environments.outdoor.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'roses.environments.outdoor.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'roses.environments.outdoor.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'roses.environments.outdoor.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          start: '10-01',
          end: '03-14',
          description: 'roses.environments.outdoor.phases.dormancy.description',
          care: 'roses.environments.outdoor.phases.dormancy.care',
          editable: false,
          soil: {
            watering: {
              interval: 7,
              description: 'roses.environments.outdoor.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.environments.outdoor.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.environments.outdoor.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.environments.outdoor.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'roses.environments.outdoor.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.environments.outdoor.phases.dormancy.coco.fertilizing.description',
            },
          },
        },
      },
    },
    greenhouse: {
      phases: {
        establishment: {
          days: 60,
          description: 'roses.environments.greenhouse.phases.establishment.description',
          care: 'roses.environments.greenhouse.phases.establishment.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'roses.environments.greenhouse.phases.establishment.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.environments.greenhouse.phases.establishment.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.environments.greenhouse.phases.establishment.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.environments.greenhouse.phases.establishment.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'roses.environments.greenhouse.phases.establishment.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.environments.greenhouse.phases.establishment.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 90,
          description: 'roses.environments.greenhouse.phases.vegetative.description',
          care: 'roses.environments.greenhouse.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'roses.environments.greenhouse.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'roses.environments.greenhouse.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.environments.greenhouse.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'roses.environments.greenhouse.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'roses.environments.greenhouse.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'roses.environments.greenhouse.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 30,
          description: 'roses.environments.greenhouse.phases.flowering.description',
          care: 'roses.environments.greenhouse.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'roses.environments.greenhouse.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'roses.environments.greenhouse.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.environments.greenhouse.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'roses.environments.greenhouse.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'roses.environments.greenhouse.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'roses.environments.greenhouse.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        dormancy: {
          days: 120,
          description: 'roses.environments.greenhouse.phases.dormancy.description',
          care: 'roses.environments.greenhouse.phases.dormancy.care',
          editable: true,
          soil: {
            watering: {
              interval: 7,
              description: 'roses.environments.greenhouse.phases.dormancy.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.environments.greenhouse.phases.dormancy.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'roses.environments.greenhouse.phases.dormancy.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.environments.greenhouse.phases.dormancy.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 7,
              description: 'roses.environments.greenhouse.phases.dormancy.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'roses.environments.greenhouse.phases.dormancy.coco.fertilizing.description',
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