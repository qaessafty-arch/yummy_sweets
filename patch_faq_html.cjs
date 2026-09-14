const fs = require('fs');
let html = fs.readFileSync('builder/body.html', 'utf8');

const oldHtml = `<div class="faq-wrap">
          <details class="faq-item">`;
const newHtml = `<div class="faq-wrap" id="faqWrap">
          <details class="faq-item">`;

html = html.replace(oldHtml, newHtml);

fs.writeFileSync('builder/body.html', html);
console.log("Patched body.html");
