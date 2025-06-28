export default {
  name: "Blueberries",
  category: "category.fruits",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        establishment: {
          name: "Establishment",
          description: "Root development (first 90 days)",
          care: "Remove flowers in first year, focus on roots",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Bush growth and development",
          care: "Formative pruning, remove weak shoots",
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
          care: "Prune old wood, mulch for winter protection",
        },
      },
    },
    outdoor: {
      phases: {
        establishment: {
          name: "Establishment",
          description: "Root development (first 90 days)",
          care: "Remove flowers in first year, focus on roots",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Bush growth and development",
          care: "Formative pruning, remove weak shoots",
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
          care: "Prune old wood, mulch for winter protection",
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
            start: '07-01',
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
          description: "Root development (first 90 days)",
          care: "Remove flowers in first year, focus on roots",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Bush growth and development",
          care: "Formative pruning, remove weak shoots",
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
          care: "Prune old wood, mulch for winter protection",
        },
      },
    },
  },
  careTips: {
    watering: "Keep soil consistently moist, no overhead watering",
    fertilizing: "Special fertilizer for acid-loving plants, pH 4.5-5.5",
    sunlight: "Full sun (min. 6 hours)",
    spacing: "1.2-1.8 m spacing",
    temperature: "Cool crop, protect from heat",
    soilPH: "4.5-5.5 (acidic soil needed)",
    mulching: "Bark mulch or sawdust for acid retention",
  },
  commonProblems: {
    "Iron Deficiency": "Yellow leaves with green veins - check pH",
    "Birds": "Eat ripe berries - use nets",
    "Root Rot": "Fungal disease - improve drainage, avoid waterlogging",
  },
};
