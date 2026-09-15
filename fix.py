import re
with open('builder/body.html', 'r') as f:
    content = f.read()

hero_html = """    <section class="section hero" id="hero">
      <img class="hero-bg-img" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1800&auto=format&fit=crop&q=80" alt="" aria-hidden="true" referrerpolicy="no-referrer" onerror="this.style.display='none';" />
      <div class="hero-bg-veil" aria-hidden="true"></div>
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="container hero__grid">
        <div class="hero__content">
          <span class="eyebrow" data-i18n="heroEyebrow">Artisanal Bakery & Pâtisserie</span>
          <h1 class="hero__title" data-i18n="heroTitle">Handcrafted cakes made with <em>passion</em> & love</h1>
          <p class="lead" data-i18n="heroLead">We craft bespoke celebratory cakes, delicate pastries, and decadent cupcakes daily using premium organic ingredients. Delivered straight to your celebration with seamless WhatsApp ordering.</p>
          
          <div class="hero__ctas">
            <a href="#menu" class="btn btn--primary btn--lg" id="heroCtaPrimary" data-i18n="heroCtaPrimary">Explore Our Menu</a>
            <button type="button" class="btn btn--ghost btn--lg" id="heroCtaSecondary" onclick="app.openWhatsAppDirect()" data-i18n="heroCtaSecondary">Chat with Baker</button>
          </div>
          <div class="hero__trust">
            <div class="trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span data-i18n="trust1">100% Organic Flours</span>
            </div>
            <div class="trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span data-i18n="trust2">Same-Day Fresh Bake</span>
            </div>
            <div class="trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span data-i18n="trust3">Custom Messages</span>
            </div>
          </div>
          <div class="hero__quote" style="margin-top: 32px; padding: 16px 24px; border-left: 3px solid var(--primary); background: rgba(var(--surface-rgb), 0.5); backdrop-filter: blur(8px); border-radius: 0 12px 12px 0;">
            <p style="font-size: 1.1rem; font-weight: 500; font-style: italic; color: var(--text-main); margin-bottom: 8px;">"Life is short, make it sweet."</p>
            <p style="font-size: 1.2rem; font-weight: 600; color: var(--primary); font-family: 'Vazirmatn', sans-serif;">"ژیان کورتە، با شیرین بێت."</p>
          </div>
        </div>
        <div class="hero__visual">"""

pattern = re.compile(r'    <section class="section hero" id="hero">.*?</section>', re.DOTALL)
# Wait, I shouldn't replace the whole section because of hero__visual details.
# Let's replace just up to hero__visual
pattern2 = re.compile(r'    <section class="section hero" id="hero">.*?<div class="hero__visual">', re.DOTALL)

content = re.sub(pattern2, hero_html, content)

with open('builder/body.html', 'w') as f:
    f.write(content)
