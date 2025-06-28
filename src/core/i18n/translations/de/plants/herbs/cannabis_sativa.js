export default {
  name: "Cannabis Sativa",
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
          care: "18-24 Stunden Licht, Luftfeuchtigkeit 65-70% halten.",
        },
        vegetative: {
          name: "Wachstum",
          description: "Längere Wachstumsphase für Sativa.",
          care: "18/6 Lichtzyklus, stickstoffreiche Düngung, Training für Höhenkontrolle.",
        },
        preflower: {
          name: "Vorblüte",
          description: "Geschlechtsbestimmung der Pflanzen.",
          care: "Wie Wachstum, Männchen entfernen.",
        },
        flowering: {
          name: "Blüte",
          description: "Längere Blütephase.",
          care: "12/12 Licht, phosphor-/kaliumbetont düngen, hohe Äste stützen.",
        },
        harvest: {
          name: "Ernte",
          description: "Vorbereitung und Durchführung der Ernte.",
          care: "Nährstoffe 1-2 Wochen vor der Ernte spülen.",
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
          description: "Längeres natürliches vegetatives Wachstum.",
          care: "Sonnenlicht, Training für Größenkontrolle, kräftig düngen.",
        },
        preflower: {
          name: "Vorblüte",
          description: "Natürlicher Photoperioden-Trigger.",
          care: "Erfolgt natürlich, Männchen entfernen.",
        },
        flowering: {
          name: "Blüte",
          description: "Längere Blüte im Freien (8-16 Wochen je nach Sorte).",
          care: "Lichtzyklus, Wetterschutz, Schädlingskontrolle.",
        },
        harvest: {
          name: "Ernte",
          description: "Späte Ernte wegen langer Blüte.",
          care: "Wetterabhängig, Trichome prüfen, bei Regen schnell trocknen.",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '05-15',
            description: 'Früher Start für lange Blüte erforderlich',
          },
          harvestWindow: {
            start: '10-15',
            end: '11-30',
            description: 'Späte Ernte aufgrund langer Blüte',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '05-01',
            description: 'Früher Start für verlängerte Saison',
          },
          harvestWindow: {
            start: '10-01',
            end: '12-15',
            description: 'Verlängerte Erntesaison',
          },
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
          description: "Vegetatives Wachstum im Gewächshaus.",
          care: "Licht, Temperatur, kräftig düngen.",
        },
        preflower: {
          name: "Vorblüte",
          description: "Photoperiodensteuerung.",
          care: "Lichtstunden steuern, Männchen entfernen.",
        },
        flowering: {
          name: "Blüte",
          description: "Längere Blüte im Gewächshaus (8-16 Wochen je nach Sorte).",
          care: "Kontrollierte Umgebung, Wetterschutz, Schädlingskontrolle.",
        },
        harvest: {
          name: "Ernte",
          description: "Erntezeitpunkt im Gewächshaus.",
          care: "Kontrolliertes Trocknen, Trichome prüfen.",
        },
      },
    },
  },
  careTips: {
    watering: "Gießen, wenn die oberste Erdschicht trocken ist. pH 6,0-7,0 in Erde, 5,5-6,5 in Hydro.",
    fertilizing: "Viel Stickstoff im Wachstum (3-1-2), viel Phosphor in der Blüte (1-3-2).",
    sunlight: "18/6 Stunden im Wachstum, 12/12 Stunden in der Blüte.",
    spacing: "90-180 cm Abstand, kann sehr hoch werden.",
    support: "Starke Stützen oder SCROG für Höhenkontrolle.",
    humidity: "65-70% Sämling, 40-50% Wachstum, 40-45% Blüte.",
    temperature: "21-29°C Tag, 18-27°C Nacht.",
  },
  commonProblems: {
    "Höhenkontrolle": "Kann sehr hoch werden - LST, Topping oder SCROG verwenden",
    "Lange Blüte": "Längere Erntezeit - geduldig sein, Trichome überwachen",
    "Nährstoffmangel": "Große Pflanzen brauchen mehr Nährstoffe - Fütterung erhöhen",
    "Lichteindringung": "Dichte Krone - entlauben und LST für Lichteindringung",
  },
};
