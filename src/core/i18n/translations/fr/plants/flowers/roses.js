export default {
  name: "Roses",
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
          care: "Beaucoup de soleil, arrosage régulier, supprimer fleurs fanées.",
        },
        harvest: {
          name: "Récolte",
          description: "Récolte des fleurs pour bouquets.",
          care: "Récolter fleurs quand elles s'ouvrent, couper pour vases.",
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
          care: "Plein soleil, arrosage régulier, supprimer fleurs fanées.",
        },
        harvest: {
          name: "Récolte",
          description: "Récolte des fleurs pour bouquets.",
          care: "Récolter fleurs quand elles s'ouvrent, couper pour vases.",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-01',
            end: '05-15',
            description: 'Plantation au début du printemps, avant le débourrement',
          },
          harvestWindow: {
            start: '06-01',
            end: '10-31',
            description: 'Récolte tout au long de la saison de croissance',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-01',
            end: '04-15',
            description: 'Très tôt au printemps jusqu\'au milieu du printemps',
          },
          harvestWindow: {
            start: '04-15',
            end: '11-30',
            description: 'Saison de récolte prolongée',
          },
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
          care: "Beaucoup de lumière, arrosage régulier, supprimer fleurs fanées.",
        },
        harvest: {
          name: "Récolte",
          description: "Récolte des fleurs pour bouquets.",
          care: "Récolter fleurs quand elles s'ouvrent, couper pour vases.",
        },
      },
    },
  },
  careTips: {
    watering: "Arroser régulièrement, garder sol humide mais pas détrempé.",
    fertilizing: "Alimentation au printemps et été avec engrais pour roses.",
    sunlight: "Plein soleil, au moins 6 heures de soleil direct.",
    spacing: "60-90 cm d'écart entre les plantes.",
    support: "Tuteurs pour rosiers grimpants, généralement pas pour rosiers buissons.",
    humidity: "Humidité normale, pas trop humide.",
    temperature: "15-25°C optimal, rustique jusqu'à -20°C.",
  },
  commonProblems: {
    "Oïdium": "Poudre blanche sur feuilles - améliorer circulation d'air",
    "Taches noires": "Taches noires sur feuilles - utiliser fongicide",
    "Pucerons": "Petits insectes sur feuilles - rincer à l'eau",
    "Rouille": "Taches orange - supprimer feuilles atteintes",
  },
};
