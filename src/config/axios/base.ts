/* local imports: common */
import { ApiClient } from './api-client';

export class Base {
	public readonly apiClient: ApiClient;

	public constructor(apiClient: ApiClient) {
		this.apiClient = apiClient;
	}
}
