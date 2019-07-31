/* root imports: common */
import { Base } from 'config/axios/base';

export class AuthService extends Base {
	public authenticate = async () => {
		return await this.apiClient.post<UserType>('/authenticate');
	};

	public login = async (params: Partial<LoginType>) => {
		return await this.apiClient.post<UserType>('/login', params);
	};

	public register = async (params: Partial<RegisterType>) => {
		return await this.apiClient.post<UserType>('/register', params);
	};

	public logout = async () => {
		return await this.apiClient.post<{}>('/logout');
	};
}
