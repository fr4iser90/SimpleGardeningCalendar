export default {
  name: "Spinat",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samenkeimung (7-14 Tage)",
          care: "Feuchte Erde, 15-20°C",
        },
        seedling: {
          name: "Sämling",
          description: "Entwicklung der ersten Blätter",
          care: "Hell stellen, gleichmäßig feucht halten",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Blattwachstum und Rosettenbildung",
          care: "Regelmäßig gießen, ausdünnen, Unkraut entfernen",
        },
        leaf_development: {
          name: "Blattentwicklung",
          description: "Entwicklung der großen Blätter",
          care: "Gleichmäßig feucht halten, vor Hitze schützen",
        },
        harvest: {
          name: "Ernte",
          description: "Spinat ist reif zur Ernte",
          care: "Äußere Blätter ernten, innere wachsen lassen",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samenkeimung (7-14 Tage)",
          care: "Feuchte Erde, 15-20°C",
        },
        seedling: {
          name: "Sämling",
          description: "Entwicklung der ersten Blätter",
          care: "Hell stellen, gleichmäßig feucht halten",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Blattwachstum und Rosettenbildung",
          care: "Regelmäßig gießen, ausdünnen, Unkraut entfernen",
        },
        leaf_development: {
          name: "Blattentwicklung",
          description: "Entwicklung der großen Blätter",
          care: "Gleichmäßig feucht halten, vor Hitze schützen",
        },
        harvest: {
          name: "Ernte",
          description: "Spinat ist reif zur Ernte",
          care: "Äußere Blätter ernten, innere wachsen lassen",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samenkeimung (7-14 Tage)",
          care: "Feuchte Erde, 15-20°C",
        },
        seedling: {
          name: "Sämling",
          description: "Entwicklung der ersten Blätter",
          care: "Hell stellen, gleichmäßig feucht halten",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Blattwachstum und Rosettenbildung",
          care: "Regelmäßig gießen, ausdünnen, Unkraut entfernen",
        },
        leaf_development: {
          name: "Blattentwicklung",
          description: "Entwicklung der großen Blätter",
          care: "Gleichmäßig feucht halten, vor Hitze schützen",
        },
        harvest: {
          name: "Ernte",
          description: "Spinat ist reif zur Ernte",
          care: "Äußere Blätter ernten, innere wachsen lassen",
        },
      },
    },
  },
  careTips: {
    watering: "Gleichmäßig feucht halten, nicht zu nass",
    fertilizing: "Leichte Düngung, wenig Stickstoff",
    sunlight: "Vollsonne bis Halbschatten (mind. 6 Stunden)",
    spacing: "15-25 cm Abstand",
    temperature: "Kühl, 15-20°C optimal",
    soilPH: "6,0-7,0",
    bolting: "Vor Hitze schützen, sonst schießt er",
  },
  commonProblems: {
    "Schießen": "Zu viel Hitze - schattieren, früh ernten",
    "Schnecken": "Fressen Löcher in Blätter - Schneckenkorn, Bierfallen",
    "Blattläuse": "Kleine Schädlinge - Nützlinge einsetzen, Seifenlösung",
  },
};
