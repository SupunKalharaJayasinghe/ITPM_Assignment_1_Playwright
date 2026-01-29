# ITPM_Assignment_1_Playwright

## Overview

This project contains automated end-to-end test cases developed using **Playwright** for the Singlish to Sinhala translation feature available at:

[Swift Translator](https://www.swifttranslator.com/)

The automation covers:

- Positive functional test cases
- Negative functional test cases
- UI behavior validation

All test cases are executed across **Chromium, Firefox, and WebKit** browsers.

---

## Technologies Used

- Node.js
- Playwright Test
- JavaScript

---

## Project Structure

```text
tests/
├── functional/
│   ├── positive.spec.js
│   └── negative.spec.js
└── ui/
    └── ui.spec.js

playwright.config.js
package.json
README.md
```

---

## Test Coverage

### Positive Functional Tests

- Simple, compound, and complex sentences
- Tense variations (past, present, future)
- Interrogative and imperative sentences
- Polite requests and greetings

### Negative Functional Tests

- Empty and whitespace-only inputs
- Numeric and special character inputs
- Long text inputs
- Repeated words
- Mixed casing and emojis

### UI Test

- Real-time translation without requiring a submit button

---

## How to Run the Tests

### Prerequisites

- Node.js (v18 or later)
- Playwright installed

---

### Installation

```bash
npm install
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

### View Test Report

```bash
npx playwright show-report
```

---

## Notes

- Due to dynamic rendering of Sinhala output, behavior-based validation was used instead of exact text matching.
- Test IDs in Playwright align with Excel test cases for easy traceability.
- The Excel test case file includes all 35 test cases with **Status = Pass** for submission readiness.

---

## Author

**ID: IT23585744**

**Name: Jayasinghe R M S K**

**Group: 3Y.S1.WE.IT.01.01**
