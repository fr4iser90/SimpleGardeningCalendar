// German templates (original)
export const GARDEN_TEMPLATE_CATEGORIES_DE = {
  ORNAMENTAL: 'ORNAMENTAL',
  HERB_GARDEN: 'HERB_GARDEN',
  BALCONY_TERRACE: 'BALCONY_TERRACE',
  COMPLETE_GARDEN: 'COMPLETE_GARDEN',
  FRUIT_GARDEN: 'FRUIT_GARDEN',
  VEGETABLE_GARDEN: 'VEGETABLE_GARDEN'
};

// Template for Ornamental Garden (Ziergarten)
export const ORNAMENTAL_GARDEN_TEMPLATE_DE = {
  name: "Ziergarten Jahresplan",
  description:
    "Kompletter Jahreskalender für den Ziergarten mit allen wichtigen Pflegearbeiten",
  category: GARDEN_TEMPLATE_CATEGORIES_DE.ORNAMENTAL,
  region: "temperate_north",
  tasks: [
    // Januar
    {
      month: 1,
      title: "Bäume fällen",
      date: "01-15",
      type: "maintenance",
      description:
        "Bäume können bei frostfreiem Wetter gefällt werden. Beste Zeit für größere Fällarbeiten.",
      priority: "medium",
    },
    {
      month: 1,
      title: "Kaltkeimer aussäen",
      date: "01-20",
      type: "planting",
      description:
        "Samen von Stauden und Gehölzen aussäen, die Kälte zum Keimen benötigen (Stratifikation).",
      priority: "low",
    },
    {
      month: 1,
      title: "Nistkästen aufhängen",
      date: "01-25",
      type: "maintenance",
      description:
        "Nistkästen für Vögel aufhängen und alte reinigen. Rechtzeitig vor der Brutzeit.",
      priority: "low",
    },
    {
      month: 1,
      title: "Gummifluss an Zierkirschen behandeln",
      date: "01-30",
      type: "maintenance",
      description: "Harzausfluss an Zierkirschen kontrollieren und behandeln.",
      priority: "medium",
    },

    // Februar
    {
      month: 2,
      title: "Sommerblühende Sträucher schneiden",
      date: "02-15",
      type: "pruning",
      description:
        "Buddleia, Hibiskus und andere sommerblühende Sträucher zurückschneiden.",
      priority: "high",
    },
    {
      month: 2,
      title: "Kompost sieben",
      date: "02-20",
      type: "maintenance",
      description:
        "Reifen Kompost sieben und für die Gartensaison vorbereiten.",
      priority: "medium",
    },
    {
      month: 2,
      title: "Hortensien-Blütenstände entfernen",
      date: "02-25",
      type: "pruning",
      description:
        "Alte Blütenstände von Bauern-Hortensien entfernen, neue Triebe schonen.",
      priority: "medium",
    },
    {
      month: 2,
      title: "Chinaschilf zurückschneiden",
      date: "02-28",
      type: "pruning",
      description:
        "Ziergräser wie Chinaschilf eine Handbreit über dem Boden abschneiden.",
      priority: "high",
    },

    // März
    {
      month: 3,
      title: "Rosen schneiden",
      date: "03-15",
      type: "pruning",
      description:
        "Hauptschnitt für Rosen. Schwache Triebe entfernen, starke einkürzen.",
      priority: "high",
    },
    {
      month: 3,
      title: "Kirschlorbeer schneiden",
      date: "03-20",
      type: "pruning",
      description: "Kirschlorbeer vor dem Austrieb in Form schneiden.",
      priority: "medium",
    },
    {
      month: 3,
      title: "Gartenteich säubern",
      date: "03-25",
      type: "maintenance",
      description: "Teich von Laub und abgestorbenen Pflanzenteilen befreien.",
      priority: "medium",
    },
    {
      month: 3,
      title: "Zwiebelblumen düngen",
      date: "03-30",
      type: "fertilizing",
      description:
        "Narzissen, Tulpen und andere Zwiebelblumen nach der Blüte düngen.",
      priority: "medium",
    },

    // April
    {
      month: 4,
      title: "Frühjahrsblüher auslichten",
      date: "04-10",
      type: "pruning",
      description:
        "Forsythie, Flieder und andere Frühjahrsblüher nach der Blüte auslichten.",
      priority: "medium",
    },
    {
      month: 4,
      title: "Dahlien vortreiben",
      date: "04-15",
      type: "planting",
      description: "Dahlienknollen im Haus vortreiben für frühere Blüte.",
      priority: "low",
    },
    {
      month: 4,
      title: "Stauden teilen",
      date: "04-20",
      type: "maintenance",
      description: "Große Stauden teilen und verpflanzen.",
      priority: "medium",
    },
    {
      month: 4,
      title: "Sommerblumen aussäen",
      date: "04-25",
      type: "planting",
      description:
        "Einjährige Sommerblumen direkt ins Beet oder in Töpfe säen.",
      priority: "high",
    },

    // Mai
    {
      month: 5,
      title: "Eisheilige abwarten",
      date: "05-15",
      type: "planting",
      description:
        "Nach den Eisheiligen frostempfindliche Pflanzen ins Freie setzen.",
      priority: "high",
    },
    {
      month: 5,
      title: "Rhododendron pflegen",
      date: "05-20",
      type: "maintenance",
      description:
        "Verblühte Rhododendronblüten ausbrechen, mulchen und düngen.",
      priority: "medium",
    },
    {
      month: 5,
      title: "Unkraut jäten",
      date: "05-25",
      type: "maintenance",
      description: "Regelmäßiges Unkrautjäten, solange es noch klein ist.",
      priority: "high",
    },

    // Juni
    {
      month: 6,
      title: "Rosen erste Düngung",
      date: "06-01",
      type: "fertilizing",
      description: "Erste Düngung der Rosen nach der ersten Blüte.",
      priority: "medium",
    },
    {
      month: 6,
      title: "Lavendel schneiden",
      date: "06-15",
      type: "pruning",
      description:
        "Lavendel nach der ersten Blüte um ein Drittel zurückschneiden.",
      priority: "medium",
    },
    {
      month: 6,
      title: "Staudenbeete mulchen",
      date: "06-20",
      type: "maintenance",
      description: "Staudenbeete mulchen zum Schutz vor Trockenheit.",
      priority: "high",
    },

    // Juli
    {
      month: 7,
      title: "Sommerblumen aussäen",
      date: "07-01",
      type: "planting",
      description: "Zweijährige Sommerblumen für das nächste Jahr aussäen.",
      priority: "medium",
    },
    {
      month: 7,
      title: "Hecken schneiden",
      date: "07-15",
      type: "pruning",
      description: "Hecken den zweiten Schnitt des Jahres geben.",
      priority: "high",
    },
    {
      month: 7,
      title: "Bewässerung anpassen",
      date: "07-20",
      type: "watering",
      description:
        "Bewässerung der Hitze anpassen, morgens oder abends gießen.",
      priority: "high",
    },

    // August
    {
      month: 8,
      title: "Staudenaussaat",
      date: "08-01",
      type: "planting",
      description: "Stauden für das nächste Jahr aussäen.",
      priority: "medium",
    },
    {
      month: 8,
      title: "Rosen zweite Düngung",
      date: "08-15",
      type: "fertilizing",
      description: "Letzte Düngung der Rosen vor dem Winter.",
      priority: "medium",
    },
    {
      month: 8,
      title: "Buchsbaum schneiden",
      date: "08-25",
      type: "pruning",
      description: "Letzter Formschnitt für Buchsbaum vor dem Winter.",
      priority: "medium",
    },

    // September
    {
      month: 9,
      title: "Rasenpflege Herbst",
      date: "09-01",
      type: "maintenance",
      description: "Rasen vertikutieren, nachsäen und düngen.",
      priority: "high",
    },
    {
      month: 9,
      title: "Stauden teilen",
      date: "09-15",
      type: "maintenance",
      description: "Frühjahrsblühende Stauden teilen und umpflanzen.",
      priority: "medium",
    },
    {
      month: 9,
      title: "Zwiebelblumen pflanzen",
      date: "09-25",
      type: "planting",
      description: "Tulpen, Narzissen und andere Frühjahrsblüher pflanzen.",
      priority: "high",
    },

    // Oktober
    {
      month: 10,
      title: "Blumenzwiebeln pflanzen",
      date: "10-01",
      type: "planting",
      description:
        "Fortsetzung der Zwiebelblumenpflanzung, wühlmaussichere Körbe verwenden.",
      priority: "high",
    },
    {
      month: 10,
      title: "Rosen pflanzen",
      date: "10-15",
      type: "planting",
      description: "Beste Pflanzzeit für wurzelnackte Rosen.",
      priority: "medium",
    },
    {
      month: 10,
      title: "Igel-Quartiere einrichten",
      date: "10-25",
      type: "maintenance",
      description: "Laubhaufen und Unterschlüpfe für Igel vorbereiten.",
      priority: "low",
    },

    // November
    {
      month: 11,
      title: "Hecken pflanzen",
      date: "11-01",
      type: "planting",
      description:
        "Neue Hecken pflanzen, solange der Boden nicht gefroren ist.",
      priority: "medium",
    },
    {
      month: 11,
      title: "Gehölze pflanzen",
      date: "11-15",
      type: "planting",
      description: "Bäume und Sträucher pflanzen - beste Pflanzzeit.",
      priority: "high",
    },
    {
      month: 11,
      title: "Winterschutz vorbereiten",
      date: "11-25",
      type: "maintenance",
      description: "Empfindliche Pflanzen mit Winterschutz versehen.",
      priority: "high",
    },

    // Dezember
    {
      month: 12,
      title: "Barbarazweige schneiden",
      date: "12-04",
      type: "maintenance",
      description: "Barbarazweige schneiden für die Weihnachtsblüte.",
      priority: "low",
    },
    {
      month: 12,
      title: "Immergrüne schützen",
      date: "12-15",
      type: "maintenance",
      description: "Immergrüne Pflanzen vor Wintersonne und Frost schützen.",
      priority: "high",
    },
    {
      month: 12,
      title: "Knollen kontrollieren",
      date: "12-20",
      type: "maintenance",
      description:
        "Eingelagerte Blumenzwiebeln und Knollen auf Fäulnis kontrollieren.",
      priority: "medium",
    },
  ],
};

