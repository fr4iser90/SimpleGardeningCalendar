export default {
  name: "Himbeeren",
  category: "category.fruits",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        establishment: {
          name: "Etablierung",
          description: "Wurzelbildung (erste 60 Tage)",
          care: "Blüten im ersten Jahr entfernen, Fokus auf Wurzeln",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Rutenwachstum und Entwicklung",
          care: "Ruten an Rankhilfe binden, schwache Triebe entfernen",
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
          care: "Alte Ruten schneiden, mulchen zum Winterschutz",
        },
      },
    },
    outdoor: {
      phases: {
        establishment: {
          name: "Etablierung",
          description: "Wurzelbildung (erste 60 Tage)",
          care: "Blüten im ersten Jahr entfernen, Fokus auf Wurzeln",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Rutenwachstum und Entwicklung",
          care: "Ruten an Rankhilfe binden, schwache Triebe entfernen",
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
          care: "Alte Ruten schneiden, mulchen zum Winterschutz",
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
            start: '06-15',
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
          description: "Wurzelbildung (erste 60 Tage)",
          care: "Blüten im ersten Jahr entfernen, Fokus auf Wurzeln",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Rutenwachstum und Entwicklung",
          care: "Ruten an Rankhilfe binden, schwache Triebe entfernen",
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
          care: "Alte Ruten schneiden, mulchen zum Winterschutz",
        },
      },
    },
  },
  careTips: {
    watering: "Erde stets feucht halten, keine Überkopfbewässerung",
    fertilizing: "Im Frühjahr ausgewogen düngen, wenig Stickstoff",
    sunlight: "Vollsonne (mind. 6 Stunden)",
    spacing: "60-90 cm Abstand",
    temperature: "Kühle Kultur, vor Hitze schützen",
    soilPH: "5,5-6,5",
    trellising: "Ruten an Rankhilfe oder Drahtsystem befestigen",
  },
  commonProblems: {
    "Rutenbohrer": "Insektenschaden an Ruten - befallene Ruten entfernen",
    "Grauschimmel": "Pilz an Früchten - Luftzirkulation verbessern",
    "Spinnmilben": "Kleine Schädlinge an Blättern - Luftfeuchtigkeit erhöhen, Nützlinge einsetzen",
  },
};
