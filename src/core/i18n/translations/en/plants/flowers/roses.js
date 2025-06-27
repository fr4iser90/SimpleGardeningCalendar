export default {
  name: "Roses",
  category: "category.flowers",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        establishment: {
          name: "Establishment",
          description: "Root establishment and initial growth",
          care: "Keep soil moist, provide support",
        },
        vegetative: {
          name: "Vegetative Growth",
          description: "Strong leaf and stem development",
          care: "Regular watering, fertilizing, pruning",
        },
        flowering: {
          name: "Flowering",
          description: "Bud formation and bloom",
          care: "Deadhead spent flowers, maintain moisture",
        },
        dormancy: {
          name: "Dormancy",
          description: "Winter rest period",
          care: "Reduce watering, protect from frost",
        },
      },
    },
    outdoor: {
      phases: {
        establishment: {
          name: "Establishment",
          description: "Root establishment and initial growth",
          care: "Keep soil moist, provide support",
        },
        vegetative: {
          name: "Vegetative Growth",
          description: "Strong leaf and stem development",
          care: "Regular watering, fertilizing, pruning",
        },
        flowering: {
          name: "Flowering",
          description: "Bud formation and bloom",
          care: "Deadhead spent flowers, maintain moisture",
        },
        dormancy: {
          name: "Dormancy",
          description: "Winter rest period",
          care: "Reduce watering, protect from frost",
        },
      },
    },
    greenhouse: {
      phases: {
        establishment: {
          name: "Establishment",
          description: "Root establishment and initial growth",
          care: "Keep soil moist, provide support",
        },
        vegetative: {
          name: "Vegetative Growth",
          description: "Strong leaf and stem development",
          care: "Regular watering, fertilizing, pruning",
        },
        flowering: {
          name: "Flowering",
          description: "Bud formation and bloom",
          care: "Deadhead spent flowers, maintain moisture",
        },
        dormancy: {
          name: "Dormancy",
          description: "Winter rest period",
          care: "Reduce watering, protect from frost",
        },
      },
    },
  },
  careTips: {
    watering: "Deep watering, avoid wetting leaves",
    fertilizing: "Rose fertilizer, balanced nutrients",
    sunlight: "Full sun (6+ hours daily)",
    spacing: "60-90 cm spacing",
    temperature: "Moderate, 15-25°C optimal",
    soilPH: "6.0-6.5",
    pruning: "Prune in early spring, remove dead wood",
  },
  commonProblems: {
    "Black Spot": "Fungal disease - improve air circulation, fungicide",
    "Aphids": "Small pests - spray with water, beneficial insects",
    "Powdery Mildew": "White powder on leaves - fungicide, air circulation",
  },
};
