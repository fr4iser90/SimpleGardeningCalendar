export default {
  name: "Cannabis Sativa",
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
          description: "Fase di crescita prolungata.",
          care: "Ciclo luce 18/6, alimentazione ricca di azoto, training per controllo altezza.",
        },
        preflower: {
          name: "Pre-fioritura",
          description: "Determinazione del sesso.",
          care: "Continuare cure vegetative, identificare e rimuovere maschi.",
        },
        flowering: {
          name: "Fioritura",
          description: "Periodo di fioritura lungo.",
          care: "Ciclo luce 12/12, alimentazione fosforo/potassio, sostenere rami alti.",
        },
        harvest: {
          name: "Raccolta",
          description: "Preparazione raccolta e essiccazione.",
          care: "Sciacquare nutrienti 1-2 settimane prima della raccolta.",
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
          description: "Crescita vegetativa in luce naturale prolungata.",
          care: "Luce naturale del sole, training per gestione dimensioni, alimentazione pesante.",
        },
        preflower: {
          name: "Pre-fioritura",
          description: "Trigger fotoperiodico naturale.",
          care: "Si verifica naturalmente con l'accorciarsi dei giorni, identificare maschi.",
        },
        flowering: {
          name: "Fioritura",
          description: "Fioritura all'aperto prolungata (8-16 settimane a seconda della varietà).",
          care: "Ciclo luce naturale, protezione meteo, monitoraggio parassiti.",
        },
        harvest: {
          name: "Raccolta",
          description: "Raccolta tardiva dovuta alla lunga fioritura.",
          care: "Dipendente dal meteo, controllare tricomi, asciugare rapidamente se piove.",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '05-01',
            end: '06-15',
            description: "Dopo l'ultima gelata, terreno caldo (15°C+)",
          },
          harvestWindow: {
            start: '10-01',
            end: '11-15',
            description: "Raccolta prima della prima gelata",
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '04-01',
            end: '05-15',
            description: "Possibile semina precoce, terreno caldo",
          },
          harvestWindow: {
            start: '09-15',
            end: '11-30',
            description: "Raccolta più lunga",
          },
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
          description: "Fioritura in serra (8-16 settimane a seconda della varietà).",
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
    sunlight: "18/6 ore in crescita, 12/12 ore in fioritura.",
    spacing: "90-180 cm di distanza, può diventare molto alta.",
    support: "Pali robusti o SCROG per gestione altezza.",
    humidity: "65-70% semenzale, 40-50% vegetativo, 40-45% fioritura.",
    temperature: "21-29°C giorno, 18-27°C notte.",
  },
  commonProblems: {
    "Gestione altezza": "Può diventare molto alta - usare LST, topping, o SCROG",
    "Fioritura lunga": "Tempo raccolta prolungato - essere pazienti, monitorare tricomi",
    "Carenza nutrizionale": "Piante grandi hanno bisogno di più nutrienti - aumentare alimentazione",
    "Penetrazione luce": "Chioma densa - defogliare e LST per penetrazione luce",
  },
};
