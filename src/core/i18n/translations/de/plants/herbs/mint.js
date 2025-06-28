export default {
  name: "Minze",
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
          care: "Triebspitzen auskneifen, regelmäßig gießen, alle 2-3 Wochen leicht düngen.",
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
    watering: "Erde stets feucht, aber nicht nass halten.",
    fertilizing: "Leicht alle 2-3 Wochen düngen.",
    sunlight: "Halbschatten bis volle Sonne.",
    spacing: "30-45 cm Abstand.",
    temperature: "Kühle bis warme Standorte.",
    soilPH: "6,0-7,0",
    harvesting: "Blätter regelmäßig auskneifen, um Wachstum zu fördern.",
  },
  commonProblems: {
    "Rostkrankheit": "Orange Flecken auf Blättern – Luftzirkulation verbessern, Luftfeuchtigkeit senken.",
    "Wurzelfäule": "Zu viel Wasser – auf gute Drainage achten.",
    "Invasives Wachstum": "In Töpfen pflanzen, um Ausbreitung zu verhindern.",
  },
}; 