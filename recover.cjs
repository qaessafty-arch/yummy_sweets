const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const scriptStart = html.lastIndexOf('<script>') + '<script>\n'.length;
const scriptEnd = html.lastIndexOf('  </script>');
const appCode = html.substring(scriptStart, scriptEnd);
fs.writeFileSync('builder/app.js', appCode);
console.log('Recovered builder/app.js, size:', appCode.length);
