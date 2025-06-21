/**
 * Phase 2 DB Operations Test
 * Tests the modular database structure and exports
 */

// Import the main DB module
import db from './index.js';

async function testPhase2DBOperations() {
  console.log('🧪 PHASE 2 DB OPERATIONS TEST');
  console.log('================================\n');

  try {
    // Test 1: Module Structure
    console.log('1️⃣ Testing Module Structure...');
    const requiredExports = [
      'initializeDB', 'getDB', 'getPlantDataForEnvironment', 'addPlanting',
      'createPlantingEvents', 'addPlantNote', 'formatTemperature', 'getPlantRegistry'
    ];
    
    for (const exportName of requiredExports) {
      if (typeof db[exportName] !== 'function') {
        throw new Error(`Missing or invalid export: ${exportName}`);
      }
    }
    console.log('✅ All required exports available\n');

    // Test 2: Constants
    console.log('2️⃣ Testing Constants...');
    if (!db.GROWING_ENVIRONMENTS || !db.SEASONAL_REGIONS || !db.PLANT_CATEGORIES) {
      throw new Error('Missing required constants');
    }
    console.log('✅ All constants available\n');

    // Test 3: Plant Registry (synchronous test)
    console.log('3️⃣ Testing Plant Registry...');
    const registry = db.getPlantRegistry();
    if (!(registry instanceof Map)) {
      throw new Error('Plant registry should return a Map');
    }
    
    if (registry.size === 0) {
      console.log('⚠️ Plant registry is empty (this is expected during initial load)');
    } else {
      console.log(`✅ Plant registry loaded with ${registry.size} plants`);
    }
    console.log('✅ Plant registry structure is correct\n');

    // Test 4: Utility Functions
    console.log('4️⃣ Testing Utility Functions...');
    
    // Test temperature formatting
    const tempF = db.formatTemperature('70-85°F');
    if (typeof tempF !== 'string' || !tempF.includes('°C')) {
      throw new Error('Temperature formatting failed');
    }
    
    // Test date formatting
    const dateStr = db.formatDateForDisplay('05-15', 'en');
    if (typeof dateStr !== 'string') {
      throw new Error('Date formatting failed');
    }
    
    // Test phase emoji
    const emoji = db.getPhaseEmoji('seedling');
    if (typeof emoji !== 'string') {
      throw new Error('Phase emoji failed');
    }
    
    console.log('✅ Utility functions working\n');

    // Test 5: Module Import Structure
    console.log('5️⃣ Testing Individual Module Imports...');
    
    const { initializeDB } = await import('./connection.js');
    const { getPlantDataForEnvironment } = await import('./plants.js');
    const { addPlanting } = await import('./plantings.js');
    const { createPlantingEvents } = await import('./events.js');
    const { addPlantNote } = await import('./notes.js');
    const { formatTemperature } = await import('./utils.js');
    
    if (typeof initializeDB !== 'function' ||
        typeof getPlantDataForEnvironment !== 'function' ||
        typeof addPlanting !== 'function' ||
        typeof createPlantingEvents !== 'function' ||
        typeof addPlantNote !== 'function' ||
        typeof formatTemperature !== 'function') {
      throw new Error('Individual module imports failed');
    }
    
    console.log('✅ Individual modules import correctly\n');

    // Test 6: Migration Bridge
    console.log('6️⃣ Testing Migration Bridge...');
    
    const bridge = await import('./migration-bridge.js');
    if (!bridge.PLANTS_DATA || typeof bridge.addPlanting !== 'function') {
      throw new Error('Migration bridge exports missing');
    }
    
    console.log('✅ Migration bridge available\n');

    // Test 7: Plant Categories
    console.log('7️⃣ Testing Plant Categories...');
    
    const categories = Object.values(db.PLANT_CATEGORIES);
    const expectedCategories = ['Cannabis', 'Vegetables', 'Herbs', 'Fruits', 'Fruit Trees'];
    
    for (const expected of expectedCategories) {
      if (!categories.includes(expected)) {
        throw new Error(`Missing plant category: ${expected}`);
      }
    }
    
    console.log('✅ All plant categories present\n');

    // Test 8: Function Signatures (basic validation)
    console.log('8️⃣ Testing Function Signatures...');
    
    // These should not throw errors when called with proper parameters
    try {
      db.getPhaseCheckpoints('seedling', {}); // Provide empty plant data object
      db.getWateringInterval('Vegetables', 'seedling'); // Use proper category name
    } catch (error) {
      if (!error.message.includes('not found')) {
        throw error; // Only throw if it's not a "plant not found" error
      }
    }
    
    console.log('✅ Function signatures valid\n');

    // Test 9: Export Consistency
    console.log('9️⃣ Testing Export Consistency...');
    
    // Check that named exports match default export
    const { getPlantRegistry: namedExport } = await import('./index.js');
    if (namedExport !== db.getPlantRegistry) {
      throw new Error('Named export does not match default export');
    }
    
    console.log('✅ Export consistency verified\n');

    // Test 10: Error Handling
    console.log('🔟 Testing Error Handling...');
    
    try {
      db.getPhaseEmoji('invalid_phase');
      // Should not throw, should return default
    } catch (error) {
      throw new Error('Error handling for invalid phase failed');
    }
    
    console.log('✅ Error handling works\n');

    console.log('🎉 PHASE 2 TEST PASSED!');
    console.log('================================');
    console.log('✅ All 10 test categories passed');
    console.log('✅ Modular structure is working');
    console.log('✅ All exports are available');
    console.log('✅ Migration bridge is ready');
    console.log('\n🚀 Phase 2 refactoring is COMPLETE!');
    
  } catch (error) {
    console.error('❌ PHASE 2 TEST FAILED:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run the test
testPhase2DBOperations(); 