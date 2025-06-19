import { openDB } from 'idb';

const DB_NAME = 'gardening-calendar';
const DB_VERSION = 5;

export const PLANTS_DATA = {
  // Cannabis varieties
  cannabis_indica: {
    name: 'Cannabis Indica',
    category: 'Cannabis',
    legalNote: 'Check local laws before cultivation. This information is for educational purposes only.',
    phases: {
      germination: { days: 3, description: 'Seed sprouting', care: 'Keep seeds warm (70-85°F) and moist in dark environment' },
      seedling: { days: 14, description: 'First true leaves development', care: 'Provide 18-24 hours of light, maintain humidity 65-70%' },
      vegetative: { days: 35, description: 'Rapid growth phase', care: '18/6 light cycle, high nitrogen feeding, LST training' },
      preflower: { days: 7, description: 'Sex determination', care: 'Continue vegetative care, identify and remove males' },
      flowering: { days: 56, description: 'Bud development', care: '12/12 light cycle, phosphorus/potassium feeding, monitor trichomes' },
      harvest: { days: 7, description: 'Harvest and cure preparation', care: 'Flush nutrients 1-2 weeks before harvest' }
    },
    careTips: {
      watering: 'Water when top inch of soil is dry, pH 6.0-7.0 in soil, 5.5-6.5 in hydro',
      fertilizing: 'High nitrogen in veg (3-1-2), high phosphorus in flower (1-3-2)',
      sunlight: '18/6 hours in vegetative, 12/12 hours in flowering',
      spacing: '2-4 feet apart depending on training method',
      support: 'SCROG nets, LST, or stakes for heavy branches',
      humidity: '65-70% seedling, 40-50% vegetative, 40-45% flowering',
      temperature: '70-85°F day, 65-80°F night'
    },
    commonProblems: {
      'Nutrient Burn': 'Yellow/brown leaf tips - reduce feeding concentration',
      'Light Burn': 'Bleached tops - increase distance from lights',
      'Bud Rot': 'Gray mold in buds - improve airflow and reduce humidity',
      'Spider Mites': 'Tiny webs and spots - increase humidity, use predatory mites',
      'Powdery Mildew': 'White powder on leaves - improve airflow, reduce humidity'
    }
  },
  cannabis_sativa: {
    name: 'Cannabis Sativa',
    category: 'Cannabis',
    legalNote: 'Check local laws before cultivation. This information is for educational purposes only.',
    phases: {
      germination: { days: 3, description: 'Seed sprouting', care: 'Keep seeds warm (70-85°F) and moist in dark environment' },
      seedling: { days: 14, description: 'First true leaves development', care: 'Provide 18-24 hours of light, maintain humidity 65-70%' },
      vegetative: { days: 42, description: 'Extended growth phase', care: '18/6 light cycle, high nitrogen feeding, training for height control' },
      preflower: { days: 7, description: 'Sex determination', care: 'Continue vegetative care, identify and remove males' },
      flowering: { days: 70, description: 'Long flowering period', care: '12/12 light cycle, phosphorus/potassium feeding, support tall branches' },
      harvest: { days: 7, description: 'Harvest and cure preparation', care: 'Flush nutrients 1-2 weeks before harvest' }
    },
    careTips: {
      watering: 'Water when top inch of soil is dry, pH 6.0-7.0 in soil, 5.5-6.5 in hydro',
      fertilizing: 'High nitrogen in veg (3-1-2), high phosphorus in flower (1-3-2)',
      sunlight: '18/6 hours in vegetative, 12/12 hours in flowering',
      spacing: '3-6 feet apart, can grow very tall',
      support: 'Strong stakes or SCROG for height management',
      humidity: '65-70% seedling, 40-50% vegetative, 40-45% flowering',
      temperature: '70-85°F day, 65-80°F night'
    },
    commonProblems: {
      'Height Management': 'Can grow very tall - use LST, topping, or SCROG',
      'Long Flowering': 'Extended harvest time - be patient, monitor trichomes',
      'Nutrient Deficiency': 'Large plants need more nutrients - increase feeding',
      'Light Penetration': 'Dense canopy - defoliate and LST for light penetration'
    }
  },
  cannabis_autoflower: {
    name: 'Cannabis Autoflower',
    category: 'Cannabis',
    legalNote: 'Check local laws before cultivation. This information is for educational purposes only.',
    phases: {
      germination: { days: 3, description: 'Seed sprouting', care: 'Keep seeds warm (70-85°F) and moist in dark environment' },
      seedling: { days: 10, description: 'First true leaves development', care: 'Provide 18-24 hours of light, gentle care - no transplanting' },
      vegetative: { days: 21, description: 'Rapid early growth', care: '18-24 hours light, light feeding, minimal stress' },
      preflower: { days: 7, description: 'Automatic transition', care: 'Continue same light schedule, begin flower nutrients' },
      flowering: { days: 35, description: 'Fast flowering', care: 'Continue 18-24 hour light, phosphorus/potassium feeding' },
      harvest: { days: 7, description: 'Quick harvest cycle', care: 'Flush nutrients 1 week before harvest' }
    },
    careTips: {
      watering: 'Light watering, autoflowers prefer less water than photoperiods',
      fertilizing: 'Light feeding schedule, 1/4 to 1/2 strength nutrients',
      sunlight: '18-24 hours throughout entire cycle',
      spacing: '1-2 feet apart, smaller plants',
      support: 'Minimal training, LST only if needed',
      humidity: '60-65% throughout cycle',
      temperature: '70-80°F consistent'
    },
    commonProblems: {
      'Stunted Growth': 'Stress sensitive - avoid transplanting and heavy training',
      'Nutrient Burn': 'Very sensitive to nutrients - use light feeding',
      'Short Cycle': 'Fast growth - be ready for quick transitions'
    }
  },

  // Enhanced existing plants
  tomatoes: {
    name: 'Tomatoes',
    category: 'Vegetables',
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
      support: 'Cage or stake plants when 12 inches tall',
      soilPH: '6.0-6.8',
      temperature: '65-85°F optimal growing range'
    },
    commonProblems: {
      'Blossom End Rot': 'Calcium deficiency - maintain consistent watering',
      'Leaf Yellowing': 'Could be nutrient deficiency or overwatering',
      'Cracked Fruits': 'Irregular watering - keep soil moisture consistent',
      'Hornworms': 'Large green caterpillars - hand pick or use BT spray'
    }
  },
  potatoes: {
    name: 'Potatoes',
    category: 'Vegetables',
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
      soil: 'Well-draining, slightly acidic soil (pH 5.0-6.0)',
      hilling: 'Hill soil around stems to prevent green tubers'
    },
    commonProblems: {
      'Scab': 'Keep soil pH below 5.5, maintain even moisture',
      'Hollow Heart': 'Irregular growing conditions - maintain consistent care',
      'Green Tubers': 'Exposure to light - ensure proper hilling',
      'Colorado Potato Beetle': 'Orange and black striped beetles - hand pick or use row covers'
    }
  },
  carrots: {
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
  },
  lettuce: {
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
  },

  // Additional popular plants
  basil: {
    name: 'Basil',
    category: 'Herbs',
    phases: {
      germination: { days: 5, description: 'Seeds sprouting', care: 'Keep warm (70-75°F) and moist' },
      seedling: { days: 14, description: 'First true leaves', care: 'Provide bright light, maintain warmth' },
      vegetative: { days: 30, description: 'Leaf production', care: 'Pinch flowers to encourage leaf growth' },
      flowering: { days: 20, description: 'Flower spike development', care: 'Pinch flowers for continued leaf harvest' },
      seed_production: { days: 21, description: 'Seed development', care: 'Allow flowers to mature if collecting seeds' }
    },
    careTips: {
      watering: 'Keep soil moist but not waterlogged',
      fertilizing: 'Light feeding every 2-3 weeks',
      sunlight: 'Full sun (6+ hours daily)',
      spacing: '6-12 inches apart',
      temperature: 'Warm weather herb, protect from cold',
      soilPH: '6.0-7.0',
      harvesting: 'Pinch leaves regularly to encourage growth'
    },
    commonProblems: {
      'Fusarium Wilt': 'Soil-borne disease - use disease-free soil and rotate crops',
      'Aphids': 'Small insects on new growth - spray with water',
      'Bolting': 'Going to seed too early - pinch flower buds regularly'
    }
  },
  peppers: {
    name: 'Peppers',
    category: 'Vegetables',
    phases: {
      germination: { days: 10, description: 'Seeds sprouting', care: 'Keep warm (80-85°F) and moist' },
      seedling: { days: 21, description: 'Young plant development', care: 'Provide strong light, maintain warmth' },
      vegetative: { days: 35, description: 'Plant establishment', care: 'Gradual hardening off before transplant' },
      flowering: { days: 21, description: 'Flower development', care: 'Maintain consistent moisture and feeding' },
      fruiting: { days: 60, description: 'Fruit development', care: 'Support heavy branches, regular harvest' }
    },
    careTips: {
      watering: 'Deep, infrequent watering - avoid overhead watering',
      fertilizing: 'Balanced fertilizer, avoid high nitrogen',
      sunlight: 'Full sun (6-8 hours daily)',
      spacing: '12-18 inches apart',
      temperature: 'Warm season crop, 70-85°F optimal',
      soilPH: '6.0-6.8',
      support: 'Stake or cage for heavy fruiting varieties'
    },
    commonProblems: {
      'Blossom End Rot': 'Calcium deficiency - maintain consistent watering',
      'Sunscald': 'Fruit exposed to intense sun - provide some shade',
      'Pepper Maggot': 'Small flies - use row covers during egg-laying period'
    }
  },
  spinach: {
    name: 'Spinach',
    category: 'Vegetables',
    phases: {
      germination: { days: 7, description: 'Seeds sprouting', care: 'Keep cool and moist' },
      leafing: { days: 21, description: 'Leaf development', care: 'Thin seedlings to 4-6 inches apart' },
      harvest: { days: 14, description: 'Continuous harvest period', care: 'Harvest outer leaves, keep center growing' },
      bolting: { days: 7, description: 'Going to seed', care: 'Harvest quickly before leaves become bitter' }
    },
    careTips: {
      watering: 'Keep soil consistently moist',
      fertilizing: 'High nitrogen fertilizer for leaf growth',
      sunlight: 'Full sun in cool weather, partial shade in warm weather',
      spacing: '4-6 inches apart',
      temperature: 'Cool season crop, 50-70°F optimal',
      soilPH: '6.0-7.0',
      succession: 'Plant every 2 weeks for continuous harvest'
    },
    commonProblems: {
      'Bolting': 'Heat stress - plant in cool season, provide shade',
      'Downy Mildew': 'Fungal disease - improve air circulation',
      'Leaf Miners': 'Tunnels in leaves - remove affected leaves'
    }
  },
  kale: {
    name: 'Kale',
    category: 'Vegetables',
    phases: {
      germination: { days: 7, description: 'Seeds sprouting', care: 'Keep cool and moist' },
      seedling: { days: 14, description: 'Young plant development', care: 'Provide adequate light' },
      vegetative: { days: 35, description: 'Leaf production', care: 'Regular feeding for leaf growth' },
      harvest: { days: 30, description: 'Continuous harvest', care: 'Harvest outer leaves, leave center to grow' }
    },
    careTips: {
      watering: 'Deep, regular watering',
      fertilizing: 'High nitrogen fertilizer every 3-4 weeks',
      sunlight: 'Full sun to partial shade',
      spacing: '12-18 inches apart',
      temperature: 'Cool season crop, tolerates frost',
      soilPH: '6.0-7.5',
      harvesting: 'Harvest outer leaves when 8-10 inches long'
    },
    commonProblems: {
      'Cabbage Worms': 'Green caterpillars - use BT spray or row covers',
      'Aphids': 'Small insects - spray with water or insecticidal soap',
      'Clubroot': 'Soil disease - rotate crops and improve drainage'
    }
  },
  cucumber: {
    name: 'Cucumber',
    category: 'Vegetables',
    phases: {
      germination: { days: 7, description: 'Seeds sprouting', care: 'Keep warm (70-85°F) and moist' },
      seedling: { days: 14, description: 'First true leaves', care: 'Provide warmth and adequate light' },
      vegetative: { days: 21, description: 'Vine development', care: 'Begin training on supports' },
      flowering: { days: 14, description: 'Male and female flowers', care: 'Ensure good pollination' },
      fruiting: { days: 50, description: 'Fruit production', care: 'Regular harvest to encourage production' }
    },
    careTips: {
      watering: 'Deep, consistent watering - avoid wetting leaves',
      fertilizing: 'Balanced fertilizer, side-dress monthly',
      sunlight: 'Full sun (6+ hours daily)',
      spacing: '12-18 inches apart with support, 3 feet apart if sprawling',
      temperature: 'Warm season crop, 70-85°F optimal',
      soilPH: '6.0-6.8',
      support: 'Trellises or cages for vertical growing'
    },
    commonProblems: {
      'Powdery Mildew': 'White powder on leaves - improve air circulation',
      'Cucumber Beetles': 'Yellow striped beetles - use row covers early season',
      'Bitter Fruit': 'Stress from heat or irregular watering'
    }
  },
  strawberries: {
    name: 'Strawberries',
    category: 'Fruits',
    phases: {
      establishment: { days: 30, description: 'Root establishment', care: 'Keep soil moist, remove flowers first year' },
      vegetative: { days: 60, description: 'Runner and leaf production', care: 'Allow runners to establish new plants' },
      flowering: { days: 21, description: 'Flower development', care: 'Protect flowers from late frost' },
      fruiting: { days: 30, description: 'Berry production', care: 'Regular watering and feeding during fruiting' },
      dormancy: { days: 120, description: 'Winter rest period', care: 'Mulch for winter protection' }
    },
    careTips: {
      watering: 'Keep soil consistently moist, avoid overhead watering',
      fertilizing: 'Balanced fertilizer in spring, avoid high nitrogen',
      sunlight: 'Full sun (6+ hours daily)',
      spacing: '12-18 inches apart',
      temperature: 'Cool season crop, protect from extreme heat',
      soilPH: '5.5-6.5',
      mulching: 'Straw mulch to keep berries clean and retain moisture'
    },
    commonProblems: {
      'Gray Mold': 'Fungal disease on fruit - improve air circulation',
      'Slugs': 'Eat holes in berries - use beer traps or diatomaceous earth',
      'Birds': 'Eat ripe berries - use netting protection'
    }
  }
};

