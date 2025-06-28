// Spanish Garden Calendar Templates - Plantillas de calendario de jardín español
// Adaptadas a las prácticas de jardinería españolas y al clima

export const GARDEN_TEMPLATE_CATEGORIES_ES = {
  ORNAMENTAL: 'ORNAMENTAL',
  HERB_GARDEN: 'HERB_GARDEN',
  BALCONY_TERRACE: 'BALCONY_TERRACE',
  COMPLETE_GARDEN: 'COMPLETE_GARDEN',
  FRUIT_GARDEN: 'FRUIT_GARDEN',
  VEGETABLE_GARDEN: 'VEGETABLE_GARDEN'
};

// Template for Ornamental Garden (Jardín ornamental)
export const ORNAMENTAL_GARDEN_TEMPLATE_ES = {
  name: "Plan anual del jardín ornamental",
  description: "Calendario completo para el jardín ornamental con todas las tareas importantes",
  category: GARDEN_TEMPLATE_CATEGORIES_ES.ORNAMENTAL,
  region: "mediterranean",
  tasks: [
    // Enero
    {
      month: 1,
      title: "Podar árboles frutales",
      date: "01-15",
      type: "pruning",
      description: "Podar árboles frutales de pepita en días secos y templados.",
      priority: "high",
    },
    {
      month: 1,
      title: "Plantar rosales",
      date: "01-20",
      type: "planting",
      description: "Plantar rosales a raíz desnuda si el suelo no está helado.",
      priority: "medium",
    },

    // Febrero
    {
      month: 2,
      title: "Poda de rosales",
      date: "02-15",
      type: "pruning",
      description: "Realizar la poda principal de rosales antes de la brotación.",
      priority: "high",
    },
    {
      month: 2,
      title: "Preparar semilleros",
      date: "02-25",
      type: "planting",
      description: "Preparar semilleros de flores anuales bajo protección.",
      priority: "medium",
    },

    // Marzo
    {
      month: 3,
      title: "Siembra de césped",
      date: "03-01",
      type: "planting",
      description: "Época ideal para sembrar o resembrar el césped.",
      priority: "high",
    },
    {
      month: 3,
      title: "Plantar bulbos de verano",
      date: "03-15",
      type: "planting",
      description: "Plantar dalias, gladiolos y begonias.",
      priority: "medium",
    },

    // Abril
    {
      month: 4,
      title: "Fertilizar macizos",
      date: "04-01",
      type: "fertilizing",
      description: "Abonar macizos de vivaces y rosales.",
      priority: "high",
    },
    {
      month: 4,
      title: "Plantar anuales",
      date: "04-15",
      type: "planting",
      description: "Plantar flores anuales al aire libre.",
      priority: "high",
    },

    // Mayo
    {
      month: 5,
      title: "Riego regular",
      date: "05-01",
      type: "watering",
      description: "Comenzar el riego regular, preferiblemente por la mañana.",
      priority: "high",
    },
    {
      month: 5,
      title: "Acolchado",
      date: "05-15",
      type: "maintenance",
      description: "Acolchar macizos para conservar la humedad.",
      priority: "medium",
    },

    // Junio
    {
      month: 6,
      title: "Poda de setos",
      date: "06-01",
      type: "pruning",
      description: "Primera poda de setos de crecimiento rápido.",
      priority: "medium",
    },
    {
      month: 6,
      title: "Eliminar flores marchitas",
      date: "06-15",
      type: "maintenance",
      description: "Eliminar regularmente las flores marchitas.",
      priority: "medium",
    },

    // Julio
    {
      month: 7,
      title: "Riego intensivo",
      date: "07-01",
      type: "watering",
      description: "Intensificar el riego durante el calor intenso.",
      priority: "high",
    },
    {
      month: 7,
      title: "Esquejes de geranios",
      date: "07-15",
      type: "planting",
      description: "Hacer esquejes de geranios para el año siguiente.",
      priority: "low",
    },

    // Agosto
    {
      month: 8,
      title: "Siembra de bianuales",
      date: "08-01",
      type: "planting",
      description: "Sembrar flores bianuales: pensamientos, nomeolvides.",
      priority: "medium",
    },
    {
      month: 8,
      title: "División de iris",
      date: "08-15",
      type: "maintenance",
      description: "Dividir y replantar matas de iris después de la floración.",
      priority: "medium",
    },

    // Septiembre
    {
      month: 9,
      title: "Renovar el césped",
      date: "09-01",
      type: "maintenance",
      description: "Escarificar, airear y resembrar el césped.",
      priority: "high",
    },
    {
      month: 9,
      title: "Plantar bulbos de primavera",
      date: "09-15",
      type: "planting",
      description: "Comenzar la plantación de bulbos de floración primaveral.",
      priority: "high",
    },

    // Octubre
    {
      month: 10,
      title: "Plantar árboles y arbustos",
      date: "10-01",
      type: "planting",
      description: "Época ideal para plantar árboles y arbustos.",
      priority: "high",
    },
    {
      month: 10,
      title: "Continuar plantación de bulbos",
      date: "10-15",
      type: "planting",
      description: "Continuar plantando tulipanes, narcisos, jacintos.",
      priority: "high",
    },

    // Noviembre
    {
      month: 11,
      title: "Protección invernal",
      date: "11-01",
      type: "maintenance",
      description: "Instalar protecciones invernales para plantas delicadas.",
      priority: "medium",
    },
    {
      month: 11,
      title: "Limpiar macizos",
      date: "11-15",
      type: "maintenance",
      description: "Limpiar macizos y recoger hojas caídas.",
      priority: "medium",
    },

    // Diciembre
    {
      month: 12,
      title: "Planificar próxima temporada",
      date: "12-01",
      type: "maintenance",
      description: "Encargar semillas y planificar mejoras para el año siguiente.",
      priority: "low",
    },
    {
      month: 12,
      title: "Forzar bulbos",
      date: "12-15",
      type: "planting",
      description: "Plantar bulbos en macetas para forzado invernal.",
      priority: "low",
    },
  ],
};

