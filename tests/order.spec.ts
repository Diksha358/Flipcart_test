import{test} from '@playwright/test';

test('Order Placement', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');
    await page.getByRole('button', { name: 'Login' }).click();
  // Test implementation
});