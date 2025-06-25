/**
 * Kale Plant Data
 * Growing information for Kale
 */

import { PLANT_TAGS } from '../categories.js';

export const kale = {
  name: 'Kale',
  category: 'Vegetables',
  tags: [PLANT_TAGS.LEAFY, PLANT_TAGS.ANNUAL],
  phases: {
    germination: { days: 7, description: 'Seeds sprouting', care: 'Keep cool and moist' },
    seedling: { days: 14, description: 'Young plant development', care: 'Provide adequate light' },
    vegetative: { days: 35, description: 'Leaf production', care: 'Regular feeding for leaf growth' },
    harvest: { days: 30, description: 'Continuous harvest', care: 'Harvest outer leaves, leave center to grow' }
  },
  careTips: {
    watering: 'Deep, regular watering',
    fertilizing: 'High nitrogen fertilizer every 3-4 weeks',
    sunlight: 'Full sun to partial shade',
    spacing: '12-18 inches apart',
    temperature: 'Cool season crop, tolerates frost',
    soilPH: '6.0-7.5',
    harvesting: 'Harvest outer leaves when 8-10 inches long'
  },
  commonProblems: {
    'Cabbage Worms': 'Green caterpillars - use BT spray or row covers',
    'Aphids': 'Small insects - spray with water or insecticidal soap',
    'Clubroot': 'Soil disease - rotate crops and improve drainage'
  }
};

export default kale; 