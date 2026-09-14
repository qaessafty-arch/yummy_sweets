const fs = require('fs');
let css = fs.readFileSync('builder/styles.css', 'utf8');

css = css.replace(
  /\.cake-card__price \{\n    font-size: 1rem;\n  \}/g,
  `.price-wrap .price {\n    font-size: 1.1rem;\n  }`
);

fs.writeFileSync('builder/styles.css', css);
console.log("Updated mobile cake card styles.");
