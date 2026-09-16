const fs = require('fs');
let js = fs.readFileSync('builder/app.js', 'utf8');

// 1. Remove the dead code after `return;` inside `deleteProduct`
const deadCodeSearch = `    return;
    this.products = this.products.filter(p => p.id !== id);
    this.order = this.order.filter(item => item.productId !== id);

    this.selectedProductId = this.products.length > 0 ? this.products[0].id : null;
    this.pendingImageData = this.selectedProductId && this.products[0]?.img ? this.products[0].img : '';

    this.saveProducts();
    this.renderMenu();
    this.renderTray();
    this.renderPanelTab('products');
    this.showToast(this.t('toastDeleted'), 'success');`;
    
js = js.replace(deadCodeSearch, `    return;`);

// 2. Replace showAddStaffModal
const staffSearch = `  // User Management
  showAddStaffModal() {
    const username = prompt('Enter staff username:');
    if (!username) return;

    const password = prompt('Enter password (min 4 chars):');
    if (!password || password.length < 4) {
      alert('Password must be at least 4 characters.');
      return;
    }

    const name = prompt('Enter display name:') || username;
    const type = prompt('Account role (type "admin" or "dev"):', 'admin');
    const role = (type && type.toLowerCase() === 'dev') ? 'dev' : 'admin';

    this.users.push({
      id: 's_' + Date.now(),
      username,
      password,
      name,
      role
    });
    this.saveUsers();
    this.renderPanelTab('users');
    this.showToast(this.t('staffAdded'), 'success');
  },`;

const staffReplace = `  // User Management
  showAddStaffModal() {
    document.getElementById('promptUsername').value = '';
    document.getElementById('promptPassword').value = '';
    document.getElementById('promptName').value = '';
    document.getElementById('promptRole').value = 'admin';
    document.getElementById('customPromptModal').classList.add('is-open');
  },
  
  submitAddStaff(e) {
    e.preventDefault();
    const username = document.getElementById('promptUsername').value.trim();
    const password = document.getElementById('promptPassword').value.trim();
    const name = document.getElementById('promptName').value.trim() || username;
    const role = document.getElementById('promptRole').value;
    
    if (password.length < 4) {
      this.showToast('Password must be at least 4 characters.', 'error');
      return;
    }
    
    this.users.push({
      id: 's_' + Date.now(),
      username,
      password,
      name,
      role
    });
    this.saveUsers();
    this.renderPanelTab('users');
    this.showToast(this.t('staffAdded') || 'Staff added', 'success');
    document.getElementById('customPromptModal').classList.remove('is-open');
  },`;

if (js.includes('prompt(\'Enter staff username:\')')) {
  js = js.replace(staffSearch, staffReplace);
  console.log("Replaced staff modal");
}

fs.writeFileSync('builder/app.js', js);
console.log("Finished clean up.");
