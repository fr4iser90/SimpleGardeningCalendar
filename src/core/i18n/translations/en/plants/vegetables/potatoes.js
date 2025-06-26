export default {
  name: "Potatoes",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        planting: {
          name: "Planting",
          description: "Plant potatoes in soil",
          care: "Eyes up, 10-15 cm deep, 30 cm spacing",
        },
        sprouting: {
          name: "Sprouting",
          description: "First shoots appear",
          care: "Keep evenly moist, hill soil",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Strong leaf growth",
          care: "Regular watering, fertilizing, hill soil",
        },
        flowering: {
          name: "Flowering",
          description: "Flower formation and tuber development",
          care: "Keep evenly moist, hill soil",
        },
        tuber_development: {
          name: "Tuber Development",
          description: "Potatoes grow underground",
          care: "Keep evenly moist, hill soil",
        },
        harvest: {
          name: "Harvest",
          description: "Potatoes are ready for harvest",
          care: "Dig carefully, don't damage",
        },
      },
    },
    outdoor: {
      phases: {
        planting: {
          name: "Planting",
          description: "Plant potatoes in soil",
          care: "Eyes up, 10-15 cm deep, 30 cm spacing",
        },
        sprouting: {
          name: "Sprouting",
          description: "First shoots appear",
          care: "Keep evenly moist, hill soil",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Strong leaf growth",
          care: "Regular watering, fertilizing, hill soil",
        },
        flowering: {
          name: "Flowering",
          description: "Flower formation and tuber development",
          care: "Keep evenly moist, hill soil",
        },
        tuber_development: {
          name: "Tuber Development",
          description: "Potatoes grow underground",
          care: "Keep evenly moist, hill soil",
        },
        harvest: {
          name: "Harvest",
          description: "Potatoes are ready for harvest",
          care: "Dig carefully, don't damage",
        },
      },
    },
    greenhouse: {
      phases: {
        planting: {
          name: "Planting",
          description: "Plant potatoes in soil",
          care: "Eyes up, 10-15 cm deep, 30 cm spacing",
        },
        sprouting: {
          name: "Sprouting",
          description: "First shoots appear",
          care: "Keep evenly moist, hill soil",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Strong leaf growth",
          care: "Regular watering, fertilizing, hill soil",
        },
        flowering: {
          name: "Flowering",
          description: "Flower formation and tuber development",
          care: "Keep evenly moist, hill soil",
        },
        tuber_development: {
          name: "Tuber Development",
          description: "Potatoes grow underground",
          care: "Keep evenly moist, hill soil",
        },
        harvest: {
          name: "Harvest",
          description: "Potatoes are ready for harvest",
          care: "Dig carefully, don't damage",
        },
      },
    },
  },
  careTips: {
    watering: "Keep evenly moist, not too wet",
    fertilizing: "Regular potassium fertilizer",
    sunlight: "Full sun (min. 8 hours)",
    spacing: "30-40 cm spacing",
    temperature: "Cool to warm, 15-25°C optimal",
    soilPH: "5.5-6.5",
    hilling: "Regularly hill soil for more tubers",
  },
  commonProblems: {
    "Late Blight": "Fungal disease - resistant varieties, air circulation",
    "Colorado Potato Beetle": "Eat leaves - hand pick, beneficial insects",
    "Wireworms": "Maggots in tubers - netting, mixed cropping",
  },
};
