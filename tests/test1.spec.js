const { test, expect } = require('@playwright/test');


test.only("test1", async ({page})=>{

await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

const tit = await page.title()

await expect(tit).toContain("Practice Page")



})


test("test2", async ({page})=>{

    await page.goto('https://vibe.forem.com/about')
    
    
    })

    