import { test, expect } from '@playwright/test';

test('keyboard', async({page})=>{

await  page.goto('https://gotranscript.com/register')

 await page.type("input[placeholder='Enter first name']","akash")

 await page.waitForTimeout(7000)

})