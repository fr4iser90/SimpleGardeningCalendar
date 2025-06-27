export default {
  name: "Rosen",
  category: "category.flowers",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        establishment: {
          name: "Anwachsen",
          description: "Wurzelbildung und erstes Wachstum",
          care: "Erde feucht halten, Stütze geben",
        },
        vegetative: {
          name: "Vegetatives Wachstum",
          description: "Starkes Blatt- und Stängelwachstum",
          care: "Regelmäßig gießen, düngen, schneiden",
        },
        flowering: {
          name: "Blüte",
          description: "Knospenbildung und Blüte",
          care: "Verblühte Blüten entfernen, Feuchtigkeit halten",
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
          care: "Erde feucht halten, Stütze geben",
        },
        vegetative: {
          name: "Vegetatives Wachstum",
          description: "Starkes Blatt- und Stängelwachstum",
          care: "Regelmäßig gießen, düngen, schneiden",
        },
        flowering: {
          name: "Blüte",
          description: "Knospenbildung und Blüte",
          care: "Verblühte Blüten entfernen, Feuchtigkeit halten",
        },
        dormancy: {
          name: "Ruhephase",
          description: "Winterruhe",
          care: "Weniger gießen, vor Frost schützen",
        },
      },
    },
    greenhouse: {
      phases: {
        establishment: {
          name: "Anwachsen",
          description: "Wurzelbildung und erstes Wachstum",
          care: "Erde feucht halten, Stütze geben",
        },
        vegetative: {
          name: "Vegetatives Wachstum",
          description: "Starkes Blatt- und Stängelwachstum",
          care: "Regelmäßig gießen, düngen, schneiden",
        },
        flowering: {
          name: "Blüte",
          description: "Knospenbildung und Blüte",
          care: "Verblühte Blüten entfernen, Feuchtigkeit halten",
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
    watering: "Tief gießen, Blätter nicht benetzen",
    fertilizing: "Rosendünger, ausgewogene Nährstoffe",
    sunlight: "Vollsonne (mind. 6 Stunden täglich)",
    spacing: "60-90 cm Abstand",
    temperature: "Mäßig, 15-25°C optimal",
    soilPH: "6,0-6,5",
    pruning: "Im Frühjahr schneiden, totes Holz entfernen",
  },
  commonProblems: {
    "Sternrußtau": "Pilzkrankheit - Luftzirkulation verbessern, Fungizid",
    "Blattläuse": "Kleine Schädlinge - mit Wasser spritzen, Nützlinge",
    "Echter Mehltau": "Weißer Belag auf Blättern - Fungizid, Luftzirkulation",
  },
};
