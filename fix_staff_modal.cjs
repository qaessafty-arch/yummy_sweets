const fs = require('fs');
let js = fs.readFileSync('builder/app.js', 'utf8');

const regex = /showAddStaffModal\(\) \{[\s\S]*?this\.showToast\(this\.t\('staffAdded'\), 'success'\);\n  \},/m;

const replacement = `showAddStaffModal() {
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

if (regex.test(js)) {
  js = js.replace(regex, replacement);
  fs.writeFileSync('builder/app.js', js);
  console.log("Successfully replaced showAddStaffModal");
} else {
  console.log("Regex did not match!");
}
