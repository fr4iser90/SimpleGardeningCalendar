export default {
  name: "Spinaci",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "Germinazione dei semi (7-14 giorni)",
          care: "Terreno umido, 15-20°C",
        },
        seedling: {
          name: "Semenzale",
          description: "Sviluppo delle prime foglie",
          care: "Posizione luminosa, mantenere umido",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crescita foglie e formazione rosetta",
          care: "Irrigazione regolare, diradare, diserbare",
        },
        leaf_development: {
          name: "Sviluppo Foglie",
          description: "Sviluppo delle grandi foglie",
          care: "Mantenere umido, proteggere dal calore",
        },
        harvest: {
          name: "Raccolta",
          description: "Spinaci pronti per la raccolta",
          care: "Raccogliere foglie esterne, lasciare crescere interne",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "Germinazione dei semi (7-14 giorni)",
          care: "Terreno umido, 15-20°C",
        },
        seedling: {
          name: "Semenzale",
          description: "Sviluppo delle prime foglie",
          care: "Posizione luminosa, mantenere umido",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crescita foglie e formazione rosetta",
          care: "Irrigazione regolare, diradare, diserbare",
        },
        leaf_development: {
          name: "Sviluppo Foglie",
          description: "Sviluppo delle grandi foglie",
          care: "Mantenere umido, proteggere dal calore",
        },
        harvest: {
          name: "Raccolta",
          description: "Spinaci pronti per la raccolta",
          care: "Raccogliere foglie esterne, lasciare crescere interne",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'Prima primavera, non appena il terreno è lavorabile',
          },
          harvestWindow: {
            start: '05-01',
            end: '07-01',
            description: 'Raccolta prima del caldo',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '10-01',
            end: '12-01',
            description: 'Piantagione autunnale per raccolta inverno/primavera',
          },
          harvestWindow: {
            start: '01-15',
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
          description: "Germinazione dei semi (7-14 giorni)",
          care: "Terreno umido, 15-20°C",
        },
        seedling: {
          name: "Semenzale",
          description: "Sviluppo delle prime foglie",
          care: "Posizione luminosa, mantenere umido",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crescita foglie e formazione rosetta",
          care: "Irrigazione regolare, diradare, diserbare",
        },
        leaf_development: {
          name: "Sviluppo Foglie",
          description: "Sviluppo delle grandi foglie",
          care: "Mantenere umido, proteggere dal calore",
        },
        harvest: {
          name: "Raccolta",
          description: "Spinaci pronti per la raccolta",
          care: "Raccogliere foglie esterne, lasciare crescere interne",
        },
      },
    },
  },
  careTips: {
    watering: "Mantenere umido, non troppo bagnato",
    fertilizing: "Concimazione leggera, poco azoto",
    sunlight: "Sole pieno a mezz'ombra (min. 6 ore)",
    spacing: "Distanza 15-25 cm",
    temperature: "Fresco, 15-20°C ottimale",
    soilPH: "6.0-7.0",
    bolting: "Proteggere dal calore, altrimenti va a seme",
  },
  commonProblems: {
    "Montatura a Seme": "Troppo calore - ombreggiare, raccogliere presto",
    "Lumache": "Mangiano buchi nelle foglie - esche, trappole birra",
    "Afidi": "Piccoli parassiti - introdurre insetti utili, soluzione sapone",
  },
};
