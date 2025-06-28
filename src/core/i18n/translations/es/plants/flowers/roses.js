export default {
  name: "Rosas",
  category: "category.flowers",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Las semillas comienzan a brotar y emergen las raíces.",
          care: "Mantener semillas calientes (18-24°C) y húmedas, luz necesaria.",
        },
        seedling: {
          name: "Plántula",
          description: "La joven planta desarrolla las primeras hojas verdaderas.",
          care: "Mucha luz, riego regular, evitar exceso de agua.",
        },
        vegetative: {
          name: "Vegetativo",
          description: "Crecimiento rápido de hojas y tallos.",
          care: "Mucha luz, riego regular, podar para ramificación.",
        },
        flowering: {
          name: "Floración",
          description: "La planta comienza a florecer.",
          care: "Mucha luz solar, riego regular, remover flores marchitas.",
        },
        harvest: {
          name: "Cosecha",
          description: "Cosecha de flores para ramos.",
          care: "Cosechar flores cuando se abren, cortar para jarrones.",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Las semillas comienzan a brotar y emergen las raíces.",
          care: "Mantener semillas calientes y húmedas, proteger de heladas.",
        },
        seedling: {
          name: "Plántula",
          description: "Establecimiento al aire libre.",
          care: "Exposición gradual al sol, proteger del viento.",
        },
        vegetative: {
          name: "Vegetativo",
          description: "Crecimiento rápido al aire libre.",
          care: "Sol pleno, riego regular, podar para ramificación.",
        },
        flowering: {
          name: "Floración",
          description: "La planta comienza a florecer.",
          care: "Sol pleno, riego regular, remover flores marchitas.",
        },
        harvest: {
          name: "Cosecha",
          description: "Cosecha de flores para ramos.",
          care: "Cosechar flores cuando se abren, cortar para jarrones.",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-01',
            end: '05-15',
            description: 'Plantación temprana en primavera, antes del brote',
          },
          harvestWindow: {
            start: '06-01',
            end: '10-31',
            description: 'Cosecha durante toda la temporada de crecimiento',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-01',
            end: '04-15',
            description: 'Muy temprano en primavera hasta mediados de primavera',
          },
          harvestWindow: {
            start: '04-15',
            end: '11-30',
            description: 'Temporada de cosecha extendida',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Las semillas comienzan a brotar y emergen las raíces.",
          care: "Mantener semillas calientes y húmedas en invernadero.",
        },
        seedling: {
          name: "Plántula",
          description: "Establecimiento en invernadero.",
          care: "Ambiente controlado, riego regular.",
        },
        vegetative: {
          name: "Vegetativo",
          description: "Crecimiento rápido en invernadero.",
          care: "Mucha luz, riego regular, podar para ramificación.",
        },
        flowering: {
          name: "Floración",
          description: "La planta comienza a florecer.",
          care: "Mucha luz, riego regular, remover flores marchitas.",
        },
        harvest: {
          name: "Cosecha",
          description: "Cosecha de flores para ramos.",
          care: "Cosechar flores cuando se abren, cortar para jarrones.",
        },
      },
    },
  },
  careTips: {
    watering: "Regar regularmente, mantener suelo húmedo pero no empapado.",
    fertilizing: "Alimentación en primavera y verano con fertilizante para rosas.",
    sunlight: "Sol pleno, al menos 6 horas de sol directo.",
    spacing: "60-90 cm de separación entre plantas.",
    support: "Estacas para rosas trepadoras, generalmente no para rosas arbustivas.",
    humidity: "Humedad normal, no muy húmedo.",
    temperature: "15-25°C óptimo, resistente hasta -20°C.",
  },
  commonProblems: {
    "Mildiu": "Polvo blanco en hojas - mejorar circulación de aire",
    "Manchas negras": "Manchas negras en hojas - usar fungicida",
    "Pulgones": "Pequeños insectos en hojas - enjuagar con agua",
    "Roya": "Manchas naranjas - remover hojas afectadas",
  },
};
