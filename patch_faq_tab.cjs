const fs = require('fs');
let js = fs.readFileSync('builder/app.js', 'utf8');

const target = `      case 'contact':`;
const replace = `      case 'faq':
        const faqs = c.faq || [];
        content.innerHTML = \`
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 16px;">
            <h4 style="font-family:var(--font-serif); margin:0;">FAQ Editor</h4>
            <button type="button" class="btn btn--primary btn--sm" onclick="app.addFaqItem()">+ Add Question</button>
          </div>
          <form onsubmit="app.saveFaqSettings(event)" id="faqForm">
            <div id="faqItemsContainer" style="display:flex; flex-direction:column; gap:16px;">
              \${faqs.map((f, i) => app.getFaqItemHtml(f, i)).join('')}
            </div>
            <button type="submit" class="btn btn--primary" style="margin-top: 24px; width: 100%;">\${this.t('btnSaveConfig') || 'Save FAQ'}</button>
          </form>
        \`;
        break;

      case 'contact':`;

if (js.includes(target)) {
  js = js.replace(target, replace);
  fs.writeFileSync('builder/app.js', js);
  console.log("Patched tab successfully.");
} else {
  console.log("Target not found.");
}
