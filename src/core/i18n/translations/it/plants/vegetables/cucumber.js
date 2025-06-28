export default {
  name: "Cetrioli",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "Germinazione dei semi (7-10 giorni)",
          care: "Terreno caldo e umido, 20-25°C",
        },
        seedling: {
          name: "Semenzale",
          description: "Sviluppo delle prime foglie",
          care: "Posizione luminosa, mantenere umido",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Forte crescita foglie e viticci",
          care: "Irrigazione regolare, concimazione, graticcio",
        },
        flowering: {
          name: "Fioritura",
          description: "Formazione fiori e impollinazione",
          care: "Promuovere circolazione aria, impollinare fiori femminili",
        },
        fruiting: {
          name: "Fruttificazione",
          description: "Sviluppo e maturazione cetrioli",
          care: "Irrigazione regolare, raccogliere cetrioli giovani",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "Germinazione dei semi (3-10 giorni)",
          care: "Terreno caldo e umido, 20-30°C",
        },
        seedling: {
          name: "Semenzale",
          description: "Sviluppo delle prime foglie",
          care: "Posizione luminosa, mantenere umido",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Forte crescita di foglie e steli",
          care: "Irrigazione regolare, concimazione, sostegno",
        },
        flowering: {
          name: "Fioritura",
          description: "Formazione dei fiori e impollinazione",
          care: "Promuovere circolazione aria, attirare impollinatori",
        },
        fruiting: {
          name: "Fruttificazione",
          description: "Sviluppo e maturazione dei cetrioli",
          care: "Irrigazione regolare, raccogliere frutti regolarmente",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '05-15',
            end: '06-15',
            description: 'Dopo l\'ultima gelata, terreno caldo',
          },
          harvestWindow: {
            start: '07-01',
            end: '09-15',
            description: 'Raccolta continua fino al primo freddo',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '04-01',
            end: '06-01',
            description: 'Stagione di crescita prolungata',
          },
          harvestWindow: {
            start: '06-01',
            end: '10-15',
            description: 'Periodo di raccolta prolungato',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "Germinazione dei semi (7-10 giorni)",
          care: "Terreno caldo e umido, 20-25°C",
        },
        seedling: {
          name: "Semenzale",
          description: "Sviluppo delle prime foglie",
          care: "Posizione luminosa, mantenere umido",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Forte crescita foglie e viticci",
          care: "Irrigazione regolare, concimazione, graticcio",
        },
        flowering: {
          name: "Fioritura",
          description: "Formazione fiori e impollinazione",
          care: "Promuovere circolazione aria, impollinare fiori femminili",
        },
        fruiting: {
          name: "Fruttificazione",
          description: "Sviluppo e maturazione cetrioli",
          care: "Irrigazione regolare, raccogliere cetrioli giovani",
        },
      },
    },
  },
  careTips: {
    watering: "Mantenere umido, evitare ristagni",
    fertilizing: "Concime ortaggi regolare, bilanciato",
    sunlight: "Sole pieno (min. 8 ore)",
    spacing: "Distanza 30-60 cm",
    temperature: "Caldo, 20-30°C ottimale",
    soilPH: "6.0-7.0",
    support: "Graticcio o sostegno per migliore crescita",
  },
  commonProblems: {
    "Oidio": "Malattia fungina - migliorare circolazione aria, varietà resistenti",
    "Virus del Mosaico": "Malattia virale - controllare afidi, rimuovere piante malate",
    "Cetrioli Amari": "Stress irrigazione irregolare - mantenere umidità costante",
  },
};
