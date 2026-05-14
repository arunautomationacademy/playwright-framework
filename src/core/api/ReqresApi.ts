import { ApiClient } from './ApiClient';

export type ReqresLoginResponse = {
  token: string;
};

export type ReqresUser = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export class ReqresApi {
  constructor(private client: ApiClient) {}

  async login(email: string, password: string) {
    return this.client.post<ReqresLoginResponse>('/api/login', {
      email,
      password
    });
  }

  async getUsers(page = 1) {
    return this.client.get<{ data: ReqresUser[] }>(`/api/users?page=${page}`);
  }
}
