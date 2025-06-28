export default {
  name: "Tomatoes",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seed germination (7-14 days)",
          care: "Warm, moist soil, 20-25°C",
        },
        seedling: {
          name: "Seedling",
          description: "First leaves development",
          care: "Bright location, keep evenly moist",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Strong leaf and stem growth",
          care: "Regular watering, fertilizing, provide support",
        },
        transplant: {
          name: "Transplant",
          description: "Moving to final growing location",
          care: "Harden off seedlings, plant deep",
        },
        flowering: {
          name: "Flowering",
          description: "Flower formation and pollination",
          care: "Promote air circulation, shake flowers for pollination",
        },
        fruiting: {
          name: "Fruiting",
          description: "Tomato development and ripening",
          care: "Even watering, harvest ripe fruits",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seed germination (7-14 days)",
          care: "Warm, moist soil, 20-25°C",
        },
        seedling: {
          name: "Seedling",
          description: "First leaves development",
          care: "Bright location, keep evenly moist",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Strong leaf and stem growth",
          care: "Regular watering, fertilizing, provide support",
        },
        transplant: {
          name: "Transplant",
          description: "Moving to final growing location",
          care: "Harden off seedlings, plant deep",
        },
        flowering: {
          name: "Flowering",
          description: "Flower formation and pollination",
          care: "Promote air circulation, shake flowers for pollination",
        },
        fruiting: {
          name: "Fruiting",
          description: "Tomato development and ripening",
          care: "Even watering, harvest ripe fruits",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '05-01',
            end: '06-15',
            description: 'After last frost, soil warm (15°C+)',
          },
          harvestWindow: {
            start: '07-15',
            end: '10-01',
            description: 'Harvest before first frost',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'Earlier start possible, soil warm',
          },
          harvestWindow: {
            start: '06-15',
            end: '10-31',
            description: 'Longer harvest season',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seed germination (7-14 days)",
          care: "Warm, moist soil, 20-25°C",
        },
        seedling: {
          name: "Seedling",
          description: "First leaves development",
          care: "Bright location, keep evenly moist",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Strong leaf and stem growth",
          care: "Regular watering, fertilizing, provide support",
        },
        transplant: {
          name: "Transplant",
          description: "Moving to final growing location",
          care: "Harden off seedlings, plant deep",
        },
        flowering: {
          name: "Flowering",
          description: "Flower formation and pollination",
          care: "Promote air circulation, shake flowers for pollination",
        },
        fruiting: {
          name: "Fruiting",
          description: "Tomato development and ripening",
          care: "Even watering, harvest ripe fruits",
        },
      },
    },
  },
  careTips: {
    watering: "Keep evenly moist, avoid waterlogging",
    fertilizing: "Regular vegetable fertilizer, balanced",
    sunlight: "Full sun (min. 8 hours)",
    spacing: "45-60 cm spacing",
    temperature: "Warm, 20-30°C optimal",
    soilPH: "6.0-7.0",
    support: "Stakes or trellises for stability",
  },
  commonProblems: {
    "Blossom End Rot": "Calcium deficiency - water evenly, check pH",
    "Aphids": "Small pests - introduce beneficial insects, soap solution",
    "Early Blight": "Fungal disease - improve air circulation, resistant varieties",
  },
};
