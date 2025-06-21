// French Garden Calendar Templates - Modèles de calendrier de jardin français
// Adaptés aux pratiques de jardinage françaises et au climat

export const GARDEN_TEMPLATE_CATEGORIES_FR = {
  ORNAMENTAL: "Jardin d'ornement",
  VEGETABLE_FRUIT: "Potager et verger",
  HERB_GARDEN: "Jardin d'herbes aromatiques",
  BALCONY_TERRACE: "Balcon et terrasse",
  COMPLETE_GARDEN: "Jardin complet",
};

// Template for Ornamental Garden (Jardin d'ornement)
export const ORNAMENTAL_GARDEN_TEMPLATE_FR = {
  name: "Plan annuel du jardin d'ornement",
  description: "Calendrier complet pour le jardin d'ornement avec tous les travaux d'entretien importants",
  category: GARDEN_TEMPLATE_CATEGORIES_FR.ORNAMENTAL,
  region: "temperate_north",
  tasks: [
    // Janvier
    {
      month: 1,
      title: "Tailler les arbres",
      date: "01-15",
      type: "pruning",
      description: "Tailler les arbres fruitiers à pépins par temps doux et sec.",
      priority: "high",
    },
    {
      month: 1,
      title: "Planter les rosiers",
      date: "01-20",
      type: "planting",
      description: "Planter les rosiers à racines nues si le sol n'est pas gelé.",
      priority: "medium",
    },
    {
      month: 1,
      title: "Protéger du gel",
      date: "01-25",
      type: "maintenance",
      description: "Vérifier et renforcer les protections hivernales des plantes fragiles.",
      priority: "high",
    },

    // Février
    {
      month: 2,
      title: "Tailler les arbustes à floraison estivale",
      date: "02-15",
      type: "pruning",
      description: "Tailler les buddleias, hibiscus et autres arbustes à floraison estivale.",
      priority: "high",
    },
    {
      month: 2,
      title: "Préparer le compost",
      date: "02-20",
      type: "maintenance",
      description: "Retourner et tamiser le compost mûr pour la saison.",
      priority: "medium",
    },
    {
      month: 2,
      title: "Nettoyer les massifs",
      date: "02-25",
      type: "maintenance",
      description: "Nettoyer les massifs de vivaces, enlever les feuilles mortes.",
      priority: "medium",
    },

    // Mars
    {
      month: 3,
      title: "Grande taille des rosiers",
      date: "03-15",
      type: "pruning",
      description: "Effectuer la taille principale des rosiers, supprimer le bois mort.",
      priority: "high",
    },
    {
      month: 3,
      title: "Diviser les vivaces",
      date: "03-20",
      type: "maintenance",
      description: "Diviser les touffes de vivaces trop importantes.",
      priority: "medium",
    },
    {
      month: 3,
      title: "Semer les annuelles",
      date: "03-25",
      type: "planting",
      description: "Semer les fleurs annuelles sous abri ou en pleine terre selon les espèces.",
      priority: "high",
    },

    // Avril
    {
      month: 4,
      title: "Planter les bulbes d'été",
      date: "04-10",
      type: "planting",
      description: "Planter les bulbes à floraison estivale : dahlias, glaïeuls, bégonias.",
      priority: "medium",
    },
    {
      month: 4,
      title: "Fertiliser les massifs",
      date: "04-15",
      type: "fertilizing",
      description: "Apporter de l'engrais aux massifs de vivaces et aux rosiers.",
      priority: "high",
    },
    {
      month: 4,
      title: "Semer la pelouse",
      date: "04-20",
      type: "planting",
      description: "Semer ou regarnir la pelouse, conditions idéales au printemps.",
      priority: "medium",
    },

    // Mai
    {
      month: 5,
      title: "Planter après les Saints de Glace",
      date: "05-15",
      type: "planting",
      description: "Après les Saints de Glace, planter les annuelles sensibles au froid.",
      priority: "high",
    },
    {
      month: 5,
      title: "Pincer les chrysanthèmes",
      date: "05-20",
      type: "maintenance",
      description: "Pincer les jeunes pousses de chrysanthèmes pour favoriser la ramification.",
      priority: "medium",
    },
    {
      month: 5,
      title: "Pailler les massifs",
      date: "05-25",
      type: "maintenance",
      description: "Pailler les massifs pour conserver l'humidité et limiter les mauvaises herbes.",
      priority: "high",
    },

    // Juin
    {
      month: 6,
      title: "Arroser régulièrement",
      date: "06-01",
      type: "watering",
      description: "Commencer les arrosages réguliers, de préférence le matin ou le soir.",
      priority: "high",
    },
    {
      month: 6,
      title: "Supprimer les fleurs fanées",
      date: "06-15",
      type: "maintenance",
      description: "Éliminer régulièrement les fleurs fanées pour prolonger la floraison.",
      priority: "medium",
    },
    {
      month: 6,
      title: "Tailler les haies",
      date: "06-20",
      type: "pruning",
      description: "Première taille des haies de croissance rapide.",
      priority: "medium",
    },

    // Juillet
    {
      month: 7,
      title: "Bouturer les géraniums",
      date: "07-01",
      type: "planting",
      description: "Bouturer les géraniums et autres plantes pour l'année suivante.",
      priority: "low",
    },
    {
      month: 7,
      title: "Arroser abondamment",
      date: "07-15",
      type: "watering",
      description: "Intensifier les arrosages pendant les fortes chaleurs.",
      priority: "high",
    },
    {
      month: 7,
      title: "Récolter les graines",
      date: "07-25",
      type: "harvesting",
      description: "Récolter les graines des fleurs pour les semis de l'année suivante.",
      priority: "low",
    },

    // Août
    {
      month: 8,
      title: "Semer les bisannuelles",
      date: "08-01",
      type: "planting",
      description: "Semer les fleurs bisannuelles : pensées, myosotis, pâquerettes.",
      priority: "medium",
    },
    {
      month: 8,
      title: "Diviser les iris",
      date: "08-15",
      type: "maintenance",
      description: "Diviser et replanter les touffes d'iris après la floraison.",
      priority: "medium",
    },
    {
      month: 8,
      title: "Préparer les semis d'automne",
      date: "08-25",
      type: "planting",
      description: "Préparer les semis de vivaces pour plantation automnale.",
      priority: "low",
    },

    // Septembre
    {
      month: 9,
      title: "Rénover la pelouse",
      date: "09-01",
      type: "maintenance",
      description: "Scarifier, aérer et regarnir la pelouse.",
      priority: "high",
    },
    {
      month: 9,
      title: "Planter les bulbes de printemps",
      date: "09-15",
      type: "planting",
      description: "Commencer la plantation des bulbes à floraison printanière.",
      priority: "high",
    },
    {
      month: 9,
      title: "Bouturer les rosiers",
      date: "09-25",
      type: "planting",
      description: "Bouturer les rosiers pour obtenir de nouveaux plants.",
      priority: "medium",
    },

    // Octobre
    {
      month: 10,
      title: "Continuer la plantation des bulbes",
      date: "10-01",
      type: "planting",
      description: "Poursuivre la plantation des tulipes, narcisses, jacinthes.",
      priority: "high",
    },
    {
      month: 10,
      title: "Planter les arbres et arbustes",
      date: "10-15",
      type: "planting",
      description: "Période idéale pour planter les arbres et arbustes.",
      priority: "high",
    },
    {
      month: 10,
      title: "Rentrer les plantes fragiles",
      date: "10-25",
      type: "maintenance",
      description: "Rentrer les plantes en pot sensibles au froid.",
      priority: "medium",
    },

    // Novembre
    {
      month: 11,
      title: "Protéger du froid",
      date: "11-01",
      type: "maintenance",
      description: "Installer les protections hivernales pour les plantes fragiles.",
      priority: "high",
    },
    {
      month: 11,
      title: "Planter les rosiers",
      date: "11-15",
      type: "planting",
      description: "Planter les nouveaux rosiers à racines nues.",
      priority: "medium",
    },
    {
      month: 11,
      title: "Nettoyer les massifs",
      date: "11-25",
      type: "maintenance",
      description: "Nettoyer les massifs, ramasser les feuilles mortes.",
      priority: "medium",
    },

    // Décembre
    {
      month: 12,
      title: "Forcer les bulbes",
      date: "12-01",
      type: "planting",
      description: "Mettre en pot les bulbes pour forçage hivernal.",
      priority: "low",
    },
    {
      month: 12,
      title: "Protéger les persistants",
      date: "12-15",
      type: "maintenance",
      description: "Protéger les plantes persistantes du soleil hivernal.",
      priority: "high",
    },
    {
      month: 12,
      title: "Planifier la saison suivante",
      date: "12-25",
      type: "maintenance",
      description: "Commander les graines et planifier les aménagements pour l'année suivante.",
      priority: "low",
    },
  ],
};

