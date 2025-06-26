export default {
  name: "Lavande",
  category: "category.flowers",
  tags: ["tag.perennial"],
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
          care: "Beaucoup de lumière, arroser avec parcimonie, éviter l'excès d'eau.",
        },
        vegetative: {
          name: "Croissance",
          description: "Croissance rapide des feuilles et des tiges.",
          care: "Beaucoup de lumière, arrosage modéré, tailler pour la ramification.",
        },
        flowering: {
          name: "Floraison",
          description: "La plante commence à fleurir.",
          care: "Beaucoup de soleil, arroser avec parcimonie, récolter fleurs pour parfum.",
        },
        harvest: {
          name: "Récolte",
          description: "Récolte des fleurs et feuilles.",
          care: "Récolter fleurs quand elles s'ouvrent, suspendre pour sécher.",
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
          care: "Plein soleil, arroser avec parcimonie, tailler pour la ramification.",
        },
        flowering: {
          name: "Floraison",
          description: "La plante commence à fleurir.",
          care: "Plein soleil, arroser avec parcimonie, récolter fleurs pour parfum.",
        },
        harvest: {
          name: "Récolte",
          description: "Récolte des fleurs et feuilles.",
          care: "Récolter fleurs quand elles s'ouvrent, suspendre pour sécher.",
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
          care: "Environnement contrôlé, arroser avec parcimonie.",
        },
        vegetative: {
          name: "Croissance",
          description: "Croissance rapide en serre.",
          care: "Beaucoup de lumière, arroser avec parcimonie, tailler pour la ramification.",
        },
        flowering: {
          name: "Floraison",
          description: "La plante commence à fleurir.",
          care: "Beaucoup de lumière, arroser avec parcimonie, récolter fleurs pour parfum.",
        },
        harvest: {
          name: "Récolte",
          description: "Récolte des fleurs et feuilles.",
          care: "Récolter fleurs quand elles s'ouvrent, suspendre pour sécher.",
        },
      },
    },
  },
  careTips: {
    watering: "Arroser avec parcimonie, laisser sécher le sol entre les arrosages.",
    fertilizing: "Alimentation légère au printemps avec engrais organique.",
    sunlight: "Plein soleil, au moins 6 heures de soleil direct.",
    spacing: "30-60 cm d'écart entre les plantes.",
    support: "Généralement pas nécessaire, peut être tuteuré par vent fort.",
    humidity: "Humidité faible préférée.",
    temperature: "15-25°C optimal, rustique jusqu'à -15°C.",
  },
  commonProblems: {
    "Pourriture des racines": "Feuilles jaunes, flétrissement - arroser moins, améliorer drainage",
    "Oïdium": "Poudre blanche sur feuilles - améliorer circulation d'air",
    "Acariens": "Petites toiles et taches - augmenter humidité",
    "Excès d'eau": "Feuilles flétries - réduire arrosage, améliorer drainage",
  },
};
