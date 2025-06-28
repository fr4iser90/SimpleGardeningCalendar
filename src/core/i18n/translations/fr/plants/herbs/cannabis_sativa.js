export default {
  name: "Cannabis Sativa",
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
          description: "Phase de croissance prolongée.",
          care: "Cycle lumineux 18/6, alimentation riche en azote, entraînement pour le contrôle de la hauteur.",
        },
        preflower: {
          name: "Pré-floraison",
          description: "Détermination du sexe.",
          care: "Continuer les soins végétatifs, identifier et supprimer les mâles.",
        },
        flowering: {
          name: "Floraison",
          description: "Période de floraison longue.",
          care: "Cycle lumineux 12/12, alimentation phosphore/potassium, soutenir les branches hautes.",
        },
        harvest: {
          name: "Récolte",
          description: "Préparation de la récolte et du séchage.",
          care: "Rincer les nutriments 1-2 semaines avant la récolte.",
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
          description: "Croissance végétative en lumière naturelle prolongée.",
          care: "Lumière naturelle du soleil, entraînement pour la gestion de la taille, alimentation lourde.",
        },
        preflower: {
          name: "Pré-floraison",
          description: "Déclencheur photopériodique naturel.",
          care: "Se produit naturellement avec le raccourcissement des jours, identifier les mâles.",
        },
        flowering: {
          name: "Floraison",
          description: "Floraison en extérieur prolongée (8-16 semaines selon la variété).",
          care: "Cycle lumineux naturel, protection météo, surveillance des ravageurs.",
        },
        harvest: {
          name: "Récolte",
          description: "Récolte tardive due à la longue floraison.",
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
            start: '10-01',
            end: '11-15',
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
            start: '09-15',
            end: '11-30',
            description: 'Récolte plus longue',
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
          description: "Floraison en serre (8-16 semaines selon la variété).",
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
    sunlight: "18/6 heures en croissance, 12/12 heures en floraison.",
    spacing: "90-180 cm d'écart, peut devenir très haute.",
    support: "Tuteurs solides ou SCROG pour la gestion de la hauteur.",
    humidity: "65-70% semis, 40-50% croissance, 40-45% floraison.",
    temperature: "21-29°C jour, 18-27°C nuit.",
  },
  commonProblems: {
    "Gestion de la hauteur": "Peut devenir très haute - utiliser LST, topping, ou SCROG",
    "Floraison longue": "Temps de récolte prolongé - être patient, surveiller les trichomes",
    "Carence nutritive": "Les grandes plantes ont besoin de plus de nutriments - augmenter l'alimentation",
    "Pénétration lumineuse": "Canopée dense - défolier et LST pour la pénétration lumineuse",
  },
};
