const fs = require('fs');
let html = fs.readFileSync('builder/body.html', 'utf8');

const targetHtml = `<div class="footer__copy">
      &copy; <span id="year">2026</span> <span id="footerCopyName">Yummy Sweets</span>. All rights reserved.
    </div>`;

const replacementHtml = `<div class="footer__copy">
      &copy; <span id="year">2026</span> <span id="footerCopyName">Yummy Sweets</span>. All rights reserved.
      <p style="margin-top: 6px; font-size: 0.72rem; color: rgba(255,255,255,0.6);">Allergen Note: Our products are prepared in a kitchen that handles nuts, dairy, eggs, and gluten. Please let us know of any severe allergies before ordering.</p>
    </div>`;

html = html.replace(targetHtml, replacementHtml);
fs.writeFileSync('builder/body.html', html);
console.log("Patched footer.");
