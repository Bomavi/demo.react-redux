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

/* local imports: common */
import { authenticateWorker } from '.';

describe('Saga: AUTHENTICATE:', () => {
	it('AUTHENTICATE_ON_FAIL:', async () => {
		mockedAuthServerResponse.initFailResponse();
		const dispatched = await recordSaga(authenticateWorker);
		mockedAuthServerResponse.reset();

		expect(dispatched).toContainEqual(authenticateOnFail('Error: Network Error'));
		expect(dispatched).toContainEqual(setIsInitialized(true));
	});

	it('AUTHENTICATE_ON_SUCCESS:', async () => {
		mockedAuthServerResponse.initSuccessResponse();
		const dispatched = await recordSaga(authenticateWorker);
		mockedAuthServerResponse.reset();

		expect(dispatched).toContainEqual(authenticateOnSuccess(user));
		expect(dispatched).toContainEqual(setIsInitialized(true));
	});

	mockedAuthServerResponse.restore();
});
