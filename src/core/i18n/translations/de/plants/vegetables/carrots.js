export default {
  name: "Karotten",
  category: "category.vegetables",
  tags: ["tag.annual"],
  legalNote: "",
  environments: {
    indoor: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samenkeimung (10-21 Tage)",
          care: "Feuchte Erde, gleichmäßige Temperatur",
        },
        leafing: {
          name: "Blattentwicklung",
          description: "Entwicklung der ersten Blätter",
          care: "Gleichmäßig feucht halten, ausdünnen",
        },
        rooting: {
          name: "Wurzelentwicklung",
          description: "Karottenwachstum unter der Erde",
          care: "Gleichmäßig feucht halten, lockere Erde",
        },
        maturing: {
          name: "Reifung",
          description: "Wurzelvergrößerung und finales Wachstum",
          care: "Gleichmäßige Feuchtigkeit, Risse vermeiden",
        },
        harvest: {
          name: "Ernte",
          description: "Karotten sind reif zur Ernte",
          care: "Vorsichtig ausgraben, nicht beschädigen",
        },
      },
    },
    outdoor: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samenkeimung (10-21 Tage)",
          care: "Feuchte, lockere Erde, 15-20°C",
        },
        seedling: {
          name: "Sämling",
          description: "Entwicklung der ersten Blätter",
          care: "Ausdünnen auf 5-7 cm Abstand, feucht halten",
        },
        vegetative: {
          name: "Vegetative Phase",
          description: "Wachstum von Blättern und Wurzeln",
          care: "Regelmäßig gießen, Unkraut entfernen",
        },
        fruiting: {
          name: "Wurzelbildung",
          description: "Entwicklung der Karottenwurzel",
          care: "Lockere Erde, gleichmäßig feucht halten",
        },
        harvest: {
          name: "Ernte",
          description: "Ernte der reifen Karotten",
          care: "Vorsichtig ausziehen, lagern bei 0-4°C",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-15',
            end: '07-15',
            description: 'Frühsorte im März, Hauptsaat bis Juli für Herbsternte',
          },
          harvestWindow: {
            start: '06-01',
            end: '11-01',
            description: 'Ernte je nach Sorte und Aussaatzeit',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '02-01',
            end: '09-01',
            description: 'Längere Saatsaison in mildem Klima',
          },
          harvestWindow: {
            start: '05-01',
            end: '12-15',
            description: 'Verlängerte Erntezeit durch mildes Wetter',
          },
        },
      },
    },
    greenhouse: {
      phases: {
        germination: {
          name: "Keimung",
          description: "Samenkeimung (10-21 Tage)",
          care: "Feuchte Erde, gleichmäßige Temperatur",
        },
        leafing: {
          name: "Blattentwicklung",
          description: "Entwicklung der ersten Blätter",
          care: "Gleichmäßig feucht halten, ausdünnen",
        },
        rooting: {
          name: "Wurzelentwicklung",
          description: "Karottenwachstum unter der Erde",
          care: "Gleichmäßig feucht halten, lockere Erde",
        },
        maturing: {
          name: "Reifung",
          description: "Wurzelvergrößerung und finales Wachstum",
          care: "Gleichmäßige Feuchtigkeit, Risse vermeiden",
        },
        harvest: {
          name: "Ernte",
          description: "Karotten sind reif zur Ernte",
          care: "Vorsichtig ausgraben, nicht beschädigen",
        },
      },
    },
  },
  careTips: {
    watering: "Gleichmäßig feucht halten, nicht zu nass",
    fertilizing: "Leichte Düngung, wenig Stickstoff",
    sunlight: "Vollsonne (mind. 6 Stunden)",
    spacing: "5-8 cm Abstand",
    temperature: "Kühl bis warm, 15-25°C optimal",
    soilPH: "6,0-7,0",
    soil: "Lockere, steinfreie Erde wichtig",
  },
  commonProblems: {
    "Karottenfliege": "Maden in Wurzeln - Netzabdeckung, Mischkultur",
    "Spaltwurzeln": "Ungleichmäßiges Gießen - gleichmäßige Feuchtigkeit",
    "Verzweigte Wurzeln": "Steine oder verdichtete Erde - lockere Erde verwenden",
  },
};
