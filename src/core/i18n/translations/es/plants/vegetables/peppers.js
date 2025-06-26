export default {
  name: "Pimientos",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Germinación de semillas (10-21 días)",
          care: "Suelo cálido y húmedo, 25-30°C",
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
          description: "Desarrollo y maduración de pimientos",
          care: "Riego regular, cosechar frutos maduros",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Germinación de semillas (10-21 días)",
          care: "Suelo cálido y húmedo, 25-30°C",
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
          description: "Desarrollo y maduración de pimientos",
          care: "Riego regular, cosechar frutos maduros",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Germinación de semillas (10-21 días)",
          care: "Suelo cálido y húmedo, 25-30°C",
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
          description: "Desarrollo y maduración de pimientos",
          care: "Riego regular, cosechar frutos maduros",
        },
      },
    },
  },
  careTips: {
    watering: "Mantener húmedo, evitar encharcamiento",
    fertilizing: "Fertilizante de hortalizas regular, balanceado",
    sunlight: "Sol pleno (mín. 8 horas)",
    spacing: "Espaciado 45-60 cm",
    temperature: "Cálido, 20-30°C óptimo",
    soilPH: "6.0-7.0",
    support: "Tutores o espalderas para estabilidad",
  },
  commonProblems: {
    "Podredumbre Apical": "Deficiencia de calcio - regar uniformemente, verificar pH",
    "Pulgones": "Pequeñas plagas - introducir insectos benéficos, solución jabón",
    "Ácaros Rojos": "Pequeñas plagas - aumentar humedad",
  },
};
