export default {
  name: "Basilic",
  category: "category.herbs",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Les graines commencent à germer et les racines émergent.",
          care: "Gardez les graines chaudes (21-24°C) et humides.",
        },
        seedling: {
          name: "Semis",
          description: "La jeune plante développe ses premières vraies feuilles.",
          care: "Beaucoup de lumière, arrosage régulier, éviter l'excès d'eau.",
        },
        vegetative: {
          name: "Croissance",
          description: "Croissance rapide des feuilles et des tiges.",
          care: "Beaucoup de lumière, arrosage régulier, récolter les feuilles pour la ramification.",
        },
        flowering: {
          name: "Floraison",
          description: "La plante commence à fleurir.",
          care: "Supprimer les fleurs pour un meilleur goût, continuer la récolte.",
        },
        harvest: {
          name: "Récolte",
          description: "Récolte continue des feuilles.",
          care: "Récolter régulièrement, supprimer les fleurs, congeler pour l'hiver.",
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
          care: "Plein soleil, arrosage régulier, récolter les feuilles.",
        },
        flowering: {
          name: "Floraison",
          description: "La plante commence à fleurir.",
          care: "Supprimer les fleurs pour un meilleur goût, continuer la récolte.",
        },
        harvest: {
          name: "Récolte",
          description: "Récolte continue jusqu'au gel.",
          care: "Récolter régulièrement, congeler ou sécher pour l'hiver.",
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
          care: "Beaucoup de lumière, arrosage régulier, récolter les feuilles.",
        },
        flowering: {
          name: "Floraison",
          description: "La plante commence à fleurir.",
          care: "Supprimer les fleurs pour un meilleur goût, continuer la récolte.",
        },
        harvest: {
          name: "Récolte",
          description: "Récolte continue en serre.",
          care: "Récolter régulièrement, congeler ou sécher pour l'hiver.",
        },
      },
    },
  },
  careTips: {
    watering: "Arroser régulièrement, garder le sol humide mais pas détrempé.",
    fertilizing: "Alimentation légère toutes les 2-3 semaines avec un engrais organique.",
    sunlight: "Plein soleil à mi-ombre, au moins 6 heures de soleil.",
    spacing: "20-30 cm d'écart entre les plantes.",
    support: "Généralement pas nécessaire, peut être tuteuré par vent fort.",
    humidity: "Humidité normale, pas trop humide.",
    temperature: "21-27°C optimal, sensible au gel.",
  },
  commonProblems: {
    "Mildiou": "Taches jaunes sur les feuilles - améliorer la circulation d'air",
    "Pucerons": "Petits insectes sur les feuilles - rincer à l'eau ou solution savonneuse",
    "Dommages de gel": "Feuilles noires du gel - protéger du gel",
    "Montaison": "Floraison précoce par la chaleur - supprimer les fleurs, garder plus frais",
  },
};
