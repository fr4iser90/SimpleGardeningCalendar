export default {
  name: "Lamponi",
  category: "category.fruits",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        establishment: {
          name: "Stabilimento",
          description: "Sviluppo radicale (primi 60 giorni)",
          care: "Rimuovere fiori primo anno, focus su radici",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crescita e sviluppo canne",
          care: "Legare canne al supporto, rimuovere germogli deboli",
        },
        flowering: {
          name: "Fioritura",
          description: "Formazione fiori",
          care: "Proteggere fiori da gelate tardive",
        },
        fruiting: {
          name: "Fruttificazione",
          description: "Produzione bacche",
          care: "Irrigazione e concimazione regolari, mantenere bacche asciutte",
        },
        dormancy: {
          name: "Dormienza",
          description: "Riposo invernale",
          care: "Potare canne vecchie, pacciamare per protezione invernale",
        },
      },
    },
    outdoor: {
      phases: {
        establishment: {
          name: "Stabilimento",
          description: "Sviluppo radicale (primi 60 giorni)",
          care: "Rimuovere fiori primo anno, focus su radici",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crescita e sviluppo canne",
          care: "Legare canne al supporto, rimuovere germogli deboli",
        },
        flowering: {
          name: "Fioritura",
          description: "Formazione fiori",
          care: "Proteggere fiori da gelate tardive",
        },
        fruiting: {
          name: "Fruttificazione",
          description: "Produzione bacche",
          care: "Irrigazione e concimazione regolari, mantenere bacche asciutte",
        },
        dormancy: {
          name: "Dormienza",
          description: "Riposo invernale",
          care: "Potare canne vecchie, pacciamare per protezione invernale",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'Piantagione dall\'inizio alla metà della primavera',
          },
          harvestWindow: {
            start: '06-15',
            end: '09-30',
            description: 'Raccolta durante l\'estate',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-01',
            end: '04-15',
            description: 'Piantagione molto precoce in primavera',
          },
          harvestWindow: {
            start: '04-15',
            end: '07-31',
            description: 'Raccolta prima del caldo estivo',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        establishment: {
          name: "Stabilimento",
          description: "Sviluppo radicale (primi 60 giorni)",
          care: "Rimuovere fiori primo anno, focus su radici",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crescita e sviluppo canne",
          care: "Legare canne al supporto, rimuovere germogli deboli",
        },
        flowering: {
          name: "Fioritura",
          description: "Formazione fiori",
          care: "Proteggere fiori da gelate tardive",
        },
        fruiting: {
          name: "Fruttificazione",
          description: "Produzione bacche",
          care: "Irrigazione e concimazione regolari, mantenere bacche asciutte",
        },
        dormancy: {
          name: "Dormienza",
          description: "Riposo invernale",
          care: "Potare canne vecchie, pacciamare per protezione invernale",
        },
      },
    },
  },
  careTips: {
    watering: "Mantenere terreno costantemente umido, nessuna irrigazione dall'alto",
    fertilizing: "Concimazione bilanciata in primavera, basso azoto",
    sunlight: "Sole pieno (min. 6 ore)",
    spacing: "Distanza 60-90 cm",
    temperature: "Coltura fresca, proteggere dal calore",
    soilPH: "5,5-6,5",
    trellising: "Legare canne al supporto o sistema fili",
  },
  commonProblems: {
    "Rodilegno": "Danni insetti alle canne - rimuovere canne infette",
    "Marciume Grigio": "Fungo sui frutti - migliorare circolazione aria",
    "Ragnetti Rossi": "Piccoli parassiti su foglie - aumentare umidità, utilizzare insetti benefici",
  },
};
