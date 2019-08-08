/* mock imports: common */
import { user } from '__mocks__/data';
import { mockedAuthServerResponse } from '__mocks__/services/auth';

/* root imports: common */
import { recordSaga } from 'utils/helpers';
import { setInProgress, registerOnSuccess, registerOnFail } from 'actions/auth';

/* local imports: common */
import { registerWorker } from '.';

describe('Saga: REGISTER:', () => {
	it('REGISTER_ON_FAIL:', async () => {
		mockedAuthServerResponse.initFailResponse();
		const dispatched = await recordSaga(registerWorker);
		mockedAuthServerResponse.reset();

		expect(dispatched).toContainEqual(setInProgress(true));
		expect(dispatched).toContainEqual(registerOnFail('Error: Network Error'));
		expect(dispatched).toContainEqual(setInProgress(false));
	});

	it('REGISTER_ON_SUCCESS:', async () => {
		mockedAuthServerResponse.initSuccessResponse();
		const dispatched = await recordSaga(registerWorker);
		mockedAuthServerResponse.reset();

		expect(dispatched).toContainEqual(setInProgress(true));
		expect(dispatched).toContainEqual(registerOnSuccess(user));
		expect(dispatched).toContainEqual(setInProgress(false));
	});

	mockedAuthServerResponse.restore();
});
