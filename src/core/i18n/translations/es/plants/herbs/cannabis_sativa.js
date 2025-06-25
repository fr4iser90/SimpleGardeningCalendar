export default {
  name: "Cannabis Sativa",
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
          description: "Fase de crecimiento prolongada.",
          care: "Ciclo de luz 18/6, alimentación rica en nitrógeno, entrenamiento para control de altura.",
        },
        preflower: {
          name: "Pre-floración",
          description: "Determinación del sexo.",
          care: "Continuar cuidados vegetativos, identificar y remover machos.",
        },
        flowering: {
          name: "Floración",
          description: "Período de floración largo.",
          care: "Ciclo de luz 12/12, alimentación fósforo/potasio, sostener ramas altas.",
        },
        harvest: {
          name: "Cosecha",
          description: "Preparación de cosecha y curado.",
          care: "Enjuagar nutrientes 1-2 semanas antes de la cosecha.",
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
          description: "Crecimiento vegetativo en luz natural prolongada.",
          care: "Luz natural del sol, entrenamiento para gestión de tamaño, alimentación pesada.",
        },
        preflower: {
          name: "Pre-floración",
          description: "Disparador fotoperiódico natural.",
          care: "Ocurre naturalmente con el acortamiento de días, identificar machos.",
        },
        flowering: {
          name: "Floración",
          description: "Floración al aire libre prolongada (8-16 semanas según variedad).",
          care: "Ciclo de luz natural, protección climática, monitoreo de plagas.",
        },
        harvest: {
          name: "Cosecha",
          description: "Cosecha tardía debido a larga floración.",
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
          description: "Floración en invernadero (8-16 semanas según variedad).",
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
    sunlight: "18/6 horas en crecimiento, 12/12 horas en floración.",
    spacing: "90-180 cm de separación, puede crecer muy alta.",
    support: "Estacas fuertes o SCROG para gestión de altura.",
    humidity: "65-70% plántula, 40-50% vegetativo, 40-45% floración.",
    temperature: "21-29°C día, 18-27°C noche.",
  },
  commonProblems: {
    "Gestión de altura": "Puede crecer muy alta - usar LST, topping, o SCROG",
    "Floración larga": "Tiempo de cosecha prolongado - ser paciente, monitorear tricomas",
    "Deficiencia nutricional": "Plantas grandes necesitan más nutrientes - aumentar alimentación",
    "Penetración de luz": "Canopia densa - defoliar y LST para penetración de luz",
  },
};
