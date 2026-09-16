const fs = require('fs');
let code = fs.readFileSync('builder/styles.css', 'utf8');
code = code.replace(/\.economy-preview-sticky \{\n  position: sticky;\n  top: 24px;\n  background: var\(--espresso\);\n  color: #FFFFFF;\n  border-radius: var\(--radius-card\);\n  padding: 22px;\n  box-shadow: var\(--shadow-l3\);\n  border: 1px solid rgba\(255, 255, 255, 0\.1\);\n  transition: all 0\.25s ease;\n\}/g, `.economy-preview-sticky {
  position: sticky;
  top: 24px;
  background: var(--shell);
  color: var(--ink);
  border-radius: var(--radius-card);
  padding: 22px;
  box-shadow: var(--shadow-l2);
  border: 1px solid var(--line);
  transition: all 0.25s ease;
}`);

code = code.replace(/\.economy-preview-heading \{\n  font-family: var\(--font-serif\);\n  font-size: 1\.15rem;\n  color: #FFFFFF;/g, `.economy-preview-heading {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  color: var(--cocoa);`);

code = code.replace(/\.economy-preview-box \{\n  background: rgba\(255, 255, 255, 0\.05\);\n  border-radius: 12px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  border: 1px solid rgba\(255, 255, 255, 0\.08\);\n\}/g, `.economy-preview-box {
  background: var(--cream);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid var(--line);
}`);

code = code.replace(/\.economy-preview-line \{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 0\.88rem;\n  color: rgba\(255, 255, 255, 0\.82\);/g, `.economy-preview-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.88rem;
  color: var(--muted);`);

code = code.replace(/\.economy-preview-line\.is-free \{\n  color: #4ade80;/g, `.economy-preview-line.is-free {
  color: #16a34a;`);

code = code.replace(/\.economy-preview-total \{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px dashed rgba\(255, 255, 255, 0\.2\);\n  padding-top: 12px;\n  margin-top: 6px;\n  font-weight: 700;\n  font-size: 1rem;\n\}/g, `.economy-preview-total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px dashed var(--line-strong);
  padding-top: 12px;
  margin-top: 6px;
  font-weight: 700;
  font-size: 1rem;
  color: var(--ink);
}`);

code = code.replace(/\.economy-preview-alert \{\n  background: rgba\(239, 68, 68, 0\.18\);\n  border: 1px solid rgba\(239, 68, 68, 0\.35\);\n  color: #fca5a5;/g, `.economy-preview-alert {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: #dc2626;`);

code = code.replace(/\.economy-rounding-hint \{\n  font-size: 0\.74rem;\n  color: rgba\(255, 255, 255, 0\.6\);/g, `.economy-rounding-hint {
  font-size: 0.74rem;
  color: var(--muted);`);

fs.writeFileSync('builder/styles.css', code);
