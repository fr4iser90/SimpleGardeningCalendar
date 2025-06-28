export default {
  name: "Romarin",
  category: "category.herbs",
  tags: ["tag.perennial"],
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Les graines germent et les racines émergent.",
          care: "Maintenir au chaud et humide. Utiliser un plateau de semis ou de petits pots, recouvrir légèrement de terre.",
        },
        seedling: {
          name: "Semis",
          description: "Premières vraies feuilles.",
          care: "Fournir une lumière vive, garder le sol humide mais non détrempé.",
        },
        vegetative: {
          name: "Croissance",
          description: "Croissance des feuilles et des tiges.",
          care: "Pincer les pointes pour la ramification, arroser régulièrement, fertiliser légèrement toutes les 3-4 semaines.",
        },
        harvest: {
          name: "Récolte",
          description: "Récolte continue des brins.",
          care: "Récolter régulièrement pour stimuler la croissance. Éviter la floraison.",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Les graines germent et les racines émergent.",
          care: "Semer après la dernière gelée, garder le sol humide jusqu'à l'apparition des semis.",
        },
        seedling: {
          name: "Semis",
          description: "Premières vraies feuilles.",
          care: "Placer à mi-ombre, protéger du soleil fort et du vent.",
        },
        vegetative: {
          name: "Croissance",
          description: "Croissance des feuilles et des tiges.",
          care: "Arroser régulièrement, fertiliser légèrement, pincer les pointes pour la ramification.",
        },
        harvest: {
          name: "Récolte",
          description: "Récolte continue des brins.",
          care: "Récolter les brins selon les besoins. Tailler pour éviter la floraison et la propagation.",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-01',
            description: 'Après la dernière gelée, plante vivace',
          },
          harvestWindow: {
            start: '05-15',
            end: '10-15',
            description: 'Récolte continue pendant la saison de croissance',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '05-01',
            description: 'Début précoce pour plante vivace',
          },
          harvestWindow: {
            start: '04-15',
            end: '11-15',
            description: 'Saison de récolte prolongée',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germination",
          description: "Les graines germent et les racines émergent.",
          care: "Maintenir au chaud et humide en environnement protégé.",
        },
        seedling: {
          name: "Semis",
          description: "Premières vraies feuilles.",
          care: "Fournir une lumière vive, garder le sol humide.",
        },
        vegetative: {
          name: "Croissance",
          description: "Croissance des feuilles et des tiges.",
          care: "Pincer les pointes, arroser régulièrement, fertiliser légèrement.",
        },
        harvest: {
          name: "Récolte",
          description: "Récolte continue des brins.",
          care: "Récolter les brins selon les besoins. Tailler pour éviter la floraison et la propagation.",
        },
      },
    },
  },
  careTips: {
    watering: "Laisser sécher le sol entre les arrosages.",
    fertilizing: "Fertilisation légère toutes les 3-4 semaines.",
    sunlight: "Plein soleil (6+ heures par jour).",
    spacing: "45-60 cm d'écart.",
    temperature: "Aime la chaleur, protéger du gel.",
    soilPH: "6,0-7,0",
    harvesting: "Récolter régulièrement pour stimuler la croissance.",
  },
  commonProblems: {
    "Pourriture des racines": "Excès d'eau – assurer un bon drainage.",
    "Oïdium": "Poudre blanche sur les feuilles – améliorer l'aération.",
    "Dommages de gel": "Protéger du gel dans les régions froides.",
  },
};
