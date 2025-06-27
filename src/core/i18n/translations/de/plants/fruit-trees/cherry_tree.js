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
          description: "Erstes Jahr Etablierung",
          care: "Regelmäßig gießen, Vogelschutz",
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
    watering: "Regelmäßig gießen aber Staunässe vermeiden, gute Drainage wichtig",
    fertilizing: "Leichte jährliche Düngung, Stickstoffüberschuss vermeiden",
    sunlight: "Vollsonne",
    spacing: "6-8 m Abstand für Süßkirschen, 4-5 m für Sauerkirschen",
    pruning: "Minimaler Schnitt, im Spätwinter schneiden",
    pollination: "Süßkirschen meist Fremdbestäubung nötig",
    birdProtection: "Netz oder andere Vogelschutzmaßnahmen bei Ernte wichtig",
  },
  commonProblems: {
    "Monilia": "Pilzkrankheit - befallene Früchte entfernen, Luftzirkulation verbessern",
    "Kirschfruchtfliege": "Maden in Früchten - gelbe Klebefallen, richtiger Spritzzeitpunkt",
    "Bakterienbrand": "Stamm-/Astkrankheit - Winterverletzungen vermeiden, richtiger Schnitt",
    "Vögel": "Fruchtraub - Netze, Vogelscheuchen, frühe Ernte",
  },
};
