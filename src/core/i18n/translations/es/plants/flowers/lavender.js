export default {
  name: "Lavanda",
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
          care: "Mucha luz, regar con moderación, evitar exceso de agua.",
        },
        vegetative: {
          name: "Vegetativo",
          description: "Crecimiento rápido de hojas y tallos.",
          care: "Mucha luz, riego moderado, podar para ramificación.",
        },
        flowering: {
          name: "Floración",
          description: "La planta comienza a florecer.",
          care: "Mucha luz solar, regar con moderación, cosechar flores para fragancia.",
        },
        harvest: {
          name: "Cosecha",
          description: "Cosecha de flores y hojas.",
          care: "Cosechar flores cuando se abren, colgar para secar.",
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
          care: "Sol pleno, regar con moderación, podar para ramificación.",
        },
        flowering: {
          name: "Floración",
          description: "La planta comienza a florecer.",
          care: "Sol pleno, regar con moderación, cosechar flores para fragancia.",
        },
        harvest: {
          name: "Cosecha",
          description: "Cosecha de flores y hojas.",
          care: "Cosechar flores cuando se abren, colgar para secar.",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '04-01',
            end: '06-01',
            description: 'Plantación de primavera a principios de verano',
          },
          harvestWindow: {
            start: '06-15',
            end: '09-15',
            description: 'Cosecha en verano',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-15',
            end: '05-01',
            description: 'Muy temprano en primavera hasta finales de primavera',
          },
          harvestWindow: {
            start: '05-15',
            end: '09-30',
            description: 'Cosecha en verano',
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
          care: "Ambiente controlado, regar con moderación.",
        },
        vegetative: {
          name: "Vegetativo",
          description: "Crecimiento rápido en invernadero.",
          care: "Mucha luz, regar con moderación, podar para ramificación.",
        },
        flowering: {
          name: "Floración",
          description: "La planta comienza a florecer.",
          care: "Mucha luz, regar con moderación, cosechar flores para fragancia.",
        },
        harvest: {
          name: "Cosecha",
          description: "Cosecha de flores y hojas.",
          care: "Cosechar flores cuando se abren, colgar para secar.",
        },
      },
    },
  },
  careTips: {
    watering: "Regar con moderación, dejar secar el suelo entre riegos.",
    fertilizing: "Alimentación ligera en primavera con fertilizante orgánico.",
    sunlight: "Sol pleno, al menos 6 horas de sol directo.",
    spacing: "30-60 cm de separación entre plantas.",
    support: "Generalmente no necesario, puede ser estacado en viento fuerte.",
    humidity: "Humedad baja preferida.",
    temperature: "15-25°C óptimo, resistente hasta -15°C.",
  },
  commonProblems: {
    "Podredumbre de raíces": "Hojas amarillas, marchitamiento - regar menos, mejorar drenaje",
    "Mildiu": "Polvo blanco en hojas - mejorar circulación de aire",
    "Ácaros": "Pequeñas telarañas y manchas - aumentar humedad",
    "Exceso de agua": "Hojas marchitas - reducir riego, mejorar drenaje",
  },
};
