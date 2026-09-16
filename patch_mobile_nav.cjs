const fs = require('fs');
let html = fs.readFileSync('builder/body.html', 'utf8');
const searchStr = `  <nav class="mobile-nav" id="mobileNav" aria-label="Mobile Navigation">
    <div class="mobile-nav__brand" style="display:flex;align-items:center;gap:10px;margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid var(--line);">
      <span class="logo__icon logo__mark" id="mobileLogoIcon" data-logo>🎂</span>
      <span class="brand__name" id="mobileShopName" style="font-size:1.15rem;">Yummy Sweets</span>
    </div>`;
const replaceStr = `  <nav class="mobile-nav" id="mobileNav" aria-label="Mobile Navigation">`;
html = html.replace(searchStr, replaceStr);
fs.writeFileSync('builder/body.html', html);
console.log('Removed mobile nav brand');
