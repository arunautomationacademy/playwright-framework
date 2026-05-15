import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  retries: 2,
  workers: 2,

  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  }
});