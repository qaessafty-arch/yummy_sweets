const fs = require('fs');
let code = fs.readFileSync('builder/styles.css', 'utf8');

code = code.replace(
  /\.order-tray \{\n    border-radius: 20px;\n    padding: 12px;\n    bottom: 12px;\n  \}/g,
  `.order-tray {\n    border-radius: 20px;\n    padding: 12px;\n    bottom: 12px;\n    background-color: var(--ink);\n    backdrop-filter: none;\n    -webkit-backdrop-filter: none;\n  }`
);

fs.writeFileSync('builder/styles.css', code);
