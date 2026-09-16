const fs = require('fs');
let code = fs.readFileSync('builder/app.js', 'utf8');

function replaceBlock(searchStr, replacement) {
  if (code.indexOf(searchStr) === -1) {
    console.error('Could not find:', searchStr.substring(0, 50) + '...');
    process.exit(1);
  }
  code = code.replace(searchStr, replacement);
}

replaceBlock(`  addToOrder(productId) {
    this.order[productId] = (this.order[productId] || 0) + 1;
    this.renderTray();
    this.showToast(this.t('toastAdded'), 'success');
  },`, `  addToOrder(productId, exclude = []) {
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
    
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay is-open';
    overlay.style.zIndex = '1000';
    
    const isKu = this.lang === 'ku';
    const title = isKu ? (prod.name.ku || prod.name.en) : prod.name.en;
    
    let html = \`
      <div class="modal-window" style="max-width:400px; padding: 24px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 16px;">
          <h2 style="font-family:var(--font-serif); font-size: 1.2rem; color:var(--cocoa); margin:0;">\${this.t('customizeTitle') || 'Customize'}</h2>
          <button class="modal-close" style="background:none;border:none;font-size:1.5rem;cursor:pointer;color:var(--muted);" onclick="this.closest('.modal-overlay').remove()">×</button>
        </div>
        <h4 style="font-family:var(--font-serif);margin-top:0;margin-bottom:12px;color:var(--ink);">\${title}</h4>
        <p style="font-weight:600;margin-bottom:12px;color:var(--cocoa-soft);">\${this.t('customizeLeaveOut') || 'Leave out'}:</p>
        <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:24px;">
    \`;
    
    prod.exclusions.forEach(ex => {
      const label = isKu ? (ex.ku || ex.en) : ex.en;
      html += \`
        <label style="display:flex;align-items:center;gap:10px;cursor:pointer;color:var(--ink);">
          <input type="checkbox" class="customize-exclude-cb" value="\${ex.id}" style="width:18px;height:18px;" />
          <span>\${label}</span>
        </label>
      \`;
    });
    
    html += \`
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;">
          <button type="button" class="btn btn--ghost btn--sm" style="flex:1;" onclick="app.addToOrder('\${productId}'); this.closest('.modal-overlay').remove()">\${this.t('customizeSkip') || 'Skip — add as is'}</button>
          <button type="button" class="btn btn--primary btn--sm" style="flex:1;" onclick="
            const cbs = Array.from(this.closest('.modal-window').querySelectorAll('.customize-exclude-cb'));
            const excludes = cbs.filter(cb => cb.checked).map(cb => cb.value);
            app.addToOrder('\${productId}', excludes);
            this.closest('.modal-overlay').remove();
          ">\${this.t('customizeAdd') || 'Add to order'}</button>
        </div>
      </div>
    \`;
    
    overlay.innerHTML = html;
    document.body.appendChild(overlay);
  },`);

fs.writeFileSync('builder/app.js', code);
console.log('Successfully patched addToOrder.');