// Template for Herb Garden (Kräutergarten)
export const HERB_GARDEN_TEMPLATE_DE = {
  name: "Kräutergarten Jahresplan",
  description: "Spezieller Jahreskalender für die Kräuterzucht",
  category: GARDEN_TEMPLATE_CATEGORIES_DE.HERB_GARDEN,
  region: "temperate_north",
  tasks: [
    // März
    {
      month: 3,
      title: "Mehrjährige Kräuter schneiden",
      date: "03-15",
      type: "pruning",
      description: "Thymian, Oregano, Salbei und Rosmarin zurückschneiden.",
      priority: "high",
    },
    {
      month: 3,
      title: "Petersilie säen",
      date: "03-25",
      type: "planting",
      description: "Petersilie in Töpfe oder ins Frühbeet säen.",
      priority: "medium",
    },

    // April
    {
      month: 4,
      title: "Schnittlauch teilen",
      date: "04-01",
      type: "maintenance",
      description: "Schnittlauch-Horste teilen und neu pflanzen.",
      priority: "medium",
    },
    {
      month: 4,
      title: "Kresse aussäen",
      date: "04-15",
      type: "planting",
      description: "Gartenkresse für schnelle Ernte aussäen.",
      priority: "low",
    },

    // Mai
    {
      month: 5,
      title: "Basilikum pflanzen",
      date: "05-15",
      type: "planting",
      description: "Nach den Eisheiligen Basilikum ins Freie pflanzen.",
      priority: "high",
    },
    {
      month: 5,
      title: "Mediterrane Kräuter pflanzen",
      date: "05-20",
      type: "planting",
      description: "Rosmarin, Thymian und Oregano auspflanzen.",
      priority: "medium",
    },

    // Juni - August
    {
      month: 6,
      title: "Kräuter ernten und trocknen",
      date: "06-01",
      type: "harvesting",
      description: "Regelmäßige Ernte für Frischverbrauch und Trocknung.",
      priority: "high",
    },
    {
      month: 7,
      title: "Blüten entfernen",
      date: "07-15",
      type: "maintenance",
      description: "Blüten bei Basilikum und anderen Blattkräutern entfernen.",
      priority: "medium",
    },

    // September
    {
      month: 9,
      title: "Kräuter konservieren",
      date: "09-01",
      type: "harvesting",
      description: "Große Ernte für Wintervorrat trocknen oder einfrieren.",
      priority: "high",
    },

    // Oktober
    {
      month: 10,
      title: "Winterschutz vorbereiten",
      date: "10-15",
      type: "maintenance",
      description: "Empfindliche Kräuter mit Winterschutz versehen.",
      priority: "medium",
    },
  ],
};

