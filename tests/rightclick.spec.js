const { test, expect } = require('@playwright/test');

test('mousehover', async ({page})=>{

    await page.goto('https://www.demoopencart.in/themes/salestore/oc3/')
    
    const a = await page.locator("//a[normalize-space()='Desktops']")
    
    await a.click({a : 'right'});
    
    await page.waitForTimeout(4500);
    
    })


