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
	type: typeof types.LOGOUT_ONSUCCESS;
	payload: string;
}

export const logoutOnSuccess = (id: string): LogoutOnSuccessAction => ({
	type: types.LOGOUT_ONSUCCESS,
	payload: id,
});

/* on fail action */
export interface LogoutOnFailAction {
	type: typeof types.LOGOUT_ONFAIL;
	payload: string;
	error: boolean;
}

export const logoutOnFail = (error: string): LogoutOnFailAction => ({
	type: types.LOGOUT_ONFAIL,
	payload: error,
	error: true,
});
