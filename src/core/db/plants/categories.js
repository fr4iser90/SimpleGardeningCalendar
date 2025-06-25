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
    climateZone: 'temperate_north',
    climateInfo: 'Gemäßigtes Klima mit 4 Jahreszeiten, Frost im Winter, warme Sommer'
  },
  AT: {
    showCannabis: false,
    cannabisInfo:
      'Illegal for recreational use. Medical cannabis available with prescription since 2008.',
    climateZone: 'temperate_north',
    climateInfo: 'Gemäßigtes Klima, alpine Regionen im Westen, kontinentaler Einfluss im Osten'
  },
  CH: {
    showCannabis: true,
    cannabisInfo:
      'Decriminalized (up to 10g). Medical cannabis legal. Several cities allow regulated sales.',
    climateZone: 'temperate_north',
    climateInfo: 'Gemäßigtes Klima, alpine Regionen in den Bergen, mediterraner Einfluss im Süden'
  },
  NL: {
    showCannabis: true,
    cannabisInfo:
      'Decriminalized for personal use. Coffee shops allowed to sell small amounts. Medical cannabis legal.',
    climateZone: 'maritime',
    climateInfo: 'Maritimes Klima, milde Winter, kühle Sommer, hohe Niederschläge'
  },
  CA: {
    showCannabis: true,
    cannabisInfo:
      'Fully legal for recreational and medical use since 2018. Adults can grow up to 4 plants.',
    climateZone: 'temperate_north',
    climateInfo: 'Verschiedene Klimazonen: maritime Westküste, kontinental im Landesinneren, arktisch im Norden'
  },
  US: {
    showCannabis: false,
    cannabisInfo:
      'Federal illegal, but legal in 24 states for recreational use. Medical cannabis legal in 38 states.',
    climateZone: 'mixed',
    climateInfo: 'Verschiedene Klimazonen: mediterran (Kalifornien), kontinental (Mittlerer Westen), subtropisch (Florida)'
  },
  ES: {
    showCannabis: false,
    cannabisInfo:
      'Illegal for recreational use. Medical cannabis legal since 2017. Private cultivation decriminalized.',
    climateZone: 'mediterranean',
    climateInfo: 'Mittelmeerklima, heiße trockene Sommer, milde feuchte Winter'
  },
  FR: {
    showCannabis: false,
    cannabisInfo:
      'Illegal for recreational use. Medical cannabis legal since 2021. CBD products legal.',
    climateZone: 'temperate_north',
    climateInfo: 'Gemäßigtes Klima, mediterraner Einfluss im Süden, maritime Einflüsse im Westen'
  },
  IT: {
    showCannabis: false,
    cannabisInfo:
      'Illegal for recreational use. Medical cannabis legal since 2013. CBD products legal.',
    climateZone: 'mediterranean',
    climateInfo: 'Mittelmeerklima, alpine Regionen im Norden, subtropisch im Süden'
  },
  PT: {
    showCannabis: true,
    cannabisInfo:
      'Decriminalized for personal use since 2001. Medical cannabis legal since 2018.',
    climateZone: 'mediterranean',
    climateInfo: 'Mittelmeerklima, maritime Einflüsse, milde Winter, warme Sommer'
  },
  CZ: {
    showCannabis: true,
    cannabisInfo:
      'Decriminalized for personal use (up to 15g). Medical cannabis legal since 2013.',
    climateZone: 'temperate_north',
    climateInfo: 'Gemäßigtes Klima, kontinentaler Einfluss, kalte Winter, warme Sommer'
  },
  BE: {
    showCannabis: false,
    cannabisInfo:
      'Illegal for recreational use. Medical cannabis legal since 2015. CBD products legal.',
    climateZone: 'maritime',
    climateInfo: 'Maritimes Klima, milde Temperaturen, hohe Niederschläge, wenig Frost'
  },
  UK: {
    showCannabis: false,
    cannabisInfo:
      'Illegal for recreational use. Medical cannabis legal since 2018. CBD products legal.',
    climateZone: 'maritime',
    climateInfo: 'Maritimes Klima, milde Winter, kühle Sommer, hohe Niederschläge'
  },
  AU: {
    showCannabis: false,
    cannabisInfo:
      'Illegal federally. Medical cannabis legal in all states. Recreational legal in ACT only.',
    climateZone: 'mixed',
    climateInfo: 'Verschiedene Klimazonen: tropisch (Norden), subtropisch (Osten), mediterran (Süden), wüstenhaft (Zentrum)'
  },
  NZ: {
    showCannabis: false,
    cannabisInfo:
      'Illegal for recreational use. Medical cannabis legal since 2020. Referendum failed in 2020.',
    climateZone: 'maritime',
    climateInfo: 'Maritimes Klima, milde Temperaturen, hohe Niederschläge, alpine Regionen im Süden'
  },
  JP: {
    showCannabis: false,
    cannabisInfo:
      'Strictly illegal for recreational use. Medical cannabis very limited. CBD products legal.',
    climateZone: 'temperate_north',
    climateInfo: 'Gemäßigtes Klima, subtropisch im Süden, alpine Regionen in den Bergen'
  },
  KR: {
    showCannabis: false,
    cannabisInfo:
      'Illegal for recreational use. Medical cannabis legal since 2018. CBD products legal.',
    climateZone: 'temperate_north',
    climateInfo: 'Gemäßigtes Klima, kontinentaler Einfluss, kalte Winter, warme Sommer'
  },
  TH: {
    showCannabis: true,
    cannabisInfo:
      'Decriminalized since 2022. Medical cannabis legal. Recreational use partially allowed.',
    climateZone: 'tropical',
    climateInfo: 'Tropisches Klima, ganzjährig warm, hohe Luftfeuchtigkeit, Monsunregen'
  },
  UY: {
    showCannabis: true,
    cannabisInfo:
      'First country to fully legalize cannabis (2013). Adults can grow up to 6 plants.',
    climateZone: 'temperate_south',
    climateInfo: 'Gemäßigtes Klima (Süd), subtropisch im Norden, milde Winter'
  },
  MX: {
    showCannabis: false,
    cannabisInfo:
      'Decriminalized for personal use (up to 5g). Medical cannabis legal. Recreational legalization pending.',
    climateZone: 'mixed',
    climateInfo: 'Verschiedene Klimazonen: tropisch (Süden), subtropisch (Zentrum), wüstenhaft (Norden)'
  },
  BR: {
    showCannabis: false,
    cannabisInfo:
      'Illegal for recreational use. Medical cannabis legal since 2019. CBD products legal.',
    climateZone: 'tropical',
    climateInfo: 'Tropisches Klima, subtropisch im Süden, hohe Niederschläge im Amazonas'
  },
  AR: {
    showCannabis: false,
    cannabisInfo:
      'Illegal for recreational use. Medical cannabis legal since 2017. CBD products legal.',
    climateZone: 'temperate_south',
    climateInfo: 'Gemäßigtes Klima (Süden), subtropisch (Norden), trocken im Westen'
  },
  CL: {
    showCannabis: false,
    cannabisInfo:
      'Decriminalized for personal use. Medical cannabis legal since 2015. Recreational illegal.',
    climateZone: 'mixed',
    climateInfo: 'Verschiedene Klimazonen: mediterran (Mitte), wüstenhaft (Norden), gemäßigt (Süden)'
  },
  CO: {
    showCannabis: true,
    cannabisInfo:
      'Fully legal for recreational and medical use since 2016. Adults can grow up to 20 plants.',
    climateZone: 'tropical',
    climateInfo: 'Tropisches Klima, alpine Regionen in den Anden, hohe Luftfeuchtigkeit'
  },
  PE: {
    showCannabis: false,
    cannabisInfo:
      'Decriminalized for personal use. Medical cannabis legal since 2017. Recreational illegal.',
    climateZone: 'mixed',
    climateInfo: 'Verschiedene Klimazonen: tropisch (Osten), wüstenhaft (Küste), alpine (Anden)'
  },
  EC: {
    showCannabis: false,
    cannabisInfo:
      'Decriminalized for personal use (up to 10g). Medical cannabis legal. Recreational illegal.',
    climateZone: 'tropical',
    climateInfo: 'Tropisches Klima, alpine Regionen in den Anden, hohe Luftfeuchtigkeit'
  },
};

