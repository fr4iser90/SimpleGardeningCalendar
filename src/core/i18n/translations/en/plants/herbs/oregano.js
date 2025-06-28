export default {
  name: "Oregano",
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
    watering: "Allow soil to dry between watering.",
    fertilizing: "Light feeding every 2-3 weeks.",
    sunlight: "Full sun (6+ hours daily).",
    spacing: "12-18 inches apart.",
    temperature: "Warm weather herb, drought tolerant.",
    soilPH: "6.0-8.0",
    harvesting: "Harvest leaves regularly to encourage growth.",
  },
  commonProblems: {
    "Root Rot": "Overwatering - ensure good drainage.",
    "Leggy Growth": "Insufficient light - provide more sunlight.",
    "Winter Damage": "Protect from frost in cold climates.",
  },
}; 