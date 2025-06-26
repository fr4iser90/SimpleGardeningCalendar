export default {
  name: "Sunflowers",
  category: "category.flowers",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seeds begin to sprout and roots emerge.",
          care: "Keep seeds warm (65-75°F/18-24°C) and moist, light needed.",
        },
        seedling: {
          name: "Seedling",
          description: "Young plant develops first true leaves.",
          care: "Lots of light, regular watering, avoid overwatering.",
        },
        vegetative: {
          name: "Vegetative",
          description: "Rapid growth of leaves and stems.",
          care: "Lots of light, regular watering, prune for bushiness.",
        },
        flowering: {
          name: "Flowering",
          description: "Plant begins to flower.",
          care: "Lots of sun, regular watering, harvest flowers for seeds.",
        },
        harvest: {
          name: "Harvest",
          description: "Harvest flowers and seeds.",
          care: "Harvest flowers when they open, let seeds dry.",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seeds begin to sprout and roots emerge.",
          care: "Keep seeds warm and moist, protect from frost.",
        },
        seedling: {
          name: "Seedling",
          description: "Establishing outdoors.",
          care: "Gradual sun exposure, protect from wind.",
        },
        vegetative: {
          name: "Vegetative",
          description: "Rapid growth outdoors.",
          care: "Full sun, regular watering, prune for bushiness.",
        },
        flowering: {
          name: "Flowering",
          description: "Plant begins to flower.",
          care: "Full sun, regular watering, harvest flowers for seeds.",
        },
        harvest: {
          name: "Harvest",
          description: "Harvest flowers and seeds.",
          care: "Harvest flowers when they open, let seeds dry.",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seeds begin to sprout and roots emerge.",
          care: "Keep seeds warm and moist in greenhouse.",
        },
        seedling: {
          name: "Seedling",
          description: "Establishing in greenhouse.",
          care: "Controlled environment, regular watering.",
        },
        vegetative: {
          name: "Vegetative",
          description: "Rapid growth in greenhouse.",
          care: "Lots of light, regular watering, prune for bushiness.",
        },
        flowering: {
          name: "Flowering",
          description: "Plant begins to flower.",
          care: "Lots of light, regular watering, harvest flowers for seeds.",
        },
        harvest: {
          name: "Harvest",
          description: "Harvest flowers and seeds.",
          care: "Harvest flowers when they open, let seeds dry.",
        },
      },
    },
  },
  careTips: {
    watering: "Water regularly, keep soil moist but not soggy.",
    fertilizing: "Feed in spring and summer with organic fertilizer.",
    sunlight: "Full sun, at least 8 hours of direct sun.",
    spacing: "12-24 inches apart between plants.",
    support: "Stakes for tall varieties, usually not for dwarf varieties.",
    humidity: "Normal humidity, not too humid.",
    temperature: "60-85°F optimal, frost sensitive.",
  },
  commonProblems: {
    "Powdery Mildew": "White powder on leaves - improve air circulation",
    "Aphids": "Small insects on leaves - rinse with water",
    "Birds": "Seeds being eaten - use netting",
    "Wind Damage": "Tall plants falling over - use stakes",
  },
};
