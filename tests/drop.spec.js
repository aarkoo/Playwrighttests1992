const { test, expect } = require('@playwright/test');

test('dropdwn', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

const sel = await page.locator("//select[@id='dropdown-class-example']")

await sel.selectOption('Option2')

await page.waitForTimeout(4000)

await page.locator("input[value='radio1']").check()

await page.waitForTimeout(3000)

const checked = await page.locator("input[value='radio1']").isChecked()

console.log(checked)



});
