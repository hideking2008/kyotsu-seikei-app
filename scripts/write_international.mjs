import fs from 'fs';
import path from 'path';

// Load materials mapping to cross-verify
const materialsMapping = JSON.parse(fs.readFileSync('src/data/db/materialsMapping.json', 'utf-8'));
const materialMap = new Map();
materialsMapping.forEach(m => {
  materialMap.set(m.question_id, m);
});

// We generate international.json (pe_0335 to pe_0456)
// Let's create the full data
