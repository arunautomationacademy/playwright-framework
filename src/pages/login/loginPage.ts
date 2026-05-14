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

    this.username = page.getByLabel('Username');
    this.password = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.loginError = page.getByRole('heading', { name: /Epic sadface:/i });
  }

  async login(user: string, pass: string) {
    logger.info('Starting login flow');
    await this.waitForVisible(this.username);
    await this.fill(this.username, user);
    await this.fill(this.password, pass);
    await this.click(this.loginButton);
  }

  async expectLoginError(message: RegExp | string) {
    await this.waitForVisible(this.loginError);
    await expect(this.loginError).toHaveText(message);
  }
}