import fs from 'fs';
import path from 'path';

// This script writes the JSON files for political, economics, and international question databases
const outDir = path.resolve('src/data/db');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('Database directory verified:', outDir);
