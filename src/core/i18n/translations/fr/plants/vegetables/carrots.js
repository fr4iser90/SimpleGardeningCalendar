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
        leafing: {
          name: "Développement des Feuilles",
          description: "Développement des premières feuilles",
          care: "Emplacement lumineux, garder humide",
        },
        rooting: {
          name: "Développement des Racines",
          description: "Épaississement de la racine de carotte",
          care: "Garder humide, sol meuble",
        },
        maturing: {
          name: "Maturation",
          description: "Agrandissement de racine et croissance finale",
          care: "Maintenir humidité uniforme, éviter fissures",
        },
        harvest: {
          name: "Récolte",
          description: "Les carottes sont prêtes à récolter",
          care: "Arracher avec précaution, ne pas endommager",
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
        leafing: {
          name: "Développement des Feuilles",
          description: "Développement des premières feuilles",
          care: "Emplacement lumineux, garder humide",
        },
        rooting: {
          name: "Développement des Racines",
          description: "Épaississement de la racine de carotte",
          care: "Garder humide, sol meuble",
        },
        maturing: {
          name: "Maturation",
          description: "Agrandissement de racine et croissance finale",
          care: "Maintenir humidité uniforme, éviter fissures",
        },
        harvest: {
          name: "Récolte",
          description: "Les carottes sont prêtes à récolter",
          care: "Arracher avec précaution, ne pas endommager",
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
        leafing: {
          name: "Développement des Feuilles",
          description: "Développement des premières feuilles",
          care: "Emplacement lumineux, garder humide",
        },
        rooting: {
          name: "Développement des Racines",
          description: "Épaississement de la racine de carotte",
          care: "Garder humide, sol meuble",
        },
        maturing: {
          name: "Maturation",
          description: "Agrandissement de racine et croissance finale",
          care: "Maintenir humidité uniforme, éviter fissures",
        },
        harvest: {
          name: "Récolte",
          description: "Les carottes sont prêtes à récolter",
          care: "Arracher avec précaution, ne pas endommager",
        },
      },
    },
  },
  careTips: {
    watering: "Garder humide, éviter l'engorgement",
    fertilizing: "Fertilisation légère, faible azote",
    sunlight: "Plein soleil (min. 8 heures)",
    spacing: "Espacement 5-8 cm",
    temperature: "Frais à chaud, 15-25°C optimal",
    soilPH: "6.0-7.0",
    soil: "Sol meuble, sableux sans pierres",
  },
  commonProblems: {
    "Mouche de la Carotte": "Asticots dans racines - filet, culture associée",
    "Racines Fourchues": "Sol pierreux - bien préparer le sol",
    "Épaules Vertes": "Exposé à la lumière - couvrir avec terre",
  },
};
