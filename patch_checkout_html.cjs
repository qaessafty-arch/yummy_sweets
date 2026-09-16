const fs = require('fs');
let html = fs.readFileSync('builder/body.html', 'utf8');

const targetHtml = `<button type="button" class="btn btn--primary btn--sm" id="btnTrayWhatsApp" onclick="app.checkoutWhatsApp()" data-i18n="traySendWhatsApp">Send Order via WhatsApp</button>`;

const replacementHtml = `<div style="display:flex; flex-direction:column; align-items:flex-end; gap:4px;">
          <p style="font-size: 0.72rem; color: rgba(255,255,255,0.7); text-align: right; margin: 0; line-height: 1.2;">Payment via Cash on Delivery. Fee calculated on WhatsApp.</p>
          <button type="button" class="btn btn--primary btn--sm" id="btnTrayWhatsApp" onclick="app.checkoutWhatsApp()" data-i18n="traySendWhatsApp">Send Order via WhatsApp</button>
        </div>`;

if (html.includes(targetHtml)) {
  html = html.replace(targetHtml, replacementHtml);
  fs.writeFileSync('builder/body.html', html);
  console.log("Patched tray button in body.html");
} else {
  console.log("Could not find button HTML");
}
