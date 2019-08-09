/* mock imports: common */
import { user } from '__mocks__/data';
import { getInitialState, getUpdatedState } from '__mocks__/state';

/* root imports: common */
import {
	setInProgress,
	setIsInitialized,
	authenticateOnSuccess,
	loginOnSuccess,
	logoutOnSuccess,
	registerOnSuccess,
} from 'actions/auth';
import * as authTypes from 'actions/auth/types';
import { updateUserOnSuccess } from 'actions/user';
import * as userTypes from 'actions/user/types';
import { setThemeInProgress, changeSelectedThemeType } from 'actions/theme';
import * as themeTypes from 'actions/theme/types';

/* local imports: common */
import { auth } from '.';

describe('Auth reducer', () => {
	const initialState = getInitialState();
	const updatedState = getUpdatedState();

	// test('DEFAULT STATE:', () => {
	// 	const nextState = auth(undefined, {});

	// 	expect(nextState).toEqual(initialState.auth);
	// });

	test(authTypes.SET_IN_PROGRESS, () => {
		const nextState = auth(initialState.auth, setInProgress(true));

		expect(nextState.inProgress).toEqual(updatedState.auth.inProgress);
	});

	test(authTypes.SET_IS_INITIALIZED, () => {
		const nextState = auth(initialState.auth, setIsInitialized(true));

		expect(nextState.isInitialized).toEqual(updatedState.auth.isInitialized);
	});

	test(authTypes.AUTHENTICATE_ON_SUCCESS, () => {
		const nextState = auth(initialState.auth, authenticateOnSuccess(user));

		expect(nextState.user).toEqual(updatedState.auth.user);
		expect(nextState.theme).toEqual(updatedState.auth.theme);
	});

	test(authTypes.LOGIN_ON_SUCCESS, () => {
		const nextState = auth(initialState.auth, loginOnSuccess(user));

		expect(nextState.user).toEqual(updatedState.auth.user);
		expect(nextState.theme).toEqual(updatedState.auth.theme);
	});

	test(authTypes.REGISTER_ON_SUCCESS, () => {
		const nextState = auth(initialState.auth, registerOnSuccess(user));

		expect(nextState.user).toEqual(updatedState.auth.user);
		expect(nextState.theme).toEqual(updatedState.auth.theme);
	});

	test(authTypes.LOGOUT_ON_SUCCESS, () => {
		const nextState = auth(updatedState.auth, logoutOnSuccess());

		expect(nextState.user).toEqual(initialState.auth.user);
	});

	test(userTypes.UPDATE_USER_ON_SUCCESS, () => {
		const nextState = auth(initialState.auth, updateUserOnSuccess(user));

		expect(nextState.user).toEqual(updatedState.auth.user);
		expect(nextState.theme).toEqual(updatedState.auth.theme);
	});

	test(themeTypes.SET_THEME_IN_PROGRESS, () => {
		const nextState = auth(initialState.auth, setThemeInProgress(true));

		expect(nextState.theme.inProgress).toEqual(true);
	});

	test(themeTypes.CHANGE_SELECTED_THEME_TYPE, () => {
		const nextState = auth(initialState.auth, changeSelectedThemeType('dark'));

		expect(nextState.theme.selectedThemeType).toEqual('dark');
	});
});
