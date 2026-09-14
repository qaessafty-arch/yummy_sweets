const fs = require('fs');
let code = fs.readFileSync('builder/app.js', 'utf8');

const oldMsgStr = "    let msg = '';\n    if (isKu) {\n      msg = `سڵاو لە ${shopName}! دەمەوێت ئەم داواکارییە تۆمار بکەم:\\n\\n${items.join('\\n')}\\n\\n${breakdownLines.join('\\n')}\\n\\nناوی کڕیار: ${customerName}\\nبەروار و کاتی گەیاندن: \\nناونیشانی تەواو: \\nتێبینی کێک / نووسینی سەر کێک: `;\n    } else {\n      msg = `Hello ${shopName}! I'd like to place an order:\\n\\n${items.join('\\n')}\\n\\n${breakdownLines.join('\\n')}\\n\\nCustomer Name: ${customerName}\\nPreferred Delivery Date/Time: \\nDelivery Address: \\nCake Notes / Custom Message: `;\n    }";

const newMsgStr = "    let msg = '';\n    if (isKu) {\n      msg = `سڵاو لە ${shopName}! دەمەوێت ئەم داواکارییە تۆمار بکەم:\\n\\n${items.join('\\n')}\\n\\n${breakdownLines.join('\\n')}\\n\\nناوی کڕیار: ${customerName}\\nبەروار و کاتی گەیاندن: \\nناونیشانی تەواو: `;\n    } else {\n      msg = `Hello ${shopName}! I'd like to place an order:\\n\\n${items.join('\\n')}\\n\\n${breakdownLines.join('\\n')}\\n\\nCustomer Name: ${customerName}\\nPreferred Delivery Date/Time: \\nDelivery Address: `;\n    }\n\n    if (this.orderNote) {\n      msg += `\\n\\n${this.t('waNote') || 'Note for the baker'}: ${this.orderNote}`;\n    }";

code = code.replace(oldMsgStr, newMsgStr);

const oldSnapStr = "        items: snapshottedItems,\n        subtotalUSD: breakdown.subtotal,\n        discountUSD: breakdown.discount,";
const newSnapStr = "        items: snapshottedItems,\n        orderNote: this.orderNote || '',\n        subtotalUSD: breakdown.subtotal,\n        discountUSD: breakdown.discount,";

code = code.replace(oldSnapStr, newSnapStr);

fs.writeFileSync('builder/app.js', code);
