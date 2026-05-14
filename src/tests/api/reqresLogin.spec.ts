import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseFixtures';
import { ReqresApi } from '../../core/api/ReqresApi';

test.describe('Reqres API', () => {
  test('should login and receive a token', async ({ apiClient }) => {
    const reqres = new ReqresApi(apiClient);
    const response = await reqres.login('eve.holt@reqres.in', 'cityslicka');

    expect(response.status).toBe(200);
    expect(response.data.token).toBeTruthy();
  });

  test('should fetch user list', async ({ apiClient }) => {
    const reqres = new ReqresApi(apiClient);
    const response = await reqres.getUsers(2);

    expect(response.status).toBe(200);
    expect(response.data.data.length).toBeGreaterThan(0);
  });
});