// Template for Fruit Garden (solo tareas de fruta)
export const FRUIT_GARDEN_TEMPLATE_ES = {
  name: "Plan anual del frutal",
  description: "Calendario anual para árboles frutales, bayas y cuidados del huerto de frutas",
  category: GARDEN_TEMPLATE_CATEGORIES_ES.FRUIT_GARDEN || 'Frutal',
  region: "mediterranean",
  tasks: [
    // Enero
    {
      month: 1,
      title: "Poda de frutales",
      date: "01-15",
      type: "pruning",
      description: "Podar árboles frutales de pepita en tiempo seco.",
      priority: "high",
    },
    // Septiembre
    {
      month: 9,
      title: "Cosechar frutos",
      date: "09-01",
      type: "harvesting",
      description: "Cosecha de manzanas, peras, ciruelas.",
      priority: "high",
    },
    // Septiembre
    {
      month: 9,
      title: "Plantar fresas",
      date: "09-15",
      type: "planting",
      description: "Plantar nuevas fresas.",
      priority: "medium",
    },
    // Diciembre
    {
      month: 12,
      title: "Cosechar cítricos",
      date: "12-01",
      type: "harvesting",
      description: "Comenzar la cosecha de naranjas y mandarinas.",
      priority: "high",
    }
  ]
};

