export default {
  name: "Mirtilli",
  category: "category.fruits",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        establishment: {
          name: "Stabilimento",
          description: "Sviluppo radicale (primi 90 giorni)",
          care: "Rimuovere fiori primo anno, focus su radici",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crescita e sviluppo cespuglio",
          care: "Potatura di formazione, rimuovere germogli deboli",
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
          care: "Potare legno vecchio, pacciamare per protezione invernale",
        },
      },
    },
    outdoor: {
      phases: {
        establishment: {
          name: "Stabilimento",
          description: "Sviluppo radicale (primi 90 giorni)",
          care: "Rimuovere fiori primo anno, focus su radici",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crescita e sviluppo cespuglio",
          care: "Potatura di formazione, rimuovere germogli deboli",
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
          care: "Potare legno vecchio, pacciamare per protezione invernale",
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
            start: '07-01',
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
          description: "Sviluppo radicale (primi 90 giorni)",
          care: "Rimuovere fiori primo anno, focus su radici",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crescita e sviluppo cespuglio",
          care: "Potatura di formazione, rimuovere germogli deboli",
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
          care: "Potare legno vecchio, pacciamare per protezione invernale",
        },
      },
    },
  },
  careTips: {
    watering: "Mantenere terreno costantemente umido, nessuna irrigazione dall'alto",
    fertilizing: "Concime speciale per piante acidofile, pH 4,5-5,5",
    sunlight: "Sole pieno (min. 6 ore)",
    spacing: "Distanza 1,2-1,8 m",
    temperature: "Coltura fresca, proteggere dal calore",
    soilPH: "4,5-5,5 (terreno acido necessario)",
    mulching: "Pacciame corteccia o segatura per ritenzione acidità",
  },
  commonProblems: {
    "Carenza di Ferro": "Foglie gialle con venature verdi - controllare pH",
    "Uccelli": "Mangiano bacche mature - utilizzare reti",
    "Marciume Radicale": "Malattia fungina - migliorare drenaggio, evitare ristagni",
  },
};
