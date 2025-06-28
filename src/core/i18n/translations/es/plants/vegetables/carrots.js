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
        leafing: {
          name: "Desarrollo de Hojas",
          description: "Desarrollo de las primeras hojas",
          care: "Ubicación luminosa, mantener húmedo",
        },
        rooting: {
          name: "Desarrollo de Raíz",
          description: "Desarrollo de la zanahoria",
          care: "Mantener húmedo, suelo suelto",
        },
        maturing: {
          name: "Maduración",
          description: "Agrandamiento de raíz y crecimiento final",
          care: "Mantener humedad uniforme, evitar grietas",
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
        leafing: {
          name: "Desarrollo de Hojas",
          description: "Desarrollo de las primeras hojas",
          care: "Ubicación luminosa, mantener húmedo",
        },
        rooting: {
          name: "Desarrollo de Raíz",
          description: "Desarrollo de la zanahoria",
          care: "Mantener húmedo, suelo suelto",
        },
        maturing: {
          name: "Maduración",
          description: "Agrandamiento de raíz y crecimiento final",
          care: "Mantener humedad uniforme, evitar grietas",
        },
        harvest: {
          name: "Cosecha",
          description: "Zanahorias listas para cosechar",
          care: "Cavar suavemente, no dañar",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-15',
            end: '07-15',
            description: 'Siembra temprana en marzo, siembra principal hasta julio para cosecha de otoño',
          },
          harvestWindow: {
            start: '06-01',
            end: '11-01',
            description: 'Cosecha según variedad y tiempo de siembra',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-01',
            end: '09-01',
            description: 'Temporada de siembra más larga en clima suave',
          },
          harvestWindow: {
            start: '05-01',
            end: '12-15',
            description: 'Tiempo de cosecha extendido por clima suave',
          },
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
        leafing: {
          name: "Desarrollo de Hojas",
          description: "Desarrollo de las primeras hojas",
          care: "Ubicación luminosa, mantener húmedo",
        },
        rooting: {
          name: "Desarrollo de Raíz",
          description: "Desarrollo de la zanahoria",
          care: "Mantener húmedo, suelo suelto",
        },
        maturing: {
          name: "Maduración",
          description: "Agrandamiento de raíz y crecimiento final",
          care: "Mantener humedad uniforme, evitar grietas",
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