export async function initializeDB() {
  const db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db, oldVersion, newVersion, transaction) {
      if (oldVersion < 1) {
        const plantStore = db.createObjectStore('plants', { keyPath: 'id', autoIncrement: true });
        plantStore.createIndex('name', 'name');
        plantStore.createIndex('type', 'type');
        
        const eventStore = db.createObjectStore('events', { keyPath: 'id', autoIncrement: true });
        eventStore.createIndex('date', 'date');
        eventStore.createIndex('type', 'type');
        eventStore.createIndex('plantId', 'plantId');
        eventStore.createIndex('plantingId', 'plantingId');
        
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

      if (oldVersion < 4) {
        // Add new indexes for enhanced plant database
        if (db.objectStoreNames.contains('plantings')) {
          const store = transaction.objectStore('plantings');
          if (!store.indexNames.contains('category')) {
            store.createIndex('category', 'category');
          }
          if (!store.indexNames.contains('status')) {
            store.createIndex('status', 'status');
          }
        }
      }

      if (oldVersion < 5) {
        // Add indexes for custom names and display names
        if (db.objectStoreNames.contains('plantings')) {
          const store = transaction.objectStore('plantings');
          if (!store.indexNames.contains('displayName')) {
            store.createIndex('displayName', 'displayName');
          }
          if (!store.indexNames.contains('customName')) {
            store.createIndex('customName', 'customName');
          }
        }
      }
    }
  });

  return db;
}

