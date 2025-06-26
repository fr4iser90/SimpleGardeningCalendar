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
        head_formation: {
          name: "Formación de Cabeza",
          description: "Desarrollo de la cabeza de lechuga",
          care: "Mantener húmedo, proteger del calor",
        },
        harvest: {
          name: "Cosecha",
          description: "Lechuga lista para cosechar",
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
        head_formation: {
          name: "Formación de Cabeza",
          description: "Desarrollo de la cabeza de lechuga",
          care: "Mantener húmedo, proteger del calor",
        },
        harvest: {
          name: "Cosecha",
          description: "Lechuga lista para cosechar",
          care: "Cosechar planta completa o hojas individuales",
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
        head_formation: {
          name: "Formación de Cabeza",
          description: "Desarrollo de la cabeza de lechuga",
          care: "Mantener húmedo, proteger del calor",
        },
        harvest: {
          name: "Cosecha",
          description: "Lechuga lista para cosechar",
          care: "Cosechar planta completa o hojas individuales",
        },
      },
    },
  },
  careTips: {
    watering: "Mantener húmedo, evitar encharcamiento",
    fertilizing: "Fertilización ligera, poco nitrógeno",
    sunlight: "Sol pleno a sombra parcial (mín. 6 horas)",
    spacing: "Espaciado 20-30 cm",
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
