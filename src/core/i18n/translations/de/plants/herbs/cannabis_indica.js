export default {
  name: "Cannabis Indica",
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
          description: "Schnelles Wachstum von Blättern und Stängeln.",
          care: "18/6 Lichtzyklus, stickstoffreiche Düngung, Training für buschiges Wachstum.",
        },
        preflower: {
          name: "Vorblüte",
          description: "Geschlechtsbestimmung der Pflanzen.",
          care: "Wie Wachstum, Männchen entfernen.",
        },
        flowering: {
          name: "Blüte",
          description: "Blütenbildung und Reifung.",
          care: "12/12 Licht, phosphor-/kaliumbetont düngen, Luftfeuchtigkeit senken.",
        },
        harvest: {
          name: "Ernte",
          description: "Vorbereitung und Durchführung der Ernte.",
          care: "Mit klarem Wasser spülen, Trichome beobachten, zum optimalen Zeitpunkt ernten.",
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
          description: "Natürliches vegetatives Wachstum.",
          care: "Sonnenlicht, Training, kräftig düngen.",
        },
        preflower: {
          name: "Vorblüte",
          description: "Natürlicher Photoperioden-Trigger.",
          care: "Erfolgt natürlich, Männchen entfernen.",
        },
        flowering: {
          name: "Blüte",
          description: "Blüte im Freien (6-12 Wochen je nach Sorte).",
          care: "Lichtzyklus, Wetterschutz, Schädlingskontrolle.",
        },
        harvest: {
          name: "Ernte",
          description: "Erntezeitpunkt im Freien.",
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
          description: "Blüte im Gewächshaus (6-12 Wochen je nach Sorte).",
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
    sunlight: "Indoor: 18/6 Stunden im Wachstum, 12/12 in der Blüte. Outdoor: Natürliches Sonnenlicht.",
    spacing: "Indoor: 60-120 cm Abstand. Outdoor: 120-240 cm Abstand für volle Größe.",
    support: "Indoor: SCROG-Netze, LST. Outdoor: Starke Stützen für Windschutz.",
    humidity: "65-70% Sämling, 40-50% Wachstum, 40-45% Blüte.",
    temperature: "21-29°C Tag, 18-27°C Nacht.",
  },
  commonProblems: {
    "Nährstoffverbrennung": "Gelbe/braune Blattspitzen - Düngerkonzentration reduzieren",
    "Lichtverbrennung": "Gebleichte Spitzen - Abstand zu Lampen vergrößern",
    "Budfäule": "Grauer Schimmel in Blüten - Luftzirkulation verbessern, Luftfeuchtigkeit senken",
    "Spinnmilben": "Kleine Netze und Flecken - Luftfeuchtigkeit erhöhen, Raubmilben einsetzen",
    "Echter Mehltau": "Weißer Belag auf Blättern - Luftzirkulation verbessern, Luftfeuchtigkeit senken",
  },
};
