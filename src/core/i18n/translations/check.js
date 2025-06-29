// Kontrollskript für Pflanzen-Übersetzungen gegen DB (nur reine Pflanzen-Objekte)
// Usage: node check.js [sprache1] [sprache2] ...
// Beispiel: node check.js de (nur Deutsch)
// Beispiel: node check.js de en (nur Deutsch und Englisch)
// Beispiel: node check.js (alle Sprachen)
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_PLANTS_DIR = path.resolve(__dirname, '../../db/plants');
const TRANSLATIONS_ROOT = path.resolve(__dirname);

// Lade categories.js und problems.js
function loadCategoriesAndProblems() {
  const categoriesPath = path.join(DB_PLANTS_DIR, 'categories.js');
  const problemsPath = path.join(DB_PLANTS_DIR, 'problems.js');
  
  let categories = {};
  let problems = {};
  
  try {
    // Lade categories.js
    const categoriesCode = fs.readFileSync(categoriesPath, 'utf-8');
    const categoriesMatch = categoriesCode.match(/export\s+const\s+PLANT_CATEGORIES\s*=\s*(\{[\s\S]*?\});/m);
    if (categoriesMatch) {
      categories = eval('(' + categoriesMatch[1] + ')');
    }
    
    // Lade problems.js
    const problemsCode = fs.readFileSync(problemsPath, 'utf-8');
    const problemsMatch = problemsCode.match(/export\s+const\s+COMMON_PROBLEMS\s*=\s*(\{[\s\S]*?\});/m);
    if (problemsMatch) {
      problems = eval('(' + problemsMatch[1] + ')');
    }
  } catch (e) {
    console.log('WARNUNG: Konnte categories.js oder problems.js nicht laden:', e.message);
  }
  
  return { categories, problems };
}

function getAllLanguages() {
  return fs.readdirSync(TRANSLATIONS_ROOT).filter(f => {
    const full = path.join(TRANSLATIONS_ROOT, f);
    return fs.statSync(full).isDirectory() && fs.existsSync(path.join(full, 'plants'));
  });
}

function getFilteredLanguages(requestedLangs) {
  const allLangs = getAllLanguages();
  if (requestedLangs.length === 0) {
    return allLangs;
  }
  
  const filtered = allLangs.filter(lang => requestedLangs.includes(lang));
  const invalid = requestedLangs.filter(lang => !allLangs.includes(lang));
  
  if (invalid.length > 0) {
    console.log(`WARNUNG: Unbekannte Sprachen: ${invalid.join(', ')}`);
    console.log(`Verfügbare Sprachen: ${allLangs.join(', ')}`);
  }
  
  return filtered;
}

function getAllPlantFilesFromDB() {
  let files = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir)) {
      const full = path.join(dir, entry);
      if (fs.statSync(full).isDirectory()) {
        walk(full);
      } else if (
        entry.endsWith('.js') &&
        !['problems.js', 'categories.js', 'index.js'].includes(entry)
      ) {
        // Nur Pflanzen-spezifische Dateien
        files.push(full);
      }
    }
  }
  walk(DB_PLANTS_DIR);
  return files;
}

function extractTranslationKeysFromObject(obj) {
  const keys = [];
  function walk(val) {
    if (typeof val === 'string' && val.includes('.')) {
      // Ignoriere Category-Keys, da sie zentral in categories.js definiert sind
      if (!val.startsWith('category.')) {
        keys.push(val);
      }
    } else if (Array.isArray(val)) {
      val.forEach(walk);
    } else if (typeof val === 'object' && val !== null) {
      Object.values(val).forEach(walk);
    }
  }
  walk(obj);
  return keys;
}

