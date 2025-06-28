export default {
  name: "Cannabis Autoflower",
  category: "category.herbs",
  tags: ["tag.cannabis", "tag.annual"],
  legalNote: "Verificar las leyes locales antes del cultivo. Esta información es solo con fines educativos.",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Las semillas comienzan a brotar y emergen las raíces.",
          care: "Mantener semillas calientes (21-29°C) y húmedas en ambiente oscuro.",
        },
        seedling: {
          name: "Plántula",
          description: "La joven planta desarrolla las primeras hojas verdaderas.",
          care: "Proporcionar 18-24 horas de luz, cuidados suaves - sin trasplante.",
        },
        vegetative: {
          name: "Vegetativo",
          description: "Crecimiento temprano rápido.",
          care: "18-24 horas luz, alimentación ligera, estrés mínimo.",
        },
        preflower: {
          name: "Pre-floración",
          description: "Transición automática.",
          care: "Continuar mismo programa de luz, comenzar nutrientes de floración.",
        },
        flowering: {
          name: "Floración",
          description: "Floración rápida.",
          care: "Continuar 18-24 horas luz, alimentación fósforo/potasio.",
        },
        harvest: {
          name: "Cosecha",
          description: "Ciclo de cosecha rápido.",
          care: "Enjuagar nutrientes 1 semana antes de la cosecha.",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Las semillas comienzan a brotar y emergen las raíces.",
          care: "Mantener semillas calientes y húmedas, proteger del sol directo.",
        },
        seedling: {
          name: "Plántula",
          description: "Establecimiento al aire libre.",
          care: "Exposición gradual al sol, proteger de viento y plagas.",
        },
        vegetative: {
          name: "Vegetativo",
          description: "Crecimiento vegetativo autoflower.",
          care: "Luz natural del sol, entrenamiento LST, alimentación pesada.",
        },
        preflower: {
          name: "Pre-floración",
          description: "Transición autoflower.",
          care: "Auto-floración ocurre independientemente del ciclo de luz.",
        },
        flowering: {
          name: "Floración",
          description: "Floración autoflower al aire libre (6-10 semanas según variedad).",
          care: "Ciclo de luz natural, protección climática, monitoreo de plagas.",
        },
        harvest: {
          name: "Cosecha",
          description: "Momento de cosecha autoflower.",
          care: "Dependiente del clima, verificar tricomas, secar rápido si llueve.",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '05-01',
            end: '06-15',
            description: 'Después de la última helada, suelo cálido (15°C+)',
          },
          harvestWindow: {
            start: '08-01',
            end: '09-30',
            description: 'Cosecha antes de la primera helada',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '04-01',
            end: '05-15',
            description: 'Posible siembra temprana, suelo cálido',
          },
          harvestWindow: {
            start: '07-01',
            end: '09-30',
            description: 'Cosecha antes del calor extremo',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Germinación",
          description: "Las semillas comienzan a brotar y emergen las raíces.",
          care: "Mantener semillas calientes y húmedas en ambiente controlado.",
        },
        seedling: {
          name: "Plántula",
          description: "Establecimiento en invernadero.",
          care: "Ambiente controlado, proteger de extremos de temperatura.",
        },
        vegetative: {
          name: "Vegetativo",
          description: "Crecimiento vegetativo autoflower en invernadero.",
          care: "Luz natural con control de temperatura, entrenamiento LST.",
        },
        preflower: {
          name: "Pre-floración",
          description: "Transición autoflower.",
          care: "Auto-floración ocurre independientemente del ciclo de luz.",
        },
        flowering: {
          name: "Floración",
          description: "Floración autoflower en invernadero (6-10 semanas según variedad).",
          care: "Ambiente controlado, protección climática, monitoreo de plagas.",
        },
        harvest: {
          name: "Cosecha",
          description: "Momento de cosecha autoflower en invernadero.",
          care: "Ambiente de secado controlado, verificar tricomas.",
        },
      },
    },
  },
  careTips: {
    watering: "Riego ligero, las autoflowers prefieren menos agua que las fotoperiódicas.",
    fertilizing: "Programa de alimentación ligero, nutrientes 1/4 a 1/2 fuerza.",
    sunlight: "18-24 horas durante todo el ciclo.",
    spacing: "30-60 cm de separación, plantas más pequeñas.",
    support: "Entrenamiento mínimo, LST solo si es necesario.",
    humidity: "60-65% durante todo el ciclo.",
    temperature: "21-27°C constante.",
  },
  commonProblems: {
    "Crecimiento atrofiado": "Sensible al estrés - evitar trasplante y entrenamiento pesado",
    "Quemadura nutricional": "Muy sensible a nutrientes - usar alimentación ligera",
    "Ciclo corto": "Crecimiento rápido - estar listo para transiciones rápidas",
  },
};
