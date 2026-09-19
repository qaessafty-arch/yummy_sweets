const fs = require('fs');

let css = fs.readFileSync('builder/styles.css', 'utf8');

// 1. Fix modal window heights
css = css.replace(/\.modal-window--large \{\s*max-width: 960px;\s*height: 820px;\s*\}/, `.modal-window--large {
  max-width: 960px;
  height: 85vh;
  max-height: 800px;
}`);

// 2. Fix theme panel layout
// Currently it is:
// .theme-panel-layout {
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 24px;
// }
// @media (min-width: 1100px) {
//   .theme-panel-layout {
//     grid-template-columns: 2fr 1fr;
//   }
// }
css = css.replace(/@media \(min-width: 1100px\) \{\s*\.theme-panel-layout \{\s*grid-template-columns: 2fr 1fr;\s*\}\s*\}/, `@media (min-width: 900px) {
  .theme-panel-layout {
    grid-template-columns: 1.5fr 1fr;
  }
}`);

// 3. Fix theme preset grids
css = css.replace(/@media \(min-width: 760px\) \{\s*\.theme-presets \{\s*grid-template-columns: repeat\(2, 1fr\);\s*\}\s*\}/, `@media (min-width: 600px) {
  .theme-presets {
    grid-template-columns: repeat(2, 1fr);
  }
}`);

// 4. Panel layout inside large modal - height calc
// It is height: calc(100vh - 66px); in @media (max-width: 959px) 
// but in regular desktop it's not defined, or it's hardcoded.
// Let's ensure panel-layout works with flex so it doesn't overflow
css = css.replace(/\.panel-layout \{\s*display: grid;\s*grid-template-columns: 220px 1fr;\s*height: 100%;\s*\}/, `.panel-layout {
  display: grid;
  grid-template-columns: 220px 1fr;
  height: 100%;
  min-height: 0;
}`);

fs.writeFileSync('builder/styles.css', css, 'utf8');
console.log("Fixed panel sizes");