export async function addPlanting(plantType, startDate, location = 'Default Garden') {
  const db = await openDB(DB_NAME);
  const plantData = PLANTS_DATA[plantType];
  
  if (!plantData) {
    throw new Error(`Plant type ${plantType} not found in database`);
  }
  
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
  
  // Calculate harvest/completion date
  const completionDate = new Date(currentDate);
  completionDate.setDate(completionDate.getDate() + totalDays);
  
  // Add planting record
  const planting = {
    plantType,
    plantName: plantData.name,
    displayName: plantData.name,
    category: plantData.category || 'Other',
    location,
    startDate: startDate,
    completionDate: completionDate.toISOString().split('T')[0],
    phases,
    currentPhase: Object.keys(plantData.phases)[0],
    status: 'active',
    notes: [],
    legalNote: plantData.legalNote || null
  };
  
  const tx = db.transaction(['plantings', 'events'], 'readwrite');
  const plantingId = await tx.objectStore('plantings').add(planting);
  
  // Add planting event with legal notice if applicable
  let plantingDescription = `Start planting ${plantData.name}`;
  if (plantData.legalNote) {
    plantingDescription += `\n\n⚠️ LEGAL NOTICE: ${plantData.legalNote}`;
  }
  plantingDescription += `\n\nCare Tips:\n${Object.entries(plantData.careTips).map(([key, value]) => `- ${key}: ${value}`).join('\n')}`;

  await tx.objectStore('events').add({
    title: `🌱 Plant ${plantData.name}`,
    date: startDate,
    type: 'planting',
    description: plantingDescription,
    plantingId
  });
  
  // Add phase transition events with enhanced scheduling
  for (let i = 0; i < phases.length; i++) {
    const phase = phases[i];
    const phaseData = plantData.phases[phase.name];
    
    // Add phase start event
    await tx.objectStore('events').add({
      title: `${getPhaseEmoji(phase.name)} ${plantData.name}: ${phase.name} phase`,
      date: phase.startDate,
      type: 'maintenance',
      description: `${phase.description}\n\nCare Instructions:\n${phase.care}`,
      plantingId
    });

    // Add weekly check-ins for longer phases (more than 14 days)
    if (phase.days > 14) {
      const weeklyChecks = Math.floor(phase.days / 7);
      for (let week = 1; week <= weeklyChecks; week++) {
        const checkDate = new Date(phase.startDate);
        checkDate.setDate(checkDate.getDate() + (week * 7));
        
        if (checkDate < new Date(completionDate)) {
          await tx.objectStore('events').add({
            title: `📋 ${plantData.name}: Week ${week} check (${phase.name})`,
            date: checkDate.toISOString().split('T')[0],
            type: 'maintenance',
            description: `Weekly check during ${phase.name} phase\n\n${phase.care}\n\nLook for signs of:\n${getPhaseCheckpoints(phase.name, plantData)}`,
            plantingId
          });
        }
      }
    }

    // Add watering reminders with plant-specific intervals
    let wateringInterval = getWateringInterval(plantData.category, phase.name);
    let wateringDate = new Date(phase.startDate);
    const phaseEnd = new Date(wateringDate);
    phaseEnd.setDate(phaseEnd.getDate() + phase.days);

    while (wateringDate < phaseEnd) {
      await tx.objectStore('events').add({
        title: `💧 Water ${plantData.name}`,
        date: wateringDate.toISOString().split('T')[0],
        type: 'watering',
        description: `${plantData.careTips.watering || 'Check soil moisture and water as needed'}\n\nPhase: ${phase.name}\nCare: ${phase.care}`,
        plantingId
      });
      wateringDate.setDate(wateringDate.getDate() + wateringInterval);
    }

    // Add fertilizing reminders
    if (phase.days > 14 && (phase.name === 'vegetative' || phase.name === 'flowering' || phase.name === 'fruiting')) {
      const fertilizeDate = new Date(phase.startDate);
      fertilizeDate.setDate(fertilizeDate.getDate() + 7); // Start fertilizing after first week
      
      while (fertilizeDate < phaseEnd) {
        await tx.objectStore('events').add({
          title: `🌿 Fertilize ${plantData.name}`,
          date: fertilizeDate.toISOString().split('T')[0],
          type: 'fertilizing',
          description: `${plantData.careTips.fertilizing || 'Apply appropriate fertilizer'}\n\nPhase: ${phase.name}`,
          plantingId
        });
        fertilizeDate.setDate(fertilizeDate.getDate() + 14); // Every 2 weeks
      }
    }
  }
  
  // Add final harvest/completion event
  const finalPhase = Object.keys(plantData.phases).pop();
  const eventTitle = finalPhase === 'harvest' ? `🌾 Harvest ${plantData.name}` : `✅ Complete ${plantData.name} cycle`;
  
  let harvestDescription = `Time to ${finalPhase === 'harvest' ? 'harvest' : 'complete'} your ${plantData.name}!`;
  if (plantData.commonProblems && Object.keys(plantData.commonProblems).length > 0) {
    harvestDescription += `\n\nCommon Problems to Check For:\n${Object.entries(plantData.commonProblems).map(([problem, solution]) => `- ${problem}: ${solution}`).join('\n')}`;
  }
  
  await tx.objectStore('events').add({
    title: eventTitle,
    date: completionDate.toISOString().split('T')[0],
    type: finalPhase === 'harvest' ? 'harvesting' : 'maintenance',
    description: harvestDescription,
    plantingId
  });
  
  await tx.done;
  return plantingId;
}

