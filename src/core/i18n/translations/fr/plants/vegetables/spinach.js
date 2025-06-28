export default {
  name: "Épinards",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Germination des graines (7-14 jours)",
          care: "Sol humide, 15-20°C",
        },
        seedling: {
          name: "Semis",
          description: "Développement des premières feuilles",
          care: "Emplacement lumineux, maintenir humide",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Croissance des feuilles et formation rosette",
          care: "Arrosage régulier, éclaircir, désherber",
        },
        leaf_development: {
          name: "Développement des Feuilles",
          description: "Développement des grandes feuilles",
          care: "Maintenir humide, protéger de la chaleur",
        },
        harvest: {
          name: "Récolte",
          description: "Épinards prêts pour la récolte",
          care: "Récolter feuilles extérieures, laisser intérieures pousser",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Germination des graines (7-14 jours)",
          care: "Sol humide, 15-20°C",
        },
        seedling: {
          name: "Semis",
          description: "Développement des premières feuilles",
          care: "Emplacement lumineux, maintenir humide",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Croissance des feuilles et formation rosette",
          care: "Arrosage régulier, éclaircir, désherber",
        },
        leaf_development: {
          name: "Développement des Feuilles",
          description: "Développement des grandes feuilles",
          care: "Maintenir humide, protéger de la chaleur",
        },
        harvest: {
          name: "Récolte",
          description: "Épinards prêts pour la récolte",
          care: "Récolter feuilles extérieures, laisser intérieures pousser",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'Début du printemps, dès que le sol est praticable',
          },
          harvestWindow: {
            start: '05-01',
            end: '07-01',
            description: 'Récolte avant la chaleur',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '10-01',
            end: '12-01',
            description: 'Plantation d\'automne pour récolte hiver/printemps',
          },
          harvestWindow: {
            start: '01-15',
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
          description: "Germination des graines (7-14 jours)",
          care: "Sol humide, 15-20°C",
        },
        seedling: {
          name: "Semis",
          description: "Développement des premières feuilles",
          care: "Emplacement lumineux, maintenir humide",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Croissance des feuilles et formation rosette",
          care: "Arrosage régulier, éclaircir, désherber",
        },
        leaf_development: {
          name: "Développement des Feuilles",
          description: "Développement des grandes feuilles",
          care: "Maintenir humide, protéger de la chaleur",
        },
        harvest: {
          name: "Récolte",
          description: "Épinards prêts pour la récolte",
          care: "Récolter feuilles extérieures, laisser intérieures pousser",
        },
      },
    },
  },
  careTips: {
    watering: "Maintenir humide, pas trop mouillé",
    fertilizing: "Fertilisation légère, faible azote",
    sunlight: "Plein soleil à mi-ombre (min. 6 heures)",
    spacing: "Espacement 15-25 cm",
    temperature: "Frais, 15-20°C optimal",
    soilPH: "6.0-7.0",
    bolting: "Protéger de la chaleur, sinon monte en graine",
  },
  commonProblems: {
    "Montaison": "Trop de chaleur - ombrager, récolter tôt",
    "Limaces": "Mangent trous dans feuilles - granulés, pièges à bière",
    "Pucerons": "Petits ravageurs - introduire auxiliaires, solution savon",
  },
};
