export default {
  name: "Chou Frisé",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Germination des graines (5-10 jours)",
          care: "Sol humide, 15-20°C",
        },
        seedling: {
          name: "Semis",
          description: "Développement des premières feuilles",
          care: "Emplacement lumineux, maintenir humide",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Forte croissance des feuilles",
          care: "Arrosage régulier, fertilisation, désherber",
        },
        leaf_development: {
          name: "Développement des Feuilles",
          description: "Développement des grandes feuilles",
          care: "Maintenir humide, protéger du gel",
        },
        harvest: {
          name: "Récolte",
          description: "Feuilles prêtes pour la récolte",
          care: "Récolter feuilles extérieures, laisser intérieures pousser",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Germination des graines (5-10 jours)",
          care: "Sol humide, 15-20°C",
        },
        seedling: {
          name: "Semis",
          description: "Développement des premières feuilles",
          care: "Emplacement lumineux, maintenir humide",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Forte croissance des feuilles",
          care: "Arrosage régulier, fertilisation, désherber",
        },
        leaf_development: {
          name: "Développement des Feuilles",
          description: "Développement des grandes feuilles",
          care: "Maintenir humide, protéger du gel",
        },
        harvest: {
          name: "Récolte",
          description: "Feuilles prêtes pour la récolte",
          care: "Récolter feuilles extérieures, laisser intérieures pousser",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '07-01',
            description: 'Début du printemps à la mi-été, après que le sol soit praticable',
          },
          harvestWindow: {
            start: '06-15',
            end: '11-15',
            description: 'Récolte jusqu\'au gel fort, plus doux après un léger gel',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '09-01',
            end: '11-01',
            description: 'Plantation d\'automne pour récolte hiver/printemps',
          },
          harvestWindow: {
            start: '12-01',
            end: '04-15',
            description: 'Récolte avant que la chaleur provoque la montée en graines',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germination",
          description: "Germination des graines (5-10 jours)",
          care: "Sol humide, 15-20°C",
        },
        seedling: {
          name: "Semis",
          description: "Développement des premières feuilles",
          care: "Emplacement lumineux, maintenir humide",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Forte croissance des feuilles",
          care: "Arrosage régulier, fertilisation, désherber",
        },
        leaf_development: {
          name: "Développement des Feuilles",
          description: "Développement des grandes feuilles",
          care: "Maintenir humide, protéger du gel",
        },
        harvest: {
          name: "Récolte",
          description: "Feuilles prêtes pour la récolte",
          care: "Récolter feuilles extérieures, laisser intérieures pousser",
        },
      },
    },
  },
  careTips: {
    watering: "Maintenir humide, pas trop mouillé",
    fertilizing: "Engrais azoté régulier",
    sunlight: "Plein soleil à mi-ombre (min. 6 heures)",
    spacing: "Espacement 30-45 cm",
    temperature: "Frais à chaud, 10-25°C optimal",
    soilPH: "6.0-7.5",
    frost: "Tolère gel léger, devient plus doux",
  },
  commonProblems: {
    "Hernie du Chou": "Maladie fongique - élever pH, variétés résistantes",
    "Mouche du Chou": "Aasticots sur racines - filet, culture associée",
    "Pucerons": "Petits ravageurs - introduire auxiliaires, solution savon",
  },
};