// Template for Vegetable and Fruit Garden (Potager et verger)
export const VEGETABLE_FRUIT_GARDEN_TEMPLATE_FR = {
  name: "Plan annuel du potager et verger",
  description: "Calendrier complet pour le potager et le verger",
  category: GARDEN_TEMPLATE_CATEGORIES_FR.VEGETABLE_FRUIT,
  region: "temperate_north",
  tasks: [
    // Janvier
    {
      month: 1,
      title: "Tailler les fruitiers",
      date: "01-15",
      type: "pruning",
      description: "Tailler les arbres fruitiers à pépins par temps sec.",
      priority: "high",
    },
    {
      month: 1,
      title: "Forcer les endives",
      date: "01-20",
      type: "planting",
      description: "Forcer les racines d'endives en cave pour récolte hivernale.",
      priority: "medium",
    },
    {
      month: 1,
      title: "Planifier les cultures",
      date: "01-25",
      type: "maintenance",
      description: "Planifier l'assolement et commander les graines.",
      priority: "high",
    },

    // Février
    {
      month: 2,
      title: "Préparer les semis",
      date: "02-01",
      type: "maintenance",
      description: "Préparer le matériel de semis et les godets.",
      priority: "medium",
    },
    {
      month: 2,
      title: "Semer sous abri",
      date: "02-15",
      type: "planting",
      description: "Premiers semis sous abri : radis, laitue, épinards.",
      priority: "high",
    },
    {
      month: 2,
      title: "Tailler les framboisiers",
      date: "02-25",
      type: "pruning",
      description: "Tailler les framboisiers remontants et non-remontants.",
      priority: "medium",
    },

    // Mars
    {
      month: 3,
      title: "Semer les légumes primeurs",
      date: "03-01",
      type: "planting",
      description: "Semer carottes, panais, petits pois sous tunnel.",
      priority: "high",
    },
    {
      month: 3,
      title: "Planter l'ail et l'échalote",
      date: "03-15",
      type: "planting",
      description: "Planter l'ail rose et les échalotes.",
      priority: "medium",
    },
    {
      month: 3,
      title: "Préparer le sol",
      date: "03-25",
      type: "maintenance",
      description: "Bêcher et enrichir le sol du potager.",
      priority: "high",
    },

    // Avril
    {
      month: 4,
      title: "Semer en pleine terre",
      date: "04-01",
      type: "planting",
      description: "Semer radis, épinards, laitue directement au potager.",
      priority: "high",
    },
    {
      month: 4,
      title: "Planter les pommes de terre",
      date: "04-15",
      type: "planting",
      description: "Planter les pommes de terre primeurs.",
      priority: "high",
    },
    {
      month: 4,
      title: "Semer les aromatiques",
      date: "04-25",
      type: "planting",
      description: "Semer persil, ciboulette, cerfeuil.",
      priority: "medium",
    },

    // Mai
    {
      month: 5,
      title: "Repiquer les plants",
      date: "05-01",
      type: "planting",
      description: "Repiquer les plants de tomates, courgettes, aubergines.",
      priority: "high",
    },
    {
      month: 5,
      title: "Semer les légumes d'été",
      date: "05-15",
      type: "planting",
      description: "Après les Saints de Glace, semer haricots, concombres.",
      priority: "high",
    },
    {
      month: 5,
      title: "Pailler le potager",
      date: "05-25",
      type: "maintenance",
      description: "Pailler autour des plants pour conserver l'humidité.",
      priority: "medium",
    },

    // Juin
    {
      month: 6,
      title: "Tuteurer les tomates",
      date: "06-01",
      type: "maintenance",
      description: "Installer les tuteurs et attacher les plants de tomates.",
      priority: "high",
    },
    {
      month: 6,
      title: "Récolter les premiers légumes",
      date: "06-15",
      type: "harvesting",
      description: "Première récolte de radis, laitue, petits pois.",
      priority: "medium",
    },
    {
      month: 6,
      title: "Éclaircir les semis",
      date: "06-20",
      type: "maintenance",
      description: "Éclaircir les semis de carottes, betteraves, navets.",
      priority: "medium",
    },

    // Juillet
    {
      month: 7,
      title: "Récolte d'été",
      date: "07-01",
      type: "harvesting",
      description: "Récolter courgettes, tomates, haricots verts.",
      priority: "high",
    },
    {
      month: 7,
      title: "Arroser régulièrement",
      date: "07-15",
      type: "watering",
      description: "Arroser copieusement le potager, de préférence le soir.",
      priority: "high",
    },
    {
      month: 7,
      title: "Semer les légumes d'automne",
      date: "07-25",
      type: "planting",
      description: "Semer choux, navets, radis d'hiver.",
      priority: "medium",
    },

    // Août
    {
      month: 8,
      title: "Grande récolte",
      date: "08-01",
      type: "harvesting",
      description: "Période de grande récolte : tomates, aubergines, poivrons.",
      priority: "high",
    },
    {
      month: 8,
      title: "Semer la mâche",
      date: "08-15",
      type: "planting",
      description: "Semer la mâche pour récolte automnale et hivernale.",
      priority: "medium",
    },
    {
      month: 8,
      title: "Récolter et conserver",
      date: "08-25",
      type: "harvesting",
      description: "Récolter et mettre en conserve les excédents.",
      priority: "medium",
    },

    // Septembre
    {
      month: 9,
      title: "Récolter les fruits",
      date: "09-01",
      type: "harvesting",
      description: "Récolte des pommes, poires, prunes.",
      priority: "high",
    },
    {
      month: 9,
      title: "Semer les épinards",
      date: "09-15",
      type: "planting",
      description: "Semer les épinards d'hiver.",
      priority: "medium",
    },
    {
      month: 9,
      title: "Planter les fraisiers",
      date: "09-25",
      type: "planting",
      description: "Planter les nouveaux fraisiers.",
      priority: "medium",
    },

    // Octobre
    {
      month: 10,
      title: "Récolter les légumes racines",
      date: "10-01",
      type: "harvesting",
      description: "Récolter carottes, betteraves, navets avant les gelées.",
      priority: "high",
    },
    {
      month: 10,
      title: "Planter l'ail d'hiver",
      date: "10-15",
      type: "planting",
      description: "Planter l'ail violet pour récolte estivale.",
      priority: "medium",
    },
    {
      month: 10,
      title: "Protéger les cultures",
      date: "10-25",
      type: "maintenance",
      description: "Installer les protections hivernales sur les cultures sensibles.",
      priority: "medium",
    },

    // Novembre
    {
      month: 11,
      title: "Nettoyer le potager",
      date: "11-01",
      type: "maintenance",
      description: "Nettoyer les parcelles libres et les mettre au repos.",
      priority: "high",
    },
    {
      month: 11,
      title: "Récolter les légumes d'hiver",
      date: "11-15",
      type: "harvesting",
      description: "Récolter poireaux, choux, épinards.",
      priority: "medium",
    },
    {
      month: 11,
      title: "Pailler les cultures",
      date: "11-25",
      type: "maintenance",
      description: "Pailler les cultures d'hiver pour les protéger du froid.",
      priority: "medium",
    },

    // Décembre
    {
      month: 12,
      title: "Forcer la rhubarbe",
      date: "12-01",
      type: "maintenance",
      description: "Couvrir la rhubarbe pour forcer les jeunes pousses.",
      priority: "low",
    },
    {
      month: 12,
      title: "Récolter les légumes d'hiver",
      date: "12-15",
      type: "harvesting",
      description: "Continuer la récolte des légumes d'hiver selon les besoins.",
      priority: "medium",
    },
    {
      month: 12,
      title: "Planifier l'année suivante",
      date: "12-25",
      type: "maintenance",
      description: "Établir le plan de culture pour l'année suivante.",
      priority: "low",
    },
  ],
};

