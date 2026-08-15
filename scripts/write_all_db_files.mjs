import fs from 'fs';
import path from 'path';

// Let's verify existing materials mapping
const materialsMapping = JSON.parse(fs.readFileSync('src/data/db/materialsMapping.json', 'utf8'));
const mapByQId = new Map();
materialsMapping.forEach(m => mapByQId.set(m.question_id, m));

console.log('Materials map count:', mapByQId.size);
