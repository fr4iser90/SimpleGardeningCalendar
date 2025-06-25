export default {
  name: "Cannabis Indica",
  category: "category.herbs",
  tags: ["tag.cannabis", "tag.annual"],
  legalNote: "Verificare le leggi locali prima della coltivazione. Queste informazioni sono solo a scopo educativo.",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "I semi iniziano a germogliare e le radici emergono.",
          care: "Mantenere i semi caldi (21-29°C) e umidi in ambiente buio.",
        },
        seedling: {
          name: "Semenzale",
          description: "La giovane pianta sviluppa le prime vere foglie.",
          care: "Fornire 18-24 ore di luce, mantenere umidità 65-70%.",
        },
        vegetative: {
          name: "Vegetativo",
          description: "Crescita rapida di foglie e steli.",
          care: "Ciclo luce 18/6, alimentazione ricca di azoto, training per cespugliosità.",
        },
        preflower: {
          name: "Pre-fioritura",
          description: "Determinazione del sesso.",
          care: "Continuare cure vegetative, identificare e rimuovere maschi.",
        },
        flowering: {
          name: "Fioritura",
          description: "Sviluppo e maturazione dei fiori.",
          care: "Ciclo luce 12/12, alimentazione fosforo/potassio, umidità ridotta 40-50%.",
        },
        harvest: {
          name: "Raccolta",
          description: "Preparazione ed esecuzione della raccolta.",
          care: "Sciacquare con acqua pulita, monitorare tricomi, raccogliere al picco di potenza.",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "I semi iniziano a germogliare e le radici emergono.",
          care: "Mantenere i semi caldi e umidi, proteggere dal sole diretto.",
        },
        seedling: {
          name: "Semenzale",
          description: "Stabilimento all'aperto.",
          care: "Esposizione graduale al sole, proteggere da vento e parassiti.",
        },
        vegetative: {
          name: "Vegetativo",
          description: "Crescita vegetativa in luce naturale.",
          care: "Luce naturale del sole, training per gestione dimensioni, alimentazione pesante.",
        },
        preflower: {
          name: "Pre-fioritura",
          description: "Trigger fotoperiodico naturale.",
          care: "Si verifica naturalmente con l'accorciarsi dei giorni, identificare maschi.",
        },
        flowering: {
          name: "Fioritura",
          description: "Fioritura all'aperto (6-12 settimane a seconda della varietà).",
          care: "Ciclo luce naturale, protezione meteo, monitoraggio parassiti.",
        },
        harvest: {
          name: "Raccolta",
          description: "Tempistica raccolta all'aperto.",
          care: "Dipendente dal meteo, controllare tricomi, asciugare rapidamente se piove.",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germinazione",
          description: "I semi iniziano a germogliare e le radici emergono.",
          care: "Mantenere i semi caldi e umidi in ambiente controllato.",
        },
        seedling: {
          name: "Semenzale",
          description: "Stabilimento in serra.",
          care: "Ambiente controllato, proteggere da estremi di temperatura.",
        },
        vegetative: {
          name: "Vegetativo",
          description: "Crescita vegetativa in serra.",
          care: "Luce naturale con controllo temperatura, alimentazione pesante.",
        },
        preflower: {
          name: "Pre-fioritura",
          description: "Gestione fotoperiodo.",
          care: "Controllare ore di luce per innescare fioritura, identificare maschi.",
        },
        flowering: {
          name: "Fioritura",
          description: "Fioritura in serra (6-12 settimane a seconda della varietà).",
          care: "Ambiente controllato, protezione meteo, monitoraggio parassiti.",
        },
        harvest: {
          name: "Raccolta",
          description: "Tempistica raccolta in serra.",
          care: "Ambiente essiccazione controllato, controllare tricomi.",
        },
      },
    },
  },
  careTips: {
    watering: "Innaffiare quando il pollice superiore del terreno è asciutto, pH 6,0-7,0 in terra, 5,5-6,5 in idro.",
    fertilizing: "Azoto alto in crescita (3-1-2), fosforo alto in fioritura (1-3-2).",
    sunlight: "Indoor: 18/6 ore in crescita, 12/12 in fioritura. Outdoor: Luce naturale del sole.",
    spacing: "Indoor: 60-120 cm di distanza. Outdoor: 120-240 cm di distanza per dimensione completa.",
    support: "Indoor: Reti SCROG, LST. Outdoor: Pali robusti per resistenza al vento.",
    humidity: "65-70% semenzale, 40-50% vegetativo, 40-45% fioritura.",
    temperature: "21-29°C giorno, 18-27°C notte.",
  },
  commonProblems: {
    "Bruciatura nutrizionale": "Punte foglie gialle/marroni - ridurre concentrazione alimentazione",
    "Bruciatura luce": "Cime sbiancate - aumentare distanza dalle luci",
    "Marciume gemme": "Muffa grigia nelle gemme - migliorare circolazione aria e ridurre umidità",
    "Ragnetti rossi": "Piccole ragnatele e macchie - aumentare umidità, usare acari predatori",
    "Oidio": "Polvere bianca sulle foglie - migliorare circolazione aria, ridurre umidità",
  },
};
