export default {
  name: "Pomodori",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "Germinazione dei semi (7-14 giorni)",
          care: "Terreno caldo e umido, 20-25°C",
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
          care: "Promuovere circolazione aria, scuotere fiori",
        },
        fruiting: {
          name: "Fruttificazione",
          description: "Sviluppo e maturazione dei pomodori",
          care: "Irrigazione regolare, raccogliere frutti maturi",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "Germinazione dei semi (7-14 giorni)",
          care: "Terreno caldo e umido, 20-25°C",
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
          care: "Promuovere circolazione aria, scuotere fiori",
        },
        fruiting: {
          name: "Fruttificazione",
          description: "Sviluppo e maturazione dei pomodori",
          care: "Irrigazione regolare, raccogliere frutti maturi",
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
            start: '07-15',
            end: '10-01',
            description: 'Fino alla prima gelata',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-15',
            end: '05-01',
            description: 'Stagione di crescita prolungata',
          },
          harvestWindow: {
            start: '06-01',
            end: '11-15',
            description: 'Periodo di raccolta prolungato',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "Germinazione dei semi (7-14 giorni)",
          care: "Terreno caldo e umido, 20-25°C",
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
          care: "Promuovere circolazione aria, scuotere fiori",
        },
        fruiting: {
          name: "Fruttificazione",
          description: "Sviluppo e maturazione dei pomodori",
          care: "Irrigazione regolare, raccogliere frutti maturi",
        },
      },
    },
  },
  careTips: {
    watering: "Mantenere umido, evitare ristagni",
    fertilizing: "Concime ortaggi regolare, bilanciato",
    sunlight: "Sole pieno (min. 8 ore)",
    spacing: "Distanza 45-60 cm",
    temperature: "Caldo, 20-30°C ottimale",
    soilPH: "6.0-7.0",
    support: "Tutori o graticci per stabilità",
  },
  commonProblems: {
    "Marciume Apicale": "Carenza di calcio - irrigare regolarmente, controllare pH",
    "Afidi": "Piccoli parassiti - introdurre insetti utili, soluzione sapone",
    "Peronospora": "Malattia fungina - migliorare circolazione aria, varietà resistenti",
  },
};
