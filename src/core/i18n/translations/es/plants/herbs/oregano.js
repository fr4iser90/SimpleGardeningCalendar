export default {
  name: "Orégano",
  category: "category.herbs",
  tags: ["tag.perennial"],
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Las semillas germinan y emergen las raíces.",
          care: "Mantener caliente y húmedo. Usar bandeja de semillas o macetas pequeñas, cubrir ligeramente con tierra.",
        },
        seedling: {
          name: "Plántula",
          description: "Se desarrollan las primeras hojas verdaderas.",
          care: "Proporcionar luz brillante, mantener el suelo húmedo pero no empapado.",
        },
        vegetative: {
          name: "Vegetativo",
          description: "Crecimiento de hojas y tallos.",
          care: "Pellizcar puntas para ramificación, regar regularmente, fertilizar ligeramente cada 3-4 semanas.",
        },
        harvest: {
          name: "Cosecha",
          description: "Cosecha continua de hojas.",
          care: "Cosechar hojas regularmente para estimular el crecimiento. Evitar que la planta florezca.",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Las semillas germinan y emergen las raíces.",
          care: "Sembrar después de la última helada, mantener el suelo húmedo hasta que aparezcan las plántulas.",
        },
        seedling: {
          name: "Plántula",
          description: "Se desarrollan las primeras hojas verdaderas.",
          care: "Proporcionar sombra parcial, proteger del sol fuerte y el viento.",
        },
        vegetative: {
          name: "Vegetativo",
          description: "Crecimiento de hojas y tallos.",
          care: "Regar regularmente, fertilizar ligeramente, pellizcar puntas para ramificación.",
        },
        harvest: {
          name: "Cosecha",
          description: "Cosecha continua de hojas.",
          care: "Cosechar hojas y tallos según sea necesario. La poda previene la floración y la propagación.",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-01',
            description: 'Después de la última helada, planta perenne',
          },
          harvestWindow: {
            start: '05-15',
            end: '10-15',
            description: 'Cosecha continua durante la temporada de crecimiento',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '03-01',
            end: '05-01',
            description: 'Comienzo temprano para planta perenne',
          },
          harvestWindow: {
            start: '04-15',
            end: '11-15',
            description: 'Temporada de cosecha extendida',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Las semillas germinan y emergen las raíces.",
          care: "Mantener caliente y húmedo en ambiente controlado.",
        },
        seedling: {
          name: "Plántula",
          description: "Se desarrollan las primeras hojas verdaderas.",
          care: "Proporcionar luz brillante, mantener el suelo húmedo.",
        },
        vegetative: {
          name: "Vegetativo",
          description: "Crecimiento de hojas y tallos.",
          care: "Pellizcar puntas para ramificación, regar regularmente, fertilizar ligeramente.",
        },
        harvest: {
          name: "Cosecha",
          description: "Cosecha continua de hojas.",
          care: "Cosechar hojas y tallos según sea necesario. Podar para evitar floración y propagación.",
        },
      },
    },
  },
  careTips: {
    watering: "Dejar secar el suelo entre riegos.",
    fertilizing: "Alimentación ligera cada 2-3 semanas.",
    sunlight: "Pleno sol (6+ horas diarias).",
    spacing: "30-45 cm de separación.",
    temperature: "Hierba de clima cálido, tolerante a la sequía.",
    soilPH: "6.0-8.0",
    harvesting: "Cosechar hojas regularmente para estimular el crecimiento.",
  },
  commonProblems: {
    "Podredumbre de raíces": "Exceso de riego - asegurar buen drenaje.",
    "Crecimiento débil": "Poca luz - proporcionar más sol.",
    "Daños por helada": "Proteger de las heladas en climas fríos.",
  },
}; 