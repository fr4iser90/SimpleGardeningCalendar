export default {
  name: "Cannabis Indica",
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
          care: "Proporcionar 18-24 horas de luz, mantener humedad 65-70%.",
        },
        vegetative: {
          name: "Vegetativo",
          description: "Crecimiento rápido de hojas y tallos.",
          care: "Ciclo de luz 18/6, alimentación rica en nitrógeno, entrenamiento para ramificación.",
        },
        preflower: {
          name: "Pre-floración",
          description: "Determinación del sexo.",
          care: "Continuar cuidados vegetativos, identificar y remover machos.",
        },
        flowering: {
          name: "Floración",
          description: "Desarrollo y maduración de flores.",
          care: "Ciclo de luz 12/12, alimentación fósforo/potasio, humedad reducida 40-50%.",
        },
        harvest: {
          name: "Cosecha",
          description: "Preparación y ejecución de la cosecha.",
          care: "Enjuagar con agua limpia, monitorear tricomas, cosechar en pico de potencia.",
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
          description: "Crecimiento vegetativo en luz natural.",
          care: "Luz natural del sol, entrenamiento para gestión de tamaño, alimentación pesada.",
        },
        preflower: {
          name: "Pre-floración",
          description: "Disparador fotoperiódico natural.",
          care: "Ocurre naturalmente con el acortamiento de días, identificar machos.",
        },
        flowering: {
          name: "Floración",
          description: "Floración al aire libre (6-12 semanas según variedad).",
          care: "Ciclo de luz natural, protección climática, monitoreo de plagas.",
        },
        harvest: {
          name: "Cosecha",
          description: "Momento de cosecha al aire libre.",
          care: "Dependiente del clima, verificar tricomas, secar rápido si llueve.",
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
          description: "Crecimiento vegetativo en invernadero.",
          care: "Luz natural con control de temperatura, alimentación pesada.",
        },
        preflower: {
          name: "Pre-floración",
          description: "Gestión fotoperiódica.",
          care: "Controlar horas de luz para disparar floración, identificar machos.",
        },
        flowering: {
          name: "Floración",
          description: "Floración en invernadero (6-12 semanas según variedad).",
          care: "Ambiente controlado, protección climática, monitoreo de plagas.",
        },
        harvest: {
          name: "Cosecha",
          description: "Momento de cosecha en invernadero.",
          care: "Ambiente de secado controlado, verificar tricomas.",
        },
      },
    },
  },
  careTips: {
    watering: "Regar cuando la pulgada superior del suelo esté seca, pH 6.0-7.0 en tierra, 5.5-6.5 en hidro.",
    fertilizing: "Alto nitrógeno en crecimiento (3-1-2), alto fósforo en floración (1-3-2).",
    sunlight: "Interior: 18/6 horas en crecimiento, 12/12 en floración. Exterior: Luz natural del sol.",
    spacing: "Interior: 60-120 cm de separación. Exterior: 120-240 cm de separación para tamaño completo.",
    support: "Interior: Redes SCROG, LST. Exterior: Estacas fuertes para resistencia al viento.",
    humidity: "65-70% plántula, 40-50% vegetativo, 40-45% floración.",
    temperature: "21-29°C día, 18-27°C noche.",
  },
  commonProblems: {
    "Quemadura nutricional": "Puntas de hojas amarillas/marrones - reducir concentración de alimentación",
    "Quemadura de luz": "Cimas blanqueadas - aumentar distancia de luces",
    "Podredumbre de cogollos": "Moho gris en cogollos - mejorar circulación de aire y reducir humedad",
    "Ácaros": "Pequeñas telarañas y manchas - aumentar humedad, usar ácaros depredadores",
    "Mildiu": "Polvo blanco en hojas - mejorar circulación de aire, reducir humedad",
  },
};
