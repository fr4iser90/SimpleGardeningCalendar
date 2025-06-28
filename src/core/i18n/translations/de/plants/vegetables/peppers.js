export default {
  name: "Paprika",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samenkeimung (10-21 Tage)",
          care: "Warme, feuchte Erde, 25-30°C",
        },
        seedling: {
          name: "Sämling",
          description: "Wachstum der ersten Blätter",
          care: "Hell stellen, gleichmäßig feucht halten",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Starkes Blatt- und Stängelwachstum",
          care: "Regelmäßig gießen, düngen, Stütze bereitstellen",
        },
        flowering: {
          name: "Blüte",
          description: "Blütenbildung und Bestäubung",
          care: "Luftzirkulation fördern, Blüten schütteln für Bestäubung",
        },
        fruiting: {
          name: "Fruchtbildung",
          description: "Paprikaentwicklung und Reifung",
          care: "Gleichmäßig gießen, reife Früchte ernten",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samenkeimung (10-21 Tage)",
          care: "Warme, feuchte Erde, 25-30°C",
        },
        seedling: {
          name: "Sämling",
          description: "Wachstum der ersten Blätter",
          care: "Hell stellen, gleichmäßig feucht halten",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Starkes Blatt- und Stängelwachstum",
          care: "Regelmäßig gießen, düngen, Stütze bereitstellen",
        },
        flowering: {
          name: "Blüte",
          description: "Blütenbildung und Bestäubung",
          care: "Luftzirkulation fördern, Blüten schütteln für Bestäubung",
        },
        fruiting: {
          name: "Fruchtbildung",
          description: "Paprikaentwicklung und Reifung",
          care: "Gleichmäßig gießen, reife Früchte ernten",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '05-15',
            end: '06-15',
            description: 'Nach dem letzten Frost, Boden warm (18°C+)',
          },
          harvestWindow: {
            start: '08-01',
            end: '10-01',
            description: 'Ernte vor dem ersten Frost',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '04-01',
            end: '05-15',
            description: 'Früherer Start möglich, Boden warm',
          },
          harvestWindow: {
            start: '07-01',
            end: '10-31',
            description: 'Längere Erntezeit',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samenkeimung (10-21 Tage)",
          care: "Warme, feuchte Erde, 25-30°C",
        },
        seedling: {
          name: "Sämling",
          description: "Wachstum der ersten Blätter",
          care: "Hell stellen, gleichmäßig feucht halten",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Starkes Blatt- und Stängelwachstum",
          care: "Regelmäßig gießen, düngen, Stütze bereitstellen",
        },
        flowering: {
          name: "Blüte",
          description: "Blütenbildung und Bestäubung",
          care: "Luftzirkulation fördern, Blüten schütteln für Bestäubung",
        },
        fruiting: {
          name: "Fruchtbildung",
          description: "Paprikaentwicklung und Reifung",
          care: "Gleichmäßig gießen, reife Früchte ernten",
        },
      },
    },
  },
  careTips: {
    watering: "Gleichmäßig feucht halten, Staunässe vermeiden",
    fertilizing: "Regelmäßig mit Gemüsedünger, ausgewogen",
    sunlight: "Vollsonne (mind. 8 Stunden)",
    spacing: "45-60 cm Abstand",
    temperature: "Warm, 20-30°C optimal",
    soilPH: "6,0-7,0",
    support: "Stäbe oder Spaliere für Stabilität",
  },
  commonProblems: {
    "Blütenendfäule": "Kalziummangel - gleichmäßig gießen, pH prüfen",
    "Blattläuse": "Kleine Schädlinge - Nützlinge einsetzen, Seifenlösung",
    "Spinnmilben": "Kleine Schädlinge - Luftfeuchtigkeit erhöhen",
  },
};
