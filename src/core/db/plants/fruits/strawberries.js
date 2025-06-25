/**
 * Strawberries Plant Data
 * Growing information for Strawberries
 */

import { PLANT_TAGS } from '../categories.js';

export const strawberries = {
  name: 'Strawberries',
  category: 'Fruits',
  tags: [PLANT_TAGS.PERENNIAL],
  emoji: '🍓',
  alternativeNames: [
    'strawberry',
    'fresa',
    'fresas',
    'fraise',
    'fraises',
    'erdbeere',
    'erdbeeren',
    'fragola',
    'fragole',
  ],
  phases: {
    establishment: {
      days: 30,
      description: 'Root establishment',
      care: 'Keep soil moist, remove flowers first year',
      watering: {
        interval: 2,
        description: 'Keep soil consistently moist during establishment',
      },
      fertilizing: {
        interval: 0,
        description: 'No fertilizing during establishment, remove flowers',
      },
    },
    vegetative: {
      days: 60,
      description: 'Runner and leaf production',
      care: 'Allow runners to establish new plants',
      watering: {
        interval: 3,
        description: 'Keep soil consistently moist, avoid overhead watering',
      },
      fertilizing: {
        interval: 21,
        description: 'Balanced fertilizer in spring, avoid high nitrogen',
      },
    },
    flowering: {
      days: 21,
      description: 'Flower development',
      care: 'Protect flowers from late frost',
      watering: {
        interval: 2,
        description: 'Maintain consistent moisture during flowering',
      },
      fertilizing: {
        interval: 0,
        description: 'No fertilizing during flowering to avoid blossom damage',
      },
    },
    fruiting: {
      days: 30,
      description: 'Berry production',
      care: 'Regular watering and feeding during fruiting',
      watering: {
        interval: 2,
        description: 'Regular watering during fruiting, avoid wetting berries',
      },
      fertilizing: {
        interval: 14,
        description: 'Light feeding with balanced fertilizer during fruiting',
      },
    },
    dormancy: {
      days: 120,
      description: 'Winter rest period',
      care: 'Mulch for winter protection',
      watering: {
        interval: 7,
        description:
          'Reduce watering during dormancy, just keep from drying out',
      },
      fertilizing: {
        interval: 0,
        description: 'No fertilizing during dormancy',
      },
    },
  },
  careTips: {
    watering: 'Keep soil consistently moist, avoid overhead watering',
    fertilizing: 'Balanced fertilizer in spring, avoid high nitrogen',
    sunlight: 'Full sun (6+ hours daily)',
    spacing: '12-18 inches apart',
    temperature: 'Cool season crop, protect from extreme heat',
    soilPH: '5.5-6.5',
    mulching: 'Straw mulch to keep berries clean and retain moisture',
  },
  commonProblems: {
    'Gray Mold': 'Fungal disease on fruit - improve air circulation',
    Slugs: 'Eat holes in berries - use beer traps or diatomaceous earth',
    Birds: 'Eat ripe berries - use netting protection',
  },
};

export default strawberries;
