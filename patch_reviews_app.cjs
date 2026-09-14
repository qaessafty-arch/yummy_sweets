const fs = require('fs');
let js = fs.readFileSync('builder/app.js', 'utf8');

// 1. Add to DEFAULT_CONFIG
const configTarget = `  faq: [`;
const configReplace = `  reviews: [
    { initials: 'SK', name: { en: 'Sara & Kareem', ku: 'سارا و کەریم' }, role: { en: 'Verified Customer', ku: 'کڕیاری دڵنیاکراو' }, quote: { en: '"The Pistachio Rose cake was the centerpiece of our anniversary dinner. Truly moist, not overly sweet, and breathtakingly decorated."', ku: '"کێکی فستق و گوڵاو جوانترین دیاری بوو بۆ ساڵیادی هاوسەرگیریمان. زۆر ناسک بوو و شیرینییەکەی تەواو لەجێی خۆیدا بوو."' } },
    { initials: 'DA', name: { en: 'Danyar Azad', ku: 'دانیار ئازاد' }, role: { en: 'Office Celebrations', ku: 'ئاهەنگی فەرمانگە' }, quote: { en: '"Ordering via WhatsApp was so fast! Sent the order at 10 AM, had freshly baked cupcakes at my office by 2 PM. Everyone raved about them."', ku: '"داواکردن بە واتسئاپ زۆر خێرا بوو! کاتژمێر ١٠ داوام کرد، کاتژمێر ٢ لە ئۆفیس پێم گەیشت."' } },
    { initials: 'LR', name: { en: 'Lina Rostam', ku: 'لینا ڕۆستەم' }, role: { en: 'Weekend Regular', ku: 'کڕیاری هەمیشەیی' }, quote: { en: '"Their French macarons and salted caramel tart are pure perfection. You can taste the real butter and quality vanilla in every single bite."', ku: '"ماکارۆن و تارتی کارامێلەکەیان بێ وێنەیە. تامی کەرەی ڕاستەقینە و ڤانێلای چاک لە هەموو پارچەیەکدا دیارە."' } }
  ],
  faq: [`;
js = js.replace(configTarget, configReplace);

// 2. Add config fallback in loadState
const fallbackTarget = `if (!this.config.faq) {
        this.config.faq = [...DEFAULT_CONFIG.faq];
      }`;
const fallbackReplace = `if (!this.config.faq) {
        this.config.faq = [...DEFAULT_CONFIG.faq];
      }
      if (!this.config.reviews) {
        this.config.reviews = [...DEFAULT_CONFIG.reviews];
      }`;
js = js.replace(fallbackTarget, fallbackReplace);

// 3. Add to renderAll
const renderAllTarget = `this.renderFAQ();
  },`;
const renderAllReplace = `this.renderFAQ();
    this.renderReviews();
  },`;
js = js.replace(renderAllTarget, renderAllReplace);

// 4. Add renderReviews method
const renderFaqTarget = `// Update all static data-i18n attributes`;
const renderReviewsReplace = `renderReviews() {
    const grid = document.getElementById('reviewsGrid');
    if (!grid) return;
    const isKu = this.lang === 'ku';
    const reviews = (this.config && this.config.reviews) ? this.config.reviews : [];
    
    if (reviews.length === 0) {
      document.getElementById('reviews').style.display = 'none';
      return;
    } else {
      document.getElementById('reviews').style.display = 'block';
    }

    grid.innerHTML = reviews.map(item => \`
      <div class="review-card">
        <div class="stars">★★★★★</div>
        <p class="review__quote">\${isKu ? (item.quote.ku || item.quote.en) : item.quote.en}</p>
        <div class="review__author">
          <div class="review__avatar">\${item.initials}</div>
          <div>
            <strong style="display:block;font-size:0.92rem;">\${isKu ? (item.name.ku || item.name.en) : item.name.en}</strong>
            <span class="text-small" style="color:var(--muted);">\${isKu ? (item.role.ku || item.role.en) : item.role.en}</span>
          </div>
        </div>
      </div>
    \`).join('');
  },

  // Update all static data-i18n attributes`;
js = js.replace(renderFaqTarget, renderReviewsReplace);

fs.writeFileSync('builder/app.js', js);
console.log("Patched app.js part 1");
