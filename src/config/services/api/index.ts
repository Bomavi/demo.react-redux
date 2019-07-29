/* root imports: common */
import { Base } from 'config/axios/base';

/* local imports: common */
import { TasksApi } from './tasks';
import { UsersApi } from './users';

export class ApiService extends Base {
	public readonly tasks: TasksApi = new TasksApi(this.apiClient);
	public readonly users: UsersApi = new UsersApi(this.apiClient);
}
