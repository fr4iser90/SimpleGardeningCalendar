export default {
  name: "Patate",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        sprouting: {
          name: "Germinazione",
          description: "Appaiono i primi germogli",
          care: "Mantenere terreno umido, iniziare rincalzatura",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Forte crescita fogliare",
          care: "Irrigazione regolare, concimazione, continuare rincalzatura",
        },
        tuberization: {
          name: "Formazione Tuberi",
          description: "Le patate iniziano a crescere",
          care: "Mantenere terreno umido, continuare rincalzatura",
        },
        bulking: {
          name: "Accrescimento Tuberi",
          description: "Le patate diventano più grandi",
          care: "Mantenere terreno umido, continuare rincalzatura",
        },
        maturation: {
          name: "Maturazione",
          description: "Le piante seccano, le patate maturano",
          care: "Ridurre irrigazione, lasciar seccare le piante",
        },
        harvest: {
          name: "Raccolta",
          description: "Le patate sono pronte per la raccolta",
          care: "Scavare con attenzione, evitare danni",
        },
      },
    },
    outdoor: {
      phases: {
        sprouting: {
          name: "Germinazione",
          description: "Appaiono i primi germogli",
          care: "Mantenere terreno umido, iniziare rincalzatura",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Forte crescita fogliare",
          care: "Irrigazione regolare, concimazione, continuare rincalzatura",
        },
        tuberization: {
          name: "Formazione Tuberi",
          description: "Le patate iniziano a crescere",
          care: "Mantenere terreno umido, continuare rincalzatura",
        },
        bulking: {
          name: "Accrescimento Tuberi",
          description: "Le patate diventano più grandi",
          care: "Mantenere terreno umido, continuare rincalzatura",
        },
        maturation: {
          name: "Maturazione",
          description: "Le piante seccano, le patate maturano",
          care: "Ridurre irrigazione, lasciar seccare le piante",
        },
        harvest: {
          name: "Raccolta",
          description: "Le patate sono pronte per la raccolta",
          care: "Scavare con attenzione, evitare danni",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'Non appena il terreno è lavorabile, dopo l\'ultima gelata',
          },
          harvestWindow: {
            start: '07-01',
            end: '09-30',
            description: 'Raccolta prima del gelo forte',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-15',
            end: '04-15',
            description: 'Piantagione precoce possibile, evitare il caldo estivo',
          },
          harvestWindow: {
            start: '06-01',
            end: '08-31',
            description: 'Raccolta prima del periodo caldo e secco',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        sprouting: {
          name: "Germinazione",
          description: "Appaiono i primi germogli",
          care: "Mantenere terreno umido, iniziare rincalzatura",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Forte crescita fogliare",
          care: "Irrigazione regolare, concimazione, continuare rincalzatura",
        },
        tuberization: {
          name: "Formazione Tuberi",
          description: "Le patate iniziano a crescere",
          care: "Mantenere terreno umido, continuare rincalzatura",
        },
        bulking: {
          name: "Accrescimento Tuberi",
          description: "Le patate diventano più grandi",
          care: "Mantenere terreno umido, continuare rincalzatura",
        },
        maturation: {
          name: "Maturazione",
          description: "Le piante seccano, le patate maturano",
          care: "Ridurre irrigazione, lasciar seccare le piante",
        },
        harvest: {
          name: "Raccolta",
          description: "Le patate sono pronte per la raccolta",
          care: "Scavare con attenzione, evitare danni",
        },
      },
    },
  },
  careTips: {
    watering: "Mantenere terreno umido, evitare ristagni",
    fertilizing: "Concimazione potassica regolare",
    sunlight: "Sole pieno (min. 8 ore)",
    spacing: "Distanza 30-40 cm",
    temperature: "Fresco a caldo, 15-25°C ottimale",
    soilPH: "5.5-6.5",
    hilling: "Rincalzatura regolare per più tuberi",
  },
  commonProblems: {
    "Peronospora": "Malattia fungina - varietà resistenti, circolazione aria",
    "Dorifora": "Mangiano foglie - raccolta manuale, insetti benefici",
    "Vermi di Filo": "Larve nei tuberi - rete, consociazione",
  },
};
