export default {
  name: "Tournesols",
  category: "category.flowers",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Les graines commencent à germer et les racines émergent.",
          care: "Gardez les graines chaudes (18-24°C) et humides, lumière nécessaire.",
        },
        seedling: {
          name: "Semis",
          description: "La jeune plante développe ses premières vraies feuilles.",
          care: "Beaucoup de lumière, arrosage régulier, éviter l'excès d'eau.",
        },
        vegetative: {
          name: "Croissance",
          description: "Croissance rapide des feuilles et des tiges.",
          care: "Beaucoup de lumière, arrosage régulier, tailler pour la ramification.",
        },
        flowering: {
          name: "Floraison",
          description: "La plante commence à fleurir.",
          care: "Beaucoup de soleil, arrosage régulier, récolter fleurs pour graines.",
        },
        harvest: {
          name: "Récolte",
          description: "Récolte des fleurs et graines.",
          care: "Récolter fleurs quand elles s'ouvrent, laisser graines sécher.",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Les graines commencent à germer et les racines émergent.",
          care: "Gardez les graines chaudes et humides, protéger du gel.",
        },
        seedling: {
          name: "Semis",
          description: "Établissement en extérieur.",
          care: "Exposition progressive au soleil, protéger du vent.",
        },
        vegetative: {
          name: "Croissance",
          description: "Croissance rapide en extérieur.",
          care: "Plein soleil, arrosage régulier, tailler pour la ramification.",
        },
        flowering: {
          name: "Floraison",
          description: "La plante commence à fleurir.",
          care: "Plein soleil, arrosage régulier, récolter fleurs pour graines.",
        },
        harvest: {
          name: "Récolte",
          description: "Récolte des fleurs et graines.",
          care: "Récolter fleurs quand elles s'ouvrent, laisser graines sécher.",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germination",
          description: "Les graines commencent à germer et les racines émergent.",
          care: "Gardez les graines chaudes et humides en serre.",
        },
        seedling: {
          name: "Semis",
          description: "Établissement en serre.",
          care: "Environnement contrôlé, arrosage régulier.",
        },
        vegetative: {
          name: "Croissance",
          description: "Croissance rapide en serre.",
          care: "Beaucoup de lumière, arrosage régulier, tailler pour la ramification.",
        },
        flowering: {
          name: "Floraison",
          description: "La plante commence à fleurir.",
          care: "Beaucoup de lumière, arrosage régulier, récolter fleurs pour graines.",
        },
        harvest: {
          name: "Récolte",
          description: "Récolte des fleurs et graines.",
          care: "Récolter fleurs quand elles s'ouvrent, laisser graines sécher.",
        },
      },
    },
  },
  careTips: {
    watering: "Arroser régulièrement, garder sol humide mais pas détrempé.",
    fertilizing: "Alimentation au printemps et été avec engrais organique.",
    sunlight: "Plein soleil, au moins 8 heures de soleil direct.",
    spacing: "30-60 cm d'écart entre les plantes.",
    support: "Tuteurs pour variétés hautes, généralement pas pour variétés naines.",
    humidity: "Humidité normale, pas trop humide.",
    temperature: "15-30°C optimal, sensible au gel.",
  },
  commonProblems: {
    "Oïdium": "Poudre blanche sur feuilles - améliorer circulation d'air",
    "Pucerons": "Petits insectes sur feuilles - rincer à l'eau",
    "Oiseaux": "Graines mangées - utiliser filets",
    "Dommages de vent": "Plantes hautes qui tombent - utiliser tuteurs",
  },
};
