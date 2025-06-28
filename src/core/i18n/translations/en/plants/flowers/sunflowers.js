export default {
  name: "Sunflowers",
  category: "category.flowers",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seed germination (7-14 days)",
          care: "Warm soil, 20-25°C, keep moist",
        },
        seedling: {
          name: "Seedling",
          description: "First leaves development",
          care: "Bright location, keep evenly moist",
        },
        vegetative: {
          name: "Vegetative Growth",
          description: "Strong stem and leaf development",
          care: "Regular watering, provide support",
        },
        flowering: {
          name: "Flowering",
          description: "Flower head formation and bloom",
          care: "Full sun, regular watering",
        },
        seed_development: {
          name: "Seed Development",
          description: "Seeds mature in flower head",
          care: "Protect from birds, let seeds dry",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seed germination (7-14 days)",
          care: "Warm soil, 20-25°C, keep moist",
        },
        seedling: {
          name: "Seedling",
          description: "First leaves development",
          care: "Bright location, keep evenly moist",
        },
        vegetative: {
          name: "Vegetative Growth",
          description: "Strong stem and leaf development",
          care: "Regular watering, provide support",
        },
        flowering: {
          name: "Flowering",
          description: "Flower head formation and bloom",
          care: "Full sun, regular watering",
        },
        seed_development: {
          name: "Seed Development",
          description: "Seeds mature in flower head",
          care: "Protect from birds, let seeds dry",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-15',
            end: '06-15',
            description: 'After last frost, soil warm',
          },
          harvestWindow: {
            start: '08-01',
            end: '09-30',
            description: 'Harvest before frost',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '05-15',
            description: 'Early spring to late spring',
          },
          harvestWindow: {
            start: '07-01',
            end: '10-31',
            description: 'Long harvest period',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seed germination (7-14 days)",
          care: "Warm soil, 20-25°C, keep moist",
        },
        seedling: {
          name: "Seedling",
          description: "First leaves development",
          care: "Bright location, keep evenly moist",
        },
        vegetative: {
          name: "Vegetative Growth",
          description: "Strong stem and leaf development",
          care: "Regular watering, provide support",
        },
        flowering: {
          name: "Flowering",
          description: "Flower head formation and bloom",
          care: "Full sun, regular watering",
        },
        seed_development: {
          name: "Seed Development",
          description: "Seeds mature in flower head",
          care: "Protect from birds, let seeds dry",
        },
      },
    },
  },
  careTips: {
    watering: "Regular watering, deep root system",
    fertilizing: "Balanced fertilizer, avoid high nitrogen",
    sunlight: "Full sun (8+ hours daily)",
    spacing: "30-60 cm spacing",
    temperature: "Warm, 20-30°C optimal",
    soilPH: "6.0-7.5",
    support: "Stake tall varieties, protect from wind",
  },
  commonProblems: {
    "Birds": "Eat seeds - cover heads with netting",
    "Aphids": "Small pests - spray with water, beneficial insects",
    "Powdery Mildew": "Fungal disease - improve air circulation",
  },
};
