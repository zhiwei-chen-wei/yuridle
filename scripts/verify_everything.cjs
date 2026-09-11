const { execSync } = require('child_process');

console.log('=== 1. Checking Series Years ===');
console.log(execSync('node scripts/check_years.cjs').toString());

console.log('=== 2. Checking Character Years ===');
console.log(execSync('node scripts/check_char_years.cjs').toString());

console.log('=== 3. Checking Song Years ===');
console.log(execSync('node scripts/check_song_years.cjs').toString());

console.log('=== 4. Checking Relational Integrity ===');
console.log(execSync('node scripts/verify_integrity.cjs').toString());
