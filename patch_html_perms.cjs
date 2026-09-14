const fs = require('fs');
let html = fs.readFileSync('builder/body.html', 'utf8');

const oldModalForm = `<div class="form-group">
            <label class="form-label" for="promptRole">Role</label>
            <select id="promptRole" class="form-select">
              <option value="admin">Admin</option>
              <option value="dev">Developer</option>
            </select>
          </div>
          <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 24px;">`;

const newModalForm = `<div class="form-group">
            <label class="form-label" for="promptRole">Role</label>
            <select id="promptRole" class="form-select" onchange="document.getElementById('permissionsGroup').style.display = (this.value === 'staff' ? 'block' : 'none');">
              <option value="staff">Staff</option>
            </select>
            <small style="color:var(--muted); font-size:0.75rem; display:block; margin-top:4px;">Only staff accounts can be created. Admins cannot create other admins.</small>
          </div>
          <div class="form-group" id="permissionsGroup" style="display:block;">
            <label class="form-label">Permissions (Staff only)</label>
            <div style="display:flex; flex-direction:column; gap:8px; margin-top:8px;">
              <label><input type="checkbox" name="staffPerms" value="products" checked> Products</label>
              <label><input type="checkbox" name="staffPerms" value="customers" checked> Customers</label>
              <label><input type="checkbox" name="staffPerms" value="economy"> Economy (Orders)</label>
              <label><input type="checkbox" name="staffPerms" value="brand"> Brand & Logo</label>
              <label><input type="checkbox" name="staffPerms" value="theme"> Theme</label>
              <label><input type="checkbox" name="staffPerms" value="about"> About Us</label>
              <label><input type="checkbox" name="staffPerms" value="contact"> Contact</label>
              <label><input type="checkbox" name="staffPerms" value="socials"> Social Media</label>
            </div>
          </div>
          <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 24px;">`;

if (html.includes('<select id="promptRole" class="form-select">')) {
  html = html.replace(oldModalForm, newModalForm);
  fs.writeFileSync('builder/body.html', html);
  console.log("HTML patched with staff permissions");
} else {
  console.log("Could not find the target string in body.html");
}
