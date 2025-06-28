export default {
  name: "Cerezo",
  category: "category.fruit_trees",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    outdoor: {
      phases: {
        establishment: {
          name: "Establecimiento",
          description: "Primer año establecimiento",
          care: "Riego regular, protección contra aves",
        },
        juvenile: {
          name: "Fase Juvenil",
          description: "Años 2-4 desarrollo",
          care: "Poda de formación, prevención de enfermedades",
        },
        productive: {
          name: "Fase Productiva",
          description: "Años productivos 5-20",
          care: "Momento de cosecha, protección contra aves, manejo de enfermedades",
        },
        dormancy: {
          name: "Dormancia",
          description: "Reposo invernal",
          care: "Poda invernal, protección del tronco",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-01',
            end: '04-15',
            description: 'Plantación temprana en primavera',
          },
          harvestWindow: {
            start: '06-01',
            end: '08-15',
            description: 'Cosecha a principios del verano',
          },
          pruningWindow: {
            start: '02-01',
            end: '03-15',
            description: 'Poda de finales de invierno',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '01-15',
            end: '03-15',
            description: 'Plantación muy temprana en primavera',
          },
          harvestWindow: {
            start: '05-01',
            end: '07-31',
            description: 'Cosecha antes del calor del verano',
          },
        },
      },
    },
  },
  careTips: {
    watering: "Riego regular pero evitar encharcamiento, buen drenaje importante",
    fertilizing: "Fertilización anual ligera, bajo nitrógeno",
    sunlight: "Sol pleno",
    spacing: "6-8 m para cerezas dulces, 4-6 m para cerezas ácidas",
    pruning: "Poda mínima, podar final de invierno",
    pollination: "Cerezas dulces principalmente polinización cruzada",
    birdProtection: "Redes u otras protecciones contra aves durante la cosecha",
  },
  commonProblems: {
    "Podredumbre Parda": "Podredumbre de frutos - remover frutos infectados, mejorar circulación de aire",
    "Mosca de la Cereza": "Larvas en frutos - trampas amarillas, momento de aplicación dirigida",
    "Cancro Bacteriano": "Enfermedad del tronco/ramas - evitar daños invernales, poda apropiada",
    "Aves": "Pérdida de frutos - redes, espantapájaros, cosecha temprana",
  },
};
