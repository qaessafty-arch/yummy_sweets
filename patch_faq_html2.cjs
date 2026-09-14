const fs = require('fs');
let html = fs.readFileSync('builder/body.html', 'utf8');

const regex = /<div class="faq-wrap" id="faqWrap">[\s\S]*?<\/div>\s*<\/section>/;
const newHtml = `<div class="faq-wrap" id="faqWrap">
          <!-- Dynamically injected by renderFAQ() -->
        </div>
      </div>
    </section>`;

html = html.replace(regex, newHtml);
fs.writeFileSync('builder/body.html', html);
console.log("Cleared faqWrap contents.");
