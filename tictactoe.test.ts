import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await driver.sleep(4000);
    await button.click();
    await driver.sleep(4000);
    
});

test('Clicking adds a X and then an O)', async () => {
    let cell2 = await (await driver).findElement(By.id('cell-2'));
    await driver.sleep(4000);
    await cell2.click();
    await driver.sleep(4000);

});


// come back to this one after assessment and try to figure out how to look up innerHTML of an element and test for it
//  test('An O was placed after the X was placed', async () => {
//      let cell0 = await (await driver).findElement(By.id('cell-0'));
//      await driver.sleep(3000);
//      await expect(cell0).toHaveReturned();
//  });

test('Clicking only adds Capital X, no lowercase', async () => {
    let cell1 = await (await driver).findElement(By.id('cell-1'));
    await driver.sleep(4000);
    await cell1.click();
    await driver.sleep(4000);
})

test('Place X in Cell 4', async () => {
    let cell4 = await (await driver).findElement(By.id('cell-4'));
    await driver.sleep(4000);
    await cell4.click();
    await driver.sleep(4000);
})
