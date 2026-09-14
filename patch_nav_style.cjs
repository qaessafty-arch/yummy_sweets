const fs = require('fs');
let css = fs.readFileSync('builder/styles.css', 'utf8');

const oldNav = `.mobile-nav {
  position: fixed;
  top: 76px;
  left: 0;
  right: 0;
  background-color: var(--cream);
  border-bottom: 1px solid var(--line);
  box-shadow: var(--shadow-l3);
  padding: 24px;
  z-index: 89;
  display: none;
  flex-direction: column;
  gap: 16px;
  animation: slideDown 220ms ease;
}`;

const newNav = `.mobile-nav {
  position: fixed;
  top: 76px;
  right: 20px;
  left: auto;
  width: calc(100% - 40px);
  max-width: 320px;
  background-color: var(--cream);
  border: 1px solid var(--line);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-l3);
  padding: 24px;
  z-index: 89;
  display: none;
  flex-direction: column;
  gap: 16px;
  animation: slideDown 220ms cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: top right;
}

@media (max-width: 768px) {
  .mobile-nav {
    top: 76px;
    right: 0;
    left: 0;
    width: 100%;
    max-width: none;
    border: none;
    border-bottom: 1px solid var(--line);
    border-radius: 0;
  }
}

@media (max-width: 560px) {
  .mobile-nav {
    top: 64px;
  }
}`;

css = css.replace(oldNav, newNav);

fs.writeFileSync('builder/styles.css', css);
console.log("Updated mobile nav CSS");