// Template for Vegetable Garden (solo tareas de hortalizas)
export const VEGETABLE_GARDEN_TEMPLATE_ES = {
  name: "Plan anual del huerto",
  description: "Calendario anual para hortalizas, ensaladas y patatas",
  category: GARDEN_TEMPLATE_CATEGORIES_ES.VEGETABLE_GARDEN || 'Huerto',
  region: "mediterranean",
  tasks: [
    // Febrero
    {
      month: 2,
      title: "Siembra bajo protección",
      date: "02-15",
      type: "planting",
      description: "Primeras siembras bajo protección: rábanos, lechugas.",
      priority: "high",
    },
    // Marzo
    {
      month: 3,
      title: "Siembra al aire libre",
      date: "03-01",
      type: "planting",
      description: "Sembrar zanahorias, chirivías, guisantes.",
      priority: "high",
    },
    // Abril
    {
      month: 4,
      title: "Plantar patatas",
      date: "04-01",
      type: "planting",
      description: "Plantar patatas tempranas.",
      priority: "high",
    },
    // Mayo
    {
      month: 5,
      title: "Trasplantar plantones",
      date: "05-01",
      type: "planting",
      description: "Trasplantar tomates, calabacines, berenjenas.",
      priority: "high",
    },
    // Junio
    {
      month: 6,
      title: "Primera cosecha",
      date: "06-15",
      type: "harvesting",
      description: "Primera cosecha de rábanos, lechugas, guisantes.",
      priority: "medium",
    },
    // Julio
    {
      month: 7,
      title: "Cosecha de verano",
      date: "07-01",
      type: "harvesting",
      description: "Cosechar calabacines, tomates, judías verdes.",
      priority: "high",
    },
    // Agosto
    {
      month: 8,
      title: "Gran cosecha",
      date: "08-01",
      type: "harvesting",
      description: "Período de gran cosecha: tomates, berenjenas, pimientos.",
      priority: "high",
    },
    // Octubre
    {
      month: 10,
      title: "Cosechar hortalizas de raíz",
      date: "10-01",
      type: "harvesting",
      description: "Cosechar zanahorias, remolachas, nabos.",
      priority: "high",
    },
    // Noviembre
    {
      month: 11,
      title: "Cosechar hortalizas de invierno",
      date: "11-15",
      type: "harvesting",
      description: "Cosechar puerros, coles, espinacas.",
      priority: "medium",
    }
  ]
};

// Template for Herb Garden (Jardín de hierbas aromáticas)
export const HERB_GARDEN_TEMPLATE_ES = {
  name: "Plan anual del jardín de aromáticas",
  description: "Calendario especializado para el cultivo de hierbas aromáticas",
  category: GARDEN_TEMPLATE_CATEGORIES_ES.HERB_GARDEN,
  region: "mediterranean",
  tasks: [
    // Marzo
    {
      month: 3,
      title: "Podar aromáticas vivaces",
      date: "03-15",
      type: "pruning",
      description: "Podar tomillo, romero, salvia, orégano.",
      priority: "high",
    },
    {
      month: 3,
      title: "Sembrar perejil",
      date: "03-25",
      type: "planting",
      description: "Sembrar perejil liso y rizado bajo protección.",
      priority: "medium",
    },

    // Abril
    {
      month: 4,
      title: "Dividir cebollino",
      date: "04-01",
      type: "maintenance",
      description: "Dividir matas de cebollino.",
      priority: "medium",
    },
    {
      month: 4,
      title: "Sembrar cilantro",
      date: "04-15",
      type: "planting",
      description: "Sembrar cilantro al aire libre.",
      priority: "low",
    },

    // Mayo
    {
      month: 5,
      title: "Plantar albahaca",
      date: "05-01",
      type: "planting",
      description: "Plantar albahaca al aire libre.",
      priority: "high",
    },
    {
      month: 5,
      title: "Trasplantar aromáticas",
      date: "05-15",
      type: "planting",
      description: "Trasplantar romero, tomillo, orégano.",
      priority: "medium",
    },

    // Junio-Agosto
    {
      month: 6,
      title: "Cosechar y secar",
      date: "06-01",
      type: "harvesting",
      description: "Comenzar la cosecha regular para uso fresco y secado.",
      priority: "high",
    },
    {
      month: 7,
      title: "Pinzar flores",
      date: "07-15",
      type: "maintenance",
      description: "Pinzar las flores de la albahaca para favorecer las hojas.",
      priority: "medium",
    },

    // Septiembre
    {
      month: 9,
      title: "Gran cosecha",
      date: "09-01",
      type: "harvesting",
      description: "Gran cosecha para constituir las reservas de invierno.",
      priority: "high",
    },

    // Octubre
    {
      month: 10,
      title: "Proteger del frío",
      date: "10-15",
      type: "maintenance",
      description: "Proteger las aromáticas delicadas del frío.",
      priority: "medium",
    },
  ],
};