// Template for Balcony & Terrace (Balkon & Terrasse)
export const BALCONY_TERRACE_TEMPLATE_DE = {
  name: "Balkon & Terrasse Jahresplan",
  description: "Spezieller Jahreskalender für Balkon- und Terrassengärtnerei",
  category: GARDEN_TEMPLATE_CATEGORIES_DE.BALCONY_TERRACE,
  region: "temperate_north",
  tasks: [
    // Februar
    {
      month: 2,
      title: "Überwinterungsschutz kontrollieren",
      date: "02-01",
      type: "maintenance",
      description:
        "Winterschutz von Kübelpflanzen kontrollieren und bei Bedarf anpassen.",
      priority: "medium",
    },
    {
      month: 2,
      title: "Balkonkästen vorbereiten",
      date: "02-15",
      type: "maintenance",
      description: "Balkonkästen reinigen und neue Erde vorbereiten.",
      priority: "medium",
    },

    // März
    {
      month: 3,
      title: "Frühjahrsputz Balkon",
      date: "03-01",
      type: "maintenance",
      description: "Balkon und Terrasse gründlich reinigen, Möbel säubern.",
      priority: "high",
    },
    {
      month: 3,
      title: "Kübelpflanzen umtopfen",
      date: "03-15",
      type: "maintenance",
      description:
        "Kübelpflanzen in frische Erde umtopfen, Wurzeln kontrollieren.",
      priority: "high",
    },
    {
      month: 3,
      title: "Erste Aussaat im Haus",
      date: "03-25",
      type: "planting",
      description:
        "Tomaten, Paprika und Kräuter auf der Fensterbank vorziehen.",
      priority: "high",
    },

    // April
    {
      month: 4,
      title: "Balkonkästen bepflanzen",
      date: "04-01",
      type: "planting",
      description: "Erste frostunempfindliche Balkonblumen pflanzen.",
      priority: "high",
    },
    {
      month: 4,
      title: "Kräuter aussäen",
      date: "04-15",
      type: "planting",
      description: "Petersilie, Schnittlauch und andere Kräuter in Töpfe säen.",
      priority: "medium",
    },
    {
      month: 4,
      title: "Bewässerungssystem einrichten",
      date: "04-20",
      type: "maintenance",
      description: "Bewässerungssystem für den Sommer vorbereiten und testen.",
      priority: "medium",
    },

    // Mai
    {
      month: 5,
      title: "Sommerbepflanzung nach Eisheiligen",
      date: "05-15",
      type: "planting",
      description: "Geranien, Petunien und andere Sommerblumen pflanzen.",
      priority: "high",
    },
    {
      month: 5,
      title: "Gemüse auspflanzen",
      date: "05-20",
      type: "planting",
      description: "Tomaten, Paprika und Gurken in große Kübel pflanzen.",
      priority: "high",
    },
    {
      month: 5,
      title: "Rankgitter aufstellen",
      date: "05-25",
      type: "maintenance",
      description: "Rankgitter für Kletterpflanzen und Gemüse installieren.",
      priority: "medium",
    },

    // Juni
    {
      month: 6,
      title: "Regelmäßig gießen",
      date: "06-01",
      type: "watering",
      description:
        "Tägliches Gießen bei warmen Temperaturen, Staunässe vermeiden.",
      priority: "high",
    },
    {
      month: 6,
      title: "Erste Düngung",
      date: "06-15",
      type: "fertilizing",
      description: "Balkonpflanzen mit Flüssigdünger versorgen.",
      priority: "medium",
    },
    {
      month: 6,
      title: "Verblühtes entfernen",
      date: "06-20",
      type: "maintenance",
      description: "Regelmäßig verblühte Blüten entfernen für Nachblüte.",
      priority: "medium",
    },

    // Juli
    {
      month: 7,
      title: "Sonnenschutz anbringen",
      date: "07-01",
      type: "maintenance",
      description: "Sonnenschutz für empfindliche Pflanzen installieren.",
      priority: "high",
    },
    {
      month: 7,
      title: "Kräuter ernten",
      date: "07-15",
      type: "harvesting",
      description: "Regelmäßige Kräuterernte für Frischverbrauch.",
      priority: "medium",
    },
    {
      month: 7,
      title: "Zweite Aussaat",
      date: "07-25",
      type: "planting",
      description: "Radieschen und Salat für Herbsternte nachsäen.",
      priority: "low",
    },

    // August
    {
      month: 8,
      title: "Tomatenernte",
      date: "08-01",
      type: "harvesting",
      description: "Erste Tomaten und Paprika ernten.",
      priority: "high",
    },
    {
      month: 8,
      title: "Verstärkt wässern",
      date: "08-15",
      type: "watering",
      description: "Bei Hitze zweimal täglich gießen, morgens und abends.",
      priority: "high",
    },
    {
      month: 8,
      title: "Herbstbepflanzung vorbereiten",
      date: "08-25",
      type: "planting",
      description: "Herbstastern und Chrysanthemen für Herbstschmuck pflanzen.",
      priority: "medium",
    },

    // September
    {
      month: 9,
      title: "Herbstgemüse säen",
      date: "09-01",
      type: "planting",
      description: "Feldsalat und Spinat in Balkonkästen säen.",
      priority: "medium",
    },
    {
      month: 9,
      title: "Zwiebeln für Frühjahr",
      date: "09-15",
      type: "planting",
      description: "Tulpen- und Narzissenzwiebeln in Töpfe pflanzen.",
      priority: "medium",
    },
    {
      month: 9,
      title: "Bewässerung reduzieren",
      date: "09-25",
      type: "watering",
      description: "Gießintervalle an kühlere Temperaturen anpassen.",
      priority: "medium",
    },

    // Oktober
    {
      month: 10,
      title: "Winterharte Pflanzen schützen",
      date: "10-01",
      type: "maintenance",
      description: "Kübel mit Vlies oder Jute umhüllen.",
      priority: "high",
    },
    {
      month: 10,
      title: "Letzte Ernte",
      date: "10-15",
      type: "harvesting",
      description: "Letzte Tomaten und Kräuter vor dem Frost ernten.",
      priority: "medium",
    },
    {
      month: 10,
      title: "Balkonmöbel einlagern",
      date: "10-25",
      type: "maintenance",
      description: "Empfindliche Balkonmöbel und Dekorationen einlagern.",
      priority: "medium",
    },

    // November
    {
      month: 11,
      title: "Kübelpflanzen einräumen",
      date: "11-01",
      type: "maintenance",
      description:
        "Nicht winterharte Kübelpflanzen ins Winterquartier bringen.",
      priority: "high",
    },
    {
      month: 11,
      title: "Winterschutz verstärken",
      date: "11-15",
      type: "maintenance",
      description: "Zusätzlichen Winterschutz für draußen bleibende Pflanzen.",
      priority: "high",
    },
    {
      month: 11,
      title: "Weihnachtsdeko vorbereiten",
      date: "11-25",
      type: "maintenance",
      description: "Tannenzweige und Winterdekoration für Balkon besorgen.",
      priority: "low",
    },

    // Dezember
    {
      month: 12,
      title: "Winterdekoration anbringen",
      date: "12-01",
      type: "maintenance",
      description: "Balkon weihnachtlich dekorieren mit Lichterketten.",
      priority: "low",
    },
    {
      month: 12,
      title: "Winterquartier kontrollieren",
      date: "12-15",
      type: "maintenance",
      description:
        "Eingelagerte Pflanzen auf Schädlinge und Trockenheit prüfen.",
      priority: "medium",
    },
    {
      month: 12,
      title: "Planung nächstes Jahr",
      date: "12-25",
      type: "maintenance",
      description:
        "Saatgut bestellen und Bepflanzung für nächstes Jahr planen.",
      priority: "low",
    },
  ],
};

