export default {
  name: "Ciliegio",
  category: "category.fruit_trees",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    outdoor: {
      phases: {
        establishment: {
          name: "Stabilimento",
          description: "Primo anno stabilimento",
          care: "Irrigazione regolare, protezione uccelli",
        },
        juvenile: {
          name: "Fase Giovanile",
          description: "Anni 2-4 sviluppo",
          care: "Potatura di formazione, prevenzione malattie",
        },
        productive: {
          name: "Fase Produttiva",
          description: "Anni produttivi 5-20",
          care: "Tempistica raccolta, protezione uccelli, gestione malattie",
        },
        dormancy: {
          name: "Dormienza",
          description: "Riposo invernale",
          care: "Potatura invernale, protezione tronco",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-01',
            end: '04-15',
            description: 'Piantagione precoce in primavera',
          },
          harvestWindow: {
            start: '06-01',
            end: '08-15',
            description: 'Raccolta all\'inizio dell\'estate',
          },
          pruningWindow: {
            start: '02-01',
            end: '03-15',
            description: 'Potatura di fine inverno',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '01-15',
            end: '03-15',
            description: 'Piantagione molto precoce in primavera',
          },
          harvestWindow: {
            start: '05-01',
            end: '07-31',
            description: 'Raccolta prima del caldo estivo',
          },
        },
      },
    },
  },
  careTips: {
    watering: "Irrigazione regolare ma evitare ristagni, buon drenaggio importante",
    fertilizing: "Concimazione annuale leggera, basso azoto",
    sunlight: "Sole pieno",
    spacing: "6-8 m per ciliegie dolci, 4-6 m per ciliegie acide",
    pruning: "Potatura minima, potare fine inverno",
    pollination: "Ciliegie dolci principalmente impollinazione incrociata",
    birdProtection: "Reti o altre protezioni contro uccelli durante raccolta",
  },
  commonProblems: {
    "Marciume Bruno": "Marciume frutti - rimuovere frutti infetti, migliorare circolazione aria",
    "Mosca delle Ciliegie": "Larve nei frutti - trappole gialle, tempistica applicazione mirata",
    "Cancro Batterico": "Malattia tronco/rami - evitare danni invernali, potatura appropriata",
    "Uccelli": "Perdita frutti - reti, spaventapasseri, raccolta precoce",
  },
};
