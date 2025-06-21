/**
 * Cannabis Sativa Plant Data
 * Growing information for Cannabis Sativa
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

export const cannabis_sativa = {
  name: 'Cannabis Sativa',
  category: 'Cannabis',
  legalNote: 'Check local laws before cultivation. This information is for educational purposes only.',
  phases: {
    germination: { days: 3, description: 'Seed sprouting', care: 'Keep seeds warm (70-85°F/21-29°C) and moist in dark environment' },
    seedling: { days: 14, description: 'First true leaves development', care: 'Provide 18-24 hours of light, maintain humidity 65-70%' },
    vegetative: { days: 42, description: 'Extended growth phase', care: '18/6 light cycle, high nitrogen feeding, training for height control' },
    preflower: { days: 7, description: 'Sex determination', care: 'Continue vegetative care, identify and remove males' },
    flowering: { days: 70, description: 'Long flowering period', care: '12/12 light cycle, phosphorus/potassium feeding, support tall branches' },
    harvest: { days: 7, description: 'Harvest and cure preparation', care: 'Flush nutrients 1-2 weeks before harvest' }
  },
  careTips: {
    watering: 'Water when top inch of soil is dry, pH 6.0-7.0 in soil, 5.5-6.5 in hydro',
    fertilizing: 'High nitrogen in veg (3-1-2), high phosphorus in flower (1-3-2)',
    sunlight: '18/6 hours in vegetative, 12/12 hours in flowering',
    spacing: '3-6 feet apart, can grow very tall',
    support: 'Strong stakes or SCROG for height management',
    humidity: '65-70% seedling, 40-50% vegetative, 40-45% flowering',
    temperature: formatTemperature('70-85°F day, 65-80°F night')
  },
  commonProblems: {
    'Height Management': 'Can grow very tall - use LST, topping, or SCROG',
    'Long Flowering': 'Extended harvest time - be patient, monitor trichomes',
    'Nutrient Deficiency': 'Large plants need more nutrients - increase feeding',
    'Light Penetration': 'Dense canopy - defoliate and LST for light penetration'
  }
};

export default cannabis_sativa; 