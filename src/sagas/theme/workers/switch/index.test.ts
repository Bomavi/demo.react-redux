/* mock imports: common */
import { user } from '__mocks__/data';
import { mockedUsersServerResponse } from '__mocks__/services/users';

/* root imports: common */
import { recordSaga } from 'utils/helpers';
import { setThemeInProgress } from 'actions/theme';
import { updateUserOnSuccess, updateUserOnFail } from 'actions/user';

/* local imports: common */
import { switchWorker } from '.';

describe('Saga: SWITCH_THEME and UPDATE_USER:', () => {
	const payload = 'light';

	it('UPDATE_USER_ON_FAIL:', async () => {
		mockedUsersServerResponse.initFailResponse();
		const dispatched = await recordSaga(switchWorker, { payload });
		mockedUsersServerResponse.reset();

		expect(dispatched).toContainEqual(setThemeInProgress(true));
		expect(dispatched).toContainEqual(updateUserOnFail('Error: Network Error'));
		expect(dispatched).toContainEqual(setThemeInProgress(false));
	});

	it('UPDATE_USER_ON_SUCCESS:', async () => {
		mockedUsersServerResponse.initSuccessResponse();
		const dispatched = await recordSaga(switchWorker, { payload });
		mockedUsersServerResponse.reset();

		expect(dispatched).toContainEqual(setThemeInProgress(true));
		expect(dispatched).toContainEqual(updateUserOnSuccess(user));
		expect(dispatched).toContainEqual(setThemeInProgress(false));
	});

	mockedUsersServerResponse.restore();
});
