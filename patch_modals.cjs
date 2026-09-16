const fs = require('fs');
let html = fs.readFileSync('builder/body.html', 'utf8');

const modalsHTML = `
  <!-- Custom Confirm Modal -->
  <div class="modal-overlay" id="customConfirmModal" role="dialog" aria-modal="true" style="z-index:9999;">
    <div class="modal-window" style="max-width: 400px;">
      <div class="modal-header">
        <h3 class="modal-title" id="confirmTitle">Confirm</h3>
      </div>
      <div class="modal-body">
        <p id="confirmMessage" style="margin-bottom: 24px; color: var(--ink);"></p>
        <div style="display: flex; justify-content: flex-end; gap: 12px;">
          <button type="button" class="btn btn--ghost" id="confirmCancelBtn">Cancel</button>
          <button type="button" class="btn btn--primary" id="confirmOkBtn">OK</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Custom Prompt Modal (Add Staff) -->
  <div class="modal-overlay" id="customPromptModal" role="dialog" aria-modal="true" style="z-index:9999;">
    <div class="modal-window" style="max-width: 400px;">
      <div class="modal-header">
        <h3 class="modal-title" id="promptTitle">Add Staff Account</h3>
        <button type="button" class="modal-close" onclick="document.getElementById('customPromptModal').classList.remove('is-open')">✕</button>
      </div>
      <div class="modal-body">
        <form id="addStaffForm" onsubmit="app.submitAddStaff(event)">
          <div class="form-group">
            <label class="form-label" for="promptUsername">Username</label>
            <input type="text" id="promptUsername" class="form-input" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="promptPassword">Password (min 4 chars)</label>
            <input type="password" id="promptPassword" class="form-input" required minlength="4" />
          </div>
          <div class="form-group">
            <label class="form-label" for="promptName">Display Name</label>
            <input type="text" id="promptName" class="form-input" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="promptRole">Role</label>
            <select id="promptRole" class="form-select">
              <option value="admin">Admin</option>
              <option value="dev">Developer</option>
            </select>
          </div>
          <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 24px;">
            <button type="button" class="btn btn--ghost" onclick="document.getElementById('customPromptModal').classList.remove('is-open')">Cancel</button>
            <button type="submit" class="btn btn--primary">Add Staff</button>
          </div>
        </form>
      </div>
    </div>
  </div>
`;

if (!html.includes('id="customConfirmModal"')) {
  html = html + '\n' + modalsHTML;
  fs.writeFileSync('builder/body.html', html);
  console.log("Added modal HTML.");
} else {
  console.log("Modal HTML already present.");
}
