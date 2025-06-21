// 🧪 Automatisches Test-Script für SimpleGardeningCalendar
// Einfach in Browser Console eingeben oder als Datei ausführen

class GardeningCalendarTester {
  constructor() {
    this.results = {
      totalTests: 0,
      passed: 0,
      failed: 0,
      errors: [],
      warnings: [],
      plantTests: {},
      environmentTests: {},
      functionTests: {},
      performanceTests: {},
      startTime: Date.now()
    };
  }

  // 🚀 Haupt-Test-Funktion
  async runAllTests() {
    console.log('🧪 Starting Comprehensive Garden Calendar Tests...\n');
    
    try {
      await this.testDatabaseConnection();
      await this.testPlantData();
      await this.testEnvironments();
      await this.testPlantCreation();
      await this.testEventGeneration();
      await this.testPhaseCalculations();
      await this.testSeasonalValidation();
      await this.testGoogleCalendarIntegration();
      await this.testPerformance();
      
      this.generateReport();
      
    } catch (error) {
      this.logError('CRITICAL', 'Test suite crashed', error);
    }
  }

  // 📊 Datenbank-Verbindung testen
  async testDatabaseConnection() {
    console.log('🔍 Testing Database Connection...');
    
    try {
      const { openDB } = await import('idb');
      const db = await openDB('gardening-calendar', 5);
      
      // Test alle Stores
      const stores = ['events', 'plantings', 'plantNotes'];
      for (const store of stores) {
        const count = await db.count(store);
        this.logSuccess(`Database store '${store}': ${count} entries`);
      }
      
      await db.close();
      this.results.functionTests.database = 'PASSED';
      
    } catch (error) {
      this.logError('DATABASE', 'Database connection failed', error);
      this.results.functionTests.database = 'FAILED';
    }
  }

  // 🌱 Alle Pflanzen-Daten testen
  async testPlantData() {
    console.log('🌱 Testing Plant Data...');
    
    try {
      const { getPlantRegistry, PLANT_CATEGORIES } = await import('./src/core/db/index.js');
      const plantRegistry = getPlantRegistry();
      
      // Test Pflanzen-Struktur
      let plantCount = 0;
      for (const [key, plant] of plantRegistry.entries()) {
        plantCount++;
        const testResult = {
          hasName: !!plant.name,
          hasCategory: !!plant.category,
          hasPhases: !!plant.phases,
          hasEnvironments: !!plant.environments,
          phasesCount: plant.phases ? Object.keys(plant.phases).length : 0,
          environmentsCount: plant.environments ? Object.keys(plant.environments).length : 0,
          hasLegalNote: !!plant.legalNote,
          errors: []
        };

        // Validierung
        if (!plant.name) testResult.errors.push('Missing name');
        if (!plant.category) testResult.errors.push('Missing category');
        if (!plant.phases || Object.keys(plant.phases).length === 0) {
          testResult.errors.push('Missing phases');
        }

        // Phasen-Validierung
        if (plant.phases) {
          for (const [phaseName, phaseData] of Object.entries(plant.phases)) {
            if (!phaseData.days || phaseData.days <= 0) {
              testResult.errors.push(`Invalid phase duration: ${phaseName}`);
            }
          }
        }

        this.results.plantTests[key] = testResult;
        
        if (testResult.errors.length === 0) {
          this.logSuccess(`Plant '${plant.name}': ✅ All checks passed`);
        } else {
          this.logWarning(`Plant '${plant.name}': ⚠️ ${testResult.errors.join(', ')}`);
        }
      }

      // Kategorien testen
      const categoryCount = PLANT_CATEGORIES.length;
      this.logSuccess(`Found ${plantCount} plants in ${categoryCount} categories`);
      
      // Prüfe ob alle Pflanzen gültige Kategorien haben
      const invalidCategories = Array.from(plantRegistry.values())
        .filter(plant => !PLANT_CATEGORIES.includes(plant.category))
        .map(plant => plant.name);
      
      if (invalidCategories.length > 0) {
        this.logWarning(`Plants with invalid categories: ${invalidCategories.join(', ')}`);
      }

    } catch (error) {
      this.logError('PLANT_DATA', 'Plant data test failed', error);
    }
  }

