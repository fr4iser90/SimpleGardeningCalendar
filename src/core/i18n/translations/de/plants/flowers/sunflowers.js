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
