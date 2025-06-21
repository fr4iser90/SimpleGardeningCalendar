/**
 * Carrots Plant Data
 * Growing information for Carrots
 */

export const carrots = {
  name: 'Carrots',
  category: 'Vegetables',
  phases: {
    germination: { days: 10, description: 'Seeds sprouting', care: 'Keep soil consistently moist, avoid crusting' },
    leafing: { days: 20, description: 'Leaf development', care: 'Thin seedlings to 2 inches apart' },
    rooting: { days: 30, description: 'Root development', care: 'Keep soil loose and weed-free' },
    maturing: { days: 25, description: 'Root enlargement', care: 'Maintain even moisture to prevent splitting' }
  },
  careTips: {
    watering: 'Keep soil moist but not wet, water deeply once a week',
    fertilizing: 'Low nitrogen fertilizer, high in phosphorus and potassium',
    sunlight: 'Full sun to partial shade',
    spacing: '2-3 inches apart, rows 16 inches apart',
    soil: 'Deep, loose, well-draining soil free from rocks',
    soilPH: '6.0-6.8'
  },
  commonProblems: {
    'Forking': 'Rocky soil or recent fertilizer - prepare soil well before planting',
    'Bitter Taste': 'Environmental stress - maintain consistent growing conditions',
    'Short Roots': 'Soil too compact - loosen soil deeply before planting',
    'Carrot Fly': 'Small flies laying eggs - use row covers or companion plant with onions'
  }
};

export default carrots; 