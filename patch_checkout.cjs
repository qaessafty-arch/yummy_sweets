const fs = require('fs');
let code = fs.readFileSync('builder/app.js', 'utf8');

function replaceBlock(searchStr, replacement) {
  if (code.indexOf(searchStr) === -1) {
    console.error('Could not find checkout string.');
    process.exit(1);
  }
  code = code.replace(searchStr, replacement);
}

const originalMsgLogic = `    let msg = '';
    if (isKu) {
      msg = \`سڵاو لە \${shopName}! دەمەوێت ئەم داواکارییە تۆمار بکەم:\\n\\n\${items.join('\\n')}\\n\\n\${breakdownLines.join('\\n')}\\n\\nناوی کڕیار: \${customerName}\\nبەروار و کاتی گەیاندن: \\nناونیشانی تەواو: \\nتێبینی کێک / نووسینی سەر کێک: \`;
    } else {
      msg = \`Hello \${shopName}! I'd like to place an order:\\n\\n\${items.join('\\n')}\\n\\n\${breakdownLines.join('\\n')}\\n\\nCustomer Name: \${customerName}\\nPreferred Delivery Date/Time: \\nDelivery Address: \\nCake Notes / Custom Message: \`;
    }`;

const replacedMsgLogic = `    let msg = '';
    if (isKu) {
      msg = \`سڵاو لە \${shopName}! دەمەوێت ئەم داواکارییە تۆمار بکەم:\\n\\n\${items.join('\\n')}\\n\\n\${breakdownLines.join('\\n')}\\n\\nناوی کڕیار: \${customerName}\\nبەروار و کاتی گەیاندن: \\nناونیشانی تەواو: \`;
    } else {
      msg = \`Hello \${shopName}! I'd like to place an order:\\n\\n\${items.join('\\n')}\\n\\n\${breakdownLines.join('\\n')}\\n\\nCustomer Name: \${customerName}\\nPreferred Delivery Date/Time: \\nDelivery Address: \`;
    }
    
    if (this.orderNote) {
      msg += \`\\n\\n\${this.t('waNote') || 'Note for the baker'}: \${this.orderNote}\`;
    }`;

replaceBlock(originalMsgLogic, replacedMsgLogic);

const originalSnapshot = `        items: snapshottedItems,
        subtotalUSD: breakdown.subtotal,
        discountUSD: breakdown.discount,`;

const replacedSnapshot = `        items: snapshottedItems,
        orderNote: this.orderNote || '',
        subtotalUSD: breakdown.subtotal,
        discountUSD: breakdown.discount,`;

replaceBlock(originalSnapshot, replacedSnapshot);

fs.writeFileSync('builder/app.js', code);
console.log('Successfully patched checkoutWhatsApp.');
