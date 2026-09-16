const fs = require('fs');
let code = fs.readFileSync('builder/app.js', 'utf8');
code = code.replace(/onclick="app\.addToOrder\('\$\{item\.id\}'\)"/g, `onclick="app.openCustomizeModal('\${item.id}')"`);
fs.writeFileSync('builder/app.js', code);
console.log('Successfully patched menu clicks.');
