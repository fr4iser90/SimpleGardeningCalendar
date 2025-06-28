export default {
  name: "Perejil",
  category: "category.herbs",
  tags: ["tag.biennial"],
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
          care: "Pellizcar puntas para ramificación, regar regularmente, fertilizar ligeramente cada 2-3 semanas.",
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
          care: "Cosechar hojas y tallos según sea necesario. Podar para evitar floración y propagación.",
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
    watering: "Mantener el suelo constantemente húmedo.",
    fertilizing: "Alimentación ligera cada 2-3 semanas.",
    sunlight: "Sombra parcial a pleno sol.",
    spacing: "15-30 cm de separación.",
    temperature: "Hierba de clima fresco a cálido.",
    soilPH: "6.0-7.0",
    harvesting: "Cosechar hojas regularmente para estimular el crecimiento.",
  },
  commonProblems: {
    "Germinación lenta": "Las semillas de perejil germinan lentamente - tener paciencia.",
    "Floración prematura": "Producción de semillas en el segundo año - cosechar regularmente.",
    "Manchas en hojas": "Enfermedad fúngica - mejorar circulación de aire, evitar riego por encima.",
  },
}; 