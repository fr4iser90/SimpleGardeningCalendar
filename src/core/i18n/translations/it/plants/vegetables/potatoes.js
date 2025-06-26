export default {
  name: "Patate",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        planting: {
          name: "Piantagione",
          description: "Piantare patate nel terreno",
          care: "Occhi verso l'alto, 10-15 cm di profondità, 30 cm di distanza",
        },
        sprouting: {
          name: "Germogliamento",
          description: "Primi germogli appaiono",
          care: "Mantenere umido, rincalzare terra",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Forte crescita delle foglie",
          care: "Irrigazione regolare, concimazione, rincalzare terra",
        },
        flowering: {
          name: "Fioritura",
          description: "Formazione fiori e sviluppo tuberi",
          care: "Mantenere umido, rincalzare terra",
        },
        tuber_development: {
          name: "Sviluppo Tuberi",
          description: "Patate crescono sottoterra",
          care: "Mantenere umido, rincalzare terra",
        },
        harvest: {
          name: "Raccolta",
          description: "Patate pronte per la raccolta",
          care: "Scavare delicatamente, non danneggiare",
        },
      },
    },
    outdoor: {
      phases: {
        planting: {
          name: "Piantagione",
          description: "Piantare patate nel terreno",
          care: "Occhi verso l'alto, 10-15 cm di profondità, 30 cm di distanza",
        },
        sprouting: {
          name: "Germogliamento",
          description: "Primi germogli appaiono",
          care: "Mantenere umido, rincalzare terra",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Forte crescita delle foglie",
          care: "Irrigazione regolare, concimazione, rincalzare terra",
        },
        flowering: {
          name: "Fioritura",
          description: "Formazione fiori e sviluppo tuberi",
          care: "Mantenere umido, rincalzare terra",
        },
        tuber_development: {
          name: "Sviluppo Tuberi",
          description: "Patate crescono sottoterra",
          care: "Mantenere umido, rincalzare terra",
        },
        harvest: {
          name: "Raccolta",
          description: "Patate pronte per la raccolta",
          care: "Scavare delicatamente, non danneggiare",
        },
      },
    },
    greenhouse: {
      phases: {
        planting: {
          name: "Piantagione",
          description: "Piantare patate nel terreno",
          care: "Occhi verso l'alto, 10-15 cm di profondità, 30 cm di distanza",
        },
        sprouting: {
          name: "Germogliamento",
          description: "Primi germogli appaiono",
          care: "Mantenere umido, rincalzare terra",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Forte crescita delle foglie",
          care: "Irrigazione regolare, concimazione, rincalzare terra",
        },
        flowering: {
          name: "Fioritura",
          description: "Formazione fiori e sviluppo tuberi",
          care: "Mantenere umido, rincalzare terra",
        },
        tuber_development: {
          name: "Sviluppo Tuberi",
          description: "Patate crescono sottoterra",
          care: "Mantenere umido, rincalzare terra",
        },
        harvest: {
          name: "Raccolta",
          description: "Patate pronte per la raccolta",
          care: "Scavare delicatamente, non danneggiare",
        },
      },
    },
  },
  careTips: {
    watering: "Mantenere umido, non troppo bagnato",
    fertilizing: "Concime potassico regolare",
    sunlight: "Sole pieno (min. 8 ore)",
    spacing: "Distanza 30-40 cm",
    temperature: "Fresco a caldo, 15-25°C ottimale",
    soilPH: "5.5-6.5",
    hilling: "Rincalzare regolarmente terra per più tuberi",
  },
  commonProblems: {
    "Peronospora": "Malattia fungina - varietà resistenti, circolazione aria",
    "Dorifora": "Mangiano foglie - raccogliere a mano, insetti utili",
    "Vermi del Filo": "Larve nei tuberi - rete, consociazione",
  },
};
