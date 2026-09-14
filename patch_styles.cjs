const fs = require('fs');

// Patch CSS
let css = fs.readFileSync('builder/styles.css', 'utf8');

// 1. Order Tray Scrollable
const trayTarget = `.order-tray {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%) translateY(140%);
  z-index: 80;
  width: calc(100% - 32px);
  max-width: 760px;
  background-color: var(--cocoa);
  color: #FFFFFF;
  border-radius: 26px;
  padding: 10px 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: var(--shadow-l3);
  transition: transform 380ms cubic-bezier(.2,.9,.3,1.2), border-radius 240ms ease;
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(16px);
}`;

const trayReplace = `.order-tray {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%) translateY(140%);
  z-index: 80;
  width: calc(100% - 32px);
  max-width: 760px;
  max-height: calc(100vh - 48px);
  background-color: var(--cocoa);
  color: #FFFFFF;
  border-radius: 26px;
  padding: 10px 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: var(--shadow-l3);
  transition: transform 380ms cubic-bezier(.2,.9,.3,1.2), border-radius 240ms ease;
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(16px);
}`;
css = css.replace(trayTarget, trayReplace);

const breakdownTarget = `.tray-breakdown {
  background: rgba(0, 0, 0, 0.28);
  border-radius: 18px;
  padding: 14px 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 8px;
}`;
const breakdownReplace = `.tray-breakdown {
  background: rgba(0, 0, 0, 0.28);
  border-radius: 18px;
  padding: 14px 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
  max-height: 40vh;
}`;
css = css.replace(breakdownTarget, breakdownReplace);

// 2. Adjust Watermark CSS
const watermarkTarget = `.watermark-pill {
  position: fixed;
  bottom: 24px;
  right: 24px;
  left: auto;
  z-index: 85;`;
const watermarkReplace = `.watermark-pill {
  display: inline-flex;
  margin-top: 16px;`;
css = css.replace(watermarkTarget, watermarkReplace);

// 3. Tray button color adjust
const btnGhostTrayTarget = `.btn--ghost {
  background-color: transparent;
  color: var(--cocoa);
  border: 1px solid var(--line);
}`;
const btnGhostTrayReplace = `.btn--ghost {
  background-color: transparent;
  color: var(--cocoa);
  border: 1px solid var(--line);
}
.order-tray__actions .btn--ghost {
  color: #FFFFFF;
  border-color: rgba(255, 255, 255, 0.4);
}
.order-tray__actions .btn--ghost:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.6);
}`;
if (!css.includes('.order-tray__actions .btn--ghost')) {
  css = css.replace(btnGhostTrayTarget, btnGhostTrayReplace);
}

fs.writeFileSync('builder/styles.css', css);
console.log("Patched styles.css");

// Patch Body HTML for Watermark Pill
let html = fs.readFileSync('builder/body.html', 'utf8');

const watermarkHtmlTarget = `  <!-- Developer Watermark Pill -->
  <div class="watermark-pill" id="watermarkPill" role="status" aria-label="Developer signature">
    <span class="watermark-pill__dot"></span>
    <span class="watermark-pill__text">developed with respect and love by null-tech</span>
  </div>`;

if(html.includes(watermarkHtmlTarget)) {
  html = html.replace(watermarkHtmlTarget, "");
  
  const footerTarget = `        <div class="footer__bottom">
          <p>© <span id="currentYear"></span> <span id="footerCopyrightName">Yummy Sweets</span>. <span data-i18n="footerRights">All rights reserved.</span></p>
        </div>`;
  const footerReplace = `        <div class="footer__bottom" style="display:flex; flex-direction:column; align-items:center;">
          <p>© <span id="currentYear"></span> <span id="footerCopyrightName">Yummy Sweets</span>. <span data-i18n="footerRights">All rights reserved.</span></p>
          <div class="watermark-pill" id="watermarkPill" role="status" aria-label="Developer signature" style="background:transparent; border:none; box-shadow:none;">
            <span class="watermark-pill__dot"></span>
            <span class="watermark-pill__text" style="color:var(--muted); opacity: 0.8;">developed with respect and love by null-tech</span>
          </div>
        </div>`;
  
  html = html.replace(footerTarget, footerReplace);
  fs.writeFileSync('builder/body.html', html);
  console.log("Patched body.html");
}

