export default {
  name: "Espinacas",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Germinación de semillas (7-14 días)",
          care: "Suelo húmedo, 15-20°C",
        },
        seedling: {
          name: "Plántula",
          description: "Desarrollo de las primeras hojas",
          care: "Ubicación luminosa, mantener húmedo",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crecimiento de hojas y formación de roseta",
          care: "Riego regular, aclarar, desmalezar",
        },
        leaf_development: {
          name: "Desarrollo de Hojas",
          description: "Desarrollo de las hojas grandes",
          care: "Mantener húmedo, proteger del calor",
        },
        harvest: {
          name: "Cosecha",
          description: "Espinacas listas para cosechar",
          care: "Cosechar hojas exteriores, dejar crecer interiores",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Germinación de semillas (7-14 días)",
          care: "Suelo húmedo, 15-20°C",
        },
        seedling: {
          name: "Plántula",
          description: "Desarrollo de las primeras hojas",
          care: "Ubicación luminosa, mantener húmedo",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crecimiento de hojas y formación de roseta",
          care: "Riego regular, aclarar, desmalezar",
        },
        leaf_development: {
          name: "Desarrollo de Hojas",
          description: "Desarrollo de las hojas grandes",
          care: "Mantener húmedo, proteger del calor",
        },
        harvest: {
          name: "Cosecha",
          description: "Espinacas listas para cosechar",
          care: "Cosechar hojas exteriores, dejar crecer interiores",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'Principios de primavera, tan pronto como el suelo sea trabajable',
          },
          harvestWindow: {
            start: '05-01',
            end: '07-01',
            description: 'Cosecha antes del clima cálido',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '10-01',
            end: '12-01',
            description: 'Plantación de otoño para cosecha invierno/primavera',
          },
          harvestWindow: {
            start: '01-15',
            end: '04-15',
            description: 'Cosecha antes de que el calor cause la floración',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Germinación de semillas (7-14 días)",
          care: "Suelo húmedo, 15-20°C",
        },
        seedling: {
          name: "Plántula",
          description: "Desarrollo de las primeras hojas",
          care: "Ubicación luminosa, mantener húmedo",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crecimiento de hojas y formación de roseta",
          care: "Riego regular, aclarar, desmalezar",
        },
        leaf_development: {
          name: "Desarrollo de Hojas",
          description: "Desarrollo de las hojas grandes",
          care: "Mantener húmedo, proteger del calor",
        },
        harvest: {
          name: "Cosecha",
          description: "Espinacas listas para cosechar",
          care: "Cosechar hojas exteriores, dejar crecer interiores",
        },
      },
    },
  },
  careTips: {
    watering: "Mantener húmedo, no demasiado mojado",
    fertilizing: "Fertilización ligera, poco nitrógeno",
    sunlight: "Sol pleno a sombra parcial (mín. 6 horas)",
    spacing: "Espaciado 15-25 cm",
    temperature: "Fresco, 15-20°C óptimo",
    soilPH: "6.0-7.0",
    bolting: "Proteger del calor, de lo contrario va a semilla",
  },
  commonProblems: {
    "Subida a Semilla": "Demasiado calor - sombrear, cosechar temprano",
    "Caracoles": "Comen agujeros en hojas - cebos, trampas de cerveza",
    "Pulgones": "Pequeñas plagas - introducir insectos benéficos, solución jabón",
  },
};
