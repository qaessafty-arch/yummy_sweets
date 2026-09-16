const fs = require('fs');

let css = `
/* =========================================================
   ARTISANAL BAKERY — PROFESSIONAL DESIGN SYSTEM
   Warm Luxury / Editorial / Premium Handmade
   English + Kurdish RTL
   ========================================================= */

:root {
  /* ---------------------------------------------------------
     CORE COLOR TOKENS
     --------------------------------------------------------- */

  --color-espresso-950: #241914;
  --color-espresso-900: #2C211B;
  --color-espresso-800: #3B2A22;
  --color-espresso-700: #4A352B;

  --color-cream-50: #FFFEFA;
  --color-cream-100: #FFFDF8;
  --color-cream-200: #F7F1E8;
  --color-cream-300: #EFE5D8;
  --color-cream-400: #E5D8C8;

  --color-terracotta-400: #B86547;
  --color-terracotta-500: #8B4A32;
  --color-terracotta-600: #713A27;
  --color-terracotta-700: #5C2E20;

  --color-gold-300: #E4C67A;
  --color-gold-400: #D7B45E;
  --color-gold-500: #C99A3D;
  --color-gold-600: #A97C27;

  --color-success: #587653;
  --color-error: #B84C3A;

  /* ---------------------------------------------------------
     SEMANTIC DESIGN TOKENS
     --------------------------------------------------------- */

  --bg-base: var(--color-cream-200);
  --bg-surface: var(--color-cream-100);
  --bg-elevated: var(--color-cream-50);
  --bg-dark: var(--color-espresso-900);

  --text-main: var(--color-espresso-900);
  --text-secondary: #5F5148;
  --text-muted: #806F63;
  --text-inverse: #FFFDF8;

  --primary: var(--color-terracotta-500);
  --primary-hover: var(--color-terracotta-600);
  --primary-active: var(--color-terracotta-700);

  --secondary: var(--color-cream-300);
  --accent: var(--color-gold-500);

  --border-subtle: rgba(44, 33, 27, 0.08);
  --border-default: var(--color-cream-400);
  --border-strong: rgba(44, 33, 27, 0.18);

  /* ---------------------------------------------------------
     TYPOGRAPHY
     --------------------------------------------------------- */

  --font-heading: "Cormorant Garamond", serif;
  --font-body: "Noto Sans Arabic", sans-serif;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2rem;
  --text-4xl: 2.75rem;
  --text-5xl: 4rem;
  --text-6xl: 5.5rem;

  --lh-tight: 1.05;
  --lh-heading: 1.15;
  --lh-body: 1.7;

  /* ---------------------------------------------------------
     SPACING
     --------------------------------------------------------- */

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;

  /* ---------------------------------------------------------
     RADII
     --------------------------------------------------------- */

  --radius-xs: 6px;
  --radius-sm: 10px;
  --radius-md: 14px;
  --radius-lg: 18px;
  --radius-xl: 24px;
  --radius-2xl: 32px;
  --radius-pill: 999px;

  --radius-card: var(--radius-lg);
  --radius-button: 12px;
  --radius-image: var(--radius-xl);

  /* ---------------------------------------------------------
     SHADOWS
     --------------------------------------------------------- */

  --shadow-xs:
    0 2px 8px rgba(44, 33, 27, 0.04);

  --shadow-sm:
    0 6px 18px rgba(44, 33, 27, 0.06);

  --shadow-md:
    0 12px 32px rgba(44, 33, 27, 0.08);

  --shadow-lg:
    0 20px 55px rgba(44, 33, 27, 0.12);

  --shadow-xl:
    0 30px 90px rgba(44, 33, 27, 0.18);

  --shadow-primary:
    0 10px 28px rgba(139, 74, 50, 0.22);

  /* ---------------------------------------------------------
     MOTION
     --------------------------------------------------------- */

  --ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1);
  --ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);

  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 450ms;

  /* ---------------------------------------------------------
     LAYOUT
     --------------------------------------------------------- */

  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1440px;

  --header-height: 78px;
}

/* =========================================================
   DARK MODE
   ========================================================= */

[data-theme="dark"] {
  --bg-base: #211814;
  --bg-surface: #2A1F1A;
  --bg-elevated: #32251E;
  --bg-dark: #140E0B;

  --text-main: #FFF8EF;
  --text-secondary: #D3C2B5;
  --text-muted: #A99585;
  --text-inverse: #241914;

  --secondary: #433329;

  --border-subtle: rgba(255, 248, 239, 0.08);
  --border-default: rgba(255, 248, 239, 0.13);
  --border-strong: rgba(255, 248, 239, 0.2);

  --shadow-sm:
    0 8px 24px rgba(0, 0, 0, 0.2);

  --shadow-md:
    0 16px 40px rgba(0, 0, 0, 0.28);

  --shadow-lg:
    0 24px 60px rgba(0, 0, 0, 0.35);
}

/* =========================================================
   RESET / FOUNDATION
   ========================================================= */

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  min-width: 320px;
  background:
    radial-gradient(
      circle at 15% 10%,
      rgba(201, 154, 61, 0.05),
      transparent 25%
    ),
    var(--bg-base) !important;
  color: var(--text-main) !important;
  font-family: var(--font-body) !important;
  font-size: var(--text-base) !important;
  line-height: var(--lh-body) !important;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

img {
  display: block;
  width: 100%;
  max-width: 100%;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

/* =========================================================
   TYPOGRAPHY
   ========================================================= */

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  color: var(--text-main) !important;
  font-family: var(--font-heading) !important;
  font-weight: 600 !important;
  line-height: var(--lh-heading) !important;
  letter-spacing: -0.025em !important;
}

h1 {
  font-size: clamp(3rem, 7vw, var(--text-6xl)) !important;
}

h2 {
  font-size: clamp(2.25rem, 5vw, var(--text-5xl)) !important;
}

h3 {
  font-size: clamp(1.5rem, 3vw, var(--text-3xl)) !important;
}

p {
  margin: 0;
  color: var(--text-secondary);
}

/* =========================================================
   CONTAINER
   ========================================================= */

.container {
  width: min(
    calc(100% - 2rem),
    var(--container-xl)
  ) !important;
  margin-inline: auto !important;
}

.section {
  padding-block: clamp(
    var(--space-16),
    9vw,
    var(--space-24)
  ) !important;
}

/* =========================================================
   HEADER
   ========================================================= */

.site-header {
  position: fixed !important;
  inset: 0 0 auto !important;
  z-index: 1000 !important;
  height: var(--header-height) !important;
  background: transparent !important;
  border-bottom: none !important;

  transition:
    background var(--duration-normal) var(--ease-standard),
    backdrop-filter var(--duration-normal) var(--ease-standard),
    box-shadow var(--duration-normal) var(--ease-standard) !important;
}

.site-header.is-stuck {
  background: color-mix(
    in srgb,
    var(--bg-surface) 84%,
    transparent
  ) !important;

  backdrop-filter: blur(18px) saturate(140%) !important;
  box-shadow: 0 1px 0 var(--border-subtle) !important;
}

.header__inner {
  height: 100% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: var(--space-8) !important;
}

.header__brand {
  display: inline-flex !important;
  align-items: center !important;
  gap: var(--space-3) !important;
  flex-shrink: 0 !important;
}

.logo__icon {
  width: 42px !important;
  height: 42px !important;
  border-radius: 50% !important;
  display: grid !important;
  place-items: center !important;
  background: var(--primary) !important;
  color: white !important;
  box-shadow: var(--shadow-primary) !important;
}

.brand__name {
  font-family: var(--font-heading) !important;
  font-size: 1.55rem !important;
  font-weight: 700 !important;
}

/* =========================================================
   NAV LINKS
   ========================================================= */

.header__nav {
  display: flex !important;
  align-items: center !important;
  gap: var(--space-8) !important;
}

.nav__link {
  position: relative !important;
  color: var(--text-secondary) !important;
  font-size: var(--text-sm) !important;
  font-weight: 600 !important;
  transition: color var(--duration-fast) ease !important;
}

.nav__link::after {
  content: "" !important;
  position: absolute !important;
  inset-inline: 0 !important;
  bottom: -8px !important;
  height: 1px !important;
  background: var(--primary) !important;

  transform: scaleX(0) !important;
  transform-origin: center !important;

  transition:
    transform var(--duration-normal) var(--ease-standard) !important;
}

.nav__link:hover,
.nav__link.active {
  color: var(--text-main) !important;
}

.nav__link:hover::after,
.nav__link.active::after {
  transform: scaleX(1) !important;
}

/* =========================================================
   BUTTON SYSTEM
   ========================================================= */

.btn {
  position: relative !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 0.6rem !important;

  min-height: 46px !important;
  padding-inline: 1.2rem !important;

  border: 1px solid transparent !important;
  border-radius: var(--radius-button) !important;

  font-size: var(--text-sm) !important;
  font-weight: 700 !important;

  transition:
    transform var(--duration-fast) var(--ease-standard),
    background var(--duration-fast) ease,
    border-color var(--duration-fast) ease,
    box-shadow var(--duration-fast) ease !important;
}

.btn:active {
  transform: translateY(1px) scale(0.985) !important;
}

.btn--primary {
  color: white !important;
  background: var(--primary) !important;
  box-shadow: var(--shadow-primary) !important;
}

.btn--primary:hover {
  background: var(--primary-hover) !important;
  box-shadow: 0 14px 32px rgba(139, 74, 50, 0.28) !important;
  transform: translateY(-2px) !important;
}

.btn--secondary {
  color: var(--text-main) !important;
  background: transparent !important;
  border-color: var(--border-strong) !important;
}

.btn--secondary:hover {
  background: var(--bg-surface) !important;
  border-color: var(--primary) !important;
  color: var(--primary) !important;
}

.btn--dark {
  color: white !important;
  background: var(--bg-dark) !important;
}

.btn--ghost {
  color: var(--text-secondary) !important;
  background: transparent !important;
}

.btn--ghost:hover {
  color: var(--primary) !important;
  background: rgba(139, 74, 50, 0.06) !important;
}

/* =========================================================
   HERO
   ========================================================= */

.hero {
  position: relative !important;
  min-height: min(920px, 100svh) !important;
  display: grid !important;
  align-items: center !important;
  overflow: hidden !important;
}

.hero::before {
  content: "" !important;
  position: absolute !important;
  width: 520px !important;
  height: 520px !important;
  top: -180px !important;
  inset-inline-end: -120px !important;
  border-radius: 50% !important;
  background: rgba(201, 154, 61, 0.08) !important;
  filter: blur(2px) !important;
}

.hero__grid {
  display: grid !important;
  grid-template-columns: 0.9fr 1.1fr !important;
  align-items: center !important;
  gap: clamp(2rem, 7vw, 7rem) !important;
}

.hero__content {
  position: relative !important;
  z-index: 2 !important;
}

.eyebrow {
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.55rem !important;

  margin-bottom: 1rem !important;

  color: var(--accent) !important;
  font-size: var(--text-sm) !important;
  font-weight: 800 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.12em !important;
}

.hero__title {
  max-width: 760px !important;
}

.lead {
  max-width: 560px !important;
  margin-top: 1.5rem !important;
  font-size: clamp(1rem, 2vw, 1.15rem) !important;
}

.hero__ctas {
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 0.75rem !important;
  margin-top: 2rem !important;
}

.hero__visual {
  position: relative !important;
}

.hero__card {
  position: relative !important;
  overflow: hidden !important;
  border-radius: 32px !important;
  box-shadow: var(--shadow-xl) !important;
}

.hero__card::after {
  content: "" !important;
  position: absolute !important;
  inset: 0 !important;
  background:
    linear-gradient(
      180deg,
      rgba(44, 33, 27, 0.02),
      rgba(44, 33, 27, 0.18)
    ) !important;
  pointer-events: none !important;
}

.hero__card img {
  aspect-ratio: 4 / 5 !important;
  object-fit: cover !important;
  transition: transform 1.2s var(--ease-smooth) !important;
}

.hero__card:hover img {
  transform: scale(1.035) !important;
}

/* =========================================================
   SECTION HEADER
   ========================================================= */

.section__title-wrap {
  display: flex !important;
  align-items: flex-end !important;
  justify-content: space-between !important;
  gap: 2rem !important;
  margin-bottom: 3rem !important;
}

.section-heading-copy {
  max-width: 650px !important;
}

.section-kicker {
  margin-bottom: 0.6rem !important;
  color: var(--accent) !important;
  font-size: 0.78rem !important;
  font-weight: 800 !important;
  letter-spacing: 0.12em !important;
  text-transform: uppercase !important;
}

/* =========================================================
   CATEGORY FILTER
   ========================================================= */

.desktop-category-pills {
  display: flex !important;
  align-items: center !important;
  gap: 0.55rem !important;
  overflow-x: auto !important;
  padding-bottom: 0.5rem !important;
  scrollbar-width: none !important;
}

.desktop-category-pills::-webkit-scrollbar {
  display: none !important;
}

.desktop-category-pills .btn {
  flex-shrink: 0 !important;
  min-height: 42px !important;
  padding-inline: 1rem !important;

  border: 1px solid var(--border-default) !important;
  border-radius: var(--radius-pill) !important;

  background: transparent !important;
  color: var(--text-secondary) !important;

  font-size: var(--text-sm) !important;
  font-weight: 700 !important;

  transition:
    background var(--duration-fast) ease,
    color var(--duration-fast) ease,
    border-color var(--duration-fast) ease,
    transform var(--duration-fast) ease !important;
}

.desktop-category-pills .btn:hover {
  color: var(--primary) !important;
  border-color: var(--primary) !important;
}

.desktop-category-pills .btn.is-active {
  color: white !important;
  border-color: var(--primary) !important;
  background: var(--primary) !important;
  box-shadow: var(--shadow-primary) !important;
}

/* =========================================================
   PRODUCT GRID
   ========================================================= */

.menu-grid {
  display: grid !important;
  grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
  gap: 1.25rem !important;
}

/* =========================================================
   PRODUCT CARD
   ========================================================= */

.cake-card {
  position: relative !important;
  overflow: hidden !important;

  background: var(--bg-surface) !important;
  border: 1px solid var(--border-subtle) !important;
  border-radius: var(--radius-card) !important;

  box-shadow: var(--shadow-sm) !important;

  transition:
    transform var(--duration-normal) var(--ease-smooth),
    box-shadow var(--duration-normal) var(--ease-smooth),
    border-color var(--duration-normal) ease !important;
}

.cake-card:hover {
  transform: translateY(-6px) !important;
  border-color: rgba(139, 74, 50, 0.16) !important;
  box-shadow: var(--shadow-lg) !important;
}

.cake-card__media {
  position: relative !important;
  overflow: hidden !important;
  margin: 0.65rem !important;
  border-radius: var(--radius-image) !important;
}

.cake-card__img {
  aspect-ratio: 1 / 1.05 !important;
  object-fit: cover !important;

  transition:
    transform 700ms var(--ease-smooth),
    filter 400ms ease !important;
}

.cake-card:hover .cake-card__img {
  transform: scale(1.055) !important;
}

.cake__tag {
  position: absolute !important;
  top: 0.85rem !important;
  inset-inline-start: 0.85rem !important;

  padding: 0.45rem 0.7rem !important;

  border-radius: var(--radius-pill) !important;

  color: var(--color-espresso-900) !important;
  background: rgba(255, 253, 248, 0.92) !important;

  backdrop-filter: blur(10px) !important;

  font-size: 0.68rem !important;
  font-weight: 800 !important;
  letter-spacing: 0.04em !important;
}

.cake-card__body {
  padding: 1rem 1rem 1.15rem !important;
}

.cake-card__title {
  font-family: var(--font-heading) !important;
  font-size: 1.45rem !important;
  font-weight: 700 !important;
}

.cake-card__desc {
  display: -webkit-box !important;
  margin-top: 0.4rem !important;

  color: var(--text-muted) !important;
  font-size: 0.84rem !important;
  line-height: 1.6 !important;

  -webkit-line-clamp: 2 !important;
  -webkit-box-orient: vertical !important;
  overflow: hidden !important;
}

.cake-card__footer {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 1rem !important;
  margin-top: 1rem !important;
}

.price {
  color: var(--text-main) !important;
  font-size: 1rem !important;
  font-weight: 800 !important;
  font-family: var(--font-body) !important;
}

.cake-card__footer .btn {
  width: 40px !important;
  height: 40px !important;
  min-height: auto !important;
  padding: 0 !important;

  display: grid !important;
  place-items: center !important;

  border: 0 !important;
  border-radius: 12px !important;

  color: white !important;
  background: var(--primary) !important;

  box-shadow: 0 8px 18px rgba(139, 74, 50, 0.18) !important;

  transition:
    transform var(--duration-fast) ease,
    background var(--duration-fast) ease !important;
    
  font-size: 0 !important;
}
.cake-card__footer .btn::before {
  content: "+";
  font-size: 1.2rem;
}

.cake-card__footer .btn:hover {
  background: var(--primary-hover) !important;
  transform: scale(1.06) !important;
}

/* =========================================================
   REVIEW SECTION
   ========================================================= */

.reviews__grid {
  display: grid !important;
  grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  gap: 1rem !important;
}

.review-card {
  padding: 1.75rem !important;
  background: var(--bg-surface) !important;
  border: 1px solid var(--border-subtle) !important;
  border-radius: var(--radius-card) !important;
  box-shadow: var(--shadow-sm) !important;
}

.review-card .stars {
  color: var(--accent) !important;
  letter-spacing: 0.08em !important;
}

.review-card p {
  margin-top: 1rem !important;
  color: var(--text-main) !important;
  font-family: var(--font-heading) !important;
  font-size: 1.35rem !important;
  line-height: 1.45 !important;
}

.review-card h4 {
  margin-top: 1.25rem !important;
  color: var(--text-muted) !important;
  font-size: 0.82rem !important;
  font-weight: 700 !important;
}

/* =========================================================
   FLOATING WHATSAPP / ORDER TRAY
   ========================================================= */

.order-tray {
  position: fixed !important;
  z-index: 1100 !important;

  inset-inline-end: 1.25rem !important;
  bottom: 1.25rem !important;
  right: auto !important;
  left: auto !important;

  width: min(390px, calc(100vw - 2rem)) !important;

  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 22px !important;

  background:
    linear-gradient(
      180deg,
      rgba(44, 33, 27, 0.97),
      rgba(36, 25, 20, 0.97)
    ) !important;

  color: white !important;

  box-shadow: 0 28px 70px rgba(44, 33, 27, 0.28) !important;

  overflow: hidden !important;

  backdrop-filter: blur(18px) !important;
  
  transform: translateY(140%) !important;
  transition: transform var(--duration-normal) var(--ease-smooth) !important;
}
.order-tray.is-visible {
  transform: translateY(0) !important;
}

.order-tray__main {
  width: 100% !important;
  min-height: 66px !important;

  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 1rem !important;

  padding: 0.8rem 1rem !important;

  border: 0 !important;
  background: transparent !important;
  color: white !important;

  text-align: start !important;
}

.order-tray__meta {
  display: flex !important;
  align-items: center !important;
  gap: 0.8rem !important;
}

.tray-count-bubble {
  width: 42px !important;
  height: 42px !important;
  display: grid !important;
  place-items: center !important;

  border-radius: 13px !important;

  background: #25D366 !important;
  color: white !important;
}

.tray-count-bubble {
  font-size: 1rem !important;
}

.order-tray-total {
  font-weight: 800 !important;
}

.tray-breakdown {
  padding: 0 1rem 1rem !important;
}

.tray-breakdown-row {
  display: grid !important;
  grid-template-columns: 52px 1fr auto !important;
  gap: 0.8rem !important;
  align-items: center !important;

  padding-block: 0.75rem !important;

  border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
}

.tray-breakdown-row img {
  width: 52px !important;
  height: 52px !important;
  object-fit: cover !important;
  border-radius: 12px !important;
}

.order-tray__actions {
  width: 100% !important;
  margin-top: 0.8rem !important;
}
.order-tray__actions .btn {
  background: transparent !important;
  border: 1px solid rgba(255,255,255,0.2) !important;
  color: white !important;
}
.order-tray__actions .btn:hover {
  background: rgba(255,255,255,0.1) !important;
}

/* =========================================================
   MODALS
   ========================================================= */

.modal-overlay {
  position: fixed !important;
  inset: 0 !important;
  z-index: 2000 !important;

  display: grid !important;
  place-items: center !important;

  padding: 1rem !important;

  background: rgba(30, 20, 16, 0.62) !important;
  backdrop-filter: blur(8px) !important;

  opacity: 0 !important;
  visibility: hidden !important;

  transition:
    opacity var(--duration-normal) ease,
    visibility var(--duration-normal) ease !important;
}

.modal-overlay.is-open {
  opacity: 1 !important;
  visibility: visible !important;
}

.modal-window {
  width: min(900px, 100%) !important;

  background: var(--bg-surface) !important;
  color: var(--text-main) !important;

  border: 1px solid var(--border-default) !important;
  border-radius: 24px !important;

  box-shadow: var(--shadow-xl) !important;

  transform: translateY(20px) scale(0.98) !important;
  transition: transform 350ms var(--ease-smooth) !important;

  overflow: hidden !important;
}

.modal-overlay.is-open .modal-window {
  transform: translateY(0) scale(1) !important;
}

.modal-layout {
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
}

.modal-image {
  width: 100% !important;
  height: 100% !important;
  min-height: 450px !important;
  object-fit: cover !important;
}

.modal-content {
  padding: clamp(1.5rem, 4vw, 3rem) !important;
}

/* =========================================================
   FOCUS / ACCESSIBILITY
   ========================================================= */

:focus-visible {
  outline: 3px solid rgba(201, 154, 61, 0.5) !important;
  outline-offset: 3px !important;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* =========================================================
   RTL SUPPORT
   ========================================================= */

html[dir="rtl"] {
  text-align: start !important;
}

html[dir="rtl"] .hero__grid {
  direction: rtl !important;
}

html[dir="rtl"] .header__nav,
html[dir="rtl"] .hero__ctas {
  direction: rtl !important;
}

html[dir="rtl"] .cake-card,
html[dir="rtl"] .review-card,
html[dir="rtl"] .modal-window {
  text-align: right !important;
}

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

/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 1100px) {
  .menu-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  }

  .hero__grid {
    gap: 3rem !important;
  }
}

@media (max-width: 850px) {
  :root {
    --header-height: 68px !important;
  }

  .header__nav {
    display: none !important;
  }

  .hero {
    min-height: auto !important;
    padding-block: 8rem 4rem !important;
  }

  .hero__grid {
    grid-template-columns: 1fr !important;
  }

  .hero__content {
    max-width: 720px !important;
  }

  .hero__visual {
    max-width: 700px !important;
    margin-inline: auto !important;
  }

  .menu-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }

  .reviews__grid {
    grid-template-columns: 1fr !important;
  }

  .section__title-wrap {
    align-items: flex-start !important;
    flex-direction: column !important;
  }
}

@media (max-width: 560px) {
  .container {
    width: min(
      calc(100% - 1.25rem),
      var(--container-xl)
    ) !important;
  }

  .section {
    padding-block: 4.5rem !important;
  }

  .menu-grid {
    grid-template-columns: 1fr !important;
  }

  .hero__ctas {
    display: grid !important;
    grid-template-columns: 1fr !important;
  }

  .hero__ctas .btn {
    width: 100% !important;
  }

  .cake-card__img {
    aspect-ratio: 1 / 1 !important;
  }

  .modal-layout {
    grid-template-columns: 1fr !important;
  }

  .modal-image {
    min-height: 280px !important;
    max-height: 320px !important;
  }

  .order-tray {
    inset-inline: 0.625rem !important;
    bottom: 0.625rem !important;
    width: auto !important;
  }
}
`;

// Append directly and write
const existing = fs.readFileSync('builder/styles.css', 'utf8');
fs.writeFileSync('builder/styles.css', existing + '\n\n' + css);
console.log('Appended clean CSS block');
