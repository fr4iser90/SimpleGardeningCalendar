export default {
  name: "Lavender",
  category: "category.flowers",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seeds begin to sprout and roots emerge.",
          care: "Keep seeds warm (65-75°F/18-24°C) and moist, light needed.",
        },
        seedling: {
          name: "Seedling",
          description: "Young plant develops first true leaves.",
          care: "Lots of light, water sparingly, avoid overwatering.",
        },
        vegetative: {
          name: "Vegetative",
          description: "Rapid growth of leaves and stems.",
          care: "Lots of light, moderate watering, prune for bushiness.",
        },
        flowering: {
          name: "Flowering",
          description: "Plant begins to flower.",
          care: "Lots of sun, water sparingly, harvest flowers for fragrance.",
        },
        harvest: {
          name: "Harvest",
          description: "Harvest flowers and leaves.",
          care: "Harvest flowers when they open, hang to dry.",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seeds begin to sprout and roots emerge.",
          care: "Keep seeds warm and moist, protect from frost.",
        },
        seedling: {
          name: "Seedling",
          description: "Establishing outdoors.",
          care: "Gradual sun exposure, protect from wind.",
        },
        vegetative: {
          name: "Vegetative",
          description: "Rapid growth outdoors.",
          care: "Full sun, water sparingly, prune for bushiness.",
        },
        flowering: {
          name: "Flowering",
          description: "Plant begins to flower.",
          care: "Full sun, water sparingly, harvest flowers for fragrance.",
        },
        harvest: {
          name: "Harvest",
          description: "Harvest flowers and leaves.",
          care: "Harvest flowers when they open, hang to dry.",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seeds begin to sprout and roots emerge.",
          care: "Keep seeds warm and moist in greenhouse.",
        },
        seedling: {
          name: "Seedling",
          description: "Establishing in greenhouse.",
          care: "Controlled environment, water sparingly.",
        },
        vegetative: {
          name: "Vegetative",
          description: "Rapid growth in greenhouse.",
          care: "Lots of light, water sparingly, prune for bushiness.",
        },
        flowering: {
          name: "Flowering",
          description: "Plant begins to flower.",
          care: "Lots of light, water sparingly, harvest flowers for fragrance.",
        },
        harvest: {
          name: "Harvest",
          description: "Harvest flowers and leaves.",
          care: "Harvest flowers when they open, hang to dry.",
        },
      },
    },
  },
  careTips: {
    watering: "Water sparingly, let soil dry between waterings.",
    fertilizing: "Light feeding in spring with organic fertilizer.",
    sunlight: "Full sun, at least 6 hours of direct sun.",
    spacing: "12-24 inches apart between plants.",
    support: "Usually not needed, can be staked in strong winds.",
    humidity: "Low humidity preferred.",
    temperature: "60-75°F optimal, hardy to 5°F.",
  },
  commonProblems: {
    "Root Rot": "Yellow leaves, wilting - water less, improve drainage",
    "Powdery Mildew": "White powder on leaves - improve air circulation",
    "Spider Mites": "Tiny webs and spots - increase humidity",
    "Overwatering": "Wilting leaves - reduce watering, improve drainage",
  },
};
