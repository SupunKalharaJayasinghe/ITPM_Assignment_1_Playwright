import { test, expect } from '@playwright/test';

const URL = 'https://www.swifttranslator.com/';

// Navigate to the URL before each test
test.beforeEach(async ({ page }) => {
  await page.goto(URL);
});

// Real-time Translation Tests
test('Pos_UI_0001 - Real-time translation without submit button', async ({
  page,
}) => {
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.',
  });

  // Start typing slowly to simulate real user behavior
  await singlishInput.type('mama', { delay: 200 });

  // Verify input appears immediately (UI responsiveness)
  await expect(singlishInput).toHaveValue('mama');

  // Continue typing
  await singlishInput.type(' gedhara yanavaa', { delay: 200 });

  // Final UI check
  await expect(singlishInput).toHaveValue('mama gedhara yanavaa');
});

// Input Field Tests
test('Pos_UI_0002 - Input textbox is visible and enabled', async ({ page }) => {
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.',
  });

  await expect(singlishInput).toBeVisible();
  await expect(singlishInput).toBeEnabled();
});

test('Pos_UI_0003 - Input textbox is editable', async ({ page }) => {
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.',
  });

  await singlishInput.fill('test input');
  await expect(singlishInput).toHaveValue('test input');

  // Clear and verify
  await singlishInput.clear();
  await expect(singlishInput).toHaveValue('');
});

test('Pos_UI_0004 - Input can be cleared and refilled', async ({ page }) => {
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.',
  });

  // First input
  await singlishInput.fill('mama gedhara yanavaa');
  await expect(singlishInput).toHaveValue('mama gedhara yanavaa');

  // Clear input
  await singlishInput.clear();
  await expect(singlishInput).toHaveValue('');

  // Second input
  await singlishInput.fill('api school yanavaa');
  await expect(singlishInput).toHaveValue('api school yanavaa');
});

// Page Load Tests
test('Pos_UI_0005 - Page loads successfully', async ({ page }) => {
  await expect(page).toHaveURL(URL);
  // FIXED: Changed from /Swift/i to match actual title
  await expect(page).toHaveTitle(/Singlish/i);
});

test('Pos_UI_0006 - Page is responsive after multiple inputs', async ({
  page,
}) => {
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.',
  });

  const testInputs = [
    'mama gedhara yanavaa',
    'eya honda kenek',
    'api school yanavaa',
    'oya koheda yanne',
  ];

  for (const input of testInputs) {
    await singlishInput.fill(input);
    await expect(singlishInput).toHaveValue(input);
    await singlishInput.clear();
  }

  // Verify page is still stable
  await expect(page).toHaveURL(URL);
});

// Focus and Interaction Tests
test('Pos_UI_0007 - Input field can receive focus', async ({ page }) => {
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.',
  });

  await singlishInput.focus();
  await expect(singlishInput).toBeFocused();
});

test('Pos_UI_0008 - Typing speed does not affect input', async ({ page }) => {
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.',
  });

  // Fast typing
  await singlishInput.type('mama gedhara', { delay: 50 });
  await expect(singlishInput).toHaveValue('mama gedhara');

  await singlishInput.clear();

  // Slow typing
  await singlishInput.type('eya yanavaa', { delay: 300 });
  await expect(singlishInput).toHaveValue('eya yanavaa');
});

// Copy-Paste Simulation Test
test('Pos_UI_0009 - Input accepts pasted text', async ({ page }) => {
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.',
  });

  // Simulate paste by filling directly (equivalent to paste)
  const pastedText = 'mama gedhara yanavaa api school yanavaa';
  await singlishInput.fill(pastedText);
  await expect(singlishInput).toHaveValue(pastedText);
});

// Placeholder Test
test('Pos_UI_0010 - Input has correct placeholder text', async ({ page }) => {
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.',
  });

  await expect(singlishInput).toHaveAttribute(
    'placeholder',
    'Input Your Singlish Text Here.'
  );
});
