export default {
  name: "Basil",
  category: "category.herbs",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seeds begin to sprout and roots emerge.",
          care: "Keep seeds warm (70-75°F/21-24°C) and moist.",
        },
        seedling: {
          name: "Seedling",
          description: "Young plant develops first true leaves.",
          care: "Lots of light, regular watering, avoid overwatering.",
        },
        vegetative: {
          name: "Vegetative",
          description: "Rapid growth of leaves and stems.",
          care: "Lots of light, regular watering, harvest leaves for bushiness.",
        },
        flowering: {
          name: "Flowering",
          description: "Plant begins to flower.",
          care: "Remove flowers for better flavor, continue harvesting.",
        },
        harvest: {
          name: "Harvest",
          description: "Continuous harvest of leaves.",
          care: "Harvest regularly, remove flowers, freeze for winter.",
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
          care: "Full sun, regular watering, harvest leaves.",
        },
        flowering: {
          name: "Flowering",
          description: "Plant begins to flower.",
          care: "Remove flowers for better flavor, continue harvesting.",
        },
        harvest: {
          name: "Harvest",
          description: "Continuous harvest until frost.",
          care: "Harvest regularly, freeze or dry for winter.",
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
          care: "Controlled environment, regular watering.",
        },
        vegetative: {
          name: "Vegetative",
          description: "Rapid growth in greenhouse.",
          care: "Lots of light, regular watering, harvest leaves.",
        },
        flowering: {
          name: "Flowering",
          description: "Plant begins to flower.",
          care: "Remove flowers for better flavor, continue harvesting.",
        },
        harvest: {
          name: "Harvest",
          description: "Continuous harvest in greenhouse.",
          care: "Harvest regularly, freeze or dry for winter.",
        },
      },
    },
  },
  careTips: {
    watering: "Water regularly, keep soil moist but not soggy.",
    fertilizing: "Light feeding every 2-3 weeks with organic fertilizer.",
    sunlight: "Full sun to partial shade, at least 6 hours of sun.",
    spacing: "8-12 inches apart between plants.",
    support: "Usually not needed, can be staked in strong winds.",
    humidity: "Normal humidity, not too humid.",
    temperature: "70-80°F optimal, frost sensitive.",
  },
  commonProblems: {
    "Downy Mildew": "Yellow spots on leaves - improve air circulation",
    "Aphids": "Small insects on leaves - rinse with water or soap solution",
    "Frost Damage": "Black leaves from frost - protect from frost",
    "Bolt": "Early flowering in heat - remove flowers, keep cooler",
  },
};
