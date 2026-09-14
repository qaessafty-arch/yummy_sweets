const fs = require('fs');
let code = fs.readFileSync('builder/app.js', 'utf8');
code = code.replace(`      if (el) el.classList.toggle('is-active', this.currency === 'USD');
    });
    if (typeof this.updatePriceFilterLabels === 'function') this.updatePriceFilterLabels();
  },
    });
  },`, `      if (el) el.classList.toggle('is-active', this.currency === 'USD');
    });
    this.updatePriceFilterLabels();
  },`);
fs.writeFileSync('builder/app.js', code);
