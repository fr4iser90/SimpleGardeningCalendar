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
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-01',
            description: 'Spring to early summer planting',
          },
          harvestWindow: {
            start: '06-15',
            end: '09-15',
            description: 'Harvest in summer',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-15',
            end: '05-01',
            description: 'Very early spring to late spring',
          },
          harvestWindow: {
            start: '05-15',
            end: '09-30',
            description: 'Harvest in summer',
          },
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
