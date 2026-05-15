import { expect, Page } from '@playwright/test';
import { BasePage } from '../../core/ui/basePage';
import logger from '../../utils/logger';

export class LoginPage extends BasePage {
  readonly username;
  readonly password;
  readonly loginButton;
  readonly loginError;

  constructor(page: Page) {
    super(page);

    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.loginError = page.locator('[data-test="error"]');
  }

  async login(user: string, pass: string) {
    logger.info('Starting login flow');

    await this.username.waitFor({
      state: 'visible',
      timeout: 10000
    });

    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
  }

  async expectLoginError(message: RegExp | string) {
    await this.loginError.waitFor({
      state: 'visible',
      timeout: 10000
    });

    await expect(this.loginError).toHaveText(message);
  }
}