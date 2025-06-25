export default {
  name: "Albahaca",
  category: "category.herbs",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Las semillas comienzan a brotar y emergen las raíces.",
          care: "Mantener semillas calientes (21-24°C) y húmedas.",
        },
        seedling: {
          name: "Plántula",
          description: "La joven planta desarrolla las primeras hojas verdaderas.",
          care: "Mucha luz, riego regular, evitar exceso de agua.",
        },
        vegetative: {
          name: "Vegetativo",
          description: "Crecimiento rápido de hojas y tallos.",
          care: "Mucha luz, riego regular, cosechar hojas para ramificación.",
        },
        flowering: {
          name: "Floración",
          description: "La planta comienza a florecer.",
          care: "Remover flores para mejor sabor, continuar cosecha.",
        },
        harvest: {
          name: "Cosecha",
          description: "Cosecha continua de hojas.",
          care: "Cosechar regularmente, remover flores, congelar para invierno.",
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
          care: "Sol pleno, riego regular, cosechar hojas.",
        },
        flowering: {
          name: "Floración",
          description: "La planta comienza a florecer.",
          care: "Remover flores para mejor sabor, continuar cosecha.",
        },
        harvest: {
          name: "Cosecha",
          description: "Cosecha continua hasta las heladas.",
          care: "Cosechar regularmente, congelar o secar para invierno.",
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
          care: "Mucha luz, riego regular, cosechar hojas.",
        },
        flowering: {
          name: "Floración",
          description: "La planta comienza a florecer.",
          care: "Remover flores para mejor sabor, continuar cosecha.",
        },
        harvest: {
          name: "Cosecha",
          description: "Cosecha continua en invernadero.",
          care: "Cosechar regularmente, congelar o secar para invierno.",
        },
      },
    },
  },
  careTips: {
    watering: "Regar regularmente, mantener suelo húmedo pero no empapado.",
    fertilizing: "Alimentación ligera cada 2-3 semanas con fertilizante orgánico.",
    sunlight: "Sol pleno a sombra parcial, al menos 6 horas de sol.",
    spacing: "20-30 cm de separación entre plantas.",
    support: "Generalmente no necesario, puede ser estacado en viento fuerte.",
    humidity: "Humedad normal, no muy húmedo.",
    temperature: "21-27°C óptimo, sensible a heladas.",
  },
  commonProblems: {
    "Mildiu": "Manchas amarillas en hojas - mejorar circulación de aire",
    "Pulgones": "Pequeños insectos en hojas - enjuagar con agua o solución jabonosa",
    "Daño por helada": "Hojas negras por helada - proteger de heladas",
    "Subida a flor": "Floración temprana por calor - remover flores, mantener más fresco",
  },
};
