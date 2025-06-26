export default {
  name: "Spinach",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seed germination (7-14 days)",
          care: "Moist soil, 15-20°C",
        },
        seedling: {
          name: "Seedling",
          description: "First leaves development",
          care: "Bright location, keep evenly moist",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Leaf growth and rosette formation",
          care: "Regular watering, thin out, remove weeds",
        },
        leaf_development: {
          name: "Leaf Development",
          description: "Development of large leaves",
          care: "Keep evenly moist, protect from heat",
        },
        harvest: {
          name: "Harvest",
          description: "Spinach is ready for harvest",
          care: "Harvest outer leaves, let inner ones grow",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seed germination (7-14 days)",
          care: "Moist soil, 15-20°C",
        },
        seedling: {
          name: "Seedling",
          description: "First leaves development",
          care: "Bright location, keep evenly moist",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Leaf growth and rosette formation",
          care: "Regular watering, thin out, remove weeds",
        },
        leaf_development: {
          name: "Leaf Development",
          description: "Development of large leaves",
          care: "Keep evenly moist, protect from heat",
        },
        harvest: {
          name: "Harvest",
          description: "Spinach is ready for harvest",
          care: "Harvest outer leaves, let inner ones grow",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seed germination (7-14 days)",
          care: "Moist soil, 15-20°C",
        },
        seedling: {
          name: "Seedling",
          description: "First leaves development",
          care: "Bright location, keep evenly moist",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Leaf growth and rosette formation",
          care: "Regular watering, thin out, remove weeds",
        },
        leaf_development: {
          name: "Leaf Development",
          description: "Development of large leaves",
          care: "Keep evenly moist, protect from heat",
        },
        harvest: {
          name: "Harvest",
          description: "Spinach is ready for harvest",
          care: "Harvest outer leaves, let inner ones grow",
        },
      },
    },
  },
  careTips: {
    watering: "Keep evenly moist, not too wet",
    fertilizing: "Light fertilization, low nitrogen",
    sunlight: "Full sun to partial shade (min. 6 hours)",
    spacing: "15-25 cm spacing",
    temperature: "Cool, 15-20°C optimal",
    soilPH: "6.0-7.0",
    bolting: "Protect from heat, otherwise it bolts",
  },
  commonProblems: {
    "Bolting": "Too much heat - shade, harvest early",
    "Slugs": "Eat holes in leaves - slug pellets, beer traps",
    "Aphids": "Small pests - introduce beneficial insects, soap solution",
  },
};