// Complete Garden Template (Kompletter Garten)
export const COMPLETE_GARDEN_TEMPLATE_DE = {
  name: "Kompletter Garten Jahresplan",
  description:
    "Umfassender Jahreskalender für alle Gartenbereiche: Zier-, Nutz- und Kräutergarten",
  category: GARDEN_TEMPLATE_CATEGORIES_DE.COMPLETE_GARDEN,
  region: "temperate_north",
  tasks: [
    // Combine key tasks from all templates
    // Januar
    {
      month: 1,
      title: "Obstbäume schneiden",
      date: "01-15",
      type: "pruning",
      description:
        "Kernobst wie Äpfel, Quitten und Birnen bei Tauwetter schneiden.",
      priority: "high",
    },
    {
      month: 1,
      title: "Bäume fällen",
      date: "01-20",
      type: "maintenance",
      description: "Größere Fällarbeiten bei frostfreiem Wetter durchführen.",
      priority: "medium",
    },
    {
      month: 1,
      title: "Wintergemüse ernten",
      date: "01-25",
      type: "harvesting",
      description: "Grünkohl, Rosenkohl, Lauch ernten.",
      priority: "medium",
    },

    // Februar
    {
      month: 2,
      title: "Kartoffeln vorkeimen",
      date: "02-15",
      type: "planting",
      description: "Frühkartoffeln in hellen, kühlen Räumen vorkeimen lassen.",
      priority: "high",
    },
    {
      month: 2,
      title: "Sommerblühende Sträucher schneiden",
      date: "02-20",
      type: "pruning",
      description:
        "Buddleia, Hibiskus und andere sommerblühende Sträucher zurückschneiden.",
      priority: "high",
    },
    {
      month: 2,
      title: "Kompost sieben",
      date: "02-25",
      type: "maintenance",
      description:
        "Reifen Kompost sieben und für die Gartensaison vorbereiten.",
      priority: "medium",
    },

    // März
    {
      month: 3,
      title: "Rosen schneiden",
      date: "03-15",
      type: "pruning",
      description:
        "Hauptschnitt für Rosen. Schwache Triebe entfernen, starke einkürzen.",
      priority: "high",
    },
    {
      month: 3,
      title: "Tomaten vorziehen",
      date: "03-20",
      type: "planting",
      description: "Tomaten auf der Fensterbank oder im Gewächshaus vorziehen.",
      priority: "high",
    },
    {
      month: 3,
      title: "Kräuter stutzen",
      date: "03-25",
      type: "pruning",
      description:
        "Mehrjährige Kräuter wie Thymian und Oregano zurückschneiden.",
      priority: "medium",
    },

    // April
    {
      month: 4,
      title: "Kartoffeln pflanzen",
      date: "04-01",
      type: "planting",
      description: "Vorgekeimte Kartoffeln ins Beet pflanzen.",
      priority: "high",
    },
    {
      month: 4,
      title: "Sommerblumen aussäen",
      date: "04-15",
      type: "planting",
      description:
        "Einjährige Sommerblumen direkt ins Beet oder in Töpfe säen.",
      priority: "high",
    },
    {
      month: 4,
      title: "Stauden teilen",
      date: "04-20",
      type: "maintenance",
      description: "Große Stauden teilen und verpflanzen.",
      priority: "medium",
    },

    // Mai
    {
      month: 5,
      title: "Eisheilige - Auspflanzen",
      date: "05-15",
      type: "planting",
      description:
        "Nach den Eisheiligen frostempfindliche Pflanzen ins Freie setzen.",
      priority: "high",
    },
    {
      month: 5,
      title: "Basilikum pflanzen",
      date: "05-20",
      type: "planting",
      description: "Basilikum und andere wärmebedürftige Kräuter auspflanzen.",
      priority: "medium",
    },
    {
      month: 5,
      title: "Unkraut jäten",
      date: "05-25",
      type: "maintenance",
      description: "Regelmäßiges Unkrautjäten, solange es noch klein ist.",
      priority: "high",
    },

    // Juni
    {
      month: 6,
      title: "Tomaten ausgeizen",
      date: "06-01",
      type: "maintenance",
      description: "Geiztriebe bei Tomaten regelmäßig entfernen.",
      priority: "high",
    },
    {
      month: 6,
      title: "Rosen düngen",
      date: "06-10",
      type: "fertilizing",
      description: "Erste Düngung der Rosen nach der ersten Blüte.",
      priority: "medium",
    },
    {
      month: 6,
      title: "Erdbeeren ernten",
      date: "06-15",
      type: "harvesting",
      description: "Erste Erdbeeren ernten, täglich kontrollieren.",
      priority: "high",
    },
    {
      month: 6,
      title: "Kräuter ernten",
      date: "06-20",
      type: "harvesting",
      description:
        "Regelmäßige Kräuterernte für Frischverbrauch und Trocknung.",
      priority: "medium",
    },

    // Juli
    {
      month: 7,
      title: "Sommerernte beginnt",
      date: "07-01",
      type: "harvesting",
      description: "Erste Tomaten, Gurken, Zucchini und Salate ernten.",
      priority: "high",
    },
    {
      month: 7,
      title: "Hecken schneiden",
      date: "07-15",
      type: "pruning",
      description: "Hecken den zweiten Schnitt des Jahres geben.",
      priority: "high",
    },
    {
      month: 7,
      title: "Bewässerung intensivieren",
      date: "07-20",
      type: "watering",
      description:
        "Bewässerung der Hitze anpassen, morgens oder abends gießen.",
      priority: "high",
    },

    // August
    {
      month: 8,
      title: "Haupterntezeit",
      date: "08-01",
      type: "harvesting",
      description: "Haupternte von Tomaten, Gurken, Bohnen und Sommergemüse.",
      priority: "high",
    },
    {
      month: 8,
      title: "Kräuter konservieren",
      date: "08-15",
      type: "harvesting",
      description:
        "Große Kräuterernte für Wintervorrat trocknen oder einfrieren.",
      priority: "medium",
    },
    {
      month: 8,
      title: "Herbstaussaat",
      date: "08-25",
      type: "planting",
      description: "Feldsalat und Spinat für die Herbst- und Winterernte säen.",
      priority: "medium",
    },

    // September
    {
      month: 9,
      title: "Rasenpflege Herbst",
      date: "09-01",
      type: "maintenance",
      description: "Rasen vertikutieren, nachsäen und düngen.",
      priority: "high",
    },
    {
      month: 9,
      title: "Apfelernte",
      date: "09-10",
      type: "harvesting",
      description: "Äpfel und andere Herbstfrüchte ernten.",
      priority: "high",
    },
    {
      month: 9,
      title: "Zwiebelblumen pflanzen",
      date: "09-25",
      type: "planting",
      description: "Tulpen, Narzissen und andere Frühjahrsblüher pflanzen.",
      priority: "high",
    },

    // Oktober
    {
      month: 10,
      title: "Späte Ernte",
      date: "10-01",
      type: "harvesting",
      description: "Kürbisse, späte Tomaten und Herbstgemüse ernten.",
      priority: "high",
    },
    {
      month: 10,
      title: "Rosen pflanzen",
      date: "10-15",
      type: "planting",
      description: "Beste Pflanzzeit für wurzelnackte Rosen.",
      priority: "medium",
    },
    {
      month: 10,
      title: "Winterschutz vorbereiten",
      date: "10-25",
      type: "maintenance",
      description:
        "Empfindliche Pflanzen mit Winterschutz versehen, Igel-Quartiere.",
      priority: "high",
    },

    // November
    {
      month: 11,
      title: "Gemüsebeete abräumen",
      date: "11-01",
      type: "maintenance",
      description: "Abgeerntete Beete räumen und für den Winter vorbereiten.",
      priority: "high",
    },
    {
      month: 11,
      title: "Gehölze pflanzen",
      date: "11-15",
      type: "planting",
      description: "Bäume und Sträucher pflanzen - beste Pflanzzeit.",
      priority: "high",
    },
    {
      month: 11,
      title: "Kompostpflege",
      date: "11-25",
      type: "maintenance",
      description: "Kompost umsetzen und mit Gartenabfällen auffüllen.",
      priority: "medium",
    },

    // Dezember
    {
      month: 12,
      title: "Boden umgraben",
      date: "12-01",
      type: "maintenance",
      description: "Schwere Böden umgraben, das spart im Frühjahr Arbeit.",
      priority: "medium",
    },
    {
      month: 12,
      title: "Immergrüne schützen",
      date: "12-15",
      type: "maintenance",
      description: "Immergrüne Pflanzen vor Wintersonne und Frost schützen.",
      priority: "high",
    },
    {
      month: 12,
      title: "Wintergemüse ernten",
      date: "12-25",
      type: "harvesting",
      description: "Grünkohl, Rosenkohl und anderen Wintergemüse ernten.",
      priority: "medium",
    },
  ],
};

