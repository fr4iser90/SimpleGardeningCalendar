// Italian Garden Calendar Templates - Modelli di calendario del giardino italiano
// Adattati alle pratiche di giardinaggio italiane e al clima

export const GARDEN_TEMPLATE_CATEGORIES_IT = {
  ORNAMENTAL: "Giardino ornamentale",
  VEGETABLE_FRUIT: "Orto e frutteto",
  HERB_GARDEN: "Giardino delle erbe aromatiche",
  BALCONY_TERRACE: "Balcone e terrazza",
  COMPLETE_GARDEN: "Giardino completo",
};

// Template for Ornamental Garden (Giardino ornamentale)
export const ORNAMENTAL_GARDEN_TEMPLATE_IT = {
  name: "Piano annuale del giardino ornamentale",
  description: "Calendario completo per il giardino ornamentale con tutti i lavori importanti",
  category: GARDEN_TEMPLATE_CATEGORIES_IT.ORNAMENTAL,
  region: "mediterranean",
  tasks: [
    // Gennaio
    {
      month: 1,
      title: "Potare alberi da frutto",
      date: "01-15",
      type: "pruning",
      description: "Potare alberi da frutto a granella in giornate asciutte e miti.",
      priority: "high",
    },
    {
      month: 1,
      title: "Piantare rose",
      date: "01-20",
      type: "planting",
      description: "Piantare rose a radice nuda se il terreno non è gelato.",
      priority: "medium",
    },

    // Febbraio
    {
      month: 2,
      title: "Potatura delle rose",
      date: "02-15",
      type: "pruning",
      description: "Eseguire la potatura principale delle rose prima della germogliazione.",
      priority: "high",
    },
    {
      month: 2,
      title: "Preparare semenzai",
      date: "02-25",
      type: "planting",
      description: "Preparare semenzai di fiori annuali sotto protezione.",
      priority: "medium",
    },

    // Marzo
    {
      month: 3,
      title: "Semina del prato",
      date: "03-01",
      type: "planting",
      description: "Periodo ideale per seminare o riseminare il prato.",
      priority: "high",
    },
    {
      month: 3,
      title: "Piantare bulbi estivi",
      date: "03-15",
      type: "planting",
      description: "Piantare dalie, gladioli e begonie.",
      priority: "medium",
    },

    // Aprile
    {
      month: 4,
      title: "Concimare aiuole",
      date: "04-01",
      type: "fertilizing",
      description: "Concimare aiuole di perenni e rose.",
      priority: "high",
    },
    {
      month: 4,
      title: "Piantare annuali",
      date: "04-15",
      type: "planting",
      description: "Piantare fiori annuali all'aperto.",
      priority: "high",
    },

    // Maggio
    {
      month: 5,
      title: "Irrigazione regolare",
      date: "05-01",
      type: "watering",
      description: "Iniziare l'irrigazione regolare, preferibilmente al mattino.",
      priority: "high",
    },
    {
      month: 5,
      title: "Pacciamatura",
      date: "05-15",
      type: "maintenance",
      description: "Pacciamare le aiuole per conservare l'umidità.",
      priority: "medium",
    },

    // Giugno
    {
      month: 6,
      title: "Potatura siepi",
      date: "06-01",
      type: "pruning",
      description: "Prima potatura delle siepi a crescita rapida.",
      priority: "medium",
    },
    {
      month: 6,
      title: "Rimuovere fiori appassiti",
      date: "06-15",
      type: "maintenance",
      description: "Rimuovere regolarmente i fiori appassiti.",
      priority: "medium",
    },

    // Luglio
    {
      month: 7,
      title: "Irrigazione intensiva",
      date: "07-01",
      type: "watering",
      description: "Intensificare l'irrigazione durante il caldo intenso.",
      priority: "high",
    },
    {
      month: 7,
      title: "Talee di gerani",
      date: "07-15",
      type: "planting",
      description: "Fare talee di gerani per l'anno successivo.",
      priority: "low",
    },

    // Agosto
    {
      month: 8,
      title: "Semina di biennali",
      date: "08-01",
      type: "planting",
      description: "Seminare fiori biennali: viole del pensiero, nontiscordardimé.",
      priority: "medium",
    },
    {
      month: 8,
      title: "Divisione degli iris",
      date: "08-15",
      type: "maintenance",
      description: "Dividere e ripiantare cespi di iris dopo la fioritura.",
      priority: "medium",
    },

    // Settembre
    {
      month: 9,
      title: "Rinnovare il prato",
      date: "09-01",
      type: "maintenance",
      description: "Scarificare, arieggiare e riseminare il prato.",
      priority: "high",
    },
    {
      month: 9,
      title: "Piantare bulbi primaverili",
      date: "09-15",
      type: "planting",
      description: "Iniziare la piantagione di bulbi a fioritura primaverile.",
      priority: "high",
    },

    // Ottobre
    {
      month: 10,
      title: "Piantare alberi e arbusti",
      date: "10-01",
      type: "planting",
      description: "Periodo ideale per piantare alberi e arbusti.",
      priority: "high",
    },
    {
      month: 10,
      title: "Continuare piantagione bulbi",
      date: "10-15",
      type: "planting",
      description: "Continuare a piantare tulipani, narcisi, giacinti.",
      priority: "high",
    },

    // Novembre
    {
      month: 11,
      title: "Protezione invernale",
      date: "11-01",
      type: "maintenance",
      description: "Installare protezioni invernali per piante delicate.",
      priority: "medium",
    },
    {
      month: 11,
      title: "Pulire aiuole",
      date: "11-15",
      type: "maintenance",
      description: "Pulire aiuole e raccogliere foglie cadute.",
      priority: "medium",
    },

    // Dicembre
    {
      month: 12,
      title: "Pianificare prossima stagione",
      date: "12-01",
      type: "maintenance",
      description: "Ordinare semi e pianificare miglioramenti per l'anno successivo.",
      priority: "low",
    },
    {
      month: 12,
      title: "Forzare bulbi",
      date: "12-15",
      type: "planting",
      description: "Piantare bulbi in vaso per forzatura invernale.",
      priority: "low",
    },
  ],
};

