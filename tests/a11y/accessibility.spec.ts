import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Scans', () => {
  test('Homepage should not have any automatically detectable accessibility violations', async ({ page }) => {
    await page.goto('/');

    const accessibilityScanResults = await new AxeBuilder({ page })
        .disableRules(['region', 'color-contrast', 'landmark-one-main', 'aria-allowed-role', 'aria-prohibited-attr'])
        .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Contact page should not have any automatically detectable accessibility violations', async ({ page }) => {
    await page.goto('/contact');

    const accessibilityScanResults = await new AxeBuilder({ page })
        .disableRules(['region', 'color-contrast', 'landmark-one-main', 'aria-allowed-role', 'aria-prohibited-attr'])
        .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
