export default {
  name: "Basilico",
  category: "category.herbs",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "I semi iniziano a germogliare e le radici emergono.",
          care: "Mantenere i semi caldi (21-24°C) e umidi.",
        },
        seedling: {
          name: "Semenzale",
          description: "La giovane pianta sviluppa le prime vere foglie.",
          care: "Molta luce, innaffiamento regolare, evitare eccesso d'acqua.",
        },
        vegetative: {
          name: "Vegetativo",
          description: "Crescita rapida di foglie e steli.",
          care: "Molta luce, innaffiamento regolare, raccogliere foglie per cespugliosità.",
        },
        flowering: {
          name: "Fioritura",
          description: "La pianta inizia a fiorire.",
          care: "Rimuovere fiori per sapore migliore, continuare raccolta.",
        },
        harvest: {
          name: "Raccolta",
          description: "Raccolta continua delle foglie.",
          care: "Raccogliere regolarmente, rimuovere fiori, congelare per inverno.",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "I semi iniziano a germogliare e le radici emergono.",
          care: "Mantenere i semi caldi e umidi, proteggere dal gelo.",
        },
        seedling: {
          name: "Semenzale",
          description: "Stabilimento all'aperto.",
          care: "Esposizione graduale al sole, proteggere dal vento.",
        },
        vegetative: {
          name: "Vegetativo",
          description: "Crescita rapida all'aperto.",
          care: "Pieno sole, innaffiamento regolare, raccogliere foglie.",
        },
        flowering: {
          name: "Fioritura",
          description: "La pianta inizia a fiorire.",
          care: "Rimuovere fiori per sapore migliore, continuare raccolta.",
        },
        harvest: {
          name: "Raccolta",
          description: "Raccolta continua fino al gelo.",
          care: "Raccogliere regolarmente, congelare o essiccare per inverno.",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "I semi iniziano a germogliare e le radici emergono.",
          care: "Mantenere i semi caldi e umidi in serra.",
        },
        seedling: {
          name: "Semenzale",
          description: "Stabilimento in serra.",
          care: "Ambiente controllato, innaffiamento regolare.",
        },
        vegetative: {
          name: "Vegetativo",
          description: "Crescita rapida in serra.",
          care: "Molta luce, innaffiamento regolare, raccogliere foglie.",
        },
        flowering: {
          name: "Fioritura",
          description: "La pianta inizia a fiorire.",
          care: "Rimuovere fiori per sapore migliore, continuare raccolta.",
        },
        harvest: {
          name: "Raccolta",
          description: "Raccolta continua in serra.",
          care: "Raccogliere regolarmente, congelare o essiccare per inverno.",
        },
      },
    },
  },
  careTips: {
    watering: "Innaffiare regolarmente, mantenere terreno umido ma non inzuppato.",
    fertilizing: "Alimentazione leggera ogni 2-3 settimane con fertilizzante organico.",
    sunlight: "Pieno sole a mezz'ombra, almeno 6 ore di sole.",
    spacing: "20-30 cm di distanza tra le piante.",
    support: "Generalmente non necessario, può essere sostenuto in vento forte.",
    humidity: "Umidità normale, non troppo umido.",
    temperature: "21-27°C ottimale, sensibile al gelo.",
  },
  commonProblems: {
    "Peronospora": "Macchie gialle sulle foglie - migliorare circolazione aria",
    "Afidi": "Piccoli insetti sulle foglie - risciacquare con acqua o soluzione saponosa",
    "Danni da gelo": "Foglie nere dal gelo - proteggere dal gelo",
    "Montata a seme": "Fioritura precoce per calore - rimuovere fiori, mantenere più fresco",
  },
};