/**
 * Auto-detect climate zone based on country code
 * @param {string} countryCode - ISO 3166-1 alpha-2 country code
 * @returns {string} climate zone or 'temperate_north' as fallback
 */
export function detectClimateZone(countryCode) {
  const country = COUNTRY_SETTINGS[countryCode?.toUpperCase()];
  if (country?.climateZone && country.climateZone !== 'mixed') {
    return country.climateZone;
  }
  return 'temperate_north'; // Default fallback
}

/**
 * Get climate information for a country
 * @param {string} countryCode - ISO 3166-1 alpha-2 country code
 * @returns {object} climate information
 */
export function getCountryClimateInfo(countryCode) {
  const country = COUNTRY_SETTINGS[countryCode?.toUpperCase()];
  if (country) {
    return {
      zone: country.climateZone,
      info: country.climateInfo,
      description: CLIMATE_ZONE_DESCRIPTIONS[country.climateZone] || CLIMATE_ZONE_DESCRIPTIONS.temperate_north
    };
  }
  return {
    zone: 'temperate_north',
    info: 'Standard gemäßigtes Klima',
    description: CLIMATE_ZONE_DESCRIPTIONS.temperate_north
  };
}

export const GROWING_ENVIRONMENTS = {
  INDOOR: 'indoor',
  OUTDOOR: 'outdoor',
  GREENHOUSE: 'greenhouse'
};

