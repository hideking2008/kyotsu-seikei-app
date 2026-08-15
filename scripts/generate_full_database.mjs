import fs from 'fs';
import path from 'path';

// Let's ensure directories exist
const dbDir = path.resolve('src/data/db');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Load material mappings
const materials = JSON.parse(fs.readFileSync('src/data/db/materialsMapping.json', 'utf8'));
const matMap = new Map();
for (const m of materials) {
  matMap.set(m.question_id, m);
}

console.log(`Loaded ${materials.length} material mappings.`);
