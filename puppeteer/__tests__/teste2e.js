const puppeteer = require('puppeteer');


/*(async () => {
  const browser = await puppeteer.launch({
      headless:false
  });
  const page = await browser.newPage();
  await page.goto('https://angular-6-registration-login-example.stackblitz.io/register');
  
  await page.waitForSelector("[formcontrolname='firstName']");
  await page.type("[formcontrolname='firstName']", "La vaca");
  await page.type("[formcontrolname='lastName']", "Lola");
  await page.type("[formcontrolname='username']", "tienecachos");
  await page.type("[formcontrolname='password']", "ytienecola");
  await page.click('[class="btn btn-primary"]')
  //await browser.close();
})();*/


describe('Google', () => {
  const page;
    beforeAll(async () => {
      const browser = await puppeteer.launch({
        headless:false
    });
      page = await browser.newPage();
      await page.goto('https://google.com');
    });
  
    it('should be titled "Google"', async () => {
      await expect(page.title()).resolves.toMatch('Google');
    });
  });
