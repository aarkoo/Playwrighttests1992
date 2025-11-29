import { test, expect } from '@playwright/test';

test('input box', async ({page})=>{


    await page.goto('https://formsmarts.com/html-form-example')

    await page.locator(".btn.btn-alt-warning.btn-cta.btn-lg").click()

     await expect(await page.locator("//input[@id='fname']")).toBeVisible

    await page.fill("//input[@id='fname']","john")
 
    await page.locator("//input[@id='tou']").click()
    
    await page.waitForTimeout(4000);


})