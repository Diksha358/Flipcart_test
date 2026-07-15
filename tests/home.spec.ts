import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/home';

test.describe('Home Page Tests', () => {

    test('Verify laptop search', async ({ page }) => {

        const homePage = new HomePage(page);

        await page.goto('https://www.flipkart.com/');
        await homePage.searchInput.click();
        await homePage.searchInput.fill('laptop');
        await homePage.searchInput.press('Enter');

        await expect(page).toHaveURL('https://www.flipkart.com/search?q=laptop&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off');
    });

});