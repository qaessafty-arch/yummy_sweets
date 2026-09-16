# MASTER PROMPT — Yummy Sweets Boutique Bakery Web Application

## Overview
Yummy Sweets is a high-craft, bilingual (English & Kurdish Sorani RTL) artisanal bakery web application. It features bespoke cake ordering via WhatsApp, dual currency support, an embedded staff authentication system, and an integrated Control Panel CMS.

---

## Section 4 — Dual Currency & Pricing Architecture (Adjusted)
- **Primary Source of Truth**: All product pricing is defined and saved in USD (`priceUSD`).
- **Commercial & Storefront Control**: The shop owner (Admin) and Developer configure how money works via the **Economy Tab** in the Control Panel:
  - Select active secondary currency (`IQD`, `EUR`, `TRY`, or `None`).
  - Toggle storefront visibility of the secondary currency (hides the currency switcher in header and mobile drawer when disabled).
  - Customize currency symbol (e.g. `د.ع`, `IQD`, `€`, `₺`).
  - Configure the exchange rate (e.g., 1 USD = 1310 IQD).
  - Select price rounding rule (Nearest 1, 250, 500, or 1000).
- **Watermark Separation**: The Developer retains sole control over the developer watermark toggle (`developed with respect and love by null-tech`), located in the Developer Options section.

---

## Section 6 — Control Panel CMS (Adjusted)
The Control Panel provides role-based tabs configured via `PANEL_TABS`:
1. **Brand & Logo** (`brand`): Shop name, tagline, logo emoji/image, announcement bar — *Admin & Dev*
2. **About Us** (`about`): Heritage & story copy in English and Kurdish — *Admin & Dev*
3. **Contact** (`contact`): WhatsApp, phone, email, kitchen address, opening hours — *Admin & Dev*
4. **Social Media** (`socials`): Instagram, Facebook, TikTok links — *Admin & Dev*
5. **Products** (`products`): Product catalog, photos, categories, descriptions, USD prices — *Admin & Dev*
6. **Economy** (`economy`): Full commercial economy panel (Currencies, Exchange Rate, Delivery Fees, Tax, Discounts, Live Preview) — *Admin & Dev* (Replaces previous dev-only currency tab)
7. **Fonts** (`fonts`): Kurdish body and display font pairings with live preview — *Developer only*
8. **Users** (`users`): Staff accounts and role assignments — *Developer only*
9. **Data** (`data`): Backup JSON export, JSON import, and factory reset — *Developer only*

---

## Section 7.5 — Economy Tab (Admin Panel)

### Purpose
Give the Admin (shop owner) full control over how money works on the storefront — currencies, exchange rates, delivery fees, minimums, taxes, and discounts — without needing the Developer. Prices and rates change weekly (especially IQD), and the owner should never have to call a developer to adjust them.

### Why it belongs to Admin, not Developer
| Concern | Owner |
| :--- | :--- |
| Business rules (fees, minimums, promos, taxes) | Admin |
| Currency display and exchange rate | Admin |
| Data export / import, user accounts | Developer |
| null-tech watermark toggle | Developer only |

*The Developer tab stays technical. The Economy tab is commercial.*

### Location in the Panel
Added to `PANEL_TABS`:
```js
{ id: 'economy', labelKey: 'tabEconomy', roles: ['admin', 'dev'] }
```
Placed directly after `'products'` — the natural next step after editing what you sell. The old dev-only `'currency'` tab is removed.

### Tab Contents — Five Sections
1. **Currencies**:
   - Primary currency: Read-only label locked to USD (base source of truth).
   - Secondary currency: Dropdown (`IQD` / `EUR` / `TRY` / `None`, default `IQD`).
   - Show secondary currency in storefront: Checkbox (hides currency switcher when off).
   - Currency symbol: Text input (default `د.ع`).
2. **Exchange Rate**:
   - 1 USD = ? Secondary currency: Number (default 1310, must be > 0).
   - Rounding rule: Dropdown (Nearest 1 / 250 / 500 / 1000).
   - Auto-refresh rate: Checkbox (off by default, reserved for future API).
   - Last updated: Read-only timestamp of last save.
