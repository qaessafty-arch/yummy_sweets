const fs = require('fs');
const css = fs.readFileSync('builder/styles.css', 'utf8');
const matches = css.match(/var\(--[a-zA-Z0-9-]+\)/g) || [];
const unique = [...new Set(matches)];
console.log(unique.sort().join('\n'));
