/* mock imports: common */
import { user } from '__mocks__/data';
import { mockedAuthServerResponse } from '__mocks__/services/auth';

/* root imports: common */
import { recordSaga } from 'utils/helpers';
import { setInProgress, loginOnSuccess, loginOnFail } from 'actions/auth';

/* local imports: common */
import { loginWorker } from '.';

describe('Saga: LOGIN:', () => {
	it('LOGIN_ON_FAIL:', async () => {
		mockedAuthServerResponse.initFailResponse();
		const dispatched = await recordSaga(loginWorker);
		mockedAuthServerResponse.reset();

		expect(dispatched).toContainEqual(setInProgress(true));
		expect(dispatched).toContainEqual(loginOnFail('Error: Network Error'));
		expect(dispatched).toContainEqual(setInProgress(false));
	});

	it('LOGIN_ON_SUCCESS:', async () => {
		mockedAuthServerResponse.initSuccessResponse();
		const dispatched = await recordSaga(loginWorker);
		mockedAuthServerResponse.reset();

		expect(dispatched).toContainEqual(setInProgress(true));
		expect(dispatched).toContainEqual(loginOnSuccess(user));
		expect(dispatched).toContainEqual(setInProgress(false));
	});

	mockedAuthServerResponse.restore();
});
