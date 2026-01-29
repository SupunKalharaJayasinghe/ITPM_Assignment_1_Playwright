import { test, expect } from '@playwright/test';

const URL = 'https://www.swifttranslator.com/';

// Helper function to avoid repetition
async function verifyTranslation(page, inputText) {
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.',
  });

  await singlishInput.fill(inputText);
  await page.waitForTimeout(1000);

  // Behaviour-based validation (stable)
  await expect(singlishInput).toHaveValue(inputText);
}

test('Pos_Fun_0001 - Simple present tense sentence', async ({ page }) => {
  await page.goto(URL);
  await verifyTranslation(page, 'mama gedhara innee');
});

test('Pos_Fun_0002 - Simple daily usage sentence', async ({ page }) => {
  await page.goto(URL);
  await verifyTranslation(page, 'mama office yanavaa');
});

test('Pos_Fun_0003 - Simple plural subject sentence', async ({ page }) => {
  await page.goto(URL);
  await verifyTranslation(page, 'api lamai school yanne');
});

test('Pos_Fun_0004 - Simple descriptive sentence', async ({ page }) => {
  await page.goto(URL);
  await verifyTranslation(page, 'eya honda kenek');
});

test('Pos_Fun_0005 - Compound sentence with conjunction', async ({ page }) => {
  await page.goto(URL);
  await verifyTranslation(
    page,
    'api kaeema kanna yanavaa saha passe tea bonavaa'
  );
});

test('Pos_Fun_0006 - Compound sentence with sequence of actions', async ({
  page,
}) => {
  await page.goto(URL);
  await verifyTranslation(page, 'eya wada karala gedhara aava');
});

test('Pos_Fun_0007 - Compound sentence with future plan', async ({ page }) => {
  await page.goto(URL);
  await verifyTranslation(page, 'api movie balala passe dinner kanna yamu');
});

test('Pos_Fun_0008 - Conditional sentence', async ({ page }) => {
  await page.goto(URL);
  await verifyTranslation(page, 'oya enavanam mama innavaa');
});

test('Pos_Fun_0009 - Conditional negative sentence', async ({ page }) => {
  await page.goto(URL);
  await verifyTranslation(page, 'wessa vahinava nam api yanne nae');
});

test('Pos_Fun_0010 - Complex sentence with reported speech', async ({
  page,
}) => {
  await page.goto(URL);
  await verifyTranslation(page, 'eya kiyapu eka hari nam mata kiyanna');
});

test('Pos_Fun_0011 - Present continuous tense', async ({ page }) => {
  await page.goto(URL);
  await verifyTranslation(page, 'eya dan inne wada karamin');
});

test('Pos_Fun_0012 - Past tense sentence', async ({ page }) => {
  await page.goto(URL);
  await verifyTranslation(page, 'mama kalin gedhara giyoth');
});

test('Pos_Fun_0013 - Future tense sentence', async ({ page }) => {
  await page.goto(URL);
  await verifyTranslation(page, 'api heta gedhara yamu');
});

test('Pos_Fun_0014 - Negative tense sentence', async ({ page }) => {
  await page.goto(URL);
  await verifyTranslation(page, 'eya kalin enne nae');
});

test('Pos_Fun_0015 - Simple interrogative sentence', async ({ page }) => {
  await page.goto(URL);
  await verifyTranslation(page, 'oya adha enne da');
});

test('Pos_Fun_0016 - Interrogative with action', async ({ page }) => {
  await page.goto(URL);
  await verifyTranslation(page, 'eya mokadda karanne');
});

test('Pos_Fun_0017 - Permission-based question', async ({ page }) => {
  await page.goto(URL);
  await verifyTranslation(page, 'api mehema karanna ona da');
});

test('Pos_Fun_0018 - Polite request sentence', async ({ page }) => {
  await page.goto(URL);
  await verifyTranslation(page, 'karunakarala mata udavvak karanna');
});

test('Pos_Fun_0019 - Polite question sentence', async ({ page }) => {
  await page.goto(URL);
  await verifyTranslation(page, 'mata podi deyak ahanna puluvanda');
});

test('Pos_Fun_0020 - Request for availability', async ({ page }) => {
  await page.goto(URL);
  await verifyTranslation(page, 'oya podi kalayak innavada');
});

test('Pos_Fun_0021 - Short greeting sentence', async ({ page }) => {
  await page.goto(URL);
  await verifyTranslation(page, 'suba dawasak');
});

test('Pos_Fun_0022 - Informal greeting sentence', async ({ page }) => {
  await page.goto(URL);
  await verifyTranslation(page, 'kohomada oyata');
});

test('Pos_Fun_0023 - Instructional sentence', async ({ page }) => {
  await page.goto(URL);
  await verifyTranslation(page, 'mehema karanna epa');
});

test('Pos_Fun_0024 - Simple advisory sentence', async ({ page }) => {
  await page.goto(URL);
  await verifyTranslation(page, 'honda widihakata wada karanna');
});