export const SEASONAL_REGIONS = {
  TEMPERATE_NORTH: 'temperate_north',
  TEMPERATE_SOUTH: 'temperate_south',
  MEDITERRANEAN: 'mediterranean',
  TROPICAL: 'tropical',
  SUBTROPICAL: 'subtropical',
  CONTINENTAL: 'continental',
  MARITIME: 'maritime',
  ALPINE: 'alpine',
  DESERT: 'desert',
  AUTO_DETECT: 'auto_detect'
};

// Climate zone descriptions for better UX
export const CLIMATE_ZONE_DESCRIPTIONS = {
  temperate_north: {
    name: 'Gemäßigte Zone (Nord)',
    description: 'Europa, Nordamerika, Asien - Kaltes Klima mit 4 Jahreszeiten',
    examples: 'Deutschland, Kanada, Nordchina',
    characteristics: 'Frost im Winter, warme Sommer, moderate Niederschläge'
  },
  temperate_south: {
    name: 'Gemäßigte Zone (Süd)',
    description: 'Südliche gemäßigte Zonen - Mildere Winter',
    examples: 'Südafrika, Südchile, Südostaustralien',
    characteristics: 'Mildere Winter, warme Sommer, moderate Niederschläge'
  },
  mediterranean: {
    name: 'Mittelmeerklima',
    description: 'Heiße, trockene Sommer, milde, feuchte Winter',
    examples: 'Südeuropa, Kalifornien, Südafrika, Chile',
    characteristics: 'Trockene Sommer, feuchte Winter, milde Temperaturen'
  },
  tropical: {
    name: 'Tropisches Klima',
    description: 'Ganzjährig warm mit hoher Luftfeuchtigkeit',
    examples: 'Amazonas, Südostasien, Zentralafrika',
    characteristics: 'Ganzjährig warm, hohe Niederschläge, keine Jahreszeiten'
  },
  subtropical: {
    name: 'Subtropisches Klima',
    description: 'Warme Sommer, milde Winter',
    examples: 'Florida, Südchina, Nordaustralien',
    characteristics: 'Heiße Sommer, milde Winter, moderate Niederschläge'
  },
  continental: {
    name: 'Kontinentales Klima',
    description: 'Extreme Temperaturschwankungen',
    examples: 'Mittlerer Westen USA, Sibirien, Mongolei',
    characteristics: 'Heiße Sommer, sehr kalte Winter, geringe Niederschläge'
  },
  maritime: {
    name: 'Maritimes Klima',
    description: 'Gemäßigte Temperaturen, hohe Luftfeuchtigkeit',
    examples: 'Großbritannien, Neuseeland, Pazifikküste',
    characteristics: 'Milde Temperaturen, hohe Niederschläge, wenig Frost'
  },
  alpine: {
    name: 'Alpines Klima',
    description: 'Gebirgsklima mit kurzen Sommern',
    examples: 'Alpen, Rocky Mountains, Himalaya',
    characteristics: 'Kurze Sommer, lange Winter, viel Schnee'
  },
  desert: {
    name: 'Wüstenklima',
    description: 'Sehr trocken mit extremen Temperaturen',
    examples: 'Sahara, Gobi, Atacama',
    characteristics: 'Sehr trocken, extreme Temperaturschwankungen'
  },
  auto_detect: {
    name: 'Automatisch erkennen',
    description: 'Standort automatisch basierend auf IP-Adresse erkennen',
    examples: 'Wird automatisch ermittelt',
    characteristics: 'Datenschutzfreundlich, keine manuelle Eingabe nötig'
  }
};

/**
 * Auto-detect user location and climate zone
 * @returns {Promise<object>} location and climate info
 */
export async function autoDetectLocation() {
  try {
    // Try to get location from browser
    const position = await new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation not supported'));
        return;
      }
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        timeout: 10000,
        enableHighAccuracy: false
      });
    });

    // Use reverse geocoding to get country
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=de`
    );
    
    if (!response.ok) {
      throw new Error('Geocoding failed');
    }
    
    const data = await response.json();
    const countryCode = data.countryCode;
    const climateInfo = getCountryClimateInfo(countryCode);
    
    return {
      success: true,
      countryCode,
      countryName: data.countryName,
      city: data.city,
      climateZone: climateInfo.zone,
      climateInfo: climateInfo.info,
      coordinates: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    };
  } catch (error) {
    console.log('Auto-detection failed:', error.message);
    return {
      success: false,
      error: error.message,
      climateZone: 'temperate_north', // Default fallback
      climateInfo: 'Standard gemäßigtes Klima'
    };
  }
}

/**
 * Create enhanced region options with descriptions
 * @returns {string} HTML for region select with descriptions
 */
export function createEnhancedRegionOptions() {
  return Object.entries(SEASONAL_REGIONS).map(([key, value]) => {
    const description = CLIMATE_ZONE_DESCRIPTIONS[value];
    const translatedName = t(`region.${value}`) || description.name;
    
    return `
      <option value="${value}" data-description="${description.description}" data-examples="${description.examples}">
        ${translatedName}
      </option>
    `;
  }).join('');
}

export default PLANT_CATEGORIES;
