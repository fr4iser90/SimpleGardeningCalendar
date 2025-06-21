/**
 * Spinach Plant Data
 * Growing information for Spinach
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

export const spinach = {
  name: 'Spinach',
  category: 'Vegetables',
  phases: {
    germination: { days: 7, description: 'Seeds sprouting', care: 'Keep cool and moist' },
    leafing: { days: 21, description: 'Leaf development', care: 'Thin seedlings to 4-6 inches apart' },
    harvest: { days: 14, description: 'Continuous harvest period', care: 'Harvest outer leaves, keep center growing' },
    bolting: { days: 7, description: 'Going to seed', care: 'Harvest quickly before leaves become bitter' }
  },
  careTips: {
    watering: 'Keep soil consistently moist',
    fertilizing: 'High nitrogen fertilizer for leaf growth',
    sunlight: 'Full sun in cool weather, partial shade in warm weather',
    spacing: '4-6 inches apart',
    temperature: formatTemperature('Cool season crop, 50-70°F optimal'),
    soilPH: '6.0-7.0',
    succession: 'Plant every 2 weeks for continuous harvest'
  },
  commonProblems: {
    'Bolting': 'Heat stress - plant in cool season, provide shade',
    'Downy Mildew': 'Fungal disease - improve air circulation',
    'Leaf Miners': 'Tunnels in leaves - remove affected leaves'
  }
};

export default spinach; 