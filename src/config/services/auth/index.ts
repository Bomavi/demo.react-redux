/* root imports: common */
import { Base } from 'config/axios/base';

export class AuthService extends Base {
	public async authenticate() {
		return await this.apiClient.post<AuthenticateResponseType>('/authenticate');
	}

	public async login(params: Partial<LoginType>) {
		return await this.apiClient.post<LoginResponseType>('/login', params);
	}

	public async register(params: Partial<RegisterType>) {
		return await this.apiClient.post<RegisterResponseType>('/register', params);
	}

	public async logout() {
		return await this.apiClient.post<{}>('/logout');
	}
}
