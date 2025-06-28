/**
 * Lavender Plant Data
 * Growing information for Lavender
 */

import { PLANT_TAGS } from '../categories.js';

export const lavender = {
  name: 'Lavender',
  category: 'category.flowers',
  tags: [PLANT_TAGS.PERENNIAL],
  emoji: '🪻',
  environments: {
    indoor: {
      phases: {
        establishment: {
          days: 60,
          description: 'Root establishment',
          care: 'Remove flowers first year, focus on root development',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Keep soil consistently moist during establishment',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during establishment, remove flowers',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, low EC',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during establishment',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during establishment',
            },
          },
        },
        vegetative: {
          days: 90,
          description: 'Bush growth and development',
          care: 'Shape pruning, remove weak growth',
          editable: true,
          soil: {
            watering: {
              interval: 5,
              description: 'Allow soil to dry between waterings',
            },
            fertilizing: {
              interval: 30,
              description: 'Light feeding with low nitrogen fertilizer',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 30,
              description: 'Light nutrients, EC 0.8-1.0',
            },
          },
          coco: {
            watering: {
              interval: 2,
              description: 'Allow coco to dry between waterings',
            },
            fertilizing: {
              interval: 30,
              description: 'Light feeding, EC 0.8-1.0',
            },
          },
        },
        flowering: {
          days: 30,
          description: 'Flower spike development',
          care: 'Harvest flowers for drying, deadhead spent blooms',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'Maintain consistent moisture during flowering',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during flowering to preserve fragrance',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during flowering',
            },
          },
          coco: {
            watering: {
              interval: 2,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during flowering',
            },
          },
        },
        dormancy: {
          days: 120,
          description: 'Winter rest period',
          care: 'Prune old wood, mulch for winter protection',
          editable: true,
          soil: {
            watering: {
              interval: 10,
              description:
                'Reduce watering during dormancy, just keep from drying out',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during dormancy',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Minimal flow during dormancy',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during dormancy',
            },
          },
          coco: {
            watering: {
              interval: 10,
              description: 'Minimal watering during dormancy',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during dormancy',
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
          description: 'Root establishment',
          care: 'Remove flowers first year, focus on root development',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'Keep soil consistently moist during establishment',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during establishment, remove flowers',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, low EC',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during establishment',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during establishment',
            },
          },
        },
        vegetative: {
          description: 'Bush growth and development',
          care: 'Shape pruning, remove weak growth',
          editable: false,
          soil: {
            watering: {
              interval: 5,
              description: 'Allow soil to dry between waterings',
            },
            fertilizing: {
              interval: 30,
              description: 'Light feeding with low nitrogen fertilizer',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 30,
              description: 'Light nutrients, EC 0.8-1.0',
            },
          },
          coco: {
            watering: {
              interval: 2,
              description: 'Allow coco to dry between waterings',
            },
            fertilizing: {
              interval: 30,
              description: 'Light feeding, EC 0.8-1.0',
            },
          },
        },
        flowering: {
          start: '06-15',
          end: '08-01',
          description: 'Flower spike development',
          care: 'Harvest flowers for drying, deadhead spent blooms',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'Maintain consistent moisture during flowering',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during flowering to preserve fragrance',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during flowering',
            },
          },
          coco: {
            watering: {
              interval: 2,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during flowering',
            },
          },
        },
        dormancy: {
          start: '10-01',
          end: '03-14',
          description: 'Winter rest period',
          care: 'Prune old wood, mulch for winter protection',
          editable: false,
          soil: {
            watering: {
              interval: 10,
              description:
                'Reduce watering during dormancy, just keep from drying out',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during dormancy',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Minimal flow during dormancy',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during dormancy',
            },
          },
          coco: {
            watering: {
              interval: 10,
              description: 'Minimal watering during dormancy',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during dormancy',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-01',
            description: 'Spring to early summer planting',
          },
          harvestWindow: {
            start: '06-15',
            end: '09-15',
            description: 'Harvest in summer',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-15',
            end: '05-01',
            description: 'Very early spring to late spring',
          },
          harvestWindow: {
            start: '05-15',
            end: '09-30',
            description: 'Harvest in summer',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        establishment: {
          days: 60,
          description: 'Root establishment',
          care: 'Remove flowers first year, focus on root development',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Keep soil consistently moist during establishment',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during establishment, remove flowers',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, low EC',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during establishment',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during establishment',
            },
          },
        },
        vegetative: {
          days: 90,
          description: 'Bush growth and development',
          care: 'Shape pruning, remove weak growth',
          editable: true,
          soil: {
            watering: {
              interval: 5,
              description: 'Allow soil to dry between waterings',
            },
            fertilizing: {
              interval: 30,
              description: 'Light feeding with low nitrogen fertilizer',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 30,
              description: 'Light nutrients, EC 0.8-1.0',
            },
          },
          coco: {
            watering: {
              interval: 2,
              description: 'Allow coco to dry between waterings',
            },
            fertilizing: {
              interval: 30,
              description: 'Light feeding, EC 0.8-1.0',
            },
          },
        },
        flowering: {
          days: 30,
          description: 'Flower spike development',
          care: 'Harvest flowers for drying, deadhead spent blooms',
          editable: true,
          soil: {
            watering: {
              interval: 4,
              description: 'Maintain consistent moisture during flowering',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during flowering to preserve fragrance',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during flowering',
            },
          },
          coco: {
            watering: {
              interval: 2,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during flowering',
            },
          },
        },
        dormancy: {
          days: 120,
          description: 'Winter rest period',
          care: 'Prune old wood, mulch for winter protection',
          editable: true,
          soil: {
            watering: {
              interval: 10,
              description:
                'Reduce watering during dormancy, just keep from drying out',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during dormancy',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Minimal flow during dormancy',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during dormancy',
            },
          },
          coco: {
            watering: {
              interval: 10,
              description: 'Minimal watering during dormancy',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during dormancy',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'Allow soil to dry between waterings, avoid overwatering',
    fertilizing: 'Light feeding with low nitrogen fertilizer',
    sunlight: 'Full sun (6+ hours daily)',
    spacing: '2-3 feet apart',
    temperature: 'Moderate temperatures, protect from extreme heat',
    soilPH: '6.5-7.5 (alkaline soil preferred)',
    pruning: 'Annual pruning in late winter or early spring',
  },
  commonProblems: {
    'Root Rot': 'Fungal disease - improve drainage, avoid overwatering',
    'Powdery Mildew': 'White powder on leaves - improve airflow, reduce humidity',
    'Leggy Growth': 'Weak stems - provide more light, prune regularly',
  },
};

export default lavender; 