// Template for Balcony & Terrace (Balcón y terraza)
export const BALCONY_TERRACE_TEMPLATE_ES = {
  name: "Plan anual balcón y terraza",
  description: "Calendario especializado para jardinería en balcón y terraza",
  category: GARDEN_TEMPLATE_CATEGORIES_ES.BALCONY_TERRACE,
  region: "mediterranean",
  tasks: [
    // Febrero
    {
      month: 2,
      title: "Verificar protecciones",
      date: "02-01",
      type: "maintenance",
      description: "Controlar las protecciones invernales de las plantas en maceta.",
      priority: "medium",
    },
    {
      month: 2,
      title: "Limpiar contenedores",
      date: "02-15",
      type: "maintenance",
      description: "Limpiar jardineras y macetas para la nueva temporada.",
      priority: "medium",
    },

    // Marzo
    {
      month: 3,
      title: "Gran limpieza",
      date: "03-01",
      type: "maintenance",
      description: "Limpiar balcón y terraza, verificar mobiliario.",
      priority: "high",
    },
    {
      month: 3,
      title: "Trasplantar",
      date: "03-15",
      type: "maintenance",
      description: "Trasplantar plantas en maceta con sustrato fresco.",
      priority: "high",
    },

    // Abril
    {
      month: 4,
      title: "Plantar primeras flores",
      date: "04-01",
      type: "planting",
      description: "Plantar pensamientos, prímulas, margaritas.",
      priority: "high",
    },
    {
      month: 4,
      title: "Instalar riego",
      date: "04-15",
      type: "maintenance",
      description: "Instalar sistema de riego automático.",
      priority: "medium",
    },

    // Mayo
    {
      month: 5,
      title: "Plantación de verano",
      date: "05-01",
      type: "planting",
      description: "Plantar geranios, petunias, surfinias.",
      priority: "high",
    },
    {
      month: 5,
      title: "Plantar hortalizas",
      date: "05-15",
      type: "planting",
      description: "Plantar tomates cherry, calabacines, pimientos en macetas grandes.",
      priority: "high",
    },

    // Junio
    {
      month: 6,
      title: "Riego diario",
      date: "06-01",
      type: "watering",
      description: "Comenzar riegos diarios con tiempo caluroso.",
      priority: "high",
    },
    {
      month: 6,
      title: "Fertilizar",
      date: "06-15",
      type: "fertilizing",
      description: "Aportar abono líquido a las plantas en maceta.",
      priority: "medium",
    },

    // Julio-Agosto
    {
      month: 7,
      title: "Instalar sombreado",
      date: "07-01",
      type: "maintenance",
      description: "Proteger plantas sensibles del sol intenso.",
      priority: "high",
    },
    {
      month: 8,
      title: "Riego intensivo",
      date: "08-01",
      type: "watering",
      description: "Con calor fuerte, regar mañana y tarde.",
      priority: "high",
    },

    // Septiembre
    {
      month: 9,
      title: "Plantar bulbos",
      date: "09-15",
      type: "planting",
      description: "Plantar bulbos de primavera en jardineras.",
      priority: "medium",
    },

    // Octubre
    {
      month: 10,
      title: "Reducir riego",
      date: "10-01",
      type: "watering",
      description: "Adaptar el riego a temperaturas más frescas.",
      priority: "medium",
    },

    // Noviembre
    {
      month: 11,
      title: "Proteger del frío",
      date: "11-01",
      type: "maintenance",
      description: "Proteger macetas con velo de invierno.",
      priority: "high",
    },

    // Diciembre
    {
      month: 12,
      title: "Decoración navideña",
      date: "12-01",
      type: "maintenance",
      description: "Instalar decoraciones navideñas e iluminación.",
      priority: "low",
    },
  ],
};

