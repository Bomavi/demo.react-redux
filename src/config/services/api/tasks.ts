/* root imports: common */
import { Base } from 'config/axios/base';
import { queryString } from 'utils/helpers';

export class TasksApi extends Base {
	public async search(params: Partial<TasksSearchType>) {
		return await this.apiClient.get<TaskType[]>(`/tasks/search${queryString(params)}`);
	}

	public async create(task: TaskUpdateSchema) {
		return await this.apiClient.post<TaskType>('/tasks', task);
	}

	public async update(id: string, task: TaskUpdateSchema) {
		return await this.apiClient.put<TaskType>(`/tasks/${id}`, task);
	}

	public async delete(id: string) {
		return await this.apiClient.delete(`/tasks/${id}`);
	}
}
