const { test, expect } = require('@playwright/test');

test('boot', async({page})=>{

await page.goto('https://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html#')

await page.locator("//button[@id='menu1']").click()

await page.waitForTimeout(4500)

const options =  await  page.$$("//ul[@role='menu']/li")

for(const opt of options)
{
    const checks = await opt.textContent()

    

})