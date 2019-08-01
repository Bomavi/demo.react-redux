/* local imports: common */
import * as types from './../types';

/* initial action */
export interface LoginAction {
	type: typeof types.LOGIN;
	payload: LoginType;
}

export const login = (userData: LoginType): LoginAction => ({
	type: types.LOGIN,
	payload: userData,
});

/* on success action */
export interface LoginOnSuccessAction {
	type: typeof types.LOGIN_ON_SUCCESS;
	payload: UserType;
}

export const loginOnSuccess = (user: UserType): LoginOnSuccessAction => ({
	type: types.LOGIN_ON_SUCCESS,
	payload: user,
});

/* on fail action */
export interface LoginOnFailAction {
	type: typeof types.LOGIN_ON_FAIL;
	payload: string;
	error: boolean;
}

export const loginOnFail = (error: string): LoginOnFailAction => ({
	type: types.LOGIN_ON_FAIL,
	payload: error,
	error: true,
});
