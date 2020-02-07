const timeout = 10000;
 jest.setTimeout(30000);
beforeAll(async () => {
    await page.goto('https://angular-6-registration-login-example.stackblitz.io/register', { waitUntil: "networkidle2" });
    await page.waitForNavigation({ waitUntil: 'networkidle2' });
    await page.waitForSelector("[formcontrolname='firstName']");
    await page.type("[formcontrolname='firstName']", "Hola");
    await page.type("[formcontrolname='lastName']", "Pola");
    await page.type("[formcontrolname='username']", "polis");
    await page.type("[formcontrolname='password']", "holapola");
    await page.click('[class="btn btn-primary"]');
    await page.waitForNavigation({ waitUntil: 'networkidle2' });
    await page.type("[formcontrolname='username']", "polis");
    await page.type("[formcontrolname='password']", "holapola");
    await page.click('[class="btn btn-primary"]');
    await page.waitForNavigation({ waitUntil: 'networkidle2' });

});
describe('Angular Login', () => {
    test("Header of the page", async () => {
        const h1Handle = await page.$("h1");
        const html = await page.evaluate(h1Handle => h1Handle.innerHTML, h1Handle);
        expect(html).toContain("Hi");
    }, timeout);    
  });