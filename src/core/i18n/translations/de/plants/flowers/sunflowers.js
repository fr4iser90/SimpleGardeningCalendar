export default {
  name: "Sonnenblumen",
  category: "category.flowers",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samenkeimung (7-14 Tage)",
          care: "Warme Erde, 20-25°C, feucht halten",
        },
        seedling: {
          name: "Sämling",
          description: "Entwicklung der ersten Blätter",
          care: "Helle Lage, gleichmäßig feucht halten",
        },
        vegetative: {
          name: "Vegetatives Wachstum",
          description: "Starkes Stängel- und Blattwachstum",
          care: "Regelmäßig gießen, Stütze geben",
        },
        flowering: {
          name: "Blüte",
          description: "Blütenkopfbildung und Blüte",
          care: "Vollsonne, regelmäßig gießen",
        },
        seed_development: {
          name: "Samenentwicklung",
          description: "Samen reifen im Blütenkopf",
          care: "Vor Vögeln schützen, Samen trocknen lassen",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samenkeimung (7-14 Tage)",
          care: "Warme Erde, 20-25°C, feucht halten",
        },
        seedling: {
          name: "Sämling",
          description: "Entwicklung der ersten Blätter",
          care: "Helle Lage, gleichmäßig feucht halten",
        },
        vegetative: {
          name: "Vegetatives Wachstum",
          description: "Starkes Stängel- und Blattwachstum",
          care: "Regelmäßig gießen, Stütze geben",
        },
        flowering: {
          name: "Blüte",
          description: "Blütenkopfbildung und Blüte",
          care: "Vollsonne, regelmäßig gießen",
        },
        seed_development: {
          name: "Samenentwicklung",
          description: "Samen reifen im Blütenkopf",
          care: "Vor Vögeln schützen, Samen trocknen lassen",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-15',
            end: '06-15',
            description: 'Nach dem letzten Frost, Boden warm',
          },
          harvestWindow: {
            start: '08-01',
            end: '09-30',
            description: 'Ernte vor dem ersten Frost',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '05-15',
            description: 'Früher Frühling bis Spätfrühling',
          },
          harvestWindow: {
            start: '07-01',
            end: '10-31',
            description: 'Lange Erntezeit',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samenkeimung (7-14 Tage)",
          care: "Warme Erde, 20-25°C, feucht halten",
        },
        seedling: {
          name: "Sämling",
          description: "Entwicklung der ersten Blätter",
          care: "Helle Lage, gleichmäßig feucht halten",
        },
        vegetative: {
          name: "Vegetatives Wachstum",
          description: "Starkes Stängel- und Blattwachstum",
          care: "Regelmäßig gießen, Stütze geben",
        },
        flowering: {
          name: "Blüte",
          description: "Blütenkopfbildung und Blüte",
          care: "Vollsonne, regelmäßig gießen",
        },
        seed_development: {
          name: "Samenentwicklung",
          description: "Samen reifen im Blütenkopf",
          care: "Vor Vögeln schützen, Samen trocknen lassen",
        },
      },
    },
  },
  careTips: {
    watering: "Regelmäßig gießen, tiefes Wurzelsystem",
    fertilizing: "Ausgewogener Dünger, wenig Stickstoff",
    sunlight: "Vollsonne (mind. 8 Stunden täglich)",
    spacing: "30-60 cm Abstand",
    temperature: "Warm, 20-30°C optimal",
    soilPH: "6,0-7,5",
    support: "Hohe Sorten stützen, vor Wind schützen",
  },
  commonProblems: {
    "Vögel": "Fressen Samen - Köpfe mit Netz abdecken",
    "Blattläuse": "Kleine Schädlinge - mit Wasser spritzen, Nützlinge",
    "Echter Mehltau": "Pilzkrankheit - Luftzirkulation verbessern",
  },
};
