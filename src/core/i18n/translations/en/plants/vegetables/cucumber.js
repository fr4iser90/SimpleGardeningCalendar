export default {
  name: "Cucumbers",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seed germination (7-10 days)",
          care: "Warm, moist soil, 20-25°C",
        },
        seedling: {
          name: "Seedling",
          description: "First leaves development",
          care: "Bright location, keep evenly moist",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Strong leaf and vine growth",
          care: "Regular watering, fertilizing, provide trellis",
        },
        flowering: {
          name: "Flowering",
          description: "Flower formation and pollination",
          care: "Promote air circulation, pollinate female flowers",
        },
        fruiting: {
          name: "Fruiting",
          description: "Cucumber development and ripening",
          care: "Even watering, harvest young cucumbers",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seed germination (7-10 days)",
          care: "Warm, moist soil, 20-25°C",
        },
        seedling: {
          name: "Seedling",
          description: "First leaves development",
          care: "Bright location, keep evenly moist",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Strong leaf and vine growth",
          care: "Regular watering, fertilizing, provide trellis",
        },
        flowering: {
          name: "Flowering",
          description: "Flower formation and pollination",
          care: "Promote air circulation, pollinate female flowers",
        },
        fruiting: {
          name: "Fruiting",
          description: "Cucumber development and ripening",
          care: "Even watering, harvest young cucumbers",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seed germination (7-10 days)",
          care: "Warm, moist soil, 20-25°C",
        },
        seedling: {
          name: "Seedling",
          description: "First leaves development",
          care: "Bright location, keep evenly moist",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Strong leaf and vine growth",
          care: "Regular watering, fertilizing, provide trellis",
        },
        flowering: {
          name: "Flowering",
          description: "Flower formation and pollination",
          care: "Promote air circulation, pollinate female flowers",
        },
        fruiting: {
          name: "Fruiting",
          description: "Cucumber development and ripening",
          care: "Even watering, harvest young cucumbers",
        },
      },
    },
  },
  careTips: {
    watering: "Keep evenly moist, avoid waterlogging",
    fertilizing: "Regular vegetable fertilizer, balanced",
    sunlight: "Full sun (min. 8 hours)",
    spacing: "30-60 cm spacing",
    temperature: "Warm, 20-30°C optimal",
    soilPH: "6.0-7.0",
    support: "Trellis or support for better growth",
  },
  commonProblems: {
    "Powdery Mildew": "Fungal disease - improve air circulation, resistant varieties",
    "Cucumber Mosaic Virus": "Viral disease - control aphids, remove diseased plants",
    "Bitter Cucumbers": "Stress from uneven watering - maintain even moisture",
  },
};
