export default {
  name: "Carottes",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Germination des graines (10-21 jours)",
          care: "Sol humide, 15-20°C",
        },
        seedling: {
          name: "Semis",
          description: "Développement des premières feuilles",
          care: "Emplacement lumineux, maintenir humide",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Croissance des feuilles et développement racinaire",
          care: "Arrosage régulier, éclaircir, désherber",
        },
        root_development: {
          name: "Développement Racinaire",
          description: "Épaississement de la racine de carotte",
          care: "Maintenir humide, sol meuble",
        },
        harvest: {
          name: "Récolte",
          description: "Carottes prêtes pour la récolte",
          care: "Arracher délicatement, ne pas abîmer",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Germination des graines (10-21 jours)",
          care: "Sol humide, 15-20°C",
        },
        seedling: {
          name: "Semis",
          description: "Développement des premières feuilles",
          care: "Emplacement lumineux, maintenir humide",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Croissance des feuilles et développement racinaire",
          care: "Arrosage régulier, éclaircir, désherber",
        },
        root_development: {
          name: "Développement Racinaire",
          description: "Épaississement de la racine de carotte",
          care: "Maintenir humide, sol meuble",
        },
        harvest: {
          name: "Récolte",
          description: "Carottes prêtes pour la récolte",
          care: "Arracher délicatement, ne pas abîmer",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germination",
          description: "Germination des graines (10-21 jours)",
          care: "Sol humide, 15-20°C",
        },
        seedling: {
          name: "Semis",
          description: "Développement des premières feuilles",
          care: "Emplacement lumineux, maintenir humide",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Croissance des feuilles et développement racinaire",
          care: "Arrosage régulier, éclaircir, désherber",
        },
        root_development: {
          name: "Développement Racinaire",
          description: "Épaississement de la racine de carotte",
          care: "Maintenir humide, sol meuble",
        },
        harvest: {
          name: "Récolte",
          description: "Carottes prêtes pour la récolte",
          care: "Arracher délicatement, ne pas abîmer",
        },
      },
    },
  },
  careTips: {
    watering: "Maintenir humide, éviter l'engorgement",
    fertilizing: "Fertilisation légère, faible azote",
    sunlight: "Plein soleil (min. 8 heures)",
    spacing: "Espacement 5-8 cm",
    temperature: "Frais à chaud, 15-25°C optimal",
    soilPH: "6.0-7.0",
    soil: "Sol meuble, sablonneux sans cailloux",
  },
  commonProblems: {
    "Mouche de la Carotte": "Asticots dans les racines - filet, culture associée",
    "Racines Fourchues": "Sol caillouteux - bien préparer le sol",
    "Épaules Vertes": "Exposées à la lumière - recouvrir de terre",
  },
};
