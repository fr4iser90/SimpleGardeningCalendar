export default {
  name: "Lavendel",
  category: "category.flowers",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        establishment: {
          name: "Anwachsen",
          description: "Wurzelbildung und erstes Wachstum",
          care: "Erde feucht halten, gute Drainage",
        },
        vegetative: {
          name: "Vegetatives Wachstum",
          description: "Starkes Blatt- und Stängelwachstum",
          care: "Regelmäßig gießen, Staunässe vermeiden",
        },
        flowering: {
          name: "Blüte",
          description: "Knospenbildung und Blüte",
          care: "Blüten ernten wenn Knospen fest sind",
        },
        dormancy: {
          name: "Ruhephase",
          description: "Winterruhe",
          care: "Weniger gießen, vor Frost schützen",
        },
      },
    },
    outdoor: {
      phases: {
        establishment: {
          name: "Anwachsen",
          description: "Wurzelbildung und erstes Wachstum",
          care: "Erde feucht halten, gute Drainage",
        },
        vegetative: {
          name: "Vegetatives Wachstum",
          description: "Starkes Blatt- und Stängelwachstum",
          care: "Regelmäßig gießen, Staunässe vermeiden",
        },
        flowering: {
          name: "Blüte",
          description: "Knospenbildung und Blüte",
          care: "Blüten ernten wenn Knospen fest sind",
        },
        dormancy: {
          name: "Ruhephase",
          description: "Winterruhe",
          care: "Weniger gießen, vor Frost schützen",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-01',
            description: 'Nach dem letzten Frost, mehrjährige Pflanze',
          },
          harvestWindow: {
            start: '06-15',
            end: '08-15',
            description: 'Blüten im Sommer ernten',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '05-01',
            description: 'Früher Start für mehrjährige Pflanze',
          },
          harvestWindow: {
            start: '05-15',
            end: '09-15',
            description: 'Verlängerte Blütezeit und Ernte',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        establishment: {
          name: "Anwachsen",
          description: "Wurzelbildung und erstes Wachstum",
          care: "Erde feucht halten, gute Drainage",
        },
        vegetative: {
          name: "Vegetatives Wachstum",
          description: "Starkes Blatt- und Stängelwachstum",
          care: "Regelmäßig gießen, Staunässe vermeiden",
        },
        flowering: {
          name: "Blüte",
          description: "Knospenbildung und Blüte",
          care: "Blüten ernten wenn Knospen fest sind",
        },
        dormancy: {
          name: "Ruhephase",
          description: "Winterruhe",
          care: "Weniger gießen, vor Frost schützen",
        },
      },
    },
  },
  careTips: {
    watering: "Mäßig gießen, gut durchlässige Erde",
    fertilizing: "Leichte Düngung, wenig Stickstoff",
    sunlight: "Vollsonne (mind. 6 Stunden täglich)",
    spacing: "30-60 cm Abstand",
    temperature: "Mäßig, 15-25°C optimal",
    soilPH: "6,5-7,5",
    pruning: "Nach der Blüte schneiden, im Frühjahr formen",
  },
  commonProblems: {
    "Wurzelfäule": "Überwässerung - Drainage verbessern, weniger gießen",
    "Echter Mehltau": "Pilzkrankheit - Luftzirkulation verbessern",
    "Blattläuse": "Kleine Schädlinge - mit Wasser spritzen, Nützlinge",
  },
};
