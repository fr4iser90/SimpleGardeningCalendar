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
        leafing: {
          name: "Sviluppo Fogliare",
          description: "Sviluppo delle prime foglie",
          care: "Posizione luminosa, mantenere umido",
        },
        rooting: {
          name: "Sviluppo Radicale",
          description: "Ispessimento della radice di carota",
          care: "Mantenere umido, terreno sciolto",
        },
        maturing: {
          name: "Maturazione",
          description: "Ingrossamento radice e crescita finale",
          care: "Mantenere umidità uniforme, evitare spaccature",
        },
        harvest: {
          name: "Raccolta",
          description: "Le carote sono pronte per la raccolta",
          care: "Estrarre con attenzione, non danneggiare",
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
        leafing: {
          name: "Sviluppo Fogliare",
          description: "Sviluppo delle prime foglie",
          care: "Posizione luminosa, mantenere umido",
        },
        rooting: {
          name: "Sviluppo Radicale",
          description: "Ispessimento della radice di carota",
          care: "Mantenere umido, terreno sciolto",
        },
        maturing: {
          name: "Maturazione",
          description: "Ingrossamento radice e crescita finale",
          care: "Mantenere umidità uniforme, evitare spaccature",
        },
        harvest: {
          name: "Raccolta",
          description: "Le carote sono pronte per la raccolta",
          care: "Estrarre con attenzione, non danneggiare",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '07-01',
            description: 'Prima primavera a metà estate, dopo che il terreno è lavorabile',
          },
          harvestWindow: {
            start: '07-01',
            end: '11-01',
            description: 'Raccolta prima che il terreno geli',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-15',
            end: '05-15',
            description: 'Piantagione precoce possibile, evitare i mesi più caldi',
          },
          harvestWindow: {
            start: '05-15',
            end: '09-30',
            description: 'Raccolta prima del periodo caldo e secco',
          },
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
        leafing: {
          name: "Sviluppo Fogliare",
          description: "Sviluppo delle prime foglie",
          care: "Posizione luminosa, mantenere umido",
        },
        rooting: {
          name: "Sviluppo Radicale",
          description: "Ispessimento della radice di carota",
          care: "Mantenere umido, terreno sciolto",
        },
        maturing: {
          name: "Maturazione",
          description: "Ingrossamento radice e crescita finale",
          care: "Mantenere umidità uniforme, evitare spaccature",
        },
        harvest: {
          name: "Raccolta",
          description: "Le carote sono pronte per la raccolta",
          care: "Estrarre con attenzione, non danneggiare",
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
    soil: "Terreno sciolto, sabbioso senza pietre",
  },
  commonProblems: {
    "Mosca della Carota": "Larve nelle radici - rete, consociazione",
    "Radici Biforcate": "Terreno sassoso - preparare bene il terreno",
    "Spalle Verdi": "Esposte alla luce - coprire con terra",
  },
};
