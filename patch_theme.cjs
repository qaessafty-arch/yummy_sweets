const fs = require('fs');

// --- 1. PATCH HEAD.HTML ---
let head = fs.readFileSync('builder/head.html', 'utf8');
const oldFonts = `family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500`;
const newFonts = `family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500`;
head = head.replace(oldFonts, newFonts);
// update theme color
head = head.replace(`content="#8E3B4A"`, `content="#8B4A32"`);
fs.writeFileSync('builder/head.html', head);
console.log("Patched head.html");

// --- 2. PATCH STYLES.CSS ---
let css = fs.readFileSync('builder/styles.css', 'utf8');

// A. Variables
const oldVars = `:root {
  /* Surfaces */
  --cream:       #FFFBF7;   /* page background */
  --shell:       #FDF3EC;   /* section alt background */
  --blush:       #F6DFD8;   /* soft accent tiles */
  --linen:       #FAF1EA;   /* card hover tint */

  /* Brand */
  --berry:       #8E3B4A;   /* primary action */
  --berry-dark:  #6E2C39;   /* hover / pressed */
  --berry-deep:  #4E1E28;   /* deep text accent */
  --cocoa:       #3B2A26;   /* dark sections, footer */
  --cocoa-soft:  #5A423C;   /* secondary dark text */
  --gold:        #C9A227;   /* star rating, dev badge */
  --gold-soft:   #E8C766;   /* gradient stops */

  /* Neutral */
  --ink:         #2E2422;   /* body text */
  --muted:       #7C6A66;   /* secondary text */
  --line:        #EFE1D9;   /* hairlines */
  --line-strong: #E4D0C5;   /* emphasized borders */

  /* Layered Elevation System */
  --shadow-l1: 0 1px 2px rgba(59,42,38,.04), 0 2px 8px rgba(59,42,38,.05);
  --shadow-l2: 0 4px 12px rgba(59,42,38,.08), 0 12px 32px rgba(59,42,38,.10);
  --shadow-l3: 0 8px 24px rgba(59,42,38,.12), 0 24px 60px rgba(59,42,38,.16);
  --shadow-l4: 0 12px 36px rgba(59,42,38,.16), 0 40px 80px rgba(59,42,38,.20);

  /* Radii */
  --radius-pill:  999px;
  --radius-card:  20px;
  --radius-panel: 28px;
  --radius-badge: 10px;
  --radius-input: 14px;

  /* Typography */
  --font-serif: 'Playfair Display', Georgia, 'Times New Roman', serif;
  --font-sans:  'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-ku-body:    'Vazirmatn', 'Inter', system-ui, sans-serif;
  --font-ku-display: 'Vazirmatn', 'Playfair Display', serif;`;

const newVars = `:root {
  /* Surfaces */
  --cream:       #F7F1E8;   /* page background */
  --shell:       #FFFDF8;   /* section alt background */
  --blush:       #E5D8C8;   /* soft accent tiles */
  --linen:       #FFFDF8;   /* card hover tint */

  /* Brand */
  --berry:       #8B4A32;   /* primary action */
  --berry-dark:  #713A27;   /* hover / pressed */
  --berry-deep:  #2C211B;   /* deep text accent */
  --cocoa:       #2C211B;   /* dark sections, footer */
  --cocoa-soft:  #7D6D61;   /* secondary dark text */
  --gold:        #C99A3D;   /* star rating, dev badge */
  --gold-soft:   #C99A3D;   /* gradient stops */

  /* Neutral */
  --ink:         #2C211B;   /* body text */
  --muted:       #7D6D61;   /* secondary text */
  --line:        #E5D8C8;   /* hairlines */
  --line-strong: #D8C5AE;   /* emphasized borders */

  /* Layered Elevation System */
  --shadow-l1: 0 4px 12px rgba(44, 33, 27, 0.05);
  --shadow-l2: 0 8px 30px rgba(44, 33, 27, 0.08); /* card shadow */
  --shadow-l3: 0 16px 45px rgba(44, 33, 27, 0.12); /* elevated shadow */
  --shadow-l4: 0 5px 14px rgba(139, 74, 50, 0.18); /* button shadow */

  /* Radii */
  --radius-pill:  999px;
  --radius-card:  18px;
  --radius-panel: 24px;
  --radius-badge: 8px;
  --radius-input: 12px;
  --radius-button: 12px;

  /* Typography */
  --font-serif: 'Cormorant Garamond', serif;
  --font-sans:  'Noto Sans Arabic', sans-serif;
  --font-ku-body:    'Noto Sans Arabic', sans-serif;
  --font-ku-display: 'Noto Sans Arabic', sans-serif;`;

css = css.replace(oldVars, newVars);

// B. Button Styling
const oldBtn = `.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--font-sans);
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: var(--radius-pill);
  padding: 14px 28px;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.3, 1);
  box-shadow: var(--shadow-l1);
  position: relative;
  overflow: hidden;
}`;
const newBtn = `.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--font-sans);
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: var(--radius-button);
  padding: 12px 20px;
  font-size: 0.95rem;
  transition: all 0.2s ease, transform 0.2s ease;
  box-shadow: var(--shadow-l4);
  position: relative;
  overflow: hidden;
}`;
css = css.replace(oldBtn, newBtn);

const btnPrimaryHover = `.btn--primary:hover {
  background-color: var(--berry-dark);
  box-shadow: var(--shadow-l2);
  transform: translateY(-2px);
}`;
const newBtnPrimaryHover = `.btn--primary:hover {
  background-color: var(--berry-dark);
  box-shadow: var(--shadow-l4);
  transform: translateY(-1px);
}`;
css = css.replace(btnPrimaryHover, newBtnPrimaryHover);

// C. Order Tray Background Fix
// The instructions said "WhatsApp Tray: Make the floating order tray feel like a premium concierge widget rather than a generic green WhatsApp button. Use the bakery's --primary color as the main container"
const trayBgTarget = `background-color: var(--cocoa);
  color: #FFFFFF;`;
const trayBgReplace = `background-color: var(--berry);
  color: #FFFFFF;`;
css = css.replace(trayBgTarget, trayBgReplace);

fs.writeFileSync('builder/styles.css', css);
console.log("Patched styles.css");