3. **Delivery**:
   - Flat delivery fee (USD): Number (default 8, 0 for free).
   - Free delivery over (USD): Number (default 60, 0 for always free).
   - Minimum order (USD): Number (default 0, below this Send Order is disabled).
   - Pickup only: Checkbox (hides delivery fee entirely; shows "Pickup available" instead).
4. **Tax (optional)**:
   - Charge tax: Checkbox (off by default).
   - Tax rate (%): Number (0–30, clamped at 30).
   - Tax label: Text (default "VAT", or "Sales Tax", "GST", etc.).
   - Prices already include tax: Checkbox (On = price shown is final; Off = tax added at checkout).
5. **Discounts (optional)**:
   - Active promo code: Text input (single code, uppercased automatically, 3–20 chars).
   - Discount type: Dropdown (Percentage (%) / Fixed amount (USD)).
   - Discount value: Number (e.g., 10 = 10% or $10).
   - Expires on: Date (empty = no expiry).
6. **Advanced Developer Options** (Bottom of Economy tab, visible only when `session.user.role === 'dev'`):
   - Watermark toggle (`developed with respect and love by null-tech`).
7. **Live Preview Card**:
   - Live order breakdown calculating on every keystroke (`Sample order: $50 subtotal`):
     - Subtotal: $50.00
     - Discount: applied if promo code active & valid
     - Delivery: Fee or Free
     - Tax: calculated if enabled and not included
     - Total: final computed amount

### Behavior & Cart Breakdown
- **Price rendering**: `formatPrice(usd)` checks `config.economy` for active currency, rate conversion, rounding, and currency symbol.
- **Cart calculation order of operations**:
  1. Subtotal = sum of qty × product.usd
  2. Discount = applied to subtotal if promo code matches and is not expired
  3. Delivery = free if subtotal ≥ freeDeliveryOver, else deliveryFee. Skipped if pickupOnly
  4. Tax = added only if taxEnabled and taxIncluded === false. Applied to (subtotal − discount)
  5. Total = sum of all above
- **WhatsApp message breakdown**:
  Includes Subtotal, Discount, Delivery, Tax, and Total. Lines with zero values are omitted.
- **Minimum order enforcement**:
  If subtotal < minimumOrder, the Send Order button is disabled and shows warning:
  *"Minimum order is $20. Add $8 more to checkout."*
- **Free delivery indicator**:
  When subtotal ≥ freeDeliveryOver, shows green "Free" next to delivery line.
- **Persistence**:
  Stored under `config.economy` in `sc_config_v2` with seamless migration from legacy `config.iqdRate`.

---

## Section 7.6 — Economy — Screen Responsiveness & Live Reactions

### Design Principle
The Economy tab is the most data-dense screen in the panel. On desktop it should feel like a financial dashboard — grouped, scannable, side-by-side. On mobile it must degrade gracefully into a single vertical flow with no horizontal scroll, no clipped inputs, and no lost context.

Every change in the Economy tab must visibly react on screen within 250ms, without a page reload, without a save button for visual feedback (save is only for persistence).

### Breakpoint Behavior
- **Desktop — ≥ 1100px**:
  - Panel grid stays at 210px nav + 1fr content.
  - Economy fields render in two columns via `.panel__grid` / `.economy-panel-layout`.
  - The Live Preview card sits to the right of the "Discounts" section, sticky at top: 24px inside the scroll container so it's always visible while editing.
  - Exchange rate and rounding rule appear side-by-side in the same row.
  - Delivery fee / free delivery / minimum order appear on one row (three columns).
  - The preview card updates on every keystroke.
- **Tablet — 960px – 1099px**:
  - Panel nav becomes horizontal-scroll tabs at the top of the modal.
  - Economy fields collapse to one column — every field stacks vertically.
  - The Live Preview card moves below the form, full width.
  - Numeric inputs keep their spinner arrows and gain `inputmode="decimal"` for easier tablet entry.
  - Focus states enlarge to 3px outline for touch clarity.
