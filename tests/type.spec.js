const { test, expect } = require('@playwright/test');

test('login',async({page})=>{


await page.goto('https://rahulshettyacademy.com/locatorspractice/')

await page.locator('#inputUsername').fill("akash1992")

await page.locator("//input[@placeholder='Password']").fill("admin123")

await page.locator("//input[@placeholder='Password']").click()

await page.locator("//button[normalize-space()='Sign In']").click()

await page.waitForTimeout(3000)

const text = await page.locator("//p[@class='error']").textContent()
console.log(text)



} )