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
          care: "Feuchte Erde, 15-20°C, Lichtkeimer",
        },
        leafing: {
          name: "Blattentwicklung",
          description: "Entwicklung der ersten Blätter",
          care: "Helle Lage, gleichmäßig feucht halten",
        },
        harvest: {
          name: "Ernte",
          description: "Spinat ist reif zur Ernte",
          care: "Äußere Blätter oder ganze Pflanze ernten",
        },
        bolting: {
          name: "Schießen",
          description: "Pflanze geht in Samen",
          care: "Schnell ernten, bevor Blätter bitter werden",
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
        leafing: {
          name: "Blattentwicklung",
          description: "Entwicklung der ersten Blätter",
          care: "Helle Lage, gleichmäßig feucht halten",
        },
        harvest: {
          name: "Ernte",
          description: "Spinat ist reif zur Ernte",
          care: "Äußere Blätter oder ganze Pflanze ernten",
        },
        bolting: {
          name: "Schießen",
          description: "Pflanze geht in Samen",
          care: "Schnell ernten, bevor Blätter bitter werden",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'Früher Frühling, sobald Boden bearbeitbar',
          },
          harvestWindow: {
            start: '05-01',
            end: '07-01',
            description: 'Ernte vor heißem Wetter',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '10-01',
            end: '12-01',
            description: 'Herbstpflanzung für Winter/Frühjahrsernte',
          },
          harvestWindow: {
            start: '01-15',
            end: '04-15',
            description: 'Ernte bevor Hitze zum Schossen führt',
          },
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
        leafing: {
          name: "Blattentwicklung",
          description: "Entwicklung der ersten Blätter",
          care: "Helle Lage, gleichmäßig feucht halten",
        },
        harvest: {
          name: "Ernte",
          description: "Spinat ist reif zur Ernte",
          care: "Äußere Blätter oder ganze Pflanze ernten",
        },
        bolting: {
          name: "Schießen",
          description: "Pflanze geht in Samen",
          care: "Schnell ernten, bevor Blätter bitter werden",
        },
      },
    },
  },
  careTips: {
    watering: "Gleichmäßig feucht halten, nicht zu nass",
    fertilizing: "Leichte Düngung, viel Stickstoff",
    sunlight: "Vollsonne bis Halbschatten (mind. 6 Stunden)",
    spacing: "10-15 cm Abstand",
    temperature: "Kühl, 15-20°C optimal",
    soilPH: "6,0-7,0",
    bolting: "Vor Hitze schützen, sonst schießt er",
  },
  commonProblems: {
    "Schießen": "Zu viel Hitze - Schatten, früh ernten",
    "Falscher Mehltau": "Pilzkrankheit - Luftzirkulation verbessern",
    "Minierfliegen": "Gänge in Blättern - betroffene Blätter entfernen",
  },
};