function extractPlantObjectFromDBFile(filePath, categories, problems) {
  const code = fs.readFileSync(filePath, 'utf-8');
  
  // Create evaluation context with necessary imports
  const evalContext = {
    PLANT_TAGS: {
      ANNUAL: 'annual',
      PERENNIAL: 'perennial',
      BIENNIAL: 'biennial',
      PHOTOPERIOD: 'photoperiod',
      AUTOFLOWER: 'autoflower',
      INDOOR: 'indoor',
      OUTDOOR: 'outdoor',
      HYDROPONIC: 'hydroponic',
      SOIL: 'soil',
      COCO: 'coco'
    },
    createProblemRefs: () => [],
    PLANT_CATEGORIES: categories,
    COMMON_PROBLEMS: problems
  };
  
  // Suche nach 'export const <name> = {'
  const exportMatch = code.match(/export\s+const\s+\w+\s*=\s*\{/m);
  if (exportMatch) {
    // Finde das erste '{' nach dem Match
    const braceStart = code.indexOf('{', exportMatch.index);
    if (braceStart !== -1) {
      let open = 1;
      let endIdx = braceStart;
      while (open > 0 && endIdx < code.length - 1) {
        endIdx++;
        if (code[endIdx] === '{') open++;
        else if (code[endIdx] === '}') open--;
      }
      if (open === 0) {
        const objStr = code.slice(braceStart, endIdx + 1);
        try {
          // eslint-disable-next-line no-eval
          const result = eval('(function() { const PLANT_TAGS = ' + JSON.stringify(evalContext.PLANT_TAGS) + '; const createProblemRefs = ' + evalContext.createProblemRefs.toString() + '; const PLANT_CATEGORIES = ' + JSON.stringify(categories) + '; const COMMON_PROBLEMS = ' + JSON.stringify(problems) + '; return ' + objStr + '; })()');
          return result;
        } catch (e) {
          return null;
        }
      }
    }
  }
  // Fallback: export default { ... }
  const defaultMatch = code.match(/export\s+default\s*(\{[\s\S]*?\})/m);
  if (defaultMatch) {
    try {
      // eslint-disable-next-line no-eval
      return eval('(' + defaultMatch[1] + ')');
    } catch {
      return null;
    }
  }
  return null;
}

function getTranslationFile(lang, dbFile) {
  // dbFile: .../plants/type/plant.js
  // translation: .../LANG/plants/type/plant.js
  const rel = path.relative(DB_PLANTS_DIR, dbFile);
  return path.join(TRANSLATIONS_ROOT, lang, 'plants', rel);
}

function loadTranslation(filePath) {
  if (!fs.existsSync(filePath)) return null;
  const code = fs.readFileSync(filePath, 'utf-8');
  const match = code.match(/^export default (\{[\s\S]*\});?\s*$/m);
  if (!match) return null;
  try {
    // eslint-disable-next-line no-eval
    const obj = eval('(' + match[1] + ')');
    if (typeof obj !== 'object' || Array.isArray(obj) || obj === null) return null;
    return obj;
  } catch {
    return null;
  }
}

function main() {
  // Hole Kommandozeilenargumente für Sprachen
  const requestedLangs = process.argv.slice(2);
  const langs = getFilteredLanguages(requestedLangs);
  
  const dbFiles = getAllPlantFilesFromDB();
  const { categories, problems } = loadCategoriesAndProblems();
  
  console.log('Gefundene DB-Dateien:', dbFiles.map(f => path.relative(DB_PLANTS_DIR, f)));
  console.log('Geprüfte Sprachen:', langs);
  if (requestedLangs.length > 0) {
    console.log('Angeforderte Sprachen:', requestedLangs);
  }
  console.log('Geladene Kategorien:', Object.keys(categories));
  console.log('Geladene Probleme:', Object.keys(problems));
  console.log('\n' + '='.repeat(80) + '\n');

  for (const dbFile of dbFiles) {
    const plantObj = extractPlantObjectFromDBFile(dbFile, categories, problems);
    if (!plantObj) {
      console.log(`WARNUNG: Konnte Pflanzenobjekt nicht aus ${path.relative(DB_PLANTS_DIR, dbFile)} extrahieren`);
      continue;
    }
    const expectedKeys = extractTranslationKeysFromObject(plantObj);
    for (const lang of langs) {
      const transFile = getTranslationFile(lang, dbFile);
      const relDB = path.relative(DB_PLANTS_DIR, dbFile);
      const relTrans = path.relative(TRANSLATIONS_ROOT, transFile);
      console.log(`[${lang}] DB: ${relDB} | Übersetzung: ${relTrans} | Erwartete Keys: ${expectedKeys.length}`);
      if (!fs.existsSync(transFile)) {
        console.log(`    FEHLT: Datei nicht vorhanden!`);
        console.log(`    Erwartete Keys: ${expectedKeys.slice(0, 10).join(', ')}${expectedKeys.length > 10 ? '...' : ''}`);
        continue;
      }
      const trans = loadTranslation(transFile);
      if (!trans) {
        console.log(`    FEHLER: Datei ungültig!`);
        console.log(`    Erwartete Keys: ${expectedKeys.slice(0, 10).join(', ')}${expectedKeys.length > 10 ? '...' : ''}`);
        continue;
      }
      const actualKeys = Object.keys(trans);
      const missing = expectedKeys.filter(k => !actualKeys.includes(k));
      const empty = actualKeys.filter(k => expectedKeys.includes(k) && (!trans[k] || String(trans[k]).trim() === ''));
      const extra = actualKeys.filter(k => !expectedKeys.includes(k));
      if (missing.length || empty.length || extra.length) {
        console.log(`    FEHLER:`);
        if (missing.length) console.log(`    Fehlende Keys (${missing.length}): ${missing.slice(0, 5).join(', ')}${missing.length > 5 ? '...' : ''}`);
        if (empty.length) console.log(`    Leere Werte (${empty.length}): ${empty.slice(0, 5).join(', ')}${empty.length > 5 ? '...' : ''}`);
        if (extra.length) console.log(`    Überflüssige Keys (${extra.length}): ${extra.slice(0, 5).join(', ')}${extra.length > 5 ? '...' : ''}`);
      } else {
        console.log(`    OK - Alle ${actualKeys.length} Keys vorhanden`);
      }
      console.log(`    Vorhandene Keys: ${actualKeys.length}`);
      console.log(`    Erwartete Keys: ${expectedKeys.length}`);
      console.log('');
    }
  }
  console.log('\nCheck abgeschlossen.');
}

main();