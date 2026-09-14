const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const bodyPos = html.lastIndexOf('</body>');
const scriptEnd = html.lastIndexOf('  </script>', bodyPos);
const scriptStartStr = '  <script>\n';
// Find the <script> that corresponds to this scriptEnd
let currentPos = scriptEnd;
while(true) {
  let prevScript = html.lastIndexOf(scriptStartStr, currentPos - 1);
  if (prevScript === -1) {
    break; // shouldn't happen
  }
  // is this the start?
  // Actually, we can just split by "<body>" since the structure is <body>\n${body}\n  <script>\n${app}\n  </script>\n</body>\n</html>
  break;
}

const bodyStart = html.indexOf('<body>\n') + '<body>\n'.length;
// We know ${body} was read from builder/body.html
const originalBody = fs.readFileSync('builder/body.html', 'utf8');
const bodyPlusApp = html.substring(bodyStart);
// app starts after originalBody + '\n  <script>\n'
const appStart = originalBody.length + '\n  <script>\n'.length;
const appEnd = bodyPlusApp.lastIndexOf('\n  </script>\n</body>\n</html>');
const appCode = bodyPlusApp.substring(appStart, appEnd);

fs.writeFileSync('builder/app.js', appCode);
console.log('Recovered builder/app.js, size:', appCode.length);
