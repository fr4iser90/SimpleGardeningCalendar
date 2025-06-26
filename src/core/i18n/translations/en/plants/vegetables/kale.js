export default {
  name: "Kale",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seed germination (5-10 days)",
          care: "Moist soil, 15-20°C",
        },
        seedling: {
          name: "Seedling",
          description: "First leaves development",
          care: "Bright location, keep evenly moist",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Strong leaf growth",
          care: "Regular watering, fertilizing, remove weeds",
        },
        leaf_development: {
          name: "Leaf Development",
          description: "Development of large leaves",
          care: "Keep evenly moist, protect leaves from frost",
        },
        harvest: {
          name: "Harvest",
          description: "Leaves are ready for harvest",
          care: "Harvest outer leaves, let inner ones grow",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seed germination (5-10 days)",
          care: "Moist soil, 15-20°C",
        },
        seedling: {
          name: "Seedling",
          description: "First leaves development",
          care: "Bright location, keep evenly moist",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Strong leaf growth",
          care: "Regular watering, fertilizing, remove weeds",
        },
        leaf_development: {
          name: "Leaf Development",
          description: "Development of large leaves",
          care: "Keep evenly moist, protect leaves from frost",
        },
        harvest: {
          name: "Harvest",
          description: "Leaves are ready for harvest",
          care: "Harvest outer leaves, let inner ones grow",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seed germination (5-10 days)",
          care: "Moist soil, 15-20°C",
        },
        seedling: {
          name: "Seedling",
          description: "First leaves development",
          care: "Bright location, keep evenly moist",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Strong leaf growth",
          care: "Regular watering, fertilizing, remove weeds",
        },
        leaf_development: {
          name: "Leaf Development",
          description: "Development of large leaves",
          care: "Keep evenly moist, protect leaves from frost",
        },
        harvest: {
          name: "Harvest",
          description: "Leaves are ready for harvest",
          care: "Harvest outer leaves, let inner ones grow",
        },
      },
    },
  },
  careTips: {
    watering: "Keep evenly moist, not too wet",
    fertilizing: "Regular nitrogen fertilizer",
    sunlight: "Full sun to partial shade (min. 6 hours)",
    spacing: "30-45 cm spacing",
    temperature: "Cool to warm, 10-25°C optimal",
    soilPH: "6.0-7.5",
    frost: "Tolerates light frost, becomes sweeter",
  },
  commonProblems: {
    "Clubroot": "Fungal disease - raise pH, resistant varieties",
    "Cabbage Root Fly": "Maggots on roots - netting, mixed cropping",
    "Aphids": "Small pests - introduce beneficial insects, soap solution",
  },
};
