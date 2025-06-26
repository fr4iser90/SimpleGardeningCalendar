export default {
  name: "Raspberries",
  category: "category.fruits",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        establishment: {
          name: "Establishment",
          description: "Root development (first 60 days)",
          care: "Remove flowers in first year, focus on roots",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Cane growth and development",
          care: "Tie canes to trellis, remove weak shoots",
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
          care: "Prune old canes, mulch for winter protection",
        },
      },
    },
    outdoor: {
      phases: {
        establishment: {
          name: "Establishment",
          description: "Root development (first 60 days)",
          care: "Remove flowers in first year, focus on roots",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Cane growth and development",
          care: "Tie canes to trellis, remove weak shoots",
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
          care: "Prune old canes, mulch for winter protection",
        },
      },
    },
    greenhouse: {
      phases: {
        establishment: {
          name: "Establishment",
          description: "Root development (first 60 days)",
          care: "Remove flowers in first year, focus on roots",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Cane growth and development",
          care: "Tie canes to trellis, remove weak shoots",
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
          care: "Prune old canes, mulch for winter protection",
        },
      },
    },
  },
  careTips: {
    watering: "Keep soil consistently moist, no overhead watering",
    fertilizing: "Balanced fertilization in spring, low nitrogen",
    sunlight: "Full sun (min. 6 hours)",
    spacing: "60-90 cm spacing",
    temperature: "Cool crop, protect from heat",
    soilPH: "5.5-6.5",
    trellising: "Tie canes to trellis or wire system",
  },
  commonProblems: {
    "Cane Borer": "Insect damage to canes - remove infected canes",
    "Gray Mold": "Fungus on fruits - improve air circulation",
    "Spider Mites": "Small pests on leaves - increase humidity, use beneficial insects",
  },
};
