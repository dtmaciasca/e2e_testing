const timeout = 10000;
 jest.setTimeout(30000);
beforeAll(async () => {
    await page.goto('https://angular-6-registration-login-example.stackblitz.io/register', { waitUntil: "networkidle2" });
    await page.waitForNavigation({ waitUntil: 'networkidle2' });
    await page.waitForSelector("[formcontrolname='firstName']");
    await page.type("[formcontrolname='firstName']", "La vaca");
    await page.type("[formcontrolname='lastName']", "Lola");
    await page.type("[formcontrolname='username']", "tienecachos");
    await page.type("[formcontrolname='password']", "ytienecola");
    await page.click('[class="btn btn-primary"]')

});
describe('Angular Register', () => {
    test("Header of the page", async () => {
        const h2Handle = await page.$("h2");
        const html = await page.evaluate(h2Handle => h2Handle.innerHTML, h2Handle);
        expect(html).toBe("Register");
    }, timeout);    
  });