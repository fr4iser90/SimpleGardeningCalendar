import { openDB } from 'idb';

const DB_NAME = 'gardening-calendar';
const DB_VERSION = 3;

export const PLANTS_DATA = {
  tomatoes: {
    name: 'Tomatoes',
    phases: {
      germination: { days: 7, description: 'Seeds sprouting', care: 'Keep soil warm (70-80°F) and moist' },
      seedling: { days: 21, description: 'Young plant development', care: 'Provide strong light, maintain moisture' },
      vegetative: { days: 30, description: 'Leaf and stem growth', care: 'Start fertilizing, support stems' },
      flowering: { days: 20, description: 'Flower development', care: 'Maintain consistent watering, shake plants gently to aid pollination' },
      fruiting: { days: 45, description: 'Fruit development to harvest', care: 'Regular feeding, watch for pests and disease' }
    },
    careTips: {
      watering: 'Keep soil consistently moist, water deeply 2-3 times per week',
      fertilizing: 'Feed every 4 weeks with balanced fertilizer',
      sunlight: 'Full sun (6-8 hours daily)',
      spacing: '18-24 inches apart',
      support: 'Cage or stake plants when 12 inches tall'
    },
    commonProblems: {
      'Blossom End Rot': 'Calcium deficiency - maintain consistent watering',
      'Leaf Yellowing': 'Could be nutrient deficiency or overwatering',
      'Cracked Fruits': 'Irregular watering - keep soil moisture consistent'
    }
  },
  potatoes: {
    name: 'Potatoes',
    phases: {
      sprouting: { days: 14, description: 'Eye sprouting', care: 'Keep seed potatoes in warm, dark place' },
      vegetative: { days: 30, description: 'Leaf and stem growth', care: 'Start hilling when plants are 6 inches tall' },
      tuberization: { days: 40, description: 'Tuber formation', care: 'Hill soil around base every 2-3 weeks' },
      bulking: { days: 45, description: 'Tuber growth', care: 'Maintain consistent moisture, continue hilling' },
      maturation: { days: 20, description: 'Plant dies back, tubers ready', care: 'Reduce watering when plants start yellowing' }
    },
    careTips: {
      watering: 'Regular watering (1-2 inches per week), avoid waterlogging',
      fertilizing: 'High phosphorus fertilizer at planting, side-dress when flowering',
      sunlight: 'Full sun (6+ hours daily)',
      spacing: '12 inches apart, rows 3 feet apart',
      soil: 'Well-draining, slightly acidic soil (pH 5.0-6.0)'
    },
    commonProblems: {
      'Scab': 'Keep soil pH below 5.5, maintain even moisture',
      'Hollow Heart': 'Irregular growing conditions - maintain consistent care',
      'Green Tubers': 'Exposure to light - ensure proper hilling'
    }
  },
  carrots: {
    name: 'Carrots',
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
      soil: 'Deep, loose, well-draining soil free from rocks'
    },
    commonProblems: {
      'Forking': 'Rocky soil or recent fertilizer - prepare soil well before planting',
      'Bitter Taste': 'Environmental stress - maintain consistent growing conditions',
      'Short Roots': 'Soil too compact - loosen soil deeply before planting'
    }
  },
  lettuce: {
    name: 'Lettuce',
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
      temperature: 'Cool weather crop, protect from heat'
    },
    commonProblems: {
      'Bolting': 'Heat stress - plant in cool season, provide shade',
      'Tip Burn': 'Calcium deficiency or irregular watering',
      'Bitter Leaves': 'Heat or water stress - maintain cool, moist conditions'
    }
  }
};

export async function initializeDB() {
  const db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db, oldVersion, newVersion) {
      if (oldVersion < 1) {
        const plantStore = db.createObjectStore('plants', { keyPath: 'id', autoIncrement: true });
        plantStore.createIndex('name', 'name');
        plantStore.createIndex('type', 'type');
        
        const eventStore = db.createObjectStore('events', { keyPath: 'id', autoIncrement: true });
        eventStore.createIndex('date', 'date');
        eventStore.createIndex('type', 'type');
        eventStore.createIndex('plantId', 'plantId');
        
        db.createObjectStore('settings', { keyPath: 'id' });
      }
      
      if (oldVersion < 2) {
        const plantingStore = db.createObjectStore('plantings', { keyPath: 'id', autoIncrement: true });
        plantingStore.createIndex('plantType', 'plantType');
        plantingStore.createIndex('startDate', 'startDate');
        plantingStore.createIndex('currentPhase', 'currentPhase');
      }

      if (oldVersion < 3) {
        if (!db.objectStoreNames.contains('plantNotes')) {
          const notesStore = db.createObjectStore('plantNotes', { keyPath: 'id', autoIncrement: true });
          notesStore.createIndex('plantingId', 'plantingId');
          notesStore.createIndex('date', 'date');
        }
      }
    }
  });

  return db;
}

