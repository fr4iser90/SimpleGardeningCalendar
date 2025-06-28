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

// Calculate phase schedule for a plant (DAYS-based)
export function calculatePhaseScheduleDays(phases, startDate) {
  console.log('📅 [calculatePhaseScheduleDays] Called with:', { startDate, phaseCount: Object.keys(phases).length });
  
  let currentDate = new Date(startDate);
  const result = Object.entries(phases).map(([phase, data]) => {
    const phaseStart = new Date(currentDate);
    currentDate.setDate(currentDate.getDate() + data.days);
    
    const phaseResult = {
      name: phase,
      startDate: phaseStart.toISOString().split('T')[0],
      days: data.days,
      description: data.description,
      care: data.care
    };
    
    console.log('📅 [calculatePhaseScheduleDays] Phase calculated:', phaseResult);
    return phaseResult;
  });
  
  console.log('📅 [calculatePhaseScheduleDays] Final result:', result);
  return result;
}

// Calculate phase schedule for a plant (START/END-based)
export function calculatePhaseScheduleStartEnd(phases, year = (new Date()).getFullYear()) {
  console.log('📅 [calculatePhaseScheduleStartEnd] Called with:', { year, phaseCount: Object.keys(phases).length });
  
  const result = Object.entries(phases).map(([phase, data]) => {
    let startDate, endDate;
    
    if (data.start && data.end) {
      // Handle year transition (e.g., dormancy from Oct to Mar)
      const startMonth = parseInt(data.start.split('-')[0]);
      const endMonth = parseInt(data.end.split('-')[0]);
      
      if (endMonth < startMonth) {
        // Phase crosses year boundary
        startDate = `${year}-${data.start}`;
        endDate = `${year + 1}-${data.end}`;
      } else {
        startDate = `${year}-${data.start}`;
        endDate = `${year}-${data.end}`;
      }
    } else {
      // Fallback for phases without start/end
      console.warn('📅 [calculatePhaseScheduleStartEnd] Phase without start/end:', phase, data);
      startDate = `${year}-01-01`;
      endDate = `${year}-12-31`;
    }
    
    const phaseResult = {
      name: phase,
      startDate,
      endDate,
      description: data.description,
      care: data.care
    };
    
    console.log('📅 [calculatePhaseScheduleStartEnd] Phase calculated:', phaseResult);
    return phaseResult;
  });
  
  console.log('📅 [calculatePhaseScheduleStartEnd] Final result:', result);
  return result;
}
