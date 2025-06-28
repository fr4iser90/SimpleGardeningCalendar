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
export function calculatePhaseScheduleStartEnd(phases, year = (new Date()).getFullYear(), plantingDate = null) {
  console.log('📅 [calculatePhaseScheduleStartEnd] Called with:', { year, phaseCount: Object.keys(phases).length, plantingDate });
  
  // If plantingDate is provided, use it to determine the appropriate year
  let targetYear = year;
  if (plantingDate) {
    const plantingYear = new Date(plantingDate).getFullYear();
    const plantingMonth = new Date(plantingDate).getMonth() + 1; // 0-based to 1-based
    
    // Check if we need to adjust the year based on planting date
    // If planting in late season (July-December), use next year for phases that start early
    if (plantingMonth >= 7) {
      targetYear = plantingYear + 1;
      console.log('📅 [calculatePhaseScheduleStartEnd] Late season planting detected, using next year:', targetYear);
    } else {
      targetYear = plantingYear;
    }
  }
  
  const result = Object.entries(phases).map(([phase, data]) => {
    let startDate, endDate;
    
    if (data.start && data.end) {
      // Handle year transition (e.g., dormancy from Oct to Mar)
      const startMonth = parseInt(data.start.split('-')[0]);
      const endMonth = parseInt(data.end.split('-')[0]);
      
      if (endMonth < startMonth) {
        // Phase crosses year boundary
        startDate = `${targetYear}-${data.start}`;
        endDate = `${targetYear + 1}-${data.end}`;
      } else {
        startDate = `${targetYear}-${data.start}`;
        endDate = `${targetYear}-${data.end}`;
      }
    } else {
      // Fallback for phases without start/end
      console.warn('📅 [calculatePhaseScheduleStartEnd] Phase without start/end:', phase, data);
      startDate = `${targetYear}-01-01`;
      endDate = `${targetYear}-12-31`;
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
