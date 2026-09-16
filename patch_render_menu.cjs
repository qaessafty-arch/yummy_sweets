const fs = require('fs');
let js = fs.readFileSync('builder/app.js', 'utf8');

const emptyStateCheck = `    const grid = document.getElementById('menuGrid');
    if (!grid) return;

    if (filtered.length === 0) {
      grid.innerHTML = \`
        <div style="grid-column: 1 / -1; text-align: center; padding: 64px 20px; color: var(--muted); border: 2px dashed var(--line); border-radius: var(--radius-card); margin-top: 12px;">
          <div style="font-size: 2.5rem; margin-bottom: 12px;">🔍</div>
          <h3 style="font-family: var(--font-serif); margin-bottom: 8px;">No results found</h3>
          <p>Try adjusting your filters or search terms.</p>
        </div>
      \`;
      return;
    }`;

// Wait, I need to see the exact code in renderMenu first before replacing.
