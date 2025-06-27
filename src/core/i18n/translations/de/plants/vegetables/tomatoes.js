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
          description: "Entwicklung der ersten Blätter",
          care: "Helle Lage, gleichmäßig feucht halten",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Starkes Blatt- und Stängelwachstum",
          care: "Regelmäßig gießen, düngen, Stütze geben",
        },
        transplant: {
          name: "Umpflanzen",
          description: "Versetzung an den endgültigen Standort",
          care: "Sämlinge abhärten, tief pflanzen",
        },
        flowering: {
          name: "Blüte",
          description: "Blütenbildung und Bestäubung",
          care: "Luftzirkulation fördern, Blüten schütteln",
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
          description: "Entwicklung der ersten Blätter",
          care: "Helle Lage, gleichmäßig feucht halten",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Starkes Blatt- und Stängelwachstum",
          care: "Regelmäßig gießen, düngen, Stütze geben",
        },
        transplant: {
          name: "Umpflanzen",
          description: "Versetzung an den endgültigen Standort",
          care: "Sämlinge abhärten, tief pflanzen",
        },
        flowering: {
          name: "Blüte",
          description: "Blütenbildung und Bestäubung",
          care: "Luftzirkulation fördern, Blüten schütteln",
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
          description: "Entwicklung der ersten Blätter",
          care: "Helle Lage, gleichmäßig feucht halten",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Starkes Blatt- und Stängelwachstum",
          care: "Regelmäßig gießen, düngen, Stütze geben",
        },
        transplant: {
          name: "Umpflanzen",
          description: "Versetzung an den endgültigen Standort",
          care: "Sämlinge abhärten, tief pflanzen",
        },
        flowering: {
          name: "Blüte",
          description: "Blütenbildung und Bestäubung",
          care: "Luftzirkulation fördern, Blüten schütteln",
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
    watering: "Gleichmäßig feucht halten, nicht zu nass",
    fertilizing: "Regelmäßiger Gemüsedünger, ausgewogen",
    sunlight: "Vollsonne (mind. 8 Stunden)",
    spacing: "45-60 cm Abstand",
    temperature: "Warm, 20-30°C optimal",
    soilPH: "6,0-7,0",
    support: "Stäbe oder Spaliere für Stabilität",
  },
  commonProblems: {
    "Blütenendfäule": "Kalziummangel - gleichmäßig gießen, pH prüfen",
    "Blattläuse": "Kleine Schädlinge - Nützlinge einsetzen, Seifenlösung",
    "Krautfäule": "Pilzkrankheit - Luftzirkulation verbessern, resistente Sorten",
  },
};
