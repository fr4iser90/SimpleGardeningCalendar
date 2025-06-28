export default {
  name: "Blaubeeren",
  category: "category.fruits",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        establishment: {
          name: "Etablierung",
          description: "Wurzelbildung (erste 90 Tage)",
          care: "Blüten im ersten Jahr entfernen, Fokus auf Wurzeln",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Buschwachstum und Entwicklung",
          care: "Formierender Schnitt, schwache Triebe entfernen",
        },
        flowering: {
          name: "Blüte",
          description: "Blütenbildung",
          care: "Blüten vor Spätfrost schützen",
        },
        fruiting: {
          name: "Fruchtbildung",
          description: "Beerenproduktion",
          care: "Regelmäßig gießen und düngen, Beeren trocken halten",
        },
        dormancy: {
          name: "Ruhephase",
          description: "Winterruhe",
          care: "Altes Holz schneiden, mulchen zum Winterschutz",
        },
      },
    },
    outdoor: {
      phases: {
        establishment: {
          name: "Etablierung",
          description: "Wurzelbildung (erste 90 Tage)",
          care: "Blüten im ersten Jahr entfernen, Fokus auf Wurzeln",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Buschwachstum und Entwicklung",
          care: "Formierender Schnitt, schwache Triebe entfernen",
        },
        flowering: {
          name: "Blüte",
          description: "Blütenbildung",
          care: "Blüten vor Spätfrost schützen",
        },
        fruiting: {
          name: "Fruchtbildung",
          description: "Beerenproduktion",
          care: "Regelmäßig gießen und düngen, Beeren trocken halten",
        },
        dormancy: {
          name: "Ruhephase",
          description: "Winterruhe",
          care: "Altes Holz schneiden, mulchen zum Winterschutz",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'Früher bis mittlerer Frühling',
          },
          harvestWindow: {
            start: '07-01',
            end: '09-30',
            description: 'Ernte während des Sommers',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-01',
            end: '04-15',
            description: 'Sehr früher Frühling',
          },
          harvestWindow: {
            start: '04-15',
            end: '07-31',
            description: 'Ernte vor der Sommerhitze',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        establishment: {
          name: "Etablierung",
          description: "Wurzelbildung (erste 90 Tage)",
          care: "Blüten im ersten Jahr entfernen, Fokus auf Wurzeln",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Buschwachstum und Entwicklung",
          care: "Formierender Schnitt, schwache Triebe entfernen",
        },
        flowering: {
          name: "Blüte",
          description: "Blütenbildung",
          care: "Blüten vor Spätfrost schützen",
        },
        fruiting: {
          name: "Fruchtbildung",
          description: "Beerenproduktion",
          care: "Regelmäßig gießen und düngen, Beeren trocken halten",
        },
        dormancy: {
          name: "Ruhephase",
          description: "Winterruhe",
          care: "Altes Holz schneiden, mulchen zum Winterschutz",
        },
      },
    },
  },
  careTips: {
    watering: "Erde stets feucht halten, keine Überkopfbewässerung",
    fertilizing: "Spezialdünger für Moorbeetpflanzen, pH 4,5-5,5",
    sunlight: "Vollsonne (mind. 6 Stunden)",
    spacing: "1,2-1,8 m Abstand",
    temperature: "Kühle Kultur, vor Hitze schützen",
    soilPH: "4,5-5,5 (saurer Boden nötig)",
    mulching: "Rindenmulch oder Sägespäne für Säurehaltung",
  },
  commonProblems: {
    "Eisenmangel": "Gelbe Blätter mit grünen Adern - pH prüfen",
    "Vögel": "Fressen reife Beeren - Netze verwenden",
    "Wurzelfäule": "Pilzkrankheit - Drainage verbessern, Staunässe vermeiden",
  },
};
