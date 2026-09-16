const fs = require('fs');
let css = fs.readFileSync('builder/styles.css', 'utf8');

const search = `  .cake-card__title {
    font-size: 0.95rem;
  }
  .cake-card__desc {
    font-size: 0.8rem;
  }
  .cake-card__emoji {
    font-size: 3rem;
  }
  .cake-card__footer {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
  .price-wrap .price {
    font-size: 1.1rem;
  }`;

const replace = `  .cake-card__title {
    font-size: 0.85rem;
    line-height: 1.25;
  }
  .cake-card__desc {
    font-size: 0.75rem;
    line-height: 1.4;
  }
  .cake-card__emoji {
    font-size: 2.25rem;
  }
  .cake-card__footer {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
  .price-wrap .price {
    font-size: 0.95rem;
  }
  .cake-card__footer .btn {
    font-size: 0.75rem;
    padding: 6px 10px;
  }`;

if (!css.includes(search)) {
  console.log("Could not find the target string!");
} else {
  css = css.replace(search, replace);
  fs.writeFileSync('builder/styles.css', css);
  console.log("Updated mobile font sizes!");
}