// Template für Obstgarten (nur Obst, Beeren, Obstbäume)
export const FRUIT_GARDEN_TEMPLATE_DE = {
  name: "Obstgarten Jahresplan",
  description: "Jahreskalender für den Obstgarten mit allen wichtigen Arbeiten an Obstbäumen und Beerensträuchern",
  category: GARDEN_TEMPLATE_CATEGORIES_DE.FRUIT_GARDEN,
  region: "temperate_north",
  tasks: [
    // Januar
    {
      month: 1,
      title: "Obstbäume schneiden",
      date: "01-15",
      type: "pruning",
      description: "Kernobst wie Äpfel, Quitten und Birnen bei Tauwetter schneiden.",
      priority: "high",
    },
    {
      month: 1,
      title: "Steckholz schneiden",
      date: "01-20",
      type: "planting",
      description: "Steckholz von Johannis- und Stachelbeeren schneiden.",
      priority: "medium",
    },
    // März
    {
      month: 3,
      title: "Obstbäume düngen",
      date: "03-20",
      type: "fertilizing",
      description: "Obstbäume mit Kompost oder organischem Dünger versorgen.",
      priority: "high",
    },
    // April
    {
      month: 4,
      title: "Obstgehölze düngen",
      date: "04-10",
      type: "fertilizing",
      description: "Beerensträucher und Obstbäume düngen.",
      priority: "medium",
    },
    // Mai
    {
      month: 5,
      title: "Erdbeeren mulchen",
      date: "05-25",
      type: "maintenance",
      description: "Erdbeeren mit Stroh mulchen zum Schutz der Früchte.",
      priority: "medium",
    },
    // Juni
    {
      month: 6,
      title: "Erdbeeren ernten",
      date: "06-15",
      type: "harvesting",
      description: "Erste Erdbeeren ernten, täglich kontrollieren.",
      priority: "high",
    },
    // Juli
    {
      month: 7,
      title: "Beerensträucher schneiden",
      date: "07-25",
      type: "pruning",
      description: "Johannisbeeren nach der Ernte auslichten.",
      priority: "medium",
    },
    // August
    {
      month: 8,
      title: "Erdbeeren pflanzen",
      date: "08-25",
      type: "planting",
      description: "Neue Erdbeerpflanzen setzen für die nächste Saison.",
      priority: "medium",
    },
    // September
    {
      month: 9,
      title: "Apfelernte",
      date: "09-01",
      type: "harvesting",
      description: "Äpfel und andere Herbstfrüchte ernten.",
      priority: "high",
    },
    {
      month: 9,
      title: "Obst einlagern",
      date: "09-25",
      type: "maintenance",
      description: "Äpfel und Birnen fachgerecht einlagern.",
      priority: "medium",
    },
    // Oktober
    {
      month: 10,
      title: "Stachelbeeren pflanzen",
      date: "10-15",
      type: "planting",
      description: "Neue Stachelbeersträucher pflanzen.",
      priority: "medium",
    },
    {
      month: 10,
      title: "Herbst-Himbeeren schneiden",
      date: "10-25",
      type: "pruning",
      description: "Herbst-Himbeeren bodennah zurückschneiden.",
      priority: "medium",
    },
    // November
    {
      month: 11,
      title: "Obstbäume kalken",
      date: "11-25",
      type: "maintenance",
      description: "Obstbaumstämme weißen zum Schutz vor Frostrissen.",
      priority: "medium",
    }
  ]
};

