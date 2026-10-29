const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function testIndex() {
  const options = new chrome.Options();
  options.addArguments('--headless', '--no-sandbox', '--disable-dev-shm-usage');

  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    await driver.get('http://localhost:3000/index');
    const h1 = await driver.wait(until.elementLocated(By.css('h1')), 5000);
    const texto = await h1.getText();
    expect(texto).toBe('Olá, DevOps!');
  } finally {
    await driver.quit();
  }
}

test('Pagina index mostra a saudacao', async () => {
  await testIndex();
}, 30000);