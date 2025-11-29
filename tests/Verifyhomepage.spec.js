const { test, expect } = require('@playwright/test');

test('Home Page', async ({ page }) => {
  await page.goto('https://demoblaze.com/');

  const tit = await page.title();
  console.log(tit);

  await expect(page).toHaveTitle('STORE');

  await page.close();
});
