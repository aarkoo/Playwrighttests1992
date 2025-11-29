const { test, expect } = require('@playwright/test');

test('check', async({page})=>{

    await page.goto("https://formstone.dev/components/checkbox/")

    const check = page.locator("//*[@id='checkbox-3']")


    if(await check.isChecked())
    {
        console.log("already checked")
        await page.waitForTimeout(3500)
    }


    
})