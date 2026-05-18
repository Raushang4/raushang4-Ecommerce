import { test, expect } from '@playwright/test';

test('Homepage visual consistency', async ({ page }) => {
  await page.goto('/');
  // We use toHaveScreenshot to establish a baseline and verify consistency
  // Note: Screenshots can vary slightly by OS/environment
  await expect(page).toHaveScreenshot({ 
    fullPage: true,
    maxDiffPixelRatio: 0.1 
  });
});
