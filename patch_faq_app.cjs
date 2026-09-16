const fs = require('fs');
let js = fs.readFileSync('builder/app.js', 'utf8');

// 1. Add to DEFAULT_CONFIG
const configTarget = `contact: {`;
const configReplace = `faq: [
    { q: { en: 'How far in advance should I place my cake order?', ku: 'چەند کاتژمێر پێشوەخت پێویستە کێک داوا بکەم؟' }, a: { en: 'For signature menu cakes, orders placed 24 hours in advance are guaranteed. Custom tiered celebration cakes require 48 to 72 hours notice.', ku: 'بۆ کێکە ئاساییەکانی لیستەکە، داواکاری ٢٤ کاتژمێر پێشتر گەرەنتی کراوە. بۆ کێکی تایبەتی چەندین نهۆم پێویستمان بە ٤٨ بۆ ٧٢ کاتژمێرە.' } },
    { q: { en: 'How does the WhatsApp checkout process work?', ku: 'شێوازی کڕین لەڕێگەی واتسئاپ چۆنە؟' }, a: { en: "When you tap 'Send Order via WhatsApp', your selected items are automatically drafted into a clean message. You can add your delivery address before sending.", ku: 'کاتێک دەست دەنێیت بە "ناردن لە واتسئاپ"، هەموو شیرینییە هەڵبژێردراوەکان لە پەیامێکی ڕێکخراودا ئامادە دەکرێن و ڕاستەوخۆ دەینێریت بۆمان!' } },
    { q: { en: 'Do you offer gluten-free or eggless options?', ku: 'ئایا کێکی بێ هێلکە یان بێ گلوتینتان هەیە؟' }, a: { en: 'Yes! We offer specialized eggless chocolate fudge cakes and almond-flour gluten-friendly tarts upon request. Please specify in your notes.', ku: 'بەڵێ! کێکی شوکۆڵاتەی تایبەت بەبێ هێلکە و تارتی ئاردی بادەم بۆ کەسانی هەستیار ئامادە دەکرێت بە داواکاری پێشوەختە.' } }
  ],
  contact: {`;
js = js.replace(configTarget, configReplace);

// 2. Add config fallback in loadState
const fallbackTarget = `if (!this.config.logoMode) {`;
const fallbackReplace = `if (!this.config.faq) {
        this.config.faq = [...DEFAULT_CONFIG.faq];
      }
      if (!this.config.logoMode) {`;
js = js.replace(fallbackTarget, fallbackReplace);

// 3. Add to renderAll
const renderAllTarget = `this.renderWatermark();
  },`;
const renderAllReplace = `this.renderWatermark();
    this.renderFAQ();
  },`;
js = js.replace(renderAllTarget, renderAllReplace);

// 4. Add renderFAQ method
const renderFaqTarget = `// Update all static data-i18n attributes`;
const renderFaqReplace = `renderFAQ() {
    const wrap = document.getElementById('faqWrap');
    if (!wrap) return;
    const isKu = this.lang === 'ku';
    const faqs = (this.config && this.config.faq) ? this.config.faq : [];
    
    if (faqs.length === 0) {
      document.getElementById('faq').style.display = 'none';
      return;
    } else {
      document.getElementById('faq').style.display = 'block';
    }

    wrap.innerHTML = faqs.map(item => \`
      <details class="faq-item">
        <summary class="faq-summary">\${isKu ? (item.q.ku || item.q.en) : item.q.en}</summary>
        <div class="faq-content">
          \${isKu ? (item.a.ku || item.a.en) : item.a.en}
        </div>
      </details>
    \`).join('');
  },

  // Update all static data-i18n attributes`;
js = js.replace(renderFaqTarget, renderFaqReplace);

// 5. Add 'faq' tab
const tabsTarget = `{ id: 'about', label: 'About Us', icon: '📖', devOnly: false },`;
const tabsReplace = `{ id: 'about', label: 'About Us', icon: '📖', devOnly: false },
      { id: 'faq', label: 'FAQ', icon: '❓', devOnly: false },`;
js = js.replace(tabsTarget, tabsReplace);

// 6. Handle 'faq' tab rendering in renderPanelTab
const tabCaseTarget = `} else if (tabId === 'contact') {`;
const tabCaseReplace = `} else if (tabId === 'faq') {
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
    } else if (tabId === 'contact') {`;
js = js.replace(tabCaseTarget, tabCaseReplace);

fs.writeFileSync('builder/app.js', js);
console.log("Patched app.js part 1");
