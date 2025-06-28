export default {
  name: "Cannabis Autoflower",
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
          care: "Fornire 18-24 ore di luce, cure delicate - nessun trapianto.",
        },
        vegetative: {
          name: "Vegetativo",
          description: "Crescita precoce rapida.",
          care: "18-24 ore luce, alimentazione leggera, stress minimo.",
        },
        preflower: {
          name: "Pre-fioritura",
          description: "Transizione automatica.",
          care: "Continuare stesso programma luce, iniziare nutrienti fioritura.",
        },
        flowering: {
          name: "Fioritura",
          description: "Fioritura rapida.",
          care: "Continuare 18-24 ore luce, alimentazione fosforo/potassio.",
        },
        harvest: {
          name: "Raccolta",
          description: "Ciclo raccolta rapido.",
          care: "Sciacquare nutrienti 1 settimana prima della raccolta.",
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
          description: "Crescita vegetativa autoflower.",
          care: "Luce naturale del sole, training LST, alimentazione pesante.",
        },
        preflower: {
          name: "Pre-fioritura",
          description: "Transizione autoflower.",
          care: "Auto-fioritura si verifica indipendentemente dal ciclo luce.",
        },
        flowering: {
          name: "Fioritura",
          description: "Fioritura autoflower all'aperto (6-10 settimane a seconda della varietà).",
          care: "Ciclo luce naturale, protezione meteo, monitoraggio parassiti.",
        },
        harvest: {
          name: "Raccolta",
          description: "Tempistica raccolta autoflower.",
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
            start: '08-01',
            end: '09-30',
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
            start: '07-01',
            end: '09-30',
            description: "Raccolta prima del caldo estremo",
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
          description: "Crescita vegetativa autoflower in serra.",
          care: "Luce naturale con controllo temperatura, training LST.",
        },
        preflower: {
          name: "Pre-fioritura",
          description: "Transizione autoflower.",
          care: "Auto-fioritura si verifica indipendentemente dal ciclo luce.",
        },
        flowering: {
          name: "Fioritura",
          description: "Fioritura autoflower in serra (6-10 settimane a seconda della varietà).",
          care: "Ambiente controllato, protezione meteo, monitoraggio parassiti.",
        },
        harvest: {
          name: "Raccolta",
          description: "Tempistica raccolta autoflower in serra.",
          care: "Ambiente essiccazione controllato, controllare tricomi.",
        },
      },
    },
  },
  careTips: {
    watering: "Innaffiamento leggero, le autoflower preferiscono meno acqua delle fotoperiodiche.",
    fertilizing: "Programma alimentazione leggero, nutrienti 1/4 a 1/2 forza.",
    sunlight: "18-24 ore durante tutto il ciclo.",
    spacing: "30-60 cm di distanza, piante più piccole.",
    support: "Training minimo, LST solo se necessario.",
    humidity: "60-65% durante tutto il ciclo.",
    temperature: "21-27°C costante.",
  },
  commonProblems: {
    "Crescita stentata": "Sensibile allo stress - evitare trapianto e training pesante",
    "Bruciatura nutrizionale": "Molto sensibile ai nutrienti - usare alimentazione leggera",
    "Ciclo corto": "Crescita rapida - essere pronti per transizioni rapide",
  },
};
