export default {
  name: "Tomates",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Germination des graines (7-14 jours)",
          care: "Sol chaud et humide, 20-25°C",
        },
        seedling: {
          name: "Semis",
          description: "Développement des premières feuilles",
          care: "Emplacement lumineux, maintenir humide",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Forte croissance des feuilles et tiges",
          care: "Arrosage régulier, fertilisation, tuteurage",
        },
        flowering: {
          name: "Floraison",
          description: "Formation des fleurs et pollinisation",
          care: "Favoriser la circulation d'air, secouer les fleurs",
        },
        fruiting: {
          name: "Fructification",
          description: "Développement et maturation des tomates",
          care: "Arrosage régulier, récolter fruits mûrs",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Germination des graines (7-14 jours)",
          care: "Sol chaud et humide, 20-25°C",
        },
        seedling: {
          name: "Semis",
          description: "Développement des premières feuilles",
          care: "Emplacement lumineux, maintenir humide",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Forte croissance des feuilles et tiges",
          care: "Arrosage régulier, fertilisation, tuteurage",
        },
        flowering: {
          name: "Floraison",
          description: "Formation des fleurs et pollinisation",
          care: "Favoriser la circulation d'air, secouer les fleurs",
        },
        fruiting: {
          name: "Fructification",
          description: "Développement et maturation des tomates",
          care: "Arrosage régulier, récolter fruits mûrs",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germination",
          description: "Germination des graines (7-14 jours)",
          care: "Sol chaud et humide, 20-25°C",
        },
        seedling: {
          name: "Semis",
          description: "Développement des premières feuilles",
          care: "Emplacement lumineux, maintenir humide",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Forte croissance des feuilles et tiges",
          care: "Arrosage régulier, fertilisation, tuteurage",
        },
        flowering: {
          name: "Floraison",
          description: "Formation des fleurs et pollinisation",
          care: "Favoriser la circulation d'air, secouer les fleurs",
        },
        fruiting: {
          name: "Fructification",
          description: "Développement et maturation des tomates",
          care: "Arrosage régulier, récolter fruits mûrs",
        },
      },
    },
  },
  careTips: {
    watering: "Maintenir humide, éviter l'engorgement",
    fertilizing: "Engrais légumes régulier, équilibré",
    sunlight: "Plein soleil (min. 8 heures)",
    spacing: "Espacement 45-60 cm",
    temperature: "Chaud, 20-30°C optimal",
    soilPH: "6.0-7.0",
    support: "Tuteurs ou treillis pour stabilité",
  },
  commonProblems: {
    "Nécrose Apicale": "Carence en calcium - arroser régulièrement, vérifier pH",
    "Pucerons": "Petits ravageurs - introduire auxiliaires, solution savon",
    "Mildiou": "Maladie fongique - améliorer circulation d'air, variétés résistantes",
  },
};
