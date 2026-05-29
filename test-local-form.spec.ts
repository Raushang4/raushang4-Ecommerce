import { test, expect } from '@playwright/test';

test('Contact form submits successfully via Server Action', async ({ page }) => {
  await page.goto('http://localhost:3000/contact');

  await page.fill('input[name="name"]', 'Playwright Test');
  await page.fill('input[name="email"]', 'playwright-test@example.com');
  await page.fill('input[name="phone"]', '9304995677');

  const businessTypeSelect = page.locator('select[name="business_type"]');
  if (await businessTypeSelect.isVisible()) {
    await businessTypeSelect.selectOption({ index: 1 });
  }

  await page.fill('textarea[name="message"]', 'This is an automated test via Playwright to verify the Google Sheets Server Action integration.');

  const submitButton = page.locator('button[type="submit"]');
  await submitButton.click();

  const successMessage = page.locator('text=Message sent successfully!').or(page.locator('text=Your message has been saved successfully!'));

  await expect(successMessage).toBeVisible({ timeout: 15000 });
});
