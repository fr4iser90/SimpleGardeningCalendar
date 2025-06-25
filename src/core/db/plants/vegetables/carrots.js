/**
 * Carrots Plant Data
 * Growing information for Carrots
 */

import { PLANT_TAGS } from '../categories.js';

export const carrots = {
  name: 'Carrots',
  category: 'Vegetables',
  tags: [PLANT_TAGS.ROOT, PLANT_TAGS.ANNUAL],
  emoji: '🥕',
  alternativeNames: [
    'carrot',
    'zanahoria',
    'zanahorias',
    'carotte',
    'carottes',
    'karotte',
    'karotten',
    'carota',
    'carote',
  ],
  phases: {
    germination: {
      days: 10,
      description: 'Seeds sprouting',
      care: 'Keep soil consistently moist, avoid crusting',
      watering: {
        interval: 1,
        description: 'Keep soil consistently moist but not waterlogged',
      },
      fertilizing: {
        interval: 0,
        description: 'No fertilizer needed during germination',
      },
    },
    leafing: {
      days: 20,
      description: 'Leaf development',
      care: 'Thin seedlings to 2 inches apart',
      watering: {
        interval: 2,
        description: 'Water when top inch of soil feels dry',
      },
      fertilizing: {
        interval: 0,
        description: 'No fertilizing during early leaf development',
      },
    },
    rooting: {
      days: 30,
      description: 'Root development',
      care: 'Keep soil loose and weed-free',
      watering: {
        interval: 3,
        description: 'Deep watering once a week, maintain even moisture',
      },
      fertilizing: {
        interval: 14,
        description:
          'Low nitrogen fertilizer, high in phosphorus and potassium',
      },
    },
    maturing: {
      days: 25,
      description: 'Root enlargement',
      care: 'Maintain even moisture to prevent splitting',
      watering: {
        interval: 3,
        description: 'Consistent deep watering, avoid drought stress',
      },
      fertilizing: {
        interval: 21,
        description: 'Continue low nitrogen, high phosphorus/potassium feeding',
      },
    },
  },
  careTips: {
    watering: 'Keep soil moist but not wet, water deeply once a week',
    fertilizing: 'Low nitrogen fertilizer, high in phosphorus and potassium',
    sunlight: 'Full sun to partial shade',
    spacing: '2-3 inches apart, rows 16 inches apart',
    soil: 'Deep, loose, well-draining soil free from rocks',
    soilPH: '6.0-6.8',
  },
  commonProblems: {
    Forking:
      'Rocky soil or recent fertilizer - prepare soil well before planting',
    'Bitter Taste':
      'Environmental stress - maintain consistent growing conditions',
    'Short Roots': 'Soil too compact - loosen soil deeply before planting',
    'Carrot Fly':
      'Small flies laying eggs - use row covers or companion plant with onions',
  },
  environments: {},
};

export default carrots;
