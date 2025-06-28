export default {
  name: "Erdbeeren",
  category: "category.fruits",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        establishment: {
          name: "Etablierung",
          description: "Wurzelbildung (erste 30 Tage)",
          care: "Erde feucht halten, Blüten im ersten Jahr entfernen",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Ausbildung von Ausläufern und Blättern",
          care: "Ausläufer zur Vermehrung nutzen",
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
          care: "Mit Mulch abdecken zum Winterschutz",
        },
      },
    },
    outdoor: {
      phases: {
        establishment: {
          name: "Etablierung",
          description: "Wurzelbildung (erste 30 Tage)",
          care: "Erde feucht halten, Blüten im ersten Jahr entfernen",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Ausbildung von Ausläufern und Blättern",
          care: "Ausläufer zur Vermehrung nutzen",
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
          care: "Mit Mulch abdecken zum Winterschutz",
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
            start: '06-01',
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
          description: "Wurzelbildung (erste 30 Tage)",
          care: "Erde feucht halten, Blüten im ersten Jahr entfernen",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Ausbildung von Ausläufern und Blättern",
          care: "Ausläufer zur Vermehrung nutzen",
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
          care: "Mit Mulch abdecken zum Winterschutz",
        },
      },
    },
  },
  careTips: {
    watering: "Erde stets feucht halten, aber keine Staunässe",
    fertilizing: "Im Frühjahr ausgewogen düngen, wenig Stickstoff",
    sunlight: "Vollsonne (mind. 6 Stunden)",
    spacing: "30-45 cm Abstand",
    temperature: "Kühle Kultur, vor Hitze schützen",
    soilPH: "5,5-6,5",
    mulching: "Stroh als Mulch hält Beeren sauber und feucht",
  },
  commonProblems: {
    "Grauschimmel": "Pilz an Früchten - Luftzirkulation verbessern",
    "Schnecken": "Fressen Löcher in Beeren - Schneckenkorn oder Bierfallen",
    "Vögel": "Fressen reife Beeren - Netze verwenden",
  },
};
