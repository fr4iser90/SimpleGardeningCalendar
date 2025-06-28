export default {
  name: "Timo",
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
          care: "Pizzicare le punte, annaffiare regolarmente, concimare leggermente ogni 3-4 settimane.",
        },
        harvest: {
          name: "Raccolta",
          description: "Raccolta continua dei rametti.",
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
          description: "Raccolta continua dei rametti.",
          care: "Raccogliere i rametti secondo necessità. Potare per evitare la fioritura e la diffusione.",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: "04-01",
            end: "06-01",
            description: "Semina in primavera, dopo le gelate",
          },
          harvestWindow: {
            start: "06-15",
            end: "09-30",
            description: "Raccolta durante l'estate",
          },
        },
        mediterranean: {
          plantingWindow: {
            start: "02-15",
            end: "05-01",
            description: "Semina molto precoce fino a fine primavera",
          },
          harvestWindow: {
            start: "05-15",
            end: "09-30",
            description: "Raccolta in estate",
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
          description: "Raccolta continua dei rametti.",
          care: "Raccogliere i rametti secondo necessità. Potare per evitare la fioritura e la diffusione.",
        },
      },
    },
  },
  careTips: {
    watering: "Lasciare asciugare il terreno tra un'annaffiatura e l'altra.",
    fertilizing: "Concimare leggermente ogni 3-4 settimane.",
    sunlight: "Pieno sole (6+ ore al giorno).",
    spacing: "30-45 cm di distanza.",
    temperature: "Ama il caldo, tollera la siccità.",
    soilPH: "6,0-8,0",
    harvesting: "Raccogliere regolarmente per stimolare la crescita.",
  },
  commonProblems: {
    "Marciume radicale": "Eccesso d'acqua – garantire un buon drenaggio.",
    "Crescita esile": "Poca luce – fornire più sole.",
    "Danni da gelo": "Proteggere dal gelo nelle regioni fredde.",
  },
}; 