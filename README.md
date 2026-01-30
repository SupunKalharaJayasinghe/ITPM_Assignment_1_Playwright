# ITPM Assignment 1 – Playwright Automation Testing

## Overview

This repository contains **automated end-to-end test cases** developed using **Playwright** for the **Singlish to Sinhala translation** feature available at:

🔗 **Swift Translator** – [https://www.swifttranslator.com/](https://www.swifttranslator.com/)

The project focuses on validating application behavior using **black-box testing principles**, covering:

- ✅ Positive functional test cases
- ❌ Negative functional test cases
- 🖥️ UI behavior and responsiveness tests

All test cases are executed across **Chromium, Firefox, and WebKit** browsers to ensure cross-browser compatibility.

---

## Technologies Used

| Technology      | Version  |
| --------------- | -------- |
| Node.js         | v22.17.1 |
| Playwright Test | V1.58.0  |
| JavaScript      | ES6+     |

---

## Project Structure

```text
ITPM_Assignment_1_Playwright/
├── tests/
│   ├── functional/
│   │   ├── positive.spec.js    # 24 positive functional test cases
│   │   └── negative.spec.js    # 15 negative functional test cases
│   └── ui/
│       └── ui.spec.js          # 10 UI behavior test cases
├── playwright.config.js
├── package.json
└── README.md
```

---

## Test Coverage Summary

| Category            | Test File        | Test Count |
| ------------------- | ---------------- | ---------- |
| Positive Functional | positive.spec.js | 24         |
| Negative Functional | negative.spec.js | 15         |
| UI Behavior         | ui.spec.js       | 10         |
| **Total**           |                  | **49**     |

> **Note:** Tests are executed on 3 browsers (Chromium, Firefox, WebKit), resulting in **147 total test executions**.

---

## Test Case Details

### Positive Functional Tests (24 Tests)

| Test ID      | Description                                |
| ------------ | ------------------------------------------ |
| Pos_Fun_0001 | Simple present tense sentence              |
| Pos_Fun_0002 | Simple daily usage sentence                |
| Pos_Fun_0003 | Simple plural subject sentence             |
| Pos_Fun_0004 | Simple descriptive sentence                |
| Pos_Fun_0005 | Compound sentence with conjunction         |
| Pos_Fun_0006 | Compound sentence with sequence of actions |
| Pos_Fun_0007 | Compound sentence with future plan         |
| Pos_Fun_0008 | Conditional sentence                       |
| Pos_Fun_0009 | Conditional negative sentence              |
| Pos_Fun_0010 | Complex sentence with reported speech      |
| Pos_Fun_0011 | Present continuous tense                   |
| Pos_Fun_0012 | Past tense sentence                        |
| Pos_Fun_0013 | Future tense sentence                      |
| Pos_Fun_0014 | Negative tense sentence                    |
| Pos_Fun_0015 | Simple interrogative sentence              |
| Pos_Fun_0016 | Interrogative with action                  |
| Pos_Fun_0017 | Permission-based question                  |
| Pos_Fun_0018 | Polite request sentence                    |
| Pos_Fun_0019 | Polite question sentence                   |
| Pos_Fun_0020 | Request for availability                   |
| Pos_Fun_0021 | Short greeting sentence                    |
| Pos_Fun_0022 | Informal greeting sentence                 |
| Pos_Fun_0023 | Instructional sentence                     |
| Pos_Fun_0024 | Simple advisory sentence                   |

---

### Negative Functional Tests (15 Tests)

| Test ID      | Description                   |
| ------------ | ----------------------------- |
| Neg_Fun_0001 | Empty input                   |
| Neg_Fun_0002 | Only spaces                   |
| Neg_Fun_0003 | Numbers only                  |
| Neg_Fun_0004 | Special characters            |
| Neg_Fun_0005 | Mixed symbols and text        |
| Neg_Fun_0006 | Very long input text          |
| Neg_Fun_0007 | Repeated words                |
| Neg_Fun_0008 | Line breaks in input          |
| Neg_Fun_0009 | Mixed uppercase and lowercase |
| Neg_Fun_0010 | Emojis in input               |
| Neg_Fun_0011 | Tab characters in input       |
| Neg_Fun_0012 | Leading and trailing spaces   |
| Neg_Fun_0013 | HTML tags in input            |
| Neg_Fun_0014 | SQL injection attempt         |
| Neg_Fun_0015 | Unicode special characters    |

---

### UI Behavior Tests (10 Tests)

| Test ID     | Description                                   |
| ----------- | --------------------------------------------- |
| Pos_UI_0001 | Real-time translation without submit button   |
| Pos_UI_0002 | Input textbox is visible and enabled          |
| Pos_UI_0003 | Input textbox is editable                     |
| Pos_UI_0004 | Input can be cleared and refilled             |
| Pos_UI_0005 | Page loads successfully                       |
| Pos_UI_0006 | Page remains responsive after multiple inputs |
| Pos_UI_0007 | Input field can receive focus                 |
| Pos_UI_0008 | Typing speed does not affect input            |
| Pos_UI_0009 | Input accepts pasted text                     |
| Pos_UI_0010 | Input has correct placeholder text            |

---

## How to Run the Tests

### Prerequisites

- Node.js (v18 or later)
- Playwright

---

### Installation

```bash
git clone <repository-url>
cd ITPM_Assignment_1_Playwright
npm install
npx playwright install
```

---

### Run All Tests

```bash
npx playwright test
```

---

### Run Specific Test Files

```bash
npx playwright test tests/functional/positive.spec.js
npx playwright test tests/functional/negative.spec.js
npx playwright test tests/ui/ui.spec.js
```

---

### Run Tests with Options

```bash
npx playwright test --headed
npx playwright test --ui
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
npx playwright test -g "Pos_Fun_0001"
```

---

### View Test Report

```bash
npx playwright show-report
```

---

## Test Results

```text
Running 147 tests using 10 workers

✓ 49 test cases executed successfully
✓ Executed across 3 browsers
✓ No test failures observed
```

---

## Testing Approach

### Behavior-Based Validation

Since Sinhala output is **dynamically generated**, exact text matching was intentionally avoided. Instead, **behavior-based validation** was applied:

```text
INPUT → Application → Behavior Validation

✓ Input is accepted
✓ UI responds in real time
✓ Application remains stable
✓ No crashes or unexpected navigation
```

### Why This Approach?

| Reason             | Explanation                             |
| ------------------ | --------------------------------------- |
| Dynamic Output     | Translation text changes asynchronously |
| Third-Party System | Internal logic is not accessible        |
| Stability          | Behavior tests are less brittle         |
| Black-Box Testing  | Focus on user-visible behavior          |

---

## Notes

- Test IDs in Playwright align with the Excel test case document for traceability
- All **49 test cases** are marked as **Pass** in the Excel test sheet
- Tests validated across Chromium, Firefox, and WebKit
- Helper functions applied to follow the DRY principle
- `test.beforeEach()` used for common setup actions

---

## Author

| Field          | Value              |
| -------------- | ------------------ |
| **Student ID** | IT23585744         |
| **Name**       | Jayasinghe R M S K |
| **Group**      | 3Y.S1.WE.IT.01.01  |

---

## License

This project is developed strictly for **academic purposes**.

---

## Quick Command Reference

| Command                        | Description                    |
| ------------------------------ | ------------------------------ |
| `npm install`                  | Install dependencies           |
| `npx playwright install`       | Install Playwright browsers    |
| `npx playwright test`          | Run all tests                  |
| `npx playwright test --headed` | Run tests with visible browser |
| `npx playwright test --ui`     | Interactive UI mode            |
| `npx playwright show-report`   | View HTML test report          |
