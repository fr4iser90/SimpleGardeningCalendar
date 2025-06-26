export default {
  name: "Myrtilles",
  category: "category.fruits",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        establishment: {
          name: "Établissement",
          description: "Développement racinaire (premiers 90 jours)",
          care: "Enlever fleurs première année, focus sur racines",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Croissance et développement buisson",
          care: "Taille de formation, enlever pousses faibles",
        },
        flowering: {
          name: "Floraison",
          description: "Formation des fleurs",
          care: "Protéger fleurs du gel tardif",
        },
        fruiting: {
          name: "Fructification",
          description: "Production de baies",
          care: "Arrosage et fertilisation réguliers, garder baies sèches",
        },
        dormancy: {
          name: "Dormance",
          description: "Repos hivernal",
          care: "Tailler vieux bois, pailler pour protection hivernale",
        },
      },
    },
    outdoor: {
      phases: {
        establishment: {
          name: "Établissement",
          description: "Développement racinaire (premiers 90 jours)",
          care: "Enlever fleurs première année, focus sur racines",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Croissance et développement buisson",
          care: "Taille de formation, enlever pousses faibles",
        },
        flowering: {
          name: "Floraison",
          description: "Formation des fleurs",
          care: "Protéger fleurs du gel tardif",
        },
        fruiting: {
          name: "Fructification",
          description: "Production de baies",
          care: "Arrosage et fertilisation réguliers, garder baies sèches",
        },
        dormancy: {
          name: "Dormance",
          description: "Repos hivernal",
          care: "Tailler vieux bois, pailler pour protection hivernale",
        },
      },
    },
    greenhouse: {
      phases: {
        establishment: {
          name: "Établissement",
          description: "Développement racinaire (premiers 90 jours)",
          care: "Enlever fleurs première année, focus sur racines",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Croissance et développement buisson",
          care: "Taille de formation, enlever pousses faibles",
        },
        flowering: {
          name: "Floraison",
          description: "Formation des fleurs",
          care: "Protéger fleurs du gel tardif",
        },
        fruiting: {
          name: "Fructification",
          description: "Production de baies",
          care: "Arrosage et fertilisation réguliers, garder baies sèches",
        },
        dormancy: {
          name: "Dormance",
          description: "Repos hivernal",
          care: "Tailler vieux bois, pailler pour protection hivernale",
        },
      },
    },
  },
  careTips: {
    watering: "Garder sol constamment humide, pas d'arrosage par-dessus",
    fertilizing: "Engrais spécial pour plantes acidophiles, pH 4,5-5,5",
    sunlight: "Plein soleil (min. 6 heures)",
    spacing: "Espacement 1,2-1,8 m",
    temperature: "Culture fraîche, protéger de la chaleur",
    soilPH: "4,5-5,5 (sol acide nécessaire)",
    mulching: "Paillis d'écorce ou sciure pour rétention d'acidité",
  },
  commonProblems: {
    "Carence en Fer": "Feuilles jaunes avec veines vertes - vérifier pH",
    "Oiseaux": "Mangent baies mûres - utiliser filets",
    "Pourriture Racinaire": "Maladie fongique - améliorer drainage, éviter engorgement",
  },
};
