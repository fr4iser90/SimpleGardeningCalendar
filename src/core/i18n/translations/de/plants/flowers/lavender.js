export default {
  name: "Lavendel",
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
          care: "Viel Licht, sparsam gießen, Staunässe vermeiden.",
        },
        vegetative: {
          name: "Wachstum",
          description: "Schnelles Wachstum von Blättern und Stängeln.",
          care: "Viel Licht, mäßig gießen, für buschiges Wachstum zurückschneiden.",
        },
        flowering: {
          name: "Blüte",
          description: "Pflanze beginnt zu blühen.",
          care: "Viel Sonne, sparsam gießen, Blüten für Duft ernten.",
        },
        harvest: {
          name: "Ernte",
          description: "Ernte der Blüten und Blätter.",
          care: "Blüten ernten wenn sie sich öffnen, zum Trocknen aufhängen.",
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
          care: "Vollsonne, sparsam gießen, für buschiges Wachstum zurückschneiden.",
        },
        flowering: {
          name: "Blüte",
          description: "Pflanze beginnt zu blühen.",
          care: "Vollsonne, sparsam gießen, Blüten für Duft ernten.",
        },
        harvest: {
          name: "Ernte",
          description: "Ernte der Blüten und Blätter.",
          care: "Blüten ernten wenn sie sich öffnen, zum Trocknen aufhängen.",
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
          care: "Kontrollierte Umgebung, sparsam gießen.",
        },
        vegetative: {
          name: "Wachstum",
          description: "Schnelles Wachstum im Gewächshaus.",
          care: "Viel Licht, sparsam gießen, für buschiges Wachstum zurückschneiden.",
        },
        flowering: {
          name: "Blüte",
          description: "Pflanze beginnt zu blühen.",
          care: "Viel Licht, sparsam gießen, Blüten für Duft ernten.",
        },
        harvest: {
          name: "Ernte",
          description: "Ernte der Blüten und Blätter.",
          care: "Blüten ernten wenn sie sich öffnen, zum Trocknen aufhängen.",
        },
      },
    },
  },
  careTips: {
    watering: "Sparsam gießen, Erde zwischen Gießen trocknen lassen.",
    fertilizing: "Leichte Düngung im Frühjahr mit organischem Dünger.",
    sunlight: "Vollsonne, mindestens 6 Stunden direkte Sonne.",
    spacing: "30-60 cm Abstand zwischen Pflanzen.",
    support: "Normalerweise nicht nötig, kann bei starkem Wind gestützt werden.",
    humidity: "Niedrige Luftfeuchtigkeit bevorzugt.",
    temperature: "15-25°C optimal, frosthart bis -15°C.",
  },
  commonProblems: {
    "Wurzelfäule": "Gelbe Blätter, welk - weniger gießen, Drainage verbessern",
    "Echter Mehltau": "Weißer Belag auf Blättern - Luftzirkulation verbessern",
    "Spinnmilben": "Kleine Netze und Flecken - Luftfeuchtigkeit erhöhen",
    "Zu viel Wasser": "Welke Blätter - Gießen reduzieren, Drainage verbessern",
  },
};
