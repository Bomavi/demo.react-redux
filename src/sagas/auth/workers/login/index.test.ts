/* mock imports: common */
import { user } from '__mocks__/data';
import { mockedAuthServerResponse } from '__mocks__/services/auth';

/* root imports: common */
import { recordSaga } from 'utils/helpers';
import { setInProgress, loginOnSuccess, loginOnFail } from 'actions/auth';
import * as types from 'actions/auth/types';

/* local imports: common */
import { loginWorker } from '.';

describe('Saga: LOGIN', () => {
	afterEach(() => {
		mockedAuthServerResponse.reset();
	});

	afterAll(() => {
		mockedAuthServerResponse.restore();
	});

	test(types.LOGIN_ON_FAIL, async () => {
		mockedAuthServerResponse.initFailResponse();
		const dispatched = await recordSaga(loginWorker);
		const toEqual = [
			setInProgress(true),
			loginOnFail('Error: Network Error'),
			setInProgress(false),
		];

		expect(dispatched).toEqual(toEqual);
	});

	test(types.LOGIN_ON_SUCCESS, async () => {
		mockedAuthServerResponse.initSuccessResponse();
		const dispatched = await recordSaga(loginWorker);
		const toEqual = [setInProgress(true), loginOnSuccess(user), setInProgress(false)];

		expect(dispatched).toEqual(toEqual);
	});
});
