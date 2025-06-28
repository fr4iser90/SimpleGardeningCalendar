export default {
  name: "Parsley",
  category: "category.herbs",
  tags: ["tag.biennial"],
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
          care: "Pinch tips for bushiness, water regularly, fertilize lightly every 2-3 weeks.",
        },
        harvest: {
          name: "Harvest",
          description: "Continuous harvest of leaves.",
          care: "Harvest leaves regularly to encourage new growth. Avoid letting the plant flower.",
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
          description: "Continuous harvest of leaves.",
          care: "Harvest leaves and stems as needed. Cut back to prevent flowering and spreading.",
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
          description: "Continuous harvest of leaves.",
          care: "Harvest leaves and stems as needed. Cut back to prevent flowering and spreading.",
        },
      },
    },
  },
  careTips: {
    watering: "Keep soil consistently moist.",
    fertilizing: "Light feeding every 2-3 weeks.",
    sunlight: "Partial shade to full sun.",
    spacing: "6-12 inches apart.",
    temperature: "Cool to warm weather herb.",
    soilPH: "6.0-7.0",
    harvesting: "Harvest leaves regularly to encourage growth.",
  },
  commonProblems: {
    "Slow Germination": "Parsley seeds are slow to germinate - be patient.",
    "Bolting": "Going to seed in second year - harvest regularly.",
    "Leaf Spot": "Fungal disease - improve airflow and avoid overhead watering.",
  },
}; 