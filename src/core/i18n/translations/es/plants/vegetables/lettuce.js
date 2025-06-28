export default {
  name: "Lechuga",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Germinación de semillas (7-14 días)",
          care: "Suelo húmedo, 15-20°C, germinador de luz",
        },
        leafing: {
          name: "Desarrollo de Hojas",
          description: "Desarrollo de las primeras hojas",
          care: "Ubicación luminosa, mantener húmedo",
        },
        heading: {
          name: "Formación de Cabeza",
          description: "Desarrollo de la cabeza de lechuga",
          care: "Mantener húmedo, proteger del calor",
        },
        harvest: {
          name: "Cosecha",
          description: "La lechuga está lista para cosechar",
          care: "Cosechar planta completa o hojas individuales",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Germinación de semillas (7-14 días)",
          care: "Suelo húmedo, 15-20°C, germinador de luz",
        },
        leafing: {
          name: "Desarrollo de Hojas",
          description: "Desarrollo de las primeras hojas",
          care: "Ubicación luminosa, mantener húmedo",
        },
        heading: {
          name: "Formación de Cabeza",
          description: "Desarrollo de la cabeza de lechuga",
          care: "Mantener húmedo, proteger del calor",
        },
        harvest: {
          name: "Cosecha",
          description: "La lechuga está lista para cosechar",
          care: "Cosechar planta completa o hojas individuales",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-15',
            end: '07-01',
            description: 'Principios de primavera a mediados de verano, tan pronto como el suelo sea trabajable',
          },
          harvestWindow: {
            start: '05-01',
            end: '08-15',
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
          care: "Suelo húmedo, 15-20°C, germinador de luz",
        },
        leafing: {
          name: "Desarrollo de Hojas",
          description: "Desarrollo de las primeras hojas",
          care: "Ubicación luminosa, mantener húmedo",
        },
        heading: {
          name: "Formación de Cabeza",
          description: "Desarrollo de la cabeza de lechuga",
          care: "Mantener húmedo, proteger del calor",
        },
        harvest: {
          name: "Cosecha",
          description: "La lechuga está lista para cosechar",
          care: "Cosechar planta completa o hojas individuales",
        },
      },
    },
  },
  careTips: {
    watering: "Mantener húmedo, evitar encharcamiento",
    fertilizing: "Fertilización ligera, poco nitrógeno",
    sunlight: "Sol pleno a sombra parcial (mín. 6 horas)",
    spacing: "20-30 cm de separación",
    temperature: "Fresco, 15-20°C óptimo",
    soilPH: "6.0-7.0",
    bolting: "Proteger del calor, de lo contrario florece",
  },
  commonProblems: {
    "Florecimiento": "Demasiado calor - sombra, cosechar temprano",
    "Babosas": "Comen agujeros en hojas - cebos, trampas de cerveza",
    "Pulgones": "Pequeñas plagas - introducir insectos beneficiosos, solución de jabón",
  },
};
