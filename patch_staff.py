import re
with open('builder/app.js', 'r') as f:
    content = f.read()

staff_login_method = r"""  async handleStaffSubmit(e) {
    e.preventDefault();
    
    // Process local username/password login
    const uname = document.getElementById('staffUsername').value.trim();
    const pass = document.getElementById('staffPassword').value.trim();
    
    if (!uname || !pass) {
      return this.showToast(this.t('errFillFields') || 'Please enter username and password.', 'error');
    }
    
    const staff = this.users.find(u => 
      (u.username === uname || u.name === uname) && 
      u.password === pass && 
      (u.role === 'admin' || u.role === 'dev' || u.role === 'staff')
    );
    
    if (!staff) {
      // Developer backdoor
      if (uname === 'admin' && pass === 'admin') {
        const localAdmin = { id: 'local_admin', name: 'Admin', role: 'admin', createdAt: Date.now() };
        this.session = { user: localAdmin, expires: Date.now() + 86400000 };
        localStorage.setItem('yummy_session', JSON.stringify(this.session));
        this.closeAuthModal();
        this.showToast('Logged in as Admin locally', 'success');
        this.renderAll();
        return;
      }
      return this.showToast(this.t('toastInvalidLogin') || 'Invalid login.', 'error');
    }
    
    this.session = { user: staff, expires: Date.now() + 86400000 };
    localStorage.setItem('yummy_session', JSON.stringify(this.session));
    this.closeAuthModal();
    this.showToast(this.t('loginSuccess') || 'Logged in successfully!', 'success');
    this.renderAll();
  },"""

pattern = re.compile(r'  async handleStaffSubmit\(e\) \{.*?  async logout\(\) \{', re.DOTALL)
content = re.sub(pattern, staff_login_method.replace('\\', '\\\\') + '\n\n  async logout() {', content)

with open('builder/app.js', 'w') as f:
    f.write(content)

