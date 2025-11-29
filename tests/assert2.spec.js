import { test, expect } from '@playwright/test';

test('assert2', async ({page})=>{

 await  page.goto('https://designsystem.digital.gov/components/radio-buttons/')

 const btn = await page.locator("label[for='historical-douglass']");

 await btn.click()

 await expect(btn).toBeChecked();

 

})