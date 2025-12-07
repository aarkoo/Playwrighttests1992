const { test, expect } = require('@playwright/test');
const exp = require('constants');

test('extract all', async ({page})=>{

await  page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')

 const title= await page.title()

 console.log(title)

 await expect(page).toHaveTitle('GreenKart - veg and fruits kart')
  
const getall = await page.locator('h4.product-name').allTextContents()

const c1 =   getall.length

console.log(c1)


console.log(getall);


})