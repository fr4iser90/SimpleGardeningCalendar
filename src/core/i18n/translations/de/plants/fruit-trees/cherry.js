export default {
  name: "Kirschbaum",
  category: "category.fruit_trees",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    outdoor: {
      phases: {
        establishment: {
          name: "Etablierung",
          description: "Erstes Jahr Anwachsen",
          care: "Regelmäßig gießen, Vogelschutz beachten",
        },
        juvenile: {
          name: "Jugendphase",
          description: "Jahre 2-4 Entwicklung",
          care: "Erziehungsschnitt, Krankheitsvorbeugung",
        },
        productive: {
          name: "Ertragsphase",
          description: "Ertragsjahre 5-20",
          care: "Erntezeitpunkt, Vogelschutz, Krankheitsmanagement",
        },
        dormancy: {
          name: "Ruhephase",
          description: "Winterruhe",
          care: "Winterschnitt, Stammschutz",
        },
      },
    },
  },
  careTips: {
    watering: "Regelmäßig, aber Staunässe vermeiden, gute Drainage wichtig",
    fertilizing: "Leichte jährliche Düngung, wenig Stickstoff",
    sunlight: "Vollsonne",
    spacing: "6-8 m für Süßkirschen, 4-6 m für Sauerkirschen",
    pruning: "Wenig Schnitt, im späten Winter schneiden",
    pollination: "Süßkirschen meist fremdbestäubend",
    birdProtection: "Netze oder andere Vogelschutzmaßnahmen zur Erntezeit",
  },
  commonProblems: {
    "Monilia": "Fruchtfäule - befallene Früchte entfernen, Luftzirkulation verbessern",
    "Kirschfruchtfliege": "Maden in Früchten - Gelbtafeln, gezielter Spritzzeitpunkt",
    "Bakterienbrand": "Stamm-/Astkrankheit - Winterschäden vermeiden, richtig schneiden",
    "Vögel": "Fruchtverlust - Netze, Vogelscheuchen, frühe Ernte",
  },
};
