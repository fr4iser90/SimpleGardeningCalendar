/**
 * Tomatoes Plant Data
 * Indoor/Outdoor growing information for Tomatoes
 */

// Helper function for temperature formatting
function formatTemperature(fahrenheitRange) {
  if (!fahrenheitRange || typeof fahrenheitRange !== 'string') return fahrenheitRange;
  
  const fahrenheitMatch = fahrenheitRange.match(/(\d+)-(\d+)°F/);
  if (!fahrenheitMatch) return fahrenheitRange;
  
  const [, minF, maxF] = fahrenheitMatch;
  const minC = Math.round((parseInt(minF) - 32) * 5/9);
  const maxC = Math.round((parseInt(maxF) - 32) * 5/9);
  
  return `${minF}-${maxF}°F (${minC}-${maxC}°C)`;
}

export const tomatoes = {
  name: 'Tomatoes',
  category: 'Vegetables',
  emoji: '🍅',
  alternativeNames: ['tomato', 'tomate', 'tomates', 'pomodoro', 'pomodori'],
  environments: {
    indoor: {
      phases: {
        germination: { days: 7, description: 'Seeds sprouting', care: 'Keep soil warm (70-80°F/21-27°C) and moist' },
        seedling: { days: 21, description: 'Young plant development', care: 'Provide strong light, maintain moisture' },
        transplant: { days: 14, description: 'Hardening off period', care: 'Gradually introduce to outdoor conditions' },
        flowering: { days: 20, description: 'Flower development', care: 'Maintain consistent watering, shake plants gently' },
        fruiting: { days: 45, description: 'Fruit development to harvest', care: 'Regular feeding, watch for pests and disease' }
      }
    },
    outdoor: {
      phases: {
        germination: { days: 7, description: 'Indoor seed starting', care: 'Start indoors 6-8 weeks before last frost' },
        seedling: { days: 35, description: 'Indoor growing', care: 'Grow indoors until outdoor conditions suitable' },
        transplant: { days: 14, description: 'Outdoor transplanting', care: 'Transplant after soil warms to 60°F/15°C' },
        flowering: { days: 25, description: 'Outdoor flowering', care: 'Natural pollination, consistent watering' },
        fruiting: { days: 60, description: 'Outdoor fruit production', care: 'Weather protection, extended harvest' }
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: { start: '05-15', end: '06-15', description: 'After last frost, soil warm' },
          harvestWindow: { start: '07-15', end: '10-01', description: 'Until first frost' }
        },
        mediterranean: {
          plantingWindow: { start: '03-15', end: '05-01', description: 'Extended growing season' },
          harvestWindow: { start: '06-01', end: '11-15', description: 'Long harvest period' }
        }
      }
    }
  },
  careTips: {
    watering: 'Keep soil consistently moist, water deeply 2-3 times per week',
    fertilizing: 'Feed every 4 weeks with balanced fertilizer',
    sunlight: 'Full sun (6-8 hours daily)',
    spacing: '18-24 inches apart',
    support: 'Cage or stake plants when 12 inches tall',
    soilPH: '6.0-6.8',
    temperature: formatTemperature('65-85°F optimal growing range')
  },
  commonProblems: {
    'Blossom End Rot': 'Calcium deficiency - maintain consistent watering',
    'Leaf Yellowing': 'Could be nutrient deficiency or overwatering',
    'Cracked Fruits': 'Irregular watering - keep soil moisture consistent',
    'Hornworms': 'Large green caterpillars - hand pick or use BT spray'
  }
};

export default tomatoes; 