import { test, expect } from '@playwright/test';

const URL = 'https://www.swifttranslator.com/';

async function verifyNegativeInput(page, inputText) {
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.',
  });

  await singlishInput.fill(inputText);
  await page.waitForTimeout(1000);

  // App should remain stable and accept input
  await expect(singlishInput).toHaveValue(inputText);
}

test('Neg_Fun_0001 - Empty input', async ({ page }) => {
  await page.goto(URL);
  await verifyNegativeInput(page, '');
});

test('Neg_Fun_0002 - Only spaces', async ({ page }) => {
  await page.goto(URL);
  await verifyNegativeInput(page, '     ');
});

test('Neg_Fun_0003 - Numbers only', async ({ page }) => {
  await page.goto(URL);
  await verifyNegativeInput(page, '123456789');
});

test('Neg_Fun_0004 - Special characters', async ({ page }) => {
  await page.goto(URL);
  await verifyNegativeInput(page, '!@#$%^&*()');
});

test('Neg_Fun_0005 - Mixed symbols and text', async ({ page }) => {
  await page.goto(URL);
  await verifyNegativeInput(page, 'mama@@@###');
});

test('Neg_Fun_0006 - Very long input text', async ({ page }) => {
  await page.goto(URL);
  await verifyNegativeInput(page, 'mama gedhara yanavaa '.repeat(20));
});

test('Neg_Fun_0007 - Repeated words', async ({ page }) => {
  await page.goto(URL);
  await verifyNegativeInput(page, 'mama mama mama mama mama');
});

test('Neg_Fun_0008 - Line breaks in input', async ({ page }) => {
  await page.goto(URL);
  await verifyNegativeInput(page, 'mama gedhara\nyanavaa');
});

test('Neg_Fun_0009 - Mixed uppercase and lowercase', async ({ page }) => {
  await page.goto(URL);
  await verifyNegativeInput(page, 'MaMa GeDhArA YaNaVaA');
});

test('Neg_Fun_0010 - Emojis in input', async ({ page }) => {
  await page.goto(URL);
  await verifyNegativeInput(page, 'mama 😀 gedhara');
});
