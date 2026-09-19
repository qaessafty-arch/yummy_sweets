const fs = require('fs');
let body = fs.readFileSync('builder/body.html', 'utf8');

const target = `<span>&copy; <span id="copyrightYear">2026</span> <strong id="copyrightName">Yummy Sweets</strong>. <span data-i18n="copyrightAllRights">All rights reserved.</span></span>`;
const replacement = `<span>Developed with respect and love by null-tech (&copy; <span id="copyrightYear">2026</span> <strong id="copyrightName">Yummy Sweets</strong>. <span data-i18n="copyrightAllRights">All rights reserved.</span>)</span>`;

if (body.includes(target)) {
    body = body.replace(target, replacement);
    fs.writeFileSync('builder/body.html', body, 'utf8');
    console.log("Footer updated successfully.");
} else {
    console.log("Target string not found!");
}
