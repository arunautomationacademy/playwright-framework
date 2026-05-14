# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\login.spec.ts >> Verify user login
- Location: src\tests\smoke\login.spec.ts:4:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /inventory/
Received string:  "https://www.saucedemo.com/"

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    7 × unexpected value "https://www.saucedemo.com/"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../../pages/login/loginPage';
  3  | 
  4  | test('Verify user login', async ({ page }) => {
  5  | 
  6  |     await page.goto('/');
  7  | 
  8  |     const loginPage = new LoginPage(page);
  9  | 
  10 |     await loginPage.login(
  11 |         process.env.USERNAME!,
  12 |         process.env.PASSWORD!
  13 |     );
  14 | 
> 15 |     await expect(page).toHaveURL(/inventory/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  16 | });
```