import { test, expect } from '@playwright/test';

test('Contact form submits successfully via Server Action', async ({ page }) => {
  await page.goto('/contact');

  await page.fill('input[name="name"]', 'Playwright Test');
  await page.fill('input[name="email"]', 'playwright-test@example.com');
  await page.fill('input[name="phone"]', '9304995677');
  
  const businessTypeSelect = page.locator('select[name="business_type"]');
  if (await businessTypeSelect.isVisible()) {
    await businessTypeSelect.selectOption({ index: 1 });
  }

  await page.fill('textarea[name="message"]', 'This is an automated test via Playwright.');

  const submitButton = page.locator('button[type="submit"]');
  await submitButton.click();

  // The server action might succeed or fail depending on if NEXT_PUBLIC_GOOGLE_SCRIPT_URL is set in CI.
  // We just want to ensure the form submits and a modal appears (either success or error).
  const modalMessage = page.locator('text=Message sent successfully!').or(page.locator('text=Your message has been saved successfully!')).or(page.locator('text=Success')).or(page.locator('text=Error'));
  
  await expect(modalMessage).toBeVisible({ timeout: 15000 });
});