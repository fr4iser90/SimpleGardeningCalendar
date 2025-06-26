export default {
  name: "Tomaten",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samenkeimung (7-14 Tage)",
          care: "Warme, feuchte Erde, 20-25°C",
        },
        seedling: {
          name: "Sämling",
          description: "Wachstum der ersten Blätter",
          care: "Hell stellen, gleichmäßig feucht halten",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Starkes Blatt- und Stängelwachstum",
          care: "Regelmäßig gießen, düngen, Seitentriebe entfernen",
        },
        flowering: {
          name: "Blüte",
          description: "Blütenbildung und Bestäubung",
          care: "Luftzirkulation fördern, Blüten schütteln für Bestäubung",
        },
        fruiting: {
          name: "Fruchtbildung",
          description: "Tomatenentwicklung und Reifung",
          care: "Gleichmäßig gießen, reife Früchte ernten",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samenkeimung (7-14 Tage)",
          care: "Warme, feuchte Erde, 20-25°C",
        },
        seedling: {
          name: "Sämling",
          description: "Wachstum der ersten Blätter",
          care: "Hell stellen, gleichmäßig feucht halten",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Starkes Blatt- und Stängelwachstum",
          care: "Regelmäßig gießen, düngen, Seitentriebe entfernen",
        },
        flowering: {
          name: "Blüte",
          description: "Blütenbildung und Bestäubung",
          care: "Luftzirkulation fördern, Blüten schütteln für Bestäubung",
        },
        fruiting: {
          name: "Fruchtbildung",
          description: "Tomatenentwicklung und Reifung",
          care: "Gleichmäßig gießen, reife Früchte ernten",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samenkeimung (7-14 Tage)",
          care: "Warme, feuchte Erde, 20-25°C",
        },
        seedling: {
          name: "Sämling",
          description: "Wachstum der ersten Blätter",
          care: "Hell stellen, gleichmäßig feucht halten",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Starkes Blatt- und Stängelwachstum",
          care: "Regelmäßig gießen, düngen, Seitentriebe entfernen",
        },
        flowering: {
          name: "Blüte",
          description: "Blütenbildung und Bestäubung",
          care: "Luftzirkulation fördern, Blüten schütteln für Bestäubung",
        },
        fruiting: {
          name: "Fruchtbildung",
          description: "Tomatenentwicklung und Reifung",
          care: "Gleichmäßig gießen, reife Früchte ernten",
        },
      },
    },
  },
  careTips: {
    watering: "Gleichmäßig feucht halten, Staunässe vermeiden",
    fertilizing: "Regelmäßig mit Tomatendünger, wenig Stickstoff",
    sunlight: "Vollsonne (mind. 8 Stunden)",
    spacing: "60-90 cm Abstand",
    temperature: "Warm, 18-30°C optimal",
    soilPH: "6,0-6,8",
    support: "Stäbe oder Spaliere für Stabilität",
  },
  commonProblems: {
    "Kraut- und Braunfäule": "Pilzkrankheit - Luftzirkulation verbessern, Blätter trocken halten",
    "Blattläuse": "Kleine Schädlinge - Nützlinge einsetzen, Seifenlösung",
    "Blütenendfäule": "Kalziummangel - gleichmäßig gießen, pH prüfen",
  },
};
