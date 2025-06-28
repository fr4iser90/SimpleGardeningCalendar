export default {
  name: "Cannabis Autoflower",
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
          care: "Provide 18-24 hours of light, gentle care - no transplanting.",
        },
        vegetative: {
          name: "Vegetative",
          description: "Rapid early growth.",
          care: "18-24 hours light, light feeding, minimal stress.",
        },
        preflower: {
          name: "Pre-flower",
          description: "Automatic transition.",
          care: "Continue same light schedule, begin flower nutrients.",
        },
        flowering: {
          name: "Flowering",
          description: "Fast flowering.",
          care: "Continue 18-24 hour light, phosphorus/potassium feeding.",
        },
        harvest: {
          name: "Harvest",
          description: "Quick harvest cycle.",
          care: "Flush nutrients 1 week before harvest.",
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
          description: "Autoflower vegetative growth.",
          care: "Natural sunlight, LST training, heavy feeding.",
        },
        preflower: {
          name: "Pre-flower",
          description: "Autoflower transition.",
          care: "Autoflowering occurs regardless of light cycle.",
        },
        flowering: {
          name: "Flowering",
          description: "Autoflower outdoor flowering (6-10 weeks depending on strain).",
          care: "Natural light cycle, weather protection, pest monitoring.",
        },
        harvest: {
          name: "Harvest",
          description: "Autoflower harvest timing.",
          care: "Weather dependent, check trichomes, quick dry if rain.",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-15',
            end: '07-01',
            description: 'Early start for quick harvest',
          },
          harvestWindow: {
            start: '07-01',
            end: '10-15',
            description: 'Quick harvest after 70-90 days',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-15',
            end: '08-01',
            description: 'Extended planting season possible',
          },
          harvestWindow: {
            start: '06-01',
            end: '11-01',
            description: 'Quick harvest after 70-90 days',
          },
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
          description: "Autoflower greenhouse vegetative growth.",
          care: "Natural light with temperature control, LST training.",
        },
        preflower: {
          name: "Pre-flower",
          description: "Autoflower transition.",
          care: "Autoflowering occurs regardless of light cycle.",
        },
        flowering: {
          name: "Flowering",
          description: "Autoflower greenhouse flowering (6-10 weeks depending on strain).",
          care: "Controlled environment, weather protection, pest monitoring.",
        },
        harvest: {
          name: "Harvest",
          description: "Autoflower greenhouse harvest timing.",
          care: "Controlled drying environment, check trichomes.",
        },
      },
    },
  },
  careTips: {
    watering: "Light watering, autoflowers prefer less water than photoperiods.",
    fertilizing: "Light feeding schedule, 1/4 to 1/2 strength nutrients.",
    sunlight: "18-24 hours throughout entire cycle.",
    spacing: "1-2 feet apart, smaller plants.",
    support: "Minimal training, LST only if needed.",
    humidity: "60-65% throughout cycle.",
    temperature: "70-80°F consistent.",
  },
  commonProblems: {
    "Stunted Growth": "Stress sensitive - avoid transplanting and heavy training",
    "Nutrient Burn": "Very sensitive to nutrients - use light feeding",
    "Short Cycle": "Fast growth - be ready for quick transitions",
  },
};
