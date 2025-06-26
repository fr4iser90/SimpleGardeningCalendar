export default {
  name: "Apfelbaum",
  category: "category.fruit_trees",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    outdoor: {
      phases: {
        establishment: {
          name: "Etablierung",
          description: "Erstes Jahr Wurzelbildung",
          care: "Regelmäßig gießen, Unkraut entfernen, leichter Rückschnitt",
        },
        juvenile: {
          name: "Jugendphase",
          description: "Jahre 2-3 Wachstum",
          care: "Formierender Schnitt, weitere Pflege, noch keine Früchte",
        },
        productive: {
          name: "Ertragsphase",
          description: "Ertragsjahre 4-20+",
          care: "Jährlicher Schnitt, Schädlingskontrolle, Erntezeitpunkt beachten",
        },
        dormancy: {
          name: "Ruhephase",
          description: "Winterruhe",
          care: "Winterschnitt, Austrieböl gegen Schädlinge",
        },
      },
    },
  },
  careTips: {
    watering: "Tiefgründig wöchentlich gießen, 2-5 cm pro Woche während der Saison",
    fertilizing: "Jährliche Düngung im Frühjahr, im Herbst wenig Stickstoff",
    sunlight: "Vollsonne, mindestens 6 Stunden täglich",
    spacing: "4-6 m Abstand für große Bäume, 2-3 m für Zwergformen",
    pruning: "Jährlicher Winterschnitt für Form und Gesundheit",
    pollination: "Meist Fremdbestäubung durch andere Apfelsorten nötig",
    soilPH: "6,0-7,0",
  },
  commonProblems: {
    "Apfelschorf": "Pilzkrankheit - resistente Sorten wählen, Luftzirkulation verbessern",
    "Apfelwickler": "Wurm im Apfel - Pheromonfallen, gezielter Spritzzeitpunkt",
    "Feuerbrand": "Bakterienkrankheit - befallene Triebe entfernen, wenig Stickstoff",
    "Alternanz": "Wechselnde Erntejahre - in starken Jahren ausdünnen",
  },
};
