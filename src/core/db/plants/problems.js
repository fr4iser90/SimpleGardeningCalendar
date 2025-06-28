/**
 * Centralized Plant Problems System
 * Common problems that can be reused across different plant types
 */

// Common problems that appear across multiple plant types
export const COMMON_PROBLEMS = {
  // Watering and soil issues
  rootRot: {
    name: 'problems.common.rootRot.name',
    description: 'problems.common.rootRot.description',
    solutions: 'problems.common.rootRot.solutions',
  },
  overwatering: {
    name: 'problems.common.overwatering.name',
    description: 'problems.common.overwatering.description',
    solutions: 'problems.common.overwatering.solutions',
  },
  underwatering: {
    name: 'problems.common.underwatering.name',
    description: 'problems.common.underwatering.description',
    solutions: 'problems.common.underwatering.solutions',
  },
  
  // Light and growth issues
  leggyGrowth: {
    name: 'problems.common.leggyGrowth.name',
    description: 'problems.common.leggyGrowth.description',
    solutions: 'problems.common.leggyGrowth.solutions',
  },
  insufficientLight: {
    name: 'problems.common.insufficientLight.name',
    description: 'problems.common.insufficientLight.description',
    solutions: 'problems.common.insufficientLight.solutions',
  },
  
  // Nutrient issues
  nutrientBurn: {
    name: 'problems.common.nutrientBurn.name',
    description: 'problems.common.nutrientBurn.description',
    solutions: 'problems.common.nutrientBurn.solutions',
  },
  ironDeficiency: {
    name: 'problems.common.ironDeficiency.name',
    description: 'problems.common.ironDeficiency.description',
    solutions: 'problems.common.ironDeficiency.solutions',
  },
  
  // Disease issues
  powderyMildew: {
    name: 'problems.common.powderyMildew.name',
    description: 'problems.common.powderyMildew.description',
    solutions: 'problems.common.powderyMildew.solutions',
  },
  grayMold: {
    name: 'problems.common.grayMold.name',
    description: 'problems.common.grayMold.description',
    solutions: 'problems.common.grayMold.solutions',
  },
  
  // Pest issues
  spiderMites: {
    name: 'problems.common.spiderMites.name',
    description: 'problems.common.spiderMites.description',
    solutions: 'problems.common.spiderMites.solutions',
  },
  aphids: {
    name: 'problems.common.aphids.name',
    description: 'problems.common.aphids.description',
    solutions: 'problems.common.aphids.solutions',
  },
  slugs: {
    name: 'problems.common.slugs.name',
    description: 'problems.common.slugs.description',
    solutions: 'problems.common.slugs.solutions',
  },
  birds: {
    name: 'problems.common.birds.name',
    description: 'problems.common.birds.description',
    solutions: 'problems.common.birds.solutions',
  },
  
  // Environmental issues
  winterDamage: {
    name: 'problems.common.winterDamage.name',
    description: 'problems.common.winterDamage.description',
    solutions: 'problems.common.winterDamage.solutions',
  },
  frostDamage: {
    name: 'problems.common.frostDamage.name',
    description: 'problems.common.frostDamage.description',
    solutions: 'problems.common.frostDamage.solutions',
  },
  heatStress: {
    name: 'problems.common.heatStress.name',
    description: 'problems.common.heatStress.description',
    solutions: 'problems.common.heatStress.solutions',
  },
};

