export default {
  name: "Potatoes",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        sprouting: {
          name: "Sprouting",
          description: "First shoots appear",
          care: "Keep soil evenly moist, start hilling",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Strong leaf growth",
          care: "Regular watering, fertilizing, continue hilling",
        },
        tuberization: {
          name: "Tuber Formation",
          description: "Potatoes begin to grow",
          care: "Keep soil evenly moist, continue hilling",
        },
        bulking: {
          name: "Tuber Growth",
          description: "Potatoes getting larger",
          care: "Keep soil evenly moist, continue hilling",
        },
        maturation: {
          name: "Maturation",
          description: "Plants die back, potatoes ripen",
          care: "Reduce watering, let plants die back",
        },
        harvest: {
          name: "Harvest",
          description: "Potatoes ready for harvest",
          care: "Dig carefully, avoid damage",
        },
      },
    },
    outdoor: {
      phases: {
        sprouting: {
          name: "Sprouting",
          description: "First shoots appear",
          care: "Keep soil evenly moist, start hilling",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Strong leaf growth",
          care: "Regular watering, fertilizing, continue hilling",
        },
        tuberization: {
          name: "Tuber Formation",
          description: "Potatoes begin to grow",
          care: "Keep soil evenly moist, continue hilling",
        },
        bulking: {
          name: "Tuber Growth",
          description: "Potatoes getting larger",
          care: "Keep soil evenly moist, continue hilling",
        },
        maturation: {
          name: "Maturation",
          description: "Plants die back, potatoes ripen",
          care: "Reduce watering, let plants die back",
        },
        harvest: {
          name: "Harvest",
          description: "Potatoes ready for harvest",
          care: "Dig carefully, avoid damage",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'As soon as soil can be worked, after last frost',
          },
          harvestWindow: {
            start: '07-01',
            end: '09-30',
            description: 'Harvest before heavy frost',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-15',
            end: '04-15',
            description: 'Early planting possible, avoid summer heat',
          },
          harvestWindow: {
            start: '06-01',
            end: '08-31',
            description: 'Harvest before hot, dry period',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        sprouting: {
          name: "Sprouting",
          description: "First shoots appear",
          care: "Keep soil evenly moist, start hilling",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Strong leaf growth",
          care: "Regular watering, fertilizing, continue hilling",
        },
        tuberization: {
          name: "Tuber Formation",
          description: "Potatoes begin to grow",
          care: "Keep soil evenly moist, continue hilling",
        },
        bulking: {
          name: "Tuber Growth",
          description: "Potatoes getting larger",
          care: "Keep soil evenly moist, continue hilling",
        },
        maturation: {
          name: "Maturation",
          description: "Plants die back, potatoes ripen",
          care: "Reduce watering, let plants die back",
        },
        harvest: {
          name: "Harvest",
          description: "Potatoes ready for harvest",
          care: "Dig carefully, avoid damage",
        },
      },
    },
  },
  careTips: {
    watering: "Keep soil consistently moist, avoid waterlogging",
    fertilizing: "Regular potassium fertilizer",
    sunlight: "Full sun (min. 8 hours)",
    spacing: "30-40 cm spacing",
    temperature: "Cool to warm, 15-25°C optimal",
    soilPH: "5.5-6.5",
    hilling: "Regular hilling for more tubers",
  },
  commonProblems: {
    "Late Blight": "Fungal disease - resistant varieties, air circulation",
    "Colorado Potato Beetle": "Eat leaves - hand pick, beneficial insects",
    "Wireworms": "Larvae in tubers - netting, companion planting",
  },
};
