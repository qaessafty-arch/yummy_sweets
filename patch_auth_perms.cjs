const fs = require('fs');
let js = fs.readFileSync('builder/app.js', 'utf8');

// 1. Update isStaff in handleCustomerSubmit/etc
js = js.replace(/const isStaff = u\.role === 'admin' \|\| u\.role === 'dev';/g,
  `const isStaff = u.role === 'admin' || u.role === 'dev' || u.role === 'staff';`);

js = js.replace(/\(u\.role === 'admin' \|\| u\.role === 'dev'\)/g,
  `(u.role === 'admin' || u.role === 'dev' || u.role === 'staff')`);

// 2. Panel Sidebar Permissions
const sidebarSearch = `    const isDev = this.session && this.session.user && this.session.user.role === 'dev';

    const tabs = [
      { id: 'brand', label: 'Brand & Logo', icon: '🎨', devOnly: false },
      { id: 'theme', label: this.t('tabTheme'), icon: '✨', devOnly: false },
      { id: 'about', label: 'About Us', icon: '📖', devOnly: false },
      { id: 'contact', label: 'Contact', icon: '📞', devOnly: false },
      { id: 'socials', label: 'Social Media', icon: '📱', devOnly: false },
      { id: 'products', label: 'Products', icon: '🎂', devOnly: false },
      { id: 'customers', label: this.t('tabCustomers') || 'Customers', icon: '👥', devOnly: false },
      { id: 'economy', label: this.t('tabEconomy') || 'Economy', icon: '💰', devOnly: false },
      { id: 'fonts', label: 'Fonts', icon: '🔤', devOnly: true },
      { id: 'users', label: 'Users', icon: '🔑', devOnly: true },
      { id: 'data', label: 'Data', icon: '💾', devOnly: true }
    ];

    sidebar.innerHTML = tabs
      .filter(t => !t.devOnly || isDev)
      .map(t => \``;

const sidebarReplace = `    const isDev = this.session && this.session.user && this.session.user.role === 'dev';
    const isStaff = this.session && this.session.user && this.session.user.role === 'staff';
    const perms = isStaff ? (this.session.user.permissions || []) : null;

    const tabs = [
      { id: 'brand', label: 'Brand & Logo', icon: '🎨', devOnly: false },
      { id: 'theme', label: this.t('tabTheme'), icon: '✨', devOnly: false },
      { id: 'about', label: 'About Us', icon: '📖', devOnly: false },
      { id: 'contact', label: 'Contact', icon: '📞', devOnly: false },
      { id: 'socials', label: 'Social Media', icon: '📱', devOnly: false },
      { id: 'products', label: 'Products', icon: '🎂', devOnly: false },
      { id: 'customers', label: this.t('tabCustomers') || 'Customers', icon: '👥', devOnly: false },
      { id: 'economy', label: this.t('tabEconomy') || 'Economy', icon: '💰', devOnly: false },
      { id: 'fonts', label: 'Fonts', icon: '🔤', devOnly: true },
      { id: 'users', label: 'Users', icon: '🔑', devOnly: false }, // Admins can now see Users
      { id: 'data', label: 'Data', icon: '💾', devOnly: true }
    ];

    sidebar.innerHTML = tabs
      .filter(t => {
        if (t.devOnly && !isDev) return false;
        if (isStaff && !perms.includes(t.id)) return false;
        if (t.id === 'users' && isStaff) return false; // Staff can't manage users
        return true;
      })
      .map(t => \``;

if (js.includes('devOnly: false },\n      { id: \'products\', label: \'Products\',')) {
  js = js.replace(sidebarSearch, sidebarReplace);
  console.log('Sidebar permissions updated');
}

// 3. User & Staff Management UI
const userTableBadgeSearch = `const badgeClass = u.role === 'dev' ? 'badge--dev' : (u.role === 'admin' ? 'badge--admin' : 'badge--customer');`;
const userTableBadgeReplace = `const badgeClass = u.role === 'dev' ? 'badge--dev' : (u.role === 'admin' ? 'badge--admin' : (u.role === 'staff' ? 'badge--staff' : 'badge--customer'));`;
js = js.replace(userTableBadgeSearch, userTableBadgeReplace);

const addStaffModalSearch = `showAddStaffModal() {
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
    }`;

const addStaffModalReplace = `showAddStaffModal() {
    document.getElementById('promptUsername').value = '';
    document.getElementById('promptPassword').value = '';
    document.getElementById('promptName').value = '';
    document.getElementById('promptRole').value = 'staff';
    
    // Clear checkboxes
    const checkboxes = document.querySelectorAll('input[name="staffPerms"]');
    checkboxes.forEach(cb => cb.checked = false);

    document.getElementById('customPromptModal').classList.add('is-open');
  },
  
  submitAddStaff(e) {
    e.preventDefault();
    const username = document.getElementById('promptUsername').value.trim();
    const password = document.getElementById('promptPassword').value.trim();
    const name = document.getElementById('promptName').value.trim() || username;
    const role = document.getElementById('promptRole').value;
    
    // Gather permissions
    const permissions = [];
    document.querySelectorAll('input[name="staffPerms"]:checked').forEach(cb => {
      permissions.push(cb.value);
    });
    
    if (password.length < 4) {
      this.showToast('Password must be at least 4 characters.', 'error');
      return;
    }`;
    
js = js.replace(addStaffModalSearch, addStaffModalReplace);

// 4. In submitAddStaff, save permissions
js = js.replace(`role
    });
    this.saveUsers();`, `role,
      permissions
    });
    this.saveUsers();`);

fs.writeFileSync('builder/app.js', js);
console.log('app.js updated');
