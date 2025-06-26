export default {
  name: "Zanahorias",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Germinación de semillas (10-21 días)",
          care: "Suelo húmedo, 15-20°C, germinador de luz",
        },
        seedling: {
          name: "Plántula",
          description: "Desarrollo de las primeras hojas",
          care: "Ubicación luminosa, mantener húmedo",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crecimiento de hojas y desarrollo de raíz",
          care: "Riego regular, aclarar, desmalezar",
        },
        root_development: {
          name: "Desarrollo de Raíz",
          description: "Desarrollo de la zanahoria",
          care: "Mantener húmedo, suelo suelto",
        },
        harvest: {
          name: "Cosecha",
          description: "Zanahorias listas para cosechar",
          care: "Cavar suavemente, no dañar",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Germinación de semillas (10-21 días)",
          care: "Suelo húmedo, 15-20°C, germinador de luz",
        },
        seedling: {
          name: "Plántula",
          description: "Desarrollo de las primeras hojas",
          care: "Ubicación luminosa, mantener húmedo",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crecimiento de hojas y desarrollo de raíz",
          care: "Riego regular, aclarar, desmalezar",
        },
        root_development: {
          name: "Desarrollo de Raíz",
          description: "Desarrollo de la zanahoria",
          care: "Mantener húmedo, suelo suelto",
        },
        harvest: {
          name: "Cosecha",
          description: "Zanahorias listas para cosechar",
          care: "Cavar suavemente, no dañar",
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Germinación de semillas (10-21 días)",
          care: "Suelo húmedo, 15-20°C, germinador de luz",
        },
        seedling: {
          name: "Plántula",
          description: "Desarrollo de las primeras hojas",
          care: "Ubicación luminosa, mantener húmedo",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crecimiento de hojas y desarrollo de raíz",
          care: "Riego regular, aclarar, desmalezar",
        },
        root_development: {
          name: "Desarrollo de Raíz",
          description: "Desarrollo de la zanahoria",
          care: "Mantener húmedo, suelo suelto",
        },
        harvest: {
          name: "Cosecha",
          description: "Zanahorias listas para cosechar",
          care: "Cavar suavemente, no dañar",
        },
      },
    },
  },
  careTips: {
    watering: "Mantener húmedo, no demasiado mojado",
    fertilizing: "Fertilización ligera, poco nitrógeno",
    sunlight: "Sol pleno a sombra parcial (mín. 6 horas)",
    spacing: "Espaciado 5-10 cm",
    temperature: "Fresco a cálido, 15-25°C óptimo",
    soilPH: "6.0-7.0",
    soil: "Suelo suelto y profundo, sin piedras",
  },
  commonProblems: {
    "Mosca de la Zanahoria": "Larvas en raíces - malla, consociación",
    "Gusanos de Alambre": "Larvas en raíces - malla, consociación",
    "Raíces Deformadas": "Suelo compactado - aflojar suelo, sin piedras",
  },
};
