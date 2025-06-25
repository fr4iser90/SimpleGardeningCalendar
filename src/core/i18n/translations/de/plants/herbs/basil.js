export default {
  name: "Basilikum",
  category: "category.herbs",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samen beginnen zu keimen und Wurzeln bilden sich.",
          care: "Samen warm (21-24°C) und feucht halten.",
        },
        seedling: {
          name: "Sämling",
          description: "Die junge Pflanze entwickelt die ersten echten Blätter.",
          care: "Viel Licht, regelmäßig gießen, Staunässe vermeiden.",
        },
        vegetative: {
          name: "Wachstum",
          description: "Schnelles Wachstum von Blättern und Stängeln.",
          care: "Viel Licht, regelmäßig gießen, Blätter ernten für buschiges Wachstum.",
        },
        flowering: {
          name: "Blüte",
          description: "Pflanze beginnt zu blühen.",
          care: "Blüten entfernen für besseren Geschmack, weiter ernten.",
        },
        harvest: {
          name: "Ernte",
          description: "Kontinuierliche Ernte der Blätter.",
          care: "Regelmäßig ernten, Blüten entfernen, für Winter einfrieren.",
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
          care: "Vollsonne, regelmäßig gießen, Blätter ernten.",
        },
        flowering: {
          name: "Blüte",
          description: "Pflanze beginnt zu blühen.",
          care: "Blüten entfernen für besseren Geschmack, weiter ernten.",
        },
        harvest: {
          name: "Ernte",
          description: "Kontinuierliche Ernte bis zum Frost.",
          care: "Regelmäßig ernten, für Winter einfrieren oder trocknen.",
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
          care: "Viel Licht, regelmäßig gießen, Blätter ernten.",
        },
        flowering: {
          name: "Blüte",
          description: "Pflanze beginnt zu blühen.",
          care: "Blüten entfernen für besseren Geschmack, weiter ernten.",
        },
        harvest: {
          name: "Ernte",
          description: "Kontinuierliche Ernte im Gewächshaus.",
          care: "Regelmäßig ernten, für Winter einfrieren oder trocknen.",
        },
      },
    },
  },
  careTips: {
    watering: "Regelmäßig gießen, Erde feucht aber nicht nass halten.",
    fertilizing: "Leichte Düngung alle 2-3 Wochen mit organischem Dünger.",
    sunlight: "Vollsonne bis Halbschatten, mindestens 6 Stunden Sonne.",
    spacing: "20-30 cm Abstand zwischen Pflanzen.",
    support: "Normalerweise nicht nötig, kann bei starkem Wind gestützt werden.",
    humidity: "Normale Luftfeuchtigkeit, nicht zu feucht.",
    temperature: "21-27°C optimal, frostempfindlich.",
  },
  commonProblems: {
    "Falscher Mehltau": "Gelbe Flecken auf Blättern - Luftzirkulation verbessern",
    "Blattläuse": "Kleine Insekten auf Blättern - mit Wasser abspülen oder Seifenlösung",
    "Frostschäden": "Schwarze Blätter bei Frost - vor Frost schützen",
    "Bolt": "Frühe Blüte bei Hitze - Blüten entfernen, kühler halten",
  },
};
