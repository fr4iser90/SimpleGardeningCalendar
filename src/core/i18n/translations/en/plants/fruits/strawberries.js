export default {
  name: "Strawberries",
  category: "category.fruits",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        establishment: {
          name: "Establishment",
          description: "Root development (first 30 days)",
          care: "Keep soil moist, remove flowers in first year",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Runner and leaf development",
          care: "Use runners for propagation",
        },
        flowering: {
          name: "Flowering",
          description: "Flower formation",
          care: "Protect flowers from late frost",
        },
        fruiting: {
          name: "Fruiting",
          description: "Berry production",
          care: "Regular watering and fertilizing, keep berries dry",
        },
        dormancy: {
          name: "Dormancy",
          description: "Winter rest",
          care: "Cover with mulch for winter protection",
        },
      },
    },
    outdoor: {
      phases: {
        establishment: {
          name: "Establishment",
          description: "Root development (first 30 days)",
          care: "Keep soil moist, remove flowers in first year",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Runner and leaf development",
          care: "Use runners for propagation",
        },
        flowering: {
          name: "Flowering",
          description: "Flower formation",
          care: "Protect flowers from late frost",
        },
        fruiting: {
          name: "Fruiting",
          description: "Berry production",
          care: "Regular watering and fertilizing, keep berries dry",
        },
        dormancy: {
          name: "Dormancy",
          description: "Winter rest",
          care: "Cover with mulch for winter protection",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'Early to mid spring planting',
          },
          harvestWindow: {
            start: '06-01',
            end: '09-30',
            description: 'Harvest throughout summer',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-01',
            end: '04-15',
            description: 'Very early spring planting',
          },
          harvestWindow: {
            start: '04-15',
            end: '07-31',
            description: 'Harvest before summer heat',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        establishment: {
          name: "Establishment",
          description: "Root development (first 30 days)",
          care: "Keep soil moist, remove flowers in first year",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Runner and leaf development",
          care: "Use runners for propagation",
        },
        flowering: {
          name: "Flowering",
          description: "Flower formation",
          care: "Protect flowers from late frost",
        },
        fruiting: {
          name: "Fruiting",
          description: "Berry production",
          care: "Regular watering and fertilizing, keep berries dry",
        },
        dormancy: {
          name: "Dormancy",
          description: "Winter rest",
          care: "Cover with mulch for winter protection",
        },
      },
    },
  },
  careTips: {
    watering: "Keep soil consistently moist, avoid waterlogging",
    fertilizing: "Balanced fertilization in spring, low nitrogen",
    sunlight: "Full sun (min. 6 hours)",
    spacing: "30-45 cm spacing",
    temperature: "Cool crop, protect from heat",
    soilPH: "5.5-6.5",
    mulching: "Straw mulch keeps berries clean and moist",
  },
  commonProblems: {
    "Gray Mold": "Fungus on fruits - improve air circulation",
    "Slugs": "Eat holes in berries - slug pellets or beer traps",
    "Birds": "Eat ripe berries - use nets",
  },
};
