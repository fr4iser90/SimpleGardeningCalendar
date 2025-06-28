export default {
  name: "Salbei",
  category: "category.herbs",
  tags: ["tag.perennial"],
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samen keimen und Wurzeln bilden sich.",
          care: "Warm und feucht halten. In Anzuchtschale oder kleinen Töpfen, leicht mit Erde bedecken.",
        },
        seedling: {
          name: "Sämling",
          description: "Erste echte Blätter entwickeln sich.",
          care: "Helles Licht bieten, Erde feucht aber nicht nass halten.",
        },
        vegetative: {
          name: "Wachstum",
          description: "Blatt- und Stängelwachstum.",
          care: "Triebspitzen auskneifen, regelmäßig gießen, alle 3-4 Wochen leicht düngen.",
        },
        harvest: {
          name: "Ernte",
          description: "Kontinuierliche Ernte der Blätter.",
          care: "Blätter regelmäßig ernten, um neues Wachstum zu fördern. Blüte vermeiden.",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samen keimen und Wurzeln bilden sich.",
          care: "Nach dem letzten Frost aussäen, Erde feucht halten bis Keimlinge erscheinen.",
        },
        seedling: {
          name: "Sämling",
          description: "Erste echte Blätter entwickeln sich.",
          care: "Halbschattig stellen, vor starker Sonne und Wind schützen.",
        },
        vegetative: {
          name: "Wachstum",
          description: "Blatt- und Stängelwachstum.",
          care: "Regelmäßig gießen, leicht düngen, Triebspitzen auskneifen.",
        },
        harvest: {
          name: "Ernte",
          description: "Kontinuierliche Ernte der Blätter.",
          care: "Blätter und Stängel nach Bedarf ernten. Rückschnitt verhindert Blüte und Ausbreitung.",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-01',
            description: 'Nach dem letzten Frost, mehrjährige Pflanze',
          },
          harvestWindow: {
            start: '05-15',
            end: '10-15',
            description: 'Kontinuierliche Ernte während der Wachstumssaison',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '05-01',
            description: 'Früher Start für mehrjährige Pflanze',
          },
          harvestWindow: {
            start: '04-15',
            end: '11-15',
            description: 'Verlängerte Erntesaison',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samen keimen und Wurzeln bilden sich.",
          care: "Warm und feucht im Gewächshaus halten.",
        },
        seedling: {
          name: "Sämling",
          description: "Erste echte Blätter entwickeln sich.",
          care: "Helles Licht bieten, Erde feucht halten.",
        },
        vegetative: {
          name: "Wachstum",
          description: "Blatt- und Stängelwachstum.",
          care: "Triebspitzen auskneifen, regelmäßig gießen, leicht düngen.",
        },
        harvest: {
          name: "Ernte",
          description: "Kontinuierliche Ernte der Blätter.",
          care: "Blätter und Stängel nach Bedarf ernten. Rückschnitt verhindert Blüte und Ausbreitung.",
        },
      },
    },
  },
  careTips: {
    watering: "Zwischen den Wassergaben Erde abtrocknen lassen.",
    fertilizing: "Leicht alle 3-4 Wochen düngen.",
    sunlight: "Vollsonnig (mind. 6 Stunden täglich).",
    spacing: "45-60 cm Abstand.",
    temperature: "Wärmeliebend, trockenheitsverträglich.",
    soilPH: "6,0-7,0",
    harvesting: "Blätter regelmäßig ernten, um Wachstum zu fördern.",
  },
  commonProblems: {
    "Wurzelfäule": "Zu viel Wasser – auf gute Drainage achten.",
    "Sparriges Wachstum": "Zu wenig Licht – für mehr Sonne sorgen.",
    "Frostschäden": "Vor Frost in kalten Regionen schützen.",
  },
}; 