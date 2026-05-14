# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\login.spec.ts >> Verify user login
- Location: src\tests\smoke\login.spec.ts:3:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /inventory/
Received string:  "https://www.saucedemo.com/"

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    8 × unexpected value "https://www.saucedemo.com/"

```

# Test source

```ts
  1  | import { Locator, Page, expect } from '@playwright/test';
  2  | 
  3  | export class BasePage {
  4  |   constructor(protected page: Page) {}
  5  | 
  6  |   async navigate(url: string) {
  7  |     await this.page.goto(url);
  8  |   }
  9  | 
  10 |   async click(locator: Locator) {
  11 |     await locator.waitFor({ state: 'visible' });
  12 |     await locator.click();
  13 |   }
  14 | 
  15 |   async jsClick(locator: Locator) {
  16 |     await locator.waitFor({ state: 'visible' });
  17 |     await locator.evaluate((el: HTMLElement) => el.click());
  18 |   }
  19 | 
  20 |   async fill(locator: Locator, value: string) {
  21 |     await locator.clear();
  22 |     await locator.fill(value);
  23 |   }
  24 | 
  25 |   async getText(locator: Locator): Promise<string> {
  26 |     await locator.waitFor({ state: 'visible' });
  27 |     return (await locator.textContent()) || '';
  28 |   }
  29 | 
  30 |   async isVisible(locator: Locator): Promise<boolean> {
  31 |     return await locator.isVisible();
  32 |   }
  33 | 
  34 |   async hover(locator: Locator) {
  35 |     await locator.hover();
  36 |   }
  37 | 
  38 |   async waitForVisible(locator: Locator) {
  39 |     await locator.waitFor({ state: 'visible' });
  40 |   }
  41 | 
  42 |   async waitForHidden(locator: Locator) {
  43 |     await locator.waitFor({ state: 'hidden' });
  44 |   }
  45 | 
  46 |   async uploadFile(locator: Locator, filePath: string) {
  47 |     await locator.setInputFiles(filePath);
  48 |   }
  49 | 
  50 |   async expectUrlContains(text: string) {
> 51 |     await expect(this.page).toHaveURL(new RegExp(text));
     |                             ^ Error: expect(page).toHaveURL(expected) failed
  52 |   }
  53 | }
```