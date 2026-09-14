const fs = require('fs');
let css = fs.readFileSync('builder/styles.css', 'utf8');

// Instead of grid-template-columns: 1fr; in mobile, we can use 2 columns or smaller margins.
css = css.replace(
  /  \.menu-grid \{\n    grid-template-columns: 1fr;\n  \}/g,
  `  .menu-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n  .cake-card__body {\n    padding: 12px 14px;\n    gap: 8px;\n  }\n  .cake-card__title {\n    font-size: 0.95rem;\n  }\n  .cake-card__desc {\n    font-size: 0.8rem;\n  }\n  .cake-card__emoji {\n    font-size: 3rem;\n  }\n  .cake-card__footer {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 10px;\n  }\n  .cake-card__price {\n    font-size: 1rem;\n  }`
);

fs.writeFileSync('builder/styles.css', css);
console.log("Updated mobile grid");
