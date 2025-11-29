const { test, expect } = require('@playwright/test');

test('locate', async({page})=>{

await page.goto("https://demoblaze.com/index.html")

const links =await page.$$('a');

for(const link of links)
{

    const text= await link.textContent();

    console.log(text)
}

})