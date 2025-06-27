export default {
  name: "Lavender",
  category: "category.flowers",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        establishment: {
          name: "Establishment",
          description: "Root establishment and initial growth",
          care: "Keep soil moist, provide good drainage",
        },
        vegetative: {
          name: "Vegetative Growth",
          description: "Strong leaf and stem development",
          care: "Regular watering, avoid overwatering",
        },
        flowering: {
          name: "Flowering",
          description: "Bud formation and bloom",
          care: "Harvest flowers when buds are tight",
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
          care: "Keep soil moist, provide good drainage",
        },
        vegetative: {
          name: "Vegetative Growth",
          description: "Strong leaf and stem development",
          care: "Regular watering, avoid overwatering",
        },
        flowering: {
          name: "Flowering",
          description: "Bud formation and bloom",
          care: "Harvest flowers when buds are tight",
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
          care: "Keep soil moist, provide good drainage",
        },
        vegetative: {
          name: "Vegetative Growth",
          description: "Strong leaf and stem development",
          care: "Regular watering, avoid overwatering",
        },
        flowering: {
          name: "Flowering",
          description: "Bud formation and bloom",
          care: "Harvest flowers when buds are tight",
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
    watering: "Moderate watering, well-draining soil",
    fertilizing: "Light fertilization, avoid high nitrogen",
    sunlight: "Full sun (6+ hours daily)",
    spacing: "30-60 cm spacing",
    temperature: "Moderate, 15-25°C optimal",
    soilPH: "6.5-7.5",
    pruning: "Prune after flowering, shape in spring",
  },
  commonProblems: {
    "Root Rot": "Overwatering - improve drainage, reduce watering",
    "Powdery Mildew": "Fungal disease - improve air circulation",
    "Aphids": "Small pests - spray with water, beneficial insects",
  },
};
