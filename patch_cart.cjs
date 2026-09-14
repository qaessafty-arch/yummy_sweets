const fs = require('fs');
let code = fs.readFileSync('builder/app.js', 'utf8');

function replaceBlock(searchStr, replacement) {
  if (code.indexOf(searchStr) === -1) {
    console.error('Could not find:', searchStr.substring(0, 50) + '...');
    process.exit(1);
  }
  code = code.replace(searchStr, replacement);
}

// 1. Initial order state
replaceBlock(`  session: null,
  order: {}, // { [productId]: quantity }
  orders: [],`, `  session: null,
  order: [], // [{ id, productId, qty, exclude }]
  orderNote: '',
  orders: [],`);

// 2. clearOrder
replaceBlock(`  clearOrder() {
    this.order = {};
    this.appliedPromoCode = '';
    this.trayBreakdownOpen = false;
    this.renderTray();
    this.showToast(this.t('toastOrderCleared'));
  },`, `  clearOrder() {
    this.order = [];
    this.orderNote = '';
    const noteEl = document.getElementById('trayOrderNote');
    if (noteEl) noteEl.value = '';
    this.appliedPromoCode = '';
    this.trayBreakdownOpen = false;
    this.renderTray();
    this.showToast(this.t('toastOrderCleared'));
  },`);

// 3. deleteProduct cleanup
replaceBlock(`    this.products = this.products.filter(p => p.id !== id);
    if (this.order[id]) delete this.order[id];`, `    this.products = this.products.filter(p => p.id !== id);
    this.order = this.order.filter(item => item.productId !== id);`);

// 4. Object.entries(this.order) in renderTray (Lines 2077)
replaceBlock(`    for (const [id, qty] of Object.entries(this.order)) {
      if (qty > 0 && productMap.has(id)) {
        const prod = productMap.get(id);
        totalCount += qty;
        subtotalUSD += prod.priceUSD * qty;
        const name = isKu ? (prod.name.ku || prod.name.en) : prod.name.en;
        itemNames.push(\`\${qty}× \${name}\`);
      }
    }`, `    for (const item of this.order) {
      if (item.qty > 0 && productMap.has(item.productId)) {
        const prod = productMap.get(item.productId);
        totalCount += item.qty;
        subtotalUSD += prod.priceUSD * item.qty;
        const name = isKu ? (prod.name.ku || prod.name.en) : prod.name.en;
        itemNames.push(\`\${item.qty}× \${name}\`);
      }
    }`);

// 5. Object.entries(this.order) in computeCartBreakdown... actually generateWhatsAppMessage
replaceBlock(`    for (const [id, qty] of Object.entries(this.order)) {
      if (qty > 0 && productMap.has(id)) {
        const p = productMap.get(id);
        const itemSubtotal = p.priceUSD * qty;
        subtotalUSD += itemSubtotal;
        const name = isKu ? (p.name.ku || p.name.en) : p.name.en;
        items.push(\`• \${qty} × \${name} — $\${itemSubtotal.toFixed(2)}\`);
        snapshottedItems.push({
          productId: p.id,
          qty: qty,
          nameSnapshot: name,
          usdSnapshot: p.priceUSD
        });
      }
    }`, `    for (const item of this.order) {
      if (item.qty > 0 && productMap.has(item.productId)) {
        const p = productMap.get(item.productId);
        const itemSubtotal = p.priceUSD * item.qty;
        subtotalUSD += itemSubtotal;
        const name = isKu ? (p.name.ku || p.name.en) : p.name.en;
        
        let line = \`• \${item.qty} × \${name} — $\${itemSubtotal.toFixed(2)}\`;
        if (item.exclude && item.exclude.length > 0) {
          const exLabels = item.exclude.map(exId => {
            if (p.exclusions) {
              const exDef = p.exclusions.find(x => x.id === exId);
              if (exDef) return isKu ? (exDef.ku || exDef.en) : exDef.en;
            }
            return exId;
          });
          const noWord = this.t('waExclude') || 'No';
          line += \`\\n   \${noWord} \${exLabels.join(' · ' + noWord + ' ')}\`;
        }
        items.push(line);
        
        snapshottedItems.push({
          productId: p.id,
          qty: item.qty,
          exclude: item.exclude || [],
          nameSnapshot: name,
          usdSnapshot: p.priceUSD
        });
      }
    }`);

// 6. reorderOrder
replaceBlock(`    order.items.forEach(item => {
      if (productMap.has(item.productId)) {
        this.order[item.productId] = (this.order[item.productId] || 0) + (item.qty || 1);
        countAdded += (item.qty || 1);
      }
    });`, `    order.items.forEach(item => {
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
console.log('Successfully patched cart loops.');
