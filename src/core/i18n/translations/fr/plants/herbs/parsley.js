export default {
  name: "Persil",
  category: "category.herbs",
  tags: ["tag.biennial"],
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
          care: "Pincer les extrémités, arroser régulièrement, fertiliser légèrement toutes les 2-3 semaines.",
        },
        harvest: {
          name: "Récolte",
          description: "Récolte continue des feuilles.",
          care: "Récolter les feuilles régulièrement pour favoriser une nouvelle croissance. Éviter la floraison.",
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
          description: "Récolte continue des feuilles.",
          care: "Récolter les feuilles et tiges selon les besoins. La taille empêche la floraison et la propagation.",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-01',
            description: 'Après la dernière gelée, plante bisannuelle',
          },
          harvestWindow: {
            start: '05-15',
            end: '10-15',
            description: 'Récolte continue la première année',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '05-01',
            description: 'Début précoce pour plante bisannuelle',
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
          description: "Récolte continue des feuilles.",
          care: "Récolter les feuilles et tiges selon les besoins. La taille empêche la floraison et la propagation.",
        },
      },
    },
  },
  careTips: {
    watering: "Garder le sol constamment humide.",
    fertilizing: "Fertiliser légèrement toutes les 2-3 semaines.",
    sunlight: "Mi-ombre à plein soleil.",
    spacing: "15-30 cm d'espacement.",
    temperature: "Emplacements frais à chauds.",
    soilPH: "6,0-7,0",
    harvesting: "Récolter les feuilles régulièrement pour favoriser la croissance.",
  },
  commonProblems: {
    "Germination lente": "Les graines de persil germent lentement - avoir de la patience.",
    "Montaison": "Formation de fleurs la deuxième année - récolter régulièrement.",
    "Taches foliaires": "Maladie fongique - améliorer la circulation d'air, ne pas arroser par-dessus.",
  },
}; 