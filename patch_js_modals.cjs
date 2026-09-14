const fs = require('fs');
let js = fs.readFileSync('builder/app.js', 'utf8');

const confirmSearch = `  deleteProduct(id) {
    if (!confirm(this.t('prodDeleteConfirm'))) return;
    this.products = this.products.filter(p => p.id !== id);
    this.order = this.order.filter(item => item.productId !== id);

    this.selectedProductId = this.products.length > 0 ? this.products[0].id : null;
    this.saveProducts();
    this.saveOrder();
    this.renderMenu();
    this.renderOrder();
    this.updateOrderCount();
    this.renderPanelTab('products');
    this.showToast(this.t('toastDeleted'), 'success');
  },`;

const confirmReplace = `  deleteProduct(id) {
    const modal = document.getElementById('customConfirmModal');
    const msg = document.getElementById('confirmMessage');
    const btnCancel = document.getElementById('confirmCancelBtn');
    const btnOk = document.getElementById('confirmOkBtn');
    
    msg.textContent = this.t('prodDeleteConfirm') || 'Are you sure you want to delete this product?';
    
    const cleanup = () => {
      modal.classList.remove('is-open');
      btnCancel.onclick = null;
      btnOk.onclick = null;
    };
    
    btnCancel.onclick = cleanup;
    
    btnOk.onclick = () => {
      cleanup();
      this.products = this.products.filter(p => p.id !== id);
      this.order = this.order.filter(item => item.productId !== id);

      this.selectedProductId = this.products.length > 0 ? this.products[0].id : null;
      this.saveProducts();
      this.saveOrder();
      this.renderMenu();
      this.renderOrder();
      this.updateOrderCount();
      this.renderPanelTab('products');
      this.showToast(this.t('toastDeleted'), 'success');
    };
    
    modal.classList.add('is-open');
  },`;

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
    this.showToast(this.t('staffAdded'), 'success');
    document.getElementById('customPromptModal').classList.remove('is-open');
  },`;

let changed = false;
if (js.includes('deleteProduct(id) {\n    if (!confirm')) {
  js = js.replace(confirmSearch, confirmReplace);
  changed = true;
}

if (js.includes('showAddStaffModal() {\n    const username = prompt')) {
  js = js.replace(staffSearch, staffReplace);
  changed = true;
}

if (changed) {
  fs.writeFileSync('builder/app.js', js);
  console.log("Updated app.js modals.");
} else {
  console.log("Could not find the target strings in app.js.");
}
