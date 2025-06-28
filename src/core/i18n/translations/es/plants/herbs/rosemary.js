export default {
  name: "Romero",
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
          description: "Cosecha continua de ramitas.",
          care: "Cosechar ramitas regularmente para estimular el crecimiento. Evitar que la planta florezca.",
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
          description: "Cosecha continua de ramitas.",
          care: "Cosechar ramitas según sea necesario. Podar para evitar floración y propagación.",
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
          description: "Cosecha continua de ramitas.",
          care: "Cosechar ramitas según sea necesario. Podar para evitar floración y propagación.",
        },
      },
    },
  },
  careTips: {
    watering: "Dejar secar el suelo entre riegos.",
    fertilizing: "Alimentación ligera cada 3-4 semanas.",
    sunlight: "Pleno sol (6+ horas diarias).",
    spacing: "45-60 cm de separación.",
    temperature: "Hierba de clima cálido, proteger de las heladas.",
    soilPH: "6.0-7.0",
    harvesting: "Cosechar ramitas regularmente para estimular el crecimiento.",
  },
  commonProblems: {
    "Podredumbre de raíces": "Exceso de riego - asegurar buen drenaje.",
    "Mildiu polvoriento": "Polvo blanco en las hojas - mejorar circulación de aire.",
    "Daños por helada": "Proteger de las heladas en climas fríos.",
  },
}; 