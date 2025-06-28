export default {
  name: "Thym",
  category: "category.herbs",
  tags: ["tag.perennial"],
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Les graines germent et les racines se forment.",
          care: "Garder chaud et humide. Dans un plateau de semis ou de petits pots, couvrir légèrement de terre.",
        },
        seedling: {
          name: "Plantule",
          description: "Les premières vraies feuilles se développent.",
          care: "Offrir une lumière vive, garder le sol humide mais pas détrempé.",
        },
        vegetative: {
          name: "Croissance",
          description: "Croissance des feuilles et des tiges.",
          care: "Pincer les extrémités, arroser régulièrement, fertiliser légèrement toutes les 3-4 semaines.",
        },
        harvest: {
          name: "Récolte",
          description: "Récolte continue des brins.",
          care: "Récolter les brins régulièrement pour favoriser une nouvelle croissance. Éviter la floraison.",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Les graines germent et les racines se forment.",
          care: "Semer après le dernier gel, garder le sol humide jusqu'à l'apparition des plantules.",
        },
        seedling: {
          name: "Plantule",
          description: "Les premières vraies feuilles se développent.",
          care: "Placer à mi-ombre, protéger du soleil fort et du vent.",
        },
        vegetative: {
          name: "Croissance",
          description: "Croissance des feuilles et des tiges.",
          care: "Arroser régulièrement, fertiliser légèrement, pincer les extrémités.",
        },
        harvest: {
          name: "Récolte",
          description: "Récolte continue des brins.",
          care: "Récolter les brins selon les besoins. La taille empêche la floraison et la propagation.",
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
          description: "Les graines germent et les racines se forment.",
          care: "Garder chaud et humide dans la serre.",
        },
        seedling: {
          name: "Plantule",
          description: "Les premières vraies feuilles se développent.",
          care: "Offrir une lumière vive, garder le sol humide.",
        },
        vegetative: {
          name: "Croissance",
          description: "Croissance des feuilles et des tiges.",
          care: "Pincer les extrémités, arroser régulièrement, fertiliser légèrement.",
        },
        harvest: {
          name: "Récolte",
          description: "Récolte continue des brins.",
          care: "Récolter les brins selon les besoins. La taille empêche la floraison et la propagation.",
        },
      },
    },
  },
  careTips: {
    watering: "Laisser sécher le sol entre les arrosages.",
    fertilizing: "Fertiliser légèrement toutes les 3-4 semaines.",
    sunlight: "Plein soleil (min. 6 heures par jour).",
    spacing: "30-45 cm d'espacement.",
    temperature: "Aime la chaleur, tolérant à la sécheresse.",
    soilPH: "6,0-8,0",
    harvesting: "Récolter les brins régulièrement pour favoriser la croissance.",
  },
  commonProblems: {
    "Pourriture des racines": "Trop d'eau - veiller à un bon drainage.",
    "Croissance clairsemée": "Pas assez de lumière - fournir plus de soleil.",
    "Dommages de gel": "Protéger du gel dans les régions froides.",
  },
}; 