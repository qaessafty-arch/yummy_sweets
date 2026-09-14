const fs = require('fs');
let css = fs.readFileSync('builder/styles.css', 'utf8');

const searchMobileControls = `@media (max-width: 560px) {
  .menu-search-bar {
    padding: 8px 16px;
    height: 48px;
  }`;

const replaceMobileControls = `@media (max-width: 560px) {
  .menu-search-bar {
    padding: 6px 12px;
    height: 40px;
  }
  .menu-search-input {
    font-size: 0.85rem;
  }
  .form-select, .form-input {
    padding: 8px 12px;
    font-size: 0.85rem;
    height: 40px;
  }`;

if (!css.includes(searchMobileControls)) {
  console.log("Could not find mobile search bar");
} else {
  css = css.replace(searchMobileControls, replaceMobileControls);
  fs.writeFileSync('builder/styles.css', css);
  console.log("Updated mobile form controls!");
}
