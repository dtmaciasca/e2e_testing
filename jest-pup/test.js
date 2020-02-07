/*describe('Angular Login fail', () => {
    beforeAll(async () => {
      await page.goto('https://angular-6-registration-login-example.stackblitz.io/login', {
		waitUntil: 'networkidle2'
	});
      await page.waitForSelector("[formcontrolname='username']");
      await page.type("[formcontrolname='username']", "tienecachos");
      await page.type("[formcontrolname='password']", "ytienecola");
      await page.click('[class="btn btn-primary"]')
    });
  
    it('Angular bebe :3 no te logeaste', async () => {
      await expect(page.title()).resolves.toMatch('Angular 6 User Registration and Login Example');
      let text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('Login');
    });
  });*/

describe('Angular Register', () => {
    beforeAll(async () => {
      await page.goto('https://angular-6-registration-login-example.stackblitz.io/register', {
		waitUntil: 'networkidle2'
	});
      await page.waitForSelector("[formcontrolname='firstName']");
      await page.type("[formcontrolname='firstName']", "La vaca");
      await page.type("[formcontrolname='lastName']", "Lola");
      await page.type("[formcontrolname='username']", "tienecachos");
      await page.type("[formcontrolname='password']", "ytienecola");
      await page.click('[class="btn btn-primary"]')
    });
  
    it('Angular bebe :3 ya te registraste', async () => {
      //await expect(page.title()).resolves.toMatch('Angular 6 User Registration and Login Example');
      let text = await page.evaluate(() => document.body.children)
      console.log(text);
      expect(text).toContain('Hi Hola!'); });
  });

 /* describe('Angular Login success', () => {
    beforeAll(async () => {

      await page.goto('https://angular-6-registration-login-example.stackblitz.io/register', {
		waitUntil: 'networkidle2'
	});
      await page.waitForSelector("[formcontrolname='firstName']");
      await page.type("[formcontrolname='firstName']", "La vaca");
      await page.type("[formcontrolname='lastName']", "Lola");
      await page.type("[formcontrolname='username']", "tienecachos");
      await page.type("[formcontrolname='password']", "ytienecola");
      await page.click('[class="btn btn-primary"]')

      await page.waitForSelector("[formcontrolname='username']");
      await page.type("[formcontrolname='username']", "tienecachos");
      await page.type("[formcontrolname='password']", "ytienecola");
      await page.click('[class="btn btn-primary"]')
    });
  
    it('Angular bebe :3 ya te logeaste', async () => {
      let text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('Hi Hola!');
    });
  });
*/
  