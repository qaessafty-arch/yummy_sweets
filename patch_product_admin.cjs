const fs = require('fs');
let code = fs.readFileSync('builder/app.js', 'utf8');

const searchStr = `          <div class="form-group">
            <label class="form-label" for="pEditDescKu">Description (Kurdish)</label>
            <textarea id="pEditDescKu" class="form-textarea" rows="2">\${prod.desc?.ku || ''}</textarea>
          </div>`;

const replaceStr = searchStr + `
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="pEditExEn">Exclusions (English, comma separated)</label>
              <input type="text" id="pEditExEn" class="form-input" value="\${(prod.exclusions || []).map(e => e.en).join(', ').replace(/"/g, '&quot;')}" placeholder="e.g. Nuts, Frosting" />
            </div>
            <div class="form-group">
              <label class="form-label" for="pEditExKu">Exclusions (Kurdish, comma separated)</label>
              <input type="text" id="pEditExKu" class="form-input" value="\${(prod.exclusions || []).map(e => e.ku).join(', ').replace(/"/g, '&quot;')}" placeholder="e.g. گوێز, کرێم" />
            </div>
          </div>`;

code = code.replace(searchStr, replaceStr);

const saveSearch = `    const descKu = document.getElementById('pEditDescKu').value.trim();`;
const saveReplace = saveSearch + `

    const exEn = document.getElementById('pEditExEn').value.split(',').map(s=>s.trim()).filter(Boolean);
    const exKu = document.getElementById('pEditExKu').value.split(',').map(s=>s.trim()).filter(Boolean);
    const exclusions = [];
    const maxLen = Math.max(exEn.length, exKu.length);
    for (let i = 0; i < maxLen; i++) {
      if (exEn[i] || exKu[i]) {
        exclusions.push({
          id: (exEn[i] || exKu[i] || \`ex\${i}\`).replace(/\\s+/g, '_').toLowerCase(),
          en: exEn[i] || '',
          ku: exKu[i] || ''
        });
      }
    }
    prod.exclusions = exclusions.length > 0 ? exclusions : null;`;

code = code.replace(saveSearch, saveReplace);
fs.writeFileSync('builder/app.js', code);
