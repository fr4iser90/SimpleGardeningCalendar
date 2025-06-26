export default {
  name: "Carote",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "Germinazione dei semi (10-21 giorni)",
          care: "Terreno umido, 15-20°C",
        },
        seedling: {
          name: "Semenzale",
          description: "Sviluppo delle prime foglie",
          care: "Posizione luminosa, mantenere umido",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crescita foglie e sviluppo radici",
          care: "Irrigazione regolare, diradare, diserbare",
        },
        root_development: {
          name: "Sviluppo Radici",
          description: "Ingrossamento della radice di carota",
          care: "Mantenere umido, terreno sciolto",
        },
        harvest: {
          name: "Raccolta",
          description: "Carote pronte per la raccolta",
          care: "Estrarre delicatamente, non danneggiare",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "Germinazione dei semi (10-21 giorni)",
          care: "Terreno umido, 15-20°C",
        },
        seedling: {
          name: "Semenzale",
          description: "Sviluppo delle prime foglie",
          care: "Posizione luminosa, mantenere umido",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crescita foglie e sviluppo radici",
          care: "Irrigazione regolare, diradare, diserbare",
        },
        root_development: {
          name: "Sviluppo Radici",
          description: "Ingrossamento della radice di carota",
          care: "Mantenere umido, terreno sciolto",
        },
        harvest: {
          name: "Raccolta",
          description: "Carote pronte per la raccolta",
          care: "Estrarre delicatamente, non danneggiare",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "Germinazione dei semi (10-21 giorni)",
          care: "Terreno umido, 15-20°C",
        },
        seedling: {
          name: "Semenzale",
          description: "Sviluppo delle prime foglie",
          care: "Posizione luminosa, mantenere umido",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crescita foglie e sviluppo radici",
          care: "Irrigazione regolare, diradare, diserbare",
        },
        root_development: {
          name: "Sviluppo Radici",
          description: "Ingrossamento della radice di carota",
          care: "Mantenere umido, terreno sciolto",
        },
        harvest: {
          name: "Raccolta",
          description: "Carote pronte per la raccolta",
          care: "Estrarre delicatamente, non danneggiare",
        },
      },
    },
  },
  careTips: {
    watering: "Mantenere umido, evitare ristagni",
    fertilizing: "Concimazione leggera, poco azoto",
    sunlight: "Sole pieno (min. 8 ore)",
    spacing: "Distanza 5-8 cm",
    temperature: "Fresco a caldo, 15-25°C ottimale",
    soilPH: "6.0-7.0",
    soil: "Terreno sciolto, sabbioso senza sassi",
  },
  commonProblems: {
    "Mosca della Carota": "Larve nelle radici - rete, consociazione",
    "Radici Biforcate": "Terreno sassoso - preparare bene il terreno",
    "Spalle Verdi": "Esposte alla luce - coprire con terra",
  },
};
