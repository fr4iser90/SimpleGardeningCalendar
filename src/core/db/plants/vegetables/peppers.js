/**
 * Peppers Plant Data
 * Growing information for Peppers
 */

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

export const peppers = {
  name: 'Peppers',
  category: 'Vegetables',
  phases: {
    germination: {
      days: 10,
      description: 'Seeds sprouting',
      care: 'Keep warm (80-85°F/27-29°C) and moist',
      watering: {
        interval: 1,
        description: 'Keep soil consistently moist but not waterlogged',
      },
      fertilizing: {
        interval: 0,
        description: 'No fertilizer needed during germination',
      },
    },
    seedling: {
      days: 21,
      description: 'Young plant development',
      care: 'Provide strong light, maintain warmth',
      watering: {
        interval: 2,
        description: 'Water when top inch of soil feels dry',
      },
      fertilizing: {
        interval: 0,
        description: 'No fertilizing during early seedling stage',
      },
    },
    vegetative: {
      days: 35,
      description: 'Plant establishment',
      care: 'Gradual hardening off before transplant',
      watering: {
        interval: 3,
        description: 'Deep, infrequent watering - avoid overhead watering',
      },
      fertilizing: {
        interval: 14,
        description: 'Balanced fertilizer, avoid high nitrogen',
      },
    },
    flowering: {
      days: 21,
      description: 'Flower development',
      care: 'Maintain consistent moisture and feeding',
      watering: {
        interval: 3,
        description: 'Deep, infrequent watering - avoid overhead watering',
      },
      fertilizing: {
        interval: 14,
        description: 'Balanced fertilizer, avoid high nitrogen',
      },
    },
    fruiting: {
      days: 60,
      description: 'Fruit development',
      care: 'Support heavy branches, regular harvest',
      watering: {
        interval: 3,
        description: 'Deep, infrequent watering - avoid overhead watering',
      },
      fertilizing: {
        interval: 21,
        description:
          'Balanced fertilizer with higher potassium for fruit development',
      },
    },
  },
  careTips: {
    watering: 'Deep, infrequent watering - avoid overhead watering',
    fertilizing: 'Balanced fertilizer, avoid high nitrogen',
    sunlight: 'Full sun (6-8 hours daily)',
    spacing: '12-18 inches apart',
    temperature: formatTemperature('Warm season crop, 70-85°F optimal'),
    soilPH: '6.0-6.8',
    support: 'Stake or cage for heavy fruiting varieties',
  },
  commonProblems: {
    'Blossom End Rot': 'Calcium deficiency - maintain consistent watering',
    Sunscald: 'Fruit exposed to intense sun - provide some shade',
    'Pepper Maggot': 'Small flies - use row covers during egg-laying period',
  },
};

export default peppers;
