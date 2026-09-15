import re
with open('builder/app.js', 'r') as f:
    content = f.read()

google_login_method = r"""  async handleGoogleLogin(role) {
    if (!auth) return this.showToast('Google Auth not initialized', 'error');
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = result.user;
      
      if (role === 'customer') {
        let cust = this.users.find(u => u.id === user.uid);
        if (!cust) {
          cust = {
            id: user.uid,
            name: document.getElementById('custName').value.trim() || user.displayName || 'Customer',
            phone: document.getElementById('custMobile').value.trim() || user.phoneNumber || 'N/A',
            role: 'customer',
            createdAt: Date.now()
          };
          this.users.push(cust);
          this.saveUsers();
        }
        this.session = { user: cust, expires: Date.now() + 86400000 };
        localStorage.setItem('yummy_session', JSON.stringify(this.session));
        this.closeAuthModal();
        this.showToast(this.t('loginSuccess') || 'Logged in successfully!', 'success');
        this.renderMenu();
        
      } else {
        const isSuperAdmin = (user.email === 'Qaessafty@gmail.com');
        let staff = this.users.find(u => u.id === user.uid);
        
        if (!staff) {
          if (isSuperAdmin) {
            staff = { id: user.uid, name: 'Developer', role: 'dev', createdAt: Date.now() };
            this.users.push(staff);
            this.saveUsers();
          } else {
            await firebaseSignOut(auth);
            return this.showToast('Access denied: You must be registered as staff.', 'error');
          }
        } else if (!['admin', 'dev'].includes(staff.role)) {
          await firebaseSignOut(auth);
          return this.showToast('Access denied: You are registered as a customer.', 'error');
        }
        
        this.session = { user: staff, expires: Date.now() + (86400000 * 7) };
        localStorage.setItem('yummy_session', JSON.stringify(this.session));
        this.closeAuthModal();
        this.showToast('Control panel access granted.', 'success');
        this.renderAll();
      }
    } catch (err) {
      console.error(err);
      this.showToast(err.message, 'error');
    }
  },

  async handleCustomerSubmit(e) {
    e.preventDefault();
    
    const phone = document.getElementById('custMobile').value.trim();
    const name = document.getElementById('custName').value.trim();
    
    if (!phone || !name) {
      return this.showToast(this.t('errFillFields') || 'Please enter phone and name.', 'error');
    }
    
    const simId = 'local_' + phone.replace(/\D/g, '');
    let cust = this.users.find(u => u.phone === phone);
    
    if (!cust) {
      cust = { id: simId, name, phone, role: 'customer', createdAt: Date.now() };
      this.users.push(cust);
      if (auth) this.saveUsers();
      else localStorage.setItem('yummy_users', JSON.stringify(this.users));
    }
    
    this.session = { user: cust, expires: Date.now() + 86400000 };
    localStorage.setItem('yummy_session', JSON.stringify(this.session));
    this.closeAuthModal();
    this.showToast(this.t('loginSuccess') || 'Logged in successfully!', 'success');
    this.renderMenu();
  },"""

pattern = re.compile(r'  async handleCustomerSubmit\(e\) \{.*?  async handleStaffSubmit\(e\) \{', re.DOTALL)
content = re.sub(pattern, google_login_method.replace('\\', '\\\\') + '\n\n  async handleStaffSubmit(e) {', content)

with open('builder/app.js', 'w') as f:
    f.write(content)

