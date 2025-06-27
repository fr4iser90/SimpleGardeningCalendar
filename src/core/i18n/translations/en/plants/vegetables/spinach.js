export default {
  name: "Spinach",
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
        harvest: {
          name: "Harvest",
          description: "Spinach is ready for harvest",
          care: "Harvest outer leaves or whole plant",
        },
        bolting: {
          name: "Bolting",
          description: "Plant goes to seed",
          care: "Harvest quickly before leaves become bitter",
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
        harvest: {
          name: "Harvest",
          description: "Spinach is ready for harvest",
          care: "Harvest outer leaves or whole plant",
        },
        bolting: {
          name: "Bolting",
          description: "Plant goes to seed",
          care: "Harvest quickly before leaves become bitter",
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
        harvest: {
          name: "Harvest",
          description: "Spinach is ready for harvest",
          care: "Harvest outer leaves or whole plant",
        },
        bolting: {
          name: "Bolting",
          description: "Plant goes to seed",
          care: "Harvest quickly before leaves become bitter",
        },
      },
    },
  },
  careTips: {
    watering: "Keep evenly moist, avoid waterlogging",
    fertilizing: "Light fertilization, high nitrogen",
    sunlight: "Full sun to partial shade (min. 6 hours)",
    spacing: "10-15 cm spacing",
    temperature: "Cool, 15-20°C optimal",
    soilPH: "6.0-7.0",
    bolting: "Protect from heat, otherwise it bolts",
  },
  commonProblems: {
    "Bolting": "Too much heat - shade, harvest early",
    "Downy Mildew": "Fungal disease - improve air circulation",
    "Leaf Miners": "Tunnels in leaves - remove affected leaves",
  },
};