export async function addPlanting(plantType, startDate) {
  const db = await openDB(DB_NAME);
  const plantData = PLANTS_DATA[plantType];
  
  // Calculate all phase dates
  let currentDate = new Date(startDate);
  const phases = [];
  let totalDays = 0;
  
  for (const [phase, { days, description, care }] of Object.entries(plantData.phases)) {
    const phaseStartDate = new Date(currentDate);
    phaseStartDate.setDate(phaseStartDate.getDate() + totalDays);
    
    phases.push({
      name: phase,
      startDate: phaseStartDate.toISOString().split('T')[0],
      days,
      description,
      care
    });
    
    totalDays += days;
  }
  
  // Calculate harvest date
  const harvestDate = new Date(currentDate);
  harvestDate.setDate(harvestDate.getDate() + totalDays);
  
  // Add planting record
  const planting = {
    plantType,
    startDate: startDate,
    harvestDate: harvestDate.toISOString().split('T')[0],
    phases,
    currentPhase: Object.keys(plantData.phases)[0],
    status: 'active',
    notes: []
  };
  
  const tx = db.transaction(['plantings', 'events'], 'readwrite');
  const plantingId = await tx.objectStore('plantings').add(planting);
  
  // Add planting event
  await tx.objectStore('events').add({
    title: `Plant ${plantData.name}`,
    date: startDate,
    type: 'planting',
    description: `Start planting ${plantData.name}\n\nCare Tips:\n${Object.entries(plantData.careTips).map(([key, value]) => `- ${key}: ${value}`).join('\n')}`,
    plantingId
  });
  
  // Add phase transition events
  for (const phase of phases) {
    await tx.objectStore('events').add({
      title: `${plantData.name}: ${phase.name} phase`,
      date: phase.startDate,
      type: 'maintenance',
      description: `${phase.description}\n\nCare Instructions:\n${phase.care}`,
      plantingId
    });

    // Add watering reminders every 3 days during each phase
    let wateringDate = new Date(phase.startDate);
    const phaseEnd = new Date(wateringDate);
    phaseEnd.setDate(phaseEnd.getDate() + phase.days);

    while (wateringDate < phaseEnd) {
      await tx.objectStore('events').add({
        title: `Water ${plantData.name}`,
        date: wateringDate.toISOString().split('T')[0],
        type: 'watering',
        description: plantData.careTips.watering,
        plantingId
      });
      wateringDate.setDate(wateringDate.getDate() + 3);
    }
  }
  
  // Add harvest event
  await tx.objectStore('events').add({
    title: `Harvest ${plantData.name}`,
    date: harvestDate.toISOString().split('T')[0],
    type: 'harvesting',
    description: `Time to harvest your ${plantData.name}!\n\nCommon Problems to Check For:\n${Object.entries(plantData.commonProblems).map(([problem, solution]) => `- ${problem}: ${solution}`).join('\n')}`,
    plantingId
  });
  
  await tx.done;
  return plantingId;
}

export async function addPlantNote(plantingId, note) {
  const db = await openDB(DB_NAME);
  return db.add('plantNotes', {
    plantingId,
    date: new Date().toISOString(),
    note
  });
}

export async function getPlantNotes(plantingId) {
  const db = await openDB(DB_NAME);
  return db.getAllFromIndex('plantNotes', 'plantingId', plantingId);
}

export async function updatePlantingStatus(plantingId, status) {
  const db = await openDB(DB_NAME);
  const tx = db.transaction('plantings', 'readwrite');
  const planting = await tx.store.get(plantingId);
  planting.status = status;
  await tx.store.put(planting);
  return tx.done;
}