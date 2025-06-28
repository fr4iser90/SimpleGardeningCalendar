export default {
  name: "Menta",
  category: "category.herbs",
  tags: ["tag.perennial"],
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "I semi germinano e compaiono le radici.",
          care: "Mantenere caldo e umido. Usare vassoi o piccoli vasi, coprire leggermente con terra.",
        },
        seedling: {
          name: "Piantina",
          description: "Prime vere foglie.",
          care: "Fornire luce intensa, mantenere il terreno umido ma non inzuppato.",
        },
        vegetative: {
          name: "Vegetativa",
          description: "Crescita di foglie e steli.",
          care: "Pizzicare le punte per favorire la ramificazione, annaffiare regolarmente, concimare leggermente ogni 2-3 settimane.",
        },
        harvest: {
          name: "Raccolta",
          description: "Raccolta continua delle foglie.",
          care: "Raccogliere regolarmente per stimolare la crescita. Evitare la fioritura.",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "I semi germinano e compaiono le radici.",
          care: "Seminare dopo l'ultima gelata, mantenere il terreno umido fino alla comparsa delle piantine.",
        },
        seedling: {
          name: "Piantina",
          description: "Prime vere foglie.",
          care: "Posizionare a mezz'ombra, proteggere dal sole forte e dal vento.",
        },
        vegetative: {
          name: "Vegetativa",
          description: "Crescita di foglie e steli.",
          care: "Annaffiare regolarmente, concimare leggermente, pizzicare le punte per la ramificazione.",
        },
        harvest: {
          name: "Raccolta",
          description: "Raccolta continua delle foglie.",
          care: "Raccogliere foglie e steli secondo necessità. La potatura previene la fioritura e la diffusione.",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-01',
            description: 'Dopo l\'ultima gelata, pianta perenne',
          },
          harvestWindow: {
            start: '05-15',
            end: '10-15',
            description: 'Raccolta continua durante la stagione di crescita',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '05-01',
            description: 'Inizio precoce per pianta perenne',
          },
          harvestWindow: {
            start: '04-15',
            end: '11-15',
            description: 'Stagione di raccolta estesa',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "I semi germinano e compaiono le radici.",
          care: "Mantenere caldo e umido in ambiente protetto.",
        },
        seedling: {
          name: "Piantina",
          description: "Prime vere foglie.",
          care: "Fornire luce intensa, mantenere il terreno umido.",
        },
        vegetative: {
          name: "Vegetativa",
          description: "Crescita di foglie e steli.",
          care: "Pizzicare le punte, annaffiare regolarmente, concimare leggermente.",
        },
        harvest: {
          name: "Raccolta",
          description: "Raccolta continua delle foglie.",
          care: "Raccogliere foglie e steli secondo necessità. Potare per evitare la fioritura e la diffusione.",
        },
      },
    },
  },
  careTips: {
    watering: "Mantenere il terreno sempre umido ma non inzuppato.",
    fertilizing: "Concimare leggermente ogni 2-3 settimane.",
    sunlight: "Mezz'ombra o pieno sole.",
    spacing: "30-45 cm di distanza.",
    temperature: "Pianta da clima fresco o caldo.",
    soilPH: "6,0-7,0",
    harvesting: "Pizzicare regolarmente per stimolare la crescita.",
  },
  commonProblems: {
    "Ruggine": "Macchie arancioni sulle foglie – migliorare l'aerazione, ridurre l'umidità.",
    "Marciume radicale": "Eccesso d'acqua – garantire un buon drenaggio.",
    "Crescita invasiva": "Coltivare in vaso per limitare la diffusione.",
  },
}; 