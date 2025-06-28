export default {
  name: "Arándanos",
  category: "category.fruits",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        establishment: {
          name: "Establecimiento",
          description: "Desarrollo radicular (primeros 90 días)",
          care: "Remover flores primer año, enfocarse en raíces",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crecimiento y desarrollo arbusto",
          care: "Poda de formación, remover brotes débiles",
        },
        flowering: {
          name: "Floración",
          description: "Formación de flores",
          care: "Proteger flores de heladas tardías",
        },
        fruiting: {
          name: "Fructificación",
          description: "Producción de bayas",
          care: "Riego y fertilización regulares, mantener bayas secas",
        },
        dormancy: {
          name: "Dormancia",
          description: "Reposo invernal",
          care: "Podar madera vieja, acolchar para protección invernal",
        },
      },
    },
    outdoor: {
      phases: {
        establishment: {
          name: "Establecimiento",
          description: "Desarrollo radicular (primeros 90 días)",
          care: "Remover flores primer año, enfocarse en raíces",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crecimiento y desarrollo arbusto",
          care: "Poda de formación, remover brotes débiles",
        },
        flowering: {
          name: "Floración",
          description: "Formación de flores",
          care: "Proteger flores de heladas tardías",
        },
        fruiting: {
          name: "Fructificación",
          description: "Producción de bayas",
          care: "Riego y fertilización regulares, mantener bayas secas",
        },
        dormancy: {
          name: "Dormancia",
          description: "Reposo invernal",
          care: "Podar madera vieja, acolchar para protección invernal",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'Plantación de principios a mediados de primavera',
          },
          harvestWindow: {
            start: '07-01',
            end: '09-30',
            description: 'Cosecha durante todo el verano',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-01',
            end: '04-15',
            description: 'Plantación muy temprana en primavera',
          },
          harvestWindow: {
            start: '04-15',
            end: '07-31',
            description: 'Cosecha antes del calor del verano',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        establishment: {
          name: "Establecimiento",
          description: "Desarrollo radicular (primeros 90 días)",
          care: "Remover flores primer año, enfocarse en raíces",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crecimiento y desarrollo arbusto",
          care: "Poda de formación, remover brotes débiles",
        },
        flowering: {
          name: "Floración",
          description: "Formación de flores",
          care: "Proteger flores de heladas tardías",
        },
        fruiting: {
          name: "Fructificación",
          description: "Producción de bayas",
          care: "Riego y fertilización regulares, mantener bayas secas",
        },
        dormancy: {
          name: "Dormancia",
          description: "Reposo invernal",
          care: "Podar madera vieja, acolchar para protección invernal",
        },
      },
    },
  },
  careTips: {
    watering: "Mantener suelo constantemente húmedo, sin riego por encima",
    fertilizing: "Fertilizante especial para plantas acidófilas, pH 4,5-5,5",
    sunlight: "Sol pleno (mín. 6 horas)",
    spacing: "Distancia 1,2-1,8 m",
    temperature: "Cultivo fresco, proteger del calor",
    soilPH: "4,5-5,5 (suelo ácido necesario)",
    mulching: "Acolchado de corteza o aserrín para retención de acidez",
  },
  commonProblems: {
    "Deficiencia de Hierro": "Hojas amarillas con venas verdes - verificar pH",
    "Aves": "Comen bayas maduras - usar redes",
    "Podredumbre Radicular": "Enfermedad fúngica - mejorar drenaje, evitar encharcamiento",
  },
};
