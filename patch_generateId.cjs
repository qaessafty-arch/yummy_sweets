const fs = require('fs');
let code = fs.readFileSync('builder/app.js', 'utf8');

const search = `  init() {`;
const replace = `  generateId() {
    return 'item_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
  },
  
  init() {`;

code = code.replace(search, replace);
fs.writeFileSync('builder/app.js', code);
