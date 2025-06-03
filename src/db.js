import { openDB } from 'idb';

const DB_NAME = 'gardening-calendar';
const DB_VERSION = 2;

export const PLANTS_DATA = {
  tomatoes: {
    name: 'Tomatoes',
    phases: {
      germination: { days: 7, description: 'Seeds sprouting' },
      seedling: { days: 21, description: 'Young plant development' },
      vegetative: { days: 30, description: 'Leaf and stem growth' },
      flowering: { days: 20, description: 'Flower development' },
      fruiting: { days: 45, description: 'Fruit development to harvest' }
    },
    careTips: {
      watering: 'Keep soil consistently moist',
      fertilizing: 'Feed every 4 weeks',
      sunlight: 'Full sun (6-8 hours daily)'
    }
  },
  potatoes: {
    name: 'Potatoes',
    phases: {
      sprouting: { days: 14, description: 'Eye sprouting' },
      vegetative: { days: 30, description: 'Leaf and stem growth' },
      tuberization: { days: 40, description: 'Tuber formation' },
      bulking: { days: 45, description: 'Tuber growth' },
      maturation: { days: 20, description: 'Plant dies back, tubers ready' }
    },
    careTips: {
      watering: 'Regular watering, avoid waterlogging',
      fertilizing: 'High phosphorus fertilizer',
      sunlight: 'Full sun (6+ hours daily)'
    }
  },
  carrots: {
    name: 'Carrots',
    phases: {
      germination: { days: 10, description: 'Seeds sprouting' },
      leafing: { days: 20, description: 'Leaf development' },
      rooting: { days: 30, description: 'Root development' },
      maturing: { days: 25, description: 'Root enlargement' }
    },
    careTips: {
      watering: 'Keep soil moist but not wet',
      fertilizing: 'Low nitrogen fertilizer',
      sunlight: 'Full sun to partial shade'
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
  
  for (const [phase, { days, description }] of Object.entries(plantData.phases)) {
    const phaseStartDate = new Date(currentDate);
    phaseStartDate.setDate(phaseStartDate.getDate() + totalDays);
    
    phases.push({
      name: phase,
      startDate: phaseStartDate.toISOString().split('T')[0],
      days,
      description
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
    currentPhase: Object.keys(plantData.phases)[0]
  };
  
  const plantingId = await db.add('plantings', planting);
  
  // Add calendar events for each phase
  const tx = db.transaction('events', 'readwrite');
  
  // Add planting event
  await tx.store.add({
    title: `Plant ${plantData.name}`,
    date: startDate,
    type: 'planting',
    description: `Start planting ${plantData.name}\n\nCare Tips:\n${Object.entries(plantData.careTips).map(([key, value]) => `- ${key}: ${value}`).join('\n')}`,
    plantingId
  });
  
  // Add phase transition events
  for (const phase of phases) {
    await tx.store.add({
      title: `${plantData.name}: ${phase.name} phase`,
      date: phase.startDate,
      type: 'maintenance',
      description: phase.description,
      plantingId
    });
  }
  
  // Add harvest event
  await tx.store.add({
    title: `Harvest ${plantData.name}`,
    date: harvestDate.toISOString().split('T')[0],
    type: 'harvesting',
    description: `Time to harvest your ${plantData.name}!`,
    plantingId
  });
  
  await tx.done;
  return plantingId;
}