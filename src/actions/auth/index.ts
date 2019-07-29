/* local imports: common */
import types from './types';

export const actions = Object.freeze({
	// Authenticate
	authenticate: () => ({
		type: types.AUTHENTICATE,
	}),

	authenticateOnSuccess: (user: AuthenticateResponseType) => ({
		type: types.AUTHENTICATE_ONSUCCESS,
		payload: user,
	}),

	authenticateOnFail: (error: string) => ({
		type: types.AUTHENTICATE_ONFAIL,
		payload: error,
		error: true,
	}),

	// Login
	login: () => ({
		type: types.LOGIN,
	}),

	loginOnSuccess: (user: LoginResponseType) => ({
		type: types.LOGIN_ONSUCCESS,
		payload: user,
	}),

	loginOnFail: (error: string) => ({
		type: types.LOGIN_ONFAIL,
		payload: error,
		error: true,
	}),

	// Register
	register: () => ({
		type: types.REGISTER,
	}),

	registerOnSuccess: (user: RegisterResponseType) => ({
		type: types.REGISTER_ONSUCCESS,
		payload: user,
	}),

	registerOnFail: (error: string) => ({
		type: types.REGISTER_ONFAIL,
		payload: error,
		error: true,
	}),

	// Logout
	logout: () => ({
		type: types.LOGOUT,
	}),

	logoutOnSuccess: (user: {}) => ({
		type: types.LOGOUT_ONSUCCESS,
		payload: user,
	}),

	logoutOnFail: (error: string) => ({
		type: types.LOGOUT_ONFAIL,
		payload: error,
		error: true,
	}),
});
