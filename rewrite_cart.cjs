const fs = require('fs');
let code = fs.readFileSync('builder/app.js', 'utf8');

// 1. App object definition
code = code.replace(/order: \{\}, \/\/ \{ \[productId\]: quantity \}/, `order: [], // [{ id, productId, qty, exclude }]
  orderNote: '', // Store note for the baker`);

// 2. addToOrder
code = code.replace(/  addToOrder\(productId\) \{\n    this\.order\[productId\] = \(this\.order\[productId\] || 0\) \+ 1;\n    this\.renderTray\(\);\n    this\.showToast\(this\.t\('toastAdded'\), 'success'\);\n  \},/,
`  addToOrder(productId, exclude = []) {
    const existing = this.order.find(item => item.productId === productId && item.exclude.join('|') === exclude.join('|'));
    if (existing) {
      existing.qty++;
    } else {
      this.order.push({
        id: this.generateId(),
        productId,
        qty: 1,
        exclude: [...exclude]
      });
    }
    this.renderTray();
    this.showToast(this.t('toastAdded'), 'success');
  },
  
  openCustomizeModal(productId) {
    const prod = this.products.find(p => p.id === productId);
    if (!prod) return;
    
    if (!prod.exclusions || prod.exclusions.length === 0) {
      this.addToOrder(productId);
      return;
    }
    
    // Create the modal overlay dynamically
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay is-open';
    overlay.style.zIndex = '1000';
    
    const isKu = this.lang === 'ku';
    const title = isKu ? (prod.name.ku || prod.name.en) : prod.name.en;
    
    let html = \`
      <div class="modal-window" style="max-width:400px;">
        <div class="modal-header">
          <h2 class="modal-title">\${this.t('customizeTitle')}</h2>
          <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">×</button>
        </div>
        <div class="modal-body">
          <h4 style="font-family:var(--font-serif);margin-top:0;margin-bottom:12px;">\${title}</h4>
          <p style="font-weight:600;margin-bottom:8px;">\${this.t('customizeLeaveOut')}:</p>
          <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:24px;">
    \`;
    
    prod.exclusions.forEach(ex => {
      const label = isKu ? (ex.ku || ex.en) : ex.en;
      html += \`
        <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
          <input type="checkbox" class="customize-exclude-cb" value="\${ex.id}" />
          <span>\${label}</span>
        </label>
      \`;
    });
    
    html += \`
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;">
            <button type="button" class="btn btn--ghost btn--sm" onclick="app.addToOrder('\${productId}'); this.closest('.modal-overlay').remove()">\${this.t('customizeSkip')}</button>
            <button type="button" class="btn btn--primary btn--sm" onclick="
              const cbs = Array.from(this.closest('.modal-window').querySelectorAll('.customize-exclude-cb'));
              const excludes = cbs.filter(cb => cb.checked).map(cb => cb.value);
              app.addToOrder('\${productId}', excludes);
              this.closest('.modal-overlay').remove();
            ">\${this.t('customizeAdd')}</button>
          </div>
        </div>
      </div>
    \`;
    
    overlay.innerHTML = html;
    document.body.appendChild(overlay);
  },`);

// 3. clearOrder
code = code.replace(/  clearOrder\(\) \{\n    this\.order = \{\};\n    this\.appliedPromoCode = '';\n    this\.trayBreakdownOpen = false;\n    this\.renderTray\(\);\n    this\.showToast\(this\.t\('toastOrderCleared'\)\);\n  \},/, 
`  clearOrder() {
    this.order = [];
    this.orderNote = '';
    const noteEl = document.getElementById('trayOrderNote');
    if (noteEl) noteEl.value = '';
    this.appliedPromoCode = '';
    this.trayBreakdownOpen = false;
    this.renderTray();
    this.showToast(this.t('toastOrderCleared'));
  },`);

// 4. deleteProduct cleanup
code = code.replace(/    if \(this\.order\[id\]\) delete this\.order\[id\];/,
`    this.order = this.order.filter(item => item.productId !== id);`);

// 5. reorderOrder
code = code.replace(/    order\.items\.forEach\(item => \{\n      if \(productMap\.has\(item\.productId\)\) \{\n        this\.order\[item\.productId\] = \(this\.order\[item\.productId\] || 0\) \+ \(item\.qty || 1\);\n        countAdded \+= \(item\.qty || 1\);\n      \}\n    \}\);/g,
`    order.items.forEach(item => {
      if (productMap.has(item.productId)) {
        const exclude = item.exclude || [];
        const existing = this.order.find(o => o.productId === item.productId && o.exclude.join('|') === exclude.join('|'));
        if (existing) {
          existing.qty += (item.qty || 1);
        } else {
          this.order.push({
            id: this.generateId(),
            productId: item.productId,
            qty: item.qty || 1,
            exclude: [...exclude]
          });
        }
        countAdded += (item.qty || 1);
      }
    });
    if (order.orderNote) {
      this.orderNote = order.orderNote;
    }`);

fs.writeFileSync('builder/app.js', code);
