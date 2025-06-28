/**
 * Cucumber Plant Data
 * Growing information for Cucumber
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

export const cucumber = {
  name: 'Cucumber',
  category: 'category.vegetables',
  tags: ['tag.photoperiod', 'tag.annual'],
  emoji: '🥒',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 7,
          description: 'Seeds sprouting',
          care: 'Keep warm (70-85°F/21-29°C) and moist',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'Keep soil moist during germination',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during germination',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous moisture in rockwool or hydroponic system',
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
          days: 14,
          description: 'First true leaves',
          care: 'Provide warmth and adequate light',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Water every 3 days during seedling stage',
            },
            fertilizing: {
              interval: 7,
              description: 'Fertilize weekly during seedling stage',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, low EC',
            },
            fertilizing: {
              interval: 7,
              description: 'Light nutrients, EC 0.5-0.8',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 7,
              description: 'Light feeding, EC 0.5-0.8',
            },
          },
        },
        vegetative: {
          days: 21,
          description: 'Vine development',
          care: 'Begin training on supports',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Water every 2 days during vegetative growth',
            },
            fertilizing: {
              interval: 14,
              description: 'Fertilize every 2 weeks during vegetative growth',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 14,
              description: 'Balanced nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 14,
              description: 'Balanced feeding, EC 1.0-1.2',
            },
          },
        },
        flowering: {
          days: 14,
          description: 'Male and female flowers',
          care: 'Ensure good pollination',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Water every 3 days during flowering',
            },
            fertilizing: {
              interval: 7,
              description: 'Fertilize weekly during flowering',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 7,
              description: 'Balanced nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 7,
              description: 'Balanced feeding, EC 1.0-1.2',
            },
          },
        },
        fruiting: {
          days: 50,
          description: 'Fruit production',
          care: 'Regular harvest to encourage production',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Water every 2 days during fruiting',
            },
            fertilizing: {
              interval: 21,
              description: 'Fertilize every 3 weeks during fruiting',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 21,
              description: 'Balanced nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 21,
              description: 'Balanced feeding, EC 1.0-1.2',
            },
          },
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          days: 7,
          description: 'Seeds sprouting',
          care: 'Keep warm (70-85°F/21-29°C) and moist',
          editable: false,
          soil: {
            watering: {
              interval: 1,
              description: 'Keep soil moist during germination',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during germination',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous moisture in rockwool or hydroponic system',
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
          days: 14,
          description: 'First true leaves',
          care: 'Provide warmth and adequate light',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'Water every 3 days during seedling stage',
            },
            fertilizing: {
              interval: 7,
              description: 'Fertilize weekly during seedling stage',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, low EC',
            },
            fertilizing: {
              interval: 7,
              description: 'Light nutrients, EC 0.5-0.8',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 7,
              description: 'Light feeding, EC 0.5-0.8',
            },
          },
        },
        vegetative: {
          days: 21,
          description: 'Vine development',
          care: 'Begin training on supports',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'Water every 2 days during vegetative growth',
            },
            fertilizing: {
              interval: 14,
              description: 'Fertilize every 2 weeks during vegetative growth',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 14,
              description: 'Balanced nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 14,
              description: 'Balanced feeding, EC 1.0-1.2',
            },
          },
        },
        flowering: {
          days: 14,
          description: 'Outdoor flowering',
          care: 'Natural pollination, consistent watering',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Water every 3 days during flowering',
            },
            fertilizing: {
              interval: 7,
              description: 'Fertilize weekly during flowering',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 7,
              description: 'Balanced nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 7,
              description: 'Balanced feeding, EC 1.0-1.2',
            },
          },
        },
        fruiting: {
          days: 42,
          description: 'Outdoor fruit production',
          care: 'Regular harvest, weather protection',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Water every 2 days during fruiting',
            },
            fertilizing: {
              interval: 21,
              description: 'Fertilize every 3 weeks during fruiting',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 21,
              description: 'Balanced nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 21,
              description: 'Balanced feeding, EC 1.0-1.2',
            },
          },
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '05-01',
            end: '06-15',
            description: 'After last frost, soil warm',
          },
          harvestWindow: {
            start: '07-01',
            end: '09-30',
            description: 'Harvest until first frost',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'Early spring to late spring',
          },
          harvestWindow: {
            start: '06-01',
            end: '10-31',
            description: 'Long harvest period',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          days: 7,
          description: 'Seeds sprouting',
          care: 'Keep warm (70-85°F/21-29°C) and moist',
          editable: true,
          soil: {
            watering: {
              interval: 1,
              description: 'Keep soil moist during germination',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during germination',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous moisture in rockwool or hydroponic system',
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
          days: 14,
          description: 'First true leaves',
          care: 'Provide warmth and adequate light',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Water every 3 days during seedling stage',
            },
            fertilizing: {
              interval: 7,
              description: 'Fertilize weekly during seedling stage',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, low EC',
            },
            fertilizing: {
              interval: 7,
              description: 'Light nutrients, EC 0.5-0.8',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 7,
              description: 'Light feeding, EC 0.5-0.8',
            },
          },
        },
        vegetative: {
          days: 21,
          description: 'Vine development',
          care: 'Begin training on supports',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Water every 2 days during vegetative growth',
            },
            fertilizing: {
              interval: 14,
              description: 'Fertilize every 2 weeks during vegetative growth',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 14,
              description: 'Balanced nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 14,
              description: 'Balanced feeding, EC 1.0-1.2',
            },
          },
        },
        flowering: {
          days: 14,
          description: 'Male and female flowers',
          care: 'Ensure good pollination',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Water every 3 days during flowering',
            },
            fertilizing: {
              interval: 7,
              description: 'Fertilize weekly during flowering',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 7,
              description: 'Balanced nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 7,
              description: 'Balanced feeding, EC 1.0-1.2',
            },
          },
        },
        fruiting: {
          days: 50,
          description: 'Fruit production',
          care: 'Regular harvest to encourage production',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Water every 2 days during fruiting',
            },
            fertilizing: {
              interval: 21,
              description: 'Fertilize every 3 weeks during fruiting',
            },
          },
          hydro: {
            watering: {
              interval: 0,
              description: 'Continuous flow, moderate EC',
            },
            fertilizing: {
              interval: 21,
              description: 'Balanced nutrients, EC 1.0-1.2',
            },
          },
          coco: {
            watering: {
              interval: 1,
              description: 'Daily watering in coco',
            },
            fertilizing: {
              interval: 21,
              description: 'Balanced feeding, EC 1.0-1.2',
            },
          },
        },
      },
    },
  },
  careTips: {
    watering: 'Deep, consistent watering - avoid wetting leaves',
    fertilizing: 'Balanced fertilizer, side-dress monthly',
    sunlight: 'Full sun (6+ hours daily)',
    spacing: '12-18 inches apart with support, 3 feet apart if sprawling',
    temperature: formatTemperature('Warm season crop, 70-85°F optimal'),
    soilPH: '6.0-6.8',
    support: 'Trellises or cages for vertical growing',
  },
  commonProblems: {
    'Powdery Mildew': 'White powder on leaves - improve air circulation',
    'Cucumber Beetles': 'Yellow striped beetles - use row covers early season',
    'Bitter Fruit': 'Stress from heat or irregular watering',
  },
};

export default cucumber;
