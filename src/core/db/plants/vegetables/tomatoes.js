/**
 * Tomatoes Plant Data
 * Indoor/Outdoor growing information for Tomatoes
 */

// Helper function for temperature formatting
function formatTemperature(fahrenheitRange) {
  if (!fahrenheitRange || typeof fahrenheitRange !== 'string')
    return fahrenheitRange;

  const fahrenheitMatch = fahrenheitRange.match(/(\d+)-(\d+)°F/);
  if (!fahrenheitMatch) return fahrenheitRange;

  const [, minF, maxF] = fahrenheitMatch;
  const minC = Math.round(((parseInt(minF) - 32) * 5) / 9);
  const maxC = Math.round(((parseInt(maxF) - 32) * 5) / 9);

  return `${minF}-${maxF}°F (${minC}-${maxC}°C)`;
}

export const tomatoes = {
  name: 'Tomatoes',
  category: 'Vegetables',
  emoji: '🍅',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 7,
          description: 'Seeds sprouting',
          care: 'Keep soil warm (70-80°F/21-27°C) and moist',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'Keep soil consistently moist but not waterlogged',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizer needed during germination',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous moisture in rockwool',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during germination',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Keep coco moist during germination',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during germination',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'Young plant development',
          care: 'Provide strong light, maintain moisture',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Water when top inch of soil feels dry',
            },
            fertilizing: {
              interval: 7,
              description:
                'Light feeding with balanced fertilizer (1/4 strength)',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, low EC' },
            fertilizing: {
              interval: 7,
              description: 'Light nutrients, EC 0.8-1.0',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 7,
              description: 'Light feeding, EC 0.8-1.0',
            },
          },
        },
        transplant: {
          days: 14,
          description: 'Hardening off period',
          care: 'Gradually introduce to outdoor conditions',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Maintain consistent moisture during transition',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during hardening off',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during hardening off',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during hardening off',
            },
          },
        },
        flowering: {
          days: 20,
          description: 'Flower development',
          care: 'Maintain consistent watering, shake plants gently',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description:
                'Deep watering 2-3 times per week, avoid wetting leaves',
            },
            fertilizing: {
              interval: 14,
              description: 'High phosphorus fertilizer for flower development',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, higher EC',
            },
            fertilizing: {
              interval: 14,
              description: 'High phosphorus nutrients, EC 1.2-1.5',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 14,
              description: 'High phosphorus feeding, EC 1.2-1.5',
            },
          },
        },
        fruiting: {
          days: 45,
          description: 'Fruit development to harvest',
          care: 'Regular feeding, watch for pests and disease',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Consistent deep watering, avoid drought stress',
            },
            fertilizing: {
              interval: 21,
              description:
                'Balanced fertilizer with higher potassium for fruit development',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, high EC' },
            fertilizing: {
              interval: 21,
              description: 'High potassium nutrients, EC 1.5-2.0',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 21,
              description: 'High potassium feeding, EC 1.5-2.0',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 7,
          description: 'Indoor seed starting',
          care: 'Start indoors 6-8 weeks before last frost',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'Keep soil consistently moist but not waterlogged',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizer needed during germination',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous moisture in rockwool',
            },
            fertilizing: {
              interval: 0,
              description: 'No nutrients during germination',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Keep coco moist during germination',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during germination',
            },
          },
        },
        seedling: {
          days: 35,
          description: 'Indoor growing',
          care: 'Grow indoors until outdoor conditions suitable',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'Water when top inch of soil feels dry',
            },
            fertilizing: {
              interval: 7,
              description:
                'Light feeding with balanced fertilizer (1/4 strength)',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, low EC' },
            fertilizing: {
              interval: 7,
              description: 'Light nutrients, EC 0.8-1.0',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 7,
              description: 'Light feeding, EC 0.8-1.0',
            },
          },
        },
        transplant: {
          days: 14,
          description: 'Outdoor transplanting',
          care: 'Transplant after soil warms to 60°F/15°C',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'Maintain consistent moisture during transition',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during transplant shock',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during transplant shock',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during transplant shock',
            },
          },
        },
        flowering: {
          days: 25,
          description: 'Outdoor flowering',
          care: 'Natural pollination, consistent watering',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description:
                'Deep watering 2-3 times per week, avoid wetting leaves',
            },
            fertilizing: {
              interval: 14,
              description: 'High phosphorus fertilizer for flower development',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, higher EC',
            },
            fertilizing: {
              interval: 14,
              description: 'High phosphorus nutrients, EC 1.2-1.5',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 14,
              description: 'High phosphorus feeding, EC 1.2-1.5',
            },
          },
        },
        fruiting: {
          days: 60,
          description: 'Outdoor fruit production',
          care: 'Weather protection, extended harvest',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Consistent deep watering, avoid drought stress',
            },
            fertilizing: {
              interval: 21,
              description:
                'Balanced fertilizer with higher potassium for fruit development',
            },
          },
          hydro: {
            watering: { interval: 0, description: 'Continuous flow, high EC' },
            fertilizing: {
              interval: 21,
              description: 'High potassium nutrients, EC 1.5-2.0',
            },
          },
          coco: {
            watering: { interval: 1, description: 'Daily watering in coco' },
            fertilizing: {
              interval: 21,
              description: 'High potassium feeding, EC 1.5-2.0',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '05-15',
            end: '06-15',
            description: 'After last frost, soil warm',
          },
          harvestWindow: {
            start: '07-15',
            end: '10-01',
            description: 'Until first frost',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-15',
            end: '05-01',
            description: 'Extended growing season',
          },
          harvestWindow: {
            start: '06-01',
            end: '11-15',
            description: 'Long harvest period',
          },
        },
      },
    },
  },
  careTips: {
    watering: 'Keep soil consistently moist, water deeply 2-3 times per week',
    fertilizing: 'Feed every 4 weeks with balanced fertilizer',
    sunlight: 'Full sun (6-8 hours daily)',
    spacing: '18-24 inches apart',
    support: 'Cage or stake plants when 12 inches tall',
    soilPH: '6.0-6.8',
    temperature: formatTemperature('65-85°F optimal growing range'),
  },
  commonProblems: {
    'Blossom End Rot': 'Calcium deficiency - maintain consistent watering',
    'Leaf Yellowing': 'Could be nutrient deficiency or overwatering',
    'Cracked Fruits': 'Irregular watering - keep soil moisture consistent',
    Hornworms: 'Large green caterpillars - hand pick or use BT spray',
  },
};

export default tomatoes;
