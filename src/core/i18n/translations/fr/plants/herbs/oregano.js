export default {
  name: "Origan",
  category: "category.herbs",
  tags: ["tag.perennial"],
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Les graines germent et les racines apparaissent.",
          care: "Maintenir au chaud et humide. Utiliser une terrine ou de petits pots, recouvrir légèrement de terre.",
        },
        seedling: {
          name: "Plantule",
          description: "Premières vraies feuilles.",
          care: "Fournir une lumière vive, garder le sol humide mais non détrempé.",
        },
        vegetative: {
          name: "Végétatif",
          description: "Croissance des feuilles et des tiges.",
          care: "Pincer les extrémités, arroser régulièrement, fertiliser légèrement toutes les 3-4 semaines.",
        },
        harvest: {
          name: "Récolte",
          description: "Récolte continue des feuilles.",
          care: "Récolter régulièrement pour stimuler la croissance. Éviter la floraison.",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germination",
          description: "Les graines germent et les racines apparaissent.",
          care: "Semer après les dernières gelées, garder le sol humide jusqu'à la levée.",
        },
        seedling: {
          name: "Plantule",
          description: "Premières vraies feuilles.",
          care: "Placer à mi-ombre, protéger du soleil fort et du vent.",
        },
        vegetative: {
          name: "Végétatif",
          description: "Croissance des feuilles et des tiges.",
          care: "Arroser régulièrement, fertiliser légèrement, pincer pour ramifier.",
        },
        harvest: {
          name: "Récolte",
          description: "Récolte continue des feuilles.",
          care: "Récolter feuilles et tiges selon les besoins. Tailler pour éviter la floraison et l'envahissement.",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germination",
          description: "Les graines germent et les racines apparaissent.",
          care: "Maintenir au chaud et humide sous abri.",
        },
        seedling: {
          name: "Plantule",
          description: "Premières vraies feuilles.",
          care: "Fournir une lumière vive, garder le sol humide.",
        },
        vegetative: {
          name: "Végétatif",
          description: "Croissance des feuilles et des tiges.",
          care: "Pincer les extrémités, arroser régulièrement, fertiliser légèrement.",
        },
        harvest: {
          name: "Récolte",
          description: "Récolte continue des feuilles.",
          care: "Récolter feuilles et tiges selon les besoins. Tailler pour éviter la floraison et l'envahissement.",
        },
      },
    },
  },
  careTips: {
    watering: "Laisser sécher la terre entre deux arrosages.",
    fertilizing: "Fertilisation légère toutes les 2-3 semaines.",
    sunlight: "Plein soleil (6+ heures par jour).",
    spacing: "30-45 cm d'écart.",
    temperature: "Plante de climat chaud, tolère la sécheresse.",
    soilPH: "6,0-8,0",
    harvesting: "Récolter régulièrement pour stimuler la croissance.",
  },
  commonProblems: {
    "Pourriture des racines": "Excès d'eau – assurer un bon drainage.",
    "Port étiré": "Manque de lumière – fournir plus de soleil.",
    "Dégâts du gel": "Protéger du gel dans les régions froides.",
  },
}; 