// Herb-specific problems
export const HERB_PROBLEMS = {
  ...COMMON_PROBLEMS,
  bolting: {
    name: 'problems.herbs.bolting.name',
    description: 'problems.herbs.bolting.description',
    solutions: 'problems.herbs.bolting.solutions',
  },
  leafSpot: {
    name: 'problems.herbs.leafSpot.name',
    description: 'problems.herbs.leafSpot.description',
    solutions: 'problems.herbs.leafSpot.solutions',
  },
  slowGermination: {
    name: 'problems.herbs.slowGermination.name',
    description: 'problems.herbs.slowGermination.description',
    solutions: 'problems.herbs.slowGermination.solutions',
  },
  rustDisease: {
    name: 'problems.herbs.rustDisease.name',
    description: 'problems.herbs.rustDisease.description',
    solutions: 'problems.herbs.rustDisease.solutions',
  },
  invasiveGrowth: {
    name: 'problems.herbs.invasiveGrowth.name',
    description: 'problems.herbs.invasiveGrowth.description',
    solutions: 'problems.herbs.invasiveGrowth.solutions',
  },
  fusariumWilt: {
    name: 'problems.herbs.fusariumWilt.name',
    description: 'problems.herbs.fusariumWilt.description',
    solutions: 'problems.herbs.fusariumWilt.solutions',
  },
};

// Cannabis-specific problems
export const CANNABIS_PROBLEMS = {
  ...COMMON_PROBLEMS,
  stuntedGrowth: {
    name: 'problems.cannabis.stuntedGrowth.name',
    description: 'problems.cannabis.stuntedGrowth.description',
    solutions: 'problems.cannabis.stuntedGrowth.solutions',
  },
  shortCycle: {
    name: 'problems.cannabis.shortCycle.name',
    description: 'problems.cannabis.shortCycle.description',
    solutions: 'problems.cannabis.shortCycle.solutions',
  },
  hermaphroditism: {
    name: 'problems.cannabis.hermaphroditism.name',
    description: 'problems.cannabis.hermaphroditism.description',
    solutions: 'problems.cannabis.hermaphroditism.solutions',
  },
  lightLeak: {
    name: 'problems.cannabis.lightLeak.name',
    description: 'problems.cannabis.lightLeak.description',
    solutions: 'problems.cannabis.lightLeak.solutions',
  },
};

// Fruit-specific problems
export const FRUIT_PROBLEMS = {
  ...COMMON_PROBLEMS,
  caneBorers: {
    name: 'problems.fruits.caneBorers.name',
    description: 'problems.fruits.caneBorers.description',
    solutions: 'problems.fruits.caneBorers.solutions',
  },
  fruitWorm: {
    name: 'problems.fruits.fruitWorm.name',
    description: 'problems.fruits.fruitWorm.description',
    solutions: 'problems.fruits.fruitWorm.solutions',
  },
  blossomEndRot: {
    name: 'problems.fruits.blossomEndRot.name',
    description: 'problems.fruits.blossomEndRot.description',
    solutions: 'problems.fruits.blossomEndRot.solutions',
  },
  sunscald: {
    name: 'problems.fruits.sunscald.name',
    description: 'problems.fruits.sunscald.description',
    solutions: 'problems.fruits.sunscald.solutions',
  },
};

// Vegetable-specific problems
export const VEGETABLE_PROBLEMS = {
  ...COMMON_PROBLEMS,
  forking: {
    name: 'problems.vegetables.forking.name',
    description: 'problems.vegetables.forking.description',
    solutions: 'problems.vegetables.forking.solutions',
  },
  bitterTaste: {
    name: 'problems.vegetables.bitterTaste.name',
    description: 'problems.vegetables.bitterTaste.description',
    solutions: 'problems.vegetables.bitterTaste.solutions',
  },
  shortRoots: {
    name: 'problems.vegetables.shortRoots.name',
    description: 'problems.vegetables.shortRoots.description',
    solutions: 'problems.vegetables.shortRoots.solutions',
  },
  carrotFly: {
    name: 'problems.vegetables.carrotFly.name',
    description: 'problems.vegetables.carrotFly.description',
    solutions: 'problems.vegetables.carrotFly.solutions',
  },
  blossomDrop: {
    name: 'problems.vegetables.blossomDrop.name',
    description: 'problems.vegetables.blossomDrop.description',
    solutions: 'problems.vegetables.blossomDrop.solutions',
  },
  cracking: {
    name: 'problems.vegetables.cracking.name',
    description: 'problems.vegetables.cracking.description',
    solutions: 'problems.vegetables.cracking.solutions',
  },
  downyMildew: {
    name: 'problems.vegetables.downyMildew.name',
    description: 'problems.vegetables.downyMildew.description',
    solutions: 'problems.vegetables.downyMildew.solutions',
  },
  blight: {
    name: 'problems.vegetables.blight.name',
    description: 'problems.vegetables.blight.description',
    solutions: 'problems.vegetables.blight.solutions',
  },
  lateBlight: {
    name: 'problems.vegetables.lateBlight.name',
    description: 'problems.vegetables.lateBlight.description',
    solutions: 'problems.vegetables.lateBlight.solutions',
  },
  scab: {
    name: 'problems.vegetables.scab.name',
    description: 'problems.vegetables.scab.description',
    solutions: 'problems.vegetables.scab.solutions',
  },
  wireworm: {
    name: 'problems.vegetables.wireworm.name',
    description: 'problems.vegetables.wireworm.description',
    solutions: 'problems.vegetables.wireworm.solutions',
  },
  cucumberBeetle: {
    name: 'problems.vegetables.cucumberBeetle.name',
    description: 'problems.vegetables.cucumberBeetle.description',
    solutions: 'problems.vegetables.cucumberBeetle.solutions',
  },
  leafMiner: {
    name: 'problems.vegetables.leafMiner.name',
    description: 'problems.vegetables.leafMiner.description',
    solutions: 'problems.vegetables.leafMiner.solutions',
  },
  cabbageWorm: {
    name: 'problems.vegetables.cabbageWorm.name',
    description: 'problems.vegetables.cabbageWorm.description',
    solutions: 'problems.vegetables.cabbageWorm.solutions',
  },
};

// Flower-specific problems
export const FLOWER_PROBLEMS = {
  ...COMMON_PROBLEMS,
  budRot: {
    name: 'problems.flowers.budRot.name',
    description: 'problems.flowers.budRot.description',
    solutions: 'problems.flowers.budRot.solutions',
  },
  petalBlast: {
    name: 'problems.flowers.petalBlast.name',
    description: 'problems.flowers.petalBlast.description',
    solutions: 'problems.flowers.petalBlast.solutions',
  },
  thrips: {
    name: 'problems.flowers.thrips.name',
    description: 'problems.flowers.thrips.description',
    solutions: 'problems.flowers.thrips.solutions',
  },
  blackSpot: {
    name: 'problems.flowers.blackSpot.name',
    description: 'problems.flowers.blackSpot.description',
    solutions: 'problems.flowers.blackSpot.solutions',
  },
  sclerotinia: {
    name: 'problems.flowers.sclerotinia.name',
    description: 'problems.flowers.sclerotinia.description',
    solutions: 'problems.flowers.sclerotinia.solutions',
  },
};

// Helper function to get problems by category
export const getProblemsByCategory = (category) => {
  switch (category) {
    case 'herbs':
      return HERB_PROBLEMS;
    case 'cannabis':
      return CANNABIS_PROBLEMS;
    case 'fruits':
      return FRUIT_PROBLEMS;
    case 'vegetables':
      return VEGETABLE_PROBLEMS;
    case 'flowers':
      return FLOWER_PROBLEMS;
    default:
      return COMMON_PROBLEMS;
  }
};

// Helper function to create problem references
export const createProblemRefs = (problemKeys, category = 'common') => {
  const problems = getProblemsByCategory(category);
  const refs = {};
  
  problemKeys.forEach(key => {
    if (problems[key]) {
      refs[problems[key].name] = problems[key].description;
    }
  });
  
  return refs;
};

export default {
  COMMON_PROBLEMS,
  HERB_PROBLEMS,
  CANNABIS_PROBLEMS,
  FRUIT_PROBLEMS,
  VEGETABLE_PROBLEMS,
  FLOWER_PROBLEMS,
  getProblemsByCategory,
  createProblemRefs,
};