function getPhaseEmoji(phase) {
  const emojis = {
    germination: '🌱',
    sprouting: '🌱',
    seedling: '🌿',
    vegetative: '🍃',
    leafing: '🍃',
    rooting: '🌿',
    preflower: '🌸',
    flowering: '🌸',
    blooming: '🌺',
    fruiting: '🍅',
    tuberization: '🥔',
    bulking: '🥔',
    harvest: '🌾',
    maturation: '🌾',
    establishment: '🌱',
    dormancy: '😴'
  };
  return emojis[phase] || '📅';
}

function getWateringInterval(category, phase) {
  // Return watering interval in days based on plant category and phase
  const intervals = {
    'Cannabis': {
      'germination': 1,
      'seedling': 2,
      'vegetative': 2,
      'flowering': 2,
      'default': 2
    },
    'Vegetables': {
      'germination': 1,
      'seedling': 2,
      'vegetative': 3,
      'flowering': 2,
      'fruiting': 2,
      'default': 3
    },
    'Herbs': {
      'default': 4
    },
    'Fruits': {
      'default': 3
    }
  };
  
  return intervals[category]?.[phase] || intervals[category]?.['default'] || 3;
}

function getPhaseCheckpoints(phase, plantData) {
  const checkpoints = {
    'germination': 'Sprouting progress, moisture levels, temperature',
    'seedling': 'Leaf development, stem strength, pest signs',
    'vegetative': 'Growth rate, leaf color, branching, training needs',
    'flowering': 'Flower development, pollination, nutrient needs',
    'fruiting': 'Fruit set, size development, ripening signs',
    'harvest': 'Ripeness indicators, harvest timing'
  };
  
  let phaseChecks = checkpoints[phase] || 'General plant health, growth progress';
  
  // Add plant-specific problems to watch for
  if (plantData.commonProblems) {
    const problems = Object.keys(plantData.commonProblems).slice(0, 3).join(', ');
    phaseChecks += `\nCommon issues: ${problems}`;
  }
  
  return phaseChecks;
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
  if (planting) {
    planting.status = status;
    await tx.store.put(planting);
  }
  return tx.done;
}

