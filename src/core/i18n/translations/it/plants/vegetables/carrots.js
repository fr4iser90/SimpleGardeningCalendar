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