// Template for Vegetable and Fruit Garden (Orto e frutteto)
export const VEGETABLE_FRUIT_GARDEN_TEMPLATE_IT = {
  name: "Piano annuale dell'orto e frutteto",
  description: "Calendario completo per l'orto e il frutteto",
  category: GARDEN_TEMPLATE_CATEGORIES_IT.VEGETABLE_FRUIT,
  region: "mediterranean",
  tasks: [
    // Gennaio
    {
      month: 1,
      title: "Potatura fruttiferi",
      date: "01-15",
      type: "pruning",
      description: "Potare alberi da frutto a granella in tempo asciutto.",
      priority: "high",
    },
    {
      month: 1,
      title: "Pianificare colture",
      date: "01-25",
      type: "maintenance",
      description: "Pianificare la rotazione delle colture e ordinare semi.",
      priority: "high",
    },

    // Febbraio
    {
      month: 2,
      title: "Preparare semenzai",
      date: "02-01",
      type: "maintenance",
      description: "Preparare materiale per semina e semenzai.",
      priority: "medium",
    },
    {
      month: 2,
      title: "Semina sotto protezione",
      date: "02-15",
      type: "planting",
      description: "Prime semine sotto protezione: ravanelli, lattughe.",
      priority: "high",
    },

    // Marzo
    {
      month: 3,
      title: "Semina all'aperto",
      date: "03-01",
      type: "planting",
      description: "Seminare carote, pastinache, piselli.",
      priority: "high",
    },
    {
      month: 3,
      title: "Piantare aglio e scalogno",
      date: "03-15",
      type: "planting",
      description: "Piantare aglio rosa e scalogni.",
      priority: "medium",
    },

    // Aprile
    {
      month: 4,
      title: "Piantare patate",
      date: "04-01",
      type: "planting",
      description: "Piantare patate precoci.",
      priority: "high",
    },
    {
      month: 4,
      title: "Seminare aromatiche",
      date: "04-15",
      type: "planting",
      description: "Seminare prezzemolo, erba cipollina, cerfoglio.",
      priority: "medium",
    },

    // Maggio
    {
      month: 5,
      title: "Trapiantare piantine",
      date: "05-01",
      type: "planting",
      description: "Trapiantare pomodori, zucchine, melanzane.",
      priority: "high",
    },
    {
      month: 5,
      title: "Seminare ortaggi estivi",
      date: "05-15",
      type: "planting",
      description: "Seminare fagiolini, cetrioli, zucche.",
      priority: "high",
    },

    // Giugno
    {
      month: 6,
      title: "Tutorare pomodori",
      date: "06-01",
      type: "maintenance",
      description: "Installare tutori e legare piante di pomodoro.",
      priority: "high",
    },
    {
      month: 6,
      title: "Primo raccolto",
      date: "06-15",
      type: "harvesting",
      description: "Primo raccolto di ravanelli, lattughe, piselli.",
      priority: "medium",
    },

    // Luglio
    {
      month: 7,
      title: "Raccolto estivo",
      date: "07-01",
      type: "harvesting",
      description: "Raccogliere zucchine, pomodori, fagiolini.",
      priority: "high",
    },
    {
      month: 7,
      title: "Irrigazione abbondante",
      date: "07-15",
      type: "watering",
      description: "Irrigare abbondantemente l'orto, preferibilmente la sera.",
      priority: "high",
    },

    // Agosto
    {
      month: 8,
      title: "Grande raccolto",
      date: "08-01",
      type: "harvesting",
      description: "Periodo di grande raccolto: pomodori, melanzane, peperoni.",
      priority: "high",
    },
    {
      month: 8,
      title: "Seminare ortaggi autunnali",
      date: "08-15",
      type: "planting",
      description: "Seminare cavoli, rape, ravanelli invernali.",
      priority: "medium",
    },

    // Settembre
    {
      month: 9,
      title: "Raccogliere frutti",
      date: "09-01",
      type: "harvesting",
      description: "Raccolta di mele, pere, prugne.",
      priority: "high",
    },
    {
      month: 9,
      title: "Piantare fragole",
      date: "09-15",
      type: "planting",
      description: "Piantare nuove fragole.",
      priority: "medium",
    },

    // Ottobre
    {
      month: 10,
      title: "Raccogliere ortaggi da radice",
      date: "10-01",
      type: "harvesting",
      description: "Raccogliere carote, barbabietole, rape.",
      priority: "high",
    },
    {
      month: 10,
      title: "Piantare aglio invernale",
      date: "10-15",
      type: "planting",
      description: "Piantare aglio viola per raccolta estiva.",
      priority: "medium",
    },

    // Novembre
    {
      month: 11,
      title: "Pulire l'orto",
      date: "11-01",
      type: "maintenance",
      description: "Pulire parcelle libere e metterle a riposo.",
      priority: "high",
    },
    {
      month: 11,
      title: "Raccogliere ortaggi invernali",
      date: "11-15",
      type: "harvesting",
      description: "Raccogliere porri, cavoli, spinaci.",
      priority: "medium",
    },

    // Dicembre
    {
      month: 12,
      title: "Raccogliere agrumi",
      date: "12-01",
      type: "harvesting",
      description: "Iniziare la raccolta di arance e mandarini.",
      priority: "high",
    },
    {
      month: 12,
      title: "Pianificare prossimo anno",
      date: "12-25",
      type: "maintenance",
      description: "Stabilire il piano colturale per l'anno successivo.",
      priority: "low",
    },
  ],
};

