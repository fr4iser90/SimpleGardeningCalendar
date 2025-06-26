export default {
  name: "Salat",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samenkeimung (7-14 Tage)",
          care: "Feuchte Erde, 15-20°C, Lichtkeimer",
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
        head_formation: {
          name: "Kopfbildung",
          description: "Entwicklung des Salatkopfs",
          care: "Gleichmäßig feucht halten, vor Hitze schützen",
        },
        harvest: {
          name: "Ernte",
          description: "Salat ist reif zur Ernte",
          care: "Ganze Pflanze oder einzelne Blätter ernten",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samenkeimung (7-14 Tage)",
          care: "Feuchte Erde, 15-20°C, Lichtkeimer",
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
        head_formation: {
          name: "Kopfbildung",
          description: "Entwicklung des Salatkopfs",
          care: "Gleichmäßig feucht halten, vor Hitze schützen",
        },
        harvest: {
          name: "Ernte",
          description: "Salat ist reif zur Ernte",
          care: "Ganze Pflanze oder einzelne Blätter ernten",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samenkeimung (7-14 Tage)",
          care: "Feuchte Erde, 15-20°C, Lichtkeimer",
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
        head_formation: {
          name: "Kopfbildung",
          description: "Entwicklung des Salatkopfs",
          care: "Gleichmäßig feucht halten, vor Hitze schützen",
        },
        harvest: {
          name: "Ernte",
          description: "Salat ist reif zur Ernte",
          care: "Ganze Pflanze oder einzelne Blätter ernten",
        },
      },
    },
  },
  careTips: {
    watering: "Gleichmäßig feucht halten, Staunässe vermeiden",
    fertilizing: "Leichte Düngung, wenig Stickstoff",
    sunlight: "Vollsonne bis Halbschatten (mind. 6 Stunden)",
    spacing: "20-30 cm Abstand",
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
