import { Locator, Page, expect } from '@playwright/test';
import logger from '../../utils/logger';

export class BasePage {
  constructor(protected page: Page) {}

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async click(locator: Locator) {
    logger.info('Clicking element');
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  async jsClick(locator: Locator) {
    logger.info('Clicking element using JavaScript');
    await locator.waitFor({ state: 'visible' });
    await locator.evaluate((el: HTMLElement) => el.click());
  }

  async fill(locator: Locator, value: string) {
    logger.info(`Filling element with value: ${value}`);
    await locator.clear();
    await locator.fill(value);
  }

  async getText(locator: Locator): Promise<string> {
    logger.info('Getting text from element');

    await locator.waitFor({ state: 'visible' });
    return (await locator.textContent()) || '';
  }

  async isVisible(locator: Locator): Promise<boolean> {
    logger.info('Checking if element is visible');
    return await locator.isVisible();
  }

  async hover(locator: Locator) {
    logger.info('Hovering over element');
    await locator.hover();
  }

  async waitForVisible(locator: Locator) {
    logger.info('Waiting for element to be visible');   
    await locator.waitFor({ state: 'visible' });
  }

  async waitForHidden(locator: Locator) {
    logger.info('Waiting for element to be hidden');
    await locator.waitFor({ state: 'hidden' });
  }

  async uploadFile(locator: Locator, filePath: string) {
    logger.info(`Uploading file: ${filePath}`);
    await locator.setInputFiles(filePath);
  }

  async expectUrlContains(text: string) {
    logger.info(`Expecting URL to contain: ${text}`);
    await expect(this.page).toHaveURL(new RegExp(text));
  }
}