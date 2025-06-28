export default {
  name: "Concombres",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Germination des graines (7-10 jours)",
          care: "Sol chaud et humide, 20-25°C",
        },
        seedling: {
          name: "Semis",
          description: "Développement des premières feuilles",
          care: "Emplacement lumineux, maintenir humide",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Forte croissance des feuilles et vrilles",
          care: "Arrosage régulier, fertilisation, treillage",
        },
        flowering: {
          name: "Floraison",
          description: "Formation des fleurs et pollinisation",
          care: "Favoriser circulation d'air, polliniser fleurs femelles",
        },
        fruiting: {
          name: "Fructification",
          description: "Développement et maturation des concombres",
          care: "Arrosage régulier, récolter jeunes concombres",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Germination des graines (7-10 jours)",
          care: "Sol chaud et humide, 20-25°C",
        },
        seedling: {
          name: "Semis",
          description: "Développement des premières feuilles",
          care: "Emplacement lumineux, maintenir humide",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Forte croissance des feuilles et vrilles",
          care: "Arrosage régulier, fertilisation, treillage",
        },
        flowering: {
          name: "Floraison",
          description: "Formation des fleurs et pollinisation",
          care: "Favoriser circulation d'air, polliniser fleurs femelles",
        },
        fruiting: {
          name: "Fructification",
          description: "Développement et maturation des concombres",
          care: "Arrosage régulier, récolter jeunes concombres",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '05-15',
            end: '06-15',
            description: 'Après le dernier gel, sol chaud (18°C+)',
          },
          harvestWindow: {
            start: '07-01',
            end: '09-30',
            description: 'Récolte avant le premier gel',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '04-01',
            end: '05-15',
            description: 'Démarrage plus précoce possible, sol chaud',
          },
          harvestWindow: {
            start: '06-01',
            end: '09-30',
            description: 'Saison de récolte plus longue',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germination",
          description: "Germination des graines (7-10 jours)",
          care: "Sol chaud et humide, 20-25°C",
        },
        seedling: {
          name: "Semis",
          description: "Développement des premières feuilles",
          care: "Emplacement lumineux, maintenir humide",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Forte croissance des feuilles et vrilles",
          care: "Arrosage régulier, fertilisation, treillage",
        },
        flowering: {
          name: "Floraison",
          description: "Formation des fleurs et pollinisation",
          care: "Favoriser circulation d'air, polliniser fleurs femelles",
        },
        fruiting: {
          name: "Fructification",
          description: "Développement et maturation des concombres",
          care: "Arrosage régulier, récolter jeunes concombres",
        },
      },
    },
  },
  careTips: {
    watering: "Maintenir humide, éviter l'engorgement",
    fertilizing: "Engrais légumes régulier, équilibré",
    sunlight: "Plein soleil (min. 8 heures)",
    spacing: "Espacement 30-60 cm",
    temperature: "Chaud, 20-30°C optimal",
    soilPH: "6.0-7.0",
    support: "Treillage ou support pour meilleure croissance",
  },
  commonProblems: {
    "Oïdium": "Maladie fongique - améliorer circulation d'air, variétés résistantes",
    "Virus de la Mosaïque": "Maladie virale - contrôler pucerons, enlever plantes malades",
    "Concombres Amers": "Stress arrosage irrégulier - maintenir humidité régulière",
  },
};
