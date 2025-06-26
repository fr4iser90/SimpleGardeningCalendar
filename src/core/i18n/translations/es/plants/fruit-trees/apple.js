export default {
  name: "Manzano",
  category: "category.fruit_trees",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    outdoor: {
      phases: {
        establishment: {
          name: "Establecimiento",
          description: "Primer año desarrollo radicular",
          care: "Riego regular, control de malezas, poda ligera",
        },
        juvenile: {
          name: "Fase Juvenil",
          description: "Años 2-3 crecimiento",
          care: "Poda de formación, cuidados continuos, aún sin frutos",
        },
        productive: {
          name: "Fase Productiva",
          description: "Años productivos 4-20+",
          care: "Poda anual, control de plagas, momento de cosecha",
        },
        dormancy: {
          name: "Dormancia",
          description: "Reposo invernal",
          care: "Poda invernal, aceite dormante contra plagas",
        },
      },
    },
  },
  careTips: {
    watering: "Riego profundo semanal, 2-5 cm por semana durante la temporada",
    fertilizing: "Fertilización anual en primavera, bajo nitrógeno en otoño",
    sunlight: "Sol pleno, al menos 6 horas diarias",
    spacing: "Distancia 4-6 m para árboles grandes, 2-3 m para formas enanas",
    pruning: "Poda invernal anual para forma y salud",
    pollination: "Principalmente polinización cruzada necesaria con otras variedades de manzanas",
    soilPH: "6,0-7,0",
  },
  commonProblems: {
    "Sarna": "Enfermedad fúngica - elegir variedades resistentes, mejorar circulación de aire",
    "Carpocapsa": "Gusano en la manzana - trampas de feromonas, momento de aplicación dirigida",
    "Fuego Bacteriano": "Enfermedad bacteriana - remover brotes infectados, bajo nitrógeno",
    "Alternancia": "Años de cosecha alternados - ralear en años fuertes",
  },
};
