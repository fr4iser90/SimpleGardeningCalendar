/**
 * Cannabis Autoflower Plant Data
 * Growing information for Cannabis Autoflower varieties
 * Now categorized as Herb with Cannabis tag
 */

import { PLANT_TAGS } from '../categories.js';

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
  category: 'Herbs', // Updated category
  tags: [PLANT_TAGS.CANNABIS, PLANT_TAGS.ANNUAL], // New tag structure
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
  },
  outdoor: {
    phases: {
      germination: { days: 3, description: 'Seed sprouting', care: 'Keep seeds warm and moist, protect from direct sun' },
      seedling: { days: 21, description: 'Establishing outdoors', care: 'Gradual sun exposure, protect from wind and pests' },
      vegetative: { days: 35, description: 'Autoflower vegetative growth', care: 'Natural sunlight, LST training, heavy feeding' },
      preflower: { days: 7, description: 'Autoflower transition', care: 'Autoflowering occurs regardless of light cycle' },
      flowering: { days: 49, description: 'Autoflower outdoor flowering (6-10 weeks depending on strain)', care: 'Natural light cycle, weather protection, pest monitoring' },
      harvest: { days: 7, description: 'Autoflower harvest timing', care: 'Weather dependent, check trichomes, quick dry if rain' }
    },
    seasonalTiming: {
      temperate_north: {
        plantingWindow: { start: '04-15', end: '07-01', description: 'Multiple harvests possible with autoflowers' },
        harvestWindow: { start: '07-01', end: '10-15', description: 'Multiple harvests throughout season' }
      },
      mediterranean: {
        plantingWindow: { start: '03-15', end: '08-01', description: 'Extended season with multiple harvests' },
        harvestWindow: { start: '06-01', end: '11-01', description: 'Multiple harvests throughout season' }
      }
    },
    naturalTiming: 'Autoflowers flower automatically regardless of light cycle. Total cycle is 70-90 days from seed to harvest.'
  },
  greenhouse: {
    phases: {
      germination: { days: 3, description: 'Seed sprouting', care: 'Keep seeds warm and moist in controlled environment' },
      seedling: { days: 21, description: 'Establishing in greenhouse', care: 'Controlled environment, protect from temperature extremes' },
      vegetative: { days: 35, description: 'Autoflower greenhouse vegetative growth', care: 'Natural light with temperature control, LST training' },
      preflower: { days: 7, description: 'Autoflower transition', care: 'Autoflowering occurs regardless of light cycle' },
      flowering: { days: 49, description: 'Autoflower greenhouse flowering (6-10 weeks depending on strain)', care: 'Controlled environment, weather protection, pest monitoring' },
      harvest: { days: 7, description: 'Autoflower greenhouse harvest timing', care: 'Controlled drying environment, check trichomes' }
    },
    seasonalTiming: {
      temperate_north: {
        plantingWindow: { start: '03-01', end: '08-01', description: 'Extended season with greenhouse protection' },
        harvestWindow: { start: '05-15', end: '11-15', description: 'Multiple harvests with climate control' }
      },
      mediterranean: {
        plantingWindow: { start: '02-15', end: '09-01', description: 'Very extended season possible' },
        harvestWindow: { start: '05-01', end: '12-01', description: 'Multiple harvests with climate control' }
      }
    },
    naturalTiming: 'Autoflowers flower automatically regardless of light cycle. Greenhouse extends growing season for multiple harvests.'
  }
};

export default cannabis_autoflower; 