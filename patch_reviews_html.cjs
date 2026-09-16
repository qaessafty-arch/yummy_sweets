const fs = require('fs');
let html = fs.readFileSync('builder/body.html', 'utf8');

const regex = /<div class="reviews-grid">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;
const newHtml = `<div class="reviews-grid" id="reviewsGrid">
          <!-- Dynamically injected by renderReviews() -->
        </div>
      </div>
    </section>`;

if (html.match(regex)) {
  html = html.replace(regex, newHtml);
  fs.writeFileSync('builder/body.html', html);
  console.log("Patched body.html");
} else {
  console.log("Regex not found in body.html");
}
