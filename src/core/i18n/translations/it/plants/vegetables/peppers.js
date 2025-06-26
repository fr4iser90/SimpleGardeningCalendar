export default {
  name: "Peperoni",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "Germinazione dei semi (10-21 giorni)",
          care: "Terreno caldo e umido, 25-30°C",
        },
        seedling: {
          name: "Semenzale",
          description: "Sviluppo delle prime foglie",
          care: "Posizione luminosa, mantenere umido",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Forte crescita foglie e steli",
          care: "Irrigazione regolare, concimazione, sostegno",
        },
        flowering: {
          name: "Fioritura",
          description: "Formazione fiori e impollinazione",
          care: "Promuovere circolazione aria, scuotere fiori per impollinazione",
        },
        fruiting: {
          name: "Fruttificazione",
          description: "Sviluppo e maturazione peperoni",
          care: "Irrigazione regolare, raccogliere frutti maturi",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "Germinazione dei semi (10-21 giorni)",
          care: "Terreno caldo e umido, 25-30°C",
        },
        seedling: {
          name: "Semenzale",
          description: "Sviluppo delle prime foglie",
          care: "Posizione luminosa, mantenere umido",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Forte crescita foglie e steli",
          care: "Irrigazione regolare, concimazione, sostegno",
        },
        flowering: {
          name: "Fioritura",
          description: "Formazione fiori e impollinazione",
          care: "Promuovere circolazione aria, scuotere fiori per impollinazione",
        },
        fruiting: {
          name: "Fruttificazione",
          description: "Sviluppo e maturazione peperoni",
          care: "Irrigazione regolare, raccogliere frutti maturi",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "Germinazione dei semi (10-21 giorni)",
          care: "Terreno caldo e umido, 25-30°C",
        },
        seedling: {
          name: "Semenzale",
          description: "Sviluppo delle prime foglie",
          care: "Posizione luminosa, mantenere umido",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Forte crescita foglie e steli",
          care: "Irrigazione regolare, concimazione, sostegno",
        },
        flowering: {
          name: "Fioritura",
          description: "Formazione fiori e impollinazione",
          care: "Promuovere circolazione aria, scuotere fiori per impollinazione",
        },
        fruiting: {
          name: "Fruttificazione",
          description: "Sviluppo e maturazione peperoni",
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
    "Ragnetti Rossi": "Piccoli parassiti - aumentare umidità",
  },
};
