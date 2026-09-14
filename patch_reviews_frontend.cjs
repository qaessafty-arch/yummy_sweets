const fs = require('fs');
let html = fs.readFileSync('builder/body.html', 'utf8');
let js = fs.readFileSync('builder/app.js', 'utf8');

// 1. Add Leave a Review button to HTML
const targetHtml = `<p class="lead" data-i18n="reviewsLead">Real feedback from memorable birthdays, weddings, and weekend family teas.</p>
        </div>`;
const replaceHtml = `<p class="lead" data-i18n="reviewsLead">Real feedback from memorable birthdays, weddings, and weekend family teas.</p>
          <button class="btn btn--primary" style="margin-top:16px;" onclick="app.openSubmitReviewModal()" data-i18n="btnLeaveReview">Leave a Review</button>
        </div>`;
html = html.replace(targetHtml, replaceHtml);

// 2. Add Modal to HTML
const modalTargetHtml = `<div class="modal-overlay" id="customConfirmModal" role="dialog" aria-modal="true" style="z-index:9999;">`;
const modalReplaceHtml = `<div class="modal-overlay" id="submitReviewModal" role="dialog" aria-modal="true" style="z-index:9999;">
    <div class="modal-window" style="max-width: 400px;">
      <div class="modal-header">
        <h3 class="modal-title" data-i18n="leaveReviewTitle">Leave a Review</h3>
      </div>
      <div class="modal-body">
        <p style="color:var(--muted); font-size:0.9rem; margin-bottom:16px;" data-i18n="leaveReviewDesc">We'd love to hear about your experience!</p>
        <form onsubmit="app.submitCustomerReview(event)">
          <div class="form-group">
            <label class="form-label" data-i18n="reviewFormName">Your Name</label>
            <input type="text" id="custReviewName" class="form-input" required />
          </div>
          <div class="form-group">
            <label class="form-label" data-i18n="reviewFormQuote">Your Review</label>
            <textarea id="custReviewQuote" class="form-input" rows="4" style="resize:vertical;" required></textarea>
          </div>
          <div style="display:flex; gap:8px; margin-top:20px; justify-content:flex-end;">
            <button type="button" class="btn btn--ghost" onclick="app.closeSubmitReviewModal()" data-i18n="btnCancel">Cancel</button>
            <button type="submit" class="btn btn--primary" data-i18n="btnSubmit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="modal-overlay" id="customConfirmModal" role="dialog" aria-modal="true" style="z-index:9999;">`;
html = html.replace(modalTargetHtml, modalReplaceHtml);

// 3. Add Translations
const transEnTarget = `reviewsLead: 'Real feedback from memorable birthdays, weddings, and weekend family teas.',`;
const transEnReplace = `reviewsLead: 'Real feedback from memorable birthdays, weddings, and weekend family teas.',
    btnLeaveReview: 'Leave a Review',
    leaveReviewTitle: 'Leave a Review',
    leaveReviewDesc: 'We\\'d love to hear about your experience!',
    reviewFormName: 'Your Name',
    reviewFormQuote: 'Your Review',`;
js = js.replace(transEnTarget, transEnReplace);

const transKuTarget = `reviewsLead: 'بۆچوونی ڕاستەقینە لە یادی لەدایکبوون و ئاهەنگە دڵخۆشکەرەکان.',`;
const transKuReplace = `reviewsLead: 'بۆچوونی ڕاستەقینە لە یادی لەدایکبوون و ئاهەنگە دڵخۆشکەرەکان.',
    btnLeaveReview: 'نووسینی بۆچوون',
    leaveReviewTitle: 'نووسینی بۆچوون',
    leaveReviewDesc: 'بە خۆشحاڵییەوە گوێبیستی ڕای ئێوە دەبین!',
    reviewFormName: 'ناوت',
    reviewFormQuote: 'بۆچوونەکەت',`;
js = js.replace(transKuTarget, transKuReplace);

// 4. Add methods to app.js
const methodsTarget = `  closePanelModal() {`;
const methodsReplace = `  openSubmitReviewModal() {
    document.getElementById('custReviewName').value = '';
    document.getElementById('custReviewQuote').value = '';
    document.getElementById('submitReviewModal').classList.add('is-open');
  },
  
  closeSubmitReviewModal() {
    document.getElementById('submitReviewModal').classList.remove('is-open');
  },

  submitCustomerReview(e) {
    e.preventDefault();
    const name = document.getElementById('custReviewName').value.trim();
    const quote = document.getElementById('custReviewQuote').value.trim();
    
    if (!name || !quote) return;
    
    let initials = 'AN';
    const parts = name.split(' ').filter(Boolean);
    if (parts.length > 1) {
      initials = (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    } else if (parts.length === 1) {
      initials = parts[0].substring(0, 2).toUpperCase();
    }
    
    if (!this.config.reviews) this.config.reviews = [];
    
    this.config.reviews.push({
      initials: initials,
      name: { en: name, ku: name },
      role: { en: 'Customer', ku: 'کڕیار' },
      quote: { en: quote, ku: quote }
    });
    
    this.saveConfig();
    this.renderReviews();
    this.closeSubmitReviewModal();
    this.showToast(this.t('toastSaved') || 'Review submitted successfully', 'success');
  },

  closePanelModal() {`;
js = js.replace(methodsTarget, methodsReplace);

fs.writeFileSync('builder/body.html', html);
fs.writeFileSync('builder/app.js', js);
console.log("Patched HTML and JS for review submission");
