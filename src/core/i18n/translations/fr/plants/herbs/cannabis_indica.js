export default {
  name: "Cannabis Indica",
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
          care: "Fournir 18-24 heures de lumière, maintenir l'humidité 65-70%.",
        },
        vegetative: {
          name: "Croissance",
          description: "Croissance rapide des feuilles et des tiges.",
          care: "Cycle lumineux 18/6, alimentation riche en azote, entraînement pour la ramification.",
        },
        preflower: {
          name: "Pré-floraison",
          description: "Détermination du sexe.",
          care: "Continuer les soins végétatifs, identifier et supprimer les mâles.",
        },
        flowering: {
          name: "Floraison",
          description: "Développement et maturation des fleurs.",
          care: "Cycle lumineux 12/12, alimentation phosphore/potassium, humidité réduite 40-50%.",
        },
        harvest: {
          name: "Récolte",
          description: "Préparation et exécution de la récolte.",
          care: "Rincer à l'eau claire, surveiller les trichomes, récolter au pic de puissance.",
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
          description: "Croissance végétative en lumière naturelle.",
          care: "Lumière naturelle du soleil, entraînement pour la gestion de la taille, alimentation lourde.",
        },
        preflower: {
          name: "Pré-floraison",
          description: "Déclencheur photopériodique naturel.",
          care: "Se produit naturellement avec le raccourcissement des jours, identifier les mâles.",
        },
        flowering: {
          name: "Floraison",
          description: "Floraison en extérieur (6-12 semaines selon la variété).",
          care: "Cycle lumineux naturel, protection météo, surveillance des ravageurs.",
        },
        harvest: {
          name: "Récolte",
          description: "Moment de récolte en extérieur.",
          care: "Dépendant de la météo, vérifier les trichomes, sécher rapidement s'il pleut.",
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
          description: "Croissance végétative en serre.",
          care: "Lumière naturelle avec contrôle de température, alimentation lourde.",
        },
        preflower: {
          name: "Pré-floraison",
          description: "Gestion photopériodique.",
          care: "Contrôler les heures de lumière pour déclencher la floraison, identifier les mâles.",
        },
        flowering: {
          name: "Floraison",
          description: "Floraison en serre (6-12 semaines selon la variété).",
          care: "Environnement contrôlé, protection météo, surveillance des ravageurs.",
        },
        harvest: {
          name: "Récolte",
          description: "Moment de récolte en serre.",
          care: "Environnement de séchage contrôlé, vérifier les trichomes.",
        },
      },
    },
  },
  careTips: {
    watering: "Arroser quand le pouce supérieur du sol est sec, pH 6,0-7,0 en terre, 5,5-6,5 en hydro.",
    fertilizing: "Azote élevé en croissance (3-1-2), phosphore élevé en floraison (1-3-2).",
    sunlight: "Intérieur: 18/6 heures en croissance, 12/12 en floraison. Extérieur: Lumière naturelle du soleil.",
    spacing: "Intérieur: 60-120 cm d'écart. Extérieur: 120-240 cm d'écart pour la taille complète.",
    support: "Intérieur: Filets SCROG, LST. Extérieur: Tuteurs solides pour résistance au vent.",
    humidity: "65-70% semis, 40-50% croissance, 40-45% floraison.",
    temperature: "21-29°C jour, 18-27°C nuit.",
  },
  commonProblems: {
    "Brûlure nutritive": "Pointes de feuilles jaunes/brunes - réduire la concentration d'alimentation",
    "Brûlure lumineuse": "Sommets blanchis - augmenter la distance des lampes",
    "Pourriture des bourgeons": "Moisissure grise dans les bourgeons - améliorer la circulation d'air et réduire l'humidité",
    "Acariens": "Petites toiles et taches - augmenter l'humidité, utiliser des acariens prédateurs",
    "Oïdium": "Poudre blanche sur les feuilles - améliorer la circulation d'air, réduire l'humidité",
  },
};
