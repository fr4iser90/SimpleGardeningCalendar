/**
 * Lettuce Plant Data
 * Growing information for Lettuce
 */

export const lettuce = {
  name: 'Lettuce',
  category: 'Vegetables',
  phases: {
    germination: { days: 5, description: 'Seeds sprouting', care: 'Keep soil moist and cool' },
    leafing: { days: 20, description: 'Leaf development', care: 'Thin seedlings, maintain moisture' },
    heading: { days: 25, description: 'Head formation', care: 'Regular watering, watch for bolting' },
    harvest: { days: 10, description: 'Ready for harvest', care: 'Harvest outer leaves or whole heads' }
  },
  careTips: {
    watering: 'Regular light watering, keep soil consistently moist',
    fertilizing: 'Light feeder - balanced fertilizer at planting',
    sunlight: 'Partial shade in warm weather, full sun in cool weather',
    spacing: '6-8 inches apart for leaf, 10-12 inches for head lettuce',
    temperature: 'Cool weather crop, protect from heat',
    soilPH: '6.0-7.0'
  },
  commonProblems: {
    'Bolting': 'Heat stress - plant in cool season, provide shade',
    'Tip Burn': 'Calcium deficiency or irregular watering',
    'Bitter Leaves': 'Heat or water stress - maintain cool, moist conditions',
    'Aphids': 'Small green insects - spray with water or use insecticidal soap'
  }
};

export default lettuce; 