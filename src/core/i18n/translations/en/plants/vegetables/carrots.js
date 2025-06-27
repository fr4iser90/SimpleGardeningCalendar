export default {
  name: "Carrots",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seed germination (10-21 days)",
          care: "Moist soil, 15-20°C",
        },
        leafing: {
          name: "Leaf Development",
          description: "First leaves development",
          care: "Bright location, keep evenly moist",
        },
        rooting: {
          name: "Root Development",
          description: "Carrot root thickening",
          care: "Keep evenly moist, loose soil",
        },
        maturing: {
          name: "Maturation",
          description: "Root enlargement and final growth",
          care: "Maintain even moisture to prevent splitting",
        },
        harvest: {
          name: "Harvest",
          description: "Carrots are ready for harvest",
          care: "Carefully pull out, don't damage",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seed germination (10-21 days)",
          care: "Moist soil, 15-20°C",
        },
        leafing: {
          name: "Leaf Development",
          description: "First leaves development",
          care: "Bright location, keep evenly moist",
        },
        rooting: {
          name: "Root Development",
          description: "Carrot root thickening",
          care: "Keep evenly moist, loose soil",
        },
        maturing: {
          name: "Maturation",
          description: "Root enlargement and final growth",
          care: "Maintain even moisture to prevent splitting",
        },
        harvest: {
          name: "Harvest",
          description: "Carrots are ready for harvest",
          care: "Carefully pull out, don't damage",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seed germination (10-21 days)",
          care: "Moist soil, 15-20°C",
        },
        leafing: {
          name: "Leaf Development",
          description: "First leaves development",
          care: "Bright location, keep evenly moist",
        },
        rooting: {
          name: "Root Development",
          description: "Carrot root thickening",
          care: "Keep evenly moist, loose soil",
        },
        maturing: {
          name: "Maturation",
          description: "Root enlargement and final growth",
          care: "Maintain even moisture to prevent splitting",
        },
        harvest: {
          name: "Harvest",
          description: "Carrots are ready for harvest",
          care: "Carefully pull out, don't damage",
        },
      },
    },
  },
  careTips: {
    watering: "Keep evenly moist, avoid waterlogging",
    fertilizing: "Light fertilization, low nitrogen",
    sunlight: "Full sun (min. 8 hours)",
    spacing: "5-8 cm spacing",
    temperature: "Cool to warm, 15-25°C optimal",
    soilPH: "6.0-7.0",
    soil: "Loose, sandy soil without stones",
  },
  commonProblems: {
    "Carrot Fly": "Maggots in roots - netting, mixed cropping",
    "Forked Roots": "Stony soil - prepare soil well",
    "Green Shoulders": "Exposed to light - cover with soil",
  },
};
