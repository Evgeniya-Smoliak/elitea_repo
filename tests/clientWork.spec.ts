import { expect, test } from '@playwright/test';

test('EPAM Client Work page is visible from Services menu', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  const acceptAllButton = page.getByRole('button', { name: 'Accept All' });
  if (await acceptAllButton.isVisible().catch(() => false)) {
    await acceptAllButton.click();
  }

  await page.getByRole('button', { name: 'Services', exact: true }).hover();
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  await expect(page.getByText('Client Work', { exact: false })).toBeVisible();
});