// Template for Herb Garden (Giardino delle erbe aromatiche)
export const HERB_GARDEN_TEMPLATE_IT = {
  name: "Piano annuale del giardino delle aromatiche",
  description: "Calendario specializzato per la coltivazione delle erbe aromatiche",
  category: GARDEN_TEMPLATE_CATEGORIES_IT.HERB_GARDEN,
  region: "mediterranean",
  tasks: [
    // Marzo
    {
      month: 3,
      title: "Potare aromatiche perenni",
      date: "03-15",
      type: "pruning",
      description: "Potare timo, rosmarino, salvia, origano.",
      priority: "high",
    },
    {
      month: 3,
      title: "Seminare prezzemolo",
      date: "03-25",
      type: "planting",
      description: "Seminare prezzemolo liscio e riccio sotto protezione.",
      priority: "medium",
    },

    // Aprile
    {
      month: 4,
      title: "Dividere erba cipollina",
      date: "04-01",
      type: "maintenance",
      description: "Dividere cespi di erba cipollina.",
      priority: "medium",
    },
    {
      month: 4,
      title: "Seminare coriandolo",
      date: "04-15",
      type: "planting",
      description: "Seminare coriandolo all'aperto.",
      priority: "low",
    },

    // Maggio
    {
      month: 5,
      title: "Piantare basilico",
      date: "05-01",
      type: "planting",
      description: "Piantare basilico all'aperto.",
      priority: "high",
    },
    {
      month: 5,
      title: "Trapiantare aromatiche",
      date: "05-15",
      type: "planting",
      description: "Trapiantare rosmarino, timo, origano.",
      priority: "medium",
    },

    // Giugno-Agosto
    {
      month: 6,
      title: "Raccogliere e essiccare",
      date: "06-01",
      type: "harvesting",
      description: "Iniziare la raccolta regolare per uso fresco ed essiccazione.",
      priority: "high",
    },
    {
      month: 7,
      title: "Cimare i fiori",
      date: "07-15",
      type: "maintenance",
      description: "Cimare i fiori del basilico per favorire le foglie.",
      priority: "medium",
    },

    // Settembre
    {
      month: 9,
      title: "Grande raccolta",
      date: "09-01",
      type: "harvesting",
      description: "Grande raccolta per costituire le riserve invernali.",
      priority: "high",
    },

    // Ottobre
    {
      month: 10,
      title: "Proteggere dal freddo",
      date: "10-15",
      type: "maintenance",
      description: "Proteggere le aromatiche delicate dal freddo.",
      priority: "medium",
    },
  ],
};

