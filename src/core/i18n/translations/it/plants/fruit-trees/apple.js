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
