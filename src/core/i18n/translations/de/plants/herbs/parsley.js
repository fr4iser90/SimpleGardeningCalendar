export default {
  name: "Petersilie",
  category: "category.herbs",
  tags: ["tag.biennial"],
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
    watering: "Erde stets feucht halten.",
    fertilizing: "Leicht alle 2-3 Wochen düngen.",
    sunlight: "Halbschatten bis volle Sonne.",
    spacing: "15-30 cm Abstand.",
    temperature: "Kühle bis warme Standorte.",
    soilPH: "6,0-7,0",
    harvesting: "Blätter regelmäßig ernten, um Wachstum zu fördern.",
  },
  commonProblems: {
    "Langsame Keimung": "Petersiliensamen keimen langsam – Geduld haben.",
    "Schossen": "Im zweiten Jahr Blütenbildung – regelmäßig ernten.",
    "Blattflecken": "Pilzkrankheit – Luftzirkulation verbessern, nicht über Kopf gießen.",
  },
}; 