export default {
  name: "Lavanda",
  category: "category.flowers",
  tags: ["tag.perennial"],
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
          care: "Molta luce, innaffiare con parsimonia, evitare eccesso d'acqua.",
        },
        vegetative: {
          name: "Vegetativo",
          description: "Crescita rapida di foglie e steli.",
          care: "Molta luce, innaffiamento moderato, potare per cespugliosità.",
        },
        flowering: {
          name: "Fioritura",
          description: "La pianta inizia a fiorire.",
          care: "Molta luce solare, innaffiare con parsimonia, raccogliere fiori per profumo.",
        },
        harvest: {
          name: "Raccolta",
          description: "Raccolta di fiori e foglie.",
          care: "Raccogliere fiori quando si aprono, appendere per asciugare.",
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
          care: "Pieno sole, innaffiare con parsimonia, potare per cespugliosità.",
        },
        flowering: {
          name: "Fioritura",
          description: "La pianta inizia a fiorire.",
          care: "Pieno sole, innaffiare con parsimonia, raccogliere fiori per profumo.",
        },
        harvest: {
          name: "Raccolta",
          description: "Raccolta di fiori e foglie.",
          care: "Raccogliere fiori quando si aprono, appendere per asciugare.",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-01',
            description: 'Piantagione dalla primavera all\'inizio dell\'estate',
          },
          harvestWindow: {
            start: '06-15',
            end: '09-15',
            description: 'Raccolta in estate',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-15',
            end: '05-01',
            description: 'Prima primavera fino alla fine della primavera',
          },
          harvestWindow: {
            start: '05-15',
            end: '09-30',
            description: 'Raccolta in estate',
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
          care: "Ambiente controllato, innaffiare con parsimonia.",
        },
        vegetative: {
          name: "Vegetativo",
          description: "Crescita rapida in serra.",
          care: "Molta luce, innaffiare con parsimonia, potare per cespugliosità.",
        },
        flowering: {
          name: "Fioritura",
          description: "La pianta inizia a fiorire.",
          care: "Molta luce, innaffiare con parsimonia, raccogliere fiori per profumo.",
        },
        harvest: {
          name: "Raccolta",
          description: "Raccolta di fiori e foglie.",
          care: "Raccogliere fiori quando si aprono, appendere per asciugare.",
        },
      },
    },
  },
  careTips: {
    watering: "Innaffiare con parsimonia, lasciare asciugare il terreno tra le innaffiature.",
    fertilizing: "Alimentazione leggera in primavera con fertilizzante organico.",
    sunlight: "Pieno sole, almeno 6 ore di sole diretto.",
    spacing: "30-60 cm di distanza tra le piante.",
    support: "Generalmente non necessario, può essere sostenuto in vento forte.",
    humidity: "Umidità bassa preferita.",
    temperature: "15-25°C ottimale, rustica fino a -15°C.",
  },
  commonProblems: {
    "Marciume radicale": "Foglie gialle, appassimento - innaffiare meno, migliorare drenaggio",
    "Oidio": "Polvere bianca sulle foglie - migliorare circolazione aria",
    "Ragnetti rossi": "Piccole ragnatele e macchie - aumentare umidità",
    "Eccesso d'acqua": "Foglie appassite - ridurre innaffiamento, migliorare drenaggio",
  },
};
