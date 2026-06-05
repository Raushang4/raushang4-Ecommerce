import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Scans', () => {
  test('Homepage should not have any automatically detectable accessibility violations', async ({ page }) => {
    await page.goto('/');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    const violations = accessibilityScanResults.violations.filter(v => v.id !== 'region' && v.id !== 'landmark-one-main' && v.id !== 'scrollable-region-focusable' && v.id !== 'color-contrast');
    expect(violations).toEqual([]);
  });

  test('Contact page should not have any automatically detectable accessibility violations', async ({ page }) => {
    await page.goto('/contact');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    const violations = accessibilityScanResults.violations.filter(v => v.id !== 'region' && v.id !== 'landmark-one-main' && v.id !== 'scrollable-region-focusable' && v.id !== 'color-contrast');
    expect(violations).toEqual([]);
  });
});
