const fs = require('fs');
let css = fs.readFileSync('builder/styles.css', 'utf8');

// Add html overflow-x and max-width
css = css.replace(/html\s*\{[\s\S]*?\}/, `html {
  font-size: 16px;
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
  overflow-x: hidden;
  max-width: 100%;
}`);

// Add body max-width
css = css.replace(/body\s*\{([\s\S]*?overflow-x:\s*hidden;[\s\S]*?)\}/, `body {$1\n  max-width: 100%;\n}`);

// Add img, video reset right after body
const imgReset = `
img, picture, svg, video {
  max-width: 100%;
  height: auto;
  display: block;
}
`;
css = css.replace(/(body\s*\{[\s\S]*?\})/, `$1\n${imgReset}`);

// Fix RTL margins or widths that might overflow
// Often, absolute elements like .hero__float-review or decorative elements cause overflow
// Look for negative margins or widths > 100vw
// I will just add `.container { max-width: 100%; }` as a safeguard, though they use --container-max
// .hero-glow has `width: 800px; height: 800px;` - maybe it causes overflow if not hidden?
// .hero-glow has position: absolute, but .hero has overflow: hidden. So it's safe.

fs.writeFileSync('builder/styles.css', css, 'utf8');
console.log("Added base resets for html, body, and img");
