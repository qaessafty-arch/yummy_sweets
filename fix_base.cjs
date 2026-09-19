const fs = require('fs');
let lines = fs.readFileSync('builder/styles.css', 'utf8').split(/\r?\n/);
let css = lines.slice(0, 3636).join('\n'); // original base css (throw away appended user_css.css)

// Fix Root variables
css = css.replace(/--container-pad: 24px;/g, '--container-pad: max(5vw, 16px);');
css = css.replace(/--container-max: 1180px;/g, '--container-max: 1280px;');

// Fix typography (Make clamps smaller and more elegant)
css = css.replace(/clamp\(2\.6rem, 6\.2vw, 4\.6rem\)/g, 'clamp(2rem, 5vw, 3.5rem)'); // hero__title
css = css.replace(/clamp\(1\.9rem, 4\.4vw, 3\.2rem\)/g, 'clamp(1.5rem, 3.5vw, 2.5rem)'); // section__title
css = css.replace(/clamp\(1\.05rem, 1\.4vw, 1\.2rem\)/g, 'clamp(1rem, 1.2vw, 1.15rem)'); // card__title

// Fix section padding
css = css.replace(/padding-block: clamp\(72px, 10vw, 128px\)/g, 'padding-block: clamp(48px, 8vw, 96px)');

// Fix hero
css = css.replace(/padding-top: clamp\(48px, 6vw, 84px\);/g, 'padding-top: clamp(64px, 8vw, 96px);');
css = css.replace(/padding-bottom: clamp\(64px, 8vw, 112px\);/g, 'padding-bottom: clamp(64px, 8vw, 96px);');
css = css.replace(/grid-template-columns: 1\.15fr 0\.85fr;/g, 'grid-template-columns: 1.2fr 0.8fr;');
css = css.replace(/aspect-ratio: 4 \/ 4\.4;/g, 'aspect-ratio: 1 / 1;');

// Fix button padding and min-height
css = css.replace(/min-height: 46px/g, 'min-height: 42px'); // global replace

// Write back to builder/styles.css and then run assemble
fs.writeFileSync('builder/styles.css', css, 'utf8');
console.log("Fixed base CSS");
