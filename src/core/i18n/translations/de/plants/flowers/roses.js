export default {
  name: "Rosen",
  category: "category.flowers",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samen beginnen zu keimen und Wurzeln bilden sich.",
          care: "Samen warm (18-24°C) und feucht halten, Licht benötigt.",
        },
        seedling: {
          name: "Sämling",
          description: "Die junge Pflanze entwickelt die ersten echten Blätter.",
          care: "Viel Licht, regelmäßig gießen, Staunässe vermeiden.",
        },
        vegetative: {
          name: "Wachstum",
          description: "Schnelles Wachstum von Blättern und Stängeln.",
          care: "Viel Licht, regelmäßig gießen, für buschiges Wachstum zurückschneiden.",
        },
        flowering: {
          name: "Blüte",
          description: "Pflanze beginnt zu blühen.",
          care: "Viel Sonne, regelmäßig gießen, verblühte Blüten entfernen.",
        },
        harvest: {
          name: "Ernte",
          description: "Ernte der Blüten für Schnittblumen.",
          care: "Blüten ernten wenn sie sich öffnen, für Vasen schneiden.",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samen beginnen zu keimen und Wurzeln bilden sich.",
          care: "Samen warm und feucht halten, vor Frost schützen.",
        },
        seedling: {
          name: "Sämling",
          description: "Etablierung im Freien.",
          care: "Langsam an Sonne gewöhnen, vor Wind schützen.",
        },
        vegetative: {
          name: "Wachstum",
          description: "Schnelles Wachstum im Freien.",
          care: "Vollsonne, regelmäßig gießen, für buschiges Wachstum zurückschneiden.",
        },
        flowering: {
          name: "Blüte",
          description: "Pflanze beginnt zu blühen.",
          care: "Vollsonne, regelmäßig gießen, verblühte Blüten entfernen.",
        },
        harvest: {
          name: "Ernte",
          description: "Ernte der Blüten für Schnittblumen.",
          care: "Blüten ernten wenn sie sich öffnen, für Vasen schneiden.",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samen beginnen zu keimen und Wurzeln bilden sich.",
          care: "Samen warm und feucht im Gewächshaus halten.",
        },
        seedling: {
          name: "Sämling",
          description: "Etablierung im Gewächshaus.",
          care: "Kontrollierte Umgebung, regelmäßig gießen.",
        },
        vegetative: {
          name: "Wachstum",
          description: "Schnelles Wachstum im Gewächshaus.",
          care: "Viel Licht, regelmäßig gießen, für buschiges Wachstum zurückschneiden.",
        },
        flowering: {
          name: "Blüte",
          description: "Pflanze beginnt zu blühen.",
          care: "Viel Licht, regelmäßig gießen, verblühte Blüten entfernen.",
        },
        harvest: {
          name: "Ernte",
          description: "Ernte der Blüten für Schnittblumen.",
          care: "Blüten ernten wenn sie sich öffnen, für Vasen schneiden.",
        },
      },
    },
  },
  careTips: {
    watering: "Regelmäßig gießen, Erde feucht aber nicht nass halten.",
    fertilizing: "Düngung im Frühjahr und Sommer mit Rosendünger.",
    sunlight: "Vollsonne, mindestens 6 Stunden direkte Sonne.",
    spacing: "60-90 cm Abstand zwischen Pflanzen.",
    support: "Stützen für Kletterrosen, normalerweise nicht für Buschrosen.",
    humidity: "Normale Luftfeuchtigkeit, nicht zu feucht.",
    temperature: "15-25°C optimal, frosthart bis -20°C.",
  },
  commonProblems: {
    "Echter Mehltau": "Weißer Belag auf Blättern - Luftzirkulation verbessern",
    "Sternrußtau": "Schwarze Flecken auf Blättern - Fungizid verwenden",
    "Blattläuse": "Kleine Insekten auf Blättern - mit Wasser abspülen",
    "Rosenrost": "Orangefarbene Flecken - betroffene Blätter entfernen",
  },
};
