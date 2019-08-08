/* mock imports: common */
import { task, tasks } from '__mocks__/data';
import { mockServerResponse, MockServerResponseSchema } from '__mocks__/services';

/* root imports: common */
import { API_URL } from 'utils/constants';

const apiPrefix = `${API_URL}/tasks`;
const schema: MockServerResponseSchema[] = [
	{
		method: 'onGet',
		path: new RegExp(`${apiPrefix}/search/*`),
		responseData: tasks,
	},
	{
		method: 'onPost',
		path: apiPrefix,
		responseData: task,
	},
	{
		method: 'onPut',
		path: new RegExp(`${apiPrefix}/*`),
		responseData: task,
	},
	{
		method: 'onDelete',
		path: new RegExp(`${apiPrefix}/*`),
		responseData: task._id,
	},
];

export const mockedTasksServerResponse = mockServerResponse(apiPrefix, schema);
