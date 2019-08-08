/* mock imports: common */
import { mockedAuthServerResponse } from '__mocks__/services/auth';

/* root imports: common */
import { recordSaga } from 'utils/helpers';
import { setInProgress, logoutOnSuccess, logoutOnFail } from 'actions/auth';

/* local imports: common */
import { logoutWorker } from '.';

describe('Saga: LOGOUT:', () => {
	it('LOGOUT_ON_FAIL:', async () => {
		mockedAuthServerResponse.initFailResponse();
		const dispatched = await recordSaga(logoutWorker);
		mockedAuthServerResponse.reset();

		expect(dispatched).toContainEqual(setInProgress(true));
		expect(dispatched).toContainEqual(logoutOnFail('Error: Network Error'));
		expect(dispatched).toContainEqual(setInProgress(false));
	});

	it('LOGOUT_ON_SUCCESS:', async () => {
		mockedAuthServerResponse.initSuccessResponse();
		const dispatched = await recordSaga(logoutWorker);
		mockedAuthServerResponse.reset();

		expect(dispatched).toContainEqual(setInProgress(true));
		expect(dispatched).toContainEqual(logoutOnSuccess());
		expect(dispatched).toContainEqual(setInProgress(false));
	});

	mockedAuthServerResponse.restore();
});
