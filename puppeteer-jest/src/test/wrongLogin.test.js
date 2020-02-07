const timeout = 10000;
 jest.setTimeout(30000);
beforeAll(async () => {
    await page.goto('https://angular-6-registration-login-example.stackblitz.io/login', { waitUntil: "networkidle2" });
    await page.waitForNavigation({ waitUntil: 'networkidle2' });
    await page.waitForSelector("[formcontrolname='username']");
    await page.type("[formcontrolname='username']", "polis");
    await page.type("[formcontrolname='password']", "holapola12");
    await page.click('[class="btn btn-primary"]');

});
describe('Angular Login', () => {
    test("Header of the page", async () => {
        const h2Handle = await page.$("h2");
        const html = await page.evaluate(h2Handle => h2Handle.innerHTML, h2Handle);
        expect(html).toBe("Login");
    }, timeout);    
  });