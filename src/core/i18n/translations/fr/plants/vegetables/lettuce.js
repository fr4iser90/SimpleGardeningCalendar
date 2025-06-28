export default {
  name: "Laitue",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Germination des graines (7-14 jours)",
          care: "Sol humide, 15-20°C, germinateur de lumière",
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
        head_formation: {
          name: "Formation de la Pomme",
          description: "Développement de la pomme de laitue",
          care: "Maintenir humide, protéger de la chaleur",
        },
        harvest: {
          name: "Récolte",
          description: "Laitue prête pour la récolte",
          care: "Récolter plante entière ou feuilles individuelles",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Germination des graines (7-14 jours)",
          care: "Sol humide, 15-20°C, germinateur de lumière",
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
        head_formation: {
          name: "Formation de la Pomme",
          description: "Développement de la pomme de laitue",
          care: "Maintenir humide, protéger de la chaleur",
        },
        harvest: {
          name: "Récolte",
          description: "Laitue prête pour la récolte",
          care: "Récolter plante entière ou feuilles individuelles",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-15',
            end: '07-01',
            description: 'Début du printemps à la mi-été, dès que le sol est praticable',
          },
          harvestWindow: {
            start: '05-01',
            end: '08-15',
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
          care: "Sol humide, 15-20°C, germinateur de lumière",
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
        head_formation: {
          name: "Formation de la Pomme",
          description: "Développement de la pomme de laitue",
          care: "Maintenir humide, protéger de la chaleur",
        },
        harvest: {
          name: "Récolte",
          description: "Laitue prête pour la récolte",
          care: "Récolter plante entière ou feuilles individuelles",
        },
      },
    },
  },
  careTips: {
    watering: "Maintenir humide, éviter l'engorgement",
    fertilizing: "Fertilisation légère, faible azote",
    sunlight: "Plein soleil à mi-ombre (min. 6 heures)",
    spacing: "Espacement 20-30 cm",
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
