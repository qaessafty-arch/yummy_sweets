const fs = require('fs');
let code = fs.readFileSync('builder/app.js', 'utf8');

const search = `    const countEl = document.getElementById('trayItemCount');`;
const replace = `    const noteEl = document.getElementById('trayOrderNote');
    if (noteEl && noteEl.value !== this.orderNote) {
      noteEl.value = this.orderNote || '';
    }
    const countEl = document.getElementById('trayItemCount');`;

code = code.replace(search, replace);
fs.writeFileSync('builder/app.js', code);
