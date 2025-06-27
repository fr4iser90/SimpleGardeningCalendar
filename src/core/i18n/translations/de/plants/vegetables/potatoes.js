export default {
  name: "Kartoffeln",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        sprouting: {
          name: "Austrieb",
          description: "Erste Triebe erscheinen",
          care: "Gleichmäßig feucht halten, Erde anhäufeln",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Starkes Blattwachstum",
          care: "Regelmäßig gießen, düngen, Erde anhäufeln",
        },
        tuberization: {
          name: "Knollenbildung",
          description: "Kartoffeln beginnen zu wachsen",
          care: "Gleichmäßig feucht halten, Erde anhäufeln",
        },
        bulking: {
          name: "Knollenwachstum",
          description: "Kartoffeln werden größer",
          care: "Gleichmäßig feucht halten, Erde anhäufeln",
        },
        maturation: {
          name: "Reifung",
          description: "Pflanzen sterben ab, Kartoffeln reifen",
          care: "Weniger gießen, Pflanzen absterben lassen",
        },
        harvest: {
          name: "Ernte",
          description: "Kartoffeln sind reif zur Ernte",
          care: "Vorsichtig ausgraben, nicht beschädigen",
        },
      },
    },
    outdoor: {
      phases: {
        sprouting: {
          name: "Austrieb",
          description: "Erste Triebe erscheinen",
          care: "Gleichmäßig feucht halten, Erde anhäufeln",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Starkes Blattwachstum",
          care: "Regelmäßig gießen, düngen, Erde anhäufeln",
        },
        tuberization: {
          name: "Knollenbildung",
          description: "Kartoffeln beginnen zu wachsen",
          care: "Gleichmäßig feucht halten, Erde anhäufeln",
        },
        bulking: {
          name: "Knollenwachstum",
          description: "Kartoffeln werden größer",
          care: "Gleichmäßig feucht halten, Erde anhäufeln",
        },
        maturation: {
          name: "Reifung",
          description: "Pflanzen sterben ab, Kartoffeln reifen",
          care: "Weniger gießen, Pflanzen absterben lassen",
        },
        harvest: {
          name: "Ernte",
          description: "Kartoffeln sind reif zur Ernte",
          care: "Vorsichtig ausgraben, nicht beschädigen",
        },
      },
    },
    greenhouse: {
      phases: {
        sprouting: {
          name: "Austrieb",
          description: "Erste Triebe erscheinen",
          care: "Gleichmäßig feucht halten, Erde anhäufeln",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Starkes Blattwachstum",
          care: "Regelmäßig gießen, düngen, Erde anhäufeln",
        },
        tuberization: {
          name: "Knollenbildung",
          description: "Kartoffeln beginnen zu wachsen",
          care: "Gleichmäßig feucht halten, Erde anhäufeln",
        },
        bulking: {
          name: "Knollenwachstum",
          description: "Kartoffeln werden größer",
          care: "Gleichmäßig feucht halten, Erde anhäufeln",
        },
        maturation: {
          name: "Reifung",
          description: "Pflanzen sterben ab, Kartoffeln reifen",
          care: "Weniger gießen, Pflanzen absterben lassen",
        },
        harvest: {
          name: "Ernte",
          description: "Kartoffeln sind reif zur Ernte",
          care: "Vorsichtig ausgraben, nicht beschädigen",
        },
      },
    },
  },
  careTips: {
    watering: "Gleichmäßig feucht halten, nicht zu nass",
    fertilizing: "Regelmäßig mit Kalidünger",
    sunlight: "Vollsonne (mind. 8 Stunden)",
    spacing: "30-40 cm Abstand",
    temperature: "Kühl bis warm, 15-25°C optimal",
    soilPH: "5,5-6,5",
    hilling: "Regelmäßig Erde anhäufeln für mehr Knollen",
  },
  commonProblems: {
    "Kraut- und Braunfäule": "Pilzkrankheit - resistente Sorten, Luftzirkulation",
    "Kartoffelkäfer": "Fressen Blätter - absammeln, Nützlinge",
    "Drahtwürmer": "Maden in Knollen - Netzabdeckung, Mischkultur",
  },
};
