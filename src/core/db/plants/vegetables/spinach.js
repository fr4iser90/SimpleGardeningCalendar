/**
 * Spinach Plant Data
 * Growing information for Spinach
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

export const spinach = {
  name: 'Spinach',
  category: 'Vegetables',
  tags: [PLANT_TAGS.LEAFY, PLANT_TAGS.ANNUAL],
  phases: {
    germination: {
      days: 7,
      description: 'Seeds sprouting',
      care: 'Keep cool and moist',
      watering: {
        interval: 1,
        description: 'Keep soil moist during germination',
      },
      fertilizing: {
        interval: 0,
        description: 'No fertilizing during germination',
      },
    },
    leafing: {
      days: 21,
      description: 'Leaf development',
      care: 'Thin seedlings to 4-6 inches apart',
      watering: {
        interval: 2,
        description: 'Water every 2 days for leaf growth',
      },
      fertilizing: {
        interval: 14,
        description: 'Fertilize every 2 weeks during leafing',
      },
    },
    harvest: {
      days: 14,
      description: 'Continuous harvest period',
      care: 'Harvest outer leaves, keep center growing',
      watering: {
        interval: 3,
        description: 'Water every 3 days during harvest',
      },
      fertilizing: {
        interval: 14,
        description: 'Fertilize every 2 weeks during harvest',
      },
    },
    bolting: {
      days: 7,
      description: 'Going to seed',
      care: 'Harvest quickly before leaves become bitter',
      watering: {
        interval: 0,
        description: 'No watering needed during bolting',
      },
      fertilizing: {
        interval: 0,
        description: 'No fertilizing during bolting',
      },
    },
  },
  careTips: {
    watering: 'Keep soil consistently moist',
    fertilizing: 'High nitrogen fertilizer for leaf growth',
    sunlight: 'Full sun in cool weather, partial shade in warm weather',
    spacing: '4-6 inches apart',
    temperature: formatTemperature('Cool season crop, 50-70°F optimal'),
    soilPH: '6.0-7.0',
    succession: 'Plant every 2 weeks for continuous harvest',
  },
  commonProblems: {
    Bolting: 'Heat stress - plant in cool season, provide shade',
    'Downy Mildew': 'Fungal disease - improve air circulation',
    'Leaf Miners': 'Tunnels in leaves - remove affected leaves',
  },
};

export default spinach;
