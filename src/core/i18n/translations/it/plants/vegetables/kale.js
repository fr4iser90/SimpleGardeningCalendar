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
