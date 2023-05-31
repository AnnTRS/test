const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {

  await page.goto('https://utility2.intrahealth.com/1003/hcare/#/login');

  await page.getByRole('textbox').first().fill('USER');

  await page.locator('input[type="password"]').click();

  await page.locator('input[type="password"]').fill('MASTER');

  const locator = page.getByText('Log In');

  await expect(locator).toBeEnabled();

});