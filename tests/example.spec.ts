import { test, expect } from '@playwright/test';

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.locator('text=Get Started');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('verify my portfolio has my name',async({page})=>{
  await page.goto('https://deepak-portfolio-889a8.firebaseapp.com');

  const titlt = page.locator('text=Deepak Raj Bhetwal');

  await expect(titlt).toBeVisible;

  await page.locator('//a[text()="Know more"]').click();

  const aboutMe = page.locator('text=ABOUT ME');
  await expect(aboutMe).toBeVisible;

});

test('verify my next js blog site works properly',async({page})=>{
  await page.goto('https://razz99.github.io/my-blog/');

  const titlt = page.locator('text=Deepak');

  await expect(titlt).toBeVisible;

  await page.locator('//a[text()="Second blog post title"]').click();

  const date = page.locator('//time[text()="January 2, 2022"]');
  await expect(date).toBeVisible;

});

