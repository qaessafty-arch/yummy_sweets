const fs = require('fs');
let code = fs.readFileSync('builder/styles.css', 'utf8');

code = code.replace(/@media \(min-width: 960px\) \{\n  \.economy-accordion__summary \{\n    cursor: default;\n    pointer-events: none;\n  \}\n  \.economy-accordion__chevron \{\n    display: none;\n  \}\n  \.economy-accordion__subtext \{\n    display: none;\n  \}\n\}/g, '');

fs.writeFileSync('builder/styles.css', code);
