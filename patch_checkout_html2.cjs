const fs = require('fs');
let html = fs.readFileSync('builder/body.html', 'utf8');

html = html.replace('required oninput="app.updateCheckoutState()" />', 'required />');

fs.writeFileSync('builder/body.html', html);
console.log("Removed missing method from input");
