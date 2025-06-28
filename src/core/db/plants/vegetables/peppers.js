/**
 * Peppers Plant Data
 * Growing information for Peppers
 */

import { PLANT_TAGS } from '../categories.js';

export const peppers = {
  name: 'peppers.name',
  category: 'category.vegetables',
  tags: [PLANT_TAGS.PHOTOPERIOD, PLANT_TAGS.ANNUAL],
  emoji: '🌶️',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 10,
          description: 'peppers.phases.germination.description',
          care: 'peppers.phases.germination.care',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'peppers.phases.germination.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'peppers.phases.germination.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'peppers.phases.germination.hydro.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'peppers.phases.germination.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'peppers.phases.germination.coco.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'peppers.phases.germination.coco.fertilizing.description',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'peppers.phases.seedling.description',
          care: 'peppers.phases.seedling.care',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'peppers.phases.seedling.soil.watering.description',
            },
            fertilizing: {
              interval: 0,
              description: 'peppers.phases.seedling.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'peppers.phases.seedling.hydro.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'peppers.phases.seedling.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'peppers.phases.seedling.coco.watering.description',
            },
            fertilizing: {
              interval: 7,
              description: 'peppers.phases.seedling.coco.fertilizing.description',
            },
          },
        },
        vegetative: {
          days: 35,
          description: 'peppers.phases.vegetative.description',
          care: 'peppers.phases.vegetative.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'peppers.phases.vegetative.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'peppers.phases.vegetative.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'peppers.phases.vegetative.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'peppers.phases.vegetative.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'peppers.phases.vegetative.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'peppers.phases.vegetative.coco.fertilizing.description',
            },
          },
        },
        flowering: {
          days: 21,
          description: 'peppers.phases.flowering.description',
          care: 'peppers.phases.flowering.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'peppers.phases.flowering.soil.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'peppers.phases.flowering.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'peppers.phases.flowering.hydro.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'peppers.phases.flowering.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'peppers.phases.flowering.coco.watering.description',
            },
            fertilizing: {
              interval: 14,
              description: 'peppers.phases.flowering.coco.fertilizing.description',
            },
          },
        },
        fruiting: {
          days: 60,
          description: 'peppers.phases.fruiting.description',
          care: 'peppers.phases.fruiting.care',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'peppers.phases.fruiting.soil.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'peppers.phases.fruiting.soil.fertilizing.description',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'peppers.phases.fruiting.hydro.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'peppers.phases.fruiting.hydro.fertilizing.description',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'peppers.phases.fruiting.coco.watering.description',
            },
            fertilizing: {
              interval: 21,
              description: 'peppers.phases.fruiting.coco.fertilizing.description',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          start: '03-15',
          end: '04-15',
          description: 'peppers.phases.germination.description',
          care: 'peppers.phases.germination.care',
          editable: false,
        },
        seedling: {
          description: 'peppers.phases.seedling.description',
          care: 'peppers.phases.seedling.care',
          editable: false,
        },
        vegetative: {
          description: 'peppers.phases.vegetative.description',
          care: 'peppers.phases.vegetative.care',
          editable: false,
        },
        flowering: {
          description: 'peppers.phases.flowering.description',
          care: 'peppers.phases.flowering.care',
          editable: true,
        },
        fruiting: {
          start: '07-15',
          end: '10-15',
          description: 'peppers.phases.fruiting.description',
          care: 'peppers.phases.fruiting.care',
          editable: true,
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '05-15',
            end: '06-15',
            description: 'peppers.seasonalTiming.temperate_north.plantingWindow.description',
          },
          harvestWindow: {
            start: '08-01',
            end: '10-15',
            description: 'peppers.seasonalTiming.temperate_north.harvestWindow.description',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'peppers.seasonalTiming.mediterranean.plantingWindow.description',
          },
          harvestWindow: {
            start: '06-15',
            end: '11-15',
            description: 'peppers.seasonalTiming.mediterranean.harvestWindow.description',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 10,
          description: 'peppers.phases.germination.description',
          care: 'peppers.phases.germination.care',
          editable: true,
        },
        seedling: {
          days: 21,
          description: 'peppers.phases.seedling.description',
          care: 'peppers.phases.seedling.care',
          editable: true,
        },
        vegetative: {
          days: 35,
          description: 'peppers.phases.vegetative.description',
          care: 'peppers.phases.vegetative.care',
          editable: true,
        },
        flowering: {
          days: 21,
          description: 'peppers.phases.flowering.description',
          care: 'peppers.phases.flowering.care',
          editable: true,
        },
        fruiting: {
          days: 60,
          description: 'peppers.phases.fruiting.description',
          care: 'peppers.phases.fruiting.care',
          editable: true,
        },
      },
    },
  },
  careTips: {
    watering: 'peppers.careTips.watering',
    fertilizing: 'peppers.careTips.fertilizing',
    sunlight: 'peppers.careTips.sunlight',
    spacing: 'peppers.careTips.spacing',
    temperature: 'peppers.careTips.temperature',
    soilPH: 'peppers.careTips.soilPH',
    support: 'peppers.careTips.support',
  },
  commonProblems: {
    blossomEndRot: 'peppers.commonProblems.blossomEndRot',
    sunscald: 'peppers.commonProblems.sunscald',
    pepperMaggot: 'peppers.commonProblems.pepperMaggot',
  },
};

export default peppers;
