import dotenv from 'dotenv';
dotenv.config();

export const env = {
  baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com',
  apiBaseUrl: process.env.API_BASE_URL || 'https://reqres.in',
  sauceUsername: process.env.SAUCE_USERNAME || 'standard_user',
  saucePassword: process.env.SAUCE_PASSWORD || 'secret_sauce',
  isCi: process.env.CI === 'true' || process.env.CI === '1'
};
