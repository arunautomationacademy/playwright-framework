import { test, expect } from '../../fixtures/baseFixtures';
import { loginUsers } from '../../testData/loginUsers';
import { env } from '../../config/env';

for (const user of loginUsers) {
  test(`Verify user login - ${user.name}`, async ({ loginPage }) => {
    await loginPage.navigate('/');

    const username = user.expectSuccess ? env.sauceUsername || user.username : user.username;
    const password = user.expectSuccess ? env.saucePassword || user.password : user.password;

    await loginPage.login(username, password);

    if (user.expectSuccess) {
      await loginPage.expectUrlContains('inventory');
    } else {
      await loginPage.expectLoginError(/Epic sadface:/i);
    }
  });
}
