export default {
  name: "Lettuce",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seed germination (7-14 days)",
          care: "Moist soil, 15-20°C, light germinator",
        },
        leafing: {
          name: "Leaf Development",
          description: "First leaves development",
          care: "Bright location, keep evenly moist",
        },
        heading: {
          name: "Head Formation",
          description: "Development of lettuce head",
          care: "Keep evenly moist, protect from heat",
        },
        harvest: {
          name: "Harvest",
          description: "Lettuce is ready for harvest",
          care: "Harvest whole plant or individual leaves",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seed germination (7-14 days)",
          care: "Moist soil, 15-20°C, light germinator",
        },
        leafing: {
          name: "Leaf Development",
          description: "First leaves development",
          care: "Bright location, keep evenly moist",
        },
        heading: {
          name: "Head Formation",
          description: "Development of lettuce head",
          care: "Keep evenly moist, protect from heat",
        },
        harvest: {
          name: "Harvest",
          description: "Lettuce is ready for harvest",
          care: "Harvest whole plant or individual leaves",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seed germination (7-14 days)",
          care: "Moist soil, 15-20°C, light germinator",
        },
        leafing: {
          name: "Leaf Development",
          description: "First leaves development",
          care: "Bright location, keep evenly moist",
        },
        heading: {
          name: "Head Formation",
          description: "Development of lettuce head",
          care: "Keep evenly moist, protect from heat",
        },
        harvest: {
          name: "Harvest",
          description: "Lettuce is ready for harvest",
          care: "Harvest whole plant or individual leaves",
        },
      },
    },
  },
  careTips: {
    watering: "Keep evenly moist, avoid waterlogging",
    fertilizing: "Light fertilization, low nitrogen",
    sunlight: "Full sun to partial shade (min. 6 hours)",
    spacing: "20-30 cm spacing",
    temperature: "Cool, 15-20°C optimal",
    soilPH: "6.0-7.0",
    bolting: "Protect from heat, otherwise it bolts",
  },
  commonProblems: {
    "Bolting": "Too much heat - shade, harvest early",
    "Slugs": "Eat holes in leaves - slug pellets, beer traps",
    "Aphids": "Small pests - introduce beneficial insects, soap solution",
  },
};
