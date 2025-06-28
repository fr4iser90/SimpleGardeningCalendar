export default {
  name: "Rosemary",
  category: "category.herbs",
  tags: ["tag.perennial"],
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seeds sprout and roots emerge.",
          care: "Keep warm and moist. Use a seed tray or small pots, cover lightly with soil.",
        },
        seedling: {
          name: "Seedling",
          description: "First true leaves develop.",
          care: "Provide bright light, keep soil moist but not soggy.",
        },
        vegetative: {
          name: "Vegetative",
          description: "Leaf and stem growth.",
          care: "Pinch tips for bushiness, water regularly, fertilize lightly every 3-4 weeks.",
        },
        harvest: {
          name: "Harvest",
          description: "Continuous harvest of sprigs.",
          care: "Harvest sprigs regularly to encourage new growth. Avoid letting the plant flower.",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seeds sprout and roots emerge.",
          care: "Sow after last frost, keep soil moist until seedlings appear.",
        },
        seedling: {
          name: "Seedling",
          description: "First true leaves develop.",
          care: "Provide partial shade, protect from strong sun and wind.",
        },
        vegetative: {
          name: "Vegetative",
          description: "Leaf and stem growth.",
          care: "Water regularly, fertilize lightly, pinch tips for bushiness.",
        },
        harvest: {
          name: "Harvest",
          description: "Continuous harvest of sprigs.",
          care: "Harvest sprigs as needed. Pruning prevents flowering and spreading.",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-01',
            description: 'After last frost, perennial plant',
          },
          harvestWindow: {
            start: '05-15',
            end: '10-15',
            description: 'Continuous harvest during growing season',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '05-01',
            description: 'Early start for perennial plant',
          },
          harvestWindow: {
            start: '04-15',
            end: '11-15',
            description: 'Extended harvest season',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seeds sprout and roots emerge.",
          care: "Keep warm and moist in a controlled environment.",
        },
        seedling: {
          name: "Seedling",
          description: "First true leaves develop.",
          care: "Provide bright light, keep soil moist.",
        },
        vegetative: {
          name: "Vegetative",
          description: "Leaf and stem growth.",
          care: "Pinch tips for bushiness, water regularly, fertilize lightly.",
        },
        harvest: {
          name: "Harvest",
          description: "Continuous harvest of sprigs.",
          care: "Harvest sprigs as needed. Cut back to prevent flowering and spreading.",
        },
      },
    },
  },
  careTips: {
    watering: "Allow soil to dry between watering.",
    fertilizing: "Light feeding every 3-4 weeks.",
    sunlight: "Full sun (6+ hours daily).",
    spacing: "18-24 inches apart.",
    temperature: "Warm weather herb, protect from frost.",
    soilPH: "6.0-7.0",
    harvesting: "Harvest sprigs regularly to encourage growth.",
  },
  commonProblems: {
    "Root Rot": "Overwatering - ensure good drainage.",
    "Powdery Mildew": "White powder on leaves - improve airflow.",
    "Winter Damage": "Protect from frost in cold climates.",
  },
}; 