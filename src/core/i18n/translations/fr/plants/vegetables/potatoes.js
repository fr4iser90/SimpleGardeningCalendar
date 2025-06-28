export default {
  name: "Pommes de terre",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        sprouting: {
          name: "Germination",
          description: "Premières pousses apparaissent",
          care: "Garder sol humide, commencer le buttage",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Forte croissance des feuilles",
          care: "Arrosage régulier, fertilisation, continuer le buttage",
        },
        tuberization: {
          name: "Formation des Tubercules",
          description: "Les pommes de terre commencent à pousser",
          care: "Garder sol humide, continuer le buttage",
        },
        bulking: {
          name: "Croissance des Tubercules",
          description: "Les pommes de terre grossissent",
          care: "Garder sol humide, continuer le buttage",
        },
        maturation: {
          name: "Maturation",
          description: "Les plantes se dessèchent, les pommes de terre mûrissent",
          care: "Réduire l'arrosage, laisser les plantes se dessécher",
        },
        harvest: {
          name: "Récolte",
          description: "Les pommes de terre sont prêtes à récolter",
          care: "Creuser avec précaution, éviter les dommages",
        },
      },
    },
    outdoor: {
      phases: {
        sprouting: {
          name: "Germination",
          description: "Premières pousses apparaissent",
          care: "Garder sol humide, commencer le buttage",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Forte croissance des feuilles",
          care: "Arrosage régulier, fertilisation, continuer le buttage",
        },
        tuberization: {
          name: "Formation des Tubercules",
          description: "Les pommes de terre commencent à pousser",
          care: "Garder sol humide, continuer le buttage",
        },
        bulking: {
          name: "Croissance des Tubercules",
          description: "Les pommes de terre grossissent",
          care: "Garder sol humide, continuer le buttage",
        },
        maturation: {
          name: "Maturation",
          description: "Les plantes se dessèchent, les pommes de terre mûrissent",
          care: "Réduire l'arrosage, laisser les plantes se dessécher",
        },
        harvest: {
          name: "Récolte",
          description: "Les pommes de terre sont prêtes à récolter",
          care: "Creuser avec précaution, éviter les dommages",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'Dès que le sol est praticable, après le dernier gel',
          },
          harvestWindow: {
            start: '07-01',
            end: '09-30',
            description: 'Récolte avant le gel fort',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-15',
            end: '04-15',
            description: 'Plantation précoce possible, éviter la chaleur estivale',
          },
          harvestWindow: {
            start: '06-01',
            end: '08-31',
            description: 'Récolte avant la période chaude et sèche',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        sprouting: {
          name: "Germination",
          description: "Premières pousses apparaissent",
          care: "Garder sol humide, commencer le buttage",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Forte croissance des feuilles",
          care: "Arrosage régulier, fertilisation, continuer le buttage",
        },
        tuberization: {
          name: "Formation des Tubercules",
          description: "Les pommes de terre commencent à pousser",
          care: "Garder sol humide, continuer le buttage",
        },
        bulking: {
          name: "Croissance des Tubercules",
          description: "Les pommes de terre grossissent",
          care: "Garder sol humide, continuer le buttage",
        },
        maturation: {
          name: "Maturation",
          description: "Les plantes se dessèchent, les pommes de terre mûrissent",
          care: "Réduire l'arrosage, laisser les plantes se dessécher",
        },
        harvest: {
          name: "Récolte",
          description: "Les pommes de terre sont prêtes à récolter",
          care: "Creuser avec précaution, éviter les dommages",
        },
      },
    },
  },
  careTips: {
    watering: "Garder sol humide, éviter l'engorgement",
    fertilizing: "Fertilisation potassique régulière",
    sunlight: "Plein soleil (min. 8 heures)",
    spacing: "Espacement 30-40 cm",
    temperature: "Frais à chaud, 15-25°C optimal",
    soilPH: "5.5-6.5",
    hilling: "Buttage régulier pour plus de tubercules",
  },
  commonProblems: {
    "Mildiou": "Maladie fongique - variétés résistantes, circulation d'air",
    "Doryphore": "Mangent les feuilles - ramassage manuel, insectes bénéfiques",
    "Vers Fil de Fer": "Larves dans tubercules - filet, culture associée",
  },
};
