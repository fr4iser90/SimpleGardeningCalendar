export default {
  name: "Cavolo Nero",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "Germinazione dei semi (5-10 giorni)",
          care: "Terreno umido, 15-20°C",
        },
        seedling: {
          name: "Semenzale",
          description: "Sviluppo delle prime foglie",
          care: "Posizione luminosa, mantenere umido",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Forte crescita delle foglie",
          care: "Irrigazione regolare, concimazione, diserbare",
        },
        leaf_development: {
          name: "Sviluppo Foglie",
          description: "Sviluppo delle grandi foglie",
          care: "Mantenere umido, proteggere dal gelo",
        },
        harvest: {
          name: "Raccolta",
          description: "Foglie pronte per la raccolta",
          care: "Raccogliere foglie esterne, lasciare crescere interne",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "Germinazione dei semi (5-10 giorni)",
          care: "Terreno umido, 15-20°C",
        },
        seedling: {
          name: "Semenzale",
          description: "Sviluppo delle prime foglie",
          care: "Posizione luminosa, mantenere umido",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Forte crescita delle foglie",
          care: "Irrigazione regolare, concimazione, diserbare",
        },
        leaf_development: {
          name: "Sviluppo Foglie",
          description: "Sviluppo delle grandi foglie",
          care: "Mantenere umido, proteggere dal gelo",
        },
        harvest: {
          name: "Raccolta",
          description: "Foglie pronte per la raccolta",
          care: "Raccogliere foglie esterne, lasciare crescere interne",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '07-01',
            description: 'Prima primavera a metà estate, dopo che il terreno è lavorabile',
          },
          harvestWindow: {
            start: '06-15',
            end: '11-15',
            description: 'Raccolta fino al gelo forte, più dolce dopo un leggero gelo',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '09-01',
            end: '11-01',
            description: 'Piantagione autunnale per raccolta inverno/primavera',
          },
          harvestWindow: {
            start: '12-01',
            end: '04-15',
            description: 'Raccolta prima che il caldo causi la montata a seme',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "Germinazione dei semi (5-10 giorni)",
          care: "Terreno umido, 15-20°C",
        },
        seedling: {
          name: "Semenzale",
          description: "Sviluppo delle prime foglie",
          care: "Posizione luminosa, mantenere umido",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Forte crescita delle foglie",
          care: "Irrigazione regolare, concimazione, diserbare",
        },
        leaf_development: {
          name: "Sviluppo Foglie",
          description: "Sviluppo delle grandi foglie",
          care: "Mantenere umido, proteggere dal gelo",
        },
        harvest: {
          name: "Raccolta",
          description: "Foglie pronte per la raccolta",
          care: "Raccogliere foglie esterne, lasciare crescere interne",
        },
      },
    },
  },
  careTips: {
    watering: "Mantenere umido, non troppo bagnato",
    fertilizing: "Concime azotato regolare",
    sunlight: "Sole pieno a mezz'ombra (min. 6 ore)",
    spacing: "Distanza 30-45 cm",
    temperature: "Fresco a caldo, 10-25°C ottimale",
    soilPH: "6.0-7.5",
    frost: "Tollera gelo leggero, diventa più dolce",
  },
  commonProblems: {
    "Ernia del Cavolo": "Malattia fungina - aumentare pH, varietà resistenti",
    "Mosca del Cavolo": "Larve sulle radici - rete, consociazione",
    "Afidi": "Piccoli parassiti - introdurre insetti utili, soluzione sapone",
  },
};
