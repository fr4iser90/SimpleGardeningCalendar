export default {
  name: "Apple Tree",
  category: "category.fruit_trees",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    outdoor: {
      phases: {
        establishment: {
          name: "Establishment",
          description: "First year root development",
          care: "Regular watering, weed control, light pruning",
        },
        juvenile: {
          name: "Juvenile Phase",
          description: "Years 2-3 growth",
          care: "Formative pruning, continued care, no fruits yet",
        },
        productive: {
          name: "Productive Phase",
          description: "Productive years 4-20+",
          care: "Annual pruning, pest control, harvest timing",
        },
        dormancy: {
          name: "Dormancy",
          description: "Winter rest",
          care: "Winter pruning, dormant oil for pests",
        },
      },
    },
  },
  careTips: {
    watering: "Deep watering weekly, 2-5 cm per week during season",
    fertilizing: "Annual fertilization in spring, low nitrogen in fall",
    sunlight: "Full sun, at least 6 hours daily",
    spacing: "4-6 m spacing for large trees, 2-3 m for dwarf forms",
    pruning: "Annual winter pruning for shape and health",
    pollination: "Mostly cross-pollination needed with other apple varieties",
    soilPH: "6.0-7.0",
  },
  commonProblems: {
    "Apple Scab": "Fungal disease - choose resistant varieties, improve air circulation",
    "Codling Moth": "Worm in apple - pheromone traps, targeted spray timing",
    "Fire Blight": "Bacterial disease - remove infected shoots, low nitrogen",
    "Alternate Bearing": "Alternating crop years - thin in heavy years",
  },
};