export async function getPlantingsByCategory(category) {
  const db = await openDB(DB_NAME);
  return db.getAllFromIndex('plantings', 'category', category);
}

export async function getActivePlantings() {
  const db = await openDB(DB_NAME);
  return db.getAllFromIndex('plantings', 'status', 'active');
}

export async function getAllPlantings() {
  const db = await openDB(DB_NAME);
  return db.getAll('plantings');
}

export async function deletePlantingAndEvents(plantingId) {
  const db = await openDB(DB_NAME);
  
  // Check which object stores exist and create transaction accordingly
  const storeNames = ['plantings', 'events'];
  if (db.objectStoreNames.contains('plantNotes')) {
    storeNames.push('plantNotes');
  }
  
  // Delete everything in a transaction
  const tx = db.transaction(storeNames, 'readwrite');
  
  // Delete all events related to this planting
  const events = await tx.objectStore('events').index('plantingId').getAll(plantingId);
  for (const event of events) {
    await tx.objectStore('events').delete(event.id);
  }
  
  // Delete all notes if the object store exists
  if (db.objectStoreNames.contains('plantNotes')) {
    try {
      const notes = await tx.objectStore('plantNotes').index('plantingId').getAll(plantingId);
      for (const note of notes) {
        await tx.objectStore('plantNotes').delete(note.id);
      }
    } catch (error) {
      console.warn('Could not delete plant notes:', error);
    }
  }
  
  // Delete the planting record
  await tx.objectStore('plantings').delete(plantingId);
  
  await tx.done;
  return true;
}

export async function searchPlants(query) {
  const results = [];
  const lowerQuery = query.toLowerCase();
  
  for (const [key, plant] of Object.entries(PLANTS_DATA)) {
    if (plant.name.toLowerCase().includes(lowerQuery) || 
        plant.category.toLowerCase().includes(lowerQuery) ||
        key.toLowerCase().includes(lowerQuery)) {
      results.push({ key, ...plant });
    }
  }
  
  return results;
}

// Export plant categories for filtering
export const PLANT_CATEGORIES = [...new Set(Object.values(PLANTS_DATA).map(plant => plant.category))];