const fs = require('fs');
let css = fs.readFileSync('builder/styles.css', 'utf8');

// Header Background Colors
css = css.replace('rgba(255, 251, 247, 0.92)', 'rgba(247, 241, 232, 0.92)');
css = css.replace('rgba(255, 251, 247, 0.98)', 'rgba(247, 241, 232, 0.98)');
css = css.replace('rgba(59, 42, 38, 0.05)', 'rgba(44, 33, 27, 0.05)');

// Desktop Category Pills (Make them actual pills as per prompt: "Use pills only where they make sense: Tags, Categories, Small status badges")
const targetPills = `.desktop-category-pills {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 0;
}`;
const replacePills = `.desktop-category-pills {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 0;
}
.desktop-category-pills .btn {
  border-radius: var(--radius-pill);
}`;
if (!css.includes('.desktop-category-pills .btn {')) {
  css = css.replace(targetPills, replacePills);
}

// Ensure Noto Sans Arabic is used in dir=rtl
const targetRtl = `html[dir="rtl"] body {
  font-family: var(--font-ku-body);
}`;
const replaceRtl = `html[dir="rtl"] body {
  font-family: 'Noto Sans Arabic', sans-serif;
}
html[dir="rtl"] h1, html[dir="rtl"] h2, html[dir="rtl"] h3, html[dir="rtl"] h4, html[dir="rtl"] h5, html[dir="rtl"] .hero__title {
  font-family: 'Noto Sans Arabic', sans-serif;
}`;
if (!css.includes('html[dir="rtl"] h1')) {
  css = css.replace(targetRtl, replaceRtl);
}

fs.writeFileSync('builder/styles.css', css);
console.log("Patched styles.css for UX fixes");
