import { test, expect } from '@playwright/test';

const URL = 'https://www.swifttranslator.com/';

// Navigate to the URL before each test
test.beforeEach(async ({ page }) => {
  await page.goto(URL);
});

// Helper function to verify negative input handling
async function verifyNegativeInput(page, inputText) {
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.',
  });

  await singlishInput.fill(inputText);

  // App should remain stable and accept input without crashing
  await expect(singlishInput).toHaveValue(inputText, { timeout: 2000 });

  // Verify page didn't crash or redirect
  await expect(page).toHaveURL(URL);
}

// Empty and Whitespace Inputs
test('Neg_Fun_0001 - Empty input', async ({ page }) => {
  await verifyNegativeInput(page, '');
});

test('Neg_Fun_0002 - Only spaces', async ({ page }) => {
  await verifyNegativeInput(page, '     ');
});

// Numeric Inputs
test('Neg_Fun_0003 - Numbers only', async ({ page }) => {
  await verifyNegativeInput(page, '123456789');
});

// Special Characters
test('Neg_Fun_0004 - Special characters', async ({ page }) => {
  await verifyNegativeInput(page, '!@#$%^&*()');
});

test('Neg_Fun_0005 - Mixed symbols and text', async ({ page }) => {
  await verifyNegativeInput(page, 'mama@@@###');
});

// Stress Testing Inputs
test('Neg_Fun_0006 - Very long input text', async ({ page }) => {
  const longText = 'mama gedhara yanavaa '.repeat(20);
  await verifyNegativeInput(page, longText);
});

test('Neg_Fun_0007 - Repeated words', async ({ page }) => {
  await verifyNegativeInput(page, 'mama mama mama mama mama');
});

// Formatting Edge Cases
test('Neg_Fun_0008 - Line breaks in input', async ({ page }) => {
  await verifyNegativeInput(page, 'mama gedhara\nyanavaa');
});

test('Neg_Fun_0009 - Mixed uppercase and lowercase', async ({ page }) => {
  await verifyNegativeInput(page, 'MaMa GeDhArA YaNaVaA');
});

// Unicode and Emoji Inputs
test('Neg_Fun_0010 - Emojis in input', async ({ page }) => {
  await verifyNegativeInput(page, 'mama 😀 gedhara');
});

// Additional Edge Cases
test('Neg_Fun_0011 - Tab characters in input', async ({ page }) => {
  await verifyNegativeInput(page, 'mama\tgedhara\tyanavaa');
});

test('Neg_Fun_0012 - Leading and trailing spaces', async ({ page }) => {
  await verifyNegativeInput(page, '   mama gedhara yanavaa   ');
});

test('Neg_Fun_0013 - HTML tags in input', async ({ page }) => {
  await verifyNegativeInput(page, '<script>alert("test")</script>');
});

test('Neg_Fun_0014 - SQL injection attempt', async ({ page }) => {
  await verifyNegativeInput(page, "'; DROP TABLE users; --");
});

test('Neg_Fun_0015 - Unicode special characters', async ({ page }) => {
  await verifyNegativeInput(page, 'mama → gedhara ← yanavaa');
});