- **Mobile — 760px – 959px**:
  - Modal becomes a full-screen sheet: `inset: 0`, `border-radius: 0`, no side padding beyond 16px.
  - Economy section headers (Currencies, Exchange rate, Delivery, Tax, Discounts) become collapsible accordions — only the first is open by default.
  - Each accordion header shows a one-line summary of its current values:
    - `"Exchange rate — 1 USD = 1,310 IQD · Nearest 250"`
    - `"Delivery — $8 flat · Free over $60 · Min $0"`
    - `"Tax — off"`
    - `"Discounts — no active code"`
  - The Live Preview becomes a sticky bottom bar that shows only the Total line, and expands upward when tapped.
- **Small Mobile — ≤ 560px**:
  - Accordion sections stack with 20px gaps.
  - All inputs go full width (`width: 100%`).
  - Number inputs use `inputmode="numeric"` and `pattern="[0-9]*"` so mobile keyboards open to digits.
  - The preview bar hides the breakdown and shows only the final Total, with a chevron to expand.
  - Header of the modal hides the panel role badge to save width — it moves into the accordion header of "Currencies".
  - Save button becomes a sticky footer bar with `position: sticky; bottom: 0` and a top hairline, so it's always reachable without scrolling.

### Live Reactions — Field by Field
Every input is watched by a `change` + `input` listener. Reactions happen instantly (no debounce for local fields; 200ms debounce only for the exchange rate to avoid re-rendering the whole storefront while typing).

- **Exchange rate changes**:
  - The storefront's IQD prices update immediately in the background (menu grid, tray, WhatsApp message).
  - The Live Preview's Total recalculates.
  - The `lastUpdatedRate` timestamp updates to "Just now".
  - A subtle pulse animation plays on the storefront price elements the next time the modal closes.
- **Rounding rule changes**:
  - The Live Preview shows a small hint: `"Rounded from 65,500 to 65,500 (nearest 500)"`.
  - IQD prices in the preview snap to the new rounding instantly.
- **Currency symbol changes**:
  - The preview shows the new symbol live.
  - The storefront switcher label updates from `IQD د.ع` to `IQD <new symbol>` — visible the moment the modal closes.
- **Secondary currency toggled off**:
  - The header currency switcher disappears with a 200ms fade (not a hard cut).
  - Body class `.single-currency` is added; `.price` uses the primary currency only.
  - The Live Preview locks to USD and hides the IQD line.
- **Delivery fee changes**:
  - The Live Preview's Delivery row updates.
  - If the sample subtotal already qualifies for free delivery, the row shows "Free" in green (`.is-free` class).
  - If the new fee is 0, the field label greys out and shows "Free delivery for everyone".
- **Free delivery threshold changes**:
  - If the threshold is set below the minimum order, an inline amber warning appears: *"Free delivery threshold is lower than minimum order — customers below minimum can't checkout anyway."*
  - The warning auto-clears when the values make sense again.
- **Minimum order changes**:
  - If the storefront tray currently has items below the new minimum, the Send Order button disables instantly and shows the localized minimum-order warning as a tooltip.
  - If the modal is closed at this moment, the tray updates in place.
- **Tax toggle / rate changes**:
  - The Live Preview adds or removes the Tax row with a 200ms height transition.
  - If `taxIncluded` is checked, the row displays "incl." next to the tax value and does not add to the total.
  - If unchecked, the tax adds to the total and a small note appears: "Added at checkout".
- **Promo code changes**:
  - Uppercased on blur and on every keystroke.
  - Invalid characters (spaces, symbols) are stripped.
  - A live validity check runs:
    - Empty → no badge
    - Valid → green pill "Active"
    - Expired → red pill "Expired"
    - Too short → grey pill "Needs 3+ chars"
  - The Live Preview shows a sample discount line: `"Discount (SAVE10) −$5.00"`.
