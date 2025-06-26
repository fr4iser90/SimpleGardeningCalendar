export default {
  name: "Lattuga",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "Germinazione dei semi (7-14 giorni)",
          care: "Terreno umido, 15-20°C, germinatore di luce",
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
        head_formation: {
          name: "Formazione Testa",
          description: "Sviluppo della testa di lattuga",
          care: "Mantenere umido, proteggere dal calore",
        },
        harvest: {
          name: "Raccolta",
          description: "Lattuga pronta per la raccolta",
          care: "Raccogliere pianta intera o foglie singole",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "Germinazione dei semi (7-14 giorni)",
          care: "Terreno umido, 15-20°C, germinatore di luce",
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
        head_formation: {
          name: "Formazione Testa",
          description: "Sviluppo della testa di lattuga",
          care: "Mantenere umido, proteggere dal calore",
        },
        harvest: {
          name: "Raccolta",
          description: "Lattuga pronta per la raccolta",
          care: "Raccogliere pianta intera o foglie singole",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "Germinazione dei semi (7-14 giorni)",
          care: "Terreno umido, 15-20°C, germinatore di luce",
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
        head_formation: {
          name: "Formazione Testa",
          description: "Sviluppo della testa di lattuga",
          care: "Mantenere umido, proteggere dal calore",
        },
        harvest: {
          name: "Raccolta",
          description: "Lattuga pronta per la raccolta",
          care: "Raccogliere pianta intera o foglie singole",
        },
      },
    },
  },
  careTips: {
    watering: "Mantenere umido, evitare ristagni",
    fertilizing: "Concimazione leggera, poco azoto",
    sunlight: "Sole pieno a mezz'ombra (min. 6 ore)",
    spacing: "Distanza 20-30 cm",
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
