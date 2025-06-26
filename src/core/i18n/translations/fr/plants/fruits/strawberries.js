export default {
  name: "Fraises",
  category: "category.fruits",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        establishment: {
          name: "Établissement",
          description: "Développement racinaire (premiers 30 jours)",
          care: "Garder sol humide, enlever fleurs première année",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Développement stolons et feuilles",
          care: "Utiliser stolons pour multiplication",
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
          care: "Couvrir avec paillis pour protection hivernale",
        },
      },
    },
    outdoor: {
      phases: {
        establishment: {
          name: "Établissement",
          description: "Développement racinaire (premiers 30 jours)",
          care: "Garder sol humide, enlever fleurs première année",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Développement stolons et feuilles",
          care: "Utiliser stolons pour multiplication",
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
          care: "Couvrir avec paillis pour protection hivernale",
        },
      },
    },
    greenhouse: {
      phases: {
        establishment: {
          name: "Établissement",
          description: "Développement racinaire (premiers 30 jours)",
          care: "Garder sol humide, enlever fleurs première année",
        },
        vegetative: {
          name: "Phase Végétative",
          description: "Développement stolons et feuilles",
          care: "Utiliser stolons pour multiplication",
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
          care: "Couvrir avec paillis pour protection hivernale",
        },
      },
    },
  },
  careTips: {
    watering: "Garder sol constamment humide, éviter engorgement",
    fertilizing: "Fertilisation équilibrée au printemps, faible azote",
    sunlight: "Plein soleil (min. 6 heures)",
    spacing: "Espacement 30-45 cm",
    temperature: "Culture fraîche, protéger de la chaleur",
    soilPH: "5,5-6,5",
    mulching: "Paillis de paille garde baies propres et humides",
  },
  commonProblems: {
    "Pourriture Grise": "Champignon sur fruits - améliorer circulation d'air",
    "Limaces": "Mangent trous dans baies - granulés anti-limaces ou pièges à bière",
    "Oiseaux": "Mangent baies mûres - utiliser filets",
  },
};
