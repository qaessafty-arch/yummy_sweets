const fs = require('fs');
let js = fs.readFileSync('builder/app.js', 'utf8');

const target = `  saveContactSettings(e) {`;
const replace = `  getFaqItemHtml(f, index) {
    return \`
      <div class="faq-editor-card" style="padding: 16px; border: 1px solid var(--line); border-radius: var(--radius-card); position: relative; background: var(--cream);">
        <button type="button" class="btn btn--xs btn--ghost" style="position:absolute; top:8px; right:8px; color:var(--berry);" onclick="app.removeFaqItem(\${index})">✕ Remove</button>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Question (EN)</label>
            <input type="text" class="form-input faq-q-en" value="\${f.q.en}" required />
          </div>
          <div class="form-group">
            <label class="form-label">Question (KU)</label>
            <input type="text" class="form-input faq-q-ku" value="\${f.q.ku}" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Answer (EN)</label>
            <textarea class="form-input faq-a-en" required style="resize:vertical;min-height:60px;">\${f.a.en}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Answer (KU)</label>
            <textarea class="form-input faq-a-ku" style="resize:vertical;min-height:60px;">\${f.a.ku}</textarea>
          </div>
        </div>
      </div>
    \`;
  },
  
  addFaqItem() {
    if (!this.config.faq) this.config.faq = [];
    this.config.faq.push({ q: { en: '', ku: '' }, a: { en: '', ku: '' } });
    this.renderPanelTab('faq');
  },
  
  removeFaqItem(index) {
    if (!this.config.faq) return;
    this.config.faq.splice(index, 1);
    this.renderPanelTab('faq');
  },
  
  saveFaqSettings(e) {
    e.preventDefault();
    if (!this.config.faq) this.config.faq = [];
    
    const qsEn = document.querySelectorAll('.faq-q-en');
    const qsKu = document.querySelectorAll('.faq-q-ku');
    const asEn = document.querySelectorAll('.faq-a-en');
    const asKu = document.querySelectorAll('.faq-a-ku');
    
    const newFaqs = [];
    for (let i = 0; i < qsEn.length; i++) {
      newFaqs.push({
        q: { en: qsEn[i].value.trim(), ku: qsKu[i].value.trim() },
        a: { en: asEn[i].value.trim(), ku: asKu[i].value.trim() }
      });
    }
    
    this.config.faq = newFaqs;
    this.saveConfig();
    this.renderFAQ();
    this.showToast(this.t('toastSaved') || 'Saved', 'success');
  },

  saveContactSettings(e) {`;

js = js.replace(target, replace);
fs.writeFileSync('builder/app.js', js);
console.log("Patched app.js part 2");
