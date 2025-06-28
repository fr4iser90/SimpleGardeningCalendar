export default {
  name: "Frambuesas",
  category: "category.fruits",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        establishment: {
          name: "Establecimiento",
          description: "Desarrollo radicular (primeros 60 días)",
          care: "Remover flores primer año, enfocarse en raíces",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crecimiento y desarrollo cañas",
          care: "Atar cañas al soporte, remover brotes débiles",
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
          care: "Podar cañas viejas, acolchar para protección invernal",
        },
      },
    },
    outdoor: {
      phases: {
        establishment: {
          name: "Establecimiento",
          description: "Desarrollo radicular (primeros 60 días)",
          care: "Remover flores primer año, enfocarse en raíces",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crecimiento y desarrollo cañas",
          care: "Atar cañas al soporte, remover brotes débiles",
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
          care: "Podar cañas viejas, acolchar para protección invernal",
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
            start: '06-15',
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
          description: "Desarrollo radicular (primeros 60 días)",
          care: "Remover flores primer año, enfocarse en raíces",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Crecimiento y desarrollo cañas",
          care: "Atar cañas al soporte, remover brotes débiles",
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
          care: "Podar cañas viejas, acolchar para protección invernal",
        },
      },
    },
  },
  careTips: {
    watering: "Mantener suelo constantemente húmedo, sin riego por encima",
    fertilizing: "Fertilización balanceada en primavera, bajo nitrógeno",
    sunlight: "Sol pleno (mín. 6 horas)",
    spacing: "Distancia 60-90 cm",
    temperature: "Cultivo fresco, proteger del calor",
    soilPH: "5,5-6,5",
    trellising: "Atar cañas al soporte o sistema de alambres",
  },
  commonProblems: {
    "Barrenador de Cañas": "Daños de insectos a cañas - remover cañas infectadas",
    "Podredumbre Gris": "Hongo en frutos - mejorar circulación de aire",
    "Ácaros": "Pequeñas plagas en hojas - aumentar humedad, usar insectos beneficiosos",
  },
};
