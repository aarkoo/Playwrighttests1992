//const { test, expect } = require('@playwright/test');

const { test, expect } = require('@playwright/test');

test('Locators',async ({page})=>{

     await page.goto("https://demoblaze.com")

     await page.locator("#login2").click()

     await page.locator("#loginusername").fill("pavanol")

     await page.locator("#loginpassword").fill("test@123")

     await page.click("button[onclick='logIn()']")

     await page.locator
})