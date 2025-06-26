export default {
  name: "Fragole",
  category: "category.fruits",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        establishment: {
          name: "Stabilimento",
          description: "Sviluppo radicale (primi 30 giorni)",
          care: "Mantenere terreno umido, rimuovere fiori primo anno",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Sviluppo stoloni e foglie",
          care: "Utilizzare stoloni per propagazione",
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
          care: "Coprire con pacciame per protezione invernale",
        },
      },
    },
    outdoor: {
      phases: {
        establishment: {
          name: "Stabilimento",
          description: "Sviluppo radicale (primi 30 giorni)",
          care: "Mantenere terreno umido, rimuovere fiori primo anno",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Sviluppo stoloni e foglie",
          care: "Utilizzare stoloni per propagazione",
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
          care: "Coprire con pacciame per protezione invernale",
        },
      },
    },
    greenhouse: {
      phases: {
        establishment: {
          name: "Stabilimento",
          description: "Sviluppo radicale (primi 30 giorni)",
          care: "Mantenere terreno umido, rimuovere fiori primo anno",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Sviluppo stoloni e foglie",
          care: "Utilizzare stoloni per propagazione",
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
          care: "Coprire con pacciame per protezione invernale",
        },
      },
    },
  },
  careTips: {
    watering: "Mantenere terreno costantemente umido, evitare ristagni",
    fertilizing: "Concimazione bilanciata in primavera, basso azoto",
    sunlight: "Sole pieno (min. 6 ore)",
    spacing: "Distanza 30-45 cm",
    temperature: "Coltura fresca, proteggere dal calore",
    soilPH: "5,5-6,5",
    mulching: "Pacciame di paglia mantiene bacche pulite e umide",
  },
  commonProblems: {
    "Marciume Grigio": "Fungo sui frutti - migliorare circolazione aria",
    "Lumache": "Mangiano buchi nelle bacche - esche lumachicida o trappole birra",
    "Uccelli": "Mangiano bacche mature - utilizzare reti",
  },
};
