import { api } from '../api/api';

class LoginService {
  private url: string;

  constructor() {
      this.url = '/login';
  }

  verify<T> (payload: T) {
    return api.post(this.url, payload);
  }
}

export default new LoginService();