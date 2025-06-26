export default {
  name: "Pepinos",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Germinación de semillas (7-14 días)",
          care: "Suelo cálido y húmedo, 20-25°C",
        },
        seedling: {
          name: "Plántula",
          description: "Desarrollo de las primeras hojas",
          care: "Ubicación luminosa, mantener húmedo",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Fuerte crecimiento de hojas y tallos",
          care: "Riego regular, fertilización, soporte",
        },
        flowering: {
          name: "Floración",
          description: "Formación de flores y polinización",
          care: "Promover circulación de aire, agitar flores",
        },
        fruiting: {
          name: "Fructificación",
          description: "Desarrollo y maduración de pepinos",
          care: "Riego regular, cosechar frutos jóvenes",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Germinación de semillas (7-14 días)",
          care: "Suelo cálido y húmedo, 20-25°C",
        },
        seedling: {
          name: "Plántula",
          description: "Desarrollo de las primeras hojas",
          care: "Ubicación luminosa, mantener húmedo",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Fuerte crecimiento de hojas y tallos",
          care: "Riego regular, fertilización, soporte",
        },
        flowering: {
          name: "Floración",
          description: "Formación de flores y polinización",
          care: "Promover circulación de aire, agitar flores",
        },
        fruiting: {
          name: "Fructificación",
          description: "Desarrollo y maduración de pepinos",
          care: "Riego regular, cosechar frutos jóvenes",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Germinación de semillas (7-14 días)",
          care: "Suelo cálido y húmedo, 20-25°C",
        },
        seedling: {
          name: "Plántula",
          description: "Desarrollo de las primeras hojas",
          care: "Ubicación luminosa, mantener húmedo",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Fuerte crecimiento de hojas y tallos",
          care: "Riego regular, fertilización, soporte",
        },
        flowering: {
          name: "Floración",
          description: "Formación de flores y polinización",
          care: "Promover circulación de aire, agitar flores",
        },
        fruiting: {
          name: "Fructificación",
          description: "Desarrollo y maduración de pepinos",
          care: "Riego regular, cosechar frutos jóvenes",
        },
      },
    },
  },
  careTips: {
    watering: "Mantener húmedo, evitar encharcamiento",
    fertilizing: "Fertilizante de hortalizas regular, balanceado",
    sunlight: "Sol pleno (mín. 8 horas)",
    spacing: "Espaciado 30-45 cm",
    temperature: "Cálido, 20-30°C óptimo",
    soilPH: "6.0-7.0",
    support: "Tutores o espalderas para trepar",
  },
  commonProblems: {
    "Mildiu": "Enfermedad fúngica - mejorar circulación de aire, variedades resistentes",
    "Pulgones": "Pequeñas plagas - introducir insectos benéficos, solución jabón",
    "Escarabajos del Pepino": "Comen hojas - recoger a mano, insectos benéficos",
  },
};
