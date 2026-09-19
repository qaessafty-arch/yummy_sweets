const fs = require('fs');
let css = fs.readFileSync('builder/styles.css', 'utf8');

css = css.replace(/var\(--radius-m\)/g, 'var(--radius-card)');
css = css.replace(/var\(--espresso\)/g, 'var(--ink)');
css = css.replace(/var\(--bg\)/g, 'var(--cream)');

css = css.replace(/\.panel-layout \{\s*display: grid;\s*grid-template-columns: 210px 1fr;\s*height: 100%;\s*min-height: 520px;\s*\}/, `.panel-layout {
  display: grid;
  grid-template-columns: 210px 1fr;
  flex: 1;
  min-height: 0;
}`);

fs.writeFileSync('builder/styles.css', css, 'utf8');
console.log("Fixed missing variables and panel flex");
