export default {
  name: "Patatas",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        planting: {
          name: "Plantación",
          description: "Plantar patatas en el suelo",
          care: "Ojos hacia arriba, 10-15 cm de profundidad, 30 cm de distancia",
        },
        sprouting: {
          name: "Brotación",
          description: "Aparecen los primeros brotes",
          care: "Mantener húmedo, aporcar tierra",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Fuerte crecimiento de hojas",
          care: "Riego regular, fertilización, aporcar tierra",
        },
        flowering: {
          name: "Floración",
          description: "Formación de flores y desarrollo de tubérculos",
          care: "Mantener húmedo, aporcar tierra",
        },
        tuber_development: {
          name: "Desarrollo de Tubérculos",
          description: "Las patatas crecen bajo tierra",
          care: "Mantener húmedo, aporcar tierra",
        },
        harvest: {
          name: "Cosecha",
          description: "Patatas listas para cosechar",
          care: "Cavar suavemente, no dañar",
        },
      },
    },
    outdoor: {
      phases: {
        planting: {
          name: "Plantación",
          description: "Plantar patatas en el suelo",
          care: "Ojos hacia arriba, 10-15 cm de profundidad, 30 cm de distancia",
        },
        sprouting: {
          name: "Brotación",
          description: "Aparecen los primeros brotes",
          care: "Mantener húmedo, aporcar tierra",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Fuerte crecimiento de hojas",
          care: "Riego regular, fertilización, aporcar tierra",
        },
        flowering: {
          name: "Floración",
          description: "Formación de flores y desarrollo de tubérculos",
          care: "Mantener húmedo, aporcar tierra",
        },
        tuber_development: {
          name: "Desarrollo de Tubérculos",
          description: "Las patatas crecen bajo tierra",
          care: "Mantener húmedo, aporcar tierra",
        },
        harvest: {
          name: "Cosecha",
          description: "Patatas listas para cosechar",
          care: "Cavar suavemente, no dañar",
        },
      },
    },
    greenhouse: {
      phases: {
        planting: {
          name: "Plantación",
          description: "Plantar patatas en el suelo",
          care: "Ojos hacia arriba, 10-15 cm de profundidad, 30 cm de distancia",
        },
        sprouting: {
          name: "Brotación",
          description: "Aparecen los primeros brotes",
          care: "Mantener húmedo, aporcar tierra",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Fuerte crecimiento de hojas",
          care: "Riego regular, fertilización, aporcar tierra",
        },
        flowering: {
          name: "Floración",
          description: "Formación de flores y desarrollo de tubérculos",
          care: "Mantener húmedo, aporcar tierra",
        },
        tuber_development: {
          name: "Desarrollo de Tubérculos",
          description: "Las patatas crecen bajo tierra",
          care: "Mantener húmedo, aporcar tierra",
        },
        harvest: {
          name: "Cosecha",
          description: "Patatas listas para cosechar",
          care: "Cavar suavemente, no dañar",
        },
      },
    },
  },
  careTips: {
    watering: "Mantener húmedo, no demasiado mojado",
    fertilizing: "Fertilización potásica regular",
    sunlight: "Sol pleno (mín. 8 horas)",
    spacing: "Espaciado 30-40 cm",
    temperature: "Fresco a cálido, 15-25°C óptimo",
    soilPH: "5.5-6.5",
    hilling: "Aporcar tierra regularmente para más tubérculos",
  },
  commonProblems: {
    "Tizón Tardío": "Enfermedad fúngica - variedades resistentes, circulación de aire",
    "Escarabajo de la Patata": "Comen hojas - recoger a mano, insectos benéficos",
    "Gusanos de Alambre": "Larvas en tubérculos - malla, consociación",
  },
};
