export default {
  name: "Fresas",
  category: "category.fruits",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        establishment: {
          name: "Establecimiento",
          description: "Desarrollo radicular (primeros 30 días)",
          care: "Mantener suelo húmedo, remover flores primer año",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Desarrollo estolones y hojas",
          care: "Usar estolones para propagación",
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
          care: "Cubrir con mantillo para protección invernal",
        },
      },
    },
    outdoor: {
      phases: {
        establishment: {
          name: "Establecimiento",
          description: "Desarrollo radicular (primeros 30 días)",
          care: "Mantener suelo húmedo, remover flores primer año",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Desarrollo estolones y hojas",
          care: "Usar estolones para propagación",
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
          care: "Cubrir con mantillo para protección invernal",
        },
      },
    },
    greenhouse: {
      phases: {
        establishment: {
          name: "Establecimiento",
          description: "Desarrollo radicular (primeros 30 días)",
          care: "Mantener suelo húmedo, remover flores primer año",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Desarrollo estolones y hojas",
          care: "Usar estolones para propagación",
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
          care: "Cubrir con mantillo para protección invernal",
        },
      },
    },
  },
  careTips: {
    watering: "Mantener suelo constantemente húmedo, evitar encharcamiento",
    fertilizing: "Fertilización balanceada en primavera, bajo nitrógeno",
    sunlight: "Sol pleno (mín. 6 horas)",
    spacing: "Distancia 30-45 cm",
    temperature: "Cultivo fresco, proteger del calor",
    soilPH: "5,5-6,5",
    mulching: "Mantillo de paja mantiene bayas limpias y húmedas",
  },
  commonProblems: {
    "Podredumbre Gris": "Hongo en frutos - mejorar circulación de aire",
    "Babosas": "Comen agujeros en bayas - cebos para babosas o trampas de cerveza",
    "Aves": "Comen bayas maduras - usar redes",
  },
};
