import re
with open('builder/body.html', 'r') as f:
    content = f.read()

# Fix customer auth form
cust_form_old = """          <button type="submit" class="btn btn--primary" style="width:100%;margin-top:8px;">Continue with Google / Phone</button>"""
cust_form_new = """          <button type="button" class="btn btn--outline" style="width:100%;margin-top:8px;" onclick="app.handleGoogleLogin('customer')">Sign in with Google</button>
          <div style="text-align:center;margin:12px 0;color:var(--muted);font-size:0.9rem;">- or -</div>
          <button type="submit" class="btn btn--primary" style="width:100%;">Continue with Phone</button>"""
content = content.replace(cust_form_old, cust_form_new)

# Fix staff auth form
staff_form_old = """          <button type="submit" class="btn btn--primary" style="width:100%;margin-top:8px;" id="btnStaffLogin">
            Login to Dashboard (via Google)
          </button>"""
staff_form_new = """          <button type="button" class="btn btn--outline" style="width:100%;margin-top:8px;" onclick="app.handleGoogleLogin('staff')">Login with Google</button>
          <div style="text-align:center;margin:12px 0;color:var(--muted);font-size:0.9rem;">- or -</div>
          <button type="submit" class="btn btn--primary" style="width:100%;" id="btnStaffLogin">Login with Username</button>"""
content = content.replace(staff_form_old, staff_form_new)

with open('builder/body.html', 'w') as f:
    f.write(content)
