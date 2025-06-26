export default {
  name: "Roses",
  category: "category.flowers",
  tags: ["tag.perennial"],
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
          care: "Lots of sun, regular watering, remove spent flowers.",
        },
        harvest: {
          name: "Harvest",
          description: "Harvest flowers for cut flowers.",
          care: "Harvest flowers when they open, cut for vases.",
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
          care: "Full sun, regular watering, remove spent flowers.",
        },
        harvest: {
          name: "Harvest",
          description: "Harvest flowers for cut flowers.",
          care: "Harvest flowers when they open, cut for vases.",
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
          care: "Lots of light, regular watering, remove spent flowers.",
        },
        harvest: {
          name: "Harvest",
          description: "Harvest flowers for cut flowers.",
          care: "Harvest flowers when they open, cut for vases.",
        },
      },
    },
  },
  careTips: {
    watering: "Water regularly, keep soil moist but not soggy.",
    fertilizing: "Feed in spring and summer with rose fertilizer.",
    sunlight: "Full sun, at least 6 hours of direct sun.",
    spacing: "24-36 inches apart between plants.",
    support: "Stakes for climbing roses, usually not for bush roses.",
    humidity: "Normal humidity, not too humid.",
    temperature: "60-75°F optimal, hardy to -5°F.",
  },
  commonProblems: {
    "Powdery Mildew": "White powder on leaves - improve air circulation",
    "Black Spot": "Black spots on leaves - use fungicide",
    "Aphids": "Small insects on leaves - rinse with water",
    "Rose Rust": "Orange spots - remove affected leaves",
  },
};
