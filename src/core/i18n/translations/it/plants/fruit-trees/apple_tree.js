export default {
  name: "Melo",
  category: "category.fruit_trees",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    outdoor: {
      phases: {
        establishment: {
          name: "Stabilimento",
          description: "Primo anno sviluppo radicale",
          care: "Irrigazione regolare, diserbo, potatura leggera",
        },
        juvenile: {
          name: "Fase Giovanile",
          description: "Anni 2-3 crescita",
          care: "Potatura di formazione, cure continue, ancora nessun frutto",
        },
        productive: {
          name: "Fase Produttiva",
          description: "Anni produttivi 4-20+",
          care: "Potatura annuale, controllo parassiti, tempistica raccolta",
        },
        dormancy: {
          name: "Dormienza",
          description: "Riposo invernale",
          care: "Potatura invernale, olio dormiente contro parassiti",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-01',
            end: '05-01',
            description: 'Prima primavera prima del germogliamento',
          },
          harvestWindow: {
            start: '08-01',
            end: '10-31',
            description: 'Raccolta dipendente dalla varietà',
          },
          pruningWindow: {
            start: '01-15',
            end: '03-15',
            description: 'Potatura in periodo di dormienza',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-01',
            end: '04-01',
            description: 'Piantagione molto precoce in primavera',
          },
          harvestWindow: {
            start: '06-01',
            end: '09-30',
            description: 'Raccolta prima delle piogge autunnali',
          },
        },
      },
    },
  },
  careTips: {
    watering: "Irrigazione profonda settimanale, 2-5 cm per settimana durante la stagione",
    fertilizing: "Concimazione annuale in primavera, basso azoto in autunno",
    sunlight: "Sole pieno, almeno 6 ore al giorno",
    spacing: "Distanza 4-6 m per alberi grandi, 2-3 m per forme nane",
    pruning: "Potatura invernale annuale per forma e salute",
    pollination: "Principalmente impollinazione incrociata necessaria con altre varietà di mele",
    soilPH: "6,0-7,0",
  },
  commonProblems: {
    "Ticchiolatura": "Malattia fungina - scegliere varietà resistenti, migliorare circolazione aria",
    "Carpocapsa": "Verme nella mela - trappole ai feromoni, tempistica applicazione mirata",
    "Colpo di Fuoco": "Malattia batterica - rimuovere germogli infetti, basso azoto",
    "Alternanza": "Anni di raccolta alternati - diradare negli anni forti",
  },
};
