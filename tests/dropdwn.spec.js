const { test, expect } = require('@playwright/test');

test('dropdwn', async ({page})=>{


    await page.goto('https://practice.expandtesting.com/dropdown')

    await page.setViewportSize({ width: 1920, height: 1080 }); 

    await page.locator('#dropdown').selectOption('Option 2')

    await page.waitForTimeout(4000);
})