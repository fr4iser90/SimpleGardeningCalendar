/**
 * Cannabis Autoflower Plant Data
 * Growing information for Cannabis Autoflower varieties
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

export const cannabis_autoflower = {
  name: 'Cannabis Autoflower',
  category: 'Cannabis',
  legalNote: 'Check local laws before cultivation. This information is for educational purposes only.',
  phases: {
    germination: { days: 3, description: 'Seed sprouting', care: 'Keep seeds warm (70-85°F/21-29°C) and moist in dark environment' },
    seedling: { days: 10, description: 'First true leaves development', care: 'Provide 18-24 hours of light, gentle care - no transplanting' },
    vegetative: { days: 21, description: 'Rapid early growth', care: '18-24 hours light, light feeding, minimal stress' },
    preflower: { days: 7, description: 'Automatic transition', care: 'Continue same light schedule, begin flower nutrients' },
    flowering: { days: 35, description: 'Fast flowering', care: 'Continue 18-24 hour light, phosphorus/potassium feeding' },
    harvest: { days: 7, description: 'Quick harvest cycle', care: 'Flush nutrients 1 week before harvest' }
  },
  careTips: {
    watering: 'Light watering, autoflowers prefer less water than photoperiods',
    fertilizing: 'Light feeding schedule, 1/4 to 1/2 strength nutrients',
    sunlight: '18-24 hours throughout entire cycle',
    spacing: '1-2 feet apart, smaller plants',
    support: 'Minimal training, LST only if needed',
    humidity: '60-65% throughout cycle',
    temperature: formatTemperature('70-80°F consistent')
  },
  commonProblems: {
    'Stunted Growth': 'Stress sensitive - avoid transplanting and heavy training',
    'Nutrient Burn': 'Very sensitive to nutrients - use light feeding',
    'Short Cycle': 'Fast growth - be ready for quick transitions'
  }
};

export default cannabis_autoflower; 