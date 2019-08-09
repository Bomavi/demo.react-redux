/* mock imports: common */
import { user } from '__mocks__/data';
import { mockedAuthServerResponse } from '__mocks__/services/auth';

/* root imports: common */
import { recordSaga } from 'utils/helpers';
import { setInProgress, registerOnSuccess, registerOnFail } from 'actions/auth';
import * as types from 'actions/auth/types';

/* local imports: common */
import { registerWorker } from '.';

describe('Saga: REGISTER', () => {
	afterEach(() => {
		mockedAuthServerResponse.reset();
	});

	afterAll(() => {
		mockedAuthServerResponse.restore();
	});

	test(types.REGISTER_ON_FAIL, async () => {
		mockedAuthServerResponse.initFailResponse();
		const dispatched = await recordSaga(registerWorker);
		const toEqual = [
			setInProgress(true),
			registerOnFail('Error: Network Error'),
			setInProgress(false),
		];

		expect(dispatched).toEqual(toEqual);
	});

	test(types.REGISTER_ON_SUCCESS, async () => {
		mockedAuthServerResponse.initSuccessResponse();
		const dispatched = await recordSaga(registerWorker);
		const toEqual = [
			setInProgress(true),
			registerOnSuccess(user),
			setInProgress(false),
		];

		expect(dispatched).toEqual(toEqual);
	});
});