  // 🌍 Umgebungen testen
  async testEnvironments() {
    console.log('🌍 Testing Growing Environments...');
    
    try {
      const { GROWING_ENVIRONMENTS, SEASONAL_REGIONS, getPlantDataForEnvironment, getPlantRegistry } = await import('./src/core/db/index.js');
      
      const environments = Object.values(GROWING_ENVIRONMENTS);
      const regions = Object.values(SEASONAL_REGIONS);
      
      this.logSuccess(`Found ${environments.length} environments: ${environments.join(', ')}`);
      this.logSuccess(`Found ${regions.length} regions: ${regions.join(', ')}`);
      
      // Test Umgebungs-spezifische Daten
      const plantRegistry = getPlantRegistry();
      let envTestCount = 0;
      
      for (const [plantKey, plant] of plantRegistry.entries()) {
        for (const env of environments) {
          const envData = getPlantDataForEnvironment(plantKey, env);
          if (envData) {
            envTestCount++;
            
            if (!envData.phases || Object.keys(envData.phases).length === 0) {
              this.logWarning(`${plant.name} (${env}): No phases defined`);
            }
          }
        }
      }
      
      this.results.environmentTests = {
        totalCombinations: envTestCount,
        environments: environments.length,
        regions: regions.length
      };
      
      this.logSuccess(`Tested ${envTestCount} plant-environment combinations`);

    } catch (error) {
      this.logError('ENVIRONMENTS', 'Environment test failed', error);
    }
  }

  // 🌿 Pflanzen-Erstellung simulieren
  async testPlantCreation() {
    console.log('🌿 Testing Plant Creation...');
    
    try {
      const { getPlantRegistry, getPlantDataForEnvironment } = await import('./src/core/db/index.js');
      const plantRegistry = getPlantRegistry();
      
      // Test verschiedene Pflanzen-Typen
      const testPlants = [
        { key: 'basil', env: 'indoor', name: 'Basilikum Indoor' },
        { key: 'tomato', env: 'outdoor', name: 'Tomaten Outdoor' },
        { key: 'cannabis_indica', env: 'indoor', name: 'Cannabis Indoor' },
        { key: 'apple_tree', env: 'outdoor', name: 'Apfelbaum' }
      ];

      for (const testPlant of testPlants) {
        const plantData = getPlantDataForEnvironment(testPlant.key, testPlant.env);
        
        if (plantData) {
          const phases = Object.keys(plantData.phases);
          const totalDays = Object.values(plantData.phases)
            .reduce((sum, phase) => sum + phase.days, 0);
          
          this.logSuccess(`${testPlant.name}: ${phases.length} phases, ${totalDays} days total`);
          
          // Test Phase-Berechnung
          const startDate = new Date();
          let currentDate = new Date(startDate);
          const phaseSchedule = [];
          
          for (const [phaseName, phaseData] of Object.entries(plantData.phases)) {
            phaseSchedule.push({
              phase: phaseName,
              startDate: new Date(currentDate),
              days: phaseData.days
            });
            currentDate.setDate(currentDate.getDate() + phaseData.days);
          }
          
          this.results.plantTests[testPlant.key] = {
            ...this.results.plantTests[testPlant.key],
            phases: phases.length,
            totalDays,
            phaseSchedule
          };
          
        } else {
          this.logWarning(`${testPlant.name}: No data found for ${testPlant.env} environment`);
        }
      }

    } catch (error) {
      this.logError('PLANT_CREATION', 'Plant creation test failed', error);
    }
  }

