const { test, expect } = require('@playwright/test');

test('mousehover', async ({page})=>{

await page.goto('https://www.demoopencart.in/themes/salestore/oc3/')

const a = await page.locator("//a[@title='My Account']")

await a.dblclick();

await page.waitForTimeout(4500);

})