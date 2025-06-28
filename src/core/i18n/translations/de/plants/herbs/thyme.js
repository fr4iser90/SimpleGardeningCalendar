export default {
  name: "Thymian",
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
          description: "Kontinuierliche Ernte von Trieben.",
          care: "Triebe regelmäßig ernten, um neues Wachstum zu fördern. Blüte vermeiden.",
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
          description: "Kontinuierliche Ernte von Trieben.",
          care: "Triebe nach Bedarf ernten. Rückschnitt verhindert Blüte und Ausbreitung.",
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
          description: "Kontinuierliche Ernte von Trieben.",
          care: "Triebe nach Bedarf ernten. Rückschnitt verhindert Blüte und Ausbreitung.",
        },
      },
    },
  },
  careTips: {
    watering: "Zwischen den Wassergaben Erde abtrocknen lassen.",
    fertilizing: "Leicht alle 3-4 Wochen düngen.",
    sunlight: "Vollsonnig (mind. 6 Stunden täglich).",
    spacing: "30-45 cm Abstand.",
    temperature: "Wärmeliebend, trockenheitsverträglich.",
    soilPH: "6,0-8,0",
    harvesting: "Triebe regelmäßig ernten, um Wachstum zu fördern.",
  },
  commonProblems: {
    "Wurzelfäule": "Zu viel Wasser – auf gute Drainage achten.",
    "Sparriges Wachstum": "Zu wenig Licht – für mehr Sonne sorgen.",
    "Frostschäden": "Vor Frost in kalten Regionen schützen.",
  },
}; 