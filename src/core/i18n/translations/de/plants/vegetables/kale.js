export default {
  name: "Grünkohl",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samenkeimung (5-10 Tage)",
          care: "Feuchte Erde, 15-20°C",
        },
        seedling: {
          name: "Sämling",
          description: "Entwicklung der ersten Blätter",
          care: "Hell stellen, gleichmäßig feucht halten",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Starkes Blattwachstum",
          care: "Regelmäßig gießen, düngen, Unkraut entfernen",
        },
        leaf_development: {
          name: "Blattentwicklung",
          description: "Entwicklung der großen Blätter",
          care: "Gleichmäßig feucht halten, Blätter vor Frost schützen",
        },
        harvest: {
          name: "Ernte",
          description: "Blätter sind reif zur Ernte",
          care: "Äußere Blätter ernten, innere wachsen lassen",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samenkeimung (5-10 Tage)",
          care: "Feuchte Erde, 15-20°C",
        },
        seedling: {
          name: "Sämling",
          description: "Entwicklung der ersten Blätter",
          care: "Hell stellen, gleichmäßig feucht halten",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Starkes Blattwachstum",
          care: "Regelmäßig gießen, düngen, Unkraut entfernen",
        },
        leaf_development: {
          name: "Blattentwicklung",
          description: "Entwicklung der großen Blätter",
          care: "Gleichmäßig feucht halten, Blätter vor Frost schützen",
        },
        harvest: {
          name: "Ernte",
          description: "Blätter sind reif zur Ernte",
          care: "Äußere Blätter ernten, innere wachsen lassen",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '07-01',
            description: 'Früher Frühling bis Hochsommer, nachdem Boden bearbeitbar',
          },
          harvestWindow: {
            start: '06-15',
            end: '11-15',
            description: 'Ernte bis zum starken Frost, süßer nach leichtem Frost',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '09-01',
            end: '11-01',
            description: 'Herbstpflanzung für Winter/Frühjahrsernte',
          },
          harvestWindow: {
            start: '12-01',
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
          description: "Samenkeimung (5-10 Tage)",
          care: "Feuchte Erde, 15-20°C",
        },
        seedling: {
          name: "Sämling",
          description: "Entwicklung der ersten Blätter",
          care: "Hell stellen, gleichmäßig feucht halten",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Starkes Blattwachstum",
          care: "Regelmäßig gießen, düngen, Unkraut entfernen",
        },
        leaf_development: {
          name: "Blattentwicklung",
          description: "Entwicklung der großen Blätter",
          care: "Gleichmäßig feucht halten, Blätter vor Frost schützen",
        },
        harvest: {
          name: "Ernte",
          description: "Blätter sind reif zur Ernte",
          care: "Äußere Blätter ernten, innere wachsen lassen",
        },
      },
    },
  },
  careTips: {
    watering: "Gleichmäßig feucht halten, nicht zu nass",
    fertilizing: "Regelmäßig mit Stickstoffdünger",
    sunlight: "Vollsonne bis Halbschatten (mind. 6 Stunden)",
    spacing: "30-45 cm Abstand",
    temperature: "Kühl bis warm, 10-25°C optimal",
    soilPH: "6,0-7,5",
    frost: "Verträgt leichten Frost, wird dadurch süßer",
  },
  commonProblems: {
    "Kohlhernie": "Pilzkrankheit - pH erhöhen, resistente Sorten",
    "Kohlfliege": "Maden an Wurzeln - Netzabdeckung, Mischkultur",
    "Blattläuse": "Kleine Schädlinge - Nützlinge einsetzen, Seifenlösung",
  },
};
