/**
 * Cannabis Sativa Plant Data
 * Growing information for Cannabis Sativa
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

export const cannabis_sativa = {
  name: 'Cannabis Sativa',
  category: 'Herbs', // Updated category
  tags: [PLANT_TAGS.CANNABIS, PLANT_TAGS.ANNUAL], // New tag structure
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
  },
  outdoor: {
    phases: {
      germination: { days: 3, description: 'Seed sprouting', care: 'Keep seeds warm and moist, protect from direct sun' },
      seedling: { days: 21, description: 'Establishing outdoors', care: 'Gradual sun exposure, protect from wind and pests' },
      vegetative: { days: 120, description: 'Extended natural light vegetative growth', care: 'Natural sunlight, train for size management, heavy feeding' },
      preflower: { days: 14, description: 'Natural photoperiod trigger', care: 'Occurs naturally as days shorten, identify males' },
      flowering: { days: 84, description: 'Extended outdoor flowering (8-16 weeks depending on strain)', care: 'Natural light cycle, weather protection, pest monitoring' },
      harvest: { days: 14, description: 'Outdoor harvest timing', care: 'Weather dependent, check trichomes, quick dry if rain' }
    },
    seasonalTiming: {
      temperate_north: {
        plantingWindow: { start: '04-01', end: '05-15', description: 'Early start needed for long flowering' },
        harvestWindow: { start: '10-15', end: '11-30', description: 'Late harvest due to long flowering' }
      },
      mediterranean: {
        plantingWindow: { start: '03-01', end: '05-01', description: 'Early start for extended season' },
        harvestWindow: { start: '10-01', end: '12-15', description: 'Extended harvest season' }
      }
    },
    naturalTiming: 'Phases are determined by natural seasons and cannot be adjusted. Only flowering time varies by strain (8-16 weeks).'
  },
  greenhouse: {
    phases: {
      germination: { days: 3, description: 'Seed sprouting', care: 'Keep seeds warm and moist in controlled environment' },
      seedling: { days: 21, description: 'Establishing in greenhouse', care: 'Controlled environment, protect from temperature extremes' },
      vegetative: { days: 90, description: 'Greenhouse vegetative growth', care: 'Natural light with temperature control, heavy feeding' },
      preflower: { days: 14, description: 'Photoperiod management', care: 'Control light hours to trigger flowering, identify males' },
      flowering: { days: 84, description: 'Greenhouse flowering (8-16 weeks depending on strain)', care: 'Controlled environment, weather protection, pest monitoring' },
      harvest: { days: 14, description: 'Greenhouse harvest timing', care: 'Controlled drying environment, check trichomes' }
    },
    seasonalTiming: {
      temperate_north: {
        plantingWindow: { start: '02-15', end: '05-15', description: 'Extended season with greenhouse protection' },
        harvestWindow: { start: '10-01', end: '12-31', description: 'Extended harvest with climate control' }
      },
      mediterranean: {
        plantingWindow: { start: '02-01', end: '05-15', description: 'Very early start possible' },
        harvestWindow: { start: '09-15', end: '12-31', description: 'Extended season with climate control' }
      }
    },
    naturalTiming: 'Greenhouse allows some control over timing, but flowering duration still varies by strain (8-16 weeks).'
  }
};

export default cannabis_sativa; 