// Template for Herb Garden (Jardin d'herbes aromatiques)
export const HERB_GARDEN_TEMPLATE_FR = {
  name: "Plan annuel du jardin d'herbes aromatiques",
  description: "Calendrier spécialisé pour la culture des herbes aromatiques",
  category: GARDEN_TEMPLATE_CATEGORIES_FR.HERB_GARDEN,
  region: "temperate_north",
  tasks: [
    // Mars
    {
      month: 3,
      title: "Tailler les aromatiques vivaces",
      date: "03-15",
      type: "pruning",
      description: "Tailler thym, romarin, sauge, origan.",
      priority: "high",
    },
    {
      month: 3,
      title: "Semer le persil",
      date: "03-25",
      type: "planting",
      description: "Semer le persil plat et frisé sous abri.",
      priority: "medium",
    },

    // Avril
    {
      month: 4,
      title: "Diviser la ciboulette",
      date: "04-01",
      type: "maintenance",
      description: "Diviser les touffes de ciboulette.",
      priority: "medium",
    },
    {
      month: 4,
      title: "Semer la coriandre",
      date: "04-15",
      type: "planting",
      description: "Semer la coriandre en pleine terre.",
      priority: "low",
    },

    // Mai
    {
      month: 5,
      title: "Planter le basilic",
      date: "05-15",
      type: "planting",
      description: "Après les Saints de Glace, planter le basilic.",
      priority: "high",
    },
    {
      month: 5,
      title: "Repiquer les aromatiques",
      date: "05-20",
      type: "planting",
      description: "Repiquer romarin, thym, origan en pleine terre.",
      priority: "medium",
    },

    // Juin - Août
    {
      month: 6,
      title: "Récolter et sécher",
      date: "06-01",
      type: "harvesting",
      description: "Commencer la récolte régulière pour usage frais et séchage.",
      priority: "high",
    },
    {
      month: 7,
      title: "Pincer les fleurs",
      date: "07-15",
      type: "maintenance",
      description: "Pincer les fleurs du basilic pour favoriser les feuilles.",
      priority: "medium",
    },

    // Septembre
    {
      month: 9,
      title: "Grande récolte",
      date: "09-01",
      type: "harvesting",
      description: "Grande récolte pour constituer les réserves d'hiver.",
      priority: "high",
    },

    // Octobre
    {
      month: 10,
      title: "Protéger du froid",
      date: "10-15",
      type: "maintenance",
      description: "Protéger les aromatiques fragiles du froid.",
      priority: "medium",
    },
  ],
};

