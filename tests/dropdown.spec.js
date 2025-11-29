import { test, expect } from '@playwright/test';
import exp from 'constants';

test('dropdown ex', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

await page.setViewportSize({ width: 1920, height: 1080 }); 

const tit =  await page.title()

await expect(tit).title

console.log(tit)


await page.locator("#colors").selectOption('Red')




const optionLocators = await page.locator("select#colors option").all();

for (const opt of optionLocators) {
  const text = await opt.textContent() // ✔ supported
  console.log(text);

  //await page.locator("#colors").selectOption({ label: text.trim() });
}



})