- **Save button**:
  - Disabled (greyed, `cursor: not-allowed`, `opacity: .5`) until at least one field differs from the saved config.
  - Enabled state: berry background, `translateY(-2px)` on hover.
  - On click: shows a brief loading spinner inside the button for 300ms, then a green save-toast in the top-right of the modal (not the page toast — a modal-scoped toast so it doesn't get hidden behind the modal overlay).

### Storefront Reactions
The Economy tab writes to `config.economy`. The storefront reacts everywhere via a single `applyEconomy()` function that:
- Reads `config.economy`
- Recalculates `formatPrice()` behavior via a shared pricing helper
- Re-renders the tray
- Updates the header switcher labels
- Refreshes any open cart summary

### Cart & Tray Breakdown — Responsive
The order tray on the storefront becomes a mini receipt when the Economy tab is enabled.
- **Desktop tray (≥ 960px)**: Expands vertically to show the full breakdown (Subtotal, Discount, Delivery, Tax, Total).
- **Mobile tray (≤ 560px)**: Collapses to a two-line summary by default:
  ```text
  3 items · Total $47.25
  [ Clear ] [ Send ]
  ```
  Tapping the "Total" line expands a slide-up sheet with the full breakdown (`border-radius: 22px 22px 0 0`).
- **Live updates**: Any change to quantity, promo code, or (background) economy settings refreshes the tray instantly. If Send Order is disabled by minimum order, the tray's Send button shows as greyed with a lock icon and a tooltip.

### Header Switcher — Responsive
- Desktop: two pills side-by-side.
- Tablet: same, but with tighter padding.
- Mobile: the switchers move into the mobile menu — they do not appear in the sticky header.
- When only one currency is active, the entire switcher group is hidden with `display: none`.

### WhatsApp Message — Economy Integration
The generated message includes the full economy breakdown when at least one non-default value is set:
- Subtotal always shown.
- Discount line only when a valid promo code is applied.
- Delivery line only when `pickupOnly` is false.
- Tax line only when `taxEnabled` is true.
- Total always shown, in the customer's currently selected currency with a USD equivalent in parentheses when IQD.
- If all economy values are at defaults (no discount, no tax, free delivery), the message falls back to the simpler single-total format — so a simple shop stays simple.

### Accessibility & Motion
- Every field has a `<label for>` bound to its input id.
- Inline errors use `aria-live="polite"` so screen readers announce them.
- The Live Preview card uses `role="region"` and `aria-label="Live preview"`.
- Accordions on mobile use native `<details>` / `<summary>` or accessible button with `aria-expanded`.
- The sticky save bar has `aria-label="Save economy settings"`.
- Under `@media (prefers-reduced-motion: reduce)`, all pulse, fade, and height transitions collapse to instant.

## 7.15 Logo Changing
### Purpose
The logo is the shop's face. It appears in four places — header, footer, mobile nav, and the browser tab (favicon) — and must be swappable by the Admin in under ten seconds, with no code editing, no file hosting, and no broken images.

The system supports three logo modes, chosen by the Admin:
1. **Emoji** — a single character, rendered as text. Default 🎂.
2. **Uploaded image** — a file from the Admin's device, processed client-side and stored as a base64 data URL.
3. **Remote image URL** — a link to an image hosted elsewhere (CDN, Imgur, their own server).

At any moment exactly one mode is active. Switching modes is instant and reversible.

### Location in the Panel
The logo editor lives inside the existing Brand & Logo tab, as a dedicated card at the top of that tab — above shop name and tagline, because the logo is the most visual element.

```text
┌─ Brand & Logo ─────────────────────────────┐
│                                             │
│  ┌─ Logo ────────────────────────────────┐ │
│  │  [ Preview ]      [ Mode: ●Emoji ○Img ]│ │
│  │                    [ Upload / URL ]     │ │
│  └────────────────────────────────────────┘ │
│                                             │
│  Shop name (EN)  [___________]              │
│  Shop name (KU)  [___________]              │
│  ...                                        │
└─────────────────────────────────────────────┘
```

### Preview Panel
Square preview, 120×120px, rounded corners matching `.logo__mark` (`border-radius: 50%`).
Renders exactly what will appear in the header:
- **In Emoji mode**: the emoji centered, sized to match the header (about 1.05rem at header scale, scaled up to fill the preview).
- **In Image mode**: the image `object-fit: cover`, filling the circle.
- Below the preview, a small caption shows the active mode and, for uploaded images, the file size: `Uploaded · 42 KB`.
- The preview background is `--shell`, matching the header logo tile.
- If the image fails to load (bad URL, corrupt data), the preview falls back to the emoji with a red hairline border and an inline warning: *"Image couldn't load. Falling back to emoji."*

### Mode Switcher
A three-way radio pill group styled like the existing `.switch` component:
```text
[ Emoji ]  [ Upload ]  [ URL ]
```
- The currently active mode is highlighted (white background, berry text, soft shadow).
- Switching modes reveals the corresponding controls below and hides the others.
- Switching modes does not clear the other modes' values — the Admin can toggle back and forth to compare, then save.
- The mode is not persisted until Save brand is clicked.

### Mode 1 — Emoji
- A single text input with `maxlength="4"` (allows compound emoji like 🎂 or 👩‍🍳).
- Live preview updates on every keystroke.
- If the input is empty on save, the emoji falls back to 🎂 and a small note appears: *"Empty — using default 🎂."*
- A row of quick-pick emoji buttons below: 🎂 🍰 🧁 🍩 🍪 🥐 🍫 ☕ — one click sets the emoji.
- Emoji is rendered in the header as plain text inside the existing `.logo__mark` circle.

### Mode 2 — Upload
- A styled `<label class="upload-btn" for="logoImageInput">` reading "Upload logo" or "Replace logo" (depending on current state).
- Hidden `<input type="file" id="logoImageInput" accept="image/png,image/jpeg,image/webp,image/svg+xml">`.
- A "Remove" button visible only when an image exists.

#### Image processing
Reuses the same `processImageFile` pipeline as products, with one difference: logos are resized to 256×256 (not 800px wide), preserving aspect ratio, then center-cropped to a square. This keeps the base64 size tiny — typically 8–20 KB.
Pipeline:
1. Reject non-images and files > 5 MB.
2. Read via `FileReader` → `Image`.
3. Scale so the shorter side is 256px.
4. Center-crop to 256×256.
5. Draw to canvas on a transparent or white background (preserve PNG transparency).
6. Export as `image/png` if the source has an alpha channel, otherwise `image/jpeg` at 0.85 quality.
7. Reject if output exceeds 150 KB.
8. Resolve with the data URL.

#### SVG special case
SVG files are not rasterized. They are read as text via `FileReader.readAsText`, then sanitized:
- Strip `<script>` tags, `on*` attributes, and any `javascript:` URLs.
- Enforce a max size of 100 KB.
- Stored as a data URL with `image/svg+xml` MIME.
- If sanitization fails, the upload is rejected with a toast.

#### Preview
- Updates immediately after processing.
- Shows a green "Ready to save" chip below the preview until Save brand is clicked.

### Mode 3 — Remote Image URL
- A single text input with `placeholder="https://..."` and `dir="ltr"`.
- Live preview attempts to load the URL into an `<img>` with `crossorigin="anonymous"` and a 300ms timeout.
- If the URL loads, the preview shows the image and a green "URL valid" chip.
- If the URL fails (404, CORS, timeout), the preview shows the emoji fallback and a red "Couldn't load" chip. The Admin can still save the URL — the storefront will fall back to the emoji if the URL ever breaks.
- The URL is trimmed and lowercased for the scheme check: only `http://` and `https://` are accepted. `javascript:` and `data:` are rejected with a toast.
- A short hint below the input: *"Paste a direct link to a PNG, JPG, WebP or SVG file."*

### Save & Apply
Clicking Save brand commits the current mode + value:
```js
config.logoMode  = 'emoji' | 'image' | 'url';
config.logoEmoji = '🎂';                 // always kept as fallback
config.logoImage = 'data:image/png;...'  // when mode === 'image'
config.logoUrl   = 'https://...'          // when mode === 'url'
```

`applyConfig()` / `renderBranding()` then decides what to render:
```js
function resolveLogoSrc(){
  if (config.logoMode === 'image' && config.logoImage) return config.logoImage;
  if (config.logoMode === 'url'   && config.logoUrl)   return config.logoUrl;
  return null; // fall back to emoji
}
```

Every `[data-logo]` element is re-rendered:
- If a resolved source exists: `<img src="..." alt="">` inside the circle.
- Otherwise: the emoji as text.

The logo appears in four places, all using the same resolver:
1. Header logo (`.logo__mark`)
2. Mobile nav logo (if shown)
3. Footer logo
4. Favicon

### Favicon
The browser tab icon is generated dynamically:
- **Emoji mode** → generate an SVG favicon with the emoji centered on a berry background, converted to a data URL and injected into `<link rel="icon">`.
- **Image mode** → use the same base64 data URL as the favicon.
- **URL mode** → use the URL directly as the favicon href.

```js
function updateFavicon(){
  const src = resolveLogoSrc();
  const link = document.querySelector('link[rel="icon"]') || document.createElement('link');
  link.rel = 'icon';
  if (src){
    link.href = src;
  } else {
    const emoji = config.logoEmoji || '🎂';
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <rect width="64" height="64" rx="14" fill="#8E3B4A"/>
      <text x="32" y="42" font-size="40" text-anchor="middle">${emoji}</text>
    </svg>`;
    link.href = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  }
  document.head.appendChild(link);
}
```
Called on boot and after every brand save.

### Removal
A "Remove logo" button appears below the preview whenever the active mode is image or url:
- Clicking it clears `config.logoImage` / `config.logoUrl` and switches the mode back to `emoji`.
- The Admin still has to click Save brand to persist.
- A toast confirms: *"Logo removed — using emoji."*

### Validation Rules
| Rule | Behavior |
| --- | --- |
| Upload > 5 MB | Reject with `prodPhotoTooLarge`-style toast: "Image too large." |
| Upload non-image | Reject: "That file isn't an image." |
| Upload output > 150 KB after processing | Reject: "Couldn't compress this logo. Try a simpler image." |
| URL doesn't start with http(s):// | Reject on save with inline error |
| URL contains javascript: | Reject silently, show hint |
| Empty emoji on save | Fall back to 🎂, note in UI |
| Corrupt data URL in logoImage on load | Silently fall back to emoji on render |

### Storefront Reactions
The logo change must be visible everywhere within 250ms of clicking Save:
| Location | Reaction |
| --- | --- |
| Header logo tile | Fades between old and new over 200ms |
| Footer logo tile | Updates in sync with header |
| Favicon | Swaps instantly, browser tab updates |
| Panel preview | Already up to date |

### Persistence
Extends config:
```js
logoMode: 'emoji',           // 'emoji' | 'image' | 'url'
logoEmoji: '🎂',
logoImage: '',               // base64 data URL when mode === 'image'
logoUrl: '',                 // http(s) URL when mode === 'url'
```
Stored under the existing `sc_config_v2` key with seamless migration for legacy configs:
```js
if (!config.logoMode){
  config.logoMode = config.logoImage ? 'image' : 'emoji';
  config.logoUrl  = config.logoUrl  || '';
}
```

### Responsive Behavior
| Breakpoint | Behavior |
| --- | --- |
| Desktop ≥ 1100px | Preview and controls sit side-by-side in a two-column card |
| Tablet 760–1099px | Preview above, controls below, full width |
| Mobile ≤ 759px | Preview centered, 96×96px, controls full width, mode switcher stretches edge-to-edge |
The file input, mode switcher, and remove button all have minimum 44px tap targets on mobile.


