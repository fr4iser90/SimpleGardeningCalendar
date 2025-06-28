export default {
  name: "Cannabis Autoflower",
  category: "category.herbs",
  tags: ["tag.cannabis", "tag.annual"],
  legalNote: "Vérifiez les lois locales avant la culture. Ces informations sont à des fins éducatives uniquement.",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Les graines commencent à germer et les racines émergent.",
          care: "Gardez les graines chaudes (21-29°C) et humides dans un environnement sombre.",
        },
        seedling: {
          name: "Semis",
          description: "La jeune plante développe ses premières vraies feuilles.",
          care: "Fournir 18-24 heures de lumière, soins doux - pas de repiquage.",
        },
        vegetative: {
          name: "Croissance",
          description: "Croissance précoce rapide.",
          care: "18-24 heures de lumière, alimentation légère, stress minimal.",
        },
        preflower: {
          name: "Pré-floraison",
          description: "Transition automatique.",
          care: "Continuer le même programme lumineux, commencer les nutriments de floraison.",
        },
        flowering: {
          name: "Floraison",
          description: "Floraison rapide.",
          care: "Continuer 18-24 heures de lumière, alimentation phosphore/potassium.",
        },
        harvest: {
          name: "Récolte",
          description: "Cycle de récolte rapide.",
          care: "Rincer les nutriments 1 semaine avant la récolte.",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Les graines commencent à germer et les racines émergent.",
          care: "Gardez les graines chaudes et humides, protégez du soleil direct.",
        },
        seedling: {
          name: "Semis",
          description: "Établissement en extérieur.",
          care: "Exposition progressive au soleil, protéger du vent et des ravageurs.",
        },
        vegetative: {
          name: "Croissance",
          description: "Croissance végétative autoflower.",
          care: "Lumière naturelle du soleil, entraînement LST, alimentation lourde.",
        },
        preflower: {
          name: "Pré-floraison",
          description: "Transition autoflower.",
          care: "L'autofloraison se produit indépendamment du cycle lumineux.",
        },
        flowering: {
          name: "Floraison",
          description: "Floraison autoflower en extérieur (6-10 semaines selon la variété).",
          care: "Cycle lumineux naturel, protection météo, surveillance des ravageurs.",
        },
        harvest: {
          name: "Récolte",
          description: "Moment de récolte autoflower.",
          care: "Dépendant de la météo, vérifier les trichomes, sécher rapidement s'il pleut.",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '05-01',
            end: '06-15',
            description: 'Après la dernière gelée, sol chaud (15°C+)',
          },
          harvestWindow: {
            start: '08-01',
            end: '09-30',
            description: 'Récolte avant la première gelée',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '04-01',
            end: '05-15',
            description: 'Semis précoce possible, sol chaud',
          },
          harvestWindow: {
            start: '07-01',
            end: '09-30',
            description: 'Récolte avant la chaleur extrême',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germination",
          description: "Les graines commencent à germer et les racines émergent.",
          care: "Gardez les graines chaudes et humides en environnement contrôlé.",
        },
        seedling: {
          name: "Semis",
          description: "Établissement en serre.",
          care: "Environnement contrôlé, protéger des extrêmes de température.",
        },
        vegetative: {
          name: "Croissance",
          description: "Croissance végétative autoflower en serre.",
          care: "Lumière naturelle avec contrôle de température, entraînement LST.",
        },
        preflower: {
          name: "Pré-floraison",
          description: "Transition autoflower.",
          care: "L'autofloraison se produit indépendamment du cycle lumineux.",
        },
        flowering: {
          name: "Floraison",
          description: "Floraison autoflower en serre (6-10 semaines selon la variété).",
          care: "Environnement contrôlé, protection météo, surveillance des ravageurs.",
        },
        harvest: {
          name: "Récolte",
          description: "Moment de récolte autoflower en serre.",
          care: "Environnement de séchage contrôlé, vérifier les trichomes.",
        },
      },
    },
  },
  careTips: {
    watering: "Arrosage léger, les autoflowers préfèrent moins d'eau que les photopériodes.",
    fertilizing: "Programme d'alimentation léger, nutriments 1/4 à 1/2 force.",
    sunlight: "18-24 heures tout au long du cycle entier.",
    spacing: "30-60 cm d'écart, plantes plus petites.",
    support: "Entraînement minimal, LST seulement si nécessaire.",
    humidity: "60-65% tout au long du cycle.",
    temperature: "21-27°C constant.",
  },
  commonProblems: {
    "Croissance ralentie": "Sensible au stress - éviter le repiquage et l'entraînement lourd",
    "Brûlure nutritive": "Très sensible aux nutriments - utiliser une alimentation légère",
    "Cycle court": "Croissance rapide - être prêt pour les transitions rapides",
  },
};
