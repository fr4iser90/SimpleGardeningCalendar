export default {
  name: "Framboises",
  category: "category.fruits",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        establishment: {
          name: "Établissement",
          description: "Développement racinaire (premiers 60 jours)",
          care: "Enlever fleurs première année, focus sur racines",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Croissance et développement cannes",
          care: "Attacher cannes au treillis, enlever pousses faibles",
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
          care: "Tailler vieilles cannes, pailler pour protection hivernale",
        },
      },
    },
    outdoor: {
      phases: {
        establishment: {
          name: "Établissement",
          description: "Développement racinaire (premiers 60 jours)",
          care: "Enlever fleurs première année, focus sur racines",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Croissance et développement cannes",
          care: "Attacher cannes au treillis, enlever pousses faibles",
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
          care: "Tailler vieilles cannes, pailler pour protection hivernale",
        },
      },
    },
    greenhouse: {
      phases: {
        establishment: {
          name: "Établissement",
          description: "Développement racinaire (premiers 60 jours)",
          care: "Enlever fleurs première année, focus sur racines",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Croissance et développement cannes",
          care: "Attacher cannes au treillis, enlever pousses faibles",
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
          care: "Tailler vieilles cannes, pailler pour protection hivernale",
        },
      },
    },
  },
  careTips: {
    watering: "Garder sol constamment humide, pas d'arrosage par-dessus",
    fertilizing: "Fertilisation équilibrée au printemps, faible azote",
    sunlight: "Plein soleil (min. 6 heures)",
    spacing: "Espacement 60-90 cm",
    temperature: "Culture fraîche, protéger de la chaleur",
    soilPH: "5,5-6,5",
    trellising: "Attacher cannes au treillis ou système de fils",
  },
  commonProblems: {
    "Perceur des Cannes": "Dégâts d'insectes aux cannes - enlever cannes infectées",
    "Pourriture Grise": "Champignon sur fruits - améliorer circulation d'air",
    "Acariens": "Petits ravageurs sur feuilles - augmenter humidité, utiliser insectes bénéfiques",
  },
};