// Template for Balcony & Terrace (Balcone e terrazza)
export const BALCONY_TERRACE_TEMPLATE_IT = {
  name: "Piano annuale balcone e terrazza",
  description: "Calendario specializzato per giardinaggio su balcone e terrazza",
  category: GARDEN_TEMPLATE_CATEGORIES_IT.BALCONY_TERRACE,
  region: "mediterranean",
  tasks: [
    // Febbraio
    {
      month: 2,
      title: "Verificare protezioni",
      date: "02-01",
      type: "maintenance",
      description: "Controllare le protezioni invernali delle piante in vaso.",
      priority: "medium",
    },
    {
      month: 2,
      title: "Pulire contenitori",
      date: "02-15",
      type: "maintenance",
      description: "Pulire fioriere e vasi per la nuova stagione.",
      priority: "medium",
    },

    // Marzo
    {
      month: 3,
      title: "Grande pulizia",
      date: "03-01",
      type: "maintenance",
      description: "Pulire balcone e terrazza, verificare mobili.",
      priority: "high",
    },
    {
      month: 3,
      title: "Rinvasare",
      date: "03-15",
      type: "maintenance",
      description: "Rinvasare piante in vaso con terriccio fresco.",
      priority: "high",
    },

    // Aprile
    {
      month: 4,
      title: "Piantare primi fiori",
      date: "04-01",
      type: "planting",
      description: "Piantare viole del pensiero, primule, margherite.",
      priority: "high",
    },
    {
      month: 4,
      title: "Installare irrigazione",
      date: "04-15",
      type: "maintenance",
      description: "Installare sistema di irrigazione automatica.",
      priority: "medium",
    },

    // Maggio
    {
      month: 5,
      title: "Piantagione estiva",
      date: "05-01",
      type: "planting",
      description: "Piantare gerani, petunie, surfinie.",
      priority: "high",
    },
    {
      month: 5,
      title: "Piantare ortaggi",
      date: "05-15",
      type: "planting",
      description: "Piantare pomodori ciliegini, zucchine, peperoni in vasi grandi.",
      priority: "high",
    },

    // Giugno
    {
      month: 6,
      title: "Irrigazione quotidiana",
      date: "06-01",
      type: "watering",
      description: "Iniziare irrigazioni quotidiane con tempo caldo.",
      priority: "high",
    },
    {
      month: 6,
      title: "Concimare",
      date: "06-15",
      type: "fertilizing",
      description: "Apportare concime liquido alle piante in vaso.",
      priority: "medium",
    },

    // Luglio-Agosto
    {
      month: 7,
      title: "Installare ombreggiatura",
      date: "07-01",
      type: "maintenance",
      description: "Proteggere piante sensibili dal sole intenso.",
      priority: "high",
    },
    {
      month: 8,
      title: "Irrigazione intensiva",
      date: "08-01",
      type: "watering",
      description: "Con caldo forte, irrigare mattina e sera.",
      priority: "high",
    },

    // Settembre
    {
      month: 9,
      title: "Piantare bulbi",
      date: "09-15",
      type: "planting",
      description: "Piantare bulbi primaverili in fioriere.",
      priority: "medium",
    },

    // Ottobre
    {
      month: 10,
      title: "Ridurre irrigazione",
      date: "10-01",
      type: "watering",
      description: "Adattare l'irrigazione a temperature più fresche.",
      priority: "medium",
    },

    // Novembre
    {
      month: 11,
      title: "Proteggere dal freddo",
      date: "11-01",
      type: "maintenance",
      description: "Proteggere vasi con tessuto non tessuto.",
      priority: "high",
    },

    // Dicembre
    {
      month: 12,
      title: "Decorazione natalizia",
      date: "12-01",
      type: "maintenance",
      description: "Installare decorazioni natalizie e illuminazione.",
      priority: "low",
    },
  ],
};

