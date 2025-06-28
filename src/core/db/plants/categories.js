/**
 * Plant Categories Definition
 * Defines all available plant categories and their metadata
 */

export const PLANT_CATEGORIES = {
  VEGETABLES: 'category.vegetables',
  HERBS: 'category.herbs',
  FRUITS: 'category.fruits',
  FRUIT_TREES: 'category.fruit_trees',
  FLOWERS: 'category.flowers',
};

export const PLANT_TAGS = {
  ROOT: 'tag.root',
  LEAFY: 'tag.leafy',
  LEGUME: 'tag.legume',
  SPRING: 'tag.spring',
  SUMMER: 'tag.summer',
  FALL: 'tag.fall',
  WINTER: 'tag.winter',
  PERENNIAL: 'tag.perennial',
  ANNUAL: 'tag.annual',
  BIENNIAL: 'tag.biennial',
  CANNABIS: 'tag.cannabis', // Optional, country-dependent
  PHOTOPERIOD: 'tag.photoperiod', // Photoperiod-dependent plants
};

export const CATEGORY_METADATA = {
  [PLANT_CATEGORIES.VEGETABLES]: {
    name: 'category.vegetables',
    description: 'category.vegetables.description',
    icon: '🥕',
    color: '#F59E0B',
  },
  [PLANT_CATEGORIES.HERBS]: {
    name: 'category.herbs',
    description: 'category.herbs.description',
    icon: '🌱',
    color: '#10B981',
  },
  [PLANT_CATEGORIES.FRUITS]: {
    name: 'category.fruits',
    description: 'category.fruits.description',
    icon: '🍓',
    color: '#EF4444',
  },
  [PLANT_CATEGORIES.FRUIT_TREES]: {
    name: 'category.fruit_trees',
    description: 'category.fruit_trees.description',
    icon: '🍎',
    color: '#DC2626',
  },
  [PLANT_CATEGORIES.FLOWERS]: {
    name: 'category.flowers',
    description: 'category.flowers.description',
    icon: '🌸',
    color: '#EC4899',
  },
};

// Country-specific settings for cannabis display
export const COUNTRY_SETTINGS = {
  DE: {
    showCannabis: true,
    cannabisInfo: 'cannabis.de.info',
    climateZone: 'temperate_north',
    climateInfo: 'country.de.climate_info'
  },
  AT: {
    showCannabis: false,
    cannabisInfo: 'cannabis.at.info',
    climateZone: 'temperate_north',
    climateInfo: 'country.at.climate_info'
  },
  CH: {
    showCannabis: true,
    cannabisInfo: 'cannabis.ch.info',
    climateZone: 'temperate_north',
    climateInfo: 'country.ch.climate_info'
  },
  NL: {
    showCannabis: true,
    cannabisInfo: 'cannabis.nl.info',
    climateZone: 'maritime',
    climateInfo: 'country.nl.climate_info'
  },
  CA: {
    showCannabis: true,
    cannabisInfo: 'cannabis.ca.info',
    climateZone: 'temperate_north',
    climateInfo: 'country.ca.climate_info'
  },
  US: {
    showCannabis: false,
    cannabisInfo: 'cannabis.us.info',
    climateZone: 'mixed',
    climateInfo: 'country.us.climate_info'
  },
  ES: {
    showCannabis: false,
    cannabisInfo: 'cannabis.es.info',
    climateZone: 'mediterranean',
    climateInfo: 'country.es.climate_info'
  },
  FR: {
    showCannabis: false,
    cannabisInfo: 'cannabis.fr.info',
    climateZone: 'temperate_north',
    climateInfo: 'country.fr.climate_info'
  },
  IT: {
    showCannabis: false,
    cannabisInfo: 'cannabis.it.info',
    climateZone: 'mediterranean',
    climateInfo: 'country.it.climate_info'
  },
  PT: {
    showCannabis: true,
    cannabisInfo: 'cannabis.pt.info',
    climateZone: 'mediterranean',
    climateInfo: 'country.pt.climate_info'
  },
  CZ: {
    showCannabis: true,
    cannabisInfo: 'cannabis.cz.info',
    climateZone: 'temperate_north',
    climateInfo: 'country.cz.climate_info'
  },
  BE: {
    showCannabis: false,
    cannabisInfo: 'cannabis.be.info',
    climateZone: 'maritime',
    climateInfo: 'country.be.climate_info'
  },
  UK: {
    showCannabis: false,
    cannabisInfo: 'cannabis.uk.info',
    climateZone: 'maritime',
    climateInfo: 'country.uk.climate_info'
  },
  AU: {
    showCannabis: false,
    cannabisInfo: 'cannabis.au.info',
    climateZone: 'mixed',
    climateInfo: 'country.au.climate_info'
  },
  NZ: {
    showCannabis: false,
    cannabisInfo: 'cannabis.nz.info',
    climateZone: 'maritime',
    climateInfo: 'country.nz.climate_info'
  },
  JP: {
    showCannabis: false,
    cannabisInfo: 'cannabis.jp.info',
    climateZone: 'temperate_north',
    climateInfo: 'country.jp.climate_info'
  },
  KR: {
    showCannabis: false,
    cannabisInfo: 'cannabis.kr.info',
    climateZone: 'temperate_north',
    climateInfo: 'country.kr.climate_info'
  },
  TH: {
    showCannabis: true,
    cannabisInfo: 'cannabis.th.info',
    climateZone: 'tropical',
    climateInfo: 'country.th.climate_info'
  },
  UY: {
    showCannabis: true,
    cannabisInfo: 'cannabis.uy.info',
    climateZone: 'temperate_south',
    climateInfo: 'country.uy.climate_info'
  },
  MX: {
    showCannabis: false,
    cannabisInfo: 'cannabis.mx.info',
    climateZone: 'mixed',
    climateInfo: 'country.mx.climate_info'
  },
  BR: {
    showCannabis: false,
    cannabisInfo: 'cannabis.br.info',
    climateZone: 'tropical',
    climateInfo: 'country.br.climate_info'
  },
  AR: {
    showCannabis: false,
    cannabisInfo: 'cannabis.ar.info',
    climateZone: 'temperate_south',
    climateInfo: 'country.ar.climate_info'
  },
  CL: {
    showCannabis: false,
    cannabisInfo: 'cannabis.cl.info',
    climateZone: 'mixed',
    climateInfo: 'country.cl.climate_info'
  },
  CO: {
    showCannabis: true,
    cannabisInfo: 'cannabis.co.info',
    climateZone: 'tropical',
    climateInfo: 'country.co.climate_info'
  },
  PE: {
    showCannabis: false,
    cannabisInfo: 'cannabis.pe.info',
    climateZone: 'mixed',
    climateInfo: 'country.pe.climate_info'
  },
  EC: {
    showCannabis: false,
    cannabisInfo: 'cannabis.ec.info',
    climateZone: 'tropical',
    climateInfo: 'country.ec.climate_info'
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
    info: 'climate.default',
    description: CLIMATE_ZONE_DESCRIPTIONS.temperate_north
  };
}

