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
          care: "Viel Sonne, regelmäßig gießen, Blüten für Samen ernten.",
        },
        harvest: {
          name: "Ernte",
          description: "Ernte der Blüten und Samen.",
          care: "Blüten ernten wenn sie sich öffnen, Samen trocknen lassen.",
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
          care: "Vollsonne, regelmäßig gießen, Blüten für Samen ernten.",
        },
        harvest: {
          name: "Ernte",
          description: "Ernte der Blüten und Samen.",
          care: "Blüten ernten wenn sie sich öffnen, Samen trocknen lassen.",
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
          care: "Viel Licht, regelmäßig gießen, Blüten für Samen ernten.",
        },
        harvest: {
          name: "Ernte",
          description: "Ernte der Blüten und Samen.",
          care: "Blüten ernten wenn sie sich öffnen, Samen trocknen lassen.",
        },
      },
    },
  },
  careTips: {
    watering: "Regelmäßig gießen, Erde feucht aber nicht nass halten.",
    fertilizing: "Düngung im Frühjahr und Sommer mit organischem Dünger.",
    sunlight: "Vollsonne, mindestens 8 Stunden direkte Sonne.",
    spacing: "30-60 cm Abstand zwischen Pflanzen.",
    support: "Stützen für hohe Sorten, normalerweise nicht für Zwergsorten.",
    humidity: "Normale Luftfeuchtigkeit, nicht zu feucht.",
    temperature: "15-30°C optimal, frostempfindlich.",
  },
  commonProblems: {
    "Echter Mehltau": "Weißer Belag auf Blättern - Luftzirkulation verbessern",
    "Blattläuse": "Kleine Insekten auf Blättern - mit Wasser abspülen",
    "Vögel": "Samen werden gefressen - Netze verwenden",
    "Windschäden": "Hohe Pflanzen knicken um - Stützen verwenden",
  },
};