// Complete Garden Template (Jardín completo)
export const COMPLETE_GARDEN_TEMPLATE_ES = {
  name: "Plan anual del jardín completo",
  description: "Calendario completo para todos los espacios del jardín",
  category: GARDEN_TEMPLATE_CATEGORIES_ES.COMPLETE_GARDEN,
  region: "mediterranean",
  tasks: [
    // Enero
    {
      month: 1,
      title: "Poda de frutales",
      date: "01-15",
      type: "pruning",
      description: "Podar árboles frutales en tiempo seco.",
      priority: "high",
    },

    // Febrero
    {
      month: 2,
      title: "Poda de rosales",
      date: "02-15",
      type: "pruning",
      description: "Realizar poda de final de invierno en rosales.",
      priority: "high",
    },

    // Marzo
    {
      month: 3,
      title: "Preparar suelo",
      date: "03-01",
      type: "maintenance",
      description: "Cavar y enriquecer macizos y huerto.",
      priority: "high",
    },

    // Abril
    {
      month: 4,
      title: "Grandes plantaciones",
      date: "04-01",
      type: "planting",
      description: "Plantar patatas, sembrar al aire libre.",
      priority: "high",
    },

    // Mayo
    {
      month: 5,
      title: "Plantación sensible al frío",
      date: "05-01",
      type: "planting",
      description: "Plantar hortalizas y flores sensibles al frío.",
      priority: "high",
    },

    // Junio
    {
      month: 6,
      title: "Mantenimiento intensivo",
      date: "06-01",
      type: "maintenance",
      description: "Entutorar, regar, eliminar flores marchitas.",
      priority: "high",
    },

    // Julio
    {
      month: 7,
      title: "Riego y cosecha",
      date: "07-01",
      type: "watering",
      description: "Riegos intensivos, cosecha de verano.",
      priority: "high",
    },

    // Agosto
    {
      month: 8,
      title: "Gran cosecha",
      date: "08-01",
      type: "harvesting",
      description: "Cosecha intensiva de hortalizas y frutas.",
      priority: "high",
    },

    // Septiembre
    {
      month: 9,
      title: "Renovación césped",
      date: "09-01",
      type: "maintenance",
      description: "Escarificar y resembrar el césped.",
      priority: "high",
    },

    // Octubre
    {
      month: 10,
      title: "Cosecha de otoño",
      date: "10-01",
      type: "harvesting",
      description: "Cosechar frutas y hortalizas de otoño.",
      priority: "high",
    },

    // Noviembre
    {
      month: 11,
      title: "Preparación invernal",
      date: "11-01",
      type: "maintenance",
      description: "Limpiar, proteger, guardar plantas delicadas.",
      priority: "high",
    },

    // Diciembre
    {
      month: 12,
      title: "Planificación",
      date: "12-01",
      type: "maintenance",
      description: "Planificar y encargar para el año siguiente.",
      priority: "low",
    },
  ],
};

// Function to export all Spanish templates
export function getAvailableTemplatesEs() {
  return [
    ORNAMENTAL_GARDEN_TEMPLATE_ES,
    FRUIT_GARDEN_TEMPLATE_ES,
    VEGETABLE_GARDEN_TEMPLATE_ES,
    HERB_GARDEN_TEMPLATE_ES,
    BALCONY_TERRACE_TEMPLATE_ES,
    COMPLETE_GARDEN_TEMPLATE_ES,
  ];
} 