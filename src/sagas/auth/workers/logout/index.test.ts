/* mock imports: common */
import { mockedAuthServerResponse } from '__mocks__/services/auth';

/* root imports: common */
import { recordSaga } from 'utils/helpers';
import { setInProgress, logoutOnSuccess, logoutOnFail } from 'actions/auth';
import * as types from 'actions/auth/types';

/* local imports: common */
import { logoutWorker } from '.';

describe('Saga: LOGOUT:', () => {
	afterEach(() => {
		mockedAuthServerResponse.reset();
	});

	afterAll(() => {
		mockedAuthServerResponse.restore();
	});

	test(types.LOGOUT_ON_FAIL, async () => {
		mockedAuthServerResponse.initFailResponse();
		const dispatched = await recordSaga(logoutWorker);
		const toEqual = [
			setInProgress(true),
			logoutOnFail('Network Error'),
			setInProgress(false),
		];

		expect(dispatched).toEqual(toEqual);
	});

	test(types.LOGOUT_ON_SUCCESS, async () => {
		mockedAuthServerResponse.initSuccessResponse();
		const dispatched = await recordSaga(logoutWorker);
		const toEqual = [setInProgress(true), logoutOnSuccess(), setInProgress(false)];

		expect(dispatched).toEqual(toEqual);
	});
});
