/* mock imports: common */
import { user } from '__mocks__/data';
import { mockedAuthServerResponse } from '__mocks__/services/auth';

/* root imports: common */
import { recordSaga } from 'utils/helpers';
import {
	setIsInitialized,
	authenticateOnSuccess,
	authenticateOnFail,
} from 'actions/auth';
import * as types from 'actions/auth/types';

/* local imports: common */
import { authenticateWorker } from '.';

describe('Saga: AUTHENTICATE', () => {
	afterEach(() => {
		mockedAuthServerResponse.reset();
	});

	afterAll(() => {
		mockedAuthServerResponse.restore();
	});

	test(types.AUTHENTICATE_ON_FAIL, async () => {
		mockedAuthServerResponse.initFailResponse();
		const dispatched = await recordSaga(authenticateWorker);
		const toEqual = [
			authenticateOnFail('Error: Network Error'),
			setIsInitialized(true),
		];

		expect(dispatched).toEqual(toEqual);
	});

	test(types.AUTHENTICATE_ON_SUCCESS, async () => {
		mockedAuthServerResponse.initSuccessResponse();
		const dispatched = await recordSaga(authenticateWorker);
		const toEqual = [authenticateOnSuccess(user), setIsInitialized(true)];

		expect(dispatched).toEqual(toEqual);
	});
});
