export default {
  name: "Patatas",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        sprouting: {
          name: "Brotación",
          description: "Aparecen los primeros brotes",
          care: "Mantener suelo húmedo, comenzar a aporcar",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Fuerte crecimiento de hojas",
          care: "Riego regular, fertilización, continuar aporcando",
        },
        tuberization: {
          name: "Formación de Tubérculos",
          description: "Las patatas comienzan a crecer",
          care: "Mantener suelo húmedo, continuar aporcando",
        },
        bulking: {
          name: "Crecimiento de Tubérculos",
          description: "Las patatas se hacen más grandes",
          care: "Mantener suelo húmedo, continuar aporcando",
        },
        maturation: {
          name: "Maduración",
          description: "Las plantas se secan, las patatas maduran",
          care: "Reducir riego, dejar que las plantas se sequen",
        },
        harvest: {
          name: "Cosecha",
          description: "Las patatas están listas para cosechar",
          care: "Cavar con cuidado, evitar daños",
        },
      },
    },
    outdoor: {
      phases: {
        sprouting: {
          name: "Brotación",
          description: "Aparecen los primeros brotes",
          care: "Mantener suelo húmedo, comenzar a aporcar",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Fuerte crecimiento de hojas",
          care: "Riego regular, fertilización, continuar aporcando",
        },
        tuberization: {
          name: "Formación de Tubérculos",
          description: "Las patatas comienzan a crecer",
          care: "Mantener suelo húmedo, continuar aporcando",
        },
        bulking: {
          name: "Crecimiento de Tubérculos",
          description: "Las patatas se hacen más grandes",
          care: "Mantener suelo húmedo, continuar aporcando",
        },
        maturation: {
          name: "Maduración",
          description: "Las plantas se secan, las patatas maduran",
          care: "Reducir riego, dejar que las plantas se sequen",
        },
        harvest: {
          name: "Cosecha",
          description: "Las patatas están listas para cosechar",
          care: "Cavar con cuidado, evitar daños",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-15',
            end: '05-15',
            description: 'Tan pronto como el suelo sea trabajable, después de la última helada',
          },
          harvestWindow: {
            start: '07-01',
            end: '09-30',
            description: 'Cosecha antes de helada fuerte',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-15',
            end: '04-15',
            description: 'Plantación temprana posible, evitar calor del verano',
          },
          harvestWindow: {
            start: '06-01',
            end: '08-31',
            description: 'Cosecha antes del período caluroso y seco',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        sprouting: {
          name: "Brotación",
          description: "Aparecen los primeros brotes",
          care: "Mantener suelo húmedo, comenzar a aporcar",
        },
        vegetative: {
          name: "Fase Vegetativa",
          description: "Fuerte crecimiento de hojas",
          care: "Riego regular, fertilización, continuar aporcando",
        },
        tuberization: {
          name: "Formación de Tubérculos",
          description: "Las patatas comienzan a crecer",
          care: "Mantener suelo húmedo, continuar aporcando",
        },
        bulking: {
          name: "Crecimiento de Tubérculos",
          description: "Las patatas se hacen más grandes",
          care: "Mantener suelo húmedo, continuar aporcando",
        },
        maturation: {
          name: "Maduración",
          description: "Las plantas se secan, las patatas maduran",
          care: "Reducir riego, dejar que las plantas se sequen",
        },
        harvest: {
          name: "Cosecha",
          description: "Las patatas están listas para cosechar",
          care: "Cavar con cuidado, evitar daños",
        },
      },
    },
  },
  careTips: {
    watering: "Mantener suelo húmedo, evitar encharcamiento",
    fertilizing: "Fertilizante de potasio regular",
    sunlight: "Sol completo (mín. 8 horas)",
    spacing: "30-40 cm de separación",
    temperature: "Fresco a cálido, 15-25°C óptimo",
    soilPH: "5.5-6.5",
    hilling: "Aporcar regularmente para más tubérculos",
  },
  commonProblems: {
    "Tizón Tardío": "Enfermedad fúngica - variedades resistentes, circulación de aire",
    "Escarabajo de la Papa": "Comen hojas - recoger a mano, insectos beneficiosos",
    "Gusanos de Alambre": "Larvas en tubérculos - malla, cultivo asociado",
  },
};
