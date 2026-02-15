// tests/Text Box.spec.js
import { test, expect } from '@playwright/test';

test.describe('Sign In Elements Tests', () => {

  test('Should login successfully with valid credentials', async ({ page }) => {

    // Navigate to the Medicare Web Client login page
    await page.goto('http://115.127.218.89:8787/medicare-web-client-v2/#/login');
    await page.waitForTimeout(2000);

    // Wait for the DOM to be fully loaded to ensure elements are ready
    await page.waitForLoadState('domcontentloaded');

    // Fill the username field using the formcontrolname attribute
    await page.fill("input[formcontrolname='userName']", 'SQA2');
    await page.waitForTimeout(2000);

    // Fill the password field using the formcontrolname attribute
    await page.fill("input[formcontrolname='password']", '123456');
    await page.waitForTimeout(2000);

    // Click the submit button to initiate login
    await page.click("button[type='submit']");
    await page.waitForTimeout(2000);

    // Wait for network requests to finish (useful for single-page applications)
    await page.waitForLoadState('networkidle');

    // Verification: Check if the URL changed or a specific dashboard element is visible
    // This ensures the test actually passed instead of just clicking a button
    await expect(page).not.toHaveURL(/.*login/);
    
    console.log('Login attempt completed.');
  });

});