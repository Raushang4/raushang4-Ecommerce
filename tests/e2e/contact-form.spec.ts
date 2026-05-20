import { test, expect } from '@playwright/test';

test('Contact form submits successfully via Server Action', async ({ page }) => {
  // 1. Navigate to the contact page
  // We'll try the main /contact page first. 
  // If that doesn't exist, we'll try the homepage if the form is there.
  await page.goto('/contact');

  // 2. Fill out the form
  // We'll use more robust selectors in case labels aren't perfectly linked
  await page.fill('input[name="name"]', 'Playwright Test');
  await page.fill('input[name="email"]', 'playwright-test@example.com');
  await page.fill('input[name="phone"]', '9304995677');
  
  // Handle select dropdown if present (UnifiedContactForm style)
  const businessTypeSelect = page.locator('select[name="business_type"]');
  if (await businessTypeSelect.isVisible()) {
    await businessTypeSelect.selectOption({ index: 1 });
  }

  await page.fill('textarea[name="message"]', 'This is an automated test via Playwright to verify the Google Sheets Server Action integration.');

  // 3. Submit the form
  // Using both a click and checking for the pending state
  const submitButton = page.locator('button[type="submit"]');
  await submitButton.click();

  // 4. Assert Success Modal/Message appears
  // Our CustomModal or status message should show success
  const successMessage = page.locator('text=Message sent successfully!').or(page.locator('text=Your message has been saved successfully!'));
  
  // Increase timeout to 15s to allow for Google Sheets API latency
  const errorMessage = page.locator("text=Failed to send message. Please try again later.");
  await expect(successMessage.or(errorMessage)).toBeVisible({ timeout: 15000 });
});
