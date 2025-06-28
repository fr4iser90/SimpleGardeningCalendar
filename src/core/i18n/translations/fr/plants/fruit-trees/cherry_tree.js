export default {
  name: "Cerisier",
  category: "category.fruit_trees",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    outdoor: {
      phases: {
        establishment: {
          name: "Établissement",
          description: "Première année établissement",
          care: "Arrosage régulier, protection contre les oiseaux",
        },
        juvenile: {
          name: "Phase Juvénile",
          description: "Années 2-4 développement",
          care: "Taille de formation, prévention des maladies",
        },
        productive: {
          name: "Phase Productive",
          description: "Années productives 5-20",
          care: "Timing de récolte, protection contre les oiseaux, gestion des maladies",
        },
        dormancy: {
          name: "Dormance",
          description: "Repos hivernal",
          care: "Taille d'hiver, protection du tronc",
        },
      },
      seasonalTiming: {
        temperate_north: {
          plantingWindow: {
            start: '03-01',
            end: '04-15',
            description: 'Plantation au début du printemps',
          },
          harvestWindow: {
            start: '06-01',
            end: '08-15',
            description: 'Récolte au début de l\'été',
          },
          pruningWindow: {
            start: '02-01',
            end: '03-15',
            description: 'Taille de fin d\'hiver',
          },
        },
        mediterranean: {
          plantingWindow: {
            start: '01-15',
            end: '03-15',
            description: 'Plantation très tôt au printemps',
          },
          harvestWindow: {
            start: '05-01',
            end: '07-31',
            description: 'Récolte avant la chaleur estivale',
          },
        },
      },
    },
  },
  careTips: {
    watering: "Arrosage régulier mais éviter l'engorgement, bon drainage important",
    fertilizing: "Fertilisation annuelle légère, faible azote",
    sunlight: "Plein soleil",
    spacing: "6-8 m pour cerises douces, 4-6 m pour cerises acides",
    pruning: "Taille minimale, tailler fin d'hiver",
    pollination: "Cerises douces principalement pollinisation croisée",
    birdProtection: "Filets ou autres protections contre les oiseaux pendant la récolte",
  },
  commonProblems: {
    "Pourriture Brune": "Pourriture des fruits - enlever fruits infectés, améliorer circulation d'air",
    "Mouche de la Cerise": "Asticots dans les fruits - pièges jaunes, timing d'application ciblé",
    "Chancre Bactérien": "Maladie du tronc/branches - éviter dommages hivernaux, taille appropriée",
    "Oiseaux": "Perte de fruits - filets, épouvantails, récolte précoce",
  },
};
