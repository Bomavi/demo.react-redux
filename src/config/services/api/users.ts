/* root imports: common */
import { Base } from 'config/axios/base';

export class UsersApi extends Base {
	public async getById(id: string) {
		return await this.apiClient.get<UserType>(`/users/${id}`);
	}

	public async update(id: string, userData: UserUpdateSchema) {
		return await this.apiClient.put<UserUpdateResponse>(`/users/${id}`, userData);
	}
}
