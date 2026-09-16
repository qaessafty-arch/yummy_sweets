const fs = require('fs');
let js = fs.readFileSync('builder/app.js', 'utf8');

// Add "reviews" tab to sidebar
const tabsTarget = `{ id: 'faq', label: 'FAQ', icon: '❓', devOnly: false },`;
const tabsReplace = `{ id: 'faq', label: 'FAQ', icon: '❓', devOnly: false },
      { id: 'reviews', label: 'Reviews', icon: '⭐', devOnly: false },`;
js = js.replace(tabsTarget, tabsReplace);

// Handle 'reviews' tab rendering in renderPanelTab
const tabCaseTarget = `} else if (tabId === 'contact') {`;
const tabCaseReplace = `} else if (tabId === 'reviews') {
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
    } else if (tabId === 'contact') {`;
js = js.replace(tabCaseTarget, tabCaseReplace);

// Add review management methods
const addMethodsTarget = `saveFaqSettings(e) {`;
const addMethodsReplace = `getReviewItemHtml(r, index) {
    return \`
      <div class="faq-editor-card" style="padding: 16px; border: 1px solid var(--line); border-radius: var(--radius-card); position: relative; background: var(--cream);">
        <button type="button" class="btn btn--xs btn--ghost" style="position:absolute; top:8px; right:8px; color:var(--berry);" onclick="app.removeReviewItem(\${index})">✕ Remove</button>
        <div class="form-row">
          <div class="form-group" style="flex:0.3">
            <label class="form-label">Initials</label>
            <input type="text" class="form-input review-initials" value="\${r.initials}" required maxlength="2" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Name (EN)</label>
            <input type="text" class="form-input review-name-en" value="\${r.name.en}" required />
          </div>
          <div class="form-group">
            <label class="form-label">Name (KU)</label>
            <input type="text" class="form-input review-name-ku" value="\${r.name.ku}" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Role/Subtitle (EN)</label>
            <input type="text" class="form-input review-role-en" value="\${r.role.en}" required />
          </div>
          <div class="form-group">
            <label class="form-label">Role/Subtitle (KU)</label>
            <input type="text" class="form-input review-role-ku" value="\${r.role.ku}" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Quote (EN)</label>
            <textarea class="form-input review-quote-en" required style="resize:vertical;min-height:60px;">\${r.quote.en}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Quote (KU)</label>
            <textarea class="form-input review-quote-ku" style="resize:vertical;min-height:60px;">\${r.quote.ku}</textarea>
          </div>
        </div>
      </div>
    \`;
  },
  
  addReviewItem() {
    if (!this.config.reviews) this.config.reviews = [];
    this.config.reviews.push({ initials: 'AN', name: { en: 'Anonymous', ku: '' }, role: { en: 'Customer', ku: '' }, quote: { en: '', ku: '' } });
    this.renderPanelTab('reviews');
  },
  
  removeReviewItem(index) {
    if (!this.config.reviews) return;
    this.config.reviews.splice(index, 1);
    this.renderPanelTab('reviews');
  },

  resetReviews() {
    if (confirm('Are you sure you want to reset all reviews to the default?')) {
      this.config.reviews = JSON.parse(JSON.stringify(DEFAULT_CONFIG.reviews));
      this.saveConfig();
      this.renderReviews();
      this.renderPanelTab('reviews');
      this.showToast('Reviews reset successfully', 'success');
    }
  },
  
  saveReviewSettings(e) {
    e.preventDefault();
    if (!this.config.reviews) this.config.reviews = [];
    
    const initials = document.querySelectorAll('.review-initials');
    const namesEn = document.querySelectorAll('.review-name-en');
    const namesKu = document.querySelectorAll('.review-name-ku');
    const rolesEn = document.querySelectorAll('.review-role-en');
    const rolesKu = document.querySelectorAll('.review-role-ku');
    const quotesEn = document.querySelectorAll('.review-quote-en');
    const quotesKu = document.querySelectorAll('.review-quote-ku');
    
    const newReviews = [];
    for (let i = 0; i < initials.length; i++) {
      newReviews.push({
        initials: initials[i].value.trim(),
        name: { en: namesEn[i].value.trim(), ku: namesKu[i].value.trim() },
        role: { en: rolesEn[i].value.trim(), ku: rolesKu[i].value.trim() },
        quote: { en: quotesEn[i].value.trim(), ku: quotesKu[i].value.trim() }
      });
    }
    
    this.config.reviews = newReviews;
    this.saveConfig();
    this.renderReviews();
    this.showToast(this.t('toastSaved') || 'Saved', 'success');
  },

  saveFaqSettings(e) {`;
js = js.replace(addMethodsTarget, addMethodsReplace);

fs.writeFileSync('builder/app.js', js);
console.log("Patched app.js part 2");
