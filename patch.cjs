const fs = require('fs');

let appJs = fs.readFileSync('builder/app.js', 'utf8');

// 1. Add Custom Cake feature to DEFAULT_CONFIG
appJs = appJs.replace(
  `showWatermark: true,`,
  `showWatermark: true, features: { customCake: false, microAnimations: true },`
);

// 2. Add Theme Settings Toggles
appJs = appJs.replace(
  `<div class="form-group" style="margin-top:24px;">`,
  `<div class="form-group" style="margin-top:24px;">
        <label class="form-label" style="display:flex;align-items:center;gap:12px;cursor:pointer;">
          <input type="checkbox" onchange="app.toggleFeature('microAnimations', this.checked)" \${(this.config.features && this.config.features.microAnimations !== false) ? 'checked' : ''} />
          Enable Premium Micro-Animations
        </label>
        <label class="form-label" style="display:flex;align-items:center;gap:12px;margin-top:16px;cursor:pointer;">
          <input type="checkbox" onchange="app.toggleFeature('customCake', this.checked)" \${(this.config.features && this.config.features.customCake) ? 'checked' : ''} />
          Enable Custom Cake Builder
        </label>`
);

// Add toggleFeature function
appJs = appJs.replace(
  `  toggleAutoDark(enabled) {`,
  `  toggleFeature(key, checked) {
    if (!this.config.features) this.config.features = { customCake: false, microAnimations: true };
    this.config.features[key] = checked;
    this.saveConfig();
    this.showToast('Feature updated', 'success');
    if (key === 'customCake') this.renderMenu();
  },

  toggleAutoDark(enabled) {`
);

// 3. Add Badges to product editor
appJs = appJs.replace(
  `<option value="bestseller" \${prod.tag === 'bestseller' ? 'selected' : ''}>Bestseller</option>`,
  `<option value="bestseller" \${prod.tag === 'bestseller' ? 'selected' : ''}>Bestseller</option>
          <option value="popular" \${prod.tag === 'popular' ? 'selected' : ''}>Popular</option>
          <option value="limited" \${prod.tag === 'limited' ? 'selected' : ''}>Limited</option>
          <option value="sale" \${prod.tag === 'sale' ? 'selected' : ''}>Sale</option>`
);

// 4. Render Badges in menu
appJs = appJs.replace(
  `tagBadge = \`<span class="cake__tag cake__tag--bestseller">\${this.t('tagBestseller') || 'Bestseller'}</span>\`;
  }`,
  `tagBadge = \`<span class="cake__tag cake__tag--bestseller">\${this.t('tagBestseller') || 'Bestseller'}</span>\`;
  } else if (item.tag === 'popular') {
    tagBadge = \`<span class="cake__tag cake__tag--popular">\${this.t('tagPopular') || 'Popular'}</span>\`;
  } else if (item.tag === 'limited') {
    tagBadge = \`<span class="cake__tag cake__tag--limited">\${this.t('tagLimited') || 'Limited'}</span>\`;
  } else if (item.tag === 'sale') {
    tagBadge = \`<span class="cake__tag cake__tag--sale">\${this.t('tagSale') || 'Sale'}</span>\`;
  }`
);

// 5. Add Custom Cake Card to menu
appJs = appJs.replace(
  `grid.innerHTML = filtered.map(item => {`,
  `let customCakeHtml = '';
    if (this.config.features && this.config.features.customCake && (this.activeCategory === 'all' || this.activeCategory === 'cakes') && !rawQ) {
      customCakeHtml = \`
        <article class="cake-card cake-card--custom" onclick="alert('Custom Cake Builder Coming Soon!')" style="cursor:pointer; text-align:center; padding: 2rem;">
          <div style="font-size:2rem; margin-bottom:1rem;">?</div>
          <h3 class="cake-card__title">\${this.t('customCake') || 'Build Custom Cake'}</h3>
          <p class="cake-card__desc" style="margin-top:0.5rem; opacity:0.8;">\${this.t('customCakeDesc') || 'Design your dream cake from scratch.'}</p>
        </article>
      \`;
    }
    
    grid.innerHTML = customCakeHtml + filtered.map(item => {`
);

// 6. Micro-animations in addToOrder
appJs = appJs.replace(
  `this.cart.push({`,
  `if (this.config.features && this.config.features.microAnimations !== false && event && event.currentTarget) {
      const btn = event.currentTarget;
      const originalText = btn.innerHTML;
      btn.classList.add('is-success');
      btn.innerHTML = '?';
      setTimeout(() => {
        btn.classList.remove('is-success');
        btn.innerHTML = originalText;
      }, 1000);
    }
    this.cart.push({`
);

fs.writeFileSync('builder/app.js', appJs);
