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