// Template for Balcony & Terrace (Balcon et terrasse)
export const BALCONY_TERRACE_TEMPLATE_FR = {
  name: "Plan annuel balcon et terrasse",
  description: "Calendrier spécialisé pour le jardinage en balcon et terrasse",
  category: GARDEN_TEMPLATE_CATEGORIES_FR.BALCONY_TERRACE,
  region: "temperate_north",
  tasks: [
    // Février
    {
      month: 2,
      title: "Vérifier les protections",
      date: "02-01",
      type: "maintenance",
      description: "Contrôler les protections hivernales des plantes en pot.",
      priority: "medium",
    },
    {
      month: 2,
      title: "Nettoyer les contenants",
      date: "02-15",
      type: "maintenance",
      description: "Nettoyer jardinières et pots pour la nouvelle saison.",
      priority: "medium",
    },

    // Mars
    {
      month: 3,
      title: "Grand nettoyage",
      date: "03-01",
      type: "maintenance",
      description: "Nettoyer balcon et terrasse, vérifier le mobilier.",
      priority: "high",
    },
    {
      month: 3,
      title: "Rempoter",
      date: "03-15",
      type: "maintenance",
      description: "Rempoter les plantes en pot dans du terreau frais.",
      priority: "high",
    },
    {
      month: 3,
      title: "Premiers semis",
      date: "03-25",
      type: "planting",
      description: "Semer radis, laitue, aromatiques en jardinières.",
      priority: "high",
    },

    // Avril
    {
      month: 4,
      title: "Planter les premières fleurs",
      date: "04-01",
      type: "planting",
      description: "Planter pensées, primevères, pâquerettes.",
      priority: "high",
    },
    {
      month: 4,
      title: "Installer l'arrosage",
      date: "04-15",
      type: "maintenance",
      description: "Mettre en place le système d'arrosage automatique.",
      priority: "medium",
    },

    // Mai
    {
      month: 5,
      title: "Plantation d'été",
      date: "05-15",
      type: "planting",
      description: "Après les Saints de Glace, planter géraniums, pétunias.",
      priority: "high",
    },
    {
      month: 5,
      title: "Planter les légumes",
      date: "05-20",
      type: "planting",
      description: "Planter tomates cerises, courgettes, poivrons en gros pots.",
      priority: "high",
    },

    // Juin
    {
      month: 6,
      title: "Arroser quotidiennement",
      date: "06-01",
      type: "watering",
      description: "Commencer les arrosages quotidiens par temps chaud.",
      priority: "high",
    },
    {
      month: 6,
      title: "Fertiliser",
      date: "06-15",
      type: "fertilizing",
      description: "Apporter de l'engrais liquide aux plantes en pot.",
      priority: "medium",
    },

    // Juillet
    {
      month: 7,
      title: "Installer des ombrages",
      date: "07-01",
      type: "maintenance",
      description: "Protéger les plantes sensibles du soleil intense.",
      priority: "high",
    },
    {
      month: 7,
      title: "Récolter les aromatiques",
      date: "07-15",
      type: "harvesting",
      description: "Récolter basilic, persil, ciboulette régulièrement.",
      priority: "medium",
    },

    // Août
    {
      month: 8,
      title: "Récolter les légumes",
      date: "08-01",
      type: "harvesting",
      description: "Récolter tomates cerises, courgettes, radis.",
      priority: "high",
    },
    {
      month: 8,
      title: "Arroser deux fois par jour",
      date: "08-15",
      type: "watering",
      description: "Par forte chaleur, arroser matin et soir.",
      priority: "high",
    },

    // Septembre
    {
      month: 9,
      title: "Planter les bulbes",
      date: "09-15",
      type: "planting",
      description: "Planter bulbes de printemps en jardinières.",
      priority: "medium",
    },
    {
      month: 9,
      title: "Réduire l'arrosage",
      date: "09-25",
      type: "watering",
      description: "Adapter l'arrosage aux températures plus fraîches.",
      priority: "medium",
    },

    // Octobre
    {
      month: 10,
      title: "Protéger du froid",
      date: "10-01",
      type: "maintenance",
      description: "Protéger les pots avec du voile d'hivernage.",
      priority: "high",
    },
    {
      month: 10,
      title: "Dernière récolte",
      date: "10-15",
      type: "harvesting",
      description: "Récolter les derniers légumes avant les gelées.",
      priority: "medium",
    },

    // Novembre
    {
      month: 11,
      title: "Rentrer les plantes fragiles",
      date: "11-01",
      type: "maintenance",
      description: "Rentrer géraniums et autres plantes non rustiques.",
      priority: "high",
    },
    {
      month: 11,
      title: "Ranger le matériel",
      date: "11-15",
      type: "maintenance",
      description: "Ranger mobilier et accessoires sensibles au gel.",
      priority: "medium",
    },

    // Décembre
    {
      month: 12,
      title: "Décoration hivernale",
      date: "12-01",
      type: "maintenance",
      description: "Installer décorations de Noël et éclairages.",
      priority: "low",
    },
    {
      month: 12,
      title: "Surveiller les plantes hivernées",
      date: "12-15",
      type: "maintenance",
      description: "Contrôler l'état des plantes stockées à l'abri.",
      priority: "medium",
    },
  ],
};

