const fs = require('fs');
let js = fs.readFileSync('builder/app.js', 'utf8');

const target = `      case 'contact':`;
const replace = `      case 'reviews':
        const reviews = c.reviews || [];
        content.innerHTML = \`
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 16px;">
            <h4 style="font-family:var(--font-serif); margin:0;">Reviews Editor</h4>
            <div>
              <button type="button" class="btn btn--ghost btn--sm" onclick="app.resetReviews()" style="margin-right:8px;">↺ Reset Reviews</button>
              <button type="button" class="btn btn--primary btn--sm" onclick="app.addReviewItem()">+ Add Review</button>
            </div>
          </div>
          <form onsubmit="app.saveReviewSettings(event)" id="reviewForm">
            <div id="reviewItemsContainer" style="display:flex; flex-direction:column; gap:16px;">
              \${reviews.map((r, i) => app.getReviewItemHtml(r, i)).join('')}
            </div>
            <button type="submit" class="btn btn--primary" style="margin-top: 24px; width: 100%;">\${this.t('btnSaveConfig') || 'Save Reviews'}</button>
          </form>
        \`;
        break;

      case 'contact':`;

js = js.replace(target, replace);
fs.writeFileSync('builder/app.js', js);
console.log("Patched tab");