export const GROWING_ENVIRONMENTS = {
  INDOOR: 'environment.indoor',
  OUTDOOR: 'environment.outdoor',
  GREENHOUSE: 'environment.greenhouse'
};

export const SEASONAL_REGIONS = {
  TEMPERATE_NORTH: 'region.temperate_north',
  TEMPERATE_SOUTH: 'region.temperate_south',
  MEDITERRANEAN: 'region.mediterranean',
  TROPICAL: 'region.tropical',
  SUBTROPICAL: 'region.subtropical',
  CONTINENTAL: 'region.continental',
  MARITIME: 'region.maritime',
  ALPINE: 'region.alpine',
  DESERT: 'region.desert',
  AUTO_DETECT: 'region.auto_detect'
};

// Climate zone descriptions for better UX
export const CLIMATE_ZONE_DESCRIPTIONS = {
  temperate_north: {
    name: 'climate.temperate_north.name',
    description: 'climate.temperate_north.description',
    examples: 'climate.temperate_north.examples',
    characteristics: 'climate.temperate_north.characteristics'
  },
  temperate_south: {
    name: 'climate.temperate_south.name',
    description: 'climate.temperate_south.description',
    examples: 'climate.temperate_south.examples',
    characteristics: 'climate.temperate_south.characteristics'
  },
  mediterranean: {
    name: 'climate.mediterranean.name',
    description: 'climate.mediterranean.description',
    examples: 'climate.mediterranean.examples',
    characteristics: 'climate.mediterranean.characteristics'
  },
  tropical: {
    name: 'climate.tropical.name',
    description: 'climate.tropical.description',
    examples: 'climate.tropical.examples',
    characteristics: 'climate.tropical.characteristics'
  },
  subtropical: {
    name: 'climate.subtropical.name',
    description: 'climate.subtropical.description',
    examples: 'climate.subtropical.examples',
    characteristics: 'climate.subtropical.characteristics'
  },
  continental: {
    name: 'climate.continental.name',
    description: 'climate.continental.description',
    examples: 'climate.continental.examples',
    characteristics: 'climate.continental.characteristics'
  },
  maritime: {
    name: 'climate.maritime.name',
    description: 'climate.maritime.description',
    examples: 'climate.maritime.examples',
    characteristics: 'climate.maritime.characteristics'
  },
  alpine: {
    name: 'climate.alpine.name',
    description: 'climate.alpine.description',
    examples: 'climate.alpine.examples',
    characteristics: 'climate.alpine.characteristics'
  },
  desert: {
    name: 'climate.desert.name',
    description: 'climate.desert.description',
    examples: 'climate.desert.examples',
    characteristics: 'climate.desert.characteristics'
  },
  auto_detect: {
    name: 'climate.auto_detect.name',
    description: 'climate.auto_detect.description',
    examples: 'climate.auto_detect.examples',
    characteristics: 'climate.auto_detect.characteristics'
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
      climateInfo: 'climate.default'
    };
  }
}

/**
 * Create enhanced region options with descriptions
 * @param {Function} translateFunction - Translation function (e.g., t from i18n)
 * @returns {string} HTML for region select with descriptions
 */
export function createEnhancedRegionOptions(translateFunction) {
  return Object.entries(SEASONAL_REGIONS).map(([key, value]) => {
    const description = CLIMATE_ZONE_DESCRIPTIONS[value.replace('region.', '')];
    const translatedName = translateFunction ? translateFunction(value) : value;
    
    return `
      <option value="${value.replace('region.', '')}" data-description="${description?.description || ''}" data-examples="${description?.examples || ''}">
        ${translatedName}
      </option>
    `;
  }).join('');
}

export default PLANT_CATEGORIES;
