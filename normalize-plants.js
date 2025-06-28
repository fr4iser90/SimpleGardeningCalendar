const fs = require('fs');
const path = require('path');

const PLANT_DIRS = [
  'src/core/db/plants/herbs',
  'src/core/db/plants/vegetables',
  'src/core/db/plants/fruits',
  'src/core/db/plants/fruit-trees',
  'src/core/db/plants/flowers',
];

const ENVIRONMENTS = ['indoor', 'outdoor', 'greenhouse'];
const PHASE_FIELDS = ['days', 'start', 'end', 'description', 'care', 'editable', 'soil', 'hydro', 'coco'];

function normalizePlantObj(plant) {
  const normalized = {
    name: plant.name || '',
    category: plant.category || '',
    tags: Array.isArray(plant.tags) ? plant.tags : [],
    emoji: plant.emoji || '',
    environments: {},
    careTips: plant.careTips || {},
    commonProblems: plant.commonProblems || {},
  };

  ENVIRONMENTS.forEach(env => {
    const envObj = plant.environments && plant.environments[env] ? plant.environments[env] : {};
    normalized.environments[env] = {};
    const phases = envObj.phases || {};
    normalized.environments[env].phases = {};
    Object.keys(phases).forEach(phaseName => {
      const phase = phases[phaseName] || {};
      const normPhase = {};
      PHASE_FIELDS.forEach(field => {
        if (phase[field] !== undefined) {
          normPhase[field] = phase[field];
        }
      });
      PHASE_FIELDS.forEach(field => {
        if (normPhase[field] === undefined) {
          normPhase[field] = (field === 'soil' || field === 'hydro' || field === 'coco') ? {} : null;
        }
      });
      normalized.environments[env].phases[phaseName] = normPhase;
    });
    Object.keys(envObj).forEach(key => {
      if (key !== 'phases') {
        normalized.environments[env][key] = envObj[key];
      }
    });
  });
  return normalized;
}

function processFile(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const match = code.match(/export const (\w+) = (\{[\s\S]*?\});/);
  if (!match) return;
  const varName = match[1];
  let objStr = match[2];
  let plantObj;
  try {
    let jsonStr = objStr
      .replace(/([\w\d_]+):/g, '"$1":')
      .replace(/'([^']*)'/g, '"$1"')
      .replace(/,\s*}/g, '}')
      .replace(/,\s*]/g, ']');
    plantObj = JSON.parse(jsonStr);
  } catch (e) {
    console.error('Could not parse:', filePath, e);
    return;
  }
  const normalized = normalizePlantObj(plantObj);
  const newCode =
    code.replace(
      /export const (\w+) = (\{[\s\S]*?\});/,
      `export const ${varName} = ${JSON.stringify(normalized, null, 2)};`
    );
  fs.writeFileSync(filePath + '.bak', code, 'utf8');
  fs.writeFileSync(filePath, newCode, 'utf8');
  console.log('Normalized:', filePath);
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.js') && file !== 'index.js') {
      processFile(filePath);
    }
  });
}

PLANT_DIRS.forEach(dir => walkDir(path.resolve(__dirname, dir)));
console.log('Done. All plant files normalized. Backups saved as .bak.'); 