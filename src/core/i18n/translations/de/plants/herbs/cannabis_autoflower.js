export default {
  name: "Cannabis Autoflower",
  category: "category.herbs",
  tags: ["tag.cannabis", "tag.annual"],
  legalNote: "Prüfe die lokalen Gesetze vor dem Anbau. Diese Informationen dienen nur zu Bildungszwecken.",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samen beginnen zu keimen und Wurzeln bilden sich.",
          care: "Samen warm (21-29°C) und feucht in dunkler Umgebung halten.",
        },
        seedling: {
          name: "Sämling",
          description: "Die junge Pflanze entwickelt die ersten echten Blätter.",
          care: "18-24 Stunden Licht, sanfte Pflege - nicht umpflanzen.",
        },
        vegetative: {
          name: "Wachstum",
          description: "Schnelles frühes Wachstum.",
          care: "18-24 Stunden Licht, leichte Fütterung, minimaler Stress.",
        },
        preflower: {
          name: "Vorblüte",
          description: "Automatischer Übergang.",
          care: "Gleichen Lichtplan beibehalten, Blütennährstoffe beginnen.",
        },
        flowering: {
          name: "Blüte",
          description: "Schnelle Blüte.",
          care: "18-24 Stunden Licht beibehalten, phosphor-/kaliumbetont düngen.",
        },
        harvest: {
          name: "Ernte",
          description: "Schneller Erntezyklus.",
          care: "Nährstoffe 1 Woche vor der Ernte spülen.",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samen beginnen zu keimen und Wurzeln bilden sich.",
          care: "Samen warm und feucht halten, vor direkter Sonne schützen.",
        },
        seedling: {
          name: "Sämling",
          description: "Etablierung im Freien.",
          care: "Langsam an Sonne gewöhnen, vor Wind und Schädlingen schützen.",
        },
        vegetative: {
          name: "Wachstum",
          description: "Autoflower vegetatives Wachstum.",
          care: "Sonnenlicht, LST Training, kräftig düngen.",
        },
        preflower: {
          name: "Vorblüte",
          description: "Autoflower Übergang.",
          care: "Autoflowering erfolgt unabhängig vom Lichtzyklus.",
        },
        flowering: {
          name: "Blüte",
          description: "Autoflower Blüte im Freien (6-10 Wochen je nach Sorte).",
          care: "Lichtzyklus, Wetterschutz, Schädlingskontrolle.",
        },
        harvest: {
          name: "Ernte",
          description: "Autoflower Erntezeitpunkt.",
          care: "Wetterabhängig, Trichome prüfen, bei Regen schnell trocknen.",
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
          care: "Kontrollierte Umgebung, Temperatur beachten.",
        },
        vegetative: {
          name: "Wachstum",
          description: "Autoflower vegetatives Wachstum im Gewächshaus.",
          care: "Licht mit Temperaturkontrolle, LST Training.",
        },
        preflower: {
          name: "Vorblüte",
          description: "Autoflower Übergang.",
          care: "Autoflowering erfolgt unabhängig vom Lichtzyklus.",
        },
        flowering: {
          name: "Blüte",
          description: "Autoflower Blüte im Gewächshaus (6-10 Wochen je nach Sorte).",
          care: "Kontrollierte Umgebung, Wetterschutz, Schädlingskontrolle.",
        },
        harvest: {
          name: "Ernte",
          description: "Autoflower Erntezeitpunkt im Gewächshaus.",
          care: "Kontrolliertes Trocknen, Trichome prüfen.",
        },
      },
    },
  },
  careTips: {
    watering: "Leichtes Gießen, Autoflowers bevorzugen weniger Wasser als Photoperioden.",
    fertilizing: "Leichter Fütterungsplan, 1/4 bis 1/2 Stärke Nährstoffe.",
    sunlight: "18-24 Stunden während des gesamten Zyklus.",
    spacing: "30-60 cm Abstand, kleinere Pflanzen.",
    support: "Minimales Training, LST nur bei Bedarf.",
    humidity: "60-65% während des gesamten Zyklus.",
    temperature: "21-27°C konstant.",
  },
  commonProblems: {
    "Gehemmtes Wachstum": "Stressempfindlich - Umpflanzen und schweres Training vermeiden",
    "Nährstoffverbrennung": "Sehr empfindlich gegen Nährstoffe - leichte Fütterung verwenden",
    "Kurzer Zyklus": "Schnelles Wachstum - bereit für schnelle Übergänge sein",
  },
};
