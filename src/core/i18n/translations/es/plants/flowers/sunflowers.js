export default {
  name: "Girasoles",
  category: "category.flowers",
  tags: ["tag.annual"],
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
          care: "Mucha luz solar, riego regular, cosechar flores para semillas.",
        },
        harvest: {
          name: "Cosecha",
          description: "Cosecha de flores y semillas.",
          care: "Cosechar flores cuando se abren, dejar semillas secar.",
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
          care: "Sol pleno, riego regular, cosechar flores para semillas.",
        },
        harvest: {
          name: "Cosecha",
          description: "Cosecha de flores y semillas.",
          care: "Cosechar flores cuando se abren, dejar semillas secar.",
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
          care: "Mucha luz, riego regular, cosechar flores para semillas.",
        },
        harvest: {
          name: "Cosecha",
          description: "Cosecha de flores y semillas.",
          care: "Cosechar flores cuando se abren, dejar semillas secar.",
        },
      },
    },
  },
  careTips: {
    watering: "Regar regularmente, mantener suelo húmedo pero no empapado.",
    fertilizing: "Alimentación en primavera y verano con fertilizante orgánico.",
    sunlight: "Sol pleno, al menos 8 horas de sol directo.",
    spacing: "30-60 cm de separación entre plantas.",
    support: "Estacas para variedades altas, generalmente no para variedades enanas.",
    humidity: "Humedad normal, no muy húmedo.",
    temperature: "15-30°C óptimo, sensible a heladas.",
  },
  commonProblems: {
    "Mildiu": "Polvo blanco en hojas - mejorar circulación de aire",
    "Pulgones": "Pequeños insectos en hojas - enjuagar con agua",
    "Pájaros": "Semillas siendo comidas - usar redes",
    "Daño por viento": "Plantas altas cayéndose - usar estacas",
  },
};