// Complete Garden Template (Jardin complet)
export const COMPLETE_GARDEN_TEMPLATE_FR = {
  name: "Plan annuel du jardin complet",
  description: "Calendrier complet pour tous les espaces du jardin : ornement, potager, aromatiques",
  category: GARDEN_TEMPLATE_CATEGORIES_FR.COMPLETE_GARDEN,
  region: "temperate_north",
  tasks: [
    // Janvier
    {
      month: 1,
      title: "Tailler les fruitiers",
      date: "01-15",
      type: "pruning",
      description: "Tailler arbres fruitiers à pépins par temps sec.",
      priority: "high",
    },
    {
      month: 1,
      title: "Planifier la saison",
      date: "01-25",
      type: "maintenance",
      description: "Commander graines et plants, planifier les cultures.",
      priority: "medium",
    },

    // Février
    {
      month: 2,
      title: "Tailler les rosiers",
      date: "02-15",
      type: "pruning",
      description: "Effectuer la taille de fin d'hiver des rosiers.",
      priority: "high",
    },
    {
      month: 2,
      title: "Premiers semis",
      date: "02-25",
      type: "planting",
      description: "Semer sous abri les premiers légumes et fleurs.",
      priority: "high",
    },

    // Mars
    {
      month: 3,
      title: "Préparer le sol",
      date: "03-01",
      type: "maintenance",
      description: "Bêcher et enrichir massifs et potager.",
      priority: "high",
    },
    {
      month: 3,
      title: "Semer et planter",
      date: "03-15",
      type: "planting",
      description: "Semer légumes primeurs, planter ail et échalotes.",
      priority: "high",
    },
    {
      month: 3,
      title: "Tailler les aromatiques",
      date: "03-25",
      type: "pruning",
      description: "Tailler thym, romarin, sauge.",
      priority: "medium",
    },

    // Avril
    {
      month: 4,
      title: "Grandes plantations",
      date: "04-01",
      type: "planting",
      description: "Planter pommes de terre, semer en pleine terre.",
      priority: "high",
    },
    {
      month: 4,
      title: "Entretien des massifs",
      date: "04-15",
      type: "maintenance",
      description: "Fertiliser, diviser les vivaces, semer pelouse.",
      priority: "high",
    },

    // Mai
    {
      month: 5,
      title: "Plantation après Saints de Glace",
      date: "05-15",
      type: "planting",
      description: "Planter légumes et fleurs sensibles au froid.",
      priority: "high",
    },
    {
      month: 5,
      title: "Pailler et arroser",
      date: "05-25",
      type: "maintenance",
      description: "Pailler massifs et potager, commencer arrosages.",
      priority: "high",
    },

    // Juin
    {
      month: 6,
      title: "Entretien intensif",
      date: "06-01",
      type: "maintenance",
      description: "Tuteurer, arroser, supprimer fleurs fanées.",
      priority: "high",
    },
    {
      month: 6,
      title: "Premières récoltes",
      date: "06-15",
      type: "harvesting",
      description: "Récolter premiers légumes et herbes aromatiques.",
      priority: "medium",
    },

    // Juillet
    {
      month: 7,
      title: "Arrosage et récolte",
      date: "07-01",
      type: "watering",
      description: "Arrosages intensifs, récolte d'été.",
      priority: "high",
    },
    {
      month: 7,
      title: "Taille d'été",
      date: "07-15",
      type: "pruning",
      description: "Tailler haies, pincer les aromatiques.",
      priority: "medium",
    },

    // Août
    {
      month: 8,
      title: "Grande récolte",
      date: "08-01",
      type: "harvesting",
      description: "Récolte intensive légumes et fruits.",
      priority: "high",
    },
    {
      month: 8,
      title: "Semis d'automne",
      date: "08-15",
      type: "planting",
      description: "Semer légumes d'automne et bisannuelles.",
      priority: "medium",
    },

    // Septembre
    {
      month: 9,
      title: "Rénovation pelouse",
      date: "09-01",
      type: "maintenance",
      description: "Scarifier et regarnir la pelouse.",
      priority: "high",
    },
    {
      month: 9,
      title: "Plantation bulbes",
      date: "09-15",
      type: "planting",
      description: "Planter bulbes de printemps.",
      priority: "high",
    },

    // Octobre
    {
      month: 10,
      title: "Récolte d'automne",
      date: "10-01",
      type: "harvesting",
      description: "Récolter fruits et légumes d'automne.",
      priority: "high",
    },
    {
      month: 10,
      title: "Plantations d'automne",
      date: "10-15",
      type: "planting",
      description: "Planter arbres, arbustes, rosiers.",
      priority: "high",
    },

    // Novembre
    {
      month: 11,
      title: "Préparation hivernale",
      date: "11-01",
      type: "maintenance",
      description: "Nettoyer, protéger, rentrer plantes fragiles.",
      priority: "high",
    },
    {
      month: 11,
      title: "Dernières plantations",
      date: "11-15",
      type: "planting",
      description: "Dernières plantations avant l'hiver.",
      priority: "medium",
    },

    // Décembre
    {
      month: 12,
      title: "Protection hivernale",
      date: "12-01",
      type: "maintenance",
      description: "Renforcer protections, surveiller plantes.",
      priority: "high",
    },
    {
      month: 12,
      title: "Planification",
      date: "12-25",
      type: "maintenance",
      description: "Planifier et commander pour l'année suivante.",
      priority: "low",
    },
  ],
};

// Function to export all French templates
export function getAvailableTemplatesFr() {
  return [
    ORNAMENTAL_GARDEN_TEMPLATE_FR,
    VEGETABLE_FRUIT_GARDEN_TEMPLATE_FR,
    HERB_GARDEN_TEMPLATE_FR,
    BALCONY_TERRACE_TEMPLATE_FR,
    COMPLETE_GARDEN_TEMPLATE_FR,
  ];
}