// Template für Gemüsegarten (nur Gemüse, Salate, Kartoffeln)
export const VEGETABLE_GARDEN_TEMPLATE_DE = {
  name: "Gemüsegarten Jahresplan",
  description: "Jahreskalender für den Gemüsegarten mit allen wichtigen Arbeiten an Gemüse, Salaten und Kartoffeln",
  category: GARDEN_TEMPLATE_CATEGORIES_DE.VEGETABLE_GARDEN,
  region: "temperate_north",
  tasks: [
    // Januar
    {
      month: 1,
      title: "Wintergemüse ernten",
      date: "01-25",
      type: "harvesting",
      description: "Grünkohl, Rosenkohl, Lauch und andere winterharte Gemüse ernten.",
      priority: "medium",
    },
    // Februar
    {
      month: 2,
      title: "Bodenproben nehmen",
      date: "02-01",
      type: "maintenance",
      description: "Bodenproben im Gemüsegarten für Nährstoffanalyse nehmen.",
      priority: "medium",
    },
    {
      month: 2,
      title: "Kartoffeln vorkeimen",
      date: "02-15",
      type: "planting",
      description: "Frühkartoffeln in hellen, kühlen Räumen vorkeimen lassen.",
      priority: "high",
    },
    {
      month: 2,
      title: "Beete vorbereiten",
      date: "02-25",
      type: "maintenance",
      description: "Beete für die Aussaat vorbereiten, Kompost einarbeiten.",
      priority: "high",
    },
    // März
    {
      month: 3,
      title: "Salat auspflanzen",
      date: "03-01",
      type: "planting",
      description: "Salat ins Frühbeet oder unter Vlies auspflanzen.",
      priority: "high",
    },
    {
      month: 3,
      title: "Tomaten vorziehen",
      date: "03-25",
      type: "planting",
      description: "Tomaten auf der Fensterbank oder im Gewächshaus vorziehen.",
      priority: "high",
    },
    // April
    {
      month: 4,
      title: "Kartoffeln pflanzen",
      date: "04-01",
      type: "planting",
      description: "Vorgekeimte Kartoffeln ins Beet pflanzen.",
      priority: "high",
    },
    {
      month: 4,
      title: "Tomaten pikieren",
      date: "04-15",
      type: "maintenance",
      description: "Tomatensämlinge in größere Töpfe umtopfen.",
      priority: "high",
    },
    {
      month: 4,
      title: "Salat aussäen",
      date: "04-20",
      type: "planting",
      description: "Salat für die Sommerernte direkt ins Beet säen.",
      priority: "medium",
    },
    // Mai
    {
      month: 5,
      title: "Tomaten auspflanzen",
      date: "05-15",
      type: "planting",
      description: "Nach den Eisheiligen Tomaten ins Freiland oder Gewächshaus pflanzen.",
      priority: "high",
    },
    {
      month: 5,
      title: "Gurken aussäen",
      date: "05-20",
      type: "planting",
      description: "Gurken direkt ins Beet oder Gewächshaus säen.",
      priority: "high",
    },
    // Juni
    {
      month: 6,
      title: "Tomaten ausgeizen",
      date: "06-01",
      type: "maintenance",
      description: "Geiztriebe bei Tomaten regelmäßig entfernen.",
      priority: "high",
    },
    {
      month: 6,
      title: "Bohnen säen",
      date: "06-20",
      type: "planting",
      description: "Busch- und Stangenbohnen direkt ins Beet säen.",
      priority: "medium",
    },
    // Juli
    {
      month: 7,
      title: "Sommerernte",
      date: "07-01",
      type: "harvesting",
      description: "Erste Tomaten, Gurken, Zucchini und Salate ernten.",
      priority: "high",
    },
    {
      month: 7,
      title: "Herbstgemüse säen",
      date: "07-15",
      type: "planting",
      description: "Kohlarten, Radieschen und Spinat für die Herbsternte säen.",
      priority: "medium",
    },
    // August
    {
      month: 8,
      title: "Haupterntezeit",
      date: "08-01",
      type: "harvesting",
      description: "Haupternte von Tomaten, Gurken, Bohnen und Sommergemüse.",
      priority: "high",
    },
    {
      month: 8,
      title: "Feldsalat säen",
      date: "08-15",
      type: "planting",
      description: "Feldsalat für die Winterernte aussäen.",
      priority: "medium",
    },
    // September
    {
      month: 9,
      title: "Winterzwiebeln stecken",
      date: "09-15",
      type: "planting",
      description: "Winterzwiebeln für die frühe Ernte im nächsten Jahr stecken.",
      priority: "medium",
    },
    // Oktober
    {
      month: 10,
      title: "Späte Ernte",
      date: "10-01",
      type: "harvesting",
      description: "Kürbisse, späte Tomaten und Herbstgemüse ernten.",
      priority: "high",
    },
    // November
    {
      month: 11,
      title: "Gemüsebeete abräumen",
      date: "11-01",
      type: "maintenance",
      description: "Abgeerntete Beete räumen und für den Winter vorbereiten.",
      priority: "high",
    },
    {
      month: 11,
      title: "Kompostpflege",
      date: "11-15",
      type: "maintenance",
      description: "Kompost umsetzen und mit Gartenabfällen auffüllen.",
      priority: "medium",
    },
    // Dezember
    {
      month: 12,
      title: "Boden umgraben",
      date: "12-01",
      type: "maintenance",
      description: "Schwere Böden umgraben, das spart im Frühjahr Arbeit.",
      priority: "medium",
    },
    {
      month: 12,
      title: "Wintergemüse ernten",
      date: "12-15",
      type: "harvesting",
      description: "Grünkohl, Rosenkohl und anderen Wintergemüse ernten.",
      priority: "medium",
    },
    {
      month: 12,
      title: "Gartenboden kalken",
      date: "12-25",
      type: "maintenance",
      description: "Saure Böden kalken für besseres Wachstum im nächsten Jahr.",
      priority: "low",
    }
  ]
};

// Function to export all German templates
export function getAvailableTemplatesDe() {
  return [
    ORNAMENTAL_GARDEN_TEMPLATE_DE,
    FRUIT_GARDEN_TEMPLATE_DE,
    VEGETABLE_GARDEN_TEMPLATE_DE,
    HERB_GARDEN_TEMPLATE_DE,
    BALCONY_TERRACE_TEMPLATE_DE,
    COMPLETE_GARDEN_TEMPLATE_DE,
  ];
}
