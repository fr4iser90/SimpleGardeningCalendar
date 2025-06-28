export default {
  name: "Girasoli",
  category: "category.flowers",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "I semi iniziano a germogliare e le radici emergono.",
          care: "Mantenere i semi caldi (18-24°C) e umidi, luce necessaria.",
        },
        seedling: {
          name: "Semenzale",
          description: "La giovane pianta sviluppa le prime vere foglie.",
          care: "Molta luce, innaffiamento regolare, evitare eccesso d'acqua.",
        },
        vegetative: {
          name: "Vegetativo",
          description: "Crescita rapida di foglie e steli.",
          care: "Molta luce, innaffiamento regolare, potare per cespugliosità.",
        },
        flowering: {
          name: "Fioritura",
          description: "La pianta inizia a fiorire.",
          care: "Molta luce solare, innaffiamento regolare, raccogliere fiori per semi.",
        },
        harvest: {
          name: "Raccolta",
          description: "Raccolta di fiori e semi.",
          care: "Raccogliere fiori quando si aprono, lasciare semi asciugare.",
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
          care: "Pieno sole, innaffiamento regolare, potare per cespugliosità.",
        },
        flowering: {
          name: "Fioritura",
          description: "La pianta inizia a fiorire.",
          care: "Pieno sole, innaffiamento regolare, raccogliere fiori per semi.",
        },
        harvest: {
          name: "Raccolta",
          description: "Raccolta di fiori e semi.",
          care: "Raccogliere fiori quando si aprono, lasciare semi asciugare.",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-15',
            end: '06-15',
            description: 'Dopo l\'ultima gelata, terreno caldo',
          },
          harvestWindow: {
            start: '08-01',
            end: '09-30',
            description: 'Raccolta prima del gelo',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '05-15',
            description: 'Prima primavera fino alla fine della primavera',
          },
          harvestWindow: {
            start: '07-01',
            end: '10-31',
            description: 'Lungo periodo di raccolta',
          },
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
          care: "Molta luce, innaffiamento regolare, potare per cespugliosità.",
        },
        flowering: {
          name: "Fioritura",
          description: "La pianta inizia a fiorire.",
          care: "Molta luce, innaffiamento regolare, raccogliere fiori per semi.",
        },
        harvest: {
          name: "Raccolta",
          description: "Raccolta di fiori e semi.",
          care: "Raccogliere fiori quando si aprono, lasciare semi asciugare.",
        },
      },
    },
  },
  careTips: {
    watering: "Innaffiare regolarmente, mantenere terreno umido ma non inzuppato.",
    fertilizing: "Alimentazione in primavera ed estate con fertilizzante organico.",
    sunlight: "Pieno sole, almeno 8 ore di sole diretto.",
    spacing: "30-60 cm di distanza tra le piante.",
    support: "Pali per varietà alte, generalmente non per varietà nane.",
    humidity: "Umidità normale, non troppo umido.",
    temperature: "15-30°C ottimale, sensibile al gelo.",
  },
  commonProblems: {
    "Oidio": "Polvere bianca sulle foglie - migliorare circolazione aria",
    "Afidi": "Piccoli insetti sulle foglie - risciacquare con acqua",
    "Uccelli": "Semi mangiati - usare reti",
    "Danni da vento": "Piante alte che cadono - usare pali",
  },
};
