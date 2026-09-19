const fs = require('fs');
let css = fs.readFileSync('builder/styles.css', 'utf8');

// Revert theme-panel-layout media query
css = css.replace(/@media \(min-width: 900px\) \{\s*\.theme-panel-layout \{\s*grid-template-columns: 1\.5fr 1fr;\s*\}\s*\}/, `@media (min-width: 1100px) {
  .theme-panel-layout {
    grid-template-columns: 2fr 1fr;
  }
}`);

// Revert theme-presets media query
css = css.replace(/@media \(min-width: 600px\) \{\s*\.theme-presets \{\s*grid-template-columns: repeat\(2, 1fr\);\s*\}\s*\}/, `@media (min-width: 760px) {
  .theme-presets {
    grid-template-columns: repeat(2, 1fr);
  }
}`);

fs.writeFileSync('builder/styles.css', css, 'utf8');
console.log("Reverted media queries");
