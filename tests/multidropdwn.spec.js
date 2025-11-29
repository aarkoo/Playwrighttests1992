const { test, expect } = require('@playwright/test');

test('test', async({page})=>{

 await page.goto('https://testautomationpractice.blogspot.com/')

 const options =    await page.locator('#colors option')

 await expect(options).toHaveCount(5)


})