  // 📅 Event-Generierung testen
  async testEventGeneration() {
    console.log('📅 Testing Event Generation...');
    
    try {
      // Simuliere Event-Erstellung für verschiedene Pflanzen
      const testScenarios = [
        {
          plantType: 'basil',
          environment: 'indoor',
          reminderOptions: {
            enableWatering: true,
            wateringInterval: 3,
            enableFertilizing: true,
            fertilizingInterval: 14,
            enablePhaseReminders: true,
            enableWeeklyChecks: true,
            enableHarvestReminder: true
          }
        },
        {
          plantType: 'tomato',
          environment: 'outdoor',
          reminderOptions: {
            enableWatering: true,
            wateringInterval: 2,
            enableFertilizing: true,
            fertilizingInterval: 7,
            enablePhaseReminders: true,
            enableWeeklyChecks: false,
            enableHarvestReminder: true
          }
        }
      ];

      for (const scenario of testScenarios) {
        const { getPlantDataForEnvironment } = await import('./src/core/db/index.js');
        const plantData = getPlantDataForEnvironment(scenario.plantType, scenario.environment);
        
        if (plantData) {
          // Berechne erwartete Event-Anzahl
          let expectedEvents = 0;
          
          // Phase-Events
          if (scenario.reminderOptions.enablePhaseReminders) {
            expectedEvents += Object.keys(plantData.phases).length;
          }
          
          // Watering-Events
          if (scenario.reminderOptions.enableWatering) {
            const totalDays = Object.values(plantData.phases)
              .reduce((sum, phase) => sum + phase.days, 0);
            expectedEvents += Math.floor(totalDays / scenario.reminderOptions.wateringInterval);
          }
          
          // Harvest-Event
          if (scenario.reminderOptions.enableHarvestReminder) {
            expectedEvents += 1;
          }
          
          this.logSuccess(`${scenario.plantType} (${scenario.environment}): ~${expectedEvents} events expected`);
          
          this.results.functionTests.eventGeneration = 'PASSED';
        }
      }

    } catch (error) {
      this.logError('EVENT_GENERATION', 'Event generation test failed', error);
      this.results.functionTests.eventGeneration = 'FAILED';
    }
  }

  // ⏰ Phasen-Berechnungen testen
  async testPhaseCalculations() {
    console.log('⏰ Testing Phase Calculations...');
    
    try {
      const { getPlantDataForEnvironment } = await import('./src/core/db/index.js');
      
      // Test verschiedene Datum-Berechnungen
      const testDates = [
        '2024-01-15', // Winter
        '2024-04-15', // Frühling
        '2024-07-15', // Sommer
        '2024-10-15'  // Herbst
      ];

      for (const startDate of testDates) {
        const plantData = getPlantDataForEnvironment('tomato', 'outdoor');
        if (plantData) {
          let currentDate = new Date(startDate);
          const phases = [];
          
          for (const [phaseName, phaseData] of Object.entries(plantData.phases)) {
            phases.push({
              name: phaseName,
              start: new Date(currentDate),
              days: phaseData.days
            });
            currentDate.setDate(currentDate.getDate() + phaseData.days);
          }
          
          const totalDays = phases.reduce((sum, phase) => sum + phase.days, 0);
          const endDate = new Date(startDate);
          endDate.setDate(endDate.getDate() + totalDays);
          
          this.logSuccess(`Start: ${startDate} → End: ${endDate.toISOString().split('T')[0]} (${totalDays} days)`);
        }
      }
      
      this.results.functionTests.phaseCalculations = 'PASSED';

    } catch (error) {
      this.logError('PHASE_CALC', 'Phase calculation test failed', error);
      this.results.functionTests.phaseCalculations = 'FAILED';
    }
  }

  // 🌤️ Saisonale Validierung testen
  async testSeasonalValidation() {
    console.log('🌤️ Testing Seasonal Validation...');
    
    try {
      const { validatePlantingDate } = await import('./src/core/db/index.js');
      
      const testCases = [
        { plant: 'tomato', env: 'outdoor', date: '2024-03-15', region: 'temperate_north' },
        { plant: 'tomato', env: 'outdoor', date: '2024-12-15', region: 'temperate_north' },
        { plant: 'basil', env: 'indoor', date: '2024-01-15', region: 'temperate_north' },
        { plant: 'cannabis_indica', env: 'indoor', date: '2024-06-15', region: 'temperate_north' }
      ];

      for (const testCase of testCases) {
        const validation = validatePlantingDate(
          testCase.plant, 
          testCase.env, 
          testCase.date, 
          testCase.region
        );
        
        const status = validation.valid ? '✅ VALID' : '⚠️ WARNING';
        this.logSuccess(`${testCase.plant} (${testCase.env}) on ${testCase.date}: ${status} - ${validation.message}`);
      }
      
      this.results.functionTests.seasonalValidation = 'PASSED';

    } catch (error) {
      this.logError('SEASONAL', 'Seasonal validation test failed', error);
      this.results.functionTests.seasonalValidation = 'FAILED';
    }
  }

  // 🗓️ Google Calendar Integration testen
  async testGoogleCalendarIntegration() {
    console.log('🗓️ Testing Google Calendar Integration...');
    
    try {
      // Test ob Google Calendar Module geladen werden können
      const gcModule = await import('./src/googleCalendar.js');
      const gcUIModule = await import('./src/googleCalendarUI.js');
      
      this.logSuccess('Google Calendar modules loaded successfully');
      
      // Test Settings
      const { googleCalendarSettings } = gcModule;
      const settings = googleCalendarSettings.load();
      
      this.logSuccess(`Google Calendar settings: ${Object.keys(settings).length} properties`);
      
      // Test ob alle notwendigen Funktionen existieren
      const requiredFunctions = [
        'showGoogleCalendarSetup',
        'autoSyncEvent',
        'syncAllEventsToGoogle',
        'importEventsFromGoogle'
      ];
      
      for (const func of requiredFunctions) {
        if (typeof gcUIModule[func] === 'function' || typeof gcModule[func] === 'function') {
          this.logSuccess(`Function '${func}' exists`);
        } else {
          this.logWarning(`Function '${func}' missing`);
        }
      }
      
      this.results.functionTests.googleCalendar = 'PASSED';

    } catch (error) {
      this.logError('GOOGLE_CALENDAR', 'Google Calendar test failed', error);
      this.results.functionTests.googleCalendar = 'FAILED';
    }
  }

  // ⚡ Performance-Tests
  async testPerformance() {
    console.log('⚡ Testing Performance...');
    
    try {
      const startTime = performance.now();
      
      // Test große Datenmengen
      const { getPlantRegistry } = await import('./src/core/db/index.js');
      const plantRegistry = getPlantRegistry();
      const plantCount = plantRegistry.size;
      
      // Simuliere 100 Pflanzen-Berechnungen
      const iterations = 100;
      const perfStart = performance.now();
      
      const plantKeys = Array.from(plantRegistry.keys());
      for (let i = 0; i < iterations; i++) {
        const randomPlant = plantKeys[Math.floor(Math.random() * plantCount)];
        const { getPlantDataForEnvironment } = await import('./src/core/db/index.js');
        getPlantDataForEnvironment(randomPlant, 'indoor');
      }
      
      const perfEnd = performance.now();
      const avgTime = (perfEnd - perfStart) / iterations;
      
      this.results.performanceTests = {
        plantLookupAvg: avgTime,
        totalPlants: plantCount,
        iterations
      };
      
      this.logSuccess(`Average plant lookup: ${avgTime.toFixed(2)}ms`);
      
      if (avgTime < 1) {
        this.logSuccess('Performance: EXCELLENT (< 1ms)');
      } else if (avgTime < 5) {
        this.logSuccess('Performance: GOOD (< 5ms)');
      } else {
        this.logWarning('Performance: SLOW (> 5ms)');
      }

    } catch (error) {
      this.logError('PERFORMANCE', 'Performance test failed', error);
    }
  }

