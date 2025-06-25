export default {
  name: "Cannabis Indica",
  category: "category.herbs",
  tags: ["tag.cannabis", "tag.annual"],
  legalNote: "Check local laws before cultivation. This information is for educational purposes only.",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seeds begin to sprout and roots emerge.",
          care: "Keep seeds warm (70-85°F/21-29°C) and moist in dark environment.",
        },
        seedling: {
          name: "Seedling",
          description: "Young plant develops first true leaves.",
          care: "Provide 18-24 hours of light, maintain humidity 65-70%.",
        },
        vegetative: {
          name: "Vegetative",
          description: "Rapid growth of leaves and stems.",
          care: "18/6 light cycle, high nitrogen feeding, training for bushiness.",
        },
        preflower: {
          name: "Pre-flower",
          description: "Sex determination.",
          care: "Continue vegetative care, identify and remove males.",
        },
        flowering: {
          name: "Flowering",
          description: "Flower development and maturation.",
          care: "12/12 light cycle, high phosphorus/potassium, lower humidity 40-50%.",
        },
        harvest: {
          name: "Harvest",
          description: "Harvest preparation and execution.",
          care: "Flush with plain water, monitor trichomes, harvest at peak potency.",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seeds begin to sprout and roots emerge.",
          care: "Keep seeds warm and moist, protect from direct sun.",
        },
        seedling: {
          name: "Seedling",
          description: "Establishing outdoors.",
          care: "Gradual sun exposure, protect from wind and pests.",
        },
        vegetative: {
          name: "Vegetative",
          description: "Natural light vegetative growth.",
          care: "Natural sunlight, train for size management, heavy feeding.",
        },
        preflower: {
          name: "Pre-flower",
          description: "Natural photoperiod trigger.",
          care: "Occurs naturally as days shorten, identify males.",
        },
        flowering: {
          name: "Flowering",
          description: "Outdoor flowering (6-12 weeks depending on strain).",
          care: "Natural light cycle, weather protection, pest monitoring.",
        },
        harvest: {
          name: "Harvest",
          description: "Outdoor harvest timing.",
          care: "Weather dependent, check trichomes, quick dry if rain.",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germination",
          description: "Seeds begin to sprout and roots emerge.",
          care: "Keep seeds warm and moist in controlled environment.",
        },
        seedling: {
          name: "Seedling",
          description: "Establishing in greenhouse.",
          care: "Controlled environment, protect from temperature extremes.",
        },
        vegetative: {
          name: "Vegetative",
          description: "Greenhouse vegetative growth.",
          care: "Natural light with temperature control, heavy feeding.",
        },
        preflower: {
          name: "Pre-flower",
          description: "Photoperiod management.",
          care: "Control light hours to trigger flowering, identify males.",
        },
        flowering: {
          name: "Flowering",
          description: "Greenhouse flowering (6-12 weeks depending on strain).",
          care: "Controlled environment, weather protection, pest monitoring.",
        },
        harvest: {
          name: "Harvest",
          description: "Greenhouse harvest timing.",
          care: "Controlled drying environment, check trichomes.",
        },
      },
    },
  },
  careTips: {
    watering: "Water when top inch of soil is dry, pH 6.0-7.0 in soil, 5.5-6.5 in hydro.",
    fertilizing: "High nitrogen in veg (3-1-2), high phosphorus in flower (1-3-2).",
    sunlight: "Indoor: 18/6 hours in vegetative, 12/12 hours in flowering. Outdoor: Natural sunlight.",
    spacing: "Indoor: 2-4 feet apart. Outdoor: 4-8 feet apart for full size.",
    support: "Indoor: SCROG nets, LST. Outdoor: Strong stakes for wind resistance.",
    humidity: "65-70% seedling, 40-50% vegetative, 40-45% flowering.",
    temperature: "70-85°F day, 65-80°F night.",
  },
  commonProblems: {
    "Nutrient Burn": "Yellow/brown leaf tips - reduce feeding concentration",
    "Light Burn": "Bleached tops - increase distance from lights",
    "Bud Rot": "Gray mold in buds - improve airflow and reduce humidity",
    "Spider Mites": "Tiny webs and spots - increase humidity, use predatory mites",
    "Powdery Mildew": "White powder on leaves - improve airflow, reduce humidity",
  },
};
