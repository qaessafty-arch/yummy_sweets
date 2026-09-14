const fs = require('fs');
let code = fs.readFileSync('builder/body.html', 'utf8');

const searchStr = `      <div class="tray-promo-box" id="trayPromoArea">
        <div class="tray-promo-row">
          <input type="text" id="trayPromoInput" class="tray-promo-input" placeholder="Promo code..." maxlength="20" onkeydown="if(event.key==='Enter'){event.preventDefault();app.applyCartPromo();}" />
          <button type="button" class="btn btn--xs btn--primary" id="btnApplyPromo" onclick="app.applyCartPromo()" data-i18n="trayApplyPromo">Apply</button>
        </div>
        <div id="trayPromoFeedback" class="tray-promo-feedback"></div>
      </div>`;

const replacement = searchStr + `
      <!-- Order Note Field -->
      <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid rgba(255, 255, 255, 0.08);">
        <label for="trayOrderNote" style="display:block; font-size: 0.82rem; color: rgba(255, 255, 255, 0.85); margin-bottom: 6px;" data-i18n="orderNoteLabel">Note for the baker (optional)</label>
        <textarea id="trayOrderNote" class="tray-promo-input" style="width:100%; min-height: 60px; resize: vertical;" maxlength="300" placeholder="e.g. &quot;Happy birthday Sara&quot; or &quot;leave at the door&quot;" data-i18n-placeholder="orderNotePlaceholder" oninput="app.orderNote = this.value;"></textarea>
      </div>`;

code = code.replace(searchStr, replacement);
fs.writeFileSync('builder/body.html', code);
console.log('Successfully added order note field to tray.');
