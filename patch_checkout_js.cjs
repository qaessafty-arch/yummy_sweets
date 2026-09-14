const fs = require('fs');
let js = fs.readFileSync('builder/app.js', 'utf8');

const targetCheck = `    // Minimum order check
    if (!breakdown.minOrderMet) {
      const minText = this.formatPrice(breakdown.minOrder);
      const remText = this.formatPrice(breakdown.minOrderRemaining);
      const warnMsg = this.t('minimumOrderWarning')
        .replace('{amount}', minText)
        .replace('{remaining}', remText);
      this.showToast(warnMsg, 'warning');
      return;
    }`;

const newCheck = `    const dateInput = document.getElementById('trayFulfillmentDate');
    const fulfillmentDate = dateInput ? dateInput.value : '';
    
    if (dateInput && !fulfillmentDate) {
      this.showToast('Please select a requested delivery/pickup date.', 'warning');
      dateInput.focus();
      return;
    }

    // Minimum order check
    if (!breakdown.minOrderMet) {
      const minText = this.formatPrice(breakdown.minOrder);
      const remText = this.formatPrice(breakdown.minOrderRemaining);
      const warnMsg = this.t('minimumOrderWarning')
        .replace('{amount}', minText)
        .replace('{remaining}', remText);
      this.showToast(warnMsg, 'warning');
      return;
    }`;

const msgTarget = `    if (this.orderNote) {
      msg += \`\n\n📝 \${this.t('waNote') || 'Notes'}:\n\${this.orderNote}\`;
    }`;

const msgReplace = `    if (fulfillmentDate) {
      const dateStr = new Date(fulfillmentDate).toLocaleString(this.lang === 'ku' ? 'ckb-IQ' : 'en-US', {
        weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit'
      });
      msg += \`\n\n⏰ Requested Date & Time:\n\${dateStr}\`;
    }

    if (this.orderNote) {
      msg += \`\n\n📝 \${this.t('waNote') || 'Notes'}:\n\${this.orderNote}\`;
    }`;

if (js.includes(targetCheck)) {
  js = js.replace(targetCheck, newCheck);
  js = js.replace(msgTarget, msgReplace);
  fs.writeFileSync('builder/app.js', js);
  console.log("Patched checkout JS");
} else {
  console.log("Could not find checkout target in app.js");
}
