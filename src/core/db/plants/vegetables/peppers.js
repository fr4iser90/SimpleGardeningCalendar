/**
 * Peppers Plant Data
 * Growing information for Peppers
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

export const peppers = {
  name: 'Peppers',
  category: 'Vegetables',
  environments: {
    indoor: {
      phases: {
        germination: {
          days: 10,
          description: 'Seeds sprouting',
          care: 'Keep warm (80-85°F/27-29°C) and moist',
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
              description: 'Keep coco consistently moist but not waterlogged',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizer needed during germination',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'Young plant development',
          care: 'Provide strong light, maintain warmth',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Water when top inch of soil feels dry',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during early seedling stage',
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
          days: 35,
          description: 'Plant establishment',
          care: 'Gradual hardening off before transplant',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Deep, infrequent watering - avoid overhead watering',
            },
            fertilizing: {
              interval: 14,
              description: 'Balanced fertilizer, avoid high nitrogen',
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
          days: 21,
          description: 'Flower development',
          care: 'Maintain consistent moisture and feeding',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Deep, infrequent watering - avoid overhead watering',
            },
            fertilizing: {
              interval: 14,
              description: 'Balanced fertilizer, avoid high nitrogen',
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
        fruiting: {
          days: 60,
          description: 'Fruit development',
          care: 'Support heavy branches, regular harvest',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Deep, infrequent watering - avoid overhead watering',
            },
            fertilizing: {
              interval: 21,
              description:
                'Balanced fertilizer with higher potassium for fruit development',
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
          days: 10,
          description: 'Seeds sprouting',
          care: 'Keep warm (80-85°F/27-29°C) and moist',
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
              description: 'Keep coco consistently moist but not waterlogged',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizer needed during germination',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'Young plant development',
          care: 'Provide strong light, maintain warmth',
          editable: false,
          soil: {
            watering: {
              interval: 2,
              description: 'Water when top inch of soil feels dry',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during early seedling stage',
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
          days: 35,
          description: 'Plant establishment',
          care: 'Gradual hardening off before transplant',
          editable: false,
          soil: {
            watering: {
              interval: 3,
              description: 'Deep, infrequent watering - avoid overhead watering',
            },
            fertilizing: {
              interval: 14,
              description: 'Balanced fertilizer, avoid high nitrogen',
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
          days: 21,
          description: 'Outdoor flowering',
          care: 'Natural pollination, consistent watering',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Deep, infrequent watering - avoid overhead watering',
            },
            fertilizing: {
              interval: 14,
              description: 'Balanced fertilizer, avoid high nitrogen',
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
        fruiting: {
          days: 60,
          description: 'Fruit development',
          care: 'Support heavy branches, regular harvest',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Deep, infrequent watering - avoid overhead watering',
            },
            fertilizing: {
              interval: 21,
              description:
                'Balanced fertilizer with higher potassium for fruit development',
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
    greenhouse: {
      phases: {
        germination: {
          days: 10,
          description: 'Seeds sprouting',
          care: 'Keep warm (80-85°F/27-29°C) and moist',
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
              description: 'Keep coco consistently moist but not waterlogged',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizer needed during germination',
            },
          },
        },
        seedling: {
          days: 21,
          description: 'Young plant development',
          care: 'Provide strong light, maintain warmth',
          editable: true,
          soil: {
            watering: {
              interval: 2,
              description: 'Water when top inch of soil feels dry',
            },
            fertilizing: {
              interval: 0,
              description: 'No fertilizing during early seedling stage',
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
          days: 35,
          description: 'Plant establishment',
          care: 'Gradual hardening off before transplant',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Deep, infrequent watering - avoid overhead watering',
            },
            fertilizing: {
              interval: 14,
              description: 'Balanced fertilizer, avoid high nitrogen',
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
          days: 21,
          description: 'Flower development',
          care: 'Maintain consistent moisture and feeding',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Deep, infrequent watering - avoid overhead watering',
            },
            fertilizing: {
              interval: 14,
              description: 'Balanced fertilizer, avoid high nitrogen',
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
        fruiting: {
          days: 60,
          description: 'Fruit development',
          care: 'Support heavy branches, regular harvest',
          editable: true,
          soil: {
            watering: {
              interval: 3,
              description: 'Deep, infrequent watering - avoid overhead watering',
            },
            fertilizing: {
              interval: 21,
              description:
                'Balanced fertilizer with higher potassium for fruit development',
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
    watering: 'Deep, infrequent watering - avoid overhead watering',
    fertilizing: 'Balanced fertilizer, avoid high nitrogen',
    sunlight: 'Full sun (6-8 hours daily)',
    spacing: '12-18 inches apart',
    temperature: formatTemperature('Warm season crop, 70-85°F optimal'),
    soilPH: '6.0-6.8',
    support: 'Stake or cage for heavy fruiting varieties',
  },
  commonProblems: {
    'Blossom End Rot': 'Calcium deficiency - maintain consistent watering',
    Sunscald: 'Fruit exposed to intense sun - provide some shade',
    'Pepper Maggot': 'Small flies - use row covers during egg-laying period',
  },
};

export default peppers;