// Complete Garden Template (Giardino completo)
export const COMPLETE_GARDEN_TEMPLATE_IT = {
  name: "Piano annuale del giardino completo",
  description: "Calendario completo per tutti gli spazi del giardino",
  category: GARDEN_TEMPLATE_CATEGORIES_IT.COMPLETE_GARDEN,
  region: "mediterranean",
  tasks: [
    // Gennaio
    {
      month: 1,
      title: "Potatura fruttiferi",
      date: "01-15",
      type: "pruning",
      description: "Potare alberi da frutto in tempo asciutto.",
      priority: "high",
    },

    // Febbraio
    {
      month: 2,
      title: "Potatura rose",
      date: "02-15",
      type: "pruning",
      description: "Eseguire potatura di fine inverno delle rose.",
      priority: "high",
    },

    // Marzo
    {
      month: 3,
      title: "Preparare terreno",
      date: "03-01",
      type: "maintenance",
      description: "Vangare e arricchire aiuole e orto.",
      priority: "high",
    },

    // Aprile
    {
      month: 4,
      title: "Grandi piantagioni",
      date: "04-01",
      type: "planting",
      description: "Piantare patate, seminare all'aperto.",
      priority: "high",
    },

    // Maggio
    {
      month: 5,
      title: "Piantagione sensibile al freddo",
      date: "05-01",
      type: "planting",
      description: "Piantare ortaggi e fiori sensibili al freddo.",
      priority: "high",
    },

    // Giugno
    {
      month: 6,
      title: "Manutenzione intensiva",
      date: "06-01",
      type: "maintenance",
      description: "Tutorare, irrigare, rimuovere fiori appassiti.",
      priority: "high",
    },

    // Luglio
    {
      month: 7,
      title: "Irrigazione e raccolta",
      date: "07-01",
      type: "watering",
      description: "Irrigazioni intensive, raccolta estiva.",
      priority: "high",
    },

    // Agosto
    {
      month: 8,
      title: "Grande raccolta",
      date: "08-01",
      type: "harvesting",
      description: "Raccolta intensiva di ortaggi e frutta.",
      priority: "high",
    },

    // Settembre
    {
      month: 9,
      title: "Rinnovamento prato",
      date: "09-01",
      type: "maintenance",
      description: "Scarificare e riseminare il prato.",
      priority: "high",
    },

    // Ottobre
    {
      month: 10,
      title: "Raccolta autunnale",
      date: "10-01",
      type: "harvesting",
      description: "Raccogliere frutta e ortaggi autunnali.",
      priority: "high",
    },

    // Novembre
    {
      month: 11,
      title: "Preparazione invernale",
      date: "11-01",
      type: "maintenance",
      description: "Pulire, proteggere, ricoverare piante delicate.",
      priority: "high",
    },

    // Dicembre
    {
      month: 12,
      title: "Pianificazione",
      date: "12-01",
      type: "maintenance",
      description: "Pianificare e ordinare per l'anno successivo.",
      priority: "low",
    },
  ],
};

// Function to export all Italian templates
export function getAvailableTemplatesIt() {
  return [
    ORNAMENTAL_GARDEN_TEMPLATE_IT,
    VEGETABLE_FRUIT_GARDEN_TEMPLATE_IT,
    HERB_GARDEN_TEMPLATE_IT,
    BALCONY_TERRACE_TEMPLATE_IT,
    COMPLETE_GARDEN_TEMPLATE_IT,
  ];
} 