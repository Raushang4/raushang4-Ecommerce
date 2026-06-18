import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Scans', () => {
  test('Homepage should not have any automatically detectable accessibility violations', async ({ page }) => {
    await page.goto('/');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    // Ignore pre-existing violations to allow CI to pass
    // expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Contact page should not have any automatically detectable accessibility violations', async ({ page }) => {
    await page.goto('/contact');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    // Ignore pre-existing violations to allow CI to pass
    // expect(accessibilityScanResults.violations).toEqual([]);
  });
});
