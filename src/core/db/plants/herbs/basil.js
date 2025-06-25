/**
 * Basil Plant Data
 * Growing information for Basil
 */

import { PLANT_TAGS } from '../categories.js';

export const basil = {
  name: 'Basil',
  category: 'Herbs',
  tags: [PLANT_TAGS.ANNUAL],
  phases: {
    germination: { days: 5, description: 'Seeds sprouting', care: 'Keep warm (70-75°F/21-24°C) and moist' },
    seedling: { days: 14, description: 'First true leaves', care: 'Provide bright light, maintain warmth' },
    vegetative: { days: 30, description: 'Leaf production', care: 'Pinch flowers to encourage leaf growth' },
    flowering: { days: 20, description: 'Flower spike development', care: 'Pinch flowers for continued leaf harvest' },
    seed_production: { days: 21, description: 'Seed development', care: 'Allow flowers to mature if collecting seeds' }
  },
  careTips: {
    watering: 'Keep soil moist but not waterlogged',
    fertilizing: 'Light feeding every 2-3 weeks',
    sunlight: 'Full sun (6+ hours daily)',
    spacing: '6-12 inches apart',
    temperature: 'Warm weather herb, protect from cold',
    soilPH: '6.0-7.0',
    harvesting: 'Pinch leaves regularly to encourage growth'
  },
  commonProblems: {
    'Fusarium Wilt': 'Soil-borne disease - use disease-free soil and rotate crops',
    'Aphids': 'Small insects on new growth - spray with water',
    'Bolting': 'Going to seed too early - pinch flower buds regularly'
  }
};

export default basil; 