export default {
  name: "Gurken",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samenkeimung (7-10 Tage)",
          care: "Warme, feuchte Erde, 20-25°C",
        },
        seedling: {
          name: "Sämling",
          description: "Wachstum der ersten Blätter",
          care: "Hell stellen, gleichmäßig feucht halten",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Starkes Blatt- und Rankenwachstum",
          care: "Regelmäßig gießen, düngen, Rankhilfe bereitstellen",
        },
        flowering: {
          name: "Blüte",
          description: "Blütenbildung und Bestäubung",
          care: "Luftzirkulation fördern, weibliche Blüten bestäuben",
        },
        fruiting: {
          name: "Fruchtbildung",
          description: "Gurkenentwicklung und Reifung",
          care: "Gleichmäßig gießen, junge Gurken ernten",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samenkeimung (7-10 Tage)",
          care: "Warme, feuchte Erde, 20-25°C",
        },
        seedling: {
          name: "Sämling",
          description: "Wachstum der ersten Blätter",
          care: "Hell stellen, gleichmäßig feucht halten",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Starkes Blatt- und Rankenwachstum",
          care: "Regelmäßig gießen, düngen, Rankhilfe bereitstellen",
        },
        flowering: {
          name: "Blüte",
          description: "Blütenbildung und Bestäubung",
          care: "Luftzirkulation fördern, weibliche Blüten bestäuben",
        },
        fruiting: {
          name: "Fruchtbildung",
          description: "Gurkenentwicklung und Reifung",
          care: "Gleichmäßig gießen, junge Gurken ernten",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samenkeimung (7-10 Tage)",
          care: "Warme, feuchte Erde, 20-25°C",
        },
        seedling: {
          name: "Sämling",
          description: "Wachstum der ersten Blätter",
          care: "Hell stellen, gleichmäßig feucht halten",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Starkes Blatt- und Rankenwachstum",
          care: "Regelmäßig gießen, düngen, Rankhilfe bereitstellen",
        },
        flowering: {
          name: "Blüte",
          description: "Blütenbildung und Bestäubung",
          care: "Luftzirkulation fördern, weibliche Blüten bestäuben",
        },
        fruiting: {
          name: "Fruchtbildung",
          description: "Gurkenentwicklung und Reifung",
          care: "Gleichmäßig gießen, junge Gurken ernten",
        },
      },
    },
  },
  careTips: {
    watering: "Gleichmäßig feucht halten, Staunässe vermeiden",
    fertilizing: "Regelmäßig mit Gemüsedünger, ausgewogen",
    sunlight: "Vollsonne (mind. 8 Stunden)",
    spacing: "30-60 cm Abstand",
    temperature: "Warm, 20-30°C optimal",
    soilPH: "6,0-7,0",
    support: "Rankhilfe oder Spalier für besseres Wachstum",
  },
  commonProblems: {
    "Echter Mehltau": "Pilzkrankheit - Luftzirkulation verbessern, resistente Sorten",
    "Gurkenmosaikvirus": "Viruskrankheit - Blattläuse bekämpfen, kranke Pflanzen entfernen",
    "Bittere Gurken": "Stress durch ungleichmäßiges Gießen - gleichmäßige Feuchtigkeit",
  },
};
