const fs = require('fs');
let css = fs.readFileSync('builder/styles.css', 'utf8');

// 1. Hide desktop nav items by default
css = css.replace(
  /\.header__nav \{\n  display: flex;\n  align-items: center;\n  gap: 6px;\n\}/g,
  `.header__nav {\n  display: none;\n  align-items: center;\n  gap: 6px;\n}`
);

// 2. Hide desktop auth by default (add rule)
css = css.replace(
  /\.header__actions \{\n  display: flex;\n  align-items: center;\n  gap: 12px;\n\}/g,
  `.header__actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n#desktopAuthContainer, .header__actions .switch-group {\n  display: none;\n}`
);

// 3. Show burger btn by default
css = css.replace(
  /\.burger-btn \{\n  display: none;/g,
  `.burger-btn {\n  display: flex;`
);

// 4. In media query, we can leave the rule as is, it's redundant but harmless, or we can clean it up. Let's just do the above.

fs.writeFileSync('builder/styles.css', css);
console.log("Updated styles.css for global burger menu.");
