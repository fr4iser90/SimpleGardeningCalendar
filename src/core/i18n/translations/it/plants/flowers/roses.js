export default {
  name: "Rose",
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
          care: "Molta luce solare, innaffiamento regolare, rimuovere fiori appassiti.",
        },
        harvest: {
          name: "Raccolta",
          description: "Raccolta di fiori per bouquet.",
          care: "Raccogliere fiori quando si aprono, tagliare per vasi.",
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
          care: "Pieno sole, innaffiamento regolare, rimuovere fiori appassiti.",
        },
        harvest: {
          name: "Raccolta",
          description: "Raccolta di fiori per bouquet.",
          care: "Raccogliere fiori quando si aprono, tagliare per vasi.",
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
          care: "Molta luce, innaffiamento regolare, rimuovere fiori appassiti.",
        },
        harvest: {
          name: "Raccolta",
          description: "Raccolta di fiori per bouquet.",
          care: "Raccogliere fiori quando si aprono, tagliare per vasi.",
        },
      },
    },
  },
  careTips: {
    watering: "Innaffiare regolarmente, mantenere terreno umido ma non inzuppato.",
    fertilizing: "Alimentazione in primavera ed estate con fertilizzante per rose.",
    sunlight: "Pieno sole, almeno 6 ore di sole diretto.",
    spacing: "60-90 cm di distanza tra le piante.",
    support: "Pali per rose rampicanti, generalmente non per rose cespugliose.",
    humidity: "Umidità normale, non troppo umido.",
    temperature: "15-25°C ottimale, rustica fino a -20°C.",
  },
  commonProblems: {
    "Oidio": "Polvere bianca sulle foglie - migliorare circolazione aria",
    "Macchie nere": "Macchie nere sulle foglie - usare fungicida",
    "Afidi": "Piccoli insetti sulle foglie - risciacquare con acqua",
    "Ruggine": "Macchie arancioni - rimuovere foglie colpite",
  },
};
