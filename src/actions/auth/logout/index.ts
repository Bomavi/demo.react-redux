/* local imports: common */
import * as types from './../types';

/* initial action */
export interface LogoutAction {
	type: typeof types.LOGOUT;
}

export const logout = (): LogoutAction => ({
	type: types.LOGOUT,
});

/* on success action */
export interface LogoutOnSuccessAction {
	type: typeof types.LOGOUT_ON_SUCCESS;
}

export const logoutOnSuccess = (): LogoutOnSuccessAction => ({
	type: types.LOGOUT_ON_SUCCESS,
});

/* on fail action */
export interface LogoutOnFailAction {
	type: typeof types.LOGOUT_ON_FAIL;
	payload: string;
	error: boolean;
}

export const logoutOnFail = (error: string): LogoutOnFailAction => ({
	type: types.LOGOUT_ON_FAIL,
	payload: error,
	error: true,
});
