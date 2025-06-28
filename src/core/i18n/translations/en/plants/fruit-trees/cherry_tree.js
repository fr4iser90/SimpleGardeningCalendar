export default {
  name: "Cherry Tree",
  category: "category.fruit_trees",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    outdoor: {
      phases: {
        establishment: {
          name: "Establishment",
          description: "First year establishment",
          care: "Regular watering, bird protection",
        },
        juvenile: {
          name: "Juvenile Phase",
          description: "Years 2-4 development",
          care: "Training pruning, disease prevention",
        },
        productive: {
          name: "Productive Phase",
          description: "Productive years 5-20",
          care: "Harvest timing, bird protection, disease management",
        },
        dormancy: {
          name: "Dormancy",
          description: "Winter rest",
          care: "Winter pruning, trunk protection",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-01',
            end: '04-15',
            description: 'Early spring planting',
          },
          harvestWindow: {
            start: '06-01',
            end: '08-15',
            description: 'Early summer harvest',
          },
          pruningWindow: {
            start: '02-01',
            end: '03-15',
            description: 'Late winter pruning',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '01-15',
            end: '03-15',
            description: 'Very early spring planting',
          },
          harvestWindow: {
            start: '05-01',
            end: '07-31',
            description: 'Harvest before summer heat',
          },
        },
      },
    },
  },
  careTips: {
    watering: "Regular but avoid waterlogging, good drainage important",
    fertilizing: "Light annual fertilization, low nitrogen",
    sunlight: "Full sun",
    spacing: "6-8 m for sweet cherries, 4-6 m for sour cherries",
    pruning: "Minimal pruning, prune in late winter",
    pollination: "Sweet cherries mostly cross-pollinating",
    birdProtection: "Nets or other bird protection during harvest",
  },
  commonProblems: {
    "Brown Rot": "Fruit rot - remove infected fruits, improve air circulation",
    "Cherry Fruit Fly": "Maggots in fruits - yellow traps, targeted spray timing",
    "Bacterial Canker": "Trunk/branch disease - avoid winter damage, proper pruning",
    "Birds": "Fruit loss - nets, scarecrows, early harvest",
  },
};
