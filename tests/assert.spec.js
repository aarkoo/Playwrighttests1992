import { test, expect } from '@playwright/test';

test('asserttest1', async ({ page }) => {

    await page.goto('https://www.npmjs.com/signup')

    await expect(page).toHaveURL('https://www.npmjs.com/signup')

    await expect(page).toHaveTitle('npm | Sign Up');

    const c = await page.locator(".aa630ec5.f3.fw6.pb3.pt0.mt0.mb3.black-70.b--black-10.bb")

    await expect(c).toBeVisible();

    

    const ele = await page.locator("._6126477b.db.center.tc.mt3.mb2.f5.fw6.hover-black-80undefined")

    await expect(ele).toBeEnabled();



})