/**
 * Plant Categories Definition
 * Defines all available plant categories and their metadata
 */

export const PLANT_CATEGORIES = {
  VEGETABLES: 'Vegetables',
  HERBS: 'Herbs',
  FRUITS: 'Fruits',
  FRUIT_TREES: 'Fruit Trees',
  FLOWERS: 'Flowers',
};

export const PLANT_TAGS = {
  ROOT: 'Root Vegetable',
  LEAFY: 'Leafy Green',
  LEGUME: 'Legume',
  SPRING: 'Spring',
  SUMMER: 'Summer',
  FALL: 'Fall',
  WINTER: 'Winter',
  PERENNIAL: 'Perennial',
  ANNUAL: 'Annual',
  BIENNIAL: 'Biennial',
  CANNABIS: 'Cannabis', // Optional, länderabhängig
};

export const CATEGORY_METADATA = {
  [PLANT_CATEGORIES.VEGETABLES]: {
    name: 'Vegetables',
    description: 'Common garden vegetables for food production',
    icon: '🥕',
    color: '#F59E0B',
  },
  [PLANT_CATEGORIES.HERBS]: {
    name: 'Herbs',
    description: 'Culinary and medicinal herbs',
    icon: '🌱',
    color: '#10B981',
  },
  [PLANT_CATEGORIES.FRUITS]: {
    name: 'Fruits',
    description: 'Small fruit plants and berry bushes',
    icon: '🍓',
    color: '#EF4444',
  },
  [PLANT_CATEGORIES.FRUIT_TREES]: {
    name: 'Fruit Trees',
    description: 'Larger fruit-bearing trees',
    icon: '🍎',
    color: '#DC2626',
  },
  [PLANT_CATEGORIES.FLOWERS]: {
    name: 'Flowers',
    description: 'Ornamental flowers and decorative plants',
    icon: '🌸',
    color: '#EC4899',
  },
};

// Country-specific settings for cannabis display
export const COUNTRY_SETTINGS = {
  DE: {
    showCannabis: true,
    cannabisInfo:
      'Legal for personal use (up to 3 plants, 25g possession) since 2024. Medical cannabis legal since 2017.',
  },
  AT: {
    showCannabis: false,
    cannabisInfo:
      'Illegal for recreational use. Medical cannabis available with prescription since 2008.',
  },
  CH: {
    showCannabis: true,
    cannabisInfo:
      'Decriminalized (up to 10g). Medical cannabis legal. Several cities allow regulated sales.',
  },
  NL: {
    showCannabis: true,
    cannabisInfo:
      'Decriminalized for personal use. Coffee shops allowed to sell small amounts. Medical cannabis legal.',
  },
  CA: {
    showCannabis: true,
    cannabisInfo:
      'Fully legal for recreational and medical use since 2018. Adults can grow up to 4 plants.',
  },
  US: {
    showCannabis: false,
    cannabisInfo:
      'Federal illegal, but legal in 24 states for recreational use. Medical cannabis legal in 38 states.',
  },
  ES: {
    showCannabis: false,
    cannabisInfo:
      'Illegal for recreational use. Medical cannabis legal since 2017. Private cultivation decriminalized.',
  },
  FR: {
    showCannabis: false,
    cannabisInfo:
      'Illegal for recreational use. Medical cannabis legal since 2021. CBD products legal.',
  },
  IT: {
    showCannabis: false,
    cannabisInfo:
      'Illegal for recreational use. Medical cannabis legal since 2013. CBD products legal.',
  },
  PT: {
    showCannabis: true,
    cannabisInfo:
      'Decriminalized for personal use since 2001. Medical cannabis legal since 2018.',
  },
  CZ: {
    showCannabis: true,
    cannabisInfo:
      'Decriminalized for personal use (up to 15g). Medical cannabis legal since 2013.',
  },
  BE: {
    showCannabis: false,
    cannabisInfo:
      'Illegal for recreational use. Medical cannabis legal since 2015. CBD products legal.',
  },
  UK: {
    showCannabis: false,
    cannabisInfo:
      'Illegal for recreational use. Medical cannabis legal since 2018. CBD products legal.',
  },
  AU: {
    showCannabis: false,
    cannabisInfo:
      'Illegal federally. Medical cannabis legal in all states. Recreational legal in ACT only.',
  },
  NZ: {
    showCannabis: false,
    cannabisInfo:
      'Illegal for recreational use. Medical cannabis legal since 2020. Referendum failed in 2020.',
  },
  JP: {
    showCannabis: false,
    cannabisInfo:
      'Strictly illegal for recreational use. Medical cannabis very limited. CBD products legal.',
  },
  KR: {
    showCannabis: false,
    cannabisInfo:
      'Illegal for recreational use. Medical cannabis legal since 2018. CBD products legal.',
  },
  TH: {
    showCannabis: true,
    cannabisInfo:
      'Decriminalized since 2022. Medical cannabis legal. Recreational use partially allowed.',
  },
  UY: {
    showCannabis: true,
    cannabisInfo:
      'First country to fully legalize cannabis (2013). Adults can grow up to 6 plants.',
  },
  MX: {
    showCannabis: false,
    cannabisInfo:
      'Decriminalized for personal use (up to 5g). Medical cannabis legal. Recreational legalization pending.',
  },
  BR: {
    showCannabis: false,
    cannabisInfo:
      'Illegal for recreational use. Medical cannabis legal since 2019. CBD products legal.',
  },
  AR: {
    showCannabis: false,
    cannabisInfo:
      'Illegal for recreational use. Medical cannabis legal since 2017. CBD products legal.',
  },
  CL: {
    showCannabis: false,
    cannabisInfo:
      'Decriminalized for personal use. Medical cannabis legal since 2015. Recreational illegal.',
  },
  CO: {
    showCannabis: true,
    cannabisInfo:
      'Fully legal for recreational and medical use since 2016. Adults can grow up to 20 plants.',
  },
  PE: {
    showCannabis: false,
    cannabisInfo:
      'Decriminalized for personal use. Medical cannabis legal since 2017. Recreational illegal.',
  },
  EC: {
    showCannabis: false,
    cannabisInfo:
      'Decriminalized for personal use (up to 10g). Medical cannabis legal. Recreational illegal.',
  },
};

export const GROWING_ENVIRONMENTS = {
  INDOOR: 'indoor',
  OUTDOOR: 'outdoor',
  GREENHOUSE: 'greenhouse'
};

export const SEASONAL_REGIONS = {
  TEMPERATE_NORTH: 'temperate_north',
  MEDITERRANEAN: 'mediterranean',
};

export default PLANT_CATEGORIES;
