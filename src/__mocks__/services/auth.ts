/* mock imports: common */
import { user } from '__mocks__/data';
import { mockServerResponse, MockServerResponseSchema } from '__mocks__/services';

/* root imports: common */
import { AUTH_URL } from 'utils/constants';

const apiPrefix = AUTH_URL;
const schema: MockServerResponseSchema[] = [
	{
		method: 'onPost',
		path: `${apiPrefix}/login`,
		responseData: user,
	},
	{
		method: 'onPost',
		path: `${apiPrefix}/logout`,
		responseData: {},
	},
	{
		method: 'onPost',
		path: `${apiPrefix}/register`,
		responseData: user,
	},
	{
		method: 'onPost',
		path: `${apiPrefix}/authenticate`,
		responseData: user,
	},
];

export const mockedAuthServerResponse = mockServerResponse(apiPrefix, schema);
