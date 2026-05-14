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
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    9 × unexpected value "https://www.saucedemo.com/"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - generic [ref=e10]:
        - textbox "Username" [ref=e11]: Arun Kumar D
        - img [ref=e12]
      - generic [ref=e14]:
        - textbox "Password" [ref=e15]: secret_sauce
        - img [ref=e16]
      - 'heading "Epic sadface: Username and password do not match any user in this service" [level=3] [ref=e19]':
        - button [ref=e20] [cursor=pointer]:
          - img [ref=e21]
        - text: "Epic sadface: Username and password do not match any user in this service"
      - button "Login" [active] [ref=e23] [cursor=pointer]
    - generic [ref=e25]:
      - generic [ref=e26]:
        - heading "Accepted usernames are:" [level=4] [ref=e27]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e28]:
        - heading "Password for all users:" [level=4] [ref=e29]
        - text: secret_sauce
```

# Test source

```ts
  1  | import { Locator, Page, expect } from '@playwright/test';
  2  | import logger from '../../utils/logger';
  3  | 
  4  | export class BasePage {
  5  |   constructor(protected page: Page) {}
  6  | 
  7  |   async navigate(url: string) {
  8  |     await this.page.goto(url);
  9  |   }
  10 | 
  11 |   async click(locator: Locator) {
  12 |     logger.info('Clicking element');
  13 |     await locator.waitFor({ state: 'visible' });
  14 |     await locator.click();
  15 |   }
  16 | 
  17 |   async jsClick(locator: Locator) {
  18 |     logger.info('Clicking element using JavaScript');
  19 |     await locator.waitFor({ state: 'visible' });
  20 |     await locator.evaluate((el: HTMLElement) => el.click());
  21 |   }
  22 | 
  23 |   async fill(locator: Locator, value: string) {
  24 |     logger.info(`Filling element with value: ${value}`);
  25 |     await locator.clear();
  26 |     await locator.fill(value);
  27 |   }
  28 | 
  29 |   async getText(locator: Locator): Promise<string> {
  30 |     logger.info('Getting text from element');
  31 | 
  32 |     await locator.waitFor({ state: 'visible' });
  33 |     return (await locator.textContent()) || '';
  34 |   }
  35 | 
  36 |   async isVisible(locator: Locator): Promise<boolean> {
  37 |     logger.info('Checking if element is visible');
  38 |     return await locator.isVisible();
  39 |   }
  40 | 
  41 |   async hover(locator: Locator) {
  42 |     logger.info('Hovering over element');
  43 |     await locator.hover();
  44 |   }
  45 | 
  46 |   async waitForVisible(locator: Locator) {
  47 |     logger.info('Waiting for element to be visible');   
  48 |     await locator.waitFor({ state: 'visible' });
  49 |   }
  50 | 
  51 |   async waitForHidden(locator: Locator) {
  52 |     logger.info('Waiting for element to be hidden');
  53 |     await locator.waitFor({ state: 'hidden' });
  54 |   }
  55 | 
  56 |   async uploadFile(locator: Locator, filePath: string) {
  57 |     logger.info(`Uploading file: ${filePath}`);
  58 |     await locator.setInputFiles(filePath);
  59 |   }
  60 | 
  61 |   async expectUrlContains(text: string) {
  62 |     logger.info(`Expecting URL to contain: ${text}`);
> 63 |     await expect(this.page).toHaveURL(new RegExp(text));
     |                             ^ Error: expect(page).toHaveURL(expected) failed
  64 |   }
  65 | }
```