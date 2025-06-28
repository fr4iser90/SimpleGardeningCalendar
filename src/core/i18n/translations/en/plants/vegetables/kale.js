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
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '07-01',
            description: 'Early spring to mid-summer, after soil is workable',
          },
          harvestWindow: {
            start: '06-15',
            end: '11-15',
            description: 'Harvest until hard frost, sweeter after light frost',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '09-01',
            end: '11-01',
            description: 'Fall planting for winter/spring harvest',
          },
          harvestWindow: {
            start: '12-01',
            end: '04-15',
            description: 'Harvest before heat causes bolting',
          },
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
