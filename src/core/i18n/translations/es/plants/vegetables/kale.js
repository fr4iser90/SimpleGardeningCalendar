export default {
  name: "Col Rizada",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Germinación de semillas (5-10 días)",
          care: "Suelo húmedo, 15-20°C",
        },
        seedling: {
          name: "Plántula",
          description: "Desarrollo de las primeras hojas",
          care: "Ubicación luminosa, mantener húmedo",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Fuerte crecimiento de hojas",
          care: "Riego regular, fertilización, desmalezar",
        },
        leaf_development: {
          name: "Desarrollo de Hojas",
          description: "Desarrollo de las hojas grandes",
          care: "Mantener húmedo, proteger de heladas",
        },
        harvest: {
          name: "Cosecha",
          description: "Hojas listas para cosechar",
          care: "Cosechar hojas exteriores, dejar crecer interiores",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Germinación de semillas (5-10 días)",
          care: "Suelo húmedo, 15-20°C",
        },
        seedling: {
          name: "Plántula",
          description: "Desarrollo de las primeras hojas",
          care: "Ubicación luminosa, mantener húmedo",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Fuerte crecimiento de hojas",
          care: "Riego regular, fertilización, desmalezar",
        },
        leaf_development: {
          name: "Desarrollo de Hojas",
          description: "Desarrollo de las hojas grandes",
          care: "Mantener húmedo, proteger de heladas",
        },
        harvest: {
          name: "Cosecha",
          description: "Hojas listas para cosechar",
          care: "Cosechar hojas exteriores, dejar crecer interiores",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Germinación de semillas (5-10 días)",
          care: "Suelo húmedo, 15-20°C",
        },
        seedling: {
          name: "Plántula",
          description: "Desarrollo de las primeras hojas",
          care: "Ubicación luminosa, mantener húmedo",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Fuerte crecimiento de hojas",
          care: "Riego regular, fertilización, desmalezar",
        },
        leaf_development: {
          name: "Desarrollo de Hojas",
          description: "Desarrollo de las hojas grandes",
          care: "Mantener húmedo, proteger de heladas",
        },
        harvest: {
          name: "Cosecha",
          description: "Hojas listas para cosechar",
          care: "Cosechar hojas exteriores, dejar crecer interiores",
        },
      },
    },
  },
  careTips: {
    watering: "Mantener húmedo, no demasiado mojado",
    fertilizing: "Fertilización nitrogenada regular",
    sunlight: "Sol pleno a sombra parcial (mín. 6 horas)",
    spacing: "Espaciado 30-45 cm",
    temperature: "Fresco a cálido, 10-25°C óptimo",
    soilPH: "6.0-7.5",
    frost: "Tolera heladas ligeras, se vuelve más dulce",
  },
  commonProblems: {
    "Hernia de la Col": "Enfermedad fúngica - aumentar pH, variedades resistentes",
    "Mosca de la Col": "Larvas en raíces - malla, consociación",
    "Pulgones": "Pequeñas plagas - introducir insectos benéficos, solución jabón",
  },
};
