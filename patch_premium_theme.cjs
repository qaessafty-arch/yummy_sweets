const fs = require('fs');
let css = fs.readFileSync('builder/styles.css', 'utf8');

const overrides = `
/* =========================================================
   ARTISANAL BAKERY — PROFESSIONAL UX/UI SYSTEM
   ========================================================= */

:root {
  --bg-base: #F7F1E8;
  --bg-surface: #FFFDF8;
  --bg-elevated: #FFFEFA;
  --bg-dark: #2C211B;

  --text-main: #2C211B;
  --text-secondary: #5F5148;
  --text-muted: #806F63;
  --text-inverse: #FFFDF8;

  --primary: #8B4A32;
  --primary-hover: #713A27;

  --secondary: #EFE5D8;
  --accent: #C99A3D;

  --border-subtle: rgba(44, 33, 27, 0.08);
  --border-default: #E5D8C8;
  --border-strong: rgba(44, 33, 27, 0.18);

  --shadow-xs: 0 2px 8px rgba(44, 33, 27, 0.04);
  --shadow-sm: 0 6px 18px rgba(44, 33, 27, 0.06);
  --shadow-md: 0 12px 32px rgba(44, 33, 27, 0.08);
  --shadow-lg: 0 20px 55px rgba(44, 33, 27, 0.12);
  --shadow-xl: 0 30px 90px rgba(44, 33, 27, 0.18);
  --shadow-primary: 0 10px 28px rgba(139, 74, 50, 0.22);

  --radius-card: 18px;
  --radius-button: 12px;
  --radius-image: 24px;
  --radius-pill: 999px;

  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);

  /* Remap original vars */
  --cream: var(--bg-base);
  --shell: var(--bg-surface);
  --blush: var(--secondary);
  --linen: var(--bg-elevated);
  --berry: var(--primary);
  --berry-dark: var(--primary-hover);
  --berry-deep: var(--text-main);
  --cocoa: var(--bg-dark);
  --cocoa-soft: var(--text-secondary);
  --gold: var(--accent);
  --ink: var(--text-main);
  --muted: var(--text-muted);
  --line: var(--border-subtle);
  --line-strong: var(--border-default);

  --shadow-l1: var(--shadow-xs);
  --shadow-l2: var(--shadow-sm);
  --shadow-l3: var(--shadow-md);
  --shadow-l4: var(--shadow-lg);
}

/* Layer 1: Paper Background */
body {
  background: radial-gradient(circle at 15% 10%, rgba(201, 154, 61, 0.05), transparent 25%), var(--bg-base) !important;
  color: var(--text-main);
}

.eyebrow {
  color: var(--accent) !important;
  font-weight: 800 !important;
}

/* BUTTONS */
.btn {
  border-radius: var(--radius-button) !important;
  transition: transform var(--duration-fast) var(--ease-smooth), background var(--duration-fast) ease, border-color var(--duration-fast) ease, box-shadow var(--duration-fast) ease !important;
}
.btn:active {
  transform: translateY(1px) scale(0.985) !important;
}
.btn--primary {
  box-shadow: var(--shadow-primary) !important;
}
.btn--primary:hover {
  background: var(--primary-hover) !important;
  box-shadow: 0 14px 32px rgba(139, 74, 50, 0.28) !important;
  transform: translateY(-2px) !important;
}
.btn--ghost {
  color: var(--text-secondary) !important;
}
.btn--ghost:hover {
  color: var(--primary) !important;
  background: rgba(139, 74, 50, 0.06) !important;
}

/* HEADER */
.site-header {
  background: transparent !important;
  border-bottom: none !important;
  transition: background var(--duration-normal) var(--ease-smooth), backdrop-filter var(--duration-normal) var(--ease-smooth), box-shadow var(--duration-normal) var(--ease-smooth) !important;
}
.site-header.is-stuck {
  background: color-mix(in srgb, var(--bg-surface) 84%, transparent) !important;
  backdrop-filter: blur(18px) saturate(140%) !important;
  box-shadow: 0 1px 0 var(--border-subtle) !important;
}
.nav__link {
  position: relative;
  color: var(--text-secondary) !important;
  transition: color var(--duration-fast) ease !important;
}
.nav__link::after {
  content: "";
  position: absolute;
  inset-inline: 0;
  bottom: -6px;
  height: 1px;
  background: var(--primary);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform var(--duration-normal) var(--ease-smooth);
}
.nav__link:hover {
  color: var(--text-main) !important;
}
.nav__link:hover::after {
  transform: scaleX(1);
}

/* HERO */
.hero {
  position: relative;
}
.hero::before {
  content: "";
  position: absolute;
  width: 520px; height: 520px;
  top: -180px;
  inset-inline-end: -120px;
  border-radius: 50%;
  background: rgba(201, 154, 61, 0.08);
  filter: blur(2px);
  z-index: -1;
}
.hero__card {
  border-radius: var(--radius-image) !important;
  box-shadow: var(--shadow-xl) !important;
  position: relative;
  border: none !important;
}
.hero__card::after {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(44, 33, 27, 0.02), rgba(44, 33, 27, 0.18));
  pointer-events: none;
  border-radius: var(--radius-image);
}
.hero__card img {
  transition: transform 1.2s var(--ease-smooth) !important;
}
.hero__card:hover img {
  transform: scale(1.035) !important;
}

/* CAKE CARDS - Layer 2 */
.cake-card {
  background: var(--bg-surface) !important;
  border: 1px solid var(--border-subtle) !important;
  border-radius: var(--radius-card) !important;
  box-shadow: var(--shadow-sm) !important;
  transition: transform var(--duration-normal) var(--ease-smooth), box-shadow var(--duration-normal) var(--ease-smooth), border-color var(--duration-normal) ease !important;
}
.cake-card:hover {
  transform: translateY(-6px) !important;
  border-color: rgba(139, 74, 50, 0.16) !important;
  box-shadow: var(--shadow-lg) !important;
}
.cake-card__media {
  margin: 0.65rem !important;
  border-radius: 14px !important;
  aspect-ratio: 1 / 1.05 !important;
  border-bottom: none !important;
  overflow: hidden;
}
.cake-card__img {
  transition: transform 700ms var(--ease-smooth), filter 400ms ease !important;
}
.cake-card:hover .cake-card__img {
  transform: scale(1.055) !important;
}
.cake__tag {
  right: auto !important; left: auto !important;
  inset-inline-start: 0.85rem !important;
  top: 0.85rem !important;
  padding: 0.45rem 0.7rem !important;
  color: var(--text-main) !important;
  background: rgba(255, 253, 248, 0.92) !important;
  backdrop-filter: blur(10px) !important;
  border-radius: var(--radius-pill) !important;
}
.cake__tag--bestseller {
  background: var(--accent) !important;
  color: #FFFFFF !important;
}

/* REVIEWS */
.review-card {
  padding: 1.75rem !important;
  background: var(--bg-surface) !important;
  border: 1px solid var(--border-subtle) !important;
  border-radius: var(--radius-card) !important;
  box-shadow: var(--shadow-sm) !important;
}

/* ORDER TRAY - Layer 3 */
.order-tray {
  left: auto !important;
  right: auto !important;
  transform: translateY(140%) !important;
  inset-inline-end: 1.25rem !important;
  background: linear-gradient(180deg, rgba(44, 33, 27, 0.97), rgba(36, 25, 20, 0.97)) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  box-shadow: 0 28px 70px rgba(44, 33, 27, 0.28) !important;
  backdrop-filter: blur(18px) !important;
}
.order-tray.is-visible {
  transform: translateY(0) !important;
}
@media (max-width: 560px) {
  .order-tray {
    inset-inline: 0.625rem !important;
    width: auto !important;
  }
}

/* Category Filters */
.desktop-category-pills .btn {
  border-radius: var(--radius-pill) !important;
  border: 1px solid var(--border-default) !important;
  font-weight: 700 !important;
  padding-inline: 1.2rem !important;
  background: transparent !important;
  color: var(--text-secondary) !important;
  box-shadow: none !important;
}
.desktop-category-pills .btn:hover {
  color: var(--primary) !important;
  border-color: var(--primary) !important;
  background: transparent !important;
  transform: translateY(0) !important;
}
.desktop-category-pills .btn.is-active {
  color: white !important;
  border-color: var(--primary) !important;
  background: var(--primary) !important;
  box-shadow: var(--shadow-primary) !important;
}

/* RTL FONT OVERRIDE */
html[dir="rtl"] h1, 
html[dir="rtl"] h2, 
html[dir="rtl"] h3, 
html[dir="rtl"] h4, 
html[dir="rtl"] h5, 
html[dir="rtl"] .hero__title, 
html[dir="rtl"] .section__title, 
html[dir="rtl"] .cake-card__title {
  font-family: var(--font-sans) !important;
}
`;

css += overrides;
fs.writeFileSync('builder/styles.css', css);
console.log("Appended premium artisanal overrides.");
