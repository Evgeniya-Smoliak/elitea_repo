import { expect, test } from '@playwright/test';

test('EPAM Client Work page is visible from Services menu', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.getByRole('link', { name: 'Services' }).hover();
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  await expect(page.getByText('Client Work', { exact: false })).toBeVisible();
});
