/* root imports: common */
import { Base } from 'config/axios/base';
import { queryString } from 'utils/helpers';

export class TasksApi extends Base {
	public search = async (params: Partial<TasksSearchType>) => {
		return await this.apiClient.get<TaskType[]>(
			`/tasks/search${queryString(params)}`
		);
	};

	public create = async (task: TaskUpdateSchema) => {
		return await this.apiClient.post<TaskType>('/tasks', task);
	};

	public update = async (id: string, task: TaskUpdateSchema) => {
		return await this.apiClient.put<TaskType>(`/tasks/${id}`, task);
	};

	public delete = async (id: string) => {
		return await this.apiClient.delete(`/tasks/${id}`);
	};
}
