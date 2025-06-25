/**
 * Cannabis Indica Plant Data
 * Indoor/Outdoor growing information for Cannabis Indica
 * Now categorized as Herb with Cannabis tag
 */

import { PLANT_TAGS } from '../categories.js';

// Helper function for temperature formatting
function formatTemperature(fahrenheitRange) {
  if (!fahrenheitRange || typeof fahrenheitRange !== 'string')
    return fahrenheitRange;

  const fahrenheitMatch = fahrenheitRange.match(/(\d+)-(\d+)°F/);
  if (!fahrenheitMatch) return fahrenheitRange;

  const [, minF, maxF] = fahrenheitMatch;
  const minC = Math.round(((parseInt(minF) - 32) * 5) / 9);
  const maxC = Math.round(((parseInt(maxF) - 32) * 5) / 9);

  return `${minF}-${maxF}°F (${minC}-${maxC}°C)`;
}

export const cannabis_indica = {
  name: 'Cannabis Indica',
  category: 'Herbs', // Updated category
  tags: [PLANT_TAGS.CANNABIS, PLANT_TAGS.ANNUAL], // New tag structure
  legalNote:
    'Check local laws before cultivation. This information is for educational purposes only.',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 3,
          description: 'Seed sprouting',
          care: 'Keep seeds warm (70-85°F/21-29°C) and moist in dark environment',
          soil: {
            watering: {
              interval: 1,
              description: 'Keep soil moist during germination',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during germination',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous moisture in rockwool',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during germination',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Keep coco moist during germination',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during germination',
            },
          },
        },
        seedling: {
          days: 14,
          description: 'First true leaves development',
          care: 'Provide 18-24 hours of light, maintain humidity 65-70%',
          soil: {
            watering: {
              interval: 2,
              description: 'Water every 2 days during seedling stage',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during seedling stage',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, low EC' },
            fertilizing: {
              interval: 7,
              description: 'Light nutrients, EC 0.5-0.8',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 7,
              description: 'Light feeding, EC 0.5-0.8',
            },
          },
        },
        vegetative: {
          days: 28,
          description: 'Rapid growth phase',
          care: '18/6 light cycle, high nitrogen feeding, training for bushiness',
          soil: {
            watering: {
              interval: 2,
              description: 'Water every 2 days during vegetative growth',
            },
            fertilizing: {
              interval: 7,
              description: 'Weekly feeding with high nitrogen',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 7,
              description: 'Weekly nutrient change, EC 1.0-1.2',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 7,
              description: 'Weekly feeding, EC 1.0-1.2',
            },
          },
        },
        preflower: {
          days: 7,
          description: 'Sex determination',
          care: 'Continue vegetative care, identify and remove males',
          soil: {
            watering: {
              interval: 2,
              description: 'Water every 2 days during vegetative growth',
            },
            fertilizing: {
              interval: 7,
              description: 'Weekly feeding with high nitrogen',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 7,
              description: 'Weekly nutrient change, EC 1.0-1.2',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 7,
              description: 'Weekly feeding, EC 1.0-1.2',
            },
          },
        },
        flowering: {
          days: 56,
          description: 'Flower development and maturation',
          care: '12/12 light cycle, high phosphorus/potassium, lower humidity 40-50%',
          soil: {
            watering: {
              interval: 2,
              description: 'Water every 2 days during flowering',
            },
            fertilizing: {
              interval: 7,
              description: 'Weekly feeding with bloom nutrients',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, higher EC',
            },
            fertilizing: {
              interval: 7,
              description: 'Weekly nutrient change, EC 1.2-1.5',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 7,
              description: 'Weekly feeding, EC 1.2-1.5',
            },
          },
        },
        harvest: {
          days: 7,
          description: 'Harvest preparation and execution',
          care: 'Flush with plain water, monitor trichomes, harvest at peak potency',
          soil: {
            watering: { interval: 1, description: 'Flush with plain water' },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during flush',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Flush with plain water' },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during flush',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Flush with plain water' },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during flush',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 3,
          description: 'Seed sprouting',
          care: 'Keep seeds warm and moist, protect from direct sun',
          soil: {
            watering: {
              interval: 1,
              description: 'Keep soil moist during germination',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizer needed during germination',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous moisture in rockwool',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during germination',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Keep coco moist during germination',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during germination',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'Establishing outdoors',
          care: 'Gradual sun exposure, protect from wind and pests',
          soil: {
            watering: {
              interval: 2,
              description: 'Water every 2 days during seedling establishment',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during seedling establishment',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, low EC' },
            fertilizing: {
              interval: 7,
              description: 'Light nutrients, EC 0.5-0.8',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 7,
              description: 'Light feeding, EC 0.5-0.8',
            },
          },
        },
        vegetative: {
          days: 90,
          description: 'Natural light vegetative growth',
          care: 'Natural sunlight, train for size management, heavy feeding',
          soil: {
            watering: {
              interval: 3,
              description: 'Water every 3 days during vegetative growth',
            },
            fertilizing: {
              interval: 14,
              description: 'High nitrogen feeding for vegetative growth',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 14,
              description: 'High nitrogen feeding for vegetative growth',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 14,
              description: 'High nitrogen feeding for vegetative growth',
            },
          },
        },
        preflower: {
          days: 14,
          description: 'Natural photoperiod trigger',
          care: 'Occurs naturally as days shorten, identify males',
          soil: {
            watering: {
              interval: 3,
              description: 'Water every 3 days during vegetative growth',
            },
            fertilizing: {
              interval: 14,
              description: 'Transition to flowering nutrients',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, low EC' },
            fertilizing: {
              interval: 14,
              description: 'Transition to flowering nutrients',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 14,
              description: 'Transition to flowering nutrients',
            },
          },
        },
        flowering: {
          days: 63,
          description: 'Outdoor flowering (6-12 weeks depending on strain)',
          care: 'Natural light cycle, weather protection, pest monitoring',
          soil: {
            watering: {
              interval: 3,
              description: 'Water every 3 days during flowering',
            },
            fertilizing: {
              interval: 14,
              description: 'High phosphorus/potassium feeding for flowering',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, higher EC',
            },
            fertilizing: {
              interval: 14,
              description: 'High phosphorus/potassium feeding for flowering',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 14,
              description: 'High phosphorus/potassium feeding for flowering',
            },
          },
        },
        harvest: {
          days: 14,
          description: 'Outdoor harvest timing',
          care: 'Weather dependent, check trichomes, quick dry if rain',
          soil: {
            watering: {
              interval: 3,
              description: 'Flush with plain water 1-2 weeks before harvest',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during flush and harvest',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Flush with plain water 1-2 weeks before harvest',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during flush and harvest',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Flush with plain water 1-2 weeks before harvest',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during flush and harvest',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-15',
            end: '06-01',
            description: 'After last frost, before summer solstice',
          },
          harvestWindow: {
            start: '09-15',
            end: '10-31',
            description: 'Before first frost',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'Mild spring start',
          },
          harvestWindow: {
            start: '09-01',
            end: '11-15',
            description: 'Extended harvest season',
          },
        },
      },
      naturalTiming:
        'Phases are determined by natural seasons and cannot be adjusted. Only flowering time varies by strain (6-12 weeks).',
    },
    greenhouse: {
      phases: {
        germination: {
          days: 3,
          description: 'Seed sprouting',
          care: 'Keep seeds warm and moist in controlled environment',
          soil: {
            watering: {
              interval: 1,
              description: 'Keep soil moist during germination',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during germination',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous moisture in rockwool',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during germination',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Keep coco moist during germination',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during germination',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'Establishing in greenhouse',
          care: 'Controlled environment, protect from temperature extremes',
          soil: {
            watering: {
              interval: 2,
              description: 'Water every 2 days during seedling establishment',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during seedling establishment',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, low EC' },
            fertilizing: {
              interval: 7,
              description: 'Light nutrients, EC 0.5-0.8',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 7,
              description: 'Light feeding, EC 0.5-0.8',
            },
          },
        },
        vegetative: {
          days: 60,
          description: 'Greenhouse vegetative growth',
          care: 'Natural light with temperature control, heavy feeding',
          soil: {
            watering: {
              interval: 3,
              description: 'Water every 3 days during vegetative growth',
            },
            fertilizing: {
              interval: 14,
              description: 'High nitrogen feeding for vegetative growth',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 14,
              description: 'High nitrogen feeding for vegetative growth',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 14,
              description: 'High nitrogen feeding for vegetative growth',
            },
          },
        },
        preflower: {
          days: 14,
          description: 'Photoperiod management',
          care: 'Control light hours to trigger flowering, identify males',
          soil: {
            watering: {
              interval: 3,
              description: 'Water every 3 days during vegetative growth',
            },
            fertilizing: {
              interval: 14,
              description: 'Transition to flowering nutrients',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, low EC' },
            fertilizing: {
              interval: 14,
              description: 'Transition to flowering nutrients',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 14,
              description: 'Transition to flowering nutrients',
            },
          },
        },
        flowering: {
          days: 63,
          description: 'Greenhouse flowering (6-12 weeks depending on strain)',
          care: 'Controlled environment, weather protection, pest monitoring',
          soil: {
            watering: {
              interval: 3,
              description: 'Water every 3 days during flowering',
            },
            fertilizing: {
              interval: 14,
              description: 'High phosphorus/potassium feeding for flowering',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, higher EC',
            },
            fertilizing: {
              interval: 14,
              description: 'High phosphorus/potassium feeding for flowering',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 14,
              description: 'High phosphorus/potassium feeding for flowering',
            },
          },
        },
        harvest: {
          days: 14,
          description: 'Greenhouse harvest timing',
          care: 'Controlled drying environment, check trichomes',
          soil: {
            watering: {
              interval: 3,
              description: 'Flush with plain water 1-2 weeks before harvest',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during flush and harvest',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Flush with plain water 1-2 weeks before harvest',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during flush and harvest',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Flush with plain water 1-2 weeks before harvest',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during flush and harvest',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-01',
            end: '06-01',
            description: 'Extended season with greenhouse protection',
          },
          harvestWindow: {
            start: '09-01',
            end: '11-30',
            description: 'Extended harvest with climate control',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-15',
            end: '06-15',
            description: 'Very early start possible',
          },
          harvestWindow: {
            start: '08-15',
            end: '12-15',
            description: 'Extended season with climate control',
          },
        },
      },
      naturalTiming:
        'Greenhouse allows some control over timing, but flowering duration still varies by strain (6-12 weeks).',
    },
  },
  careTips: {
    watering:
      'Water when top inch of soil is dry, pH 6.0-7.0 in soil, 5.5-6.5 in hydro',
    fertilizing:
      'High nitrogen in veg (3-1-2), high phosphorus in flower (1-3-2)',
    sunlight:
      'Indoor: 18/6 hours in vegetative, 12/12 hours in flowering. Outdoor: Natural sunlight',
    spacing: 'Indoor: 2-4 feet apart. Outdoor: 4-8 feet apart for full size',
    support:
      'Indoor: SCROG nets, LST. Outdoor: Strong stakes for wind resistance',
    humidity: '65-70% seedling, 40-50% vegetative, 40-45% flowering',
    temperature: formatTemperature('70-85°F day, 65-80°F night'),
  },
  commonProblems: {
    'Nutrient Burn': 'Yellow/brown leaf tips - reduce feeding concentration',
    'Light Burn': 'Bleached tops - increase distance from lights',
    'Bud Rot': 'Gray mold in buds - improve airflow and reduce humidity',
    'Spider Mites':
      'Tiny webs and spots - increase humidity, use predatory mites',
    'Powdery Mildew':
      'White powder on leaves - improve airflow, reduce humidity',
  },
};

export default cannabis_indica;
