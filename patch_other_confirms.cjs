const fs = require('fs');
let js = fs.readFileSync('builder/app.js', 'utf8');

js = js.replace(
  /deleteUser\(userId\) \{\n    if \(\!confirm\('Are you sure you want to delete this account\?'\)\) return;\n    if \(userId === this\.session\.user\.id\) \{\n      this\.showToast\('You cannot delete your own account\.', 'error'\);\n      return;\n    \}\n    this\.users = this\.users\.filter\(u => u\.id !== userId\);\n    this\.saveUsers\(\);\n    this\.renderPanelTab\('users'\);\n    this\.showToast\('User deleted', 'success'\);\n  \},/g,
  `deleteUser(userId) {
    if (userId === this.session.user.id) {
      this.showToast('You cannot delete your own account.', 'error');
      return;
    }
    const modal = document.getElementById('customConfirmModal');
    const msg = document.getElementById('confirmMessage');
    const btnCancel = document.getElementById('confirmCancelBtn');
    const btnOk = document.getElementById('confirmOkBtn');
    
    msg.textContent = 'Are you sure you want to delete this account?';
    
    const cleanup = () => {
      modal.classList.remove('is-open');
      btnCancel.onclick = null;
      btnOk.onclick = null;
    };
    
    btnCancel.onclick = cleanup;
    
    btnOk.onclick = () => {
      cleanup();
      this.users = this.users.filter(u => u.id !== userId);
      this.saveUsers();
      this.renderPanelTab('users');
      this.showToast('User deleted', 'success');
    };
    
    modal.classList.add('is-open');
  },`
);

js = js.replace(
  /restoreFactoryDefaults\(\) \{\n    if \(\!confirm\('Are you sure\? This will wipe all changes, restore factory defaults, and log you out\.'\)\) return;\n    localStorage\.removeItem\('yummySweetsData'\);\n    location\.reload\(\);\n  \}/g,
  `restoreFactoryDefaults() {
    const modal = document.getElementById('customConfirmModal');
    const msg = document.getElementById('confirmMessage');
    const btnCancel = document.getElementById('confirmCancelBtn');
    const btnOk = document.getElementById('confirmOkBtn');
    
    msg.textContent = 'Are you sure? This will wipe all changes, restore factory defaults, and log you out.';
    
    const cleanup = () => {
      modal.classList.remove('is-open');
      btnCancel.onclick = null;
      btnOk.onclick = null;
    };
    
    btnCancel.onclick = cleanup;
    
    btnOk.onclick = () => {
      cleanup();
      localStorage.removeItem('yummySweetsData');
      location.reload();
    };
    
    modal.classList.add('is-open');
  }`
);

fs.writeFileSync('builder/app.js', js);
console.log("Updated other confirms.");
