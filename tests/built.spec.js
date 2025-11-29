const { test, expect } = require('@playwright/test');

test('built loc', async({page})=>{


    await page.goto('https://demoblaze.com')

   const check = await page.locator("li[class='nav-item active'] a[class='nav-link']").click();

  // await page.waitForSelector(check);


    await expect(check).toBevisible();

    await page.close();

})