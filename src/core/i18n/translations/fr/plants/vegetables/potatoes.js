export default {
  name: "Pommes de Terre",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        planting: {
          name: "Plantation",
          description: "Planter les pommes de terre en terre",
          care: "Yeux vers le haut, 10-15 cm de profondeur, 30 cm d'espacement",
        },
        sprouting: {
          name: "Germination",
          description: "Premières pousses apparaissent",
          care: "Maintenir humide, butter la terre",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Forte croissance des feuilles",
          care: "Arrosage régulier, fertilisation, butter la terre",
        },
        flowering: {
          name: "Floraison",
          description: "Formation des fleurs et développement des tubercules",
          care: "Maintenir humide, butter la terre",
        },
        tuber_development: {
          name: "Développement des Tubercules",
          description: "Pommes de terre poussent sous terre",
          care: "Maintenir humide, butter la terre",
        },
        harvest: {
          name: "Récolte",
          description: "Pommes de terre prêtes pour la récolte",
          care: "Déterrer délicatement, ne pas abîmer",
        },
      },
    },
    outdoor: {
      phases: {
        planting: {
          name: "Plantation",
          description: "Planter les pommes de terre en terre",
          care: "Yeux vers le haut, 10-15 cm de profondeur, 30 cm d'espacement",
        },
        sprouting: {
          name: "Germination",
          description: "Premières pousses apparaissent",
          care: "Maintenir humide, butter la terre",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Forte croissance des feuilles",
          care: "Arrosage régulier, fertilisation, butter la terre",
        },
        flowering: {
          name: "Floraison",
          description: "Formation des fleurs et développement des tubercules",
          care: "Maintenir humide, butter la terre",
        },
        tuber_development: {
          name: "Développement des Tubercules",
          description: "Pommes de terre poussent sous terre",
          care: "Maintenir humide, butter la terre",
        },
        harvest: {
          name: "Récolte",
          description: "Pommes de terre prêtes pour la récolte",
          care: "Déterrer délicatement, ne pas abîmer",
        },
      },
    },
    greenhouse: {
      phases: {
        planting: {
          name: "Plantation",
          description: "Planter les pommes de terre en terre",
          care: "Yeux vers le haut, 10-15 cm de profondeur, 30 cm d'espacement",
        },
        sprouting: {
          name: "Germination",
          description: "Premières pousses apparaissent",
          care: "Maintenir humide, butter la terre",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Forte croissance des feuilles",
          care: "Arrosage régulier, fertilisation, butter la terre",
        },
        flowering: {
          name: "Floraison",
          description: "Formation des fleurs et développement des tubercules",
          care: "Maintenir humide, butter la terre",
        },
        tuber_development: {
          name: "Développement des Tubercules",
          description: "Pommes de terre poussent sous terre",
          care: "Maintenir humide, butter la terre",
        },
        harvest: {
          name: "Récolte",
          description: "Pommes de terre prêtes pour la récolte",
          care: "Déterrer délicatement, ne pas abîmer",
        },
      },
    },
  },
  careTips: {
    watering: "Maintenir humide, pas trop mouillé",
    fertilizing: "Engrais potassique régulier",
    sunlight: "Plein soleil (min. 8 heures)",
    spacing: "Espacement 30-40 cm",
    temperature: "Frais à chaud, 15-25°C optimal",
    soilPH: "5.5-6.5",
    hilling: "Butter régulièrement la terre pour plus de tubercules",
  },
  commonProblems: {
    "Mildiou": "Maladie fongique - variétés résistantes, circulation d'air",
    "Doryphore": "Mangent les feuilles - ramasser à la main, auxiliaires",
    "Vers Fil de Fer": "Asticots dans tubercules - filet, culture associée",
  },
};
