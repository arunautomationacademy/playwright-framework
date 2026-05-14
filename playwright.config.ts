import { defineConfig } from '@playwright/test';
import { env } from './src/config/env';

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  retries: env.isCi ? 2 : 1,
  workers: 3,
  timeout: 60000,
  reporter: [
    ['html'],
    ['list'],
    ['allure-playwright']
  ],
  use: {
    baseURL: env.baseUrl,
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure'
  }
});