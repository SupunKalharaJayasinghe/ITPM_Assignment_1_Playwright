import { test, expect } from '@playwright/test';

test('Pos_UI_0001 - Real-time translation without submit button', async ({
  page,
}) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.',
  });

  // Start typing slowly
  await singlishInput.type('mama', { delay: 200 });

  // Verify input appears immediately (UI responsiveness)
  await expect(singlishInput).toHaveValue('mama');

  // Continue typing
  await singlishInput.type(' gedhara yanavaa', { delay: 200 });

  // Final UI check
  await expect(singlishInput).toHaveValue('mama gedhara yanavaa');
});
