const fs = require('fs');
let js = fs.readFileSync('builder/app.js', 'utf8');

const target = `      this.saveProducts();
      this.renderMenu();
      this.renderTray();
      this.renderOrder();
      this.updateOrderCount();
      this.renderPanelTab('products');`;

const replace = `      this.saveProducts();
      this.renderMenu();
      this.renderTray();
      this.renderPanelTab('products');`;

if (js.includes(target)) {
  js = js.replace(target, replace);
  fs.writeFileSync('builder/app.js', js);
  console.log("Patched deleteProduct successfully.");
} else {
  console.log("Target not found. Please review manually.");
}