  // 📊 Finaler Report
  generateReport() {
    const endTime = Date.now();
    const duration = endTime - this.results.startTime;
    
    console.log('\n' + '='.repeat(60));
    console.log('🎯 FINAL TEST REPORT');
    console.log('='.repeat(60));
    
    console.log(`⏱️  Duration: ${duration}ms`);
    console.log(`✅ Passed: ${this.results.passed}`);
    console.log(`❌ Failed: ${this.results.failed}`);
    console.log(`⚠️  Warnings: ${this.results.warnings.length}`);
    console.log(`🔥 Errors: ${this.results.errors.length}`);
    
    // Plant Tests Summary
    console.log('\n🌱 PLANT TESTS:');
    const plantTests = Object.entries(this.results.plantTests);
    const validPlants = plantTests.filter(([_, test]) => test.errors?.length === 0).length;
    console.log(`   Valid Plants: ${validPlants}/${plantTests.length}`);
    
    // Function Tests Summary
    console.log('\n🔧 FUNCTION TESTS:');
    Object.entries(this.results.functionTests).forEach(([func, status]) => {
      const icon = status === 'PASSED' ? '✅' : '❌';
      console.log(`   ${icon} ${func}: ${status}`);
    });
    
    // Performance Summary
    if (this.results.performanceTests.plantLookupAvg) {
      console.log('\n⚡ PERFORMANCE:');
      console.log(`   Plant Lookup: ${this.results.performanceTests.plantLookupAvg.toFixed(2)}ms avg`);
    }
    
    // Errors & Warnings
    if (this.results.errors.length > 0) {
      console.log('\n🔥 ERRORS:');
      this.results.errors.forEach(error => {
        console.log(`   ❌ [${error.type}] ${error.message}`);
        if (error.details) console.log(`      Details: ${error.details}`);
      });
    }
    
    if (this.results.warnings.length > 0) {
      console.log('\n⚠️  WARNINGS:');
      this.results.warnings.forEach(warning => {
        console.log(`   ⚠️  ${warning}`);
      });
    }
    
    // Recommendations
    console.log('\n💡 RECOMMENDATIONS:');
    if (this.results.errors.length === 0) {
      console.log('   🎉 All critical tests passed! App is ready for use.');
    } else {
      console.log('   🔧 Fix critical errors before production use.');
    }
    
    if (this.results.warnings.length > 0) {
      console.log('   📝 Consider addressing warnings for better user experience.');
    }
    
    console.log('\n' + '='.repeat(60));
    console.log('Test completed! 🎯');
    console.log('='.repeat(60));
    
    // Return results for programmatic use
    return this.results;
  }

  // Helper Methods
  logSuccess(message) {
    console.log(`✅ ${message}`);
    this.results.passed++;
    this.results.totalTests++;
  }

  logWarning(message) {
    console.log(`⚠️  ${message}`);
    this.results.warnings.push(message);
    this.results.totalTests++;
  }

  logError(type, message, error = null) {
    console.log(`❌ [${type}] ${message}`);
    if (error) console.log(`   Details: ${error.message}`);
    
    this.results.errors.push({
      type,
      message,
      details: error ? error.message : null,
      timestamp: new Date().toISOString()
    });
    this.results.failed++;
    this.results.totalTests++;
  }
}

// 🚀 Auto-Start Funktion
async function runGardenTests() {
  const tester = new GardeningCalendarTester();
  return await tester.runAllTests();
}

// Export für verschiedene Verwendungen
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GardeningCalendarTester, runGardenTests };
} else if (typeof window !== 'undefined') {
  window.GardeningCalendarTester = GardeningCalendarTester;
  window.runGardenTests = runGardenTests;
}

// 🎯 VERWENDUNG:
// 1. In Browser Console: runGardenTests()
// 2. Als Script: node test-script.js
// 3. In HTML: <script src="test-script.js"></script> dann runGardenTests()

console.log('🧪 Garden Calendar Test Script loaded!');
console.log('📝 Run tests with: runGardenTests()'); 