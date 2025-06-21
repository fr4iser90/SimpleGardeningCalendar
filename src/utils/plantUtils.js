// Plant Utilities

// Get emoji for phase name
export function getPhaseEmoji(phaseName) {
  const emojis = {
    seedling: '🌱',
    vegetative: '🌿',
    flowering: '🌸',
    fruiting: '🍅',
    harvesting: '🌾',
    maintenance: '🔧',
    watering: '💧',
    fertilizing: '🌱',
    pruning: '✂️',
    transplanting: '🔄',
    pest_control: '🐛',
    default: '📅'
  };
  return emojis[phaseName?.toLowerCase()] || emojis.default;
}

// Get readable plant category name
export function getPlantCategoryName(category) {
  const names = {
    cannabis: 'Cannabis',
    vegetables: 'Vegetables',
    herbs: 'Herbs',
    fruits: 'Fruits',
    'fruit-trees': 'Fruit Trees',
    default: 'Other'
  };
  return names[category] || names.default;
}

// Calculate phase schedule for a plant
export function calculatePhaseSchedule(phases, startDate) {
  let currentDate = new Date(startDate);
  return Object.entries(phases).map(([phase, data]) => {
    const phaseStart = new Date(currentDate);
    currentDate.setDate(currentDate.getDate() + data.days);
    return {
      name: phase,
      startDate: phaseStart.toISOString().split('T')[0],
      days: data.days,
      description: data.description,
      care: data.care
    };
  });
}
