import fs from 'fs';
import path from 'path';

const head = fs.readFileSync('builder/head.html', 'utf8');
const styles = fs.readFileSync('builder/styles.css', 'utf8');
const body = fs.readFileSync('builder/body.html', 'utf8');
const app = fs.readFileSync('builder/app.js', 'utf8');

const finalHtml = `${head}
  <style>
${styles}
  </style>
</head>
<body>
${body}

  <script>
${app}
  </script>
</body>
</html>
`;

fs.writeFileSync('index.html', finalHtml, 'utf8');
console.log('Successfully generated self-contained index.html (Bytes: ' + Buffer.byteLength(finalHtml) + ')');
