/* mock imports: common */
import { user } from '__mocks__/data';
import { mockedUsersServerResponse } from '__mocks__/services/users';

/* root imports: common */
import { recordSaga } from 'utils/helpers';
import { setThemeInProgress } from 'actions/theme';
import { updateUserOnSuccess, updateUserOnFail } from 'actions/user';
import * as types from 'actions/user/types';

/* local imports: common */
import { switchWorker } from '.';

describe('Saga: SWITCH_THEME', () => {
	afterEach(() => {
		mockedUsersServerResponse.reset();
	});

	afterAll(() => {
		mockedUsersServerResponse.restore();
	});

	const payload = user.theme;

	test(types.UPDATE_USER_ON_FAIL, async () => {
		mockedUsersServerResponse.initFailResponse();
		const dispatched = await recordSaga(switchWorker, { payload });
		const toEqual = [
			setThemeInProgress(true),
			updateUserOnFail('Error: Network Error'),
			setThemeInProgress(false),
		];

		expect(dispatched).toEqual(toEqual);
	});

	test(types.UPDATE_USER_ON_SUCCESS, async () => {
		mockedUsersServerResponse.initSuccessResponse();
		const dispatched = await recordSaga(switchWorker, { payload });
		const toEqual = [
			setThemeInProgress(true),
			updateUserOnSuccess(user),
			setThemeInProgress(false),
		];

		expect(dispatched).toEqual(toEqual);
	});
});
