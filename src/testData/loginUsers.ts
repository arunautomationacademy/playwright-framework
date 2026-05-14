export type LoginTestData = {
  name: string;
  username: string;
  password: string;
  expectSuccess: boolean;
};

export const loginUsers: LoginTestData[] = [
  {
    name: 'valid credentials',
    username: 'standard_user',
    password: 'secret_sauce',
    expectSuccess: true
  },
  {
    name: 'invalid credentials',
    username: 'locked_out_user',
    password: 'wrong_password',
    expectSuccess: false
  }
];
