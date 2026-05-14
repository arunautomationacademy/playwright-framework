import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login/loginPage';
import { ApiClient } from '../core/api/ApiClient';

type PageFixtures = {
  loginPage: LoginPage;
  apiClient: ApiClient;
};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  apiClient: async ({}, use) => {
    const apiClient = new ApiClient();
    await use(apiClient);
  }
});

export { expect } from '@playwright/test';