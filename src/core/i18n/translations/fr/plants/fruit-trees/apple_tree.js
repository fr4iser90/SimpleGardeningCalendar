export default {
  name: "Pommier",
  category: "category.fruit_trees",
  tags: ["tag.perennial"],
  legalNote: "",
  environments: {
    outdoor: {
      phases: {
        establishment: {
          name: "Établissement",
          description: "Première année développement racinaire",
          care: "Arrosage régulier, désherbage, taille légère",
        },
        juvenile: {
          name: "Phase Juvénile",
          description: "Années 2-3 croissance",
          care: "Taille de formation, soins continus, pas encore de fruits",
        },
        productive: {
          name: "Phase Productive",
          description: "Années productives 4-20+",
          care: "Taille annuelle, contrôle des ravageurs, timing de récolte",
        },
        dormancy: {
          name: "Dormance",
          description: "Repos hivernal",
          care: "Taille d'hiver, huile dormante contre les ravageurs",
        },
      },
    },
  },
  careTips: {
    watering: "Arrosage profond hebdomadaire, 2-5 cm par semaine pendant la saison",
    fertilizing: "Fertilisation annuelle au printemps, faible azote en automne",
    sunlight: "Plein soleil, au moins 6 heures par jour",
    spacing: "Espacement 4-6 m pour grands arbres, 2-3 m pour formes naines",
    pruning: "Taille hivernale annuelle pour forme et santé",
    pollination: "Pollinisation croisée nécessaire avec autres variétés de pommes",
    soilPH: "6,0-7,0",
  },
  commonProblems: {
    "Tavelure": "Maladie fongique - choisir variétés résistantes, améliorer circulation d'air",
    "Carpocapse": "Ver dans la pomme - pièges à phéromones, timing d'application ciblé",
    "Feu bactérien": "Maladie bactérienne - enlever pousses infectées, faible azote",
    "Alternance": "Années de récolte alternées - éclaircir les années fortes",
  },
};
