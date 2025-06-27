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
