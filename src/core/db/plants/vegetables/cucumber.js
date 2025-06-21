/**
 * Cucumber Plant Data
 * Growing information for Cucumber
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

export const cucumber = {
  name: 'Cucumber',
  category: 'Vegetables',
  phases: {
    germination: { days: 7, description: 'Seeds sprouting', care: 'Keep warm (70-85°F/21-29°C) and moist' },
    seedling: { days: 14, description: 'First true leaves', care: 'Provide warmth and adequate light' },
    vegetative: { days: 21, description: 'Vine development', care: 'Begin training on supports' },
    flowering: { days: 14, description: 'Male and female flowers', care: 'Ensure good pollination' },
    fruiting: { days: 50, description: 'Fruit production', care: 'Regular harvest to encourage production' }
  },
  careTips: {
    watering: 'Deep, consistent watering - avoid wetting leaves',
    fertilizing: 'Balanced fertilizer, side-dress monthly',
    sunlight: 'Full sun (6+ hours daily)',
    spacing: '12-18 inches apart with support, 3 feet apart if sprawling',
    temperature: formatTemperature('Warm season crop, 70-85°F optimal'),
    soilPH: '6.0-6.8',
    support: 'Trellises or cages for vertical growing'
  },
  commonProblems: {
    'Powdery Mildew': 'White powder on leaves - improve air circulation',
    'Cucumber Beetles': 'Yellow striped beetles - use row covers early season',
    'Bitter Fruit': 'Stress from heat or irregular watering'
  }
};

export default cucumber; 