/* mock imports: common */
import { user } from '__mocks__/data';
import { mockServerResponse, MockServerResponseSchema } from '__mocks__/services';

/* root imports: common */
import { API_URL } from 'utils/constants';

const apiPrefix = `${API_URL}/users`;
const schema: MockServerResponseSchema[] = [
	{
		method: 'onPut',
		path: apiPrefix,
		responseData: user,
	},
];

export const mockedUsersServerResponse = mockServerResponse(apiPrefix, schema);
