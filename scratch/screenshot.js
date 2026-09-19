import puppeteer from 'puppeteer';
import { exec } from 'child_process';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1368, height: 912 });
  
  const server = exec('python -m http.server 8080');
  await new Promise(r => setTimeout(r, 2000));
  
  await page.goto('http://localhost:8080/index.html');
  await page.evaluate(() => {
    app.session = { user: { role: 'admin' } };
    app.openPanelModal();
  });
  await new Promise(r => setTimeout(r, 500));
  
  await page.evaluate(() => {
    app.renderPanelTab('theme');
  });
  await new Promise(r => setTimeout(r, 500));
  
  await page.screenshot({ path: 'scratch/theme_panel.png' });
  
  server.kill();
  await browser.close